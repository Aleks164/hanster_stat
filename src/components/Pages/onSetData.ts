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
    const newData = await requestDataHandler(pathName, queryParams);
    const parsedData = (await newData.json()) as T;
    setData(parsedData);
}

export default onSetData;