import {Alert, Button, Stack, TextField} from "@mui/material";
import {useState} from "react";
import axios from "axios";

const Message=()=>{
    let [formData,setFormData]=useState({})
    const form_Data_Change_Handler=(e)=>{
        const newdata = {...formData}
        newdata[e.target.name] = e.target.value
        setFormData(newdata)
    }

    const submit_Form_Handler=()=>{
        console.log(formData)

        axios.post("/sendmessage", {
            payload : formData
        })
            .then((res)=>{
                alert(res.data)

            })
            .catch(()=>{
                alert("Server Down")
            })
    }


    return(
        <>
        <Stack spacing={2} width={"40vw"}>
            <TextField name={"message"} value={formData.message} onChange={(e)=>form_Data_Change_Handler(e)} id="outlined-basic" label="Message" variant="outlined" />
            <TextField name={"number"} type={"number"}    value={formData.number} onChange={(e)=>form_Data_Change_Handler(e)} id="outlined-basic" label="Phone Number" variant="outlined" />
            <TextField name={"email"} value={formData.email} onChange={(e)=>form_Data_Change_Handler(e)} id="outlined-basic" label="Email Address" variant="outlined" />
            <Button onClick={submit_Form_Handler} variant="contained">Submit</Button>

        </Stack>
            <Alert severity="warning">This is Beta Feature</Alert>
        </>
    )
}
export default Message