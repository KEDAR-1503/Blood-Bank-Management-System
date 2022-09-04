import {TextField} from "@mui/material";
import Button from "@mui/material/Button";
import {useState} from "react";
import axios from "axios";

const AddBloodReceive=(props)=>{

    let [addBloodReceive,setBloodReceive]=useState({
        pid : "",
        qty:"",
        date:"",
        bgroup:"B+",
        bbid:JSON.parse(sessionStorage.getItem("userdata")).BBID
    })


    const closePopUp=()=>{
        props.setAddBloodReceive(false)
    }

    const onChangeHandler = (e) => {
        const newdata = {...addBloodReceive}
        newdata[e.target.name] = e.target.value
        setBloodReceive(newdata)
    }

    const submitHandler=()=>{
        axios.post("/addBloodReceive",{
            payload : addBloodReceive
        })
            .then((res)=>{
                closePopUp()
                alert(res.data)
                props.setbloodReceiveUpdated(props.setbloodReceiveUpdated+1)
            })
            .catch(()=>{

            })
    }
    return(
        <div className={"popUpWindow"}>
            <div className={"formMainContainer"}>

                <div onClick={closePopUp} className={"closePopUpWindow"}>Close</div>
                <div >
                    <h4>Add Blood Receival Activity</h4>
                    <form className={"formWrapper"}>
                        <div className={"customInputSection"}>
                            <TextField onChange={(e)=>onChangeHandler(e)} name={"pid"} fullWidth type={"number"} size={"small"} id="outlined-basic" label="Patient ID" variant="outlined" />
                        </div>

                        <div  className={"customInputSection"}>
                            <span>
                                 <label htmlFor={"dqty"}> Received Qty :</label>
                                <input onChange={(e)=>onChangeHandler(e)} name={"qty"} id={"dqty"} type={"number"} placeholder={"Enter Qty"}/>
                            </span>
                            <span>
                                <label htmlFor="birthday">Receival Date :</label>
                            <input onChange={(e)=>onChangeHandler(e)} name={"date"} type="date" id="birthday" />
                            </span>

                            <span>
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
                            </span>

                        </div>


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

export default AddBloodReceive