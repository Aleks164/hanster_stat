import React, { useCallback, useState } from "react";
import { Row, Table } from "antd";
import { ColumnType, ColumnsType } from "antd/es/table";
import { SalesItem } from "../../../../commonTypes/api";
import DatePiker from "@/components/DatePicker/DatePiker";
import getDataByDateRange, {
  PATH_NAMES,
} from "@/requestDataHelpers/getDataByDateRange";
import onSetData from "../onSetData";

const columns = [
  {
    title: "Номер заказа",
    dataIndex: "gNumber",
    key: "gNumber",
    defaultSortOrder: "descend",
    sorter: (a, b) => {
      return ("" + a.gNumber).localeCompare(b.gNumber);
    },
  },
  {
    title: "Дата и время продажи",
    dataIndex: "date",
    key: "date",
    defaultSortOrder: "descend",
    sorter: (a, b) => {
      return new Date(a.date) > new Date(b.date);
    },
  },
  {
    title: "Согласованный итоговый дисконт",
    dataIndex: "discountPercent",
    key: "discountPercent",
    defaultSortOrder: "descend",
    sorter: (a, b) => {
      return a.discountPercent - b.discountPercent;
    },
  },
  {
    title: "К перечислению продавцу",
    dataIndex: "forPay",
    key: "forPay",
    sorter: (a, b) => a.forPay - b.forPay,
  },
  {
    title: "Фактическая цена заказа",
    dataIndex: "finishedPrice",
    key: "finishedPrice",
    sorter: (a, b) => a.finishedPrice - b.finishedPrice,
  },
  {
    title: "Цена, от которой считается вознаграждение продавца",
    dataIndex: "priceWithDisc",
    key: "priceWithDisc",
    sorter: (a, b) => a.priceWithDisc - b.priceWithDisc,
  },
] as ColumnType<Required<SalesItem>>[];

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
        <Table
          showSorterTooltip={false}
          style={{ minWidth: "710px" }}
          dataSource={itemsList}
          rowKey={(record) => record.saleID!}
          columns={columns as ColumnsType<SalesItem>}
        />
      </Row>
    </>
  );
}

export default SalesTable;
