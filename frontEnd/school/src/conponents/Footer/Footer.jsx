import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagramSquare,
  FaPhoneAlt,
  FaTelegram,
  FaTwitter,
} from "react-icons/fa";
import { TiLocation } from "react-icons/ti";
import { BsEnvelope } from "react-icons/bs";

const Footer = () => {
  return (
    <div>
      {/* /* ===============Footer Start==================== */}
      <div className="footer-wrap">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="footer_logo">
                <img
                  alt="logo"
                  src="/images/home/logonew.png"
                  className="img-fluid"
                />
              </div>
              <p>
                Oriental Public School promoted under the aegis of the Oriental
                Public School Education Society, was founded in the year 1981 by
                the great visionary our Directors. Oriental Public School, which
                is schools considered as best amongst the schools in Noida, is
                spread over a sprawling, lush-green campus of 16 acres. Situated
                in Sector 16-A, it provides a peaceful environment conducive for
                learning and holistic development of children.
              </p>
            </div>
            <div className="col-lg-2 col-md-3">
              <h3>Quick links</h3>
              <ul className="footer-links">
                <li>
                  {" "}
                  <Link to="/">Home</Link>
                </li>
                <li>
                  {" "}
                  <Link to="/school">About</Link>
                </li>
                <li>
                  {" "}
                  <Link to="/addmission-enquery">Classes</Link>
                </li>
                <li>
                  {" "}
                  <Link to="/teacher">Teachers</Link>
                </li>
                <li>
                  {" "}
                  <Link to="/class">Facility</Link>
                </li>
                <li>
                  {" "}
                  <Link to="/fee-structure">Fee structure</Link>
                </li>
                <li>
                  {" "}
                  <Link to="/contact">Contact Us</Link>
                </li>
                <li>
                  {" "}
                  <Link to="/gallery">Gallery</Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-4">
              <h3>Opening Hours</h3>
              <ul className="unorderList hourswrp">
                <li>
                  Monday <span>08:00 - 02:00</span>
                </li>
                <li>
                  Tuesday <span>08:00 - 02:00</span>
                </li>
                <li>
                  Wednesday <span>08:00 - 02:00</span>
                </li>
                <li>
                  Thursday <span>08:00 - 02:00</span>
                </li>
                <li>
                  Friday <span>08:00 - 02:00</span>
                </li>
                <li>
                  Saturday <span>08:00 - 02:00</span>
                </li>
                <li>
                  Sunday <span>Closed</span>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-4">
              <div className="footer_info">
                <h3>Get in Touch</h3>
                <ul className="footer-adress">
                  <li className="footer_address">
                    {" "}
                    <TiLocation className="text-white my-auto h3" />
                    <span>
                      parthala khanjarpur sec 122 Noida, Noida U.P. 201301
                      (INDIA)
                    </span>{" "}
                  </li>
                  <li className="footer_email">
                    {" "}
                    <BsEnvelope className="text-white my-auto h3 mx-2" />
                    <span>
                      <Link href="mailto:info@example.com">
                        {" "}
                        info@example.com{" "}
                      </Link>
                    </span>{" "}
                  </li>
                  <li className="footer_phone">
                    {" "}
                    <i className="fa">
                      <FaPhoneAlt />
                    </i>{" "}
                    <span>
                      <Link href="tel:  +918920111751"> +918920111751</Link>
                    </span>{" "}
                  </li>
                </ul>
                <div className="social-icons footer_icon">
                  <ul>
                    <li>
                      <Link href="#">
                        <i className="fa " aria-hidden="true">
                          <FaFacebook className="h3" />
                        </i>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <i className="fa" aria-hidden="true">
                          <FaTwitter className="h3" />
                        </i>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <i className="fa " aria-hidden="true">
                          <FaInstagramSquare className="h3" />
                        </i>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <i className="fa " aria-hidden="true">
                          <FaTelegram className="h3" />
                        </i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom text-center">
            <div className="container">
              <div className="copyright-text">
                Copyright © Oriental Public School 2023. All Rights Reserved.
                Designed &amp; Maintained By: NIC Solution{" "}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* /* ===============Footer End==================== */}
    </div>
  );
};

export default Footer;
