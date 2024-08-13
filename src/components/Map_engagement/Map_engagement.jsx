import './Map_engagement.css'
import Props_followers from "../Props_followers/Props_followers"
import Props_engagement from "../Props_engagement/Props_engagement"
import { useEffect, useState } from 'react'

function dashboard() {
    const [MainArray, setMainArray] = useState([])
  
    useEffect(() => {
      function CallApi() {
      fetch("http://localhost:3000/engagement" )
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
        <div className='container'>     
        <div className='overview'><h1 className='text'>Overview Today</h1></div>
            {MainArray.map((items)=> {
              return (
                <Props_engagement
                  key={items.id}
                  username={items.username}
                  platform={items.platform}
                  value={items.value}
                  metric={items.metric}
                  changeUp={items.changeUp}
                  changeDown={items.changeDown}
                ></Props_engagement>
              )
            })}
        </div>
       
      </>
    )    
  }

  
export default dashboard
