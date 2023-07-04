import { DatesMapType } from "../controller/salesByDateCount"

export default function getSaleCountMatchLogic({ from_Y, from_M, from_D, to_Y, to_M, to_D }: DatesMapType) {
    if (from_M === to_M) return {
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
    const lastDateOfMonth = new Date(+from_Y, +from_M, 0).getDate();
    return {
        '$or': [
            {
                '$and': [
                    {
                        'month': {
                            '$eq': from_M
                        }
                    }, {
                        'day': {
                            '$gte': from_D,
                            '$lte': `${lastDateOfMonth}`
                        }
                    }
                ]
            }, {
                '$and': [
                    {
                        'month': {
                            '$eq': to_M
                        }
                    }, {
                        'day': {
                            '$gte': '01',
                            '$lte': to_D
                        }
                    }
                ]
            }
        ]
    }
}