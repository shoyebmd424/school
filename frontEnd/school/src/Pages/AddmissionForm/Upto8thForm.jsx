import React from "react";
import Layout from "../../conponents/Layout";
import Path from "../../conponents/Path";

const Upto8thForm = () => {
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
                <label htmlFor="">Father's Occupation</label>
                <input type="text" className="form-control" />
              </div>
              <div className="mb-3">
                <label htmlFor="">Father's Qualification</label>
                <input type="text" className="form-control" />
              </div>
              <div className="mb-3">
                <label htmlFor="">Mother's name</label>
                <input type="text" className="form-control" />
              </div>
              <div className="mb-3">
                <label htmlFor="">Mother's Occupation</label>
                <input type="text" className="form-control" />
              </div>
              <div className="mb-3">
                <label htmlFor="">Mother's Qualification</label>
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
                <label htmlFor="">Phone No(Mother's Whatsapp)</label>
                <input type="text" className="form-control" />
              </div>
              <div className="mb-3">
                <label htmlFor="">Phone No(Father's Whatsapp)</label>
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
                <label htmlFor="">Age</label>
                <input type="text" className="form-control" />
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
                <label htmlFor="">Class in Which seeking admission</label>
                <input type="text" className="form-control" />
              </div>
              <div className="mb-3">
                <label htmlFor="">Medium</label>
                <input type="text" className="form-control" />
              </div>
              <div className="mb-3">
                <label htmlFor="">Last mark sheet</label>
                <input type="file" className="form-control" />
              </div>
              <div className="mb-3">
                <label htmlFor="">Additional Subject</label>
                <input type="text" className="form-control" />
              </div>
              <div className="mb-3">
                <label htmlFor="">
                  Do you need school conveyance if so bus stop address
                </label>
                <input type="text" className="form-control" />
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
