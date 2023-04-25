import React from "react";
import { Link } from "react-router-dom";
import styles from "./awareness.module.css";
function Awareness(props) {
  return (
    <div className={styles.container}>
      <div className={styles.innerBox}>
        <h1>
          <Link to="/login">Food Based diet recommendation</Link>
        </h1>
      </div>
      <br />
      <div className={styles.innerBox}>
        <h1>
          <Link to="/login">Yoga & Lifestyle Suggestions</Link>
        </h1>
      </div>
      <br /> <br /> <br />
      {/* <h2 className={styles.footer}>
        {props.name ? `Welcome - {props.name}` : "Login please"}{" "}
      </h2> */}
    </div>
  );
}
export default Awareness;
