import React, { useCallback, useState } from "react";
import { Row, Table } from "antd";
import { ColumnsType } from "antd/es/table";
import { SalesItem } from "../../../../commonTypes/api";
import DatePiker from "@/components/DatePicker/DatePiker";
import getDataByDateRange, {
  PATH_NAMES,
} from "@/requestDataHelpers/getDataByDateRange";
import onSetData from "../onSetData";

function SalesTable() {
  const [itemsList, setItemsList] = useState<SalesItem[]>([]);

  const onSetDataHandler = useCallback((fromDate: string, toDate: string) => {
    onSetData(
      PATH_NAMES.SALES,
      { fromDate, toDate },
      setItemsList,
      getDataByDateRange
    );
  }, []);

  return (
    <>
      <Row>
        <DatePiker onSetData={onSetDataHandler} />
      </Row>
      <Row>
        {/* <Table
          showSorterTooltip={false}
          style={{ minWidth: "710px" }}
          dataSource={itemsList}
          rowKey={(record) => record.saleID!}
          columns={columns as ColumnsType<SalesItem>}
        /> */}
      </Row>
    </>
  );
}

export default SalesTable;
