import mongoose from "mongoose";
import { DetailReportItem } from "../../commonTypes/api";

const supplierReportDetailByPeriodSchema = new mongoose.Schema<DetailReportItem>({
    /**
     * Номер отчёта
     * @type {Number}
     * @memberof DetailReportItem
     */
    realizationreportId: Number,
    /**
     * Дата начала отчётного периода
     * @type {Date}
     * @memberof DetailReportItem
     */
    dateFrom: Date,
    /**
     * Дата конца отчётного периода
     * @type {Date}
     * @memberof DetailReportItem
     */
    dateTo: Date,
    /**
     * Дата формирования отчёта
     * @type {Date}
     * @memberof DetailReportItem
     */
    createDt: Date,
    /**
     * Номер строки
     * @type {Number}
     * @memberof DetailReportItem
     */
    rrdId: Number,
    /**
     * Номер поставки
     * @type {Number}
     * @memberof DetailReportItem
     */
    giId: Number,
    /**
     * Предмет
     * @type {String}
     * @memberof DetailReportItem
     */
    subjectName: String,
    /**
     * Артикул WB
     * @type {Number}
     * @memberof DetailReportItem
     */
    nmId: Number,
    /**
     * Бренд
     * @type {String}
     * @memberof DetailReportItem
     */
    brandName: String,
    /**
     * Артикул продавца
     * @type {String}
     * @memberof DetailReportItem
     */
    saName: String,
    /**
     * Размер
     * @type {String}
     * @memberof DetailReportItem
     */
    tsName: String,
    /**
     * Баркод
     * @type {String}
     * @memberof DetailReportItem
     */
    barcode: String,
    /**
     * Тип документа
     * @type {String}
     * @memberof DetailReportItem
     */
    docTypeName: String,
    /**
     * Количество
     * @type {Number}
     * @memberof DetailReportItem
     */
    quantity: Number,
    /**
     * Цена розничная
     * @type {Number}
     * @memberof DetailReportItem
     */
    retailPrice: Number,
    /**
     * Сумма продаж (возвратов)
     * @type {Number}
     * @memberof DetailReportItem
     */
    retailAmount: Number,
    /**
     * Согласованная скидка
     * @type {Number}
     * @memberof DetailReportItem
     */
    salePercent: Number,
    /**
     * Процент комиссии
     * @type {Number}
     * @memberof DetailReportItem
     */
    commissionPercent: Number,
    /**
     * Склад
     * @type {String}
     * @memberof DetailReportItem
     */
    officeName: String,
    /**
     * Обоснование для оплаты
     * @type {String}
     * @memberof DetailReportItem
     */
    supplierOperName: String,
    /**
     * Дата заказа. <br> Присылается с явным указанием часового пояса
     * @type {Date}
     * @memberof DetailReportItem
     */
    orderDt: Date,
    /**
     * Дата продажи. <br> Присылается с явным указанием часового пояса
     * @type {Date}
     * @memberof DetailReportItem
     */
    saleDt: Date,
    /**
     * Дата операции. <br> Присылается с явным указанием часового пояса
     * @type {Date}
     * @memberof DetailReportItem
     */
    rrDt: Date,
    /**
     * Штрих-код
     * @type {Number}
     * @memberof DetailReportItem
     */
    shkId: Number,
    /**
     * Цена розничная с учетом согласованной скидки
     * @type {Number}
     * @memberof DetailReportItem
     */
    retailPriceWithdiscRub: Number,
    /**
     * Количество доставок
     * @type {Number}
     * @memberof DetailReportItem
     */
    deliveryAmount: Number,
    /**
     * Количество возвратов
     * @type {Number}
     * @memberof DetailReportItem
     */
    returnAmount: Number,
    /**
     * Стоимость логистики
     * @type {Number}
     * @memberof DetailReportItem
     */
    deliveryRub: Number,
    /**
     * Тип коробов
     * @type {String}
     * @memberof DetailReportItem
     */
    giBoxTypeName: String,
    /**
     * Согласованный продуктовый дисконт
     * @type {Number}
     * @memberof DetailReportItem
     */
    productDiscountForReport: Number,
    /**
     * Промокод
     * @type {Number}
     * @memberof DetailReportItem
     */
    supplierPromo: Number,
    /**
     * Уникальный идентификатор заказа
     * @type {Number}
     * @memberof DetailReportItem
     */
    rid: Number,
    /**
     * Скидка постоянного покупателя
     * @type {Number}
     * @memberof DetailReportItem
     */
    ppvzSppPrc: Number,
    /**
     * Размер кВВ без НДС, % базовый
     * @type {Number}
     * @memberof DetailReportItem
     */
    ppvzKvwPrcBase: Number,
    /**
     * Итоговый кВВ без НДС, %
     * @type {Number}
     * @memberof DetailReportItem
     */
    ppvzKvwPrc: Number,
    /**
     * Размер снижения кВВ из-за рейтинга, % <span class=\"new\">new</span>
     * @type {Number}
     * @memberof DetailReportItem
     */
    supRatingPrcUp: Number,
    /**
     * Размер снижения кВВ из-за акции, % <span class=\"new\">new</span>
     * @type {Number}
     * @memberof DetailReportItem
     */
    isKgvpV2: Number,
    /**
     * Вознаграждение с продаж до вычета услуг поверенного, без НДС
     * @type {Number}
     * @memberof DetailReportItem
     */
    ppvzSalesCommission: Number,
    /**
     * К перечислению продавцу за реализованный товар
     * @type {Number}
     * @memberof DetailReportItem
     */
    ppvzForPay: Number,
    /**
     * Возмещение за выдачу и возврат товаров на ПВЗ
     * @type {Number}
     * @memberof DetailReportItem
     */
    ppvzReward: Number,
    /**
     * Возмещение издержек по эквайрингу. <br> Издержки WB за услуги эквайринга: вычитаются из вознаграждения WB и не влияют на доход продавца. 
     * @type {Number}
     * @memberof DetailReportItem
     */
    acquiringFee: Number,
    /**
     * Наименование банка-эквайера
     * @type {String}
     * @memberof DetailReportItem
     */
    acquiringBank: String,
    /**
     * Вознаграждение WB без НДС
     * @type {Number}
     * @memberof DetailReportItem
     */
    ppvzVw: Number,
    /**
     * НДС с вознаграждения WB
     * @type {Number}
     * @memberof DetailReportItem
     */
    ppvzVwNds: Number,
    /**
     * Номер офиса
     * @type {Number}
     * @memberof DetailReportItem
     */
    ppvzOfficeId: Number,
    /**
     * Наименование офиса доставки
     * @type {String}
     * @memberof DetailReportItem
     */
    ppvzOfficeName: String,
    /**
     * Номер партнера
     * @type {Number}
     * @memberof DetailReportItem
     */
    ppvzSupplierId: Number,
    /**
     * Партнер
     * @type {String}
     * @memberof DetailReportItem
     */
    ppvzSupplierName: String,
    /**
     * ИНН партнера
     * @type {String}
     * @memberof DetailReportItem
     */
    ppvzInn: String,
    /**
     * Номер таможенной декларации
     * @type {String}
     * @memberof DetailReportItem
     */
    declarationNumber: String,
    /**
     * Обоснование штрафов и доплат. <br> Поле будет в ответе при наличии значения 
     * @type {String}
     * @memberof DetailReportItem
     */
    bonusTypeName: String,
    /**
     * Цифровое значение стикера, который клеится на товар в процессе сборки заказа по схеме \"Маркетплейс\"
     * @type {String}
     * @memberof DetailReportItem
     */
    stickerId: String,
    /**
     * Страна продажи
     * @type {String}
     * @memberof DetailReportItem
     */
    siteCountry: String,
    /**
     * Штрафы
     * @type {Number}
     * @memberof DetailReportItem
     */
    penalty: Number,
    /**
     * Доплаты
     * @type {Number}
     * @memberof DetailReportItem
     */
    additionalPayment: Number,
    /**
     * Возмещение издержек по перевозке. <span class=\"new\">new</span><br> Поле будет в ответе при наличии значения 
     * @type {Number}
     * @memberof DetailReportItem
     */
    rebillLogisticCost: Number,
    /**
     * Организатор перевозки. <span class=\"new\">new</span><br> Поле будет в ответе при наличии значения.           
     * @type {String}
     * @memberof DetailReportItem
     */
    rebillLogisticOrg: String,
    /**
     * Код маркировки. <br> Поле будет в ответе при наличии значения 
     * @type {String}
     * @memberof DetailReportItem
     */
    kiz: String,
    /**
     * Уникальный идентификатор заказа. Примечание для использующих API Marketplace: `srid` равен `rid` в ответах методов сборочных заданий. 
     * @type {String}
     * @memberof DetailReportItem
     */
    srid: String,
});

const SupplierReportDetailByPeriod = mongoose.model("SupplierStocks", supplierReportDetailByPeriodSchema);

export default SupplierReportDetailByPeriod;
