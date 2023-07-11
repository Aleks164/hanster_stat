import express from "express";
import SupplierOrders from "../model/supplierOrders";
import getSupplierOrdersFromWB from "../utils/getSupplierOrdersFromWB";

const updateSupplierOrders = express.Router();

updateSupplierOrders.get("/", async (req, res, next) => {

    const salesListFromWB = await getSupplierOrdersFromWB();
    try {
        const sale = await SupplierOrders.create(salesListFromWB);
        res.status(200).json(sale);
    } catch (e) {
        res.status(400).json("Bad request");
    }
});

export default updateSupplierOrders;
