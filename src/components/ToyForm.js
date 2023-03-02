import React, { useState } from "react";

function ToyForm({ addNewToy }) {
  const [toyName, setToyName] = useState('')
  const [toyImage, setToyImage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const newToy = {
      name: toyName,
      image: toyImage,
      likes: 0
    }
    fetch("http://localhost:3001/toys", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newToy),
    })
      .then((response) => response.json())
      .then((data) => addNewToy(data));

    e.target.reset()
  }


  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="add-toy-form">
        <h3>Create a toy!</h3>
        <input
          onChange={e => setToyName(e.target.value)}
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
        />
        <br />
        <input
          onChange={e => setToyImage(e.target.value)}
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
