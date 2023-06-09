
import fetch from 'node-fetch';
import { SalesItem } from "../../src/api";
import 'dotenv/config';

async function getSalesListFromWB(dateFrom: string, flag = 0) {
    try {
        const quveryDate = dateFrom.replace('.', '-');
        const quveryFlag = flag ? "&flag=1" : '';
        const responseJson = await fetch(
            `https://statistics-api.wildberries.ru/api/v1/supplier/sales?dateFrom=${quveryDate + quveryFlag}`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: process.env.STATISTICS_API as string
                },
            }
        );
        const salesListFromWB = (await responseJson.json()) as SalesItem[];
        return salesListFromWB;
    }
    catch (err) {
        console.log(err);
    }
}

export default getSalesListFromWB;