import React from "react";
import "./Hello.css";
import { BiSolidCalendar } from "react-icons/bi";

const Describe = () => {
  return (
    <>
      <section
        id="about"
        className="p-3"
        style={{ boxShadow: "0 2px 5px #333" }}
      >
        <div className="main-about ">
          <div className="row">
            <div className="notice-main">
              <div className="notice-heading d-flex">
                <BiSolidCalendar className="text-success h2 my-auto" />
                <h4>
                  <b>NOTICE BOARD</b>
                </h4>
              </div>
              <div className="notice-content">
                <marquee direction="up" scrollamount={4} height="100%">
                  <ul className="mx-0 px-0">
                    <li className="d-flex">
                      <i className="fa  fa-hand-o-right fa-color" />
                      <div className="ml-3 d-flex col-12 justify-content-between">
                        <div> Monday</div> <div> 08:00 - 02:00</div>
                      </div>
                    </li>
                    <hr className="no-padding no-margin bg-light" />
                    <li className="d-flex">
                      <i className="fa  fa-hand-o-right fa-color" />
                      <div className="ml-3 d-flex col-12 justify-content-between">
                        <div> Tuesday</div> <div> 08:00 - 02:00</div>
                      </div>
                    </li>
                    <hr className="no-padding no-margin bg-light" />
                    <li className="d-flex">
                      <i className="fa  fa-hand-o-right fa-color"></i>
                      <div className="ml-3 d-flex col-12 justify-content-between">
                        <div> Wednesday</div> <div> 08:00 - 02:00</div>
                      </div>
                    </li>
                    <hr className="no-padding no-margin bg-light" />
                    <li className="d-flex">
                      <i className="fa  fa-hand-o-right fa-color" />
                      <div className="ml-3 d-flex col-12 justify-content-between">
                        <div> Thursday</div> <div> 08:00 - 02:00</div>
                      </div>
                    </li>
                    <hr className="no-padding no-margin bg-light" />
                    <li className="d-flex">
                      <i className="fa  fa-hand-o-right fa-color" />
                      <div className="ml-3 d-flex col-12 justify-content-between">
                        <div> Friday</div> <div> 08:00 - 02:00</div>
                      </div>
                    </li>
                    <hr className="no-padding no-margin bg-light" />
                    <li className="d-flex">
                      <i className="fa  fa-hand-o-right fa-color" />
                      <div className="ml-3 d-flex col-12 justify-content-between">
                        <div> Saturday</div> <div> 08:00 - 02:00</div>
                      </div>
                    </li>
                    <hr className="no-padding no-margin bg-light" />
                    <li className="d-flex">
                      <i className="fa  fa-hand-o-right fa-color" />
                      <div className="ml-3 d-flex col-12 justify-content-between">
                        <div> Sunday</div> <div> Closed</div>
                      </div>
                    </li>
                  </ul>
                </marquee>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Describe;
