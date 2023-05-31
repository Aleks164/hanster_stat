import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import { SalesItem } from "@/api";
import data from "@/data/sales.json";
import { DatePicker, Table } from "antd";

const dateFormat = "DD/MM/YYYY";
const columns = [{
  title: 'Размер товара',
  dataIndex: 'techSize',
  key: 'techSize', defaultSortOrder: 'descend',
  sorter: (a, b) => a.techSize - b.techSize,
}, {
  title: 'Артикул продавца',
  dataIndex: 'supplierArticle',
  key: 'supplierArticle',
  sorter: (a, b) => {
    return ('' + a.supplierArticle).localeCompare(b.supplierArticle);
  },
}, {
  title: 'Бар-код',
  dataIndex: 'barcode',
  key: 'barcode',
  sorter: (a, b) => a.barcode - b.barcode,
}, {
  title: 'К перечислению продавцу',
  dataIndex: 'forPay',
  key: 'forPay',
  sorter: (a, b) => a.forPay - b.forPay
}, {
  title: 'Фактическая цена заказа',
  dataIndex: 'finishedPrice',
  key: 'finishedPrice',
  sorter: (a, b) => a.finishedPrice - b.finishedPrice
}]

function ListOfItems() {
  const [itemsList, setItemsList] = useState<SalesItem[]>([]);
  const [selectedDate, setSelectedDate] = useState("22/05/2023");

  useEffect(() => {
    const currentDate = dayjs(selectedDate, dateFormat);
    const products = data as unknown as SalesItem[];
    const filteredProducts = products.filter((product) => {
      const productDate = new Date(product.date!);
      return (
        productDate.getMonth() === currentDate.month() &&
        productDate.getDate() === currentDate.date()
      );
    });
    setItemsList(filteredProducts);
  }, [data, selectedDate]);

  return (
    <div>
      <DatePicker
        // defaultValue={dayjs("22/05/2023", dateFormat)}
        onChange={(date, string) => {
          setSelectedDate(string);
        }}
        value={selectedDate ? dayjs(selectedDate, dateFormat) : undefined}
        format={dateFormat}
      />
      <div>Count:{itemsList.length}</div>
      <Table dataSource={itemsList} columns={columns} />
    </div>
  );
}

export default ListOfItems;
