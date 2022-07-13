import React from "react";
import styles from "./MainInfo.module.scss";
import house from "../../imgs/mainhouse.svg"

const MainInfo: any = () => {
  return (
    <div className={styles.MainInfo}>
      <div className={styles.LeftInfo}>
        <h1>Find your custom matched commercial real estate space.</h1>
        <p>
          In oculis quidem exercitus quid ex ea consequatur?
          <br /> autem vel eum fugiat, quo pertineant ero tibique
        </p>
        <div className={styles.LeftInfo__Form}>
          <input placeholder={`Your email address`} type="e-mail" />
          <button>Subscribe</button>
        </div>
      </div>
      <img src={house}/>
    </div>
  );
};
export default MainInfo;
