import React from "react";
import { ColumnType } from "antd/es/table";
import { ChosenProductsType } from "@/store/StatStoreContext";
import ProductImage from "@/components/ProductImage";
import { TableStatRowInfoType } from "@/Pages/TabTables/onSetData";

export type GetReportColumnType = typeof getColumns;
type GetReportColumnArgsType = {
  chosenProducts: ChosenProductsType;
};

export const getColumns = ({
  chosenProducts,
}: GetReportColumnArgsType): ColumnType<TableStatRowInfoType>[] => [
  {
    title: "Бар-код",
    dataIndex: "barcode",
    key: "barcode",
    fixed: "left",
    width: 90,
    // render: (value: string) => (
    //   <AddRemoveItemToDiagramButton
    //     key={value + "_toggle_button"}
    //     value={value}
    //     chosenProducts={chosenProducts}
    //   />
    // ),
    sorter: (a, b) => {
      return ("" + a.barcode).localeCompare(b.barcode);
    },
  },
  {
    title: "Фото",
    dataIndex: "nmId",
    key: "nmId",
    fixed: "left",
    width: 70,
    render: (value: number, record) => (
      <ProductImage value={value} record={record} />
    ),
  },
  {
    title: "Предмет",
    dataIndex: "subject",
    key: "subject",
    width: 90,
    sorter: (a, b) => {
      return ("" + a.subject).localeCompare(b.subject);
    },
  },
  {
    title: "Артикул продавца",
    dataIndex: "supplierArticle",
    key: "supplierArticle",
    width: 100,
    sorter: (a, b) => {
      return ("" + a.supplierArticle).localeCompare(b.supplierArticle);
    },
  },
  {
    title: "Размер",
    dataIndex: "techSize",
    key: "techSize",
    width: 80,
    sorter: (a, b) => {
      return ("" + a.techSize).localeCompare(b.techSize);
    },
  },
  {
    title: "Склад",
    dataIndex: "warehouseName",
    key: "warehouseName",
    width: 80,
    sorter: (a, b) => {
      return ("" + a.warehouseName).localeCompare(b.warehouseName);
    },
  },
  {
    title: "Кол-во на складе",
    dataIndex: "quantity",
    key: "quantity",
    width: 85,
    render: (value) => value || 0,
    sorter: (a, b) => a.quantity! - b.quantity!,
  },
  {
    title: "Возвращаются от клиента на склад",
    dataIndex: "inWayFromClient",
    key: "inWayFromClient",
    width: 80,
    render: (value) => value || 0,
    sorter: (a, b) => a.inWayFromClient - b.inWayFromClient,
  },
  {
    title: "Фактическая цена с учетом всех скидок",
    dataIndex: "finishedPrice",
    key: "finishedPrice",
    width: 155,
    render: (value) => (value && (+value).toFixed()) || 0,
    sorter: (a, b) => a.finishedPrice - b.finishedPrice,
  },
  {
    title: "Кол-во заказов",
    dataIndex: "orderQuantity",
    key: "orderQuantity",
    width: 85,
    render: (value) => value || 0,
    sorter: (a, b) => a.orderQuantity - b.orderQuantity,
  },
  {
    title: "Возвратов",
    dataIndex: "isCancel",
    key: "isCancel",
    width: 85,
    render: (value) => value || 0,
    sorter: (a, b) => +a.isCancel - +b.isCancel,
  },
  {
    title: "Кол-во продаж",
    dataIndex: "saleQuantity",
    key: "saleQuantity",
    width: 85,
    fixed: "right",
    render: (value) => console.log(value) || value || 0,
    sorter: (a, b) => a.saleQuantity - b.saleQuantity,
  },
];
