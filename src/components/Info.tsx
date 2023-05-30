import { KEYS } from "@/helpers/consts";
import React from "react";
import { useState } from "react";

const Info = () => {
  const [data, setData] = useState([]);
  async function parserHendler() {
    fetch("https://suppliers-api.wildberries.ru/public/api/v1/info", {
      method: "GET",
      headers: {
        Authorization: KEYS.STANDART_API,
        "Content-Type": "application/json",
      },
    })
      .then((responseJson) => responseJson.json())
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  }
  return <button onClick={parserHendler}>parse</button>;
};

export default Info;
