import React, { useEffect, useState } from "react";
import useFetch from "../../conponents/Hooks/useFetch";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import Layout from "../../conponents/Layout";
import Path from "../../conponents/Path";
import { BsPeople, BsPeopleFill } from "react-icons/bs";
import { MdGrading, MdPaid, MdPresentToAll } from "react-icons/md";
import { PiCertificateBold, PiGraduationCapBold } from "react-icons/pi";
import { BiListCheck } from "react-icons/bi";
import { FaRupeeSign } from "react-icons/fa";

const StudentView = () => {
  const [list, setlist] = useState(undefined);
  const location = useLocation();
  const path = location.pathname.split("/");
  const CustomId = "toastId";
  const id = path[path.length - 1];
  const { data, loading } = useFetch(`/student/${id}`);
  // console.log(list);
  useEffect(() => {
    setlist(data[0]);
  }, [data]);
  return (
    <Layout>
      <Path
        path={[
          { path: "/", name: "Home" },
          { path: "/teacher", name: "Teacher Dashboard" },
        ]}
        page="Student Details"
      />
      <div style={{ overflow: "hidden" }}>
        <h1 className=" text-center my-3">
          <b> Student Details</b>
        </h1>
        {loading ? (
          loading & toast.loading("Lodaing", { toastId: CustomId })
        ) : (
          <>
            {toast.dismiss()}
            <div className="row">
              <div className=" col-md-8 p-4 pt-0 mt-3">
                <span className="card  mt-0 pt-0">
                  <div className="row row-cols-md-2   ">
                    <div>
                      <div className=" m-1">
                        <img
                          src="/images/port.jpg"
                          style={{ width: "10rem" }}
                          alt=""
                          srcset=""
                        />
                      </div>
                    </div>
                    <div className="d-flex justify-content-between">
                      <div className="d-flex col-11 my-3 my-sm-auto mx-sm-4 bg-white p-2 rounded justify-content-between">
                        <div className="fs-sm-5 text-capitalize">
                          <b>
                            {" "}
                            <BsPeople className="h3 mx-sm-3 mx-1 text-primary" />
                            Name
                          </b>
                        </div>
                        <div className="fs-sm-5 text-capitalize">
                          {list?.name}
                        </div>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between">
                      <div className="d-flex col-11 my-3 my-sm-auto mx-sm-4 bg-white p-2 rounded justify-content-between">
                        <div className="fs-sm-5 text-capitalize">
                          <b>
                            {" "}
                            <BsPeople className="h3 mx-sm-3 mx-1 text-primary" />
                            Email I'd
                          </b>
                        </div>
                        <div className="fs-sm-5 text-capitalize">
                          {list?.studentemail}
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="d-flex my-3 mx-sm-4 bg-white p-2 rounded justify-content-between">
                        <div className="fs-sm-5 text-capitalize">
                          <b>
                            {" "}
                            <MdGrading className="h3 mx-sm-3 mx-1 text-primary" />
                            Roll Number
                          </b>
                        </div>
                        <div className="fs-sm-5 text-capitalize">
                          {list?.rollNumber}
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="d-flex my-3 mx-sm-4 bg-white p-2 rounded justify-content-between">
                        <div className="fs-sm-5 text-capitalize">
                          <b>
                            {" "}
                            <PiGraduationCapBold className="h3 mx-sm-3 mx-1 text-primary" />
                            Student Standard
                          </b>
                        </div>
                        <div className="fs-sm-5 text-capitalize">
                          {list?.standard}
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="d-flex my-3 mx-sm-4 bg-white p-2 rounded justify-content-between">
                        <div className="fs-sm-5 text-capitalize">
                          <b>
                            {" "}
                            <BsPeopleFill className="h3 mx-sm-3 mx-1 text-primary" />
                            Father's Name
                          </b>
                        </div>
                        <div className="fs-sm-5 text-capitalize">
                          {list?.fatherName}
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="d-flex my-3 mx-sm-4 bg-white p-2 rounded justify-content-between">
                        <div className="fs-sm-5 text-capitalize">
                          <b>
                            {" "}
                            <BsPeopleFill className="h3 mx-sm-3 mx-1 text-primary" />
                            Mother's Name
                          </b>
                        </div>
                        <div className="fs-sm-5 text-capitalize">
                          {list?.motherName}
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="d-flex my-3 mx-sm-4 bg-white p-2 rounded justify-content-between">
                        <div className="fs-sm-5 text-capitalize">
                          <b>
                            {" "}
                            <BiListCheck className="h3 mx-sm-3 mx-1 text-primary" />
                            Total Attandance Days
                          </b>
                        </div>
                        <div className="fs-sm-5 text-capitalize">
                          {list?.attendanceTotalDays}
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="d-flex my-3 mx-sm-4 bg-white p-2 rounded justify-content-between">
                        <div className="fs-sm-5 text-capitalize">
                          <b>
                            {" "}
                            <MdPresentToAll className="h3 mx-sm-3 mx-1 text-primary" />
                            Present Attandance
                          </b>
                        </div>
                        <div className="fs-sm-5 text-capitalize">
                          {list?.attendancePresent}
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="d-flex my-3 mx-sm-4 bg-white p-2 rounded justify-content-between">
                        <div className="fs-sm-5 text-capitalize">
                          <b>
                            {" "}
                            <FaRupeeSign className="h3 mx-sm-3 mx-1 text-primary" />
                            Total Fees
                          </b>
                        </div>
                        <div className="fs-sm-5 text-capitalize">
                          {list?.totalFees}
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="d-flex my-3 mx-sm-4 bg-white p-2 rounded justify-content-between">
                        <div className="fs-sm-5 text-capitalize">
                          <b>
                            {" "}
                            <MdPaid className="h3 mx-sm-3 mx-1 text-primary" />
                            Paid Fees
                          </b>
                        </div>
                        <div className="fs-sm-5 text-capitalize">
                          {list?.feesPaid}
                        </div>
                      </div>
                    </div>
                  </div>
                </span>
              </div>
              <div className="col-md-4 p-4 p-md-0 pt-0 ">
                <div>
                  <div className="d-flex my-3 mx-sm-4 bg-white p-2 rounded justify-content-between">
                    <div className="fs-sm-5 text-capitalize">
                      <b>
                        {" "}
                        <PiCertificateBold className="h3 mx-sm-3 mx-1 text-primary" />
                        Unit 1 marks
                      </b>
                    </div>
                    <div className="fs-sm-5 text-capitalize">
                      <button className="btn btn-primary">Download</button>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="d-flex my-4 mx-sm-4 bg-white p-2 rounded justify-content-between">
                    <div className="fs-sm-5 text-capitalize">
                      <b>
                        {" "}
                        <PiCertificateBold className="h3 mx-sm-3 mx-1 text-primary" />
                        Unit 2 Mark Sheet
                      </b>
                    </div>
                    <div className="fs-sm-5 text-capitalize">
                      <button className="btn btn-primary">Download</button>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="d-flex my-4 mx-sm-4 bg-white p-2 rounded justify-content-between">
                    <div className="fs-sm-5 text-capitalize">
                      <b>
                        {" "}
                        <PiCertificateBold className="h3 mx-sm-3 text-primary" />
                        Half Yearly Mark Sheet
                      </b>
                    </div>
                    <div className="fs-sm-5 text-capitalize">
                      <button className="btn btn-primary">Download</button>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="d-flex my-4 mx-sm-4 bg-white p-2 rounded justify-content-between">
                    <div className="fs-sm-5 text-capitalize">
                      <b>
                        {" "}
                        <PiCertificateBold className="h3 mx-sm-3 text-primary" />
                        Yearly Mark Sheet
                      </b>
                    </div>
                    <div className="fs-sm-5 text-capitalize">
                      <button className="btn btn-primary">Download</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </Layout>
  );
};

export default StudentView;
