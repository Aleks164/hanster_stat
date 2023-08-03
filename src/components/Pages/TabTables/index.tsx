import getDataByDateRange, {
  PATH_NAMES,
} from "@/requestDataHelpers/getDataByDateRange";
import React, { useCallback, useState } from "react";
import { SalesItem } from "../../../../commonTypes/api";
import onSetData from "../onSetData";
import { Col, Menu, MenuProps, Row } from "antd";
import DataTable from "@/components/DataTable/Index";
import DatePiker from "@/components/DatePicker/DatePiker";
import { pathNameDictionary } from "@/constants";
import saleColumns from "@/constants/columns/saleColumns";
import ordersColumns from "@/constants/columns/ordersColumns";
import stockColumns from "@/constants/columns/stockColumns";
import { ColumnsListType } from "@/types";
import {
  DollarOutlined,
  FileDoneOutlined,
  HomeOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
import reportDetailColumns from "@/constants/columns/reportDetailColumns";

const tabItemsColumnsMap: Record<PATH_NAMES, ColumnsListType> = {
  [PATH_NAMES.SALES]: saleColumns,
  [PATH_NAMES.STOCKS]: stockColumns,
  [PATH_NAMES.ORDERS]: ordersColumns,
  [PATH_NAMES.REPORT_DETAILS]: reportDetailColumns,
};

const menuItemsMap: Record<PATH_NAMES, React.ReactNode> = {
  [PATH_NAMES.SALES]: <DollarOutlined />,
  [PATH_NAMES.STOCKS]: <HomeOutlined />,
  [PATH_NAMES.ORDERS]: <FileDoneOutlined />,
  [PATH_NAMES.REPORT_DETAILS]: <MenuUnfoldOutlined />,
};
type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key?: PATH_NAMES | null,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}
const items = (Object.keys(tabItemsColumnsMap) as PATH_NAMES[]).map((key) =>
  getItem(pathNameDictionary[key], key, menuItemsMap[key])
);

function TabTables() {
  const [itemsList, setItemsList] = useState<SalesItem[]>([]);
  const [currentTab, setCurrentTab] = useState<PATH_NAMES>(
    PATH_NAMES.REPORT_DETAILS
  );

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
    <div style={{ marginTop: 10 }}>
      <Row>
        <DatePiker onSetData={onSetDataHandler} currentTab={currentTab} />
      </Row>
      <Row style={{ marginTop: 10 }} gutter={4}>
        <Col span={3}>
          <Menu
            defaultSelectedKeys={[PATH_NAMES.SALES]}
            onClick={({ key }) => setCurrentTab(key as PATH_NAMES)}
            items={items}
          />
        </Col>
        <Col span={21}>
          <DataTable
            itemsList={itemsList}
            columns={tabItemsColumnsMap[currentTab]}
          />
        </Col>
      </Row>
    </div>
  );
}

export default TabTables;
