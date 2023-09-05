import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import useFetch from "../../../conponents/Hooks/useFetch";
import Axios from "../../../conponents/Axios";
import Layout from "../../../conponents/Layout";
import Path from "../../../conponents/Path";

const Class8thRegistration = () => {
  const { data, loading } = useFetch("/class8th");
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
      {/* <h1>Class8thRegistration Dashboard</h1> */}
      <Path
        path={[
          { path: "/", name: "Home" },
          { path: "/teacher", name: "Teacher Dashboard" },
        ]}
        page="Regitration Details"
      />
      <h1 className="text-center text-primary my-3 text-capitalize">
        Nursery to 8th class registeration
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
                      <th scope="col">DOB</th>
                      <th scope="col">Father</th>
                      <th scope="col">Father's Phone No.</th>
                      <th scope="col">Mdeium</th>
                      <th scope="col">Fow Which Class</th>
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
                        <td className="text-capitalize">{item?.DOB}</td>
                        <td className="text-capitalize">{item?.father}</td>
                        <td className="text-capitalize">
                          {item?.fathersWhatsNo}
                        </td>
                        <td className="text-capitalize">{item?.medium}</td>
                        <td className="text-capitalize">
                          {item?.forAddmission}
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
                            to={`/teacher/class-8th/${item.id}`}
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

export default Class8thRegistration;
