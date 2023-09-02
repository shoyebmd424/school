import React from "react";
import Layout from "../conponents/Layout";
import "./Infra.css";
import Path from "../conponents/Path";

const Infra = () => {
  return (
    <Layout>
      <Path path={[{ name: "Home", path: "/" }]} page="Class Rooms" />
      {/* ========= INFRASTRUCTURE BODY =========== */}

      <div className="bodyInfra">
        <div className="infrasub">
          {/* ======= Classroom ======= */}
          <section>
            <div className="container py-5">
              <div className="section-title bg-dark text-white rounded-3">
                <h2 className="text-center fs-2 text-monochrome py-2">
                  Smart Class Room
                </h2>
              </div>
              <div className="">
                <div
                  className="mainn row mt-5 border rounded p-3 m-3"
                  style={{}}
                >
                  <div className="row col-12" style={{ marginTop: "auto" }}>
                    <div className="col-md-4">
                      <img
                        alt=""
                        src="imgInfra/class1.jpg"
                        className="images img alt=fluid  rounded"
                      />
                    </div>
                    <div className="col-md-8">
                      <h3>Normal Class Room</h3>
                      <p className="fs-6">
                        Our normal classrooms are designed to provide a
                        comfortable learning environment for students. They are
                        equipped with modern teaching aids and technology to
                        enhance the learning experience.
                      </p>
                    </div>
                  </div>
                  <div
                    className="row col-md-12 py-2"
                    style={{ marginTop: "auto" }}
                  >
                    <div className="col-md-8 order-2 order-md-1">
                      <h3>Special Class Room</h3>
                      <p className="fs-6">
                        Our special classrooms are tailored to accommodate
                        specialized learning needs. They are equipped with
                        resources and tools to support students with diverse
                        requirements.
                      </p>
                    </div>
                    <div className="col-md-4 order-1 order-md-2">
                      <img
                        alt=""
                        src="imgInfra/class2.jpg"
                        className="images img alt=fluid  rounded"
                      />
                    </div>
                  </div>
                  <div className="row col-12" style={{ marginTop: "auto" }}>
                    <div className="col-md-4">
                      <img
                        alt=""
                        src="imgInfra/class3.jpg"
                        className="images img alt=fluid  rounded"
                      />
                    </div>
                    <div className="col-md-8">
                      <h3>Classroom</h3>
                      <p className="fs-6">
                        Our standard classrooms provide a conducive learning
                        environment for students. They are equipped with modern
                        amenities to facilitate effective teaching and learning.
                      </p>
                    </div>
                  </div>

                  <br />
                </div>
              </div>
            </div>
          </section>
          {/* Classroom*/}

          {/* ======= Library ======= */}
          <section>
            <div className="container py-5">
              <div className="section-title bg-dark text-white rounded-3">
                <h2 className="text-center fs-2 text-monochrome py-2">
                  Library
                </h2>
              </div>
              <div className="">
                <div
                  className="mainn row mt-5 border rounded p-3 m-3"
                  style={{}}
                >
                  <div className="row col-12" style={{ marginTop: "auto" }}>
                    <div className="col-md-4">
                      <img
                        alt=""
                        src="imgInfra/mainlibrary.jpg"
                        className="images img alt=fluid  rounded"
                      />
                    </div>
                    <div className="col-md-8">
                      <h3>Main Library</h3>
                      <p className="fs-6">
                        Our main library is a hub of knowledge and resources. It
                        houses an extensive collection of books, journals, and
                        digital resources to support students' academic
                        endeavors.
                      </p>
                    </div>
                  </div>
                  <div
                    className="row col-12 py-2"
                    style={{ marginTop: "auto" }}
                  >
                    <div className="col-md-8 order-2 order-md-1">
                      <h3>Reading Room</h3>
                      <p className="fs-6">
                        The reading room provides a quiet and focused
                        environment for students to study. It is equipped with
                        comfortable seating and reference materials.
                      </p>
                    </div>
                    <div className="col-md-4 order-1 order-md-2">
                      <img
                        alt=""
                        src="imgInfra/reading.jpg"
                        className="images img alt=fluid  rounded"
                      />
                    </div>
                  </div>
                  <div className="row col-12" style={{ marginTop: "auto" }}>
                    <div className="col-md-4">
                      <img
                        alt=""
                        src="imgInfra/digital.jpg"
                        className="images img alt=fluid  rounded"
                      />
                    </div>
                    <div className="col-md-8">
                      <h3>Digital Resources</h3>
                      <p className="fs-6">
                        We offer a wide range of digital resources, including
                        e-books and online databases, to support research and
                        learning.
                      </p>
                    </div>
                  </div>

                  <br />
                </div>
              </div>
            </div>
          </section>
          {/* ====Library End====*/}
          {/* ======Administration======== */}
          <section>
            <div className="container py-5">
              <div className="section-title bg-dark text-white rounded-3">
                <h2 className="text-center fs-2 text-monochrome py-2">
                  Administration
                </h2>
              </div>
              <div className="">
                <div
                  className="mainn row mt-5 border rounded p-3 m-3"
                  style={{}}
                >
                  <div className="row col-12" style={{ marginTop: "auto" }}>
                    <div className="col-md-4">
                      <img
                        alt=""
                        src="imgInfra/administrative.jpg"
                        className="images img alt=fluid  rounded"
                      />
                    </div>
                    <div className="col-md-8">
                      <h3>Administration Block</h3>
                      <p className="fs-6">
                        Our administration block is where various administrative
                        functions of the school are managed. It houses offices
                        of key personnel and administrative staff.
                      </p>
                    </div>
                  </div>
                  <div
                    className="row col-12 py-2"
                    style={{ marginTop: "auto" }}
                  >
                    <div className="col-md-8 order-2 order-md-1">
                      <h3>Staff Rooms</h3>
                      <p className="fs-6">
                        Staff rooms provide a space for teachers to prepare
                        lessons, collaborate, and take a break. They are
                        essential for maintaining a positive working
                        environment.
                      </p>
                    </div>
                    <div className="col-md-4 order-1 order-md-2">
                      <img
                        alt=""
                        src="imgInfra/staff.jpg"
                        className="images img alt=fluid  rounded"
                      />
                    </div>
                  </div>
                  <div className="row col-12" style={{ marginTop: "auto" }}>
                    <div className="col-md-4">
                      <img
                        alt=""
                        src="imgInfra/meeting.jpg"
                        className="images img alt=fluid  rounded"
                      />
                    </div>
                    <div className="col-md-8">
                      <h3>Meeting Rooms</h3>
                      <p className="fs-6">
                        Meeting rooms are used for staff meetings,
                        collaborations, and discussions. They facilitate
                        effective communication and decision-making.
                      </p>
                    </div>
                  </div>

                  <br />
                </div>
              </div>
            </div>
          </section>
          {/* ======Administration End======= */}
          {/* =======Lab Starts====== */}
          <section>
            <div className="container py-5">
              <div className="section-title bg-dark text-white rounded-3">
                <h2 className="text-center fs-2 text-monochrome py-2">
                  Laboratory
                </h2>
              </div>
              <div className="">
                <div
                  className="mainn row mt-5 border rounded p-3 m-3"
                  style={{}}
                >
                  <div className="row col-12" style={{ marginTop: "auto" }}>
                    <div className="col-md-4">
                      <img
                        alt=""
                        src="imgInfra/tech.jpg"
                        className="images img alt=fluid  rounded"
                      />
                    </div>
                    <div className="col-md-8">
                      <h3>Technical Lab</h3>
                      <p className="fs-6">
                        Our technical lab is equipped with state-of-the-art
                        equipment for hands-on learning in various technical
                        fields. Students can apply theoretical knowledge in
                        practical experiments.
                      </p>
                    </div>
                  </div>
                  <div
                    className="row col-12 py-2"
                    style={{ marginTop: "auto" }}
                  >
                    <div className="col-md-8 order-2 order-md-1">
                      <h3>Physical Lab</h3>
                      <p className="fs-6">
                        The physical lab is designed for conducting physics
                        experiments. It is equipped with instruments and
                        apparatus to demonstrate and explore physical
                        principles.
                      </p>
                    </div>
                    <div className="col-md-4 order-1 order-md-2">
                      <img
                        alt=""
                        src="imgInfra/physic.jpg"
                        className="images img alt=fluid  rounded"
                      />
                    </div>
                  </div>
                  <div className="row col-12" style={{ marginTop: "auto" }}>
                    <div className="col-md-4">
                      <img
                        alt=""
                        src="imgInfra/chemist.jpg"
                        className="images img alt=fluid  rounded"
                      />
                    </div>
                    <div className="col-md-8">
                      <h3>Chemistry Lab</h3>
                      <p className="fs-6">
                        Our chemistry lab provides a safe and well-equipped
                        environment for students to conduct chemical
                        experiments. It promotes hands-on learning and
                        scientific inquiry.
                      </p>
                    </div>
                  </div>

                  <br />
                </div>
              </div>
            </div>
          </section>
          {/* =====Lab End======= */}
        </div>
      </div>
    </Layout>
  );
};

export default Infra;
