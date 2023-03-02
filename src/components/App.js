import React, { useEffect, useState } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);

  const [toysArray, setToysArray] = useState([])


  useEffect(() => {
    fetch('http://localhost:3001/toys')
      .then(r => r.json())
      .then(setToysArray)
  }, [])

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  const addNewToy = (newToyObj) => {
    setToysArray([...toysArray, newToyObj])
  }

  const removeToyFromState = (doomedToyId) => {
    const filteredToysArray = toysArray.filter(toyObject => {
      return toyObject.id !== doomedToyId
    })
    setToysArray(filteredToysArray)
  }


  return (
    <>
      <Header />
      {showForm ? <ToyForm addNewToy={addNewToy} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toysArray} removeToyFromState={removeToyFromState} />
    </>
  );
}

export default App;
