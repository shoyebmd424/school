import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import useFetch from "../../conponents/Hooks/useFetch";
import Axios from "../../conponents/Axios";
import Layout from "../../conponents/Layout";
import Path from "../../conponents/Path";
const AllContact = () => {
  const { data, loading } = useFetch("/contact");
  const [alldata, setAlldata] = useState([]);
  const CustomId = "toastId";
  // delete
  const handleDelete = async (id) => {
    const ans = window.confirm("Are you sure this item delete");
    if (!ans) {
      return;
    }
    try {
      const res = await Axios.delete(`/contact/${id}`);
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
      <Path
        path={[
          { path: "/teacher", name: "Dashboard" },
          // { path: "/addmission", name: "Addmission" },
        ]}
        page="Enquery"
      />
      {!alldata ? (
        <h1>There is No Data till now</h1>
      ) : (
        <div className="my-5 " style={{ overflow: "hidden" }}>
          <div className="row" style={{ width: "100vw", overflowX: "scroll" }}>
            {loading ? (
              loading & toast.loading("Lodaing", { toastId: CustomId })
            ) : (
              <div className="col-md-10 mx-auto bg-white rounded ">
                {toast.dismiss()}
                <table className="table text-start ">
                  <thead>
                    <tr>
                      <th scope="col">Serial Number</th>
                      <th scope="col">Name</th>
                      <th scope="col">Email</th>
                      <th scope="col">Message</th>
                      <th scope="col">Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {alldata?.map((item, key) => (
                      <tr key={key} className="position-relative">
                        <th scope="row">{key + 1}</th>
                        <td className="text-uppercase">{item?.name}</td>
                        <td className="text-capitalize">{item?.email}</td>
                        <td className="text-capitalize">{item?.message}</td>
                        <td>
                          <button
                            onClick={() => handleDelete(item?.id)}
                            className="btn btn-danger"
                          >
                            Delete
                          </button>
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

export default AllContact;
