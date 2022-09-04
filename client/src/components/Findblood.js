import {Stack, TextField} from "@mui/material";
import Button from "@mui/material/Button";
import DropDown from "../helperComponents/DropDown";
import axios from "axios";
import {useState} from "react";

const Findblood=()=>{
    let [bloodSearch,setBloodSearch]=useState({
        bgroup:"B+",
        city:"",
        state:""
    })

    let [availableList,setAvailableList]=useState([])

let onSubmitQuerry=()=>{
    console.log(bloodSearch.bgroup)
    axios.post("/findblooduser",{
        payload : bloodSearch
    })
        .then((res)=>{
            setAvailableList(res.data)
        })
}


    const onChangeHandler = (e) => {
        const newdata = {...bloodSearch}
        newdata[e.target.name] = e.target.value
        setBloodSearch(newdata)
    }

    return(
        <div id={"findbloodMainPage"}>
            <div id={"findOptionsContainer"}>
                <Stack spacing={2} >
                    <h2>Find Blood</h2>
                    <label htmlFor="bloodgroup">Blood Group : </label>
                    <select name={"bgroup"} onChange={(e)=>onChangeHandler(e)} id={"bloodgroup"} placeholder={"Blood Group"}>
                        <option>B+</option>
                        <option>B-</option>
                        <option>O+</option>
                        <option>O-</option>
                        <option>A+</option>
                        <option>A-</option>
                        <option>AB+</option>
                        <option>AB-</option>
                    </select>

                    <TextField onChange={(e)=>onChangeHandler(e)} name={"state"} id="filled-basic" label="Enter State" variant="filled" />
                <TextField onChange={(e)=>onChangeHandler(e)} name={"city"}  id="filled-basic" label="Enter City" variant="filled" />
                <Button onClick={onSubmitQuerry} variant="contained">Find</Button>
            </Stack>


            </div>
            <div id={"resultsContainer"}>
                <h2>Blood Bank Details</h2>
                <table>
                    <tr>
                    <th>Blood Bank Name</th>
                    <th>Address</th>
                    <th>Contact</th>
                    <th>City</th>
                    <th>State</th>
                    </tr>
                {
                    availableList.map((item)=>(
                        <tr>
                        <td>{item.BBNAME}</td>
                        <td>{item.BBADDRESS}</td>
                        <td>{item.BBPHONE}</td>
                        <td>{item.BBCITY}</td>
                        <td>{item.BBSTATE}</td>
                    </tr>
                    ))

                }
                </table>

            </div>
        </div>
    )
}

export default Findblood