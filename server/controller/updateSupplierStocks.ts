import express from "express";
import getSupplierStocksFromWB from "../utils/fromWB/getSupplierStocksFromWB";
import SupplierStocks from "../model/SupplierStocks";

const updateSupplierStocks = express.Router();

updateSupplierStocks.get("/", async (req, res, next) => {

    const salesListFromWB = await getSupplierStocksFromWB();
    try {
        const sale = await SupplierStocks.create(salesListFromWB);
        res.status(200).json(sale);
    } catch (e) {
        res.status(400).json("Bad request");
    }
});

export default updateSupplierStocks;
