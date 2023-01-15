import React, { useState } from "react";
import "./App.css";
import { sendFile } from "./functions ";
function Firestore() {
  const [file, setFile] = useState({});

  function setFileChange(e) {
    setFile(e.target.files[0]);
  }

  return (
    <div className="App">
      <div>
        <input type="file" onChange={setFileChange} />
      </div>
      <button
        type="button"
        onClick={() => {
          sendFile(file);
        }}
      >
        Get
      </button>
    </div>
  );
}

export default Firestore;
