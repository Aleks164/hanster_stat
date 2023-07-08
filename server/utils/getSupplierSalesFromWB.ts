import fetch from "node-fetch";
import { SalesItem } from "../../commonTypes/api";
import "dotenv/config";

async function getSupplierSalesFromWB() {

  try {
    const responseJson = await fetch(
      `https://statistics-api.wildberries.ru/api/v1/supplier/sales?dateFrom=2022-01-01`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: process.env.STATISTICS_API as string,
        },
      }
    );
    const salesListFromWB = (await responseJson.json()) as SalesItem[];
    return salesListFromWB;
  } catch (err) {
    console.log(err);
  }
}

export default getSupplierSalesFromWB;
