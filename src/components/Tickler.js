import React from "react";

function Tickler() {
  function tickle() {
    console.log("Teehee!");
  }
  // Our event listener, prop onClick takes a callback function as a value => function reference
  return <button onClick={tickle}>Tickle me!</button>;
}

export default Tickler;
