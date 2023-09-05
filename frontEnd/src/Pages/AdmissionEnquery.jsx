import React, { useState } from "react";
import Layout from "../conponents/Layout";
import Path from "../conponents/Path";
import { toast } from "react-toastify";
import Axios from "../conponents/Axios";
const AdmissionEnquery = () => {
  const [enquery, setEnquery] = useState(undefined);
  const HandleChange = (e) => {
    setEnquery((prev) => ({ ...prev, [e.target.name]: [e.target.value] }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await Axios.post("/enquery", enquery);
      if (res.data && res.data.success) {
        toast.success(res.data.message);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      toast.error("Something went wrong....");
    }
  };
  return (
    <Layout>
      <Path
        path={[
          { path: "/", name: "Home" },
          // { path: "/addmission", name: "Addmission" },
        ]}
        page="Enquery"
      />
      <div className="enquery my-5">
        <h1 className="ps-3">Addmission Enquery </h1>
        <div className="card col-md-8 bg-light shadow mx-auto my-5 p-5">
          <h3 className="text-center my-3">
            <b>Addmission Enquery Form</b>
          </h3>
          <form action="" onSubmit={handleSubmit}>
            <div className="row row-cols-md-2">
              {" "}
              <div className="mb-3">
                <label htmlFor="name">Enter Your Name</label>
                <input
                  onChange={HandleChange}
                  type="text"
                  name="name"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email">Enter Your Email</label>
                <input
                  onChange={HandleChange}
                  type="email"
                  name="email"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="mobile">Enter Your Mobile</label>
                <input
                  onChange={HandleChange}
                  type="text"
                  name="mobile"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="Address">Enter Your Address</label>
                <input
                  onChange={HandleChange}
                  type="text"
                  name="address"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="city">Enter Your city</label>
                <input
                  onChange={HandleChange}
                  type="text"
                  name="city"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="country">Enter Your country</label>
                <input
                  onChange={HandleChange}
                  type="text"
                  name="country"
                  className="form-control"
                />
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="message">Enter Your Message</label>
              <textarea
                onChange={HandleChange}
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
