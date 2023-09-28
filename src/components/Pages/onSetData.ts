import { PATH_NAMES } from "@/requestDataHelpers/getDataByDateRange";

interface ReportDetailsType {
    _id: string;
    retail_price: number[];
    sale_percent: number[];
    retail_price_withdisc_rub: number[];
    delivery_rub: number[];
    ppvz_for_pay: number[];
    subject_name: string;
    sa_name: string;
    ts_name: string;
}

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
    requestDataHandler: (pathName: PATH_NAMES, queryParams: {
        fromDate: any;
        toDate: any;
    }) => Promise<Response>
) {
    try {
        const [responseReports, responseOrders, responseStocks] = await Promise.all([requestDataHandler(PATH_NAMES.REPORT_DETAILS, queryParams), requestDataHandler(PATH_NAMES.ORDERS, queryParams), requestDataHandler(PATH_NAMES.STOCKS, queryParams)])
        const reportDetails = await responseReports.json() as ReportDetailsType[];
        const orders = await responseOrders.json() as OrdersType[];
        const stocks = await responseStocks.json() as StocksType[];
        if (!reportDetails || !orders || !stocks) return;
        const mergeData = {} as TableStatRowsInfoByBarcodeMapType;
        reportDetails.forEach(item => {
            const barcode = item._id;
            mergeData[barcode] = item;
        });
        stocks.forEach(item => {
            const barcode = item._id;
            if (mergeData[barcode]) {
                mergeData[barcode].daysOnSite = item.daysOnSite;
                mergeData[barcode].quantityOnStock = item.quantityOnStock;
            }
        });
        orders.forEach(item => {
            const barcode = item._id;
            if (mergeData[barcode]) mergeData[barcode].ordersCount = item.ordersCount;
            else
                mergeData[barcode] = item;
        });
        console.log(mergeData)
        setData(Object.values(mergeData));
    }
    catch (e) {
        console.log(e)
    }
}

export default onSetData;