import express from "express";
import SupplierSales from "../model/supplierSales";
import getStockDataByDateRange from "../utils/fromMongoDB/getStockDataByDateRange";

export type DatesMapType = {
    from_Y: string;
    from_M: string;
    from_D: string;
    to_Y: string;
    to_M: string;
    to_D: string;
    fromDate: string;
    toDate: string;
}

const stocksByDateRange = express.Router();

stocksByDateRange.get("/", async (req, res, next) => {
    const fromDate = req.query["fromDate"] as string;
    const toDate = req.query["toDate"] as string;
    try {
        if (!(fromDate && toDate)) throw new Error("Wrong date");
        const saleCount = await SupplierSales.aggregate(getStockDataByDateRange(fromDate, toDate)).exec();
        res.status(200).json(saleCount);
    } catch (e) {
        res.status(400).json("Bad request");
    }
});

export default stocksByDateRange;
