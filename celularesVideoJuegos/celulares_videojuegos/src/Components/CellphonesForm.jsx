import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function AutoresFORM({ del }) {
  const [marca, setMarca] = useState("");
  const [modelo, setModelo] = useState("");
  const [color, setColor] = useState("");
  const [precio, setPrecio] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [operadora, setOperadora] = useState("");

  const Navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id != undefined) {
      //cargar datos
      loadCellphone();
    }
  }, []);

  async function loadCellphone() {
    try {
      let res = axios("https://denny2023.azurewebsites.net/api/celulares" + id);
      let data = await res.data;

      setMarca(data.marca);
      setModelo(data.modelo);
      setColor(data.color);
      setPrecio(data.precio);
      setDescripcion(data.descripcion);
      setOperadora(data.operadora);
    } catch (error) {
      alert(error);
      console.log(error);
    }
  }

  return <div></div>;
}
