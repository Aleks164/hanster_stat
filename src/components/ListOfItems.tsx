import React, { useEffect, useState } from "react";
import { SalesItem } from "@/api";
import data from "@/data/sales.json";

function ListOfItems() {
  console.log(data.data.products);
  const [itemsList, setItemsList] = useState([]);
  const [selectedDate, setSelectedDate] = useState([]);

  useEffect(() => {
    const products = (data as any).data.products as SalesItem[];
    const filteredProducts = products.filter((p) => p.id === selectedDate);
    setItemsList(data.data.products);
  }, [data]);
  return <div>ListOfItems</div>;
}

export default ListOfItems;
