import React from 'react';
import Room from '../Room/Room';
import fakeData from '../../fakeData/FakeData';

const Home = () => {
    return (
        <div>
            {
                fakeData.map(hotelData => <Room hotelData={hotelData}/>)
            }
           
        </div>
    );
};

export default Home;