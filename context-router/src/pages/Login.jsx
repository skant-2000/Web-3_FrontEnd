import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { AuthContext } from "../context/AuthContext"
import style from "../styles/Login.module.css"

export default function Login() {

  const {setToken} = useContext(AuthContext)

  const [input, setInput] = useState({ email: "", password: "" });

  const handleInputChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = () => {
    if ( input.email === "" || input.password === "" ) {
        alert('Fill Login Form')
    }
    else {
    fetch("https://reqres.in/api/login", {
    method: "POST",
    headers: {'Content-Type': 'application/json'}, 
    body: JSON.stringify(input),
    })
    .then((result) => result.json())
    .then((data) => {
        setToken(data);
    })
    .catch((err) => {
        console.error(err);
    });
    }
  };

  return (
    <div className={style.login}>
      <div>
        <label>Email : </label>
        <input
          type="email"
          name="email"
          value={input.email}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Password : </label>
        <input
          type="password"
          name="password"
          value={input.password}
          onChange={handleInputChange}
        />
      </div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
