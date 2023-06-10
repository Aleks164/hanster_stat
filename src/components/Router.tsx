import React from "react";
import { Routes, Route } from "react-router-dom";
import ListOfItems from "./ListOfItems";
import Diagram from "./Diagram";
import Layout from "./Layout";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<ListOfItems />} />
        <Route path="diagrams" element={<Diagram />} />
        <Route path="*" element={<ListOfItems />} />
      </Route>
    </Routes>
  );
}

export default Router;
