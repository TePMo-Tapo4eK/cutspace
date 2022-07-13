import React from "react";
import styles from "./Space.module.scss";
import houseicon from "../../imgs/icon-house.svg";
import house1 from '../../imgs/space1.svg'
import house2 from '../../imgs/space2.svg'

const Space: any = () => {
  return (
    <div className={styles.Space}>
      <div className={styles.Space__Info}>
        <h1>We provide best space for you!</h1>
        <p>
          Quid ex eo ortum, tam inportuno tamque crudeli; sin, ut aliquid ex ea
          quid est et via procedat oratio quaerimus.
        </p>
        <p>
          quid aut ad id omnia referri oporteat, ipsum autem nusquam hoc
          epicurus in ea commodi consequatur?
        </p>
        <button>Learn more</button>
      </div>
      <div className={styles.float}>
        <img alt="img" src={houseicon} />
        <div className={styles.float__text}>
          <h2>Twelve West Lake</h2>
          <p>Space for up to 150 people</p>
        </div>
      </div>
      <div className={styles.float__imgs}>
        <img alt='img' src={house1}/>
        <img alt='img' src={house2}/>
      </div>
    </div>
  );
};
export default Space;
