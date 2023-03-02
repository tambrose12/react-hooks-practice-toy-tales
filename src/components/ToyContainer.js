import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys, removeToyFromState }) {

  const renderToyCards = toys.map(toyObj => {
    return <ToyCard key={toyObj.id} {...toyObj} removeToyFromState={removeToyFromState} />
  })


  return (
    <div id="toy-collection">{renderToyCards}</div>
  );
}

export default ToyContainer;
