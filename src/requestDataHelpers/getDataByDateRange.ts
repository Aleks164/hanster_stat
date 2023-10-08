const HOST_NAME = 'http://5.188.116.205:3000';
export enum PATH_NAMES {
    SALES = 'sales', ORDERS = 'orders', STOCKS = 'stocks', REPORT_DETAILS = 'reports'
}

function getDataByDateRange(pathName: PATH_NAMES, queryParams?: { fromDate: any; toDate: any; }) {
    if (!queryParams) return fetch(`${HOST_NAME}/${pathName}`, {
        method: "GET",
    });
    const { fromDate, toDate } = queryParams;
    return fetch(`${HOST_NAME}/${pathName}?fromDate=${fromDate}&toDate=${toDate}`, {
        method: "GET",
    })
}

export default getDataByDateRange;

