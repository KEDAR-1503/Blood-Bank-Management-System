import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {useState} from "react";

export default function DropDown(props) {
    const ITEM_HEIGHT = 30;
    const ITEM_PADDING_TOP = 8;
    const MenuProps = {
        PaperProps: {
            style: {
                maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                width: 250,
            },
        },
    };

    const {name,dropdownvalues,currentState,setState,stateid} = props

    let [value,setValue] =useState('')

    const handleChange = (e) => {
        setValue(e.target.value)
        let newreg = {...currentState}
        newreg[stateid] = e.target.value;
        setState(newreg);
    };

    return (
        <>
            <FormControl variant="filled" fullWidth >
                <InputLabel id="demo-simple-select-filled-label">{name}</InputLabel>
                <Select
                    labelId="demo-simple-select-filled-label"
                    // id="demo-simple-select-filled"
                    id={stateid}
                    value={value}
                    onChange={(e)=>handleChange(e)}
                    MenuProps={MenuProps}
                >
                    {
                        dropdownvalues.map((item)=>(
                            <MenuItem value={item}>{item}</MenuItem>
                        ))
                    }
                </Select>
            </FormControl>
        </>
    );
}