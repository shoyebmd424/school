import React from "react";
import Layout from "../conponents/Layout";
import Path from "../conponents/Path";

const SmartClass = () => {
  return (
    <Layout>
      <Path path={[{ path: "/", name: "Home" }]} page="Smart Class" />
      <section>
        <div className="container py-5">
          <div className="section-title bg-dark text-white rounded-3">
            <h2 className="text-center fs-2 text-monochrome py-2">
              Class Room
            </h2>
          </div>
          <div className="">
            <div className=" row mt-5 border rounded p-3 m-3" style={{}}>
              <div className="row col-12" style={{ marginTop: "auto" }}>
                <h3>Normal Class Room</h3>
                <div className="col-md-4">
                  <img
                    alt=""
                    src="imgInfra\class1.jpg"
                    className="images img alt=fluid  rounded"
                  />
                </div>
                <div className="col-md-8">
                  <p className="fs-5">
                    Our normal classrooms are designed to provide a comfortable
                    learning environment for students. They are equipped with
                    modern teaching aids and technology to enhance the learning
                    experience.
                  </p>
                </div>
              </div>
              <div className="row col-12 py-2" style={{ marginTop: "auto" }}>
                <h3>Special Class Room</h3>
                <div className="col-md-8 order-2 order-md-1">
                  <p className="fs-5">
                    Our special classrooms are tailored to accommodate
                    specialized learning needs. They are equipped with resources
                    and tools to support students with diverse requirements.
                  </p>
                </div>
                <div className="col-md-4 order-1 order-md-2">
                  <img
                    alt=""
                    src="imgInfra\class2.jpg"
                    className="images img alt=fluid  rounded"
                  />
                </div>
              </div>
              <div className="row col-12" style={{ marginTop: "auto" }}>
                <h3 className="my-3">Smart Class</h3>
                <div className="col-md-4">
                  <img
                    alt=""
                    src="imgInfra\class3.jpg"
                    className="images img alt=fluid  rounded"
                  />
                </div>
                <div className="col-md-8">
                  <p className="fs-5">
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
    </Layout>
  );
};

export default SmartClass;
