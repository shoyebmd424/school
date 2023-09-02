import React from "react";
import { BiSolidCommentDetail } from "react-icons/bi";
import { BsPeopleFill } from "react-icons/bs";
import { FaBookReader } from "react-icons/fa";
import { PiCertificateFill } from "react-icons/pi";
import "../../App.css";
const HomeCard1 = () => {
  return (
    <div className="home-card mt-5">
      <div className="row">
        <div className="row row-cols-md-4 row-cols-sm-2">
          {cardData.map((data, key) => (
            <div className="position-relative my-5 my-md-0">
              <div
                className="card py-5 px-2 text-white all-home-card rounded-0"
                style={{ background: data.color, clipPath: data.path }}
              >
                <h5>{data.title}</h5>
                <p>{data.para}</p>
              </div>
              <div
                className=" position-absolute  "
                style={{ top: "-2rem", left: "40%", zIndex: "10" }}
              >
                <b className="p-3 py-4  bg-white border rounded-circle">
                  {data.icons}
                </b>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeCard1;
export const cardData = [
  {
    title: "Expert teachers",
    icons: <BsPeopleFill className="h1 p-1" />,
    para: "our teachers si expert and highly experieced ",
    color: "#50243b",
    path: "polygon(0 0, 100% 0, 100% 100%, 0 85%)",
  },
  {
    title: "Quality Education ",
    icons: <FaBookReader className="h1 p-1" />,
    para: "We provide highly quality education",
    path: "polygon(0 0, 100% 0, 100% 85%, 0 100%",
    color: "#255080",
  },
  {
    title: "Life Time Support",
    icons: <BiSolidCommentDetail className="h1 p-1" />,
    para: "Our Teacher and mentors connect with student for career opportunity",
    path: "polygon(0 0, 100% 0, 100% 100%, 0 85%)",
    color: " #54707092",
  },
  {
    title: "Scholarship News",
    icons: <PiCertificateFill className="h1 p-1" />,
    para: "We provide 50% scholarship and as student performance on test",
    path: "polygon(0 0, 100% 0, 100% 85%, 0 100%",
    color: "#0f0627",
  },
];
