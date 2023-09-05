import React, { useState } from "react";
import Layout from "../../conponents/Layout";
import Path from "../../conponents/Path";
import { toast } from "react-toastify";
import Axios from "../../conponents/Axios";

const Class9thForm = () => {
  const [data, setData] = useState(undefined);
  const hanldeChange = (e) => {
    setData((prev) => ({ ...prev, [e.target.name]: [e.target.value] }));
  };
  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await Axios.post("/class9th", data);
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
      <div className="container my-5 ninth-class">
        <h1 className="my-5 text-center text-primary">
          <b>Oriental Public School</b>
        </h1>
        <div className="card p-3 bg-light shadow">
          <h2 className="text-center my-5">
            <b> Registration for Class 9th Addmission form</b>
          </h2>
          <form action="" onSubmit={handlesubmit}>
            <div className="row row-cols-md-2 my-3 text-capitalize">
              <div className="mb-3">
                <label htmlFor="">Name of Student</label>
                <input
                  onChange={hanldeChange}
                  required
                  type="text"
                  name="name"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="">Student Aadhaar Number</label>
                <input
                  onChange={hanldeChange}
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
                    onChange={hanldeChange}
                    required
                    type="radio"
                    name="gender"
                    value="male"
                  />
                  <label className="form-check-label" for="exampleRadios2">
                    Male
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    onChange={hanldeChange}
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
                    onChange={hanldeChange}
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
                  onChange={hanldeChange}
                  required
                  type="text"
                  name="father"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="" name="mother">
                  Mother's name
                </label>
                <input
                  name="mother"
                  onChange={hanldeChange}
                  required
                  type="text"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="" name="guardian">
                  Gaurdian's name &Relation
                </label>
                <input
                  name="guardian"
                  onChange={hanldeChange}
                  required
                  type="text"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="">Permanent address</label>
                <input
                  onChange={hanldeChange}
                  required
                  type="text"
                  name="permanentAddress"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="">Present Address</label>
                <input
                  name="presentAddress"
                  onChange={hanldeChange}
                  required
                  type="text"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="">Phone No.</label>
                <input
                  onChange={hanldeChange}
                  required
                  type="text"
                  name="phone"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="">Whatsapp No.</label>
                <input
                  onChange={hanldeChange}
                  required
                  type="text"
                  name="whatsAppNo"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="">Religion and caste</label>
                <input
                  onChange={hanldeChange}
                  required
                  type="text"
                  name="religion"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="">DOB of Student</label>
                <input
                  onChange={hanldeChange}
                  required
                  type="date"
                  name="DOB"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="">Last Qualification </label>
                <input
                  onChange={hanldeChange}
                  required
                  type="text"
                  name="lastQualification"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="">Last Institute </label>
                <input
                  onChange={hanldeChange}
                  required
                  type="text"
                  name="lastinstitute"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="">
                  Do you need school conveyance if so bus stop address
                </label>
                <input
                  name="busAddress"
                  onChange={hanldeChange}
                  required
                  type="text"
                  className="form-control"
                />
              </div>
              <div className="mb-3 d-flex gap-3">
                <label htmlFor="">
                  <b>Type of Student</b>
                </label>
                <div class="form-check">
                  <input
                    className="form-check-input"
                    onChange={hanldeChange}
                    required
                    type="radio"
                    name="typeStudent1"
                    value="regular"
                  />
                  <label className="form-check-label" for="exampleRadios2">
                    Regular
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    onChange={hanldeChange}
                    required
                    type="radio"
                    name="typeStudent1"
                    id="reAdmission"
                    value="reAdmission"
                  />
                  <label className="form-check-label" for="reAdmission">
                    Re-addmission in class 9th
                  </label>
                </div>
              </div>
              <div className="mb-3 d-flex gap-3">
                <label htmlFor="">
                  <b>Type of student 2:</b>
                </label>
                <div class="form-check">
                  <input
                    className="form-check-input"
                    onChange={hanldeChange}
                    required
                    type="radio"
                    name="typeStudent2"
                    value="General"
                  />
                  <label className="form-check-label" for="exampleRadios2">
                    General
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    onChange={hanldeChange}
                    required
                    type="radio"
                    name="typeStudent2"
                    id="singht"
                    value="singht"
                  />
                  <label className="form-check-label" for="singht">
                    singht badhit
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    onChange={hanldeChange}
                    required
                    type="radio"
                    name="typeStudent2"
                    id="mute"
                    value="mute"
                  />
                  <label className="form-check-label" for="mute">
                    mute bashir
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    onChange={hanldeChange}
                    required
                    type="radio"
                    name="typeStudent2"
                    id="mute"
                    value="mute"
                  />
                  <label className="form-check-label" for="mute">
                    handicapped
                  </label>
                </div>
              </div>

              <div className="mb-3 d-flex gap-3">
                <label htmlFor="">
                  <b>Caste</b>
                </label>
                <div class="form-check">
                  <input
                    className="form-check-input"
                    onChange={hanldeChange}
                    required
                    type="radio"
                    name="caste"
                    value="sc"
                  />
                  <label className="form-check-label" for="">
                    SC
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    onChange={hanldeChange}
                    required
                    type="radio"
                    name="caste"
                    id="st"
                    value="st"
                  />
                  <label className="form-check-label" for="st">
                    ST
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    onChange={hanldeChange}
                    required
                    type="radio"
                    name="caste"
                    id="obc"
                    value="obc"
                  />
                  <label className="form-check-label" for="obc">
                    OBC
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    onChange={hanldeChange}
                    required
                    type="radio"
                    name="caste"
                    id="others"
                    value="others"
                  />
                  <label className="form-check-label" for="others">
                    OTHERS
                  </label>
                </div>
              </div>
            </div>

            <div className="mb-3 d-flex gap-3">
              <label htmlFor="">
                <b>Select Subject</b>
              </label>
              <div>
                <label htmlFor="">Hindi</label>
                <input
                  name="hindi"
                  onChange={hanldeChange}
                  required
                  type="checkbox"
                  value="Hindi"
                  className="check"
                />
              </div>
              <div>
                <label htmlFor="">English</label>
                <input
                  onChange={hanldeChange}
                  required
                  type="checkbox"
                  value="english"
                  className="check"
                  name="english"
                />
              </div>

              <div className="mb-3 ">
                <label htmlFor="">
                  <b>Choose any one</b>
                </label>
                <div class="form-check">
                  <input
                    className="form-check-input"
                    onChange={hanldeChange}
                    required
                    type="radio"
                    name="chois1"
                    value="math"
                  />
                  <label className="form-check-label" for="math">
                    Mathemetics
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    onChange={hanldeChange}
                    required
                    type="radio"
                    name="choise1"
                    id="homescience"
                    value="homescience"
                  />
                  <label className="form-check-label" for="homescience">
                    Home Science (only for girl)
                  </label>
                </div>
              </div>

              <div>
                <label htmlFor="">Science</label>
                <input
                  name="science"
                  value="science"
                  onChange={hanldeChange}
                  required
                  type="checkbox"
                  className="check"
                />
              </div>
              <div>
                <label htmlFor="">Social science</label>
                <input
                  name="sscience"
                  value="social science"
                  onChange={hanldeChange}
                  required
                  type="checkbox"
                  className="check"
                />
              </div>

              <div className="mb-3 ">
                <label htmlFor="">
                  <b>Choose any one</b>
                </label>
                <div class="form-check">
                  <input
                    className="form-check-input"
                    onChange={hanldeChange}
                    required
                    type="radio"
                    name="chois1"
                    value="commerce"
                  />
                  <label className="form-check-label" for="cho">
                    Commerce
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    onChange={hanldeChange}
                    required
                    type="radio"
                    name="choise2"
                    id="drawing"
                    value="drawing"
                  />
                  <label className="form-check-label" for="drawing">
                    Drawing
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    onChange={hanldeChange}
                    required
                    type="radio"
                    name="choise2"
                    id="computer"
                    value="computer"
                  />
                  <label className="form-check-label" for="computer">
                    Computer
                  </label>
                </div>
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

export default Class9thForm;
