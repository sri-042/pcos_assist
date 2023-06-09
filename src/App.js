// import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Signup from "./components/SignUp/Signup";
import Awareness from "./components/Awareness/awareness";
// import { useEffect } from "react";
// import { auth } from "./firebase";
// import { useState } from "react";
function App() {
  // const [userName, setUserName] = useState("");
  // useEffect(() => {
  //   auth.onAuthStateChanged((user) => {
  //     if (user) {
  //       setUserName(user.displayName);
  //     } else setUserName("");
  //     console.log(user);
  //   });
  // }, []);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/awareness" element={<Awareness />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
