import React, { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import useFetch from "../../../conponents/Hooks/useFetch";
import Layout from "../../../conponents/Layout";
import Axios from "../../../conponents/Axios";
import Path from "../../../conponents/Path";

const AllEnquery = () => {
  const { data, loading } = useFetch("/enquery");
  const [isText, setText] = useState(false);
  //   const [isAdd, setIsAdd] = useState(false);
  //   const [IsEdit, setIsEdit] = useState(false);
  //   const [editLoading, seteditLoading] = useState(false);
  const [alldata, setAlldata] = useState([]);
  //   const [student, setStudent] = useState({});
  const CustomId = "toastId";
  const messageRef = useRef();
  useEffect(() => {
    const handle = (e) => {
      if (messageRef.current && !messageRef.current.contains(e.target)) {
        setText(false);
      }
    };
    document.addEventListener("mousedown", handle);
  });
  console.log(isText);
  // delete
  const handleDelete = async (id) => {
    const ans = window.confirm("Are you sure this item delete");
    if (!ans) {
      return;
    }
    try {
      const res = await Axios.delete(`/enquery/${id}`);
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
                      <th scope="col">Phone Number</th>
                      <th scope="col">city</th>
                      <th scope="col">country</th>
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
                        <td className="text-capitalize">{item?.mobile}</td>
                        <td className="text-capitalize">{item?.city}</td>
                        <td className="text-capitalize">{item?.country}</td>
                        <td className="text-capitalize" ref={messageRef}>
                          <div
                            className={`position-${
                              isText
                                ? "absolute col-4  start-50 bg-white border-top border-3 p-3"
                                : ""
                            } `}
                            style={{ zIndex: 102, top: "3rem" }}
                          >
                            {isText
                              ? item?.message
                              : item?.message?.substring(0, 15) + "..."}
                          </div>
                          <a href="#." onClick={() => setText(!isText)}>
                            read more
                          </a>
                        </td>
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

export default AllEnquery;
