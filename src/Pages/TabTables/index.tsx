import getDataByDateRange from "@/requestDataHelpers/getDataByDateRange";
import React, { useCallback, useState } from "react";
import onSetData, { TableStatRowInfoType } from "./onSetData";
import { reportDetailColumns } from "@/constants/columns/reportDetailColumns";
import { Row } from "antd";
import DataTable from "@/components/DataTable/Index";
import DatePiker from "@/components/DatePicker/DatePiker";
import ExcelImporter from "@/components/ExcelImporter";
import { useStatStore } from "@/store/useStatStore";
import dayjs from "dayjs";
import CurrentDate from "./CurrentDate";

function TabTables() {
  const [itemsList, setItemsList] = useState<TableStatRowInfoType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const {
    chosenProducts,
    calendarDate: [firstDate, secondDate],
    setChosenProducts,
    setCalendarDate,
  } = useStatStore();

  const onSetDataHandler = useCallback(
    (fromDate: string, toDate: string) =>
      onSetData(
        { fromDate, toDate },
        setItemsList,
        getDataByDateRange,
        setIsLoading,
        setCalendarDate
      ),
    []
  );
  return (
    <div style={{ marginTop: 10 }}>
      <Row>
        <DatePiker onSetData={onSetDataHandler} />
        <CurrentDate firstDate={firstDate} secondDate={secondDate} />
        <ExcelImporter
          data={itemsList}
          fileName={dayjs(new Date()).format("YYYY-MM-DD")}
        />
      </Row>
      <Row style={{ marginTop: 10 }} gutter={4}>
        <DataTable
          itemsList={itemsList}
          columns={reportDetailColumns}
          loading={isLoading}
        />
      </Row>
    </div>
  );
}

export default TabTables;
