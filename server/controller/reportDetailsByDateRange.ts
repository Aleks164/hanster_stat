import express from "express";
import getReportDetailByDateRange from "../utils/fromMongoDB/getReportDetailByDateRange";
import SupplierReportDetailByPeriod from "../model/supplierReportDetailByPeriod";

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

const reportDetailsByDateRange = express.Router();

reportDetailsByDateRange.get("/", async (req, res, next) => {
    const fromDate = req.query["fromDate"] as string;
    const toDate = req.query["toDate"] as string;
    try {
        if (!(fromDate && toDate)) throw new Error("Wrong date");
        const saleCount = await SupplierReportDetailByPeriod.aggregate(getReportDetailByDateRange(fromDate, toDate)).exec();
        res.status(200).json(saleCount);
    } catch (e) {
        res.status(400).json("Bad request");
    }
});

export default reportDetailsByDateRange;
