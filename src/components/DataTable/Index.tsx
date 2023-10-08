import React from "react";
import { Empty, Row, Table } from "antd";
import { ColumnsType } from "antd/es/table";
import { SalesItem } from "../../../commonTypes/api";
import { ReportColumnType } from "@/constants/columns/reportDetailColumns";

interface DataTableParamsType {
  itemsList: Record<string, any>[];
  columns: ReportColumnType;
  loading: boolean;
}

function DataTable({ itemsList, columns, loading }: DataTableParamsType) {
  return (
    <>
      <Row>
        <Table
          showSorterTooltip={false}
          style={{ minWidth: "710px" }}
          dataSource={itemsList}
          rowKey={(record) => {
            return record._id!;
          }}
          columns={columns as ColumnsType<SalesItem>}
          loading={loading}
          locale={{ emptyText: <Empty /> }}
        />
      </Row>
    </>
  );
}

export default DataTable;
