
import { calendarTypes, datePickerDictionary, dateFormat } from "@/constants";
import {
  PATH_NAMES,
} from "@/requestDataHelpers/getDataByDateRange";
import dayjs from "dayjs";
declare module "*.svg" {
  const content: any;
  export default content;
}

declare module '*.jpg';

export type CalendarType = (typeof calendarTypes)[number];
export type DatePikerParamsType = {
  onSetData?: (fromDate: string, toDate: string) => void,
  currentTab: PATH_NAMES

};

export type DateTypeByCalendarType<T> = T extends "range"
  ? [dayjs.Dayjs, dayjs.Dayjs]
  : dayjs.Dayjs;
export type DateStringTypeByCalendarType<T> = T extends "range"
  ? string
  : [string, string];