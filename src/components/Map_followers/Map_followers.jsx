import './Map_followers.css'
import Props_followers from "../Props_followers/Props_followers"
// import { useEffect, useState } from 'react'

function dashboard() {
    const MainArray = 
     [ 
      {
        "platform": "/img/icon-facebook.svg",
        "username": "@nathanf",
        "metric": "Followers",
        "value": 1987,
        "changeUp": "+12 Today",
        "color": "blue"
    },
    {
        "platform": "/img/icon-twitter.svg",
        "username": "@nathanf",
        "metric": "Followers",
        "value": 1044,
        "changeUp": "+99 Today",
        "color": "blue"
    },
    {
        "platform": "/img/icon-instagram.svg",
        "username": "@realnathanf",
        "metric": "Followers",
        "value": 11000,
        "changeUp": "+1099 Today",
        "color": "gradient"
    },
    {
        "platform": "/img/icon-youtube.svg",
        "username": "Nathan F.",
        "metric": "Subscribers",
        "value": 8239,
        "changeDown": "-144 Today",
        "color": "red"
    }
     ]
  
  
  
    return (
      <>
        <div  >
            <div className='Header2'>
              <div className='Header'>
                <h1 className='text'>Social Media Dashboard</h1>
                <h5 className='text2'>Total Followers: 23,004</h5>
              </div>
              <hr className='line' />
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
