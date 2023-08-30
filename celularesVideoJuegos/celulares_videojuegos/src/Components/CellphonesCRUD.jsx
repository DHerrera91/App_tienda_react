import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "./Table";

function CellphonesCRUD() {
  const [cellphones, setCellphones] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      let res = await axios(
        "https://denny2023.azurewebsites.net/api/celulares"
      );
      let data = await res.data;

      setCellphones(data);
    } catch (error) {
      alert(error);
      console.log(error);
    }
  }

  return (
    <div>
      {cellphones === undefined ? (
        <div>
          <h2>Loading</h2>
          <div className="spinner-border" role="status">
            <span className="visible-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <Table
          controler={"cellphones"}
          list={cellphones}
          cols={[
            "celularId",
            "brand",
            "model",
            "color",
            "price",
            "description",
            "operator",
          ]}
        />
      )}
    </div>
  );
}

export default CellphonesCRUD;
