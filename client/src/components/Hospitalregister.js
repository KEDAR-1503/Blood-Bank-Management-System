import {TextField} from "@mui/material";
import Button from "@mui/material/Button";
import {useState} from "react";
import axios from "axios";


const Hospitalregister = () => {

    let[hosForm,setHosForm]=useState({
        license:"",
        name:"",
        state:"",
        city:"",
        address:"",
        isgov:"",
        contact:"",
        username:"",
        password:""
    })

    const formChangeHandler= (e) => {
        const newdata = {...hosForm}
        newdata[e.target.name] = e.target.value
        setHosForm(newdata)
    }
    const resetpage=()=>{
        window.location.reload()
    }

    const submitFormHandler=()=>{


        axios.post("/hospitalreg",{
            payload:hosForm
        }).then((res)=>{
            alert(res.data)
        })
            .catch(()=>{
                alert("Please Login")
            })
    }

  return(
          <div className={"fullPage"}>
              <div className={"fullPageNav"}>
                  Blood Bank Management System
              </div>
              <div className={"regHeader"}>Hospital Bank Register</div>

              <div className={"formArea"}>
                <span className={"forminnerContainer"}>
                    <div className={"wrapperforRegForm"}>
                        <TextField name={"license"} onChange={(e)=>formChangeHandler(e)} value={hosForm.license} id="outlined-basic" label="Hospital License Number" variant="outlined" />
                    <TextField name={"name"} onChange={(e)=>formChangeHandler(e)} value={hosForm.name} id="outlined-basic" label="Hospital Name" variant="outlined" />
                    <TextField name={"state"} onChange={(e)=>formChangeHandler(e)} value={hosForm.state} id="outlined-basic" label="Hospital State" variant="outlined" />
                    <TextField name={"city"} onChange={(e)=>formChangeHandler(e)} value={hosForm.city} id="outlined-basic" label="Hospital City" variant="outlined" />
                        <span>
                            <label htmlFor={"hosType"}>Hospital Type (Gov / Private )</label>
                            <select name={"isgov"} onChange={(e)=>formChangeHandler(e)} value={hosForm.isgov} id={"hosType"}>
                                <option>Government</option>
                                <option>Private</option>
                            </select>
                        </span>
                    </div>

                </span>
                  <span  className={"forminnerContainer"}>
                    <div className={"wrapperforRegForm"}>
                    <TextField name={"address"} onChange={(e)=>formChangeHandler(e)} value={hosForm.address} id="outlined-basic" label="Full Address" variant="outlined" />
                    <TextField name={"contact"} onChange={(e)=>formChangeHandler(e)} value={hosForm.contact}  id="outlined-basic" label="Contact Number" variant="outlined" />
                    <TextField name={"username"} onChange={(e)=>formChangeHandler(e)} value={hosForm.username} id="outlined-basic" label="Username" variant="outlined" />
                    <TextField type={"password"} name={"password"} onChange={(e)=>formChangeHandler(e)} value={hosForm.password} id="outlined-basic" label="Password" variant="outlined" />
                    {/*<TextField id="outlined-basic" label="Confirm Password" variant="outlined" />*/}
                    </div>
                </span>
              </div>
              <div className={"submitArea"}>
                  <Button onClick={resetpage} id={"resethospitalregform"} variant="contained">Reset</Button>
                  <Button onClick={submitFormHandler} id={"submithospitalregform"} variant="contained">Submit</Button>


              </div>
              <div className={"footerBar"}>
                  Blood Bank Management System- All rights Reserved
              </div>
          </div>

  )
}

export default Hospitalregister