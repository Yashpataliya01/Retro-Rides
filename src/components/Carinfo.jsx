import { useEffect, useState } from "react";
import React from "react";
import styles from "./Carinfo.module.css";
import { useLocation } from "react-router-dom";
function Carinfo() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [data, setdata] = useState(location.state.data);
  return (
    <>
      <div className={styles.info}>
        <div className={styles.carlogo}>
          <img src={location.state.logo} alt="" />
        </div>
        <div className={styles.details}>
          <p>{location.state.info}</p>
          <h1>MODELS</h1>
          <div className={styles.models}>
            <div className={styles.model1}>
              <img src={data[0].img} alt="" />
              <h1>{data[0].year}</h1>
            </div>
            <hr />
            <div className={styles.model1}>
              <h1>{data[1].year}</h1>
              <img src={data[1].img} alt="" />
            </div>
            <hr />
            <div className={styles.model1}>
              <img src={data[2].img} alt="" />
              <h1>{data[2].year}</h1>
            </div>
            <hr />
            <div className={styles.model1}>
              <h1>{data[3].year}</h1>
              <img src={data[3].img} alt="" />
            </div>
            <hr />
            <div className={styles.model1}>
              <img src={data[4].img} alt="" />
              <h1>{data[4].year}</h1>
            </div>
            <hr />
            <div className={styles.model1}>
              <h1>{data[5].year}</h1>
              <img src={data[5].img} alt="" />
            </div>
            <hr />
            <div className={styles.model1}>
              <img src={data[6].img} alt="" />
              <h1>{data[6].year}</h1>
            </div>
            <hr />
            <div className={styles.model1}>
              <h1>{data[7].year}</h1>
              <img src={data[7].img} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Carinfo;
