import express from "express";
import Sale from "../model/sale";

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
    const dates = { from_Y, from_M, from_D, to_Y, to_M, to_D, fromDate, toDate };
    try {
        if (!(from_Y && from_M && from_D && to_Y && to_M && to_D)) throw new Error("Wrong date");
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
