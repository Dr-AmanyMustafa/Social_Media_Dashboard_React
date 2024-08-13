import './Props_engagement.css'

function engagement(props){
    return (
        <>       
        <div className='dashboard'>
            <section className='card-bottom' >
            <div className='topo'>
            <h5>{props.metric}</h5>
            <img src={props.platform} alt={"facebook"} />
            </div>
            <div className='rodape-bottom'>
            <h4 className='value'>{props.value}</h4>
            <h6 className='changeDown2'>{props.changeDown}</h6>
            <h6 className='changeUp2'>{props.changeUp}</h6>
            </div>
            </section>
        </div>       
        </>
    )
}
export default engagement