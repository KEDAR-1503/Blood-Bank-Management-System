import {TextField} from "@mui/material";
import Button from "@mui/material/Button";
import {useState} from "react";
import bloodbankregister from "./Bloodbankregister";
import axios from "axios";

const AddBloodDonation=(props)=>{
    let [addBloodDonationForm,setBloodDonationForm]=useState({
        did : "",
        ddate : "",
        dweight: "",
        dqty : "",
        dbgroup : "B+",
        anymedcon : "",
        mstaffname : "",
        mstaffrole : "",
        bbid:JSON.parse(sessionStorage.getItem("userdata")).BBID
    })


    const closePopUp=()=>{
        props.setAddBloodDonation(false)
    }
    const onChangeHandler = (e) => {
        const newdata = {...addBloodDonationForm}
        newdata[e.target.name] = e.target.value
        setBloodDonationForm(newdata)
    }


    const submitHandler=()=>{


        axios.post("/addBloodDonation",{
            payload : addBloodDonationForm
        })
            .then((res)=>{
                closePopUp()
                alert(res.data)
                props.setbloodDonationUpdated(props.bloodDonationUpdated+1)

            })
            .catch(()=>{

            })
    }

    return(
        <div className={"popUpWindow"}>
            <div className={"formMainContainer"}>

                    <div onClick={closePopUp} className={"closePopUpWindow"}>Close</div>
                    <div >
                        <h4>Add Blood Donation Activity</h4>
                        <form className={"formWrapper"}>
                            <div className={"customInputSection"}>
                                <TextField onChange={(e)=>onChangeHandler(e)} name={"did"} type={"number"} size={"small"} id="outlined-basic" label="Donor ID" variant="outlined" />
                                <span>
                                     <label htmlFor="birthday">Donation Date  :  </label>
                                <input onChange={(e)=>onChangeHandler(e)} name={"ddate"} type="date" id="birthday" />
                                </span>


                            </div>
                            <div className={"customInputSection"}>
                                <label htmlFor={"dweight"}>Weight :</label>
                                <input onChange={(e)=>onChangeHandler(e)} name={"dweight"} id={"dweight"} type={"number"} placeholder={"Enter Weight"}/>

                                <label htmlFor={"dqty"}>Qty :</label>
                                <input onChange={(e)=>onChangeHandler(e)} name={"dqty"} id={"dqty"} type={"number"} placeholder={"Enter Qty"}/>
                                <label htmlFor="bloodgroup">Blood Group : </label>
                                <select onChange={(e)=>onChangeHandler(e)} name={"dbgroup"} id={"bloodgroup"} placeholder={"Blood Group"}>
                                    <option>B+</option>
                                    <option>B-</option>
                                    <option>O+</option>
                                    <option>O-</option>
                                    <option>A+</option>
                                    <option>A-</option>
                                    <option>AB+</option>
                                    <option>AB-</option>
                                </select>
                            </div>


                            <TextField onChange={(e)=>onChangeHandler(e)} name={"anymedcon"} fullWidth  size={"small"} id="outlined-basic" label="Any Medical Condition " variant="outlined" />

                            <TextField onChange={(e)=>onChangeHandler(e)} name={"mstaffname"} fullWidth size={"small"} id="outlined-basic" label="Medical Staff Name" variant="outlined" />
                            <TextField onChange={(e)=>onChangeHandler(e)}  name={"mstaffrole"} fullWidth size={"small"} id="outlined-basic" label="Medical Staff Role" variant="outlined" />
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

export default AddBloodDonation