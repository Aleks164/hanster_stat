import React from "react";
import { Routes, Route } from "react-router-dom";
import ListOfItems from "./ListOfItems";
import DiagramPage from "./Diagram";
import Layout from "./Layout";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<ListOfItems />} />
        <Route path="diagrams" element={<DiagramPage />} />
        <Route path="*" element={<ListOfItems />} />
      </Route>
    </Routes>
  );
}

export default Router;
