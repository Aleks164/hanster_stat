import express from "express";
import SupplierSales from "../model/supplierSales";
import getSalesByDateRange from "../utils/getSalesByDateRange";

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

const salesByDateCount = express.Router();

salesByDateCount.get("/", async (req, res, next) => {
    const fromDate = req.query["from"] as string;
    const toDate = req.query["to"] as string;
    try {
        if (!(fromDate && toDate)) throw new Error("Wrong date");
        const saleCount = await SupplierSales.aggregate(getSalesByDateRange(fromDate, toDate)).exec();
        res.status(200).json(saleCount);
    } catch (e) {
        res.status(400).json("Bad request");
    }
});

export default salesByDateCount;
