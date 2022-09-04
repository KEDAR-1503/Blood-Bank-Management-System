import Button from "@mui/material/Button";
import findBloodIcon from "../images/findblood.png"
import {useEffect, useState} from "react";
import {Stack, TextField} from "@mui/material";
import DropDown from "../helperComponents/DropDown";
import Inventory from "./Inventory";

const Hospitaldashboard=(props)=>{
    let [selectedMenuOption,setSelectedMenuOption]=useState("home")

    useEffect(()=>{
        document.getElementById("hoshome").style.background = "darkred"

        document.querySelectorAll('.hosmenuOption').forEach(item => {

            item.addEventListener('click', event => {

                let options = document.querySelectorAll(".hosmenuOption");
                for (let i = 0; i < options.length; i++) {
                    options[i].style.background = "#1976d2";
                }
                item.style.background ="darkred"

                setSelectedMenuOption(item.name)
            })
        })
    },[])


    return(
        <div className={"fullPage"}>
                <div className={"fullPageNav"}>
                    <span>Blood Bank Management System</span>
                    <Button id={"hlogout"} variant="contained">Logout</Button>
                </div>
            <div className={"headerContainer"}><strong>Hospital Bank Dashboard Interface</strong></div>
            <div className={"workArea"}>
                <span className={"dashOptionsArea"}>
                    <h4>Menu</h4>
                    <Button id={"hoshome"} name={"home"} className={"hosmenuOption"}  variant="contained">Home</Button>
                    <Button name={"findblood"} className={"hosmenuOption"}  variant="contained">Find Blood</Button>
                    <Button name={"inventory"}  className={"hosmenuOption"}  variant="contained">Check Inventory</Button>
                    <Button name={"patient"} className={"hosmenuOption"}  variant="contained">Patients</Button>


                </span>
                <span className={"dashOperationArea"}>
                    {
                        selectedMenuOption=="home"?
                            <>
                                <h1>Home </h1>
                                <div><strong>Name</strong> : {JSON.parse(sessionStorage.getItem("userdata")).HNAME}</div>
                                <div><strong>Blood Bank ID </strong> : {JSON.parse(sessionStorage.getItem("userdata")).HID} </div>
                                <div><strong>License Number</strong> : {JSON.parse(sessionStorage.getItem("userdata")).HLNO}</div>
                                <div><strong>Blood Bank Type</strong> : {JSON.parse(sessionStorage.getItem("userdata")).ISGOV==1?"Government":"Private"}</div>
                                <div><strong>State</strong> :{JSON.parse(sessionStorage.getItem("userdata")).HSTATE} </div>
                                <div><strong>City</strong> : {JSON.parse(sessionStorage.getItem("userdata")).HCITY}</div>
                                <div><strong>Address</strong> : {JSON.parse(sessionStorage.getItem("userdata")).HADDRESS}</div>
                            </>

                            :selectedMenuOption=="findblood"?
                            <>
                                <h1>Find Blood</h1>
                                <div>
                                    <label htmlFor="bloodgroup">Select Blood  Group : </label>
                                    <select id={"bloodgroup"} placeholder={"Blood Group"}>
                                        <option>B+</option>
                                        <option>B-</option>
                                        <option>O+</option>
                                        <option>O-</option>
                                        <option>A+</option>
                                        <option>A-</option>
                                        <option>AB+</option>
                                        <option>AB-</option>
                                    </select>

                                <TextField id="outlined-basic" label="State" variant="outlined" />
                                <TextField id="outlined-basic" label="City" variant="outlined" />
                                    <Button variant="contained">Search</Button>
                                </div>




                            </>

                                :selectedMenuOption=="inventory"?
                                <>
                                    <h1>Inventory</h1>
                                    <Inventory/>
                                </>

                                    :selectedMenuOption=="patient"?
                                    <>
                                        <h1>Patients details</h1>
                                        <table>
                                            <tr>
                                                <th>Name</th>
                                                <th>Age</th>
                                                <th>Gender</th>
                                                <th>State</th>
                                                <th>City</th>
                                                <th>Contact</th>
                                                <th>Blood Group</th>
                                                <th>Qty</th>
                                                <th>Date</th>
                                            </tr>
                                            <tr>
                                                <td>Alfreds Futterkiste</td>
                                                <td>21</td>
                                                <td>Male</td>
                                                <td>Karnataka</td>
                                                <td>Mangalore</td>
                                                <td>97455451515</td>
                                                <td>B+</td>
                                                <td>100 ML</td>
                                                <td>01-01-2021</td>
                                            </tr>

                                        </table>
                                    </>


                                    :<></>


                    }



                </span>
            </div>
            </div>

    )
}

export default Hospitaldashboard