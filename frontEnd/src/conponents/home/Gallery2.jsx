import React from "react";
import "./Gallery2.css";
import { Link } from "react-router-dom";

const Gallery2 = () => {
  return (
    <>
      <div className="gallery-wrap py-5 ">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="gallery_box">
                <div className="gallery_left">
                  <div className="gallery-title">
                    <h2>Photo Gallery</h2>
                  </div>
                  <p>
                    OPS is the Top School in Noida offering world class
                    infrastructure and excellence of knowledge.
                  </p>
                  <div className="readmore">
                    <Link to="/gallery" href="#">
                      View All Gallery
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="main-gallery">
                <div className="row row-cols-md-4 row-cols-sm-2">
                  {gallarydata.map((data) => (
                    <span className="p-2">
                      {" "}
                      <div className="gallery-inner-main ">
                        <Link
                          to="/gallary"
                          className="img-fluid"
                          href="/images/home/h1.jpg"
                          alt="gallery"
                          data-lightbox="gallery"
                        >
                          <img
                            className="img-fluid img-thumbnail"
                            src={data.img}
                            alt="gallery"
                          />
                        </Link>
                      </div>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery2;

export const gallarydata = [
  { img: "/school-img/g1.jpg" },
  { img: "/school-img/g2.jpg" },
  { img: "/school-img/g3.jpg" },
  { img: "/school-img/g4.jpg" },
  { img: "/school-img/g5.jpg" },
  { img: "/school-img/g6.jpg" },
  { img: "/school-img/g7.jpg" },
  { img: "/school-img/g8.jpg" },
];
