import { DatesMapType } from "../controller/salesByDateCount"

export default function getSaleCountMatchLogic({ from_Y, from_M, from_D, to_Y, to_M, to_D, fromDate, toDate }: DatesMapType) {
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
    const lastDateOfMonth = new Date(+from_Y, +from_M + 1, 0).getDate();
    const lastFullDateOfMonth = `${from_Y}-${from_M}-${lastDateOfMonth}`;
    return {
        '$or': [{
            '$and': [
                {
                    'month': {
                        '$eq': from_M
                    }
                }, {
                    'day': {
                        '$gte': from_D,
                        '$lte': lastFullDateOfMonth
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
                        '$gte': from_D,
                        '$lte': lastFullDateOfMonth
                    }
                }
            ]
        }]
    }
}