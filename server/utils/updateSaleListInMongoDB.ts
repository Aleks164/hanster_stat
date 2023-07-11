import SupplierSales from "../model/supplierSales";
import getSalesListFromWB from "./getSalesListFromWB";
import "dotenv/config";

async function updateSaleListInMongoDB(dateFrom: string, flag: 0 | 1) {
  const salesListFromWB = await getSalesListFromWB(dateFrom, flag);
  try {
    const sale = await SupplierSales.create(salesListFromWB);
    console.log(sale);
  } catch (e) {
    console.log(e);
  }
}

export default updateSaleListInMongoDB;
