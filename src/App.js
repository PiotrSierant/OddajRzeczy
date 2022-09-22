import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Home/Home.js";
import { NotFound } from "./components/NotFound";
import { Login } from "./components/Login/Login";
import { Register } from "./components/Register/Register";
import { Logout } from "./components/Logout/Logout";
import { HomeOddajRzeczy } from "./components/OddajRzeczy/HomeOddajRzeczy";
import styles from "./App.module.scss";
import { auth } from "./config/fire";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (auth.currentUser) {
      setUser(auth.currentUser.email);
    }
  }, []);
  return (
    <div className={styles.container}>
      <Routes>
        <Route path="/" element={<Home setUser={setUser} user={user} />} />
        <Route path="/Home" element={<Home setUser={setUser} user={user} />} />
        <Route
          path="/OddajRzeczy"
          element={<Home setUser={setUser} user={user} />}
        />
        <Route path="/logowanie" element={<Login />} />
        <Route path="/rejestracja" element={<Register />} />
        <Route path="/wylogowano" element={<Logout />} />
        <Route path="/oddaj-rzeczy" element={<HomeOddajRzeczy />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
