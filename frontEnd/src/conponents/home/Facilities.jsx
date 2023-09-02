import React from "react";
import "./Facilities.css";
import { BiCar, BiDesktop, BiFootball, BiSolidBook } from "react-icons/bi";
import { ImLab } from "react-icons/im";
import { BsFillBuildingFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Facilities = () => {
  return (
    <>
      {/* ====================FACILITIES============================ */}
      <section id="facilities">
        <div className="main-facilities">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <div className="facilities-left">
                  <div className="facilities-title">
                    <h4>Our Awesome Facilities</h4>
                  </div>
                  <p>
                    The school of thought starts with well-equipped schools.
                    Where education meets innovation.
                  </p>
                  <div className="readmore">
                    <Link to="/class" className="btn btn-primary" href="-">
                      Read More..
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-9">
                <div className="facilities-right">
                  <div className="row row-cols-md-3 row-cols-sm-2 my-3">
                    {faciData.map((data) => (
                      <div className="">
                        <div className="facilities-box">
                          <div className="facilities-content">
                            <div className="facilities-heading">
                              <div className="text-primary">{data.icons}</div>
                              <h5>{data.name}</h5>
                            </div>
                            <p>{data.para}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ====================FACILITIES ENDS============================ */}
    </>
  );
};

export default Facilities;

export const faciData = [
  {
    name: "Library",
    icons: <BiSolidBook className="h1" />,
    para: "All Books present in our library like science, social science etc.",
  },
  {
    name: "Play Ground",
    icons: <BiFootball className="h1" />,
    para: "We have all grounds like football, cricket, vollyball etc.",
  },
  {
    name: "Laboratories",
    icons: <ImLab className="h1" />,
    para: "In our school all labs like technical and digital labs",
  },
  {
    name: "Activity Room    ",
    icons: <BsFillBuildingFill className="h1" />,
    para: "There is different types room like event room, indoor game etc. ",
  },
  {
    name: "Computer Lab    ",
    icons: <BiDesktop className="h1" />,
    para: "In our school has computer lab for learning like progamming language etc.",
  },
  {
    name: "Transportation    ",
    icons: <BiCar className="h1" />,
    para: "We are providing bus transportation for the different location",
  },
];
