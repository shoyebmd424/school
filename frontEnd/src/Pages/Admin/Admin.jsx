import React, { useEffect, useState } from "react";
import Layout from "../../conponents/Layout";
import Axios from "../../conponents/Axios";
import { toast } from "react-toastify";
import useFetch from "../../conponents/Hooks/useFetch";
import EditUser from "./UserUpdate";

const Admin = () => {
  const { data, loading } = useFetch("/auth");
  const [IsEdit, setIsEdit] = useState(false);
  const [editLoading, seteditLoading] = useState(false);
  const [alldata, setAlldata] = useState([]);
  const [user, setuser] = useState({});
  const CustomId = "toastId";

  //edit
  const HandleEdit = async (id) => {
    try {
      seteditLoading(true);
      const res = await Axios.get(`/auth/getoneUser/${id}`);
      if (res.data && res.data.success) {
        setuser(res.data.message);
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
      const res = await Axios.delete(`/auth/${id}`);
      console.log(res);
      if (res && res.data.success) {
        setAlldata(alldata?.filter((item) => item.id !== id));
        toast.success(res.data.message);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      toast.error("something went wrong.....!");
    }
  };
  useEffect(() => {
    setAlldata(data);
  }, [data]);

  return (
    <Layout>
      <h1 className="text-center mt-5 text-primary">
        <b>All Users</b>
      </h1>
      {/* <div ref={addRef} className={isAdd ? "" : "d-none"}>
        <AddStudent update={isAdd} setupdate={(e) => setIsAdd(e)} />
      </div> */}
      <div className={IsEdit ? "" : "d-none"}>
        <EditUser
          loading={editLoading}
          user={user[0]}
          IsEdit={IsEdit}
          setIsEdit={(e) => setIsEdit(e)}
        />
      </div>

      {!alldata ? (
        <h1>There is No Data till now</h1>
      ) : (
        <div className=" my-4" style={{ overflow: "hidden" }}>
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
                      <th scope="col">Email/Username</th>
                      <th scope="col">Teacher/Student</th>
                      <th scope="col">Admin</th>
                      <th scope="col">Edit</th>
                      <th scope="col">Delete</th>
                      {/* <th scope="col">View</th> */}
                    </tr>
                  </thead>
                  <tbody>
                    {alldata?.map((item, key) => (
                      <tr key={key}>
                        <th scope="row">{key + 1}</th>
                        <td className="text-uppercase">{item?.name}</td>
                        <td className="text-capitalize">{item?.email}</td>
                        <td className="text-capitalize">
                          {item?.isAdmin === 1
                            ? "Admin"
                            : item?.isTeacher === 1
                            ? "Teacher"
                            : "Student"}
                        </td>
                        <td className="text-capitalize">
                          {item?.isAdmin === 1 ? "Yes" : "No"}
                        </td>
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
                        {/* <td>
                          <Link
                            to={`/teacher/${item.id}`}
                            className="btn btn-success"
                          >
                            View
                          </Link>
                        </td> */}
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

export default Admin;
