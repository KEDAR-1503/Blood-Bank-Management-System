import {useState} from "react";

const SearchDonation = (props) => {

    let [searchType,setSearchType] = useState("DID")

    const closePopUp=()=>{
        props.setSearchDonation(false)
    }

    const serachtypeChangehandler=(e)=>{
        setSearchType(e.target.value)
    }

    return(
        <div className={"popUpWindow"}>
            <div className={"formMainContainer"}>
                <div onClick={closePopUp} className={"closePopUpWindow"}>Close</div>
                <h4>Search Donation</h4>
                <div className={"patientsearchArea"}>
                    <span>

                        <label htmlFor={"serachDropDown"}> Search By :</label>
                    <select id={"serachDropDown"} onChange={(e)=>serachtypeChangehandler(e)}>
                        <option>BDID</option>
                        <option>Name</option>
                        <option>State</option>
                        <option>City</option>
                    </select>
                    </span>

                    <label htmlFor={"searchType"}><strong>{searchType} : </strong></label>
                    <input id={"searchType"} type={"text"} placeholder={`Enter ${searchType} here`}/>
                    <button>Search</button>
                </div>


            </div>

        </div>

    )
}

export default SearchDonation