import React from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";
function Home(props) {
  return (
    <div className={styles.container}>
      <div className={styles.innerBox}>
        <h1>
          <Link to="/login">Login</Link>
          <hr />
          <Link to="/signup">Signup</Link>
        </h1>
      </div>
      <br />
      <div className={styles.innerBox}>
        <img src="./awareness.png" alt="Awareness" />
        <h1>
          <br />
          <Link to="/login">Awareness Tutorials</Link>
        </h1>
      </div>
      <br /> <br /> <br />
      {/* <h2 className={styles.footer}>
        {props.name ? `Welcome - {props.name}` : "Login please"}{" "}
      </h2> */}
    </div>
  );
}
export default Home;
