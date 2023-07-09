import fetch from "node-fetch";
import { DetailReportItem } from "../../commonTypes/api";
import "dotenv/config";

async function getSupplierReportDetailByPeriod() {

  try {
    const responseJson = await fetch(
      `https://statistics-api.wildberries.ru/api/v1/supplier/reportDetailByPeriod?dateFrom=2022-01-01&dateTo=2023-07-09`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: process.env.STATISTICS_API as string,
        },
      }
    );
    const salesListFromWB = (await responseJson.json()) as DetailReportItem[];
    return salesListFromWB;
  } catch (err) {
    console.log(err);
  }
}

export default getSupplierReportDetailByPeriod;
