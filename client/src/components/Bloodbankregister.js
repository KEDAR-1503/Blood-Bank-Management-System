import {TextField} from "@mui/material";
import Button from "@mui/material/Button";
import {useState} from "react";
import axios from "axios";
import {common} from "@mui/material/colors";

let states=["AN:Andaman and Nicobar Islands",
    "AP:Andhra Pradesh",
    "AR:Arunachal Pradesh",
    "AS:Assam",
    "BR:Bihar",
    "CG:Chandigarh",
    "CH:Chhattisgarh",
    "DN:Dadra and Nagar Haveli",
    "DD:Daman and Diu",
    "DL:Delhi",
    "GA:Goa",
    "GJ:Gujarat",
    "HR:Haryana",
    "HP:Himachal Pradesh",
    "JK:Jammu and Kashmir",
    "JH:Jharkhand",
    "KA:Karnataka",
    "KL:Kerala",
    "LA:Ladakh",
    "LD:Lakshadweep",
    "MP:Madhya Pradesh",
    "MH:Maharashtra",
    "MN:Manipur",
    "ML:Meghalaya",
    "MZ:Mizoram",
    "NL:Nagaland",
    "OR:Odisha",
    "PY:Puducherry",
    "PB:Punjab",
    "RJ:Rajasthan",
    "SK:Sikkim",
    "TN:Tamil Nadu",
    "TS:Telangana",
    "TR:Tripura",
    "UP:Uttar Pradesh",
    "UK:Uttarakhand",
    "WB:West Bengal"]


const Bloodbankregister = () => {

    let[bbForm,setbbForm]=useState({
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
        const newdata = {...bbForm}
        newdata[e.target.name] = e.target.value
        setbbForm(newdata)
    }

    const resetpage=()=>{
        window.location.reload()
    }

    const submitFormHandler=()=>{
        if(bbForm.contact.length>10){
            alert("Invalid Contact")
        }
        else{
            axios.post("/bloodbankreg",{
                payload:bbForm
            }).then((res)=>{
                alert(res.data)
                window.location.href("/login")
            })
                .catch(()=>{
                    alert("Server Down")
                })
        }


    }

    return(
        <div className={"fullPage"}>
            <div className={"fullPageNav"}>
                Blood Bank Management System
            </div>
            <div className={"regHeader"}>Blood  Bank Register</div>

            <div className={"formArea"}>
                <span className={"forminnerContainer"}>
                    <div className={"wrapperforRegForm"}>
                        <TextField name={"license"} onChange={(e)=>formChangeHandler(e)} value={bbForm.license} id="outlined-basic" label="Blood Bank License Number" variant="outlined" />
                    <TextField name={"name"} onChange={(e)=>formChangeHandler(e)} value={bbForm.name} id="outlined-basic" label="Blood Bank Name" variant="outlined" />
                    <TextField name={"state"} onChange={(e)=>formChangeHandler(e)} value={bbForm.state} id="outlined-basic" label="Blood Bank State" variant="outlined" />
                    <TextField name={"city"} onChange={(e)=>formChangeHandler(e)} value={bbForm.city} id="outlined-basic" label="Blood Bank City" variant="outlined" />
                        <span>
                            <label htmlFor={"hosType"}>Blood Bank Type (Gov / Private )</label>
                            <select name={"isgov"} onChange={(e)=>formChangeHandler(e)} value={bbForm.isgov} id={"hosType"}>
                                <option>Government</option>
                                <option>Private</option>
                            </select>
                        </span>
                    </div>

                </span>
                <span  className={"forminnerContainer"}>
                    <div className={"wrapperforRegForm"}>
                    <TextField name={"address"} onChange={(e)=>formChangeHandler(e)} value={bbForm.address} id="outlined-basic" label="Full Address" variant="outlined" />
                    <TextField name={"contact"} onChange={(e)=>formChangeHandler(e)} value={bbForm.contact}  id="outlined-basic" label="Contact Number" variant="outlined" />
                    <TextField name={"username"} onChange={(e)=>formChangeHandler(e)} value={bbForm.username} id="outlined-basic" label="Username" variant="outlined" />
                    <TextField type={"password"} name={"password"} onChange={(e)=>formChangeHandler(e)} value={bbForm.password} id="outlined-basic" label="Password" variant="outlined" />
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
export default Bloodbankregister