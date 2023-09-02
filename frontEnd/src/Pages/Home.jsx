import React from "react";
import Carausel, { home } from "../conponents/home/Carausel";
import Layout from "../conponents/Layout";
import HomeCard1 from "../conponents/home/HomeCard1";
import Welcome from "../conponents/home/Welcome";
import Facilities from "../conponents/home/Facilities";
import Gallery2 from "../conponents/home/Gallery2";
import ConnectWithUs from "../conponents/home/ConnectWithUs";
const Home = () => {
  return (
    <Layout>
      <Carausel data={home} />
      <div
        style={{
          background:
            "linear-gradient(0deg, rgba(226,223,0,0.2946428571428571) 12%, rgba(109,192,205,0.7008053221288515) 38%, rgba(206,223,26,0.6867997198879552) 65%)",
        }}
      >
        <div className=" col-md-8 mx-auto mt-5 pt-5">
          <HomeCard1 />
        </div>
        <Welcome />
      </div>
      <Facilities />
      <Gallery2 />
      {/* <Funfact /> */}
      <ConnectWithUs />
    </Layout>
  );
};

export default Home;
