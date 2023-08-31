import React from "react";
import cardImage1 from "../Images/pattern-randomized.svg";

function Home() {
  return (
    <div className="d-flex justify-content-center p-5">
      <div>
        <img
          style={{ width: "50vw" }}
          src={cardImage1}
          className="card-img-top p-5"
          alt="Background image"
        />
        <div className="card-body">
          <p
            className="card-text"
            style={{ color: "darkgrey", fontSize: "20px" }}
          >
            Find what´s in the video games and cellphones stock!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
