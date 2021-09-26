import React from 'react';
import {useParams, useRouteMatch} from 'react-router';
import {Link} from 'react-router-dom';
import fakeData from '../../fakeData/FakeData';
import './Book.css';

const Book = () => {
    const match = useRouteMatch({
        path: "/Book/:roomid",
      });
      console.log(match.params.roomid);

    const bookedRoom = fakeData.find(room => room.id === match.params.roomid);

    return (
        <div className="Book">
            <h1>Let's Book a {bookedRoom.bedType} room</h1>
            <small>Want a <Link to="/home">diferent room?</Link></small>
        </div>
    );
};

export default Book;