import {useEffect, useState} from "react";
import axios from "axios";

const Inventory=(props)=>{
    let [inventoryList,setInventoryList]=useState([])

    useEffect(()=>{
        axios.post("/sendInventory",{
            bbid:JSON.parse(sessionStorage.getItem("userdata")).BBID
        })
            .then((res)=>{
                setInventoryList(res.data)
            })
    },[])


    return(
        <table>
            <tr>
                <th>BID</th>
                <th>B+ Stock</th>
                <th>B- Stock</th>
                <th>A+ Stock</th>
                <th>A- Stock</th>
                <th>O+ Stock</th>
                <th>O- Stock</th>
                <th>AB+ Stock</th>
                <th>AB- Stock</th>

            </tr>
            {
                inventoryList.map((item)=>(
                    <tr>
                        <td>{item.BBID}</td>
                        <td>{item.APSTOCK}</td>
                        <td>{item.ANSTOCK}</td>
                        <td>{item.BPSTOCK}</td>
                        <td>{item.BNSTOCK}</td>
                        <td>{item.OPSTOCK}</td>
                        <td>{item.ONSTOCK}</td>
                        <td>{item.ABPSTOCK}</td>
                        <td>{item.ABNSTOCK}</td>
                    </tr>
                ))

            }


        </table>
    )
}

export default Inventory