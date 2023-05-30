import React from "react";
import { useState } from "react";

const Parser = () => {
  const [data, setData] = useState([]);
  async function parserHendler() {
    // try {
    const response = await fetch(
      "https://catalog.wb.ru/brands/h/catalog?appType=1&brand=19985&curr=rub&dest=12358457&page=23&regions=80,115,38,4,64,83,33,68,70,69,30,86,40,1,66,110,22,31,48,114&sort=popular&spp=20",
      {
        mode: "no-cors",
        headers: {
          Accept: "*/*",
          "Accept-Language": "ru,en;q=0.9",
          Connection: "keep-alive",
          Origin: "https://www.wildberries.ru",
          Referer:
            "https://www.wildberries.ru/brands/hanster?sort=popular&page=23",
          "Sec-Fetch-Dest": "empty",
          "Sec-Fetch-Mode": "cors",
          "Sec-Fetch-Site": "cross-site",
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 YaBrowser/23.3.4.603 Yowser/2.5 Safari/537.36",
          "sec-ch-ua":
            '"Chromium";v="110", "Not A(Brand";v="24", "YaBrowser";v="23"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
        },
      }
    );

    // window.fetch(
    //   "https://catalog.wb.ru/brands/h/catalog?appType=1&brand=19985&curr=rub&dest=12358457&page=1&regions=80,115,38,4,64,83,33,68,70,69,30,86,40,1,66,110,22,31,48,114&sort=popular&spp=20",
    //   {
    //     mode: "no-cors",
    //     method: "get",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   }
    // );
    console.log(response);

    const recipe = await response.json();
    // if (recipe.message) throw new Error(recipe.message);
    console.log(recipe);
    // } catch (e) {
    //   console.log(e);
    //   throw new Error("request denied");
    // }
  }
  return <button onClick={parserHendler}>parse</button>;
};

export default Parser;
