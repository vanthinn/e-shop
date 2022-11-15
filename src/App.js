import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./page/Home";
import Catalog from "./page/Catalog";
import Header from "./component/Header";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
      </Routes>
    </div>
  );
}

export default App;
