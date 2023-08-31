import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "./Table";

function VideoGamesCRUD() {
  const [videogames, setVideoGames] = useState();

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      let res = await axios("https://denny2023.azurewebsites.net/api/juegos");
      let data = await res.data;

      setVideoGames(data);
    } catch (error) {
      alert(error);
      console.log(error);
    }
  }

  return (
    <div>
      {videogames === undefined ? (
        <div>
          <button className="btn btn-info" type="button" disabled>
            <span
              className="spinner-border spinner-border-md"
              role="status"
              aria-hidden="true"
            ></span>
            Loading...
          </button>
        </div>
      ) : (
        <Table
          controler={"videogames"}
          list={videogames}
          cols={[
            "Game Id",
            "Title",
            "Description",
            "Platform",
            "Price",
            "Cathegory",
          ]}
        />
      )}
    </div>
  );
}

export default VideoGamesCRUD;
