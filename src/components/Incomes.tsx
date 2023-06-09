import React from "react";
import { useState } from "react";

const Incomes = () => {
  const [data, setData] = useState([]);
  async function parserHandler() {
    fetch(
      "https://statistics-api-sandbox.wildberries.ru/api/v1/supplier/incomes?dateFrom=2023-05-20",
      {
        method: "GET",
        headers: {
          Authorization: process.env.STATISTICS_API as string,
          "Content-Type": "application/json",
        },
      }
    )
      .then((responseJson) => responseJson.json())
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  }
  return <button onClick={parserHandler}>parse</button>;
};

export default Incomes;
