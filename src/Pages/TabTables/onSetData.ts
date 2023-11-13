import { PATH_NAMES } from "@/requestDataHelpers/getCategoriesByDateRange";
import { SetCalendarDateType } from "@/store/StatStoreContext";

interface ReportDetailsType {
    _id: string;
    retail_price: number[];
    sale_percent: number[];
    retail_price_withdisc_rub: number[];
    delivery_rub: number[];
    ppvz_for_pay: number[];
    quantity: number[]
    subject_name: string;
    sa_name: string;
    ts_name: string;
}

type ReportDetailsKeysType = keyof ReportDetailsType;

interface StocksType {
    _id: string;
    quantityOnStock: number[];
    retail_price: number[];
    sale_percent: number[];
    daysOnSite: number[]
    subject_name: string;
    sa_name: string;
    ts_name: string;
}

interface OrdersType {
    _id: string;
    ordersCount: number;
}

export type TableStatRowInfoType = Partial<ReportDetailsType & StocksType & OrdersType>;
export type TableStatRowsInfoByBarcodeMapType = Record<string, TableStatRowInfoType>

async function onSetData(
    queryParams: {
        fromDate: string;
        toDate: string;
    }, setData: React.Dispatch<React.SetStateAction<TableStatRowInfoType[]>>,
    requestDataHandler: (pathName: PATH_NAMES, queryParams?: {
        fromDate: any;
        toDate: any;
    }) => Promise<Response>,
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
    setCalendarDate: SetCalendarDateType
) {
    try {
        setIsLoading(true);
        setCalendarDate([queryParams.fromDate, queryParams.toDate])
        const [responseReports, responseOrders, responseStocks] = await Promise.all([requestDataHandler(PATH_NAMES.REPORT_DETAILS, queryParams), requestDataHandler(PATH_NAMES.ORDERS, queryParams), requestDataHandler(PATH_NAMES.STOCKS)])
        const reportDetails = await responseReports.json() as ReportDetailsType[];
        const orders = await responseOrders.json() as OrdersType[];
        const stocks = await responseStocks.json() as StocksType[];
        if (!reportDetails || !orders || !stocks) return;
        const mergeData = {} as Record<any, any>;
        reportDetails.forEach(item => {
            const barcode = item._id;
            const reducedItem = {} as Record<ReportDetailsKeysType, any>;

            for (const [key, value] of Object.entries(item)) {
                if (Array.isArray(value)) {
                    const filteredValue = value.filter(el => +el && +el);
                    reducedItem[key as ReportDetailsKeysType] = filteredValue.length ? (filteredValue.reduce((prevValue, currentValue) =>
                        prevValue + currentValue, 0) / getDivider(key, filteredValue.length)).toFixed(2) : 0;
                }
                else reducedItem[key as ReportDetailsKeysType] = value;
            }
            mergeData[barcode] = reducedItem;
        });
        stocks.forEach(item => {
            const barcode = item._id;
            if (mergeData[barcode]) {
                mergeData[barcode].quantityOnStock = item.quantityOnStock.reduce((prevValue, currentValue) =>
                    prevValue + currentValue, 0);
            }
        });
        orders.forEach(item => {
            const barcode = item._id;
            if (mergeData[barcode]) mergeData[barcode].ordersCount = item.ordersCount;
        });

        setData(Object.values(mergeData));
        setIsLoading(false);
    }
    catch (e) {
        setIsLoading(false);
        console.log(e)
    }
}

function getDivider(key: string, listLength: number) {
    switch (key) {
        case 'quantity':
            {
                return 1;
            }
        default: return listLength;
    }
}

export default onSetData;