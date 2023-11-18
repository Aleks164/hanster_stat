import React, { useCallback, useState } from "react";
import { Row } from "antd";
import DataTable from "@/components/DataTable/Index";
import DatePiker from "@/components/DatePicker/DatePiker";
import ExcelImporter from "@/components/ExcelImporter";
import CurrentDate from "./CurrentDate";
import getCategoriesByDateRange from "@/requestDataHelpers/getCategoriesByDateRange";
import onSetData, { TableStatRowInfoType } from "./onSetData";
import { getColumns } from "@/constants/columns/getColumns";
import { useStatStore } from "@/store/useStatStore";
import { dateFormat } from "@/constants";
import dayjs from "dayjs";
import {
  $chosenProducts,
  $calendarDate,
  setCalendarDate,
  setChosenProducts,
} from "@/store";
import { useStore } from "effector-react";

function TabTables() {
  const [itemsList, setItemsList] = useState<TableStatRowInfoType[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const chosenProducts = useStore($chosenProducts);
  const [firstDate, secondDate] = useStore($calendarDate);
  const onSetDataHandler = useCallback(
    (fromDate: string, toDate: string) =>
      onSetData(
        { fromDate, toDate },
        setItemsList,
        getCategoriesByDateRange,
        setIsLoading
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
          fileName={dayjs(new Date()).format(dateFormat)}
        />
      </Row>
      <Row style={{ marginTop: 10 }} gutter={4}>
        <DataTable
          itemsList={itemsList}
          columns={getColumns({ chosenProducts })}
          loading={isLoading}
        />
      </Row>
    </div>
  );
}

export default TabTables;
