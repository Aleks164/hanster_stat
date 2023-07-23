import React from "react";
import { Row, Table } from "antd";
import { ColumnsType } from "antd/es/table";
import { SalesItem } from "../../../commonTypes/api";

function DataTable({ itemsList, columns }) {
  return (
    <>
      <Row>
        <Table
          showSorterTooltip={false}
          style={{ minWidth: "710px" }}
          dataSource={itemsList}
          rowKey={(record) => record.id!}
          columns={columns as ColumnsType<SalesItem>}
        />
      </Row>
    </>
  );
}

export default DataTable;
