import React from 'react';
import Axios from 'axios';

const center = {
  marginLeft:'800px'
}

const sports = () => {
  console.log("making the call for sports via client");
   Axios.post("http://localhost:5000/sports",{
     type: "sportsFrontEnd"
   }).then((response) => {  
     console.log(response);
   });
};

const entertainment = () => {
  console.log("making the call for entertainment via client");
   Axios.post("http://localhost:5000/entertainment",{
     type: "entertainmentFrontEnd"
   }).then((response) => {  
     console.log(response);
   });
};

const news = () => {
  console.log("making the call for news via client");
   Axios.post("http://localhost:5000/news",{
     type: "newsFrontEnd"
   }).then((response) => {  
     console.log(response);
   });
};

const music = () => {
  console.log("making the call for music via client");
   Axios.post("http://localhost:5000/music",{
     type: "musicFrontEnd"
   }).then((response) => {  
     console.log(response);
   });
};

const miscellanous = () => {
  console.log("making the call for miscellanous via client");
   Axios.post("http://localhost:5000/miscellanous",{
     type: "miscellanousFrontEnd"
   }).then((response) => {  
     console.log(response);
   });
};

function App() {
  return (
    <div className="App">
      <br/>
      <br/>
      <button style ={center} onClick ={sports}>Sports</button>
      <br/>
      <br/>
      <button style={center} onClick = {entertainment}>Entertainment</button>
      <br/>
      <br/>
      <button style ={center} onClick = {news}>News</button>
      <br/>
      <br/>
      <button style = {center} onClick = {music}>Music</button>
      <br/>
      <br/>
      <button style ={center} onClick ={miscellanous}>Miscellanous</button>

    </div>
  );
}

export default App;
