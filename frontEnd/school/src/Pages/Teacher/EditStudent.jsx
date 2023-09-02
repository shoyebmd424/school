import React, { useEffect, useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { toast } from "react-toastify";
import Axios from "../../conponents/Axios";

const EditStudent = ({ student, loading, IsEdit, setIsEdit, id }) => {
  // const [editstudent, setStudent] = useState(undefined);
  const [data, setdata] = useState(student);
  useEffect(() => {
    setdata(student);
    setNeme(student?.name);
    setRoll(student?.rollNumber);
    setStandard(student?.standard);
    setfatherName(student?.fatherName);
    setmotherName(student?.motherName);
    setTotalAttendabce(student?.attendanceTotalDays);
    setpresent(student?.attendancePresent);
    settotalfees(student?.totalFees);
    setpaid(student?.feesPaid);
    setunit1(student?.unit1marks);
    setunit2(student?.unit2marks);
    sethalf(student?.halfYearlymarks);
    setyearly(student?.yearlymarks);
  }, [student]);
  // name, rollNumber, standard, fatherName, motherName, attendanceTotalDays, attendancePresent, totalFees, feesPaid, unit1marks, unit2marks, halfYearlymarks,yearlymarks,
  const [name, setNeme] = useState(data?.name);
  const [rollNumber, setRoll] = useState(data?.rollNumber);
  const [standard, setStandard] = useState(data?.standard);
  const [fatherName, setfatherName] = useState(data?.fatherName);
  const [motherName, setmotherName] = useState(data?.motherName);
  const [attendanceTotalDays, setTotalAttendabce] = useState(
    data?.attendanceTotalDays
  );
  const [attendancePresent, setpresent] = useState(data?.attendancePresent);
  const [totalFees, settotalfees] = useState(data?.totalFees);
  const [feesPaid, setpaid] = useState(data?.feesPaid);
  const [unit1marks, setunit1] = useState(data?.unit1marks);
  const [unit2marks, setunit2] = useState(data?.unit2marks);
  const [halfYearlymarks, sethalf] = useState(data?.halfYearlymarks);
  const [yearlymarks, setyearly] = useState(data?.yearlymarks);
  const CustomId = "toastId";
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await Axios.put(`/student/${data.id}`, {
        name: name,
        rollNumber: rollNumber,
        standard: standard,
        fatherName: fatherName,
        motherName: motherName,
        attendanceTotalDays: attendanceTotalDays,
        attendancePresent: attendancePresent,
        totalFees: totalFees,
        feesPaid: feesPaid,
        unit1marks: unit1marks,
        unit2marks: unit2marks,
        halfYearlymarks: halfYearlymarks,
        yearlymarks: yearlymarks,
      });
      console.log(res);
      if (res.data && res.data.success) {
        toast.success(res.data.message);
        window.location.reload();
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      // console.log(error);
      toast.error(error);
    }
  };
  return (
    <div className="container my-5 position-absolute col-md-8 addstudent">
      <div className="card bg-light p-3">
        <div className="text-end" style={{ margin: "-0.5rem" }}>
          {" "}
          <RxCross1 onClick={() => setIsEdit(!IsEdit)} className="h3" />
        </div>
        {loading ? (
          loading & toast.loading("Lodaing", { toastId: CustomId })
        ) : (
          <>
            {toast.dismiss()}
            <h2 className="text-center my-5">
              <b>Edit Student</b>
            </h2>
            <form action="" onSubmit={handleSubmit}>
              <div className="row row-cols-md-2">
                <div className="mb-3">
                  <label htmlFor="">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    value={name}
                    name="name"
                    onChange={(e) => setNeme(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="">Roll Number</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => setRoll(e.target.value)}
                    name="rollNumber"
                    value={rollNumber}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="">Student Standard</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => setStandard(e.target.value)}
                    name="standard"
                    value={standard}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="">Father's Name </label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => setfatherName(e.target.value)}
                    name="fatherName"
                    value={fatherName}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="">Mother's Name </label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => setmotherName(e.target.value)}
                    name="motherName"
                    value={motherName}
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
                      onChange={(e) => setTotalAttendabce(e.target.value)}
                      value={attendanceTotalDays}
                    />
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Present"
                      name="attendancePresent"
                      onChange={(e) => setpresent(e.target.value)}
                      value={attendancePresent}
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
                      onChange={(e) => settotalfees(e.target.value)}
                      name="totalFees"
                      value={totalFees}
                    />
                    <input
                      type="text"
                      placeholder="Paid"
                      className="form-control"
                      onChange={(e) => setpaid(e.target.value)}
                      name="feesPaid"
                      value={feesPaid}
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
                      onChange={(e) => setunit1(e.target.value)}
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
                      onChange={(e) => setunit2(e.target.value)}
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
                      onChange={(e) => sethalf(e.target.value)}
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
                      onChange={(e) => setyearly(e.target.value)}
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
          </>
        )}
      </div>
    </div>
  );
};

export default EditStudent;
