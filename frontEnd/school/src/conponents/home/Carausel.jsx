import Carousel from "react-bootstrap/Carousel";
import React from "react";

const Carausel = ({ data }) => {
  console.log(data);
  return (
    <>
      <div>
        <Carousel className="mt-1" fade>
          {data?.map((item, carkey) => (
            <Carousel.Item key={carkey}>
              <img
                src={item?.img}
                className="col-12"
                style={{ aspectRatio: "5/2" }}
                alt=""
              />
              <Carousel.Caption>
                {/* <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default Carausel;

export const home = [
  { img: "/school-img/g15.jpg" },
  { img: "/school-img/g3.jpg" },
  { img: "/school-img/33.jpg" },
  { img: "/school-img/38.jpg" },
  { img: "/school-img/44.jpg" },
  { img: "/school-img/45.jpg" },
  { img: "/school-img/66.jpg" },
];
