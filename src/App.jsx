import { useState, useEffect } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import responses from "./data.json"
function App() {
  const [response, setResponse] = useState('Click the button to get a random response!');
  const [isLoading, setIsLoading] = useState(true);

  const getRandomResponse = () => {
    setIsLoading(true)
   setTimeout(() => {
    const randomIndex = Math.floor(Math.random() * responses.length);
    setResponse(responses[randomIndex]);
    setIsLoading(false)
   }, Math.floor(Math.random() *1000 *5));
  };
  useEffect(() => {
    getRandomResponse()


  }, [])

  return (
    <div>
      <div className='answer' onClick={getRandomResponse}>
        {isLoading? <h2>
        Chờ chút đi...
    {/* <div className="outer-ring" >  className="load-container"
      <div className="inner-ring"></div>
    </div> */}
  </h2>
  :<>
          <h1>{response.vi}</h1>
        <h2>{response.en}</h2>
        {/* < onClick={}>?</> */}
        <p>Click me to change your mind</p>
        </>}
      </div>

      <div className="wrapper">

        <div><span className="dot"></span></div>
        <div><span className="dot"></span></div>
        <div><span className="dot"></span></div>
        <div><span className="dot"></span></div>
        <div><span className="dot"></span></div>
        <div><span className="dot"></span></div>
        <div><span className="dot"></span></div>
        <div><span className="dot"></span></div>
        <div><span className="dot"></span></div>
        <div><span className="dot"></span></div>
        <div><span className="dot"></span></div>
        <div><span className="dot"></span></div>
        <div><span className="dot"></span></div>
        <div><span className="dot"></span></div>
        <div><span className="dot"></span></div>
      </div>
    </div>

  );
}

export default App;
