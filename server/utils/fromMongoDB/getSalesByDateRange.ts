import { PipelineStage } from "mongoose";

export default function getSalesByDateRange(fromDate: string, toDate: string): PipelineStage[] {
    console.log(fromDate, toDate)
    const match = fromDate === toDate ? {
        'date': {
            '$eq': new Date(fromDate)
        }
    } : {
        'date': {
            '$gte': new Date(fromDate),
            '$lte': new Date(toDate)
        }
    }
    return [
        {
            '$match': match
        }, {
            '$project': {
                'gNumber': 1,
                'date': 1,
                'discountPercent': 1,
                'spp': 1,
                'forPay': 1,
                'finishedPrice': 1,
                'priceWithDisc': 1,
                'barcode': 1
            }
        }, {
            '$sort': {
                'date': 1
            }
        }
    ]
}