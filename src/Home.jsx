import React from "react";
import web from "../src/images/animation2.webp";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import Common from "./Common"


const Home=() =>{
    return(
        <>
        <Common 
        name=" Grow your business with"
        imgsrc={web}
        visit="/service"
        btname="Get Service"/>
        </>
    );
};

export default Home;