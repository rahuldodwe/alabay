import React from "react";
import "./home.css";
import Home_Image from "../../assets/home.png";

const Home = () => {
  return (
    <>
      <div className="home-container">
        <div className="bg-img" 
          style={{
            backgroundImage: `url(${Home_Image})`,
            
          }}
        >
          Home Page
        </div>
      </div>
    </>
  );
};

export default Home;
