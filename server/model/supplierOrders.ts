import mongoose from "mongoose";
import { OrdersItem } from "../../commonTypes/api";

const supplierOrdersSchema = new mongoose.Schema<OrdersItem>({
    /**
     * Номер заказа. Объединяет все позиции одного заказа.
     * @type {String}
     * @memberof OrdersItem
     */
    gNumber: String,
    /**
     * Дата и время заказа. Это поле соответствует параметру `dateFrom` в запросе, если параметр `flag=1`. Если часовой пояс не указан, то берется Московское время UTC+3.
     * @type {Date}
     * @memberof OrdersItem
     */
    date: Date,
    /**
     * Дата и время обновления информации в сервисе. Это поле соответствует параметру `dateFrom` в запросе, если параметр `flag=0` или не указан. Если часовой пояс не указан, то берется Московское время UTC+3.
     * @type {Date}
     * @memberof OrdersItem
     */
    lastChangeDate: Date,
    /**
     * Артикул продавца
     * @type {String}
     * @memberof OrdersItem
     */
    supplierArticle: String,
    /**
     * Размер товара (пример S, M, L, XL, 42, 42-43)
     * @type {String}
     * @memberof OrdersItem
     */
    techSize: String,
    /**
     * Бар-код
     * @type {String}
     * @memberof OrdersItem
     */
    barcode: String,
    /**
     * Цена до согласованной итоговой скидки/промо/спп. Для получения цены со скидкой можно воспользоваться формулой `priceWithDiscount = totalPrice * (1 - discountPercent/100)`
     * @type {Number}
     * @memberof OrdersItem
     */
    totalPrice: Number,
    /**
     * Согласованный итоговый дисконт. Будучи примененным к `totalPrice`, даёт сумму к оплате.
     * @type {Number}
     * @memberof OrdersItem
     */
    discountPercent: Number,
    /**
     * Название склада отгрузки
     * @type {String}
     * @memberof OrdersItem
     */
    warehouseName: String,
    /**
     * Область
     * @type {String}
     * @memberof OrdersItem
     */
    oblast: String,
    /**
     * Номер поставки (от продавца на склад)
     * @type {Number}
     * @memberof OrdersItem
     */
    incomeID: Number,
    /**
     * Уникальный идентификатор позиции заказа. Может использоваться для поиска соответствия между заказами и продажами.
     * @type {Number}
     * @memberof OrdersItem
     */
    odid: Number,
    /**
     * Артикул WB
     * @type {Number}
     * @memberof OrdersItem
     */
    nmId: Number,
    /**
     * Предмет
     * @type {String}
     * @memberof OrdersItem
     */
    subject: String,
    /**
     * Категория
     * @type {String}
     * @memberof OrdersItem
     */
    category: String,
    /**
     * Бренд
     * @type {String}
     * @memberof OrdersItem
     */
    brand: String,
    /**
     * Отмена заказа. true - заказ отменен до оплаты.
     * @type {Boolean}
     * @memberof OrdersItem
     */
    isCancel: Boolean,
    /**
     * Дата и время отмены заказа. Если заказ не был отменен, то `\"0001-01-01T00:00:00\"`. Если часовой пояс не указан, то берется Московское время UTC+3.
     * @type {Date}
     * @memberof OrdersItem
     */
    cancelDt: Date,
    /**
     * Цифровое значение стикера, который клеится на товар в процессе сборки заказа по системе Маркетплейс.
     * @type {String}
     * @memberof OrdersItem
     */
    sticker: String,
    /**
     * Уникальный идентификатор заказа, функционально аналогичный `odid`/`rid`.  Данный параметр введен в июле'22 и в течение переходного периода может быть заполнен не во всех ответах. Примечание для работающих по системе Маркетплейс: `srid` равен `rid` в ответе на метод `GET /api/v2/orders`. 
     * @type {String}
     * @memberof OrdersItem
     */
    srid: String,
});

const SupplierOrders = mongoose.model("supplierOrders", supplierOrdersSchema);

export default SupplierOrders;
