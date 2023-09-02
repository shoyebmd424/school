import React from "react";
import Layout from "../conponents/Layout";
import Path from "../conponents/Path";

const Event = () => {
  return (
    <Layout>
      <Path path={[{ name: "Home", path: "/" }]} page="Event" />
      <div className="container">
        <h1 className="text-center my-3">
          <b>All Events Pic</b>
        </h1>
        <div className="row row-cols-md-4 row-cols-sm-2">
          {event.map((data) => (
            <div className="p-4">
              <img className="col-12" src={data.img} alt="" />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Event;

export const event = [
  { img: "/school-img/31.jpg" },
  { img: "/school-img/32.jpg" },
  { img: "/school-img/34.jpg" },
  { img: "/school-img/36.jpg" },
  { img: "/school-img/38.jpg" },
  { img: "/school-img/45.jpg" },
  { img: "/school-img/46.jpg" },
  { img: "/school-img/47.jpg" },
  { img: "/school-img/50.jpg" },
  { img: "/school-img/62.jpg" },
  { img: "/school-img/g25.jpg" },
  { img: "/school-img/g26.jpg" },
  { img: "/school-img/g27.jpg" },
  { img: "/school-img/g28.jpg" },
  { img: "/school-img/g29.jpg" },
  { img: "/school-img/g30.jpg" },
];
