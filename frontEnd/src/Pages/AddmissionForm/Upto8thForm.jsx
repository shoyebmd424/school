import React, { useState } from "react";
import Layout from "../../conponents/Layout";
import Path from "../../conponents/Path";
import { toast } from "react-toastify";
import Axios from "../../conponents/Axios";

const Upto8thForm = () => {
  const [data, setdata] = useState(undefined);
  const handleChange = (e) => {
    setdata((pre) => ({ ...pre, [e.target.name]: [e.target.value] }));
  };
  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await Axios.post("/class8th", data);
      if (res.data && res.data.success) {
        toast.success(res.data.message);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      toast.error("something went wrong....");
    }
  };

  return (
    <Layout>
      <Path path={[{ path: "/", name: "Home" }]} page="Addmission" />
      <div className="container my-5">
        <h1 className="my-5 text-center text-primary">
          <b>Oriental Public School</b>
        </h1>
        <div className="card p-3 bg-light shadow">
          <h2 className="text-center my-3">
            <b> Registration for Class Nursery to 8th addmission form</b>
          </h2>
          <form action="" onSubmit={handlesubmit}>
            <div className="row row-cols-md-2 my-3 text-capitalize">
              <div className="mb-3">
                <label htmlFor="">Name of Student</label>
                <input
                  onChange={handleChange}
                  required
                  type="text"
                  name="name"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="">Student Aadhaar Number</label>
                <input
                  onChange={handleChange}
                  required
                  type="text"
                  name="aadhaar"
                  className="form-control"
                />
              </div>
              <div className="mb-3 d-flex gap-3">
                <label htmlFor="">Gender</label>
                <div class="form-check">
                  <input
                    className="form-check-input"
                    onChange={handleChange}
                    required
                    type="radio"
                    name="gender"
                    value="male"
                  />
                  <label className="form-check-label" for="gender2">
                    Male
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    onChange={handleChange}
                    required
                    type="radio"
                    name="gender"
                    id="female"
                    value="female"
                  />
                  <label className="form-check-label" for="female">
                    Female
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    onChange={handleChange}
                    required
                    type="radio"
                    name="gender"
                    id="tans"
                    value="trans"
                  />
                  <label className="form-check-label" for="tans">
                    Trans
                  </label>
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="">Father's name </label>
                <input
                  onChange={handleChange}
                  required
                  type="text"
                  name="father"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="">Father's Occupation</label>
                <input
                  onChange={handleChange}
                  required
                  type="text"
                  name="fathersOccupation"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="">Father's Qualification</label>
                <input
                  onChange={handleChange}
                  required
                  type="text"
                  name="fathersQualification"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="">Mother's name</label>
                <input
                  onChange={handleChange}
                  required
                  type="text"
                  name="mother"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="">Mother's Occupation</label>
                <input
                  onChange={handleChange}
                  required
                  type="text"
                  name="mothersOccupation"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="">Mother's Qualification</label>
                <input
                  onChange={handleChange}
                  required
                  type="text"
                  name="mothersQualification"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="">Gaurdian's name &Relation</label>
                <input
                  onChange={handleChange}
                  required
                  type="text"
                  name="guadian"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="">Permanent address</label>
                <input
                  onChange={handleChange}
                  required
                  type="text"
                  name="permanentAddress"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="">Present Address</label>
                <input
                  onChange={handleChange}
                  required
                  type="text"
                  name="presentAddress"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="">Phone No(Mother's Whatsapp)</label>
                <input
                  onChange={handleChange}
                  required
                  type="text"
                  name="mothersWhatsAppNo"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="">Phone No(Father's Whatsapp)</label>
                <input
                  onChange={handleChange}
                  required
                  type="text"
                  name="fathersWhatsNo"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="">Religion and caste</label>
                <input
                  onChange={handleChange}
                  required
                  type="text"
                  name="caste"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="">DOB of Student</label>
                <input
                  onChange={handleChange}
                  required
                  type="date"
                  name="DOB"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="">Age</label>
                <input
                  onChange={handleChange}
                  required
                  type="text"
                  name="age"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="">Last Qualification </label>
                <input
                  onChange={handleChange}
                  required
                  type="text"
                  name="lastQualification"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="">Last Institute </label>
                <input
                  onChange={handleChange}
                  required
                  type="text"
                  name="lastIntitution"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="">Class in Which seeking admission</label>
                <input
                  onChange={handleChange}
                  required
                  type="text"
                  name="forAddmission"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="">Medium</label>
                <input
                  onChange={handleChange}
                  required
                  type="text"
                  name="medium"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="">Last mark sheet</label>
                <input
                  onChange={handleChange}
                  required
                  type="file"
                  name="lastMarkSheet"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="">Additional Subject</label>
                <input
                  onChange={handleChange}
                  required
                  type="text"
                  name="additionalSubject"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="">
                  Do you need school conveyance if so bus stop address
                </label>
                <input
                  onChange={handleChange}
                  required
                  type="text"
                  name="busAddress"
                  className="form-control"
                />
              </div>
            </div>
            <div className="mb-3 text-center">
              <button className="btn btn-primary">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Upto8thForm;
