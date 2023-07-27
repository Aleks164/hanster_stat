import { ColumnType } from "antd/es/table";

const reportDetailColumns = [{
    title: "С даты",
    dataIndex: "date_from",
    key: "date_from",
    sorter: (a, b) => {
        return new Date(a.date_from) > new Date(b.date_from);
    },
},
{
    title: "По дату",
    dataIndex: "date_to",
    key: "date_to",
    defaultSortOrder: "descend",
    sorter: (a, b) => {
        return new Date(a.date_to) > new Date(b.date_to);
    },
},
{
    title: "Бар-код",
    dataIndex: "barcode",
    key: "barcode",
    sorter: (a, b) => {
        return ("" + a.barcode).localeCompare(b.barcode);
    },
},
{
    title: "Цена розничная",
    dataIndex: "retail_price",
    key: "retail_price",
    sorter: (a, b) => a.retail_price - b.retail_price,
},
{
    title: "Количество",
    dataIndex: "quantity",
    key: "quantity",
    sorter: (a, b) => a.quantity - b.quantity,
},
{
    title: "Сумма продаж (возвратов)",
    dataIndex: "retail_amount",
    key: "retail_amount",
    sorter: (a, b) => a.retail_amount - b.retail_amount,
},
{
    title: "Согласованная скидка",
    dataIndex: "sale_percent",
    key: "sale_percent",
    sorter: (a, b) => a.sale_percent - b.sale_percent,
},
{
    title: "Процент комиссии",
    dataIndex: "commission_percent",
    key: "commission_percent",
    sorter: (a, b) => a.commission_percent - b.commission_percent,
},
{
    title: "Цена розничная с учетом согласованной скидки",
    dataIndex: "retail_price_withdisc_rub",
    key: "retail_price_withdisc_rub",
    sorter: (a, b) => a.retail_price_withdisc_rub - b.retail_price_withdisc_rub,
},
{
    title: "Количество доставок",
    dataIndex: "delivery_amount",
    key: "delivery_amount",
    sorter: (a, b) => a.delivery_amount - b.delivery_amount,
},
{
    title: "Количество возвратов",
    dataIndex: "return_amount",
    key: "return_amount",
    sorter: (a, b) => a.return_amount - b.return_amount,
},
{
    title: "Стоимость логистики",
    dataIndex: "delivery_rub",
    key: "delivery_rub",
    sorter: (a, b) => a.delivery_rub - b.delivery_rub,
},
{
    title: "Уникальный идентификатор заказа",
    dataIndex: "rid",
    key: "rid",
    sorter: (a, b) => a.rid - b.rid,
},
{
    title: "Скидка постоянного покупателя",
    dataIndex: "ppvz_spp_prc",
    key: "ppvz_spp_prc",
    sorter: (a, b) => a.ppvz_spp_prc - b.ppvz_spp_prc,
},
{
    title: "К перечислению продавцу за реализованный товар",
    dataIndex: "ppvz_for_pay",
    key: "ppvz_for_pay",
    sorter: (a, b) => a.ppvz_for_pay - b.ppvz_for_pay,
},
] as ColumnType<Required<any>>[];

export default reportDetailColumns;