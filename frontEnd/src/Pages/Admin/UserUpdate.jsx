import React, { useEffect, useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { toast } from "react-toastify";
import Axios from "../../conponents/Axios";

const EditUser = ({ user, loading, IsEdit, setIsEdit, id }) => {
  // const [editstudent, setStudent] = useState(undefined);
  const [data, setdata] = useState(user);
  useEffect(() => {
    setdata(user);
    setNeme(user?.name);
    setEmail(user?.email);
    setphone(user?.mobile);
    setTeacher(user?.isTeacher);
    setadmin(user?.isAdmin);
  }, [user]);
  // name, rollNumber, standard, fatherName, motherName, attendanceTotalDays, attendancePresent, totalFees, feesPaid, unit1marks, unit2marks, halfYearlymarks,yearlymarks,
  const [name, setNeme] = useState(data?.name);
  const [email, setEmail] = useState(data?.email);
  const [mobile, setphone] = useState(data?.mobile);
  const [isTeacher, setTeacher] = useState(data?.isTeacher);
  const [isAdmin, setadmin] = useState(data?.isAdmin);
  const CustomId = "toastId";
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await Axios.put(`/auth/${data.id}`, {
        name: name,
        email: email,
        mobile: mobile,
        isTeacher: isTeacher,
        isAdmin: isAdmin,
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
    <div className="container my-5  position-absolute col-md-8 addstudent">
      <div className="card bg-light shadow p-3">
        <div className="text-end" style={{ margin: "-0.5rem" }}>
          {" "}
          <RxCross1 onClick={() => setIsEdit(!IsEdit)} className="h3" />
        </div>
        {loading ? (
          loading & toast.loading("Lodaing", { toastId: CustomId })
        ) : (
          <>
            {toast.dismiss()}
            <h2 className="text-center my-3">
              <b>Update user</b>
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
                  <label htmlFor="">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    onChange={(e) => setEmail(e.target.value)}
                    name="email"
                    value={email}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="">Phone No.</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => setphone(e.target.value)}
                    name="mobile"
                    value={mobile}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="">Teacher </label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => setTeacher(e.target.value)}
                    name="isTeacher"
                    value={isTeacher}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="">Admin </label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => setadmin(e.target.value)}
                    name="isAdmin"
                    value={isAdmin}
                  />
                </div>
              </div>
              <div className="mb-3 text-center">
                <button className="btn btn-primary">
                  <b>Save User</b>
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default EditUser;
