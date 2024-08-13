import './Props_followers.css'

function dashboard(props){
    return (
        <container>
        <div className='dashboard'>
            {props.color == "blue"}
            <section className='card-top'>
                {props.color == "blue" ?
                (<span className='top-blue'></span>):
                props.color == "gradient" ? 
                (<span className='top-gradient'></span>):
                props.color == "red" ?  
                (<span className='top-red'></span>) :
                null}
                
            <div className='topo'>
            <img src={props.platform} alt={"facebook"} />
            <h4 className='username'> {props.username} </h4>
            </div>
            <div className='rodape-top'>
                <h4 className='value'>{props.value}</h4>
                <h5>{props.metric}</h5>
                <h6 className='changeDown'>{props.changeDown}</h6>
                <h6 className='changeUp'>{props.changeUp}</h6>
            </div>
            </section>
        </div>       
        </container>
    )
}
export default dashboard