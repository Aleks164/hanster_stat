import { ColumnType } from "antd/es/table";
import { StocksItem } from "../../../commonTypes/api";

const stockColumns = [{
    title: "Бар-код",
    dataIndex: "barcode",
    key: "barcode",
    defaultSortOrder: "descend",
    sorter: (a, b) => {
        return ("" + a.barcode).localeCompare(b.barcode);
    },
},
{
    title: "Артикул продавца",
    dataIndex: "supplierArticle",
    key: "supplierArticle",
    defaultSortOrder: "descend",
    sorter: (a, b) => {
        return ("" + a.supplierArticle).localeCompare(b.supplierArticle);
    },
},
{
    title: "Размер товара",
    dataIndex: "techSize",
    key: "techSize",
    defaultSortOrder: "descend",
    sorter: (a, b) => {
        return ("" + a.techSize).localeCompare(b.techSize);
    },
},
{
    title: "Количество, доступное для продажи",
    dataIndex: "quantity",
    key: "quantity",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.quantity - b.quantity,
},
{
    title: "Полное (непроданное) количество, которое числится за складом",
    dataIndex: "quantityFull",
    key: "quantityFull",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.quantityFull - b.quantityFull,
},
{
    title: "Артикул WB",
    dataIndex: "nmId",
    key: "nmId",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.nmId - b.nmId,
},
{
    title: "Предмет",
    dataIndex: "subject",
    key: "subject",
    defaultSortOrder: "descend",
    sorter: (a, b) => {
        return ("" + a.subject).localeCompare(b.subject);
    },
},
{
    title: "Категория",
    dataIndex: "category",
    key: "category",
    defaultSortOrder: "descend",
    sorter: (a, b) => {
        return ("" + a.category).localeCompare(b.category);
    },
},
{
    title: "Количество дней на сайте",
    dataIndex: "daysOnSite",
    key: "daysOnSite",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.daysOnSite - b.daysOnSite,
},
{
    title: "Бренд",
    dataIndex: "brand",
    key: "brand",
    defaultSortOrder: "descend",
    sorter: (a, b) => {
        return ("" + a.brand).localeCompare(b.brand);
    },
},
{
    title: "Цена",
    dataIndex: "price",
    key: "price",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.price - b.price,
},
{
    title: "Скидка",
    dataIndex: "discount",
    key: "discount",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.discount - b.discount,
},
] as ColumnType<Required<StocksItem>>[];

export default stockColumns;