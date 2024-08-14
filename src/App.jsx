import './App.css'
import Map_followers from "./components/Map_followers/Map_followers"
import Map_engagement from "./components/Map_engagement/Map_engagement"
import Mode from "./components/Mode/Mode"
import {  useState } from 'react'

function App() { 
  const [theme, setTheme] = useState('false');

  return (
    <>
      <main className='container' data-theme={theme ? "dark": "light"}>
      
        <Mode 
          isChecked={theme}
          handleChange={()=> setTheme(!theme) }>            
        </Mode>
        {/* <hr className='line'></hr> */}
        <Map_followers></Map_followers>
        <Map_engagement></Map_engagement>
      </main>     
    </>
  )    
}
  
export default App
