import express from "express";
import Sale from "../model/sale";

const salesByDateCount = express.Router();

salesByDateCount.get("/", async (req, res, next) => {
    try {
        const sale = await Sale.aggregate([
            {
                "$project": {
                    "saleInDate": { "$substr": ["$date", 0, 10] }
                    {
                $and: [{ $eq: { "$substr": ["$date", 0, 4] } },
                { $gte: { "$substr": ["$date", 5, 7] } }]
            }
                    "saleInDate": { "$substr": ["$date", 0, 10] }
                }
            },
    {
        "$group": {
            "_id": "$saleInDate",
            "n": { $sum: 1 }
        }
    }
        ]).exec();
res.status(200).json(sale);
    } catch (e) {
    res.status(400).json("Bad request");
}
});

export default salesByDateCount;
