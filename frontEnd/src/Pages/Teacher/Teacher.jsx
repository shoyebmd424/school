import React, { useEffect, useRef, useState } from "react";
import Layout from "../../conponents/Layout";
import AddStudent from "./AddStudent";
import useFetch from "../../conponents/Hooks/useFetch";
import Axios from "../../conponents/Axios";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import EditStudent from "./EditStudent";

const Teacher = () => {
  const { data, loading } = useFetch("/student");
  const [isAdd, setIsAdd] = useState(false);
  const [IsEdit, setIsEdit] = useState(false);
  const [editLoading, seteditLoading] = useState(false);
  const [alldata, setAlldata] = useState([]);
  const [student, setStudent] = useState({});
  const addRef = useRef();
  const CustomId = "toastId";

  //edit
  const HandleEdit = async (id) => {
    try {
      seteditLoading(true);
      const res = await Axios.get(`/student/${id}`);
      if (res.data && res.data.success) {
        setStudent(res.data.message);
        setIsEdit(!IsEdit);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
    }
    seteditLoading(false);
  };
  // delete
  const handleDelete = async (id) => {
    const ans = window.confirm("Are you sure this item delete");
    if (!ans) {
      return;
    }
    try {
      const res = await Axios.delete(`/student/${id}`);
      console.log(res);
      if (res && res.data.success) {
        setAlldata(alldata?.filter((item) => item.id !== id));
        toast.success(res.data.message);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      toast.error("something went wrong");
    }
  };
  useEffect(() => {
    const handle = (e) => {
      if (addRef.current && !addRef.current.contains(e.target)) {
        setIsAdd(false);
      }
    };
    document.addEventListener("mousedown", handle);
  });

  useEffect(() => {
    setAlldata(data);
  }, [data]);
  return (
    <Layout>
      {/* <h1>Teacher Dashboard</h1> */}
      <button onClick={() => setIsAdd(!isAdd)} className="btn btn-primary m-3">
        <b>Add Student</b>{" "}
      </button>
      <div ref={addRef} className={isAdd ? "" : "d-none"}>
        <AddStudent update={isAdd} setupdate={(e) => setIsAdd(e)} />
      </div>
      <div className={IsEdit ? "" : "d-none"}>
        <EditStudent
          loading={editLoading}
          student={student[0]}
          IsEdit={IsEdit}
          setIsEdit={(e) => setIsEdit(e)}
        />
      </div>
      {!alldata ? (
        <h1>There is No Data till now</h1>
      ) : (
        <div className="" style={{ overflow: "hidden" }}>
          <div className="row" style={{ width: "100vw", overflowX: "scroll" }}>
            {loading ? (
              loading & toast.loading("Lodaing", { toastId: CustomId })
            ) : (
              <div className="col-md-10 mx-auto bg-white rounded">
                {toast.dismiss()}
                <table className="table text-start">
                  <thead>
                    <tr>
                      <th scope="col">Serial Number</th>
                      <th scope="col">Name</th>
                      <th scope="col">Roll Number</th>
                      <th scope="col">Student Standard</th>
                      <th scope="col">Father's Name</th>
                      <th scope="col">Mother's Name</th>
                      <th scope="col">Total Days</th>
                      <th scope="col">Present Attedance</th>
                      <th scope="col">Total Fees</th>
                      <th scope="col">Paid</th>
                      <th scope="col">Edit</th>
                      <th scope="col">Delete</th>
                      <th scope="col">View</th>
                    </tr>
                  </thead>
                  <tbody>
                    {alldata?.map((item, key) => (
                      <tr key={key}>
                        <th scope="row">{key + 1}</th>
                        <td className="text-uppercase">{item?.name}</td>
                        <td className="text-capitalize">{item?.rollNumber}</td>
                        <td className="text-capitalize">{item?.standard}</td>
                        <td className="text-capitalize">{item?.fatherName}</td>
                        <td className="text-capitalize">{item?.motherName}</td>
                        <td className="text-capitalize">
                          {item?.attendanceTotalDays}
                        </td>
                        <td className="text-capitalize">
                          {item?.attendancePresent}
                        </td>
                        <td className="text-capitalize">{item?.totalFees}</td>
                        <td className="text-capitalize">{item?.feesPaid}</td>
                        {/* <td>{item.description}</td> */}
                        <td>
                          <button
                            onClick={() => HandleEdit(item?.id)}
                            className="btn btn-primary"
                          >
                            Edit
                          </button>
                        </td>
                        <td>
                          <button
                            onClick={() => handleDelete(item?.id)}
                            className="btn btn-danger"
                          >
                            Delete
                          </button>
                        </td>
                        <td>
                          <Link
                            to={`/teacher/${item.id}`}
                            className="btn btn-success"
                          >
                            View
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Teacher;
