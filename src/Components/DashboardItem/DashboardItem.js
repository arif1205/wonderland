import React from "react";
import { dashboardItemsData } from "../../data/dashboardItemdata";
import styles from "./dashboardItem.module.css";

const DashboardItem = () => {
  return (
    <div className={styles.container}>
      <div className={styles.box_container}>
        {dashboardItemsData.map((item, i) => (
          <div className={styles.item_box} key={i}>
            <h3>{item.title}</h3>
            <h2>{item.price}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardItem;
