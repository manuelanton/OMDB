import React from "react";

const Register = props => (
  <form onSubmit={props.handleSubmit}>
    <label>Username: </label>
    <input type="text" onChange={e => props.handleUserInput(e)} />
    <label>Password: </label>
    <input type="password" onChange={e => props.handlePassInput(e)} />
    <button>REGISTER</button>
  </form>
);

export default Register;
