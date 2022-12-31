import React, { useState } from "react";
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/PersonAdd';
import Add from '@mui/icons-material/Add';
import ContactIcon from '@mui/icons-material/List';
import CreatTables from "./CreatTablesBlogs";
import TextField from '@mui/material/TextField';
import { Divider, Box } from "@mui/material";
import {row, createdata} from './CreatTablesBlogs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import 'dayjs/locale/fr';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


function ToggleButton() {
    const[toggle,setToggle]= useState(false);

    function addBlogs(toggle){
        if (!toggle) {
            setToggle(true);
        }
    }

    function displayBlogs(toggle){
        if (toggle) {
            setToggle(false);
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
        subject: data.get('subject'),
        description: data.get('description'),
        ok: data.get('date'),
        });
        var day = date.get('date');
        var month = date.get('month')+1;
        var year = date.get('year');

        var d = ""+day+"-"+month+"-"+year+"";
        row.push(createdata(data.get('subject'),data.get('description'),d),);
        displayBlogs(toggle);
    }

    const [date, setValue] = React.useState(dayjs('01-01-2023'));

    const handleChange = (newValue) => {
        setValue(newValue);
        console.log(newValue);
      };
        
    return (
        <>
        <div> 
            { toggle ? 
            //ADD BUTTON
            <Button 
                variant= "contained" 
                endIcon={<AddIcon />} 
                onClick = {()=>addBlogs(toggle)}
                sx={{width: 220, marginRight: 3,}}
            >Add Blogs</Button>:

            <Button 
                variant= "outlined" 
                endIcon={<AddIcon />} 
                onClick = {()=>addBlogs(toggle)}
                sx={{width: 220,marginRight: 3,}}
            >Add Blogs</Button>
        }

        { toggle ? 
            //DISPLAY BUTTON
            <Button 
                variant= "outlined" 
                endIcon={<ContactIcon />} 
                onClick = {()=>displayBlogs(toggle)}
                sx={{width: 220, marginRight: 3,}}
            >Display Blogs</Button>:

            <Button 
                variant= "contained" 
                endIcon={<ContactIcon />} 
                onClick = {()=>displayBlogs(toggle)}
                sx={{width: 220,marginRight: 3,}}
            >Display Blogs</Button>
        }


        <Divider sx={{height: 30,}} />
        <div classdescription="formbody">
        { toggle ? 
            <div classdescription="form">
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>

                <TextField
                    margin="normal"
                    required
                    id="subject"
                    label="subject"
                    name="subject"
                    fullWidth
                />

                <TextField
                    margin="normal"
                    required
                    id="description"
                    label="description"
                    name="description"
                    fullWidth
                    sx={{ marginBottom: 4 }}
                />

                <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="fr"  >
                    <DatePicker
                        label="Date picker"
                        value={date}
                        name="date"
                        onChange={handleChange}
                        sx={{ marginRight: 40 }}
                        renderInput={(params) => <TextField fullWidth {...params} />}
                    />
                </LocalizationProvider>
                
        

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
                    }}>Add this Blog
                </Button>
                </Box>


                
            </div>
            :
            <CreatTables/>
        }
        </div>
    </div>
        </>
    );
}

export default ToggleButton;