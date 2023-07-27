import { PipelineStage } from "mongoose";
import { getNextDayDate } from "../getNextDayDate";

export default function getReportDetailByDateRange(fromDate: string, toDate: string): PipelineStage[] {
    return [
        {
            '$match': {
                'date_from': {
                    '$gte': new Date(fromDate),
                    '$lte': fromDate === toDate ? getNextDayDate(toDate) : new Date(toDate)
                }
            }
        }, {
            '$project': {
                "date_from": 1,
                "date_to": 1,
                "barcode": 1,
                "retail_price": 1,
                "quantity": 1,
                "quantityFull": 1,
                "retail_amount": 1,
                "sale_percent": 1,
                "commission_percent": 1,
                "retail_price_withdisc_rub": 1,
                "delivery_amount": 1,
                "return_amount": 1,
                "delivery_rub": 1,
                "rid": 1,
                "ppvz_spp_prc": 1,
                "ppvz_for_pay": 1,
            }
        }, {
            '$sort': {
                'date_from': 1
            }
        }
    ]
}