import React from "react";
import { useState } from "react";

const Info = () => {
  const [data, setData] = useState([]);
  async function parserHandler() {
    fetch("https://suppliers-api.wildberries.ru/public/api/v1/info", {
      method: "GET",
      headers: {
        Authorization: process.env.STANDARD_API as string,
        "Content-Type": "application/json",
      },
    })
      .then((responseJson) => responseJson.json())
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  }
  return <button onClick={parserHandler}>parse</button>;
};

export default Info;
