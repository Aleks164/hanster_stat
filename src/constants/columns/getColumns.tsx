import React from "react";
import { ColumnType } from "antd/es/table";
import {
  ChosenProductsType,
  SetChosenProductsType,
} from "@/store/StatStoreContext";
import ProductImage from "@/components/ProductImage";
import AddRemoveItemToDiagramButton from "@/components/Buttons/AddRemoveItemToDiagramButton";

export type GetReportColumnType = typeof getColumns;
type GetReportColumnArgsType = {
  chosenProducts: ChosenProductsType;
  setChosenProducts: SetChosenProductsType;
};

export const getColumns = ({
  setChosenProducts,
  chosenProducts,
}: GetReportColumnArgsType): ColumnType<Required<any>>[] => [
  {
    title: "Бар-код",
    dataIndex: "_id",
    key: "_id",
    fixed: "left",
    width: 90,
    render: (value: string) => (
      <AddRemoveItemToDiagramButton
        key={value + "_toggle_button"}
        value={value}
        chosenProducts={chosenProducts}
        setChosenProducts={setChosenProducts}
      />
    ),
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
      <ProductImage value={value} record={record} />
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
];
