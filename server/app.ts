import express from "express";
import cors from "cors";
import connectToDB from "./utils/connectToDB";
import updateSupplierStocks from "./controller/updateSupplierStocks";
import updateSupplierOrders from "./controller/updateSupplierOrders";
import updateSupplierSales from "./controller/updateSupplierSales";
import updateSupplierReportDetailByPeriod from "./controller/updateSupplierReportDetailByPeriod";
import ordersByDateRange from "./controller/byDateRange/byBarcode/orders";
import reportDetailsByDateRange from "./controller/byDateRange/byBarcode/reportDetails";
import salesByDateRange from "./controller/byDateRange/byBarcode/sales";
import stocksByDateRange from "./controller/byDateRange/byBarcode/stocks";

const app = express();
const port = 3000;

app.use(cors());
// app.use("/sales", getSalesByDate);
// app.use("/sales_by_date", salesByDateCount);

// app.use("/sales", salesByDateRange);
app.use("/orders", ordersByDateRange);
// app.use("/stocks", stocksByDateRange);
app.use("/reports", reportDetailsByDateRange);

app.use("/supplier_stocks", updateSupplierStocks);
app.use("/supplier_orders", updateSupplierOrders);
app.use("/supplier_sales", updateSupplierSales);
app.use("/supplier_reportDetailByPeriod", updateSupplierReportDetailByPeriod);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("*", (req, res) => {
  res.status(404).send("Sorry, cant find that");
});

app.listen(port, async () => {
  await connectToDB();
  console.log(`Example app listening on port ${port}`);
});
