import React, { PureComponent } from 'react';
import { SalesItem } from "@/api";
import data from "@/data/sales.json";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// const data = [
//   {
//     name: 'Page A',
//     uv: 4000,
//     pv: 2400,
//     amt: 2400,
//   },
//   {
//     name: 'Page B',
//     uv: 3000,
//     pv: 1398,
//     amt: 2210,
//   },
//   {
//     name: 'Page C',
//     uv: 2000,
//     pv: 9800,
//     amt: 2290,
//   },
//   {
//     name: 'Page D',
//     uv: 2780,
//     pv: 3908,
//     amt: 2000,
//   },
//   {
//     name: 'Page E',
//     uv: 1890,
//     pv: 4800,
//     amt: 2181,
//   },
//   {
//     name: 'Page F',
//     uv: 2390,
//     pv: 3800,
//     amt: 2500,
//   },
//   {
//     name: 'Page G',
//     uv: 3490,
//     pv: 4300,
//     amt: 2100,
//   },
// ];

function getDiagramItem(saleItem: SalesItem) {
  const { date, } = saleItem;
  return {}
}

export default class Example extends PureComponent {
  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.state = { salesByDate: [] };
  }
  componentDidMount(): void {
    const quantityByDate: Record<string, number> = {};
    (data as unknown as SalesItem[]).forEach((item) => {
      const itemDate = new Date(item.date!);
      const month = itemDate.toLocaleString('default', { month: 'long' });
      const date = itemDate.getDate();
      const keyTemplate = `${month} ${date}`;

      if (quantityByDate[keyTemplate]) quantityByDate[keyTemplate]++;
      else quantityByDate[keyTemplate] = 1;
      const salesByDate = [];
      console.log(quantityByDate);

      for (const date in quantityByDate) {
        salesByDate.push({
          name: date,
          sale: quantityByDate[date]
        })
      }
      this.setState({ salesByDate });
    })
  }

  render() {
    const { salesByDate } = this.state;
    console.log(salesByDate);

    return (
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
          <Line type="monotone" dataKey="sale" stroke="#8884d8" activeDot={{ r: 8 }} />
          {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          <Line type="monotone" dataKey="amt" stroke="#ff0042" /> */}
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
