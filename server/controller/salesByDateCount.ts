import express from "express";
import Sale from "../model/sale";

const salesByDateCount = express.Router();

salesByDateCount.get("/", async (req, res, next) => {
    const [from_Y, from_M, from_D] = (req.query["from"] as string).split('-');
    const [to_Y, to_M, to_D] = (req.query["to"] as string).split('-');
    try {
        if (!(from_Y && from_M && from_D && to_Y && to_M && to_D)) throw new Error("Bad request");
        if (from_M === to_M) {
            console.log(from_M, from_D, to_M, to_D, typeof from_M, typeof from_D, typeof to_M, typeof to_D);
            const saleCount = await Sale.aggregate([
                {
                    '$project': {
                        'year': {
                            '$substr': [
                                '$date', 0, 4
                            ]
                        },
                        'month': {
                            '$substr': [
                                '$date', 5, 2
                            ]
                        },
                        'day': {
                            '$substr': [
                                '$date', 8, 2
                            ]
                        },
                        'fullDate': {
                            '$substr': [
                                '$date', 0, 10
                            ]
                        }
                    }
                }, {
                    '$match': {
                        '$and': [
                            {
                                'month': {
                                    '$eq': from_M
                                }
                            }, {
                                'day': {
                                    '$gte': from_D,
                                    '$lte': to_D
                                }
                            }
                        ]
                    }
                }, {
                    '$group': {
                        '_id': '$fullDate',
                        'sale': {
                            '$sum': 1
                        },
                        'name': {
                            '$first': '$fullDate'
                        }
                    }
                }, {
                    '$sort': {
                        'name': 1
                    }
                }
            ]).exec();
            res.status(200).json(saleCount);
        }
        else res.status(400).json("Bad request");
    } catch (e) {
        res.status(400).json("Bad request");
    }
});

export default salesByDateCount;
