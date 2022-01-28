import React, { useContext, useState } from 'react';
import { useParams, useRouteMatch } from 'react-router';
import { Link } from 'react-router-dom';
import fakeData from '../../fakeData/FakeData';
import { userContext } from '../Routes/Routes';
import './Book.css';

import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import MobileDatePicker from '@mui/lab/MobileDatePicker';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';



const Book = () => {
    const match = useRouteMatch({
        path: "/Book/:roomid",
    });
    //   console.log(match.params.roomid);
    const bookedRoom = fakeData.find(room => room.id === match.params.roomid);

    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const [selectedDate, setselectedDate] = useState({
        checkIn: new Date(),
        checkOut: new Date()
    });

    const handleCheckInDate = (date) => {
        const newDates = {...selectedDate}
        newDates.checkIn = date;
        setselectedDate(newDates)
        
    }
    const handleCheckOutDate = (date) => {
        const newDates = {...selectedDate}
        newDates.checkOut = date;
        setselectedDate(newDates)
        
    }

    const handleBooking = () => {
        
    }


    return (
        <div className="Book">
            <h1>Hello, {loggedInUser.name} Let's Book a {bookedRoom.bedType} room</h1>
            <small>Want a <Link to="/home">diferent room?</Link></small>

            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <Stack spacing={3}>
                    <DesktopDatePicker
                        label="Check in date"
                        value={selectedDate.checkIn}
                        minDate={new Date('2017-01-01')}
                        // onChange={(newValue) => {
                        //     setselectedDate(newValue);
                        // }}
                        onChange={handleCheckInDate}
                        renderInput={(params) => <TextField {...params} />}
                    />
                    <DesktopDatePicker
                        label="Check out date"
                        value={selectedDate.checkOut}
                        minDate={new Date('2017-01-01')}
                        // onChange={(newValue) => {
                        //     setselectedDate(newValue);
                        // }}
                        onChange={handleCheckOutDate}
                        renderInput={(params) => <TextField {...params} />}
                    />
                   
                </Stack>
                <Button onClick={handleBooking} variant="contained">Book Now</Button>
            </LocalizationProvider>
        </div>
    );
};

export default Book;