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
        {isLoading? <div className="load-container">
    <div className="outer-ring">
      <div className="inner-ring"></div>
    </div>
  </div>
  :<>
          <h2>{response.vi}</h2>
        <p>{response.en}</p>
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
