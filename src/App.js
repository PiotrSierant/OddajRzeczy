import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import styles from "./App.module.scss";
import { Home } from "./components/Home/Home.js";
import { NotFound } from "./components/NotFound";

function App() {
  return (
    <Router>
      <div className={styles.container}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
