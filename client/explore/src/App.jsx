import React from 'react';
import Axios from 'axios';
// import Button from 'react-bootstrap';
import { Button, Card } from 'react-bootstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const headingtext = {
  fontFamily: 'Courier New',
  marginLeft:'720px',
  fontSize:'60px'

}


const text = {
  fontFamily: 'Courier New',
  fontSize: '30px',
  marginLeft: '50px'

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
      <h1 style = {headingtext}>EXPLORE</h1>
      <br/>
      <h2 style ={text}>  Bored? Don't worry our team at EXPLORE has got you covered with our random exploration tool. As shown below are some generic categories ranging from sports and entertainment to music and news plus an additional miscellanous option for you to explore!</h2>
    <br/>
    <br/>

      <Card
      bg={"secondary".toLowerCase()}
      key={"secondary"}
      text={"secondary".toLowerCase() === 'light' ? 'dark' : 'white'}
      style={{ width: '18rem',marginLeft: '680px' }}
      className="mb-2"
      >
      <Card.Body>
        <Card.Title>Sports</Card.Title>
        <Card.Text>
          Explore the vast collection of sports media and other resources such as statistics, videos and much more...
        </Card.Text>
      <Button variant="primary" onClick={sports}>Sports</Button>
      </Card.Body>
      </Card>

      <Card
      bg={"secondary".toLowerCase()}
      key={"secondary"}
      text={"secondary".toLowerCase() === 'light' ? 'dark' : 'white'}
      style={{ width: '18rem',marginLeft: '680px'}}
      className="mb-2"
      >
      <Card.Body>
        <Card.Title>Entertainment</Card.Title>
        <Card.Text>
          Looking to unwind? Try our entertainment option for a pleasant surprise...
        </Card.Text>
      <Button variant="primary" onClick={entertainment}>Entertainment</Button>
      </Card.Body>
      </Card>    

      <Card
      bg={"secondary".toLowerCase()}
      key={"secondary"}
      text={"secondary".toLowerCase() === 'light' ? 'dark' : 'white'}
      style={{ width: '18rem', marginLeft: '680px' }}
      className="mb-2"
      >
      <Card.Body>
        <Card.Title>News</Card.Title>
        <Card.Text>
          A perfect option for catching up on current world events. Click below to broaden your horizons...
        </Card.Text>
      <Button variant="primary" onClick={news}>News</Button>
      </Card.Body>
      </Card>

      <Card
      bg={"secondary".toLowerCase()}
      key={"secondary"}
      text={"secondary".toLowerCase() === 'light' ? 'dark' : 'white'}
      style={{ width: '18rem', marginLeft: '680px' }}
      className="mb-2"
      >
      <Card.Body>
        <Card.Title>Music</Card.Title>
        <Card.Text>
          Explore the vast collection of sounds and tools to not only consume but also create...
        </Card.Text>
      <Button variant="primary" onClick={music}>Music</Button>
      </Card.Body>
      </Card>  

      <Card
      bg={"secondary".toLowerCase()}
      key={"secondary"}
      text={"secondary".toLowerCase() === 'light' ? 'dark' : 'white'}
      style={{ width: '18rem', marginLeft: '680px' }}
      // className="mb-2"
      >
      <Card.Body>
        <Card.Title>Miscellanous</Card.Title>
        <Card.Text>
          As the name suggest this option is rather ambiguous click for a pleasant surprise... 
        </Card.Text>
      <Button variant="primary" onClick={miscellanous}>Miscellanous</Button>
      </Card.Body>
      </Card>  

    </div>
  );
}

export default App;
