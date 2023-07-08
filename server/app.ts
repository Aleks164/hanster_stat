import express from "express";
import connectToDB from "./utils/connectToDB";
import saleRouter from "./controller/sales";
import cors from "cors";
import salesByDateCount from "./controller/salesByDateCount";
import updateSupplierStocks from "./controller/updateSupplierStocks";

const app = express();
const port = 3000;

app.use(cors());
app.use("/sales", saleRouter);
app.use("/sales_by_date", salesByDateCount);
app.use("/supplier_stocks", updateSupplierStocks);

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
