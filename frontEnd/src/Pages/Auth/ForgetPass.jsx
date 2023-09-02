import React, { useState } from "react";
import Layout from "../../conponents/Layout";
import { toast } from "react-toastify";
import Axios from "../../conponents/Axios";

const ForgetPass = () => {
  const [verify, setverify] = useState(false);
  const [email, setemail] = useState("");
  const [otp, setotp] = useState("");
  const [password, setPassword] = useState("");
  const sendOtp = async (e) => {
    e.preventDefault();
    try {
      const res = await Axios.post("/auth/send-otp", { email });
      if (res.data && res.data.success) {
        toast.success(res.data.message);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      toast.error("something went wrong...");
    }
  };
  const otpverify = async (e) => {
    e.preventDefault();
    try {
      console.log(password);
      const res = await Axios.post("/auth/verify", { otp, email });
      if (res.data && res.data.success) {
        setverify(true);
        toast.success(res.data.message);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      toast.error("something went wrong...");
    }
  };
  const HandlePass = async (e) => {
    e.preventDefault();
    try {
      const res = await Axios.post("/auth/forget/password", {
        email,
        password,
      });
      if (res.data && res.data.success) {
        toast.success(res.data.message);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong...");
    }
  };
  return (
    <Layout>
      <div className="card col-sm-6 h-100 p-3 my-5 col-md-3 m-auto">
        <h4 className="text-primary text-center">
          <b>Forget Password</b>
        </h4>
        {!verify && (
          <>
            {" "}
            <form action="" onSubmit={sendOtp}>
              <div className="mb-3">
                <label htmlFor="">Enter Your email/username</label>
                <input
                  onChange={(e) => setemail(e.target.value)}
                  type="email"
                  name="email"
                  className="form-control"
                />
              </div>
              <div className="mb-3 text-center">
                <button type="submit" className="btn btn-primary">
                  Send OTP
                </button>
              </div>
            </form>
            <form action="" onSubmit={otpverify}>
              <div className="mb-3">
                <label htmlFor="">Enter Your OTP</label>
                <input
                  type="text"
                  onChange={(e) => setotp(e.target.value)}
                  name="otp"
                  className="form-control"
                />
              </div>
              <div className="mb-3 text-center">
                <button className="btn btn-primary">Verify OTP</button>
              </div>
            </form>
          </>
        )}
        {verify && (
          <form action="" onSubmit={HandlePass}>
            <div className="mb-3">
              <label htmlFor="">Enter New Password</label>
              <input
                type="text"
                onChange={(e) => setPassword(e.target.value)}
                name="password"
                className="form-control"
              />
            </div>
            <div className="mb-3 text-center d-flex justify-content-between">
              <button className="btn btn-primary">Forget Password</button>
              <button
                onClick={() => setverify(!verify)}
                className="btn btn-primary"
              >
                Back
              </button>
            </div>
          </form>
        )}
      </div>
    </Layout>
  );
};

export default ForgetPass;
