import React from "react";
import styles from "./Words.module.scss";
import girl1 from "../../imgs/words/girl.svg";
import girl2 from "../../imgs/words/twogirl.svg";
import girl3 from "../../imgs/words/withjuice.svg";

const Words: any = () => {
  return (
    <div className={styles.Words}>
      <div className={styles.Words__text}>
        <h1>
          Thanks for your nice <br /> words to us
        </h1>
        <p>
          Si sine causa, nollem me tamen laudandis <br />
          maioribus meis corrupisti nec voluptas
        </p>
      </div>
      <div className={styles.Words__carts}>
        <div className={styles.Words__cart}>
          <img src={girl1} />
          <div className={styles.Words__cart_text}>
            <p>
              "Omne animal, simul atque integre iudicante itaque earum motus
              et."
            </p>
            <div className={styles.Words__cart_text_author}>
              <h4>Arend Pellewever</h4>
              <h5>Baltimore</h5>
            </div>
          </div>
          <svg
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="25" cy="25" r="25" fill="white" />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M33.2111 24.6056C33.9482 24.9741 33.9482 26.0259 33.2111 26.3944L21.4472 32.2764C20.7823 32.6088 20 32.1253 20 31.382V19.618C20 18.8747 20.7823 18.3912 21.4472 18.7236L33.2111 24.6056Z"
              fill="#F78434"
            />
          </svg>
        </div>
        <div className={styles.Words__cart}>
          <img src={girl2} />
          <div className={styles.Words__cart_text}>
            <p>
            "In quo quaerimus, non emolumento aliquo, sed quia voluptas sit."
            </p>
            <div className={styles.Words__cart_text_author}>
              <h4>Leo Knight</h4>
              <h5>Cleveland</h5>
            </div>
          </div>
          <svg
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="25" cy="25" r="25" fill="white" />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M33.2111 24.6056C33.9482 24.9741 33.9482 26.0259 33.2111 26.3944L21.4472 32.2764C20.7823 32.6088 20 32.1253 20 31.382V19.618C20 18.8747 20.7823 18.3912 21.4472 18.7236L33.2111 24.6056Z"
              fill="#F78434"
            />
          </svg>
        </div>
        <div className={styles.Words__cart}>
          <img src={girl3} />
          <div className={styles.Words__cart_text}>
            <p>"Filium morte multavit si sine causa? quae fuerit causa, nollem."</p>
            <div className={styles.Words__cart_text_author}>
              <h4>Lisanne Viscaal</h4>
              <h5>Lyon</h5>
            </div>
          </div>
          <svg
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="25" cy="25" r="25" fill="white" />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M33.2111 24.6056C33.9482 24.9741 33.9482 26.0259 33.2111 26.3944L21.4472 32.2764C20.7823 32.6088 20 32.1253 20 31.382V19.618C20 18.8747 20.7823 18.3912 21.4472 18.7236L33.2111 24.6056Z"
              fill="#F78434"
            />
          </svg>
        </div>
        <svg
          width="80"
          height="80"
          viewBox="0 0 80 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M40 40L39.97 0C18.0382 0.0162937 0 18.0679 0 40C0 61.9434 18.0566 80 40 80C61.9434 80 80 61.9434 80 40H40Z"
            fill="#58BEBF"
          />
        </svg>
      </div>
    </div>
  );
};
export default Words;
