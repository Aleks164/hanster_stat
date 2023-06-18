import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { SalesCountByDateType } from ".";

type DiagramStateTypeParams = {
  salesByDate: SalesCountByDateType;
};

function Diagram({ salesByDate = [] }: DiagramStateTypeParams) {
  return (
    <>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          // width={500}
          // height={300}
          data={salesByDate}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="sale"
            name="Продажи"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          <Line type="monotone" dataKey="amt" stroke="#ff0042" /> */}
        </LineChart>
      </ResponsiveContainer>
    </>
  );
}

export default Diagram;

// componentDidMount(): void {
//   const quantityByDate: Record<string, number> = {};
//   (data as unknown as SalesItem[]).forEach((item) => {
//     const itemDate = new Date(item.date!);
//     const month = itemDate.toLocaleString("default", { month: "long" });
//     const date = itemDate.getDate();
//     const keyTemplate = `${month} ${date}`;

//     if (quantityByDate[keyTemplate]) quantityByDate[keyTemplate]++;
//     else quantityByDate[keyTemplate] = 1;
//     const salesByDate = [];
//     for (const date in quantityByDate) {
//       salesByDate.push({
//         name: date,
//         sale: quantityByDate[date],
//       });
//     }
//     this.setState({ salesByDate });
//   });
// }
