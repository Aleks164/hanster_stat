import React from "react";
import getImgSrc from "@/constants/getImageSrc";
import { TableStatRowInfoType } from "@/Pages/TabTables/onSetData";
import styles from "./styles.module.css";

function ProductImage({
  value,
  record,
}: {
  value: number;
  record: TableStatRowInfoType;
}) {
  return (
    <div className={styles.goods_pictures_container}>
      <img
        className={styles.goods_pictures}
        src={getImgSrc(value)}
        alt={record.subject}
      />
    </div>
  );
}

export default ProductImage;
