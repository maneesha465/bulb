
import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";
import bulbOn from "./images/bulbon.jpg"; 
import bulbOff from "./images/bulboff.jpg"; 

const App = () => {
  const [turnOn, setTurnOn] = useState(false);
   const handleClick = () => {
    setTurnOn(!turnOn );
    
  };

  return (
    <div className="container d-flex flex-column justify-content-center align-items-center vh-100">
                   <img 
            src={turnOn ? bulbOn : bulbOff}
            alt="Bulb"
            className="bulb mt-5" 
          />
          
          <button 
        className="btn btn-secondary" 
        onClick={handleClick}
      >
        {turnOn ? "**OFF**" : "**ON**"}
      </button>
     </div>
    
  );
};

export default App;