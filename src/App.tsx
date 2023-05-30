import React from "react";
import Diagramm from "./components/Diagtamm";
import Incomes from "./components/Incomes";
import Info from "./components/Info";
import Sales from "./components/Sales";
import ListOfItems from "./components/ListOfItems";

function App() {
  return (
    <div style={{ width: 800, height: 500 }}>
      <ListOfItems />
      {/* <Sales /> */}
      {/* <Diagramm /> */}
      {/* <Sales /> */}
    </div>
  );
}

export default App;
