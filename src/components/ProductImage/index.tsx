import React from "react";
import getImgSrc from "@/constants/getImageSrc";
import styles from "./styles.module.css";

function ProductImage({
  value,
  record,
}: {
  value: number;
  record: Record<string, string>;
}) {
  return (
    <div className={styles.goods_pictures_container}>
      <img
        className={styles.goods_pictures}
        src={getImgSrc(value)}
        alt={record.subject_name}
      />
    </div>
  );
}

export default ProductImage;
