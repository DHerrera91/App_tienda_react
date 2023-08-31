import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function VideoGamesForm({ del }) {
  const [title, setTitle] = useState("");
  const [description, setDescripcion] = useState("");
  const [platform, setPlatform] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");

  const Navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id != undefined) {
      loadVideoGame();
    }
  }, []);

  async function loadVideoGame() {
    try {
      let res = await axios(
        "https://denny2023.azurewebsites.net/api/juegos/" + id
      );
      let data = await res.data;

      setTitle(data.title);
      setDescripcion(data.description);
      setPlatform(data.platform);
      setPrice(data.price);
      setCategory(data.category);
    } catch (error) {
      alert(error);
      console.log(error);
    }
  }

  async function add() {
    try {
      let videogame = {
        titulo: title,
        descripcion: description,
        plataforma: platform,
        precio: price,
        categoria: category,
      };

      let res = await axios.post(
        "https://denny2023.azurewebsites.net/api/juegos",
        videogame
      );
      let data = await res.data;

      if (data.status === 1) {
        alert(data.message);
        Navigate("/videogames");
      }
    } catch (error) {
      alert(error);
      console.log(error);
    }
  }

  async function edit() {
    try {
      let videogame = {
        juegoId: id,
        titulo: title,
        descripcion: description,
        plataforma: platform,
        precio: price,
        categoria: category,
      };

      let res = await axios.put(
        "https://denny2023.azurewebsites.net/api/juegos",
        videogame
      );
      let data = await res.data;

      if (data.status === 1) {
        alert(data.message);
        Navigate("/videogames");
      }
    } catch (error) {
      console.log(error);
      if (error.response.status === 404 || error.response.status === 500) {
        alert("The record no longer exists");
        Navigate("/videogames");
      }
    }
  }

  async function eliminate() {
    try {
      let res = await axios.delete(
        "https://denny2023.azurewebsites.net/api/juegos?id=" + id
      );
      let data = await res.data;

      if (data.status === 1) {
        alert(data.message);
        Navigate("/videogames");
      }
    } catch (error) {
      alert("The record no longer exists");
      console.log(error);
    }
  }

  function submit(e) {
    const form = document.querySelector("#form");
    e.preventDefault();
    e.stopPropagation();
    if (form.checkValidity()) {
      if (id === undefined) add();
      else if (del === undefined) edit();
      else eliminate();
    }

    form.classList.add("was-validated");
  }

  function cancel() {
    Navigate("/videogames");
  }

  return (
    <div>
      <form id="form" className="needs-validation" noValidate>
        {id != undefined ? (
          <div className="form-group">
            <label className="form-label">ID</label>
            <input className="form-control" value={id} readOnly disabled />
          </div>
        ) : (
          ""
        )}

        <div className="form-group">
          <label className="form-label">Title</label>
          <input
            className="form-control"
            value={title}
            type="text"
            required
            onChange={(e) => setTitle(e.target.value)}
            disabled={del === undefined ? false : true}
          />
          <div className="valid-feedback">OK</div>
          <div className="invalid-feedback">Required field</div>
        </div>
        <div className="form-group">
          <label className="form-label">Description</label>
          <input
            className="form-control"
            value={description}
            type="text"
            required
            onChange={(e) => setDescripcion(e.target.value)}
            disabled={del === undefined ? false : true}
          />
          <div className="valid-feedback">OK</div>
          <div className="invalid-feedback">Required field</div>
        </div>
        <div className="form-group">
          <label className="form-label">Platform</label>
          <input
            className="form-control"
            value={platform}
            type="text"
            required
            onChange={(e) => setPlatform(e.target.value)}
            disabled={del === undefined ? false : true}
          />
          <div className="valid-feedback">OK</div>
          <div className="invalid-feedback">Required field</div>
        </div>
        <div className="form-group">
          <label className="form-label">Price</label>
          <input
            className="form-control"
            value={price}
            type="text"
            required
            onChange={(e) => setPrice(e.target.value)}
            disabled={del === undefined ? false : true}
          />
          <div className="valid-feedback">OK</div>
          <div className="invalid-feedback">Required field</div>
        </div>
        <div className="form-group">
          <label className="form-label">Category</label>
          <input
            className="form-control"
            value={category}
            type="text"
            required
            onChange={(e) => setCategory(e.target.value)}
            disabled={del === undefined ? false : true}
          />
          <div className="valid-feedback">OK</div>
          <div className="invalid-feedback">Required field</div>
        </div>
        <hr />
        <button
          className={
            "btn btn-" +
            (id === undefined
              ? "success"
              : del === undefined
              ? "primary"
              : "danger")
          }
          onClick={(e) => submit(e)}
        >
          {id === undefined ? "add" : del === undefined ? "edit" : "eliminate"}
        </button>
        <button className="btn btn-danger" onClick={cancel}>
          Cancel
        </button>
      </form>
    </div>
  );
}

export default VideoGamesForm;
