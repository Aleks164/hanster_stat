import { PATH_NAMES } from "@/requestDataHelpers/getDataByDateRange";

export const calendarTypes = ["month", "week", "date", "range"] as const;
export const datePickerDictionary = {
    month: "Месяц",
    week: "Неделя",
    date: "День",
    range: "Диапазон",
};
export const pathNameDictionary: Record<PATH_NAMES, string> = {
    [PATH_NAMES.SALES]: 'Продажи',
    [PATH_NAMES.STOCKS]: "Склад",
    [PATH_NAMES.REPORT_DETAILS]: "Отчет о продажах по реализации",
    [PATH_NAMES.ORDERS]: "Заказы"
};
export const dateFormat = "YYYY-MM-DD";