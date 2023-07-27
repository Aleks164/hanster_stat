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
          onRow={(data, index) => {
            console.log(data, index);
          }}
          rowKey={(record) => {
            console.log(record._id);
            return record._id!;
          }}
          columns={columns as ColumnsType<SalesItem>}
        />
      </Row>
    </>
  );
}

export default DataTable;
