const HOST_NAME = 'http://localhost:3000';
export enum PATH_NAMES { SALES = 'sales' }

function getDataByDateRange(pathName: PATH_NAMES, queryParams: { fromDate: any; toDate: any; }) {
    const { fromDate, toDate } = queryParams;
    return fetch(`${HOST_NAME}/${pathName}?fromDate=${fromDate}&toDate=${toDate}`, {
        method: "GET",
    })
}

export default getDataByDateRange;

