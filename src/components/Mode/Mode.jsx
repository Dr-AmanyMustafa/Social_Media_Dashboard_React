import "./Mode.css"


function Mode({handleChange, isChecked}){
    return(
        <div className="toggle">
            Dark Mode
        <input className="toggle" id="modedark" type="checkbox" onChange={handleChange}
        checked={isChecked}  />
        <label htmlFor="modedark"></label>
        </div>
    )
}
export default Mode