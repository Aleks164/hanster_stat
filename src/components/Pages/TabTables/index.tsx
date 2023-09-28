import getDataByDateRange from "@/requestDataHelpers/getDataByDateRange";
import React, { useCallback, useState } from "react";
import { SalesItem } from "../../../../commonTypes/api";
import onSetData, { TableStatRowInfoType } from "../onSetData";
import { Row } from "antd";
import DataTable from "@/components/DataTable/Index";
import DatePiker from "@/components/DatePicker/DatePiker";
import { reportDetailColumns } from "@/constants/columns/reportDetailColumns";

function TabTables() {
  const [itemsList, setItemsList] = useState<TableStatRowInfoType[]>([]);

  const onSetDataHandler = useCallback(
    (fromDate: string, toDate: string) =>
      onSetData({ fromDate, toDate }, setItemsList, getDataByDateRange),
    []
  );
  return (
    <div style={{ marginTop: 10 }}>
      <Row>
        <DatePiker onSetData={onSetDataHandler} />
      </Row>
      <Row style={{ marginTop: 10 }} gutter={4}>
        <DataTable itemsList={itemsList} columns={reportDetailColumns} />
      </Row>
    </div>
  );
}

export default TabTables;
