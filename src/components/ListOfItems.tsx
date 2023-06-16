import React, { useCallback, useEffect, useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { SalesItem } from "../../commonTypes/api";
import { Alert, Button, Calendar, Col, Row, Table, message } from "antd";
import ExcelImporter from "./ExcelImporter";
import { ColumnType, ColumnsType } from "antd/es/table";

const dateFormat = "DD.MM.YYYY";
const columns = [
  {
    title: "Размер товара",
    dataIndex: "techSize",
    key: "techSize",
    defaultSortOrder: "descend",
    sorter: (a, b) => +a.techSize - +b.techSize,
  },
  {
    title: "Артикул продавца",
    dataIndex: "supplierArticle",
    key: "supplierArticle",
    sorter: (a, b) => {
      return ("" + a.supplierArticle).localeCompare(b.supplierArticle);
    },
  },
  {
    title: "Бар-код",
    dataIndex: "barcode",
    key: "barcode",
    sorter: (a, b) => +a.barcode - +b.barcode,
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
] as ColumnType<Required<SalesItem>>[];

function ListOfItems() {
  const [itemsList, setItemsList] = useState<SalesItem[]>([]);
  const [selectedDate, setSelectedDate] = useState(dayjs().format(dateFormat));
  const [messageApi, contextHolder] = message.useMessage();

  const error = (message: string) => {
    messageApi.open({
      type: "error",
      content: message,
    });
  };

  const onSelectDate = useCallback(async (date: Dayjs) => {
    const newSelectedDate = date.format("YYYY-MM-DD");
    try {
      const resp = await fetch(
        "http://localhost:3000/sales?date=" +
          encodeURIComponent(newSelectedDate)
      );

      setSelectedDate(date.format(dateFormat));
      const items = await resp.json();

      if (Array.isArray(items) && items.length) setItemsList(items);
    } catch (e) {
      error((e as Error).message);
    }
  }, []);

  useEffect(() => {
    onSelectDate(dayjs());
  }, []);

  return (
    <>
      {contextHolder}
      <Row gutter={16} style={{ minWidth: "1110px", margin: "10px 5px" }}></Row>
      <Row gutter={16} style={{ minWidth: "1110px", margin: "10px 0px" }}>
        <Col span={16} flex={2}>
          <Alert
            message={
              <div
                style={{
                  textAlign: "right",
                  display: "flex",
                  flexWrap: "nowrap",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div style={{ margin: "0px 10px" }}>
                  Продаж за {selectedDate}:{" "}
                  <b>
                    <u>{itemsList.length}</u>
                  </b>
                </div>
                <ExcelImporter
                  data={itemsList}
                  fileName={`Продажи ${selectedDate}`}
                />
              </div>
            }
          />
          <Table
            showSorterTooltip={false}
            style={{ minWidth: "710px" }}
            dataSource={itemsList}
            rowKey={(record) => record.saleID!}
            columns={columns as ColumnsType<SalesItem>}
          />
        </Col>
        <Col span={8} flex={1}>
          <Calendar
            fullscreen={false}
            value={selectedDate ? dayjs(selectedDate, dateFormat) : undefined}
            onSelect={onSelectDate}
          />
        </Col>
      </Row>
    </>
  );
}

export default ListOfItems;
