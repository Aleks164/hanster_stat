import { PATH_NAMES } from "@/requestDataHelpers/getDataByDateRange";

export const calendarTypes = ["month", "week", "date", "range"] as const;
export const datePickerDictionary = {
    month: "Месяц",
    week: "Неделя",
    date: "День",
    range: "Диапазон",
};
export const pathNameDictionary = {
    [PATH_NAMES.SALES]: 'Продажи',
    [PATH_NAMES.STOCKS]: "Склад",
    [PATH_NAMES.ORDERS]: "Заказы"
};
export const dateFormat = "YYYY-MM-DD";