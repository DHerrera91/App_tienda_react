import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import CellphonesCRUD from "./CellphonesCRUD";
import VideoGamesCRUD from "./VideoGamesCRUD";
import CellphonesForm from "./CellphonesForm";
import VideoGamesForm from "./VideoGamesForm";
import Menu from "./Menu";
import NotFound from "./NotFound";

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cellphones" element={<CellphonesCRUD />} />
        <Route path="/cellphones/new" element={<CellphonesForm />} />
        <Route path="/cellphones/edit/:id" element={<CellphonesForm />} />
        <Route
          path="/cellphones/delete/:id"
          element={<CellphonesForm del={true} />}
        />
        <Route path="/videogames" element={<VideoGamesCRUD />} />
        <Route path="/videogames/new" element={<VideoGamesForm />} />
        <Route path="/videogames/edit/:id" element={<VideoGamesForm />} />
        <Route
          path="/videogames/delete/:id"
          element={<VideoGamesForm del={true} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
