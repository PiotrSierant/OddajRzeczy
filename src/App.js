import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home/Home.js";
import styles from "./App.module.scss";
import { NotFound } from "./components/NotFound";

function App() {
  return (
    <Router>
      <div className={styles.container}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/OddajRzeczy" element={<Home />} />
          {/*<Route path="/logowanie" element={<Login />} />*/}
          {/*<Route path="/rejestracja" element={<Register />} />*/}
          {/*<Route path="/wylogowano" element={<Logout />} />*/}
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
