import React, { useState } from "react";
import { Header } from 'semantic-ui-react'
import { Link } from "react-router-dom";

const Headera = () => {

  const [color, setColor] = useState('black');
  const [color1, setColorProd] = useState('black');
  const [color2, setColorAbout] = useState('black');
  const [color3, setColorContact] = useState('black');


  return (
    <div className="ui fixed  menu teal">
      <div className="ui container teal ">
        <Link to="/" class="red card">
          <h2 style={{ marginTop: 5, marginLeft: 150 }}>Shop</h2>
        </Link>



      </div>

      <div class="middle pointing menu">

        <div style={{ marginRight: "5%" }} class="ui secondary menu">
          <Link to="/" className="item" style={{ color }} onClick={() => color === "black" ? setColor("teal") || setColorProd("black") || setColorAbout("black") || setColorContact("black") : color === "teal" ? setColor("black") : setColor("blue")}>
            Home
          </Link>
          <Link to="/" className="item" style={{ color: color1 }} onClick={() => color1 === "black" ? setColorProd("teal") || setColor("black") || setColorAbout("black") || setColorContact("black") : color1 === "teal" ? setColorProd("black") : setColorProd("blue")}>
            Products
          </Link>
          <Link to="/" className="item" style={{ color: color2 }} onClick={() => color2 === "black" ? setColorAbout("teal") || setColor("black") || setColorProd("black") || setColorContact("black") : color2 === "teal" ? setColorAbout("black") : setColorAbout("blue")}>
            About
          </Link>
          <Link to="/contact" className="item" style={{ color: color3 }} onClick={() => color3 === "black" ? setColorContact("teal") || setColor("black") || setColorProd("black") || setColorAbout("black") : color3 === "teal" ? setColorContact("black") : setColorContact("blue")}>
            Contact
          </Link>
        </div>

        <div class="item">
          <div style={{ marginRight: 60 }} class="ui icon input">
            <input class="teal " type="text" placeholder="Search..." />
            <i class="search teal link icon"></i>
          </div>
        </div>

        <div class="item">
          <div class="ui primary button">Sign In</div>
        </div>

        <div class="item">
          <div class="ui green button">Sign Up</div>
        </div>

        <div style={{ marginLeft: 50, marginRight: 130 }} class="item">
          <div  class="ui button">Card (0)</div>
        </div>

      </div>

    </div>
  );
};

export default Headera;
