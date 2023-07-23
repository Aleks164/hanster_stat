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
    console.log(1)
    try {
        const newData = await requestDataHandler(pathName, queryParams);
        const parsedData = (await newData.json()) as T;
        setData(parsedData);
    }
    catch (e) {
        console.log(e)
    }
}

export default onSetData;