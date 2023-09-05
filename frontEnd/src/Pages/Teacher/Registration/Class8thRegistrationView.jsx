import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import {
  BsFillCalendarDateFill,
  BsFillPersonFill,
  BsFillPersonVcardFill,
  BsLifePreserver,
  BsPeople,
  BsPeopleFill,
  BsWhatsapp,
} from "react-icons/bs";
import {
  MdClass,
  MdLeaderboard,
  MdSubject,
} from "react-icons/md";
import {
  PiApertureLight,
  PiGraduationCapBold,
} from "react-icons/pi";
import {
  BiNetworkChart,
  BiSolidBus,
  BiSolidInstitution,
} from "react-icons/bi";
import useFetch from "../../../conponents/Hooks/useFetch";
import Layout from "../../../conponents/Layout";
import Path from "../../../conponents/Path";
import { FaLocationDot, FaSheetPlastic } from "react-icons/fa6";

const Class8thRegistrationView = () => {
  const [list, setlist] = useState(undefined);
  const location = useLocation();
  const path = location.pathname.split("/");
  const CustomId = "toastId";
  const id = path[path.length - 1];
  const { data, loading } = useFetch(`/class8th/${id}`);
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
        page="Regitration Details"
      />
      <div style={{ overflow: "hidden" }}>
        <h1 className=" text-center my-3">
          <b> Regitration Details</b>
        </h1>
        {loading ? (
          loading & toast.loading("Lodaing", { toastId: CustomId })
        ) : (
          <>
            {toast.dismiss()}
            <div className="row">
              <div className=" col-mx-10 mx-auto p-4 pt-0 mt-3">
                <span className="card  mt-0 pt-0">
                  <div className="row row-cols-md-3 row-cols-sm-2   ">
                    <div className="d-flex justify-content-between">
                      <div className="d-flex col-11 my-3 my-sm-auto mx-sm-4 bg-white p-2 rounded justify-content-between">
                        <div className="fs-sm-5 text-capitalize">
                          <b>
                            {" "}
                            <BsFillPersonFill className="h3 mx-sm-3 mx-1 text-primary" />
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
                            <BsFillPersonVcardFill className="h3 mx-sm-3 mx-1 text-primary" />
                            Aadhaar Number
                          </b>
                        </div>
                        <div className="fs-sm-5 text-capitalize">
                          {list?.aadhaar}
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="d-flex my-3 mx-sm-4 bg-white p-2 rounded justify-content-between">
                        <div className="fs-sm-5 text-capitalize">
                          <b>
                            {" "}
                            <BsPeople className="h3 mx-sm-3 mx-1 text-primary" />
                            Gender
                          </b>
                        </div>
                        <div className="fs-sm-5 text-capitalize">
                          {list?.gender}
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="d-flex my-3 mx-sm-4 bg-white p-2 rounded justify-content-between">
                        <div className="fs-sm-5 text-capitalize">
                          <b>
                            <BsPeopleFill className="h3 mx-sm-3 mx-1 text-primary" />
                            Father's Name
                          </b>
                        </div>
                        <div className="fs-sm-5 text-capitalize">
                          {list?.father}
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="d-flex my-3 mx-sm-4 bg-white p-2 rounded justify-content-between">
                        <div className="fs-sm-5 text-capitalize">
                          <b>
                            {" "}
                            <BiNetworkChart className="h3 mx-sm-3 mx-1 text-primary" />
                            Father's Occupation
                          </b>
                        </div>
                        <div className="fs-sm-5 text-capitalize">
                          {list?.fathersOccupation}
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="d-flex my-3 mx-sm-4 bg-white p-2 rounded justify-content-between">
                        <div className="fs-sm-5 text-capitalize">
                          <b>
                            {" "}
                            <PiGraduationCapBold className="h3 mx-sm-3 mx-1 text-primary" />
                            Father's Qualification
                          </b>
                        </div>
                        <div className="fs-sm-5 text-capitalize">
                          {list?.fathersQualification}
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
                          {list?.mother}
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="d-flex my-3 mx-sm-4 bg-white p-2 rounded justify-content-between">
                        <div className="fs-sm-5 text-capitalize">
                          <b>
                            {" "}
                            <BiNetworkChart className="h3 mx-sm-3 mx-1 text-primary" />
                            Mother's Occupation
                          </b>
                        </div>
                        <div className="fs-sm-5 text-capitalize">
                          {list?.mothersOccupation}
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="d-flex my-3 mx-sm-4 bg-white p-2 rounded justify-content-between">
                        <div className="fs-sm-5 text-capitalize">
                          <b>
                            {" "}
                            <PiGraduationCapBold className="h3 mx-sm-3 mx-1 text-primary" />
                            Mother's Qualification
                          </b>
                        </div>
                        <div className="fs-sm-5 text-capitalize">
                          {list?.mothersQualification}
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="d-flex my-3 mx-sm-4 bg-white p-2 rounded justify-content-between">
                        <div className="fs-sm-5 text-capitalize">
                          <b>
                            {" "}
                            <MdLeaderboard className="h3 mx-sm-3 mx-1 text-primary" />
                            Quardian's Name
                          </b>
                        </div>
                        <div className="fs-sm-5 text-capitalize">
                          {list?.guadian}
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="d-flex my-3 mx-sm-4 bg-white p-2 rounded justify-content-between">
                        <div className="fs-sm-5 text-capitalize">
                          <b>
                            {" "}
                            <FaLocationDot className="h3 mx-sm-3 mx-1 text-primary" />
                            Permanent Address
                          </b>
                        </div>
                        <div className="fs-sm-5 text-capitalize">
                          {list?.permanentAddress}
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="d-flex my-3 mx-sm-4 bg-white p-2 rounded justify-content-between">
                        <div className="fs-sm-5 text-capitalize">
                          <b>
                            {" "}
                            <FaLocationDot className="h3 mx-sm-3 mx-1 text-primary" />
                            Present Address
                          </b>
                        </div>
                        <div className="fs-sm-5 text-capitalize">
                          {list?.presentAddress}
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="d-flex my-3 mx-sm-4 bg-white p-2 rounded justify-content-between">
                        <div className="fs-sm-5 text-capitalize">
                          <b>
                            {" "}
                            <BsWhatsapp className="h3 mx-sm-3 mx-1 text-primary" />
                            Father's WhatsApp No.
                          </b>
                        </div>
                        <div className="fs-sm-5 text-capitalize">
                          {list?.fathersWhatsNo}
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="d-flex my-3 mx-sm-4 bg-white p-2 rounded justify-content-between">
                        <div className="fs-sm-5 text-capitalize">
                          <b>
                            {" "}
                            <BsWhatsapp className="h3 mx-sm-3 mx-1 text-primary" />
                            Mother's WhatsApp No.
                          </b>
                        </div>
                        <div className="fs-sm-5 text-capitalize">
                          {list?.mothersWhatsAppNo}
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="d-flex my-3 mx-sm-4 bg-white p-2 rounded justify-content-between">
                        <div className="fs-sm-5 text-capitalize">
                          <b>
                            {" "}
                            <PiApertureLight className="h3 mx-sm-3 mx-1 text-primary" />
                            Religion & Caste
                          </b>
                        </div>
                        <div className="fs-sm-5 text-capitalize">
                          {list?.caste}
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="d-flex my-3 mx-sm-4 bg-white p-2 rounded justify-content-between">
                        <div className="fs-sm-5 text-capitalize">
                          <b>
                            {" "}
                            <BsFillCalendarDateFill className="h3 mx-sm-3 mx-1 text-primary" />
                            Date Of Birth
                          </b>
                        </div>
                        <div className="fs-sm-5 text-capitalize">
                          {list?.DOB}
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="d-flex my-3 mx-sm-4 bg-white p-2 rounded justify-content-between">
                        <div className="fs-sm-5 text-capitalize">
                          <b>
                            {" "}
                            <BsLifePreserver className="h3 mx-sm-3 mx-1 text-primary" />
                            Age
                          </b>
                        </div>
                        <div className="fs-sm-5 text-capitalize">
                          {list?.age}
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="d-flex my-3 mx-sm-4 bg-white p-2 rounded justify-content-between">
                        <div className="fs-sm-5 text-capitalize">
                          <b>
                            {" "}
                            <PiGraduationCapBold className="h3 mx-sm-3 mx-1 text-primary" />
                            Last Qualification
                          </b>
                        </div>
                        <div className="fs-sm-5 text-capitalize">
                          {list?.lastQualification}
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="d-flex my-3 mx-sm-4 bg-white p-2 rounded justify-content-between">
                        <div className="fs-sm-5 text-capitalize">
                          <b>
                            {" "}
                            <BiSolidInstitution className="h3 mx-sm-3 mx-1 text-primary" />
                            Last Intitute
                          </b>
                        </div>
                        <div className="fs-sm-5 text-capitalize">
                          {list?.lastIntitution}
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="d-flex my-3 mx-sm-4 bg-white p-2 rounded justify-content-between">
                        <div className="fs-sm-5 text-capitalize">
                          <b>
                            <MdClass className="h3 mx-sm-3 mx-1 text-primary" />
                            Class In Which Seeking Admission
                          </b>
                        </div>
                        <div className="fs-sm-5 text-capitalize">
                          {list?.forAddmission}
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="d-flex my-3 mx-sm-4 bg-white p-2 rounded justify-content-between">
                        <div className="fs-sm-5 text-capitalize">
                          <b>
                            <MdSubject className="h3 mx-sm-3 mx-1 text-primary" />
                            Additional Subject
                          </b>
                        </div>
                        <div className="fs-sm-5 text-capitalize">
                          {list?.additionalSubject}
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="d-flex my-3 mx-sm-4 bg-white p-2 rounded justify-content-between">
                        <div className="fs-sm-5 text-capitalize">
                          <b>
                            <BiSolidBus className="h3 mx-sm-3 mx-1 text-primary" />
                            Bus Stop Address
                          </b>
                        </div>
                        <div className="fs-sm-5 text-capitalize">
                          {list?.busAddress}
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="d-flex my-3 mx-sm-4 bg-white p-2 rounded justify-content-between">
                        <div className="fs-sm-5 text-capitalize">
                          <b>
                            <FaSheetPlastic className="h3 mx-sm-3 mx-1 text-primary" />
                            Last Mark Sheet
                          </b>
                        </div>
                        <div className="fs-sm-5 text-capitalize">
                          <a
                            href={list?.lastMarkSheet}
                            download="marksheet.pdf"
                            className="btn btn-primary"
                          >
                            download
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </span>
              </div>
            </div>
          </>
        )}
      </div>
    </Layout>
  );
};

export default Class8thRegistrationView;
// name, permanentAddress, presentAddress, mothersWhatsAppNo, aadhaar, father, gender, fathersOccupation, fathersQualification, mothersOccupation, mother, mothersQualification, guadian, fathersWhatsNo, caste, DOB, age, lastQualification, lastIntitution, forAddmission, medium, lastMarkSheet, additionalSubject, busAddress
