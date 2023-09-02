import React, { useEffect, useState } from "react";
import useFetch from "../../conponents/Hooks/useFetch";
import { toast } from "react-toastify";
import Layout from "../../conponents/Layout";
import Path from "../../conponents/Path";
import { BsPeople, BsPeopleFill } from "react-icons/bs";
import { MdGrading, MdPaid, MdPresentToAll } from "react-icons/md";
import { PiCertificateBold, PiGraduationCapBold } from "react-icons/pi";
import { BiListCheck } from "react-icons/bi";
import { FaRupeeSign } from "react-icons/fa";
import { useAuth } from "../../context/AuthContext";

const StudenyDashBoard = () => {
  const [list, setlist] = useState(undefined);
  const CustomId = "toastId";
  const [auth] = useAuth();
  const { data, loading } = useFetch(
    `/student/get-by-email/${auth?.user?.email}`
  );
  console.log(auth?.user?.email);
  useEffect(() => {
    setlist(data[0]);
  }, [data]);
  return (
    <Layout>
      <Path path={[{ path: "/", name: "Home" }]} page="Student Details" />

      {!list ? (
        <h3 className="text-center">
          Your entery is not added on the school list please contact to teacher
        </h3>
      ) : (
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
                          <div className="fs-sm-5">
                            <b>
                              {" "}
                              <BsPeople className="h3 mx-sm-3 mx-1" />
                              Name
                            </b>
                          </div>
                          <div className="fs-sm-5">{list?.name}</div>
                        </div>
                      </div>
                      <div className="d-flex justify-content-between">
                        <div className="d-flex col-11 my-3 my-sm-auto mx-sm-4 bg-white p-2 rounded justify-content-between">
                          <div className="fs-sm-5">
                            <b>
                              {" "}
                              <BsPeople className="h3 mx-sm-3 mx-1" />
                              Email I'd
                            </b>
                          </div>
                          <div className="fs-sm-5">{list?.studentemail}</div>
                        </div>
                      </div>
                      <div>
                        <div className="d-flex my-3 mx-sm-4 bg-white p-2 rounded justify-content-between">
                          <div className="fs-sm-5">
                            <b>
                              {" "}
                              <MdGrading className="h3 mx-sm-3 mx-1" />
                              Roll Number
                            </b>
                          </div>
                          <div className="fs-sm-5">{list?.rollNumber}</div>
                        </div>
                      </div>
                      <div>
                        <div className="d-flex my-3 mx-sm-4 bg-white p-2 rounded justify-content-between">
                          <div className="fs-sm-5">
                            <b>
                              {" "}
                              <PiGraduationCapBold className="h3 mx-sm-3 mx-1" />
                              Student Standard
                            </b>
                          </div>
                          <div className="fs-sm-5">{list?.standard}</div>
                        </div>
                      </div>
                      <div>
                        <div className="d-flex my-3 mx-sm-4 bg-white p-2 rounded justify-content-between">
                          <div className="fs-sm-5">
                            <b>
                              {" "}
                              <BsPeopleFill className="h3 mx-sm-3 mx-1" />
                              Father's Name
                            </b>
                          </div>
                          <div className="fs-sm-5">{list?.fatherName}</div>
                        </div>
                      </div>
                      <div>
                        <div className="d-flex my-3 mx-sm-4 bg-white p-2 rounded justify-content-between">
                          <div className="fs-sm-5">
                            <b>
                              {" "}
                              <BsPeopleFill className="h3 mx-sm-3 mx-1" />
                              Mother's Name
                            </b>
                          </div>
                          <div className="fs-sm-5">{list?.motherName}</div>
                        </div>
                      </div>
                      <div>
                        <div className="d-flex my-3 mx-sm-4 bg-white p-2 rounded justify-content-between">
                          <div className="fs-sm-5">
                            <b>
                              {" "}
                              <BiListCheck className="h3 mx-sm-3 mx-1" />
                              Total Attandance Days
                            </b>
                          </div>
                          <div className="fs-sm-5">
                            {list?.attendanceTotalDays}
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="d-flex my-3 mx-sm-4 bg-white p-2 rounded justify-content-between">
                          <div className="fs-sm-5">
                            <b>
                              {" "}
                              <MdPresentToAll className="h3 mx-sm-3 mx-1" />
                              Present Attandance
                            </b>
                          </div>
                          <div className="fs-sm-5">
                            {list?.attendancePresent}
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="d-flex my-3 mx-sm-4 bg-white p-2 rounded justify-content-between">
                          <div className="fs-sm-5">
                            <b>
                              {" "}
                              <FaRupeeSign className="h3 mx-sm-3 mx-1" />
                              Total Fees
                            </b>
                          </div>
                          <div className="fs-sm-5">{list?.totalFees}</div>
                        </div>
                      </div>
                      <div>
                        <div className="d-flex my-3 mx-sm-4 bg-white p-2 rounded justify-content-between">
                          <div className="fs-sm-5">
                            <b>
                              {" "}
                              <MdPaid className="h3 mx-sm-3 mx-1" />
                              Paid Fees
                            </b>
                          </div>
                          <div className="fs-sm-5">{list?.feesPaid}</div>
                        </div>
                      </div>
                    </div>
                  </span>
                </div>
                <div className="col-md-4 p-4 p-md-0 pt-0 ">
                  <div>
                    <div className="d-flex my-3 mx-sm-4 bg-white p-2 rounded justify-content-between">
                      <div className="fs-sm-5">
                        <b>
                          {" "}
                          <PiCertificateBold className="h3 mx-sm-3 mx-1" />
                          Unit 1 marks
                        </b>
                      </div>
                      <div className="fs-sm-5">
                        <button className="btn btn-primary">Download</button>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="d-flex my-4 mx-sm-4 bg-white p-2 rounded justify-content-between">
                      <div className="fs-sm-5">
                        <b>
                          {" "}
                          <PiCertificateBold className="h3 mx-sm-3 mx-1" />
                          Unit 2 Mark Sheet
                        </b>
                      </div>
                      <div className="fs-sm-5">
                        <button className="btn btn-primary">Download</button>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="d-flex my-4 mx-sm-4 bg-white p-2 rounded justify-content-between">
                      <div className="fs-sm-5">
                        <b>
                          {" "}
                          <PiCertificateBold className="h3 mx-sm-3" />
                          Half Yearly Mark Sheet
                        </b>
                      </div>
                      <div className="fs-sm-5">
                        <button className="btn btn-primary">Download</button>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="d-flex my-4 mx-sm-4 bg-white p-2 rounded justify-content-between">
                      <div className="fs-sm-5">
                        <b>
                          {" "}
                          <PiCertificateBold className="h3 mx-sm-3" />
                          Yearly Mark Sheet
                        </b>
                      </div>
                      <div className="fs-sm-5">
                        <button className="btn btn-primary">Download</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </Layout>
  );
};

export default StudenyDashBoard;
