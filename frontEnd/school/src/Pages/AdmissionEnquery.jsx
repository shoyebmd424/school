import React from "react";
import Layout from "../conponents/Layout";
import Path from "../conponents/Path";
const AdmissionEnquery = () => {
  return (
    <Layout>
      <Path
        path={[
          { path: "/", name: "Home" },
          { path: "/addmission", name: "Addmission" },
        ]}
        page="Enquery"
      />
      <div className="enquery my-5">
        <h1 className="ps-3">Addmission Enquery </h1>
        <div className="card col-md-8 bg-light shadow mx-auto my-5 p-5">
          <h3 className="text-center my-3">
            <b>Addmission Enquery Form</b>
          </h3>
          <form action="">
            <div className="row row-cols-md-2">
              {" "}
              <div className="mb-3">
                <label htmlFor="name">Enter Your Name</label>
                <input type="text" className="form-control" />
              </div>
              <div className="mb-3">
                <label htmlFor="email">Enter Your Email</label>
                <input type="email" className="form-control" />
              </div>
              <div className="mb-3">
                <label htmlFor="mobile">Enter Your Mobile</label>
                <input type="text" className="form-control" />
              </div>
              <div className="mb-3">
                <label htmlFor="Address">Enter Your Address</label>
                <input type="text" className="form-control" />
              </div>
              <div className="mb-3">
                <label htmlFor="city">Enter Your city</label>
                <input type="text" className="form-control" />
              </div>
              <div className="mb-3">
                <label htmlFor="country">Enter Your country</label>
                <input type="text" className="form-control" />
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="message">Enter Your Message</label>
              <textarea
                className="form-control"
                name="message"
                id=""
                rows="3"
              ></textarea>
            </div>
            <div className="text-center">
              <button className="btn btn-primary px-4 rounded-0">
                <b>submit</b>
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default AdmissionEnquery;
