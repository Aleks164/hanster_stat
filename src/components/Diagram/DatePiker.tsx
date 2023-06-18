import React, { useEffect, useMemo, useState } from "react";
import { Button, DatePicker, Row, Space, Tabs, TabsProps, message } from "antd";
import dayjs from "dayjs";
import { SetSalesCountByDateType } from ".";
import weekday from "dayjs/plugin/weekday";
import getCollection from "./getSaleCountByDateCollection";
dayjs.extend(weekday);

const dateFormat = "YYYY-MM-DD";
function DatePiker({
  setSalesCountByDate,
}: {
  setSalesCountByDate: SetSalesCountByDateType;
}) {
  const [date, setDate] = useState<dayjs.Dayjs | null>(dayjs());
  const [calendarType, setCalendarType] = useState<"month" | "week">("week");
  const [messageApi, contextHolder] = message.useMessage();

  const changeDate = (value: dayjs.Dayjs | null, dateString: string) => {
    if (!value) return;
    setDate(value);
  };

  const toggleCalendarType = () => {
    if (calendarType === "month") {
      setCalendarType("week");
    } else {
      setCalendarType("month");
    }
  };

  const getButtonStyle = (ButtonKey: "month" | "week") => {
    if (ButtonKey === calendarType)
      return {
        color: "#1677ff",
        borderColor: "#1677ff",
        margin: "0px 5px",
      };
    return {
      margin: "0px 5px",
    };
  };

  useEffect(() => {
    if (!date) return;
    if (calendarType === "month") {
      const month = date.month();
      const year = date.year();
      const lastDayOfMonth = dayjs(new Date(year, month + 1, 0)).format(
        dateFormat
      );
      const firstDayOfMonth = dayjs(new Date(year, month, 1)).format(
        dateFormat
      );
      console.log(lastDayOfMonth);
      getCollection(
        firstDayOfMonth,
        lastDayOfMonth,
        setSalesCountByDate,
        messageApi
      );
    } else if (calendarType === "week") {
      const from = date.weekday(1).format(dateFormat);
      const to = date.weekday(7).format(dateFormat);
      console.log(from, to);
      getCollection(from, to, setSalesCountByDate, messageApi);
    }
  }, [calendarType, date]);

  return (
    <Space direction="vertical" size="middle" style={{ display: "flex" }}>
      {contextHolder}
      <Row
        style={{ display: "flex", justifyContent: "center", width: "285px" }}
      >
        <Button onClick={toggleCalendarType} style={getButtonStyle("week")}>
          Недели
        </Button>
        <Button onClick={toggleCalendarType} style={getButtonStyle("month")}>
          Месяца
        </Button>
      </Row>
      <Row>
        <DatePicker
          value={date}
          open
          onChange={changeDate}
          picker={calendarType}
        />
      </Row>
    </Space>
  );
}

export default DatePiker;
