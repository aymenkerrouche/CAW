//import { Route,NavLink,HashRouter} from "react-router-dom";
import Home from "./Home";
import Blogs from "./Blogs";
import Contacts from "./Contacts";
import './App.css';


import {BrowserRouter as Router, Link,
    Routes, Route, NavLink, HashRouter} from 'react-router-dom'


     const tropicalPicture= new Url("./assets/tropical.png",import.meta.url)
function App() {
  return (
    <>
    <div className="background">
       <img src={tropicalPicture}/> 
        {/* <h1 class="here">Caw for Blogs</h1> */}
        <HashRouter>
        <div>
          <h1>Simple SPA</h1>
          <ul className="header">
          <li><Link to="/">Home</Link></li>
            <li></li>
            <li></li>
          </ul>
          <Routes>
          <Route path="/" element={<Home />}/>
          </Routes>
        </div>
      </HashRouter>
    </div>
    </>
  );
}

export default App;
