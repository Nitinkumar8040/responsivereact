import React from "react";
import web from "../src/images/animation.jpg";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import Common from "./Common"


const About=() =>{
    return(
        <>
      <Common name="Welcome to About page"
      imgsrc={web}
      visit="/contact"
      btname="Contact Now"/>{/*name naam ka prop pass kiya jisme about page me jo change krna h yaha krege common page ke through */}
        </>
    );
};

export default About;