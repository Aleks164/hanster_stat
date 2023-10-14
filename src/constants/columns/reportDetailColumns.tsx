import React from "react";
import { ColumnType } from "antd/es/table";
import styles from "./styles.module.css";

export type ReportColumnType = typeof reportDetailColumns;

function getHost(id: number) {
  if (id >= 0 && id <= 143) return "//basket-01.wb.ru";
  if (id >= 144 && id <= 287) return "//basket-02.wb.ru";
  if (id >= 288 && id <= 431) return "//basket-03.wb.ru";
  if (id >= 432 && id <= 719) return "//basket-04.wb.ru";
  if (id >= 720 && id <= 1007) return "//basket-05.wb.ru";
  if (id >= 1008 && id <= 1061) return "//basket-06.wb.ru";
  if (id >= 1062 && id <= 1115) return "//basket-07.wb.ru";
  if (id >= 1116 && id <= 1169) return "//basket-08.wb.ru";
  if (id >= 1170 && id <= 1313) return "//basket-09.wb.ru";
  if (id >= 1314 && id <= 1601) return "//basket-10.wb.ru";
  if (id >= 1602 && id <= 1655) return "//basket-11.wb.ru";
  return "//basket-12.wb.ru";
}

function getImgSrc(id: number) {
  const vol = ~~(id / 1e5);
  const part = ~~(id / 1e3);
  return `https:${getHost(
    vol
  )}/vol${vol}/part${part}/${id}/images/c516x688/1.webp`;
}

export const reportDetailColumns = [
  {
    title: "Бар-код",
    dataIndex: "_id",
    key: "_id",
    fixed: "left",
    width: 90,
    sorter: (a, b) => {
      return ("" + a._id).localeCompare(b._id);
    },
  },
  {
    title: "Фото",
    dataIndex: "nm_id",
    key: "nm_id",
    fixed: "left",
    width: 70,
    render: (value: number, record) => (
      <div className={styles.goods_pictures_container}>
        <img
          className={styles.goods_pictures}
          src={getImgSrc(value)}
          alt={record.subject_name}
        />
      </div>
    ),
  },
  {
    title: "Предмет",
    dataIndex: "subject_name",
    key: "subject_name",
    width: 90,
    sorter: (a, b) => {
      return ("" + a._id).localeCompare(b._id);
    },
  },
  {
    title: "Артикул продавца",
    dataIndex: "sa_name",
    key: "sa_name",
    width: 100,
    sorter: (a, b) => {
      return ("" + a._id).localeCompare(b._id);
    },
  },
  {
    title: "Размер",
    dataIndex: "ts_name",
    key: "ts_name",
    width: 80,
    sorter: (a, b) => {
      return ("" + a._id).localeCompare(b._id);
    },
  },
  {
    title: "Цена",
    dataIndex: "retail_price",
    key: "retail_price",
    width: 82,
    sorter: (a, b) => a.ordersCount - b.ordersCount,
  },
  {
    title: "Согласованная скидка",
    dataIndex: "sale_percent",
    key: "sale_percent",
    width: 125,
    sorter: (a, b) => a.ordersCount - b.ordersCount,
  },
  {
    title: "Цена розничная с учетом согласованной скидки",
    dataIndex: "retail_price_withdisc_rub",
    key: "retail_price_withdisc_rub",
    width: 155,
    sorter: (a, b) => a.ordersCount - b.ordersCount,
  },
  {
    title: "Стоимость логистики",
    dataIndex: "delivery_rub",
    key: "delivery_rub",
    width: 100,
    sorter: (a, b) => a.ordersCount - b.ordersCount,
  },
  {
    title: "К перечислению продавцу за реализованный товар",
    dataIndex: "ppvz_for_pay",
    key: "ppvz_for_pay",
    width: 155,
    sorter: (a, b) => a.ordersCount - b.ordersCount,
  },
  {
    title: "Кол-во продаж",
    dataIndex: "quantity",
    key: "quantity",
    width: 85,
    render: (value) => ~~value || 0,
    sorter: (a, b) => a.ordersCount - b.ordersCount,
  },
  {
    title: "Кол-во заказов",
    dataIndex: "ordersCount",
    key: "ordersCount",
    width: 85,
    render: (value) => value || 0,
    sorter: (a, b) => a.ordersCount - b.ordersCount,
  },
  {
    title: "Кол-во на складе",
    dataIndex: "quantityOnStock",
    key: "quantityOnStock",
    fixed: "right",
    width: 85,
    render: (value) => value || 0,
    sorter: (a, b) => a.ordersCount - b.ordersCount,
  },
] as ColumnType<Required<any>>[];
