import Button from "@mui/material/Button";
import hospitalLogo from "../images/hospital.png"
import bloodBankLogo from "../images/blood-bank.png"
import {Link} from "react-router-dom"

const Logintype=(props)=>{
    let setLoginType=props.setloginType


    const setTypeHandler = (e) => {
        setLoginType(e.target.id)
    }

    return(
        <>
        <div id={"loginTypeHeading"}>
            <h1>Login Type</h1>
        </div>
        <div id={"loginTypeMainContainer"}>
            <Link to={"/login"}>
              <span id={"hospitalButton"}>
                <div id={"hospitalType"}  onClick={(e)=>setTypeHandler(e)} className={"buttonWrapper"}>
                 <img src={hospitalLogo}/>
                    <h5>Hospital Login</h5>
                </div>
            </span>
            </Link>

            <Link to={"/login"}>
                 <span id={"bloodBankButton"}>
                <div id={"bloodBankType"} onClick={(e)=>setTypeHandler(e)} className={"buttonWrapper"}>
                     <img src={bloodBankLogo}/>
                <h5>Blood Bank Login</h5>
                </div>
            </span>
            </Link>


        </div>
        </>
    )
}

export default Logintype