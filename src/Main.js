import React, { Component } from "react";
import { Route,NavLink,HashRouter, Routes} from "react-router-dom";
import Home from "./Home";
import Blogs from "./Blogs";
import Contacts from "./Contacts";
 
class Main extends Component {
  render() {
    return (
    <>
    <HashRouter>
        <div>
         
        <ul className="header">
            <li ><NavLink exact to="/">Home</NavLink></li>
            <li ><NavLink to="/blogs">Blogs</NavLink></li>
            <li ><NavLink to="/contact">Contacts</NavLink></li>
        </ul>
         <h1 className="titre "> Caw For Blogs </h1>
        <div className="content">
            <Routes>
                <Route exact path="/" element={<Home />}/>
                <Route path="/blogs" element={<Blogs />}/>
                <Route path="/contact" element={<Contacts />}/>
            </Routes>
        </div>
        </div>
    </HashRouter>
    </>
    );
  }
}
 
export default Main;