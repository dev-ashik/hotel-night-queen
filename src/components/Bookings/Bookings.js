import React, { useContext, useEffect, useState } from 'react';
import {userContext} from "../Routes/Routes";

const Bookings = () => {
    const [Bookings, setBookings] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(userContext);

    useEffect(() =>{
        fetch('http://localhost:5000/bookings?email='+loggedInUser.email)
        .then(res => res.json())
        .then(data => setBookings(data));
    }, [])
    return (
        <div>
            <h3>You have: {Bookings.length} bookings</h3>
            {
                Bookings.map(book => <li>{book.name} from: {(new Date(book.checkIn).toDateString('dd/mm/yyyy'))} to: {(new Date(book.checkOut).toDateString('dd/mm/yyyy'))}</li>)
            }
        </div>
    );
};

export default Bookings;