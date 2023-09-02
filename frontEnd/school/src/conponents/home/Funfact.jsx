import React, { useState } from "react";
import "./Funfact.css";
import { PiStudentFill } from "react-icons/pi";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { BsBook, BsFillBarChartLineFill } from "react-icons/bs";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
const Funfact = () => {
  const [count, setOn] = useState(false);
  return (
    <>
      <ScrollTrigger onEnter={() => setOn(true)} onExit={() => setOn(false)}>
        <div className="counter-strt">
          <div className="container border rounded-3 p-3 m-auto " style={{}}>
            <div className="counter-bg">
              <div className="counter-title text-center">
                <h2>Fun Facts About Oriental School</h2>
              </div>
              <div className="row text-center back">
                <div className="col-lg-3 col-6">
                  <div className="counter-content">
                    {/* <img class="counter-icon" src="img/teacher.png" alt="img"/> */}
                    <div className="h1">
                      {" "}
                      <PiStudentFill />
                    </div>
                    <div className="num">
                      {count && (
                        <CountUp start={0} duration={2} delay={0} end={1000} />
                      )}
                      +{/* 1000 */}
                    </div>
                    <p> STUDENTS </p>
                  </div>
                </div>
                <div className="col-lg-3 col-6">
                  <div className="counter-content">
                    <div className="h1">
                      {" "}
                      <LiaChalkboardTeacherSolid />
                    </div>
                    <div className="num">10</div>
                    <p> TEACHERS</p>
                  </div>
                </div>
                <div className="col-lg-3 col-6">
                  <div className="counter-content">
                    <div className="h1">
                      {" "}
                      <BsBook />
                    </div>
                    <div className="num">50</div>
                    <p> COURSES </p>
                  </div>
                </div>
                <div className="col-lg-3 col-6">
                  <div className="counter-content">
                    <div className="h1">
                      {" "}
                      <BsFillBarChartLineFill />
                    </div>
                    <div className="num">100</div>
                    <p> RESULTS </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollTrigger>
    </>
  );
};

export default Funfact;
