import React from "react";
import Layout from "../../conponents/Layout";
import Path from "../../conponents/Path";

const Class9thForm = () => {
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
          <form action="">
            <div className="row row-cols-md-2 my-3 text-capitalize">
              <div className="mb-3">
                <label htmlFor="">Name of Student</label>
                <input type="text" className="form-control" />
              </div>
              <div className="mb-3">
                <label htmlFor="">Student Aadhaar Number</label>
                <input type="text" className="form-control" />
              </div>
              <div className="mb-3 d-flex gap-3">
                <label htmlFor="">Gender</label>
                <div class="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="exampleRadios"
                    value="male"
                  />
                  <label className="form-check-label" for="exampleRadios2">
                    Male
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="exampleRadios"
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
                    type="radio"
                    name="exampleRadios"
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
                <input type="text" className="form-control" />
              </div>
              <div className="mb-3">
                <label htmlFor="">Mother's name</label>
                <input type="text" className="form-control" />
              </div>
              <div className="mb-3">
                <label htmlFor="">Gaurdian's name &Relation</label>
                <input type="text" className="form-control" />
              </div>
              <div className="mb-3">
                <label htmlFor="">Permanent address</label>
                <input type="text" className="form-control" />
              </div>
              <div className="mb-3">
                <label htmlFor="">Present Address</label>
                <input type="text" className="form-control" />
              </div>
              <div className="mb-3">
                <label htmlFor="">Phone No.</label>
                <input type="text" className="form-control" />
              </div>
              <div className="mb-3">
                <label htmlFor="">Whatsapp No.</label>
                <input type="text" className="form-control" />
              </div>
              <div className="mb-3">
                <label htmlFor="">Religion and caste</label>
                <input type="text" className="form-control" />
              </div>
              <div className="mb-3">
                <label htmlFor="">DOB of Student</label>
                <input type="date" className="form-control" />
              </div>
              <div className="mb-3">
                <label htmlFor="">Last Qualification </label>
                <input type="text" className="form-control" />
              </div>
              <div className="mb-3">
                <label htmlFor="">Last Institute </label>
                <input type="text" className="form-control" />
              </div>
              <div className="mb-3">
                <label htmlFor="">
                  Do you need school conveyance if so bus stop address
                </label>
                <input type="text" className="form-control" />
              </div>
              <div className="mb-3 d-flex gap-3">
                <label htmlFor="">
                  <b>Type of Student</b>
                </label>
                <div class="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="exampleRadios"
                    value="male"
                  />
                  <label className="form-check-label" for="exampleRadios2">
                    Regular
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="exampleRadios"
                    id="female"
                    value="female"
                  />
                  <label className="form-check-label" for="female">
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
                    type="radio"
                    name="exampleRadios"
                    value="General"
                  />
                  <label className="form-check-label" for="exampleRadios2">
                    General
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="exampleRadios"
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
                    type="radio"
                    name="exampleRadios"
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
                    type="radio"
                    name="exampleRadios"
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
                    type="radio"
                    name="exampleRadios"
                    value="sc"
                  />
                  <label className="form-check-label" for="exampleRadios2">
                    SC
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="exampleRadios"
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
                    type="radio"
                    name="exampleRadios"
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
                    type="radio"
                    name="exampleRadios"
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
                <input type="checkbox" className="check" />
              </div>
              <div>
                <label htmlFor="">English</label>
                <input type="checkbox" className="check" />
              </div>

              <div className="mb-3 ">
                <label htmlFor="">
                  <b>Choose any one</b>
                </label>
                <div class="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="exampleRadios"
                    value="sc"
                  />
                  <label className="form-check-label" for="exampleRadios2">
                    Mathemetics
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="exampleRadios"
                    id="st"
                    value="st"
                  />
                  <label className="form-check-label" for="st">
                    Home Science (only for girl)
                  </label>
                </div>
              </div>

              <div>
                <label htmlFor="">Science</label>
                <input type="checkbox" className="check" />
              </div>
              <div>
                <label htmlFor="">Social science</label>
                <input type="checkbox" className="check" />
              </div>

              <div className="mb-3 ">
                <label htmlFor="">
                  <b>Choose any one</b>
                </label>
                <div class="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="exampleRadios"
                    value="sc"
                  />
                  <label className="form-check-label" for="exampleRadios2">
                    Commerce
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="exampleRadios"
                    id="st"
                    value="st"
                  />
                  <label className="form-check-label" for="st">
                    Drawing
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="exampleRadios"
                    id="st"
                    value="st"
                  />
                  <label className="form-check-label" for="st">
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
