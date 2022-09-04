import Button from "@mui/material/Button";
import {useEffect, useRef, useState} from "react";
import Addpatient from "./Addpatient";
import AddDonor from "./AddDonor";
import SearchPatient from "./SearchPatient";
import Message from "./message";
import SearchDonor from "./SearchDonor";
import Inventory from "./Inventory";
import AddBloodDonation from "./AddBloodDonation";
import addBloodReceive from "./AddBloodReceive";
import AddBloodReceive from "./AddBloodReceive";
import SearchDonation from "./SearchDonation";
import SearchReceive from "./SearchReceive";
import axios from "axios";
import UpdateDonor from "./UpdateDonor";



const Admindashboard=(props)=>{
    let [selectedMenuOption,setSelectedMenuOption]=useState("ahome")
    let [addPatient,setAddPatient]=useState(false)
    let [addDonor,setAddDonor]=useState(false)
    let [addBloodDonation,setAddBloodDonation]=useState(false)
    let [addReceive,setAddBloodReceive]=useState(false)
    let [searchPatient,setSearchPatient]=useState(false)
    let [searchDonor,setSearchDonor]=useState(false)
    let [searchDonation,setSearchDonation]=useState(false)
    let [searchReceive,setSearchReceive]=useState(false)
    let [updateDonor,setUpdateDonor]=useState(false)



    let [donorList,setDonorList]=useState([])
    let [donortListUpdated,setDonorListUpdated]=useState(0)

    let [patientList,setPatientList]=useState([])
    let [patientListUpdated,setPatientListUpdated]=useState(0)



    let [bloodDonationList,setBloodDonationList]=useState([])
    let [bloodDonationUpdated,setbloodDonationUpdated]=useState(0)

    let [bloodReceiveList,setBloodReceiveList]=useState([])
    let [bloodReceiveUpdated,setbloodReceiveUpdated]=useState(0)


    useEffect(()=>{
        axios.get("/getDonor")
            .then((res)=>{
                console.log(res.data)
                setDonorList(res.data)
            })
            .catch()

    },[donortListUpdated])

    useEffect(()=>{
        axios.get("/getPatient")
            .then((res)=>{
                console.log(res.data)
                setPatientList(res.data)
            })
            .catch()

    },[patientListUpdated])

    useEffect(()=>{
        axios.get("/getReceive")
            .then((res)=>{
                console.log(res.data)
                setBloodReceiveList(res.data)
            })
            .catch()

    },[bloodReceiveUpdated])

    useEffect(()=>{
        axios.get("/getBloodDonation")
            .then((res)=>{
                console.log(res.data)
                setBloodDonationList(res.data)
            })
            .catch()

    },[bloodDonationUpdated])


    useEffect(()=>{
        console.log(props.useraData)
        document.getElementById("ahome").style.background = "darkred"

        document.querySelectorAll('.hosmenuOption').forEach(item => {
            item.addEventListener('click', event => {

                let options = document.querySelectorAll(".hosmenuOption");
                for (let i = 0; i < options.length; i++) {
                    options[i].style.background = "#1976d2";
                }



                item.style.background ="darkred"

                setSelectedMenuOption(item.id)
            })
        })
    },[])



    const openAddPatient=()=>{
        setAddPatient(true)
    }
    const openAddDonor=()=>{
        setAddDonor(true)
    }
    const openSearchPatient=()=>{
        setSearchPatient(true)
    }
    const openSearchDonor=()=>{
        setSearchDonor(true)
    }
    const openAddBloodDonation=()=>{
        setAddBloodDonation(true)
    }
    const openAddBloodReceive=()=>{
        setAddBloodReceive(true)
    }
    const openSearchBloodDonation=()=>{
        setSearchDonation(true)
    }
    const openSearchReceive=()=>{
        setSearchReceive(true)
    }

    const openUpdateDonor=()=>{
        setUpdateDonor(true)
    }






    return(
        <div className={"fullPage"}>
            <div className={"fullPageNav"}>
                <span>Blood Bank Management System</span>
                <a href={"/login"}>
                    <Button id={"alogout"} variant="contained">Logout</Button>

                </a>
            </div>
            <div className={"headerContainer"}><strong>Blood Bank Dashboard Interface</strong></div>
            <div className={"workArea"}>
                <span className={"dashOptionsArea"}>
                    <h4><i className="fas fa-bars"></i> Menu</h4>
                    <Button id={"ahome"} className={"hosmenuOption"}  variant="contained">Home</Button>
                    <Button id={"donor"} className={"hosmenuOption"}  variant="contained">Donors</Button>
                    <Button id={"patient"} className={"hosmenuOption"}  variant="contained">Patients</Button>

                    <Button id="blooddonation" className={"hosmenuOption"}  variant="contained">Blood Donation</Button>
                    <Button id={"bloodreceival"} className={"hosmenuOption"} variant="contained">Blood Receival</Button>

                    <Button id={"ainventory"} className={"hosmenuOption"}  variant="contained">Inventory</Button>
                    <Button id={"message"} className={"hosmenuOption"}  variant="contained">Message</Button>


                </span>
                <span className={"dashOperationArea"}>
                      {
                          selectedMenuOption=="ahome"?
                              <div className={"homeMain"}>
                                  <span>
                                  <h1> <i className="fas fa-home "></i> Home </h1>
                                  <div><strong>Name</strong> : {JSON.parse(sessionStorage.getItem("userdata")).BBNAME}</div>
                                  <div><strong>Blood Bank ID </strong> : {JSON.parse(sessionStorage.getItem("userdata")).BBID} </div>
                                  <div><strong>License Number</strong> : {JSON.parse(sessionStorage.getItem("userdata")).BLCNO}</div>
                                  <div><strong>Blood Bank Type</strong> : {JSON.parse(sessionStorage.getItem("userdata")).ISGOV==1?"Government":"Private"}</div>
                                  <div><strong>State</strong> :{JSON.parse(sessionStorage.getItem("userdata")).BBSTATE} </div>
                                  <div><strong>City</strong> : {JSON.parse(sessionStorage.getItem("userdata")).BBCITY}</div>
                                  <div><strong>Address</strong> : {JSON.parse(sessionStorage.getItem("userdata")).BBADDRESS}</div>
                                      </span>
                                  <img height={500} src="https://theleaders-online.com/wp-content/uploads/2020/11/blood-bank.jpg"/>
                              </div>
                              :selectedMenuOption=="donor"?
                                  <>
                                      <h1><i className="fas fa-hand-holding-medical"></i> Donors</h1>
                                      <div className={"operationsButtonsContainer"}>
                                          <button onClick={openAddDonor} >Add New Donor</button>
                                          <button onClick={openSearchDonor}>Search Donor</button>
                                          <button onClick={openUpdateDonor}>Update Donor</button>
                                      </div>
                                      <div>
                                          {
                                              addDonor===true?
                                                  <AddDonor  donortListUpdated={donortListUpdated}  setDonorListUpdated={setDonorListUpdated} setAddDonor={setAddDonor} />:
                                                  searchDonor===true?
                                                      <SearchDonor donortListUpdated={donortListUpdated} setDonorListUpdated={setDonorListUpdated}  setSearchDonor={setSearchDonor}/>
                                                      :
                                                      updateDonor==true?
                                                          <UpdateDonor donortListUpdated={donortListUpdated} setDonorListUpdated={setDonorListUpdated} setUpdateDonor={setUpdateDonor}/>:
                                                      <>
                                                      <table>

                                                          <tr>
                                                              <th>DID</th>
                                                              <th>Name</th>
                                                              <th>Gender</th>
                                                              <th>DOB</th>
                                                              <th>Age</th>
                                                              <th>State</th>
                                                              <th>City</th>
                                                              <th>Address</th>
                                                              <th>Contact</th>
                                                              <th>Blood Group</th>
                                                          </tr>
                                                      {donorList.map((item)=>(
                                                                   <tr>
                                                                       <td>{item.DID}</td>
                                                                       <td>{item.DFNAME} {item.DLNAME}</td>
                                                                       <td>{item.DGENDER}</td>
                                                                       <td>{String(item.DDOB).slice(0,String(item.DDOB).indexOf('T'))}</td>
                                                                       <td>{item.DAGE}</td>
                                                                       <td>{item.DSTATE}</td>
                                                                       <td>{item.DCITY}</td>
                                                                       <td>{item.DADDRESS}</td>
                                                                       <td>{item.DMOBILE}</td>
                                                                       <td>{item.DBLOODGROUP}</td>
                                                                   </tr>


                                                      ))}
                                                      </table>
                                                      </>
                                                  //
                                          }




                                      </div>

                                  </>
                                  :selectedMenuOption=="patient"?
                                      <>
                                          <h1><i className="fas fa-hospital-user"></i> Patients</h1>
                                          <div className={"operationsButtonsContainer"}>
                                              <button onClick={openAddPatient}>Add New Patient</button>
                                              <button onClick={openSearchPatient}>Retrieve Patient</button>
                                              <button>Update Patient</button>
                                          </div>
                                          <div>
                                              {
                                                  addPatient===true?
                                                      <Addpatient patientListUpdated={patientListUpdated} setPatientListUpdated={setPatientListUpdated} setAddPatient={setAddPatient}/>:
                                                      searchPatient==true?
                                                          <SearchPatient setPatientListUpdated={setPatientListUpdated} patientListUpdated={patientListUpdated} setSearchPatient={setSearchPatient} />
                                                          :
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
                                                              {patientList.map((item)=>(
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
                                                                  </tr>


                                                              ))}

                                                          </table>

                                              }




                                          </div>

                                      </>


                                      :selectedMenuOption=="blooddonation"?
                                      <>
                                          <h1><i className="fas fa-tint"></i> Blood Donation</h1>
                                          <div className={"operationsButtonsContainer"}>
                                              <button onClick={openAddBloodDonation} >Add New Donation</button>
                                              <button onClick={openSearchBloodDonation}>Search Donation</button>
                                          </div>
                                          <div>
                                              {
                                                  addBloodDonation==true?
                                                      <AddBloodDonation bloodDonationUpdated={bloodDonationUpdated} setbloodDonationUpdated={setbloodDonationUpdated}    setAddBloodDonation={setAddBloodDonation} />:
                                                      searchDonation==true?
                                                          <SearchDonation setSearchDonation={setSearchDonation}/>
                                                          :
                                                          <table>
                                                              <tr>
                                                                  <th>BDID</th>
                                                                  <th>Qty</th>
                                                                  <th>Blood Group</th>
                                                                  <th>Weight</th>
                                                                  <th>Date</th>
                                                                  <th>Any Med Condition</th>
                                                                  <th>Medical Staff Name</th>
                                                                  <th>Medical Staff Role</th>
                                                                  <th>Exp Date</th>
                                                              </tr>
                                                              {
                                                                  bloodDonationList.map((item)=>(
                                                                      <tr>
                                                                          <td>{item.BDID}</td>
                                                                          <td>{item.BDQTY}</td>
                                                                          <td>{item.BDGROUP}</td>
                                                                          <td>{item.BDWEIGHT}</td>
                                                                          <td>{String(item.BDDATE).slice(0,String(item.BDDATE).indexOf('T'))}</td>
                                                                          <td>{item.ANYMEDCON}</td>
                                                                          <td>{item.MSTAFFNAME}</td>
                                                                          <td>{item.MSTAFFROLE}</td>
                                                                          <td>{String(item.EXPDATE).slice(0,String(item.EXPDATE).indexOf('T'))}</td>
                                                                      </tr>
                                                                  ))


                                                              }


                                                          </table>







                                              }
                                          </div>
                                      </>:
                                          selectedMenuOption=="bloodreceival"?
                                              <>
                                                  <h1><i className="fas fa-handshake"></i> Blood Receive</h1>
                                                  <div className={"operationsButtonsContainer"}>
                                                      <button onClick={openAddBloodReceive}>Add New Receive</button>
                                                      <button onClick={openSearchReceive}>Search Receive</button>
                                                  </div>
                                                  <div>
                                                      {

                                                          addReceive==true?
                                                              <AddBloodReceive bloodReceiveUpdated={bloodReceiveUpdated} setbloodReceiveUpdated={setbloodReceiveUpdated}  setAddBloodReceive={setAddBloodReceive} />:
                                                              searchReceive==true?
                                                                  <SearchReceive setSearchReceive={setSearchReceive} />
                                                              :
                                                                  <table>
                                                                      <tr>
                                                                          <th>BRID</th>
                                                                          <th>Qty</th>
                                                                          <th>Blood Group</th>
                                                                          <th>Date</th>
                                                                          <th>HID</th>
                                                                          <th>PID</th>
                                                                      </tr>
                                                                      {
                                                                          bloodReceiveList.map((item)=>(
                                                                              <tr>
                                                                                  <td>{item.BRID}</td>
                                                                                  <td>{item.BRQTY}</td>
                                                                                  <td>{item.BGROUP}</td>
                                                                                  <td>{String(item.BRDATE).slice(0,String(item.BRDATE).indexOf('T'))}</td>
                                                                                  <td>{item.HID}</td>
                                                                                  <td>{item.PID}</td>
                                                                              </tr>
                                                                          ))


                                                                      }


                                                                  </table>

                                                      }

                                                  </div>

                                              </>:

                                                  selectedMenuOption=="ainventory"?
                                                      <>
                                                          <h1><i className="fas fa-warehouse"></i> Inventory</h1>:
                                                          <Inventory />
                                                      </>:

                                                      selectedMenuOption=="message"?
                                                          <>
                                                              <h1><i className="far fa-envelope"></i> Message</h1>
                                                              <Message/>
                                                          </>


                                          :<></>


                      }


                </span>
            </div>
        </div>
    )
}
export default Admindashboard