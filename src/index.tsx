import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ConfigProvider } from "antd";
import { BrowserRouter } from "react-router-dom";
import ru from "antd/locale/ru_RU";
import "dayjs/locale/ru";

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
  <BrowserRouter>
    <ConfigProvider locale={ru}>
      <App />
    </ConfigProvider>
  </BrowserRouter>
);
