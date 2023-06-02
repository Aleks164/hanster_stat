import { SalesItem } from "@/api";
import { KEYS } from "@/helpers/consts";
import React from "react";
import { useState } from "react";

const Sales = () => {
  const [data, setData] = useState([]);
  const saveTemplateAsFile = (filename, dataObjToWrite) => {
    const blob = new Blob([JSON.stringify(dataObjToWrite)], {
      type: "text/json",
    });
    const link = document.createElement("a");

    link.download = filename;
    link.href = window.URL.createObjectURL(blob);
    link.dataset.downloadurl = ["text/json", link.download, link.href].join(
      ":"
    );

    const evt = new MouseEvent("click", {
      view: window,
      bubbles: true,
      cancelable: true,
    });

    link.dispatchEvent(evt);
    link.remove();
  };
  async function parserHandler() {
    try {
      const responseJson = await fetch(
        "https://statistics-api.wildberries.ru/api/v1/supplier/sales?dateFrom=2023-05-22",
        {
          method: "GET",
          headers: {
            Authorization: KEYS.STATISTICS_API,
            "Content-Type": "application/json",
          },
        }
      );
      const result_1 = (await responseJson.json()) as SalesItem[];
      return saveTemplateAsFile("newFile.json", result_1);
    } catch (error) {
      return console.log(error);
    }
  }
  return <button onClick={parserHandler}>parse</button>;
};

export default Sales;
