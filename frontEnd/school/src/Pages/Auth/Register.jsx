import React, { useState } from "react";
import Layout from "../../conponents/Layout";
import Axios from "../../conponents/Axios";
import { toast } from "react-toastify";
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [cnfPass, setCnfpass] = useState("");
  const [isTeacher, setIsteacher] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await Axios.post("/auth/register", {
        name,
        email,
        mobile,
        password,
        cnfPass,
        isTeacher,
      });
      if (res && res.data.success) {
        toast.success(res.data.message);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong.....");
    }
    setName("");
    setEmail("");
    setMobile("");
    setCnfpass("");
    setPassword("");
    setIsteacher(false);
  };
  return (
    <Layout>
      <div className="register">
        <div className="card shadow  col-md-3 mx-auto my-5 py-5">
          <h3 className="text-center">
            <b>Sign Up</b>
          </h3>
          <form action="" className="p-3" onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                className="form-control"
                type="text"
                placeholder="Enter Name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <input
                className="form-control"
                type="email"
                placeholder="Enter Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <input
                className="form-control"
                type="text"
                placeholder="Enter mobile Number"
                onChange={(e) => setMobile(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <input
                className="form-control"
                type="password"
                placeholder="Enter password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <input
                className="form-control"
                type="password"
                placeholder="Enter Confirm password"
                onChange={(e) => setCnfpass(e.target.value)}
              />
            </div>
            <div className="mb-3 d-flex justify-content-between mx-3">
              <div>
                <input
                  className="form-controll check p-2"
                  type="checkbox"
                  onChange={(e) => {
                    if (e.target.value) setIsteacher(true);
                  }}
                />
                <label htmlFor="checkbox" className="ms-2">
                  Teacher
                </label>
              </div>
              <div>
                <input
                  className="form-controll check"
                  type="checkbox"
                  onChange={(e) => {
                    if (e.target.value) setIsteacher(false);
                  }}
                />
                <label htmlFor="checkbox" className="ms-2">
                  Student
                </label>
              </div>
            </div>
            <div className="mb-3 text-center">
              <button type="submit" className="btn btn-primary">
                <b>Login</b>
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Register;