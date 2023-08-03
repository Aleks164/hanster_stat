import { ColumnType } from "antd/es/table";

const reportDetailColumns = [
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
        render: (value, record) => {
            console.log(value, record)
            return value.join(", ")
        },
        // sorter: (a, b) => a.retail_price - b.retail_price,
    },
    {
        title: "Количество",
        dataIndex: "quantity",
        key: "quantity",
        render: (value) => value.join(", "),
    },
    {
        title: "Согласованная скидка",
        dataIndex: "sale_percent",
        key: "sale_percent",
        render: (value) => value.join(", "),
    },
    {
        title: "Цена розничная с учетом согласованной скидки",
        dataIndex: "retail_price_withdisc_rub",
        key: "retail_price_withdisc_rub",
        render: (value) => value.join(", "),
    },
    {
        title: "Стоимость логистики",
        dataIndex: "delivery_rub",
        key: "delivery_rub",
        render: (value) => value.join(", "),
    },
    {
        title: "К перечислению продавцу за реализованный товар",
        dataIndex: "ppvz_for_pay",
        key: "ppvz_for_pay",
        render: (value) => value.join(", "),
    },
    {
        title: "Заказы",
        dataIndex: "count",
        key: "count",
    }
] as ColumnType<Required<any>>[];

export default reportDetailColumns;