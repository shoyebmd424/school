import React, { Component } from "react";

import "./Treansport.css";
import Layout from "../conponents/Layout";
import Path from "../conponents/Path";

class Transport extends Component {
  render() {
    return (
      <Layout>
        <Path path={[{ path: "/", name: "Home" }]} page=" Transport" />
        <div className="container ">
          <div className="page p-5">
            <div>
              <div className="treansport-container text-center">
                <h2>Available Transport Options:</h2>
                <img className="bus-image" src="/imgInfra/bus.jpg" alt="Bus" />
              </div>
              <h1>Transport Facility Page</h1>
              <h3>
                <b>School Bus</b>
              </h3>
              <div className="text">
                <li>
                  School bus rides are joyful and memorable moments of the
                  school days.
                </li>
                <br />

                <li>
                  The school provides transportation facilities to students.
                </li>
                <br />

                <li>Buses are operated in all important routes.</li>
                <br />

                <li>
                  We have well experienced and trained drivers and nannies to
                  take care of the children.
                </li>
                <br />

                <li>
                  Parents/ Guardians who wants to send their ward by school bus
                  should apply for the same to the Principal at the beginning of
                  the academic year.
                </li>
                <br />

                <li>
                  {" "}
                  The bus fees shall be remitted in a single installment along
                  with the Annual fees or in three installments along with the
                  term fees.
                </li>
                <br />

                <li>
                  To discontinue the bus facility, one month’s notice in writing
                  shall be given by the parent/ guardian to the Principal.
                </li>
                <br />

                <li>
                  {" "}
                  Requests for change of boarding points shall be made in
                  writing one month in advance.
                </li>
                <br />

                <li>
                  Students are allowed to board bus only on displaying the
                  boarding pass. Nobody without a valid bus pass will be allowed
                  to board the bus.
                </li>
                <br />

                <li>
                  Loss of pass shall be reported promptly in the office. A new
                  one can be sought after remitting a fine of Rs.50/-.
                </li>
                <br />

                <li>
                  The student should reach the boarding point prior to the
                  scheduled time and should not keep the school bus waiting.
                </li>
                <br />

                <li>
                  {" "}
                  A responsible person known to the driver and nanny may be
                  engaged to bring the child to the boarding point and to take
                  the child back.
                </li>
                <br />

                <li>
                  {" "}
                  The child will not be allowed to get down at the boarding
                  point if the person waiting to take the child is unknown. In
                  such cases, the child will be taken &emsp; &emsp; back to the
                  school and parents/ guardians informed.
                </li>
                <br />

                <li>
                  {" "}
                  The phone number of the nanny in the bus in which the child
                  travels can be collected by the parent/ guardian.
                </li>
                <br />

                <li>
                  {" "}
                  Strong and prompt disciplinary actions will be taken against
                  the students who misbehave in the bus.
                </li>
                <br />

                <li>
                  {" "}
                  If the school bus fails to ply on any day on account of some
                  unforeseen difficulty, the students should come to school by
                  other means. No complaint will &emsp; be entertained on such
                  issues.
                </li>
                <br />
                <br />
              </div>
              <h2>Emergency Transportation Service</h2>
              <br />
              The school has a vehicle and a driver for emergency transportation
              of pupils to hospitals/ clinics.
              <br />
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default Transport;
