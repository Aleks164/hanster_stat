import { dateFormat, calendarTypes } from "@/constants";
import { CalendarType } from "@/types";
import dayjs from "dayjs";

function getCurrentDateByCalendarType(currentCalendarType: CalendarType, date: dayjs.Dayjs | [dayjs.Dayjs, dayjs.Dayjs]) {
    let currentDateByCalendarType: dayjs.Dayjs | [dayjs.Dayjs, dayjs.Dayjs];
    let onChangeArguments: [string, string];
    switch (currentCalendarType) {
        case "date":
        case "month":
        case "week": {
            if (Array.isArray(date)) currentDateByCalendarType = date[0];
            else currentDateByCalendarType = date;
            onChangeArguments = [currentDateByCalendarType.format(dateFormat),
            currentDateByCalendarType.format(dateFormat)]
                ;
            break;
        }
        case "range": {
            if (Array.isArray(date))
                currentDateByCalendarType = [date[0].weekday(1), date[0].weekday(7)];
            else currentDateByCalendarType = [date.weekday(1), date.weekday(7)];
            onChangeArguments = [currentDateByCalendarType[0].format(dateFormat),
            currentDateByCalendarType[1].format(dateFormat)];
            break;
        }
        default: {
            currentDateByCalendarType = dayjs();
            onChangeArguments = [currentDateByCalendarType.format(dateFormat),
            currentDateByCalendarType.format(dateFormat)];
        }
    }
    return { currentDateByCalendarType, onChangeArguments }
}


export default getCurrentDateByCalendarType;