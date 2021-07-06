import React, { useState } from "react";

function App() {
  
  const time = new Date().toLocaleTimeString();


const [getTime, setTime]= useState(time);

function updateTime(){
  const newTime= new Date().toLocaleTimeString();
  setTime(newTime);
} 

setInterval(updateTime, 1000)

  return (
    <div className="container">
      <h1>{getTime}</h1>
      <button onClick={updateTime}>Get Time</button>
  
    </div>
  );
}

export default App;
