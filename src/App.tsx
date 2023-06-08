import React from "react";
import Diagram from "./components/Diagram";
import Incomes from "./components/Incomes";
import Info from "./components/Info";
import Sales from "./components/Sales";
import ListOfItems from "./components/ListOfItems";
import ru from "antd/locale/ru_RU";
import "dayjs/locale/ru";
import { ConfigProvider } from "antd";

function App() {
  return (
    <>
      <ConfigProvider locale={ru}>
        <ListOfItems />
      </ConfigProvider>
      {/* <div style={{ width: 800, height: 500 }}> */}
      {/* <Sales /> */}
      {/* <Diagram /> */}
      {/* <Sales /> */}

      {/* </div> */}
    </>
  );
}

export default App;
