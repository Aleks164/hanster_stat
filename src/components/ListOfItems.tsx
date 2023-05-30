import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import { SalesItem } from "@/api";
import data from "@/data/sales.json";
import { DatePicker, List } from "antd";

const dateFormat = "DD/MM/YYYY";

function ListOfItems() {
  // console.log(data.data.products);
  const [itemsList, setItemsList] = useState<SalesItem[]>([]);
  const [selectedDate, setSelectedDate] = useState("22/05/2023");

  // const currentDate = new Date(selectedDate);
  // const currentDate2 = dayjs(selectedDate, dateFormat);

  // console.log(currentDate2.month(), currentDate2.day());

  useEffect(() => {
    // return;
    const currentDate = dayjs(selectedDate, dateFormat);
    const products = data as unknown as SalesItem[];
    const filteredProducts = products.filter((product) => {
      const productDate = new Date(product.date!);

      console.log(
        productDate.getMonth(),
        currentDate.month(),
        productDate.getDate(),
        currentDate.date()
      );
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
      <List
        size="small"
        header={<div>Header</div>}
        bordered
        dataSource={itemsList}
        renderItem={(item) => (
          <List.Item>
            supplierArticle:{item.supplierArticle}| forPay:{item.forPay}|
            finishedPrice:{item.finishedPrice}
          </List.Item>
        )}
      />
    </div>
  );
}

export default ListOfItems;
