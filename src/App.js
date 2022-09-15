import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Home } from "./components/Home/Home.js";
import { NotFound } from "./components/NotFound";
import { Login } from "./components/Login/Login";
import { Register } from "./components/Register/Register";
import styles from "./App.module.scss";

function App() {
  const [isLogged, setIsLogged] = useState(null);
  const navigate = useNavigate();

  function logInLogOut(user) {
    setIsLogged(user);
  }

  useEffect(() => {
    if (isLogged) {
      navigate("/Home");
    }
  }, [isLogged]);

  return (
    <div className={styles.container}>
      <Routes>
        <Route path="/" element={<Home isLogged={isLogged} />} />
        <Route path="/Home" element={<Home isLogged={isLogged} />} />
        <Route path="/OddajRzeczy" element={<Home isLogged={isLogged} />} />
        <Route
          path="/logowanie"
          element={<Login logInLogOut={logInLogOut} />}
        />
        <Route
          path="/rejestracja"
          element={<Register logInLogOut={logInLogOut} />}
        />
        {/*<Route path="/wylogowano" element={<Logout />} />*/}
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
