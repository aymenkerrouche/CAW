import React, { useState } from "react";
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/PersonAdd';
import Add from '@mui/icons-material/Add';
import ContactIcon from '@mui/icons-material/List';
import Person from '@mui/icons-material/Person';
import Email from '@mui/icons-material/Email';
import Phone from '@mui/icons-material/Phone';
import MyContacts from "./mycontacts";
import TextField from '@mui/material/TextField';
import { Divider, InputAdornment, Box } from "@mui/material";
import {row, createdata} from './mycontacts';

function ToggleButton() {
    const[toggle,setToggle]= useState(false);

    function addContacts(toggle){
        if (!toggle) {
            setToggle(true);
        }
    }

    function displayContacts(toggle){
        if (toggle) {
            setToggle(false);
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
        email: data.get('email'),
        name: data.get('name'),
        phone: data.get('phone'),
        });
        row.push(createdata(data.get('name'), data.get('phone'), data.get('email')),);
        displayContacts(toggle);
    }
        
    return (
        <>
        <div> { toggle ? 
            //ADD BUTTON
            <Button 
                variant= "contained" 
                endIcon={<AddIcon />} 
                onClick = {()=>addContacts(toggle)}
                sx={{width: 220, marginRight: 3,}}
            >Create Contact</Button>:

            <Button 
                variant= "outlined" 
                endIcon={<AddIcon />} 
                onClick = {()=>addContacts(toggle)}
                sx={{width: 220,marginRight: 3,}}
            >Create Contact</Button>
        }

        { toggle ? 
            //DISPLAY BUTTON
            <Button 
                variant= "outlined" 
                endIcon={<ContactIcon />} 
                onClick = {()=>displayContacts(toggle)}
                sx={{width: 220, marginRight: 3,}}
            >Display contacts</Button>:

            <Button 
                variant= "contained" 
                endIcon={<ContactIcon />} 
                onClick = {()=>displayContacts(toggle)}
                sx={{width: 220,marginRight: 3,}}
            >Display contacts</Button>
        }
        <Divider sx={{height: 30,}} />
        <div className="formbody">
        { toggle ? 
            <div className="form">
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                <TextField
                    margin="normal"
                    required
                    id="name"
                    label="Full Name"
                    name="name"
                    autoFocus 
                    fullWidth
                    InputProps={{endAdornment: (<InputAdornment position="start"> <Person color="primary" /> </InputAdornment>),}}
                />

                <TextField
                    margin="normal"
                    required
                    id="email"
                    label="Email"
                    name="email"
                    fullWidth
                    InputProps={{endAdornment: (<InputAdornment position="start"> <Email color="primary" /> </InputAdornment>),}}
                />

                <TextField
                    margin="normal"
                    required
                    id="phone"
                    label="Phone"
                    name="phone"
                    fullWidth
                    InputProps={{
                        endAdornment: (<InputAdornment position="start"> <Phone color="primary" /> </InputAdornment>),
                        inputMode: 'numeric', 
                        pattern: '[0-9]*'
                    }}
                />

                <Button 
                    variant= "contained" 
                    endIcon={<Add  sx={{ height: 40 }}/>} 
                    fullWidth
                    type="submit"
                    //onClick = {()=>handleSubmit()}
                    sx={{
                        backgroundColor: '#13B913' ,
                        marginTop: 5, 
                        floodColor: '#13B913' ,
                        '&:hover, &.Mui-focusVisible': {backgroundColor:'#109610'},
                    }}>Add this Contact
                </Button>
                </Box>

            </div>
            :
            <MyContacts/>
        }
        </div>
    </div>
        </>
    );
}

export default ToggleButton;