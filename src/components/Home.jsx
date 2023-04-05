import Lottie from "lottie-react";
import React from 'react';
import FunnyPenguin from "../assets/51502-running-pigeon.json";



const Home = () => {
    return (
        <div>
            <div className='flex'>
                <div className='basis-1/2 flex items-center justify-center'>Something</div>
                <Lottie animationData={FunnyPenguin} loop={true} />
            </div>
        </div>
    );
};

export default Home;