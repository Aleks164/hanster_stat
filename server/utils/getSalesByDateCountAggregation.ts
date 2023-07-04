import { PipelineStage } from "mongoose";
import { DatesMapType } from "../controller/salesByDateCount";
import getSaleCountMatchLogic from "./getSaleCountMatchLogic";

export default function getSalesByDateCountAggregation(datesMap: DatesMapType): PipelineStage[] {

    return [
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
            '$match': getSaleCountMatchLogic(datesMap)
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
    ]
}