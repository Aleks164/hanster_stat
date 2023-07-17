import React from "react";
import { Routes, Route } from "react-router-dom";
import ListOfItems from "./ListOfItems";
import DiagramPage from "./Diagram";
import Layout from "./Layout";
import SalesTable from "./Pages/SalesTable/Index";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<SalesTable />} />
        {/* <Route path="diagrams" element={<DiagramPage />} /> */}
        <Route path="*" element={<SalesTable />} />
      </Route>
    </Routes>
  );
}

export default Router;
