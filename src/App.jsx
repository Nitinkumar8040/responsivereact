import React from "react";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Service from "./Service";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./index.css"
import {Switch, Route,Redirect} from "react-router-dom";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"; {/*bootstrap use krne ke liye */}


const App=() =>{
    return(
        <>
      <Navbar/>
        <Switch> {/* switch ka use localhost krke jb search krte tb waha switch ho jaye   */}
            <Route exact path="/" component = {Home}/> {/*localhost likhke / bhi lgata h tb home page khul jayega */}
            <Route exact path="/about" component = {About}/> {/*localhost likhke /about bhi lgata h tb About page khul jayega */}
            <Route exact path="/contact" component = {Contact}/>{/*  ,,     ,,    /service    ,,     Service  ,,  */}
            <Route exact path="/service" component = {Service}/> {/*  ,,     ,,    /contact    ,,     contact  ,,  */}
           <Redirect to="/" />
        </Switch>
        <Footer/>
       
        </>
    );
};

export default App;
