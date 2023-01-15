import React, { useEffect, useState } from "react";
import "./App.css";
import { createUser, getData, handleAddClick, handleClick, updateData } from "./functions ";
function App() {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  
  function setEmailChange(e) {
    setEmail(e.target.value);
  }
  function setPasswordChange(e) {
    setPassword(e.target.value);
  }

  useEffect(() => {
    getData()
  },[])

  return (
    <div className="App">
      <div>
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={email}
          onChange={setEmailChange}
        />
        <input
          type="text"
          placeholder="Password"
          name="password"
          value={password}
          onChange={setPasswordChange}
        />
      </div>
      <button type="button" onClick={getData}>
        Get
      </button>
      <button type="button" onClick={updateData}>
        Update
      </button>
      <button type="button" onClick={handleClick}>
        Signin
      </button>
      <button type="button" onClick={()=>{handleAddClick(email, password)}}>
        Add
      </button>
      <button type="button" onClick={()=>{createUser(email, password)}}>
        Create
      </button>
    </div>
  );
}

export default App;
