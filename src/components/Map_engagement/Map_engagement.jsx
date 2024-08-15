import './Map_engagement.css'
import Props_engagement from "../Props_engagement/Props_engagement"

function dashboard() {
    const MainArray = 
    [ 
      {
        "platform": "/img/icon-facebook.svg",
        "metric": "Page Views",
        "value": 87,
        "changeUp": "+3%"
    },
    {
        "platform": "/img/icon-facebook.svg",
        "metric": "Likes",
        "value": 52,
        "changeDown": "-2%"
    },
    {
        "platform": "/img/icon-instagram.svg",
        "metric": "Likes",
        "value": 5462,
        "changeUp": "+2257%"
    },
    {
        "platform": "/img/icon-instagram.svg",
        "metric": "Profile Views",
        "value": 52000,
        "changeUp": "+1375%"
    },
    {
        "platform": "/img/icon-twitter.svg",
        "metric": "Retweets",
        "value": 117,
        "changeUp": "+303%"
    },
    {
        "platform": "/img/icon-twitter.svg",
        "metric": "Likes",
        "value": 507,
        "changeUp": "+553%"
    },
    {
        "platform": "/img/icon-youtube.svg",
        "metric": "Likes",
        "value": 107,
        "changeDown": "-19%"
    },
    {
        "platform": "/img/icon-youtube.svg",
        "metric": "Total Views",
        "value": 1407,
        "changeDown": "-12%"
    }
    ]
  
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
