import React, { useState } from "react";

function ToyCard({ name, image, likes, id, removeToyFromState }) {

  const handleDelete = () => {
    fetch(`http://localhost:3001/toys/${id}`, { method: 'DELETE' })
    removeToyFromState(id)
  }


  const [toyLikes, setToyLikes] = useState(likes)

  const handleAddLikes = () => {

    let newLikes = toyLikes + 1

    fetch(`http://localhost:3001/toys/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        likes: newLikes
      }),
    })
      .then(response => response.json())
      .then(setToyLikes(newLikes))
  }

  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{toyLikes} Likes </p>
      <button onClick={handleAddLikes} className="like-btn">Like {"<3"}</button>
      <button onClick={handleDelete} className="del-btn">Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
