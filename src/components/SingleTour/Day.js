import React, { useState } from "react";
import styles from "../../css/day.module.css";
import { FaAngleDown } from "react-icons/fa";

const Day = ({ day, info }) => {
  const [showInfo, setShowInfo] = useState(false);

  const toggleShowInfo = () => {
    setShowInfo(showInfo => !showInfo);
  };

  return (
    <article className={styles.day}>
      <h4>
        {day}
        <button className={styles.btn} onClick={toggleShowInfo}>
          <FaAngleDown />
        </button>
      </h4>
      {/* {showInfo && <p>{info}</p>} */}
      <p className={showInfo ? styles.showInfo : styles.info}>{info}</p>
    </article>
  );
};

export default Day;
