import React, { useState } from "react";
import Layout from "../../conponents/Layout";
import Axios from "../../conponents/Axios";
import { useAuth } from "../../context/AuthContext";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { BsEye, BsEyeSlash } from "react-icons/bs";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isPass, setPass] = useState(false);
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await Axios.post("/auth/login", {
        email: username,
        password: password,
      });
      if (res && res.data.success) {
        console.log(res.data);
        setAuth({
          ...auth,
          user: res.data.message,
          token: res.data.token,
        });
        localStorage.setItem("auth", JSON.stringify(res.data));
        if (res.data.message.isAdmin === 1) {
          navigate(location.state || "/admin");
        } else if (res.data.message.isTeacher === 1) {
          navigate(location.state || "/teacher");
        } else {
          navigate(location.state || "/student");
        }
      } else {
        // console.log(res.data);
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong.....");
    }
    setPassword("");
    setUsername("");
  };
  return (
    <Layout>
      <div className="login">
        <div className="card col-md-3 shadow mx-auto my-5 py-5">
          <h3 className="text-center">
            <b>Sign In</b>
          </h3>
          <form action="" className="p-3" onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                className="form-control"
                type="text"
                placeholder="Enter Username/Email"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <span className="d-flex border rounded pe-2">
                <input
                  className="form-control border-0"
                  type={isPass ? "text" : "password"}
                  placeholder="Enter password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                {isPass ? (
                  <BsEye
                    onClick={() => setPass(!isPass)}
                    className="my-auto h4"
                  />
                ) : (
                  <BsEyeSlash
                    onClick={() => setPass(!isPass)}
                    className="my-auto h4"
                  />
                )}
              </span>
            </div>
            <div className="mb-3 d-flex justify-content-between">
              <Link to="/forget" className="text-decoration-none">
                forget password
              </Link>
              {(auth?.user?.isAdmin === 1 || auth?.user?.isTeacher === 1) && (
                <Link
                  to={
                    auth?.user?.isAdmin === 1
                      ? "/admin/register"
                      : auth?.user?.isTeacher === 1
                      ? "/teacher/register"
                      : "/"
                  }
                  className="text-decoration-none"
                >
                  Register
                </Link>
              )}
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

export default Login;
