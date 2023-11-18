import React, { useState, useEffect } from "react"; // Step1: importing Hooks for statemanagement and data loding
import "./App.css";

function App() {
  // Step2: create state variable => "data" and function => "setData" 
  // "useState" taken initial state, which is just an empty array
  const [data, setData] = useState([]); 

  // Data fetching
  // The function that is passed into useEffect is going to run after the render
  // callback function
  useEffect(() => {
    
    // create function "featchData", async function is going to go make that HTTP request using the browser's fetch API
    const fetchData = async () => {

      // async function await, means function wait for the data
      const result = await fetch("https://orangevalleycaa.org/api/videos").then(
        (response) => response.json()  // take response from api using Json
      );

      setData(result);

    };

    fetchData();

  }, []); // empty array, only fetch the data when component in mounts.

  return (
    <div className="App">
      <header className="App-header">
        <h1>Videos</h1>
      </header>

        {/* use fetch data  */}
        {/* add JSX statement, JSX expression  */}
        {data.map(video => (
            // every time rendering dynamic childern, we need to give thaem an ID 
          <div key={video.id}>
            <h2>{video.name}</h2>
            <video height={200} controls src={video.video_url}/>
          </div>
        ))}

    </div>
  );
}
export default App;
