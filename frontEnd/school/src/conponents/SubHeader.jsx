import React, { useEffect, useRef, useState } from "react";
import { FaTelegramPlane } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { BiSolidPhoneCall } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import { AiOutlineAlignLeft } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
const SubHeader = () => {
  const [isSub, setIsSub] = useState(false);
  const subRef = useRef();
  useEffect(() => {
    const hanlde = (e) => {
      if (subRef.current && !subRef.current.contains(e.target)) {
        setIsSub(false);
      }
    };
    document.addEventListener("mousedown", hanlde);
  });
  return (
    <>
      <ul className="d-flex gap-3  py-3 my-0 position-relative">
        <li className="d-flex justify-content-between col-12 col-md-auto">
          <div>
            {" "}
            <NavLink to="/" className="text-decoration-none d-flex">
              <img
                style={{ width: "5rem" }}
                src="/images/home/logo.jpg"
                alt=""
              />
              <h4 className="text-danger d-none d-lg-block ps-2 my-auto me-md-5 pe-5 subheader-responsive">
                Oriental Public School
              </h4>
            </NavLink>
          </div>
          <li style={{ listStyle: "none" }} className="subHeader-icons px-3">
            <AiOutlineAlignLeft
              onClick={() => setIsSub(!isSub)}
              className={`d-${!isSub ? "" : "none"} h1 my-auto`}
            />
            <RxCross1
              onClick={() => setIsSub(!isSub)}
              className={`d-${isSub ? "" : "none"} h1 my-auto`}
            />
          </li>
        </li>
        <span
          ref={subRef}
          className={`d-md-flex d-${isSub ? "block" : ""} subheader-responsive`}
        >
          <li className="d-flex gap-2 my-auto">
            <div className="my-auto bg-light p-2 rounded-circle">
              <FaTelegramPlane className="h3 m-auto text-danger" />
            </div>
            <div>
              <a
                href="Orientalpublicschool123@gmail.com"
                className="text-decoration-none text-dark"
              >
                <h5>
                  <b>Email Us</b>
                </h5>
                <small>orientalpublicschool123@gmail.com</small>
              </a>
            </div>
          </li>
          <li className="d-flex gap-2 my-auto">
            <div className="my-auto  bg-light p-2 rounded-circle">
              <BiSolidPhoneCall className="h3 m-auto text-danger" />
            </div>
            <div>
              <a
                href="tel:  +918920111751"
                className="text-decoration-none text-dark"
              >
                <h5>
                  <b>Call Us</b>
                </h5>
                <small> +918920111751</small>
              </a>
            </div>
          </li>
          <li className="d-flex gap-2 my-auto">
            <div className="my-auto bg-light p-2 rounded-circle">
              <FaLocationDot className="h3 m-auto text-danger" />
            </div>
            <div>
              <h5>
                <b>location</b>
              </h5>
              <small>
                parthala khanjarpur Sector-122 Noida, U.P. 201301 (INDIA)
              </small>
            </div>
          </li>
        </span>
      </ul>
    </>
  );
};

export default SubHeader;
