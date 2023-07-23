import getDataByDateRange, {
  PATH_NAMES,
} from "@/requestDataHelpers/getDataByDateRange";
import React, { useCallback, useState } from "react";
import { SalesItem } from "../../../../commonTypes/api";
import onSetData from "../onSetData";
import { Row, Tabs } from "antd";
import type { TabsProps } from "antd";
import DataTable from "@/components/DataTable/Index";
import DatePiker from "@/components/DatePicker/DatePiker";
import { pathNameDictionary } from "@/constants";
import saleColumns from "@/constants/columns/saleColumns";
import ordersColumns from "@/constants/columns/ordersColumns";
import stockColumns from "@/constants/columns/stockColumns";

const tabItemsKeyList = [
  { key: PATH_NAMES.SALES, columns: saleColumns },
  { key: PATH_NAMES.STOCKS, columns: stockColumns },
  { key: PATH_NAMES.ORDERS, columns: ordersColumns },
];

const getTabItems = (dataItemsList): TabsProps["items"] => {
  return tabItemsKeyList.map(({ key, columns }) => ({
    key,
    label: pathNameDictionary[key],
    children: <DataTable itemsList={dataItemsList} columns={columns} />,
  }));
};

function TabTables() {
  const [itemsList, setItemsList] = useState<SalesItem[]>([]);
  const [currentTab, setCurrentTab] = useState<PATH_NAMES>(PATH_NAMES.SALES);

  const onSetDataHandler = useCallback(
    (fromDate: string, toDate: string) =>
      onSetData(
        currentTab,
        { fromDate, toDate },
        setItemsList,
        getDataByDateRange
      ),
    [currentTab]
  );
  return (
    <>
      <Row>
        <DatePiker onSetData={onSetDataHandler} currentTab={currentTab} />
      </Row>
      <Tabs
        tabPosition={"left"}
        defaultActiveKey="1"
        style={{ height: 220, width: 220 }}
        items={getTabItems(itemsList)}
        onChange={(activeKey) => setCurrentTab(activeKey)}
      />
    </>
  );
}

export default TabTables;
