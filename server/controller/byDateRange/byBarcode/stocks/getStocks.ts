import { PipelineStage } from "mongoose";
import { getNextDayDate } from "../../../../utils/getNextDayDate";

export default function getStockDataByDateRange(fromDate: string, toDate: string): PipelineStage[] {
    return [
        {
            '$match': {
                'lastChangeDate': {
                    '$gte': new Date(fromDate),
                    '$lte': fromDate === toDate ? getNextDayDate(toDate) : new Date(toDate)
                }
            }
        }, {
            '$project': {
                "barcode": 1,
                "supplierArticle": 1,
                "techSize": 1,
                "quantity": 1,
                "quantityFull": 1,
                "nmId": 1,
                "subject": 1,
                "category": 1,
                "daysOnSite": 1,
                "brand": 1,
                "price": 1,
                "discount": 1,
                "lastChangeDate": 1,
            }
        }, {
            '$sort': {
                'lastChangeDate': 1
            }
        }
    ]
}