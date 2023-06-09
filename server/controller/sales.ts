import express from "express";
import Sale from '../model/sale';

const saleRouter = express.Router();

saleRouter.get('/', async (req, res, next) => {
    const date = req.query['date'] as string;
    if (!date) return next();
    const finderRegex = new RegExp(`^${date}`);
    try {
        const sale = await Sale.find({ date: { $regex: finderRegex } }).exec();
        res.status(200).json(sale);
    } catch (e) {
        res.status(400).json('Bad request');
    }
});

export default saleRouter;