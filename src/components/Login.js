import React, { useState } from "react";
import styles from "./styles/Login.module.css";
import InputControl from "./InputCtrl";
import { Link, useNavigate } from "react-router-dom";
import {
  // createUserWithEmailAndPassword,

  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase";
function Login() {
  const [values, setValues] = useState({
    email: "",
    pass: "",
  });
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();
  const handleSubmission = () => {
    if (!values.email || !values.pass) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");
    // console.log(values);
    setSubmitButtonDisabled(true);

    signInWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        // console.log(res);
        const user = res.user;
        console.log(user);
        await updateProfile(user, {
          displayName: values.name,
        });
        navigate("/options");
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
        console.log("Error-", err);
      });
  };
  return (
    <div className={styles.container}>
      <div className={styles.innerBox}>
        <h1 className={styles.heading}>Login</h1>

        <InputControl
          label="Email"
          onChange={(e) =>
            setValues((prev) => ({ ...prev, email: e.target.value }))
          }
          placeholder="Enter email address"
        />
        <InputControl
          label="Password"
          onChange={(e) =>
            setValues((prev) => ({ ...prev, pass: e.target.value }))
          }
          placeholder="Enter password"
        />
        <div className={styles.footer}>
          <b className={styles.error}>{errorMsg}</b>
          <button disabled={submitButtonDisabled} onClick={handleSubmission}>
            Login
          </button>
          <p>
            Already have an account ?{" "}
            <span>
              <Link to="/signup">Sign up</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
export default Login;
