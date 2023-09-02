import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { toast } from "react-toastify";
import Axios from "../../conponents/Axios";
import { useAuth } from "../../context/AuthContext";

const AddStudent = ({ update, setupdate }) => {
  const [student, setStudent] = useState(undefined);
  const handleChange = (e) => {
    setStudent((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const [auth] = useAuth();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (student) {
      student.teacherEmail = auth?.user?.email;
    }
    try {
      const res = await Axios.post("/student", student);
      //   console.log(res);
      if (res.data && res.data.success) {
        toast.success(res.data.message);
        window.location.reload();
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error);
    }
  };
  return (
    <div className="container my-5 position-absolute col-md-8 addstudent">
      <div className="card bg-light p-3">
        <div className="text-end" style={{ margin: "-0.5rem" }}>
          {" "}
          <RxCross1 onClick={() => setupdate(!update)} className="h3" />
        </div>
        <h2 className="text-center my-5">
          <b>Add Student</b>
        </h2>
        <form action="" onSubmit={handleSubmit}>
          <div className="row row-cols-md-2">
            <div className="mb-3">
              <label htmlFor="">Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="">Roll Number</label>
              <input
                type="text"
                className="form-control"
                onChange={handleChange}
                name="rollNumber"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="">Student Email</label>
              <input
                type="email"
                className="form-control"
                onChange={handleChange}
                name="studentemail"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="">Student Standard</label>
              <input
                type="text"
                className="form-control"
                onChange={handleChange}
                name="standard"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="">Father's Name </label>
              <input
                type="text"
                className="form-control"
                onChange={handleChange}
                name="fatherName"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="">Mother's Name </label>
              <input
                type="text"
                className="form-control"
                onChange={handleChange}
                name="motherName"
              />
            </div>
            <div className="mb-3">
              <h4>
                <label htmlFor="">Attendace </label>
              </h4>
              <div className="d-md-flex justify-content-between gap-5">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Total Days"
                  name="attendanceTotalDays"
                  onChange={handleChange}
                />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Present"
                  name="attendancePresent"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="mb-3">
              <h4 htmlFor="">
                <b>Fees</b>{" "}
              </h4>
              <div className="d-md-flex justify-content-between gap-5">
                <input
                  type="text"
                  placeholder="Total Fees"
                  className="form-control"
                  onChange={handleChange}
                  name="totalFees"
                />
                <input
                  type="text"
                  placeholder="Paid"
                  className="form-control"
                  onChange={handleChange}
                  name="feesPaid"
                />
              </div>
            </div>
            <div className="mb-3">
              <h4 htmlFor="">
                <b>Upload Marks</b>{" "}
              </h4>
              <div className="row row-cols-2 my-3">
                <label htmlFor="">
                  <b>Unit 1</b>
                </label>
                <input
                  type="file"
                  className="form-control"
                  onChange={handleChange}
                  name="unit1marks"
                />
              </div>
              <div className="row row-cols-2 my-3">
                <div>
                  <b>Unit 2</b>
                </div>
                <input
                  type="file"
                  className="form-control"
                  onChange={handleChange}
                  name="unit2marks"
                />
              </div>
              <div className="row row-cols-2 my-3">
                <label htmlFor="">
                  <b>Half Yearly</b>
                </label>
                <input
                  type="file"
                  className="form-control"
                  onChange={handleChange}
                  name="halfYearlymarks"
                />
              </div>
              <div className="row row-cols-2 my-3">
                <label htmlFor="">
                  <b>Yearly</b>
                </label>
                <input
                  type="file"
                  className="form-control"
                  onChange={handleChange}
                  name="yearlymarks"
                />
              </div>
            </div>
          </div>
          <div className="mb-3 text-center">
            <button className="btn btn-primary">
              <b>Add Student</b>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddStudent;
