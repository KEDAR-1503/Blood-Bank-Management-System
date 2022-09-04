import {useState} from "react";
import axios from "axios";

const SearchDonor=(props)=>{
    
    let [searchType,setSearchType] = useState("DID")
    let [searchValue,setsearchValue] = useState()
    let [querryResult,setQuerryresult] = useState([])

    const closePopUp=()=>{
        props.setSearchDonor(false)
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
        
        axios.post("/searchDonor",{
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
            axios.post("/deleteDonor",{
                payload : payload
            })
                .then((res)=>{
                    alert(res.data)
                    props.setDonorListUpdated(props.donortListUpdated + 1)
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
                <h4>Search Donor</h4>
                <div className={"patientsearchArea"}>
                    <span>

                        <label htmlFor={"serachDropDown"}> Search By :</label>
                    <select  name={"searchtype"} id={"serachDropDown"} onChange={(e)=>serachtypeChangehandler(e)}>
                        <option>DID</option>
                        <option>DFNAME</option>
                        <option>DSTATE</option>
                        <option>DCITY</option>
                        <option>DBLOODGROUP</option>
                    </select>
                    </span>

                    <label htmlFor={"searchType"}><strong>{searchType} : </strong></label>
                    <input  onChange={(e)=>onChangeHandler(e)} id={"searchType"} type={"text"} placeholder={`Enter ${searchType} here`}/>
                    <button onClick={querrySearch}>Search</button>
                </div>
                <div>
                    <table>
                        <tr>
                            <th>DID</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Gender</th>
                            <th>Age</th>
                            <th>Aadhar</th>
                            <th>Blood group </th>
                            <th>State</th>
                            <th>City</th>
                            <th>Delete Option</th>
                        </tr>
                    {
                        querryResult.map((item)=>(
                            <>
                                    <tr>
                                        <td>{item.DID}</td>
                                        <td>{item.DFNAME}</td>
                                        <td>{item.DLNAME}</td>
                                        <td>{item.DGENDER}</td>
                                        <td>{item.DAGE}</td>
                                        <td>{item.DAADHAR}</td>
                                        <td>{item.DBLOODGROUP}</td>
                                        <td>{item.DSTATE}</td>
                                        <td>{item.DCITY}</td>
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
export default SearchDonor