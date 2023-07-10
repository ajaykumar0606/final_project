import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./About";
import Home from "./component/Home";
import Contact from "./Contact";
import "bootstrap/dist/css/bootstrap.css";
import { SiDisqus } from "react-icons/si";
// import Button from "react-bootstrap/Button";
import Selectcard from "./component/Selectcard";
function App() {
  return (
    // <div>
    //   <About />
    // </div>
    <div>
      <Router>
        <nav className="ulc">
          <SiDisqus className="ic" />
          <ul className="li">
            <Link className="spc" to="/">
              Home
            </Link>
          </ul>
          <ul className="li">
            <Link className="spc" to="/about">
              About
            </Link>
          </ul>
          <ul className="li">
            <Link className="spc" to="/contact">
              Contact
            </Link>
          </ul>
          <ul className="li">
            <Link className="spc" to="/selectcard">
              Card
            </Link>
          </ul>
        </nav>

        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/about" element={<About />}></Route>

          <Route exact path="/contact" element={<Contact />}></Route>
          <Route exact path="/selectcard" element={<Selectcard />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
