import React, { useEffect, useState } from "react";
import Layout from "../conponents/Layout";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const [time, setime] = useState(5);
  const navigate = useNavigate();
  useEffect(() => {
    setInterval(() => {
      setime(time - 1);
    }, 1000);
    if (time === 0) {
      navigate("/");
      setime(0);
    }
  }, [time, navigate]);
  return (
    <Layout>
      <div className="text-center">
        <h1>OOPS! Page Not found</h1>
        <h2>Comming Soon </h2>
        <p>redirecting in {time} seconds</p>
      </div>
    </Layout>
  );
};

export default Error;
