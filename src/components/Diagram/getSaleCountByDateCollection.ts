import { MessageInstance } from "antd/es/message/interface";
import { SalesCountByDateType } from ".";

const getCollection = async (from: string, to: string, setSalesCountByDate: (value: React.SetStateAction<SalesCountByDateType>) => void, messageApi: MessageInstance) => {
    try {
        const resp = await fetch(
            `http://localhost:3000/sales_by_date?from=${from}&to=${to}`
        );
        const items = await resp.json() as SalesCountByDateType;
        setSalesCountByDate(items);
    } catch (err) {
        messageApi.open({
            type: "error",
            content: (err as Error).message,
        });
    }
};

export default getCollection;