import React from "react";
import { Empty, Row, Table } from "antd";
import { ReportColumnType } from "@/constants/columns/reportDetailColumns";
import styles from "./styles.module.css";

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
          scroll={{ x: true }}
          dataSource={itemsList}
          rowKey={(record) => record._id}
          columns={columns}
          loading={loading}
          rowClassName={(_, rowNumber) =>
            rowNumber % 2 === 0 ? styles.odd_row : styles.even_row
          }
          locale={{ emptyText: <Empty /> }}
        />
      </Row>
    </>
  );
}

export default DataTable;
