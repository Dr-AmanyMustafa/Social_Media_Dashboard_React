import './Map_followers.css'
import Props_followers from "../Props_followers/Props_followers"
import { useEffect, useState } from 'react'

function dashboard() {
    const [MainArray, setMainArray] = useState([])

  
    useEffect(() => {
      function CallApi() {
      fetch("http://localhost:3000/followers" )
       .then((response) => {
       return response.json();
       })
       .then((finalResult) => {
        setMainArray(finalResult);
       });
       }
       CallApi();
      }, []);
  
  
    return (
      <>
        <div  >
        <div className='Header'>
          <h1 className='text'>Social Media Dashboard</h1>
          <h5 className='text2'>Total Followers: 23,004</h5>
        </div>
            {MainArray.map((items)=> {
              return (
                <Props_followers 
                  key={items.id}
                  color={items.color}
                  username={items.username}
                  platform={items.platform}
                  value={items.value}
                  metric={items.metric}
                  changeUp={items.changeUp}
                  changeDown={items.changeDown}
                ></Props_followers>
              )
            })}      
        </div>
       
      </>
    )    
  }

  
export default dashboard
