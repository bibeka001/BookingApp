import React from "react";
import Featured from "../../Components/Features/Featured";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import MailList from "../../Components/MailList/MailList";
import Navbar from "../../Components/Navbar/Navbar";
import FeaturedProperties from "../../FeaturedProperties/FeaturedProperties";
import PropertyList from "../../PropertyList/PropertyList";
import "./Home.css";
const Home = () => {
  return (
    <div className="">
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">Browse by Property Type</h1>
        <PropertyList />
        <h1 className="homeTitle">Homes guests love</h1>
        <FeaturedProperties />
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
