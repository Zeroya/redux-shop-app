import React from "react";
import { Header } from 'semantic-ui-react'
import { Link } from "react-router-dom";

const Headera = () => {
  return (
    <div  className="ui fixed menu teal">
      <div className="ui container center teal ">
      <Link to="/" class="red card">
        <h2>Shop</h2>
      </Link>
      </div>
    </div>
  );
};

export default Headera;
