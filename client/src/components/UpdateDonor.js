import {TextField} from "@mui/material";
import Button from "@mui/material/Button";
import {useState} from "react";
import axios from "axios";

const UpdateDonor=(props)=>{
    let [searchType,setSearchType] = useState("DFNAME")
    let [searchValue,setsearchValue] = useState()
    let [didValue,setdidvalue] = useState()

    const closePopUp=()=>{
        props.setUpdateDonor(false)
    }

    const serachtypeChangehandler=(e)=>{
        setSearchType(e.target.value)
    }
    const didChangeHandler=(e)=>{
        setdidvalue(e.target.value)
    }
    const onChangeHandler=(e)=>{
        setsearchValue(e.target.value)
    }



    const updateReq = () => {
        let payload={
            searchtype: searchType,
            value : searchValue,
            DID : didValue
        }

        axios.post("/updateDonor",{
            payload : payload
        }).then((res)=>{
            alert(res.data)
            closePopUp()
            props.setDonorListUpdated(props.donortListUpdated + 1)
        })
            .catch(()=>{
                alert("Server Down")
            })
    }

    return(
        <div className={"popUpWindow"}>
            <div className={"formMainContainer"}>
                <div onClick={closePopUp} className={"closePopUpWindow"}>Close</div>
                <h4>Update Donor</h4>

                <div id={"updateDArea"} className={"patientsearchArea"}>
                    <span>
                          <label htmlFor={"udid"}>DID : </label>
                        <input onChange={(e)=>didChangeHandler(e)} id={"udid"} type={"number"} placeholder={`Enter DID here`}/>
                    </span>

                    <span>
                        <label htmlFor={"serachDropDown"}> Update Attribute :</label>
                    <select id={"serachDropDown"} onChange={(e)=>serachtypeChangehandler(e)}>
                        <option>DFNAME</option>
                        <option>DLNAME</option>
                        <option>DSTATE</option>
                        <option>DCITY</option>
                        <option>DADDRESS</option>
                        <option>DMOBILE</option>
                    </select>
                    </span>

                    <label htmlFor={"searchType"}><strong>{searchType} : </strong></label>
                    <input onChange={(e)=>onChangeHandler(e)} id={"searchType"}  id={"searchType"} type={"text"} placeholder={`Enter ${searchType} here`}/>
                    <button onClick={updateReq}>UPDATE</button>
                </div>


            </div>

        </div>

    )
}
export default UpdateDonor