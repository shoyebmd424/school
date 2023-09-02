import React from "react";
import Layout from "../conponents/Layout";
import Path from "../conponents/Path";

const Gallery = () => {
  return (
    <Layout>
      <Path path={[{ name: "Home", path: "/" }]} page="Gallery" />
      <div className="container">
        <h1 className="text-center my-3">
          <b>Gallery</b>
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

export default Gallery;

export const event = [
  { img: "/school-img/g1.jpg" },
  { img: "/school-img/g2.jpg" },
  { img: "/school-img/g3.jpg" },
  { img: "/school-img/g4.jpg" },
  { img: "/school-img/g5.jpg" },
  { img: "/school-img/g6.jpg" },
  { img: "/school-img/g7.jpg" },
  { img: "/school-img/g8.jpg" },
  { img: "/school-img/g9.jpg" },
  { img: "/school-img/g10.jpg" },
  { img: "/school-img/g11.jpg" },
  { img: "/school-img/g12.jpg" },
  { img: "/school-img/g13.jpg" },
  { img: "/school-img/g29.jpg" },
  { img: "/school-img/g15.jpg" },
  { img: "/school-img/g16.jpg" },
  { img: "/school-img/g17.jpg" },
  { img: "/school-img/g18.jpg" },
  { img: "/school-img/g19.jpg" },
  { img: "/school-img/g21.jpg" },
  { img: "/school-img/g22.jpg" },
  { img: "/school-img/50.jpg" },
  { img: "/school-img/51.jpg" },
  { img: "/school-img/52.jpg" },
  { img: "/school-img/53.jpg" },
  // { img: "/school-img/54.jpg" },
  { img: "/school-img/55.jpg" },
  { img: "/school-img/56.jpg" },
  { img: "/school-img/57.jpg" },
  { img: "/school-img/58.jpg" },
  { img: "/school-img/59.jpg" },
  { img: "/school-img/62.jpg" },
  { img: "/school-img/63.jpg" },
  { img: "/school-img/65.jpg" },

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
