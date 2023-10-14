import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const api_key="live_b5F1UBZx6K3uXXuk3x0BWUZeskNG2YgI2VT7Z7GgQ39XbCO8vcbc5crszTyKsRR2";
  const [width, setWidth] = useState(0)
  const[buttonText,setText] = useState('Click me to get Data')
  const [image,setImage]=useState('')
  const [height,setHeight]=useState(0)

  const callApi = async()=>{
    const response = await fetch(`https://api.thecatapi.com/v1/images/search?api_key=${api_key}`)
    const jsonData = await response.json();
    console.log(jsonData);
    console.log(jsonData[0].height);
    setHeight(jsonData[0].height);
    setWidth(jsonData[0].width);
    setImage(jsonData[0].url);

    
    
  }
  return (
    <div className='container1'>
      <h1>API call Demonstration</h1>
      <div className='container2'>
          <p>Height : {height}</p>
          

          <p>Width : {width}</p>
         
      </div>

      <div className='container3'>
        <img src={image} alt="" />
      </div>
        <div className='container4'>
          <button onClick={callApi}>Click me to get Data</button>
        </div>
    </div>
  )
}

export default App
