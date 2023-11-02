import React from "react";

function Login() {
  // forms work with onsubmit => handle data that has been submitted
  function handleSubmit(event) {
    event.preventDefault(); // prevent form from making a network request
    console.log(event);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="username" placeholder="Enter username..." />
      <input type="password" name="password" placeholder="Enter password..." />
      <button>Login</button>
    </form>
  );
}

export default Login;
