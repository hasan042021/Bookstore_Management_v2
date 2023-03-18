import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Add from "./components/add/Add";
import Edit from "./components/edit/Edit";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";

function App() {
  const [search, setSearch] = useState("");
  return (
    <div className="App">
      <Router>
        <Navbar setSearch={setSearch} />
        <Routes>
          <Route path="/" element={<Home search={search} />} />
          <Route path="/edit/:bookId" element={<Edit />} />
          <Route path="/create" element={<Add />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
