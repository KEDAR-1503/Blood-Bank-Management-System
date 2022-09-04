import {Input, Select, TextField} from "@mui/material";
import Button from "@mui/material/Button";
import { styled } from '@mui/material/styles';
import {useEffect, useState} from "react";
import axios from "axios";



const Addpatient=(props)=>{




    let [addDonorForm,setAddDonorForm]=useState({
        fname : "",
        lname : "",
        dob: "",
        age : "",
        gender : "Male",
        bgroup : "B+",
        aadhar : "",
        state : "",
        city : "",
        address : "",
        contact : "",
        hid:"",
    })


    const onChangeHandler = (e) => {
        const newdata = {...addDonorForm}
        newdata[e.target.name] = e.target.value
        setAddDonorForm(newdata)
    }


    const closePopUp=()=>{
        props.setAddPatient(false)
    }
    const Input = styled('input')({
        display: 'none',
    });


    const submitHandler = () => {
        axios.post("/addPatient",{
            payload : addDonorForm
        })
            .then((res)=>{
                closePopUp()
                alert(res.data)
                props.setPatientListUpdated(props.patientListUpdated+1)
            })
            .catch(()=>{

            })
    }

    return(
        <div className={"popUpWindow"}>
            <div className={"formMainContainer"}>
                <div onClick={closePopUp} className={"closePopUpWindow"}>Close</div>
                <div >
                    <h4>Add New Patient</h4>
                    <form className={"formWrapper"}>
                        <div className={"customInputSection"}>
                            <TextField onChange={(e)=>onChangeHandler(e)} name={"fname"}  size={"small"} id="outlined-basic" label="First Name" variant="outlined" />
                            <TextField onChange={(e)=>onChangeHandler(e)} name={"lname"}  size={"small"} id="outlined-basic" label="Last Name" variant="outlined" />
                            <label htmlFor="birthday">D.O.B :</label>
                            <input onChange={(e)=>onChangeHandler(e)} name={"dob"} type="date" id="birthday" />

                        </div>
                        <div className={"customInputSection"}>
                            <label htmlFor={"page"}>Age :</label>
                            <input onChange={(e)=>onChangeHandler(e)} name={"age"} id={"page"} type={"number"} placeholder={"Enter Age"}/>
                            <label htmlFor="gender">Gender : </label>
                            <select onChange={(e)=>onChangeHandler(e)} name={"gender"} id={"gender"} placeholder={"Blood Group"}>
                                <option>Male</option>
                                <option>Female</option>

                            </select>
                            <label htmlFor="bloodgroup">Blood Group : </label>
                            <select onChange={(e)=>onChangeHandler(e)} name={"bgroup"} id={"bloodgroup"} placeholder={"Blood Group"}>
                                <option>B+</option>
                                <option>B-</option>
                                <option>O+</option>
                                <option>O-</option>
                                <option>A+</option>
                                <option>A-</option>
                                <option>AB+</option>
                                <option>AB-</option>
                            </select>
                            <label htmlFor={"phid"}>HID</label>
                            <input onChange={(e)=>onChangeHandler(e)} name={"hid"} id={"phid"} type={"number"} placeholder={"HID"}/>
                        </div>


                    <TextField onChange={(e)=>onChangeHandler(e)} name={"aadhar"} fullWidth type={"number"} size={"small"} id="outlined-basic" label="Aadhar No " variant="outlined" />

                    <TextField onChange={(e)=>onChangeHandler(e)} name={"state"} fullWidth size={"small"} id="outlined-basic" label="State" variant="outlined" />
                    <TextField onChange={(e)=>onChangeHandler(e)} name={"city"} fullWidth size={"small"} id="outlined-basic" label="City" variant="outlined" />
                    <TextField onChange={(e)=>onChangeHandler(e)} name={"address"} fullWidth size={"small"} id="outlined-basic" label="Address" variant="outlined" />
                    <TextField onChange={(e)=>onChangeHandler(e)} name={"contact"} type={"number"} fullWidth size={"small"} id="outlined-basic" label="Contact Number " variant="outlined" />

                    <div className={"popUpformSubmitArea"}>
                        <Button type={"reset"} id={"resethospitalregform"} variant="contained">Reset</Button>
                        <Button onClick={submitHandler} id={"submithospitalregform"} variant="contained">Submit</Button>
                        <Button onClick={closePopUp}  variant="contained">Close</Button>

                    </div>
                    </form>



                </div>
            </div>

        </div>

    )
}

export default Addpatient