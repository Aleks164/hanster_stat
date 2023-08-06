import { PATH_NAMES } from "@/requestDataHelpers/getDataByDateRange";

async function onSetData<T>(
    pathName: PATH_NAMES,
    queryParams: {
        fromDate: string;
        toDate: string;
    }, setData: React.Dispatch<React.SetStateAction<T>>,
    requestDataHandler: (pathName: PATH_NAMES, queryParams: {
        fromDate: any;
        toDate: any;
    }) => Promise<Response>
) {
    try {
        const [responseReports, responseOrders, responseStocks] = await Promise.all([requestDataHandler(PATH_NAMES.REPORT_DETAILS, queryParams), requestDataHandler(PATH_NAMES.ORDERS, queryParams), requestDataHandler(PATH_NAMES.STOCKS, queryParams)])
        const reportDetails = await responseReports.json();
        const orders = await responseOrders.json();
        const stocks = await responseStocks.json();
        if (!reportDetails || !orders || !stocks) return;
        const mergeData = {};
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
            else
                mergeData[barcode] = item;
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