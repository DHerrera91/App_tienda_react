import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "./Table";

function CellphonesCRUD() {
  const [cellphones, setCellphones] = useState();

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
          <button className="btn btn-info" type="button" disabled>
            <span
              className="spinner-border spinner-border-sm"
              role="status"
              aria-hidden="true"
            ></span>
            Loading...
          </button>
        </div>
      ) : (
        <Table
          controler={"cellphones"}
          list={cellphones}
          cols={[
            "Celular Id",
            "Brand",
            "Model",
            "Color",
            "Price",
            "Description",
            "Operator",
          ]}
        />
      )}
    </div>
  );
}

export default CellphonesCRUD;
