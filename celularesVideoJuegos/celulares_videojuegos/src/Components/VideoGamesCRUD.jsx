import { React, useState, useEffect } from "react";
import axios from "axios";
import Tabla from "./Table";

function VideoGamesCRUD() {
  const [videogames, setvideogames] = useState();

  return (
    <div>
      <h2>Table rendering to show video games info.</h2>
    </div>
  );
}

export default VideoGamesCRUD;
