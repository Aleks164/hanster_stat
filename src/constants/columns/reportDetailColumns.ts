import { ColumnType } from "antd/es/table";


export type ReportColumnType = typeof reportDetailColumns;

export const reportDetailColumns = [
    {
        title: "Бар-код",
        dataIndex: "_id",
        key: "_id",
        sorter: (a, b) => {
            return ("" + a._id).localeCompare(b._id);
        },
    },
    {
        title: "Предмет",
        dataIndex: "subject_name",
        key: "subject_name",
        sorter: (a, b) => {
            return ("" + a._id).localeCompare(b._id);
        },
    },
    {
        title: "Артикул продавца",
        dataIndex: "sa_name",
        key: "sa_name",
        sorter: (a, b) => {
            return ("" + a._id).localeCompare(b._id);
        },
    },
    {
        title: "Размер",
        dataIndex: "ts_name",
        key: "ts_name",
        sorter: (a, b) => {
            return ("" + a._id).localeCompare(b._id);
        },
    },
    {
        title: "Цена розничная",
        dataIndex: "retail_price",
        key: "retail_price",
        sorter: (a, b) => a.ordersCount - b.ordersCount,
    },
    {
        title: "Согласованная скидка",
        dataIndex: "sale_percent",
        key: "sale_percent",
        sorter: (a, b) => a.ordersCount - b.ordersCount,
    },
    {
        title: "Цена розничная с учетом согласованной скидки",
        dataIndex: "retail_price_withdisc_rub",
        key: "retail_price_withdisc_rub",
        sorter: (a, b) => a.ordersCount - b.ordersCount,
    },
    {
        title: "Стоимость логистики",
        dataIndex: "delivery_rub",
        key: "delivery_rub",
        sorter: (a, b) => a.ordersCount - b.ordersCount,
    },
    {
        title: "К перечислению продавцу за реализованный товар",
        dataIndex: "ppvz_for_pay",
        key: "ppvz_for_pay",
        sorter: (a, b) => a.ordersCount - b.ordersCount,
    },
    {
        title: "Кол-во продаж",
        dataIndex: "quantity",
        key: "quantity",
        sorter: (a, b) => a.ordersCount - b.ordersCount,
    },
    {
        title: "Кол-во заказов",
        dataIndex: "ordersCount",
        key: "ordersCount",
        render: (value) => value || 0,
        sorter: (a, b) => a.ordersCount - b.ordersCount,
    },
    {
        title: "Кол-во на складе",
        dataIndex: "quantityOnStock",
        key: "quantityOnStock",
        sorter: (a, b) => a.ordersCount - b.ordersCount,
    }
] as ColumnType<Required<any>>[];
