import { PipelineStage } from "mongoose";

export default function getSalesByDateRange(fromDate: string, toDate: string): PipelineStage[] {

    return [
        {
            '$match': {
                'date': {
                    '$gte': new Date(fromDate),
                    '$lte': new Date(toDate)
                }
            }
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