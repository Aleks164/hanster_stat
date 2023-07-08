import express from "express";
import SupplierSales from "../model/supplierSales";
import getSalesByDateCountAggregation from "../utils/getSalesByDateCountAggregation";

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
    const [from_Y, from_M, from_D] = fromDate.split('-');
    const [to_Y, to_M, to_D] = toDate.split('-');
    const dates: DatesMapType = { from_Y, from_M, from_D, to_Y, to_M, to_D, fromDate, toDate };
    try {
        if (!(from_Y && from_M && from_D && to_Y && to_M && to_D)) throw new Error("Wrong date");
        const saleCount = await SupplierSales.aggregate(getSalesByDateCountAggregation(dates)).exec();
        res.status(200).json(saleCount);
    } catch (e) {
        res.status(400).json("Bad request");
    }
});

export default salesByDateCount;
