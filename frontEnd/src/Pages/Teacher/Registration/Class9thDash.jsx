import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import useFetch from "../../../conponents/Hooks/useFetch";
import Axios from "../../../conponents/Axios";
import Layout from "../../../conponents/Layout";
import Path from "../../../conponents/Path";

const Class9thRegistration = () => {
  const { data, loading } = useFetch("/class9th");
  const [alldata, setAlldata] = useState([]);
  const CustomId = "toastId";

  // delete
  const handleDelete = async (id) => {
    const ans = window.confirm("Are you sure this item delete");
    if (!ans) {
      return;
    }
    try {
      const res = await Axios.delete(`/class8th/${id}`);
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
    setAlldata(data);
  }, [data]);
  return (
    <Layout>
      {/* <h1>Class9thRegistration Dashboard</h1> */}
      <Path
        path={[
          { path: "/", name: "Home" },
          { path: "/teacher", name: "Teacher Dashboard" },
        ]}
        page="Regitration Details"
      />
      <h1 className="text-center text-primary my-3 text-capitalize">
        From 9th class registerations
      </h1>

      {!alldata ? (
        <h1>There is No Data till now</h1>
      ) : (
        <div className="mt-5" style={{ overflow: "hidden" }}>
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
                      <th scope="col">Gender</th>
                      <th scope="col">Aadhaar No.</th>
                      <th scope="col">Father's Name</th>
                      <th scope="col">Last Qualification</th>
                      <th scope="col">Phone</th>
                      <th scope="col">Current Address</th>
                      <th scope="col">Delete</th>
                      <th scope="col">View</th>
                    </tr>
                  </thead>
                  <tbody>
                    {alldata?.map((item, key) => (
                      <tr key={key}>
                        <th scope="row">{key + 1}</th>
                        <td className="text-uppercase">{item?.name}</td>
                        <td className="text-capitalize">{item?.gender}</td>
                        <td className="text-capitalize">{item?.aadhaar}</td>
                        <td className="text-capitalize">{item?.father}</td>
                        <td className="text-capitalize">
                          {item?.lastQualification}
                        </td>
                        <td className="text-capitalize">{item?.phone}</td>
                        <td className="text-capitalize">
                          {item?.presentAddress}
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
                            to={`/teacher/class-9th/${item.id}`}
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

export default Class9thRegistration;
