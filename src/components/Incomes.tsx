import { KEYS } from "@/helpers/consts";
import React from "react";
import { useState } from "react";

const Incomes = () => {
  const [data, setData] = useState([]);
  async function parserHendler() {
    fetch(
      "https://statistics-api-sandbox.wildberries.ru/api/v1/supplier/incomes?dateFrom=2023-05-20",
      {
        method: "GET",
        headers: {
          Authorization: KEYS.STATISTICS_API,
          "Content-Type": "application/json",
        },
      }
    )
      .then((responseJson) => responseJson.json())
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  }
  return <button onClick={parserHendler}>parse</button>;
};

export default Incomes;
