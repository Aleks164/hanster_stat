import React from "react";
import { useState } from "react";

const DataUpdate = () => {
  const [data, setData] = useState([]);
  async function parserHandler() {
    fetch("http://localhost:3000/supplier_stocks", {
      method: "GET",
    })
      .then((responseJson) => responseJson.json())
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  }
  return <button onClick={parserHandler}>parse</button>;
};

export default DataUpdate;
