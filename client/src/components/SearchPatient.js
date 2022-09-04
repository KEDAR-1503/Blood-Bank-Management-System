
import {useState} from "react";
import axios from "axios";

const SearchPatient=(props)=>{
    let [searchType,setSearchType] = useState("PID")
    let [searchValue,setsearchValue] = useState()
    let [querryResult,setQuerryresult] = useState([])

    const closePopUp=()=>{
        props.setSearchPatient(false)
    }

    const serachtypeChangehandler=(e)=>{
        setSearchType(e.target.value)
    }
    const onChangeHandler=(e)=>{
        setsearchValue(e.target.value)
    }
    const querrySearch=()=>{
        let payload={
            searchtype: searchType,
            value : searchValue
        }

        axios.post("/searchPatient",{
            payload : payload
        }).then((res)=>{
            setQuerryresult(res.data)
        })
            .catch(()=>{
                alert("Server Down")
            })
    }

    const deleteRequest = () => {
        let payload={
            searchtype: searchType,
            value : searchValue
        }
        let confirm= window.confirm("Are you Sure, this cannot be undone")
        if (confirm){
            axios.post("/deletePatient",{
                payload : payload
            })
                .then((res)=>{
                    alert(res.data)
                    props.setPatientListUpdated(props.patientListUpdated + 1)
                })
                .catch(()=>{
                    console.log("Server Down")
                })
        }
    }




    return(
        <div className={"popUpWindow"}>
            <div className={"formMainContainer"}>
                <div onClick={closePopUp} className={"closePopUpWindow"}>Close</div>
                <h4>Search Patient</h4>

                <div className={"patientsearchArea"}>
                    <span>

                        <label htmlFor={"serachDropDown"}> Search By :</label>
                    <select id={"serachDropDown"} onChange={(e)=>serachtypeChangehandler(e)}>
                        <option>PID</option>
                        <option>PFNAME</option>
                        <option>PSTATE</option>
                        <option>PCITY</option>
                    </select>
                    </span>

                    <label htmlFor={"searchType"}><strong>{searchType} : </strong></label>
                    <input onChange={(e)=>onChangeHandler(e)} id={"searchType"} type={"text"} placeholder={`Enter ${searchType} here`}/>
                    <button onClick={querrySearch}>Search</button>
                </div>
                    <div>
                        <table>
                            <tr>
                                    <th>PID</th>
                                    <th>Name</th>
                                    <th>Age</th>
                                    <th>Gender</th>
                                    <th>Aadhar</th>
                                    <th>Blood Group</th>
                                    <th>State</th>
                                    <th>City</th>
                                    <th>Address</th>
                                    <th>DOB</th>
                                    <th>Mobile</th>
                                    <th>HID</th>
                            </tr>
                            {
                                querryResult.map((item)=>(
                                    <>
                                        <tr>
                                            <td>{item.PID}</td>
                                            <td>{item.DFNAME} {item.PFNAME} {item.PLNAME}</td>
                                            <td>{item.PAGE}</td>
                                            <td>{item.PGENDER}</td>
                                            <td>{item.PAADHAR}</td>
                                            <td>{item.PBLOODGROUP}</td>
                                            <td>{item.PSTATE}</td>
                                            <td>{item.PCITY}</td>
                                            <td>{item.PADDRESS}</td>
                                            <td>{String(item.PDOB).slice(0,String(item.PDOB).indexOf('T'))}</td>
                                            <td>{item.PMOBILE}</td>
                                            <td>{item.HID}</td>
                                            <td><button onClick={deleteRequest}>Delete</button></td>
                                        </tr>



                                    </>
                                ))
                            }
                        </table>

                    </div>


            </div>

        </div>

    )
}
export default SearchPatient