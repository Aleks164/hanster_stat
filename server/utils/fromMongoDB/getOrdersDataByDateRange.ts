import { PipelineStage } from "mongoose";
import { getNextDayDate } from "../getNextDayDate";

export default function getOrdersDataByDateRange(fromDate: string, toDate: string): PipelineStage[] {
    return [
        {
            '$match': {
                'date': {
                    '$gte': new Date(fromDate),
                    '$lte': fromDate === toDate ? getNextDayDate(toDate) : new Date(toDate)
                }
            }
        }, {
            '$project': {
                'gNumber': 1,
                'date': 1,
                'barcode': 1
            }
        }, {
            '$sort': {
                'date': 1
            }
        }
    ]
}