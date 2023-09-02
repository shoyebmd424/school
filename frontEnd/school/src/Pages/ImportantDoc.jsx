import React from "react";
import Path from "../conponents/Path";
import Layout from "../conponents/Layout";

const ImportantDoc = () => {
  return (
    <Layout>
      <Path
        path={[
          { path: "/", name: "Home" },
          { path: "/addmission", name: "Addmission" },
        ]}
        page="Important Documment"
      />
      <div className="container">
        <h1>important documment</h1>
        <div className="d-flex mb-3 my-3 bg-light p-3 justify-content-between">
          <div>
            <p>Download our school examination guidlines</p>
          </div>
          <div>
            {" "}
            <a className="text-white" href="/images/facility.jpg" download>
              <button className="btn btn-primary"> Download</button>
            </a>
          </div>
        </div>
        <div className="d-flex mb-3 my-3 bg-light p-3 justify-content-between">
          <div>
            <p>List of our topper list who is passing 2023</p>
          </div>
          <div>
            {" "}
            <a className="text-white" href="/images/facility.jpg" download>
              <button className="btn btn-primary"> Download</button>
            </a>
          </div>
        </div>
        <div className="d-flex mb-3 my-3 bg-light p-3 justify-content-between">
          <div>
            <p>Date of tour</p>
          </div>
          <div>
            {" "}
            <a className="text-white" href="/images/facility.jpg" download>
              <button className="btn btn-primary"> Download</button>
            </a>
          </div>
        </div>
        <div className="d-flex mb-3 my-3 bg-light p-3 justify-content-between">
          <div>
            <p>Libarary guidlines, procedure and policy</p>
          </div>
          <div>
            {" "}
            <a className="text-white" href="/images/facility.jpg" download>
              <button className="btn btn-primary"> Download</button>
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ImportantDoc;
