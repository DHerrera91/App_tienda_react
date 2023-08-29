import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import CellphonesCRUD from "./CellphonesCRUD";
import VideoGamesCRUD from "./VideoGamesCRUD";
import Menu from "./Menu";
import NotFound from "./NotFound";

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cellphones" element={<CellphonesCRUD />} />
        <Route path="/videogames" element={<VideoGamesCRUD />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
