import React from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import "./components/cssfiles/home.css"
import Login from "./components/Login";
// import Register from "./components/Register";


function Home() {
  return (
    <div>
      <Header title="Home" />
      <Nav />
      <div className="main">
        <Login />
        {/* <Register /> */}
      </div>
    </div>
  );
};

export default Home;
