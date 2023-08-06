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
            '$group': {
                '_id': '$barcode',
                'quantityOnStock': {
                    '$push': '$quantity'
                },
                'retail_price': {
                    '$push': '$price' //Цена розничная
                },
                'sale_percent': {
                    '$push': '$discount' //Согласованная скидка
                },
                'subject_name': {
                    '$first': '$subject' //Предмет
                },
                'daysOnSite': {
                    '$first': '$daysOnSite' //Дней на сайте
                },
                'sa_name': {
                    '$first': '$supplierArticle' //Артикул продавца
                },
                'ts_name': {
                    '$first': '$techSize' //Размер
                }
            }
        }, {
            '$sort': {
                '_id': 1
            }
        }
    ]
}