import React, { useEffect, useRef, useState } from "react";
import { BsFillEnvelopeAtFill, BsFillTelephoneFill } from "react-icons/bs";
import { TiGlobeOutline } from "react-icons/ti";
import { AiOutlineLock } from "react-icons/ai";
import { NavLink, useNavigate } from "react-router-dom";
import { FaAddressCard } from "react-icons/fa";
import { MdMenu } from "react-icons/md";
import { useAuth } from "../context/AuthContext";
const Header = () => {
  const [isheader, setIsHeader] = useState(false);
  const headerRef = useRef();
  const navigate = useNavigate();
  const [auth] = useAuth();
  const handleLogout = () => {
    localStorage.removeItem("auth");
    navigate("/");
    window.location.reload();
  };
  useEffect(() => {
    const handle = (e) => {
      if (headerRef.current && !headerRef.current.contains(e.target)) {
        setIsHeader(false);
      }
    };
    document.addEventListener("mousedown", handle);
  });
  return (
    <>
      <header className=" text-white position-relative" id="header">
        <li
          style={{ listStyle: "none" }}
          onClick={() => setIsHeader(!isheader)}
          className="header-icons px-3"
        >
          <span className=" bg-secondary p-1 px-2 shadow rounded-4">
            {" "}
            <MdMenu className="h1" />
          </span>
        </li>
        <span
          ref={headerRef}
          className={`d-xl-flex d-${
            isheader ? "block" : ""
          } header-responsive `}
        >
          <ul className={` m-0  p-0 p-sm-auto `}>
            <li>
              <a
                className="text-decoration-none"
                href="tel:+918920111751"
                target="_blank"
                rel="noreferrer"
              >
                <BsFillTelephoneFill />
                +918920111751
              </a>
            </li>
            <li>
              <a
                className="text-decoration-none"
                href="mailto:Orientalpublicschool123@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <BsFillEnvelopeAtFill /> Orientalpublicschool123@gmail.com
              </a>
            </li>
          </ul>
          <ul
            className={` ms-auto  p-0 p-sm-auto mb-0 
            } text-uppercase  `}
          >
            <li>
              <NavLink
                to="/addmission-enquery"
                style={{ textDecoration: "none" }}
              >
                <FaAddressCard /> Addmission open 2023-24
              </NavLink>
            </li>
            <li>
              <NavLink to="/career" style={{ textDecoration: "none" }}>
                <TiGlobeOutline /> Career
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" style={{ textDecoration: "none" }}>
                <TiGlobeOutline /> Contact Us
              </NavLink>
            </li>
            <li>
              {auth?.user ? (
                <NavLink
                  onClick={handleLogout}
                  style={{ textDecoration: "none" }}
                >
                  <AiOutlineLock /> Logout
                </NavLink>
              ) : (
                <NavLink to="/login" style={{ textDecoration: "none" }}>
                  <AiOutlineLock /> Portal Login
                </NavLink>
              )}
            </li>
          </ul>
        </span>
      </header>
    </>
  );
};

export default Header;
