import React from "react";
import cardImage1 from "../Images/CellPhoneImage.jpg";

function Home() {
  return (
    <div className="d-flex justify-content-center align-items-center p-5">
      <div>
        <img
          style={{ width: "50vw" }}
          src={cardImage1}
          className="card-img-top p-5"
          alt="Background image"
        />
        <div className="card-body">
          <p
            className="card-text "
            style={{ color: "#2F4F4F", fontSize: "20px", fontWeight: "Bold" }}
          >
            Find what´s in the video games and cell phones stock!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
