import express from "express";
import SupplierReportDetailByPeriod from "../model/supplierReportDetailByPeriod";
import getSupplierReportDetailByPeriod from "../utils/getSupplierReportDetailByPeriod";

const updateSupplierReportDetailByPeriod = express.Router();

updateSupplierReportDetailByPeriod.get("/", async (req, res, next) => {

    const salesListFromWB = await getSupplierReportDetailByPeriod();
    try {
        const sale = await SupplierReportDetailByPeriod.create(salesListFromWB);
        res.status(200).json(sale);
    } catch (e) {
        res.status(400).json("Bad request");
    }
});

export default updateSupplierReportDetailByPeriod;