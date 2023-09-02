import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { BsChevronDown, BsChevronRight, BsGrid3X3Gap } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
const Navbar = () => {
  const [isMenu, setIsMenu] = useState(false);
  const [auth] = useAuth();
  const LoginOutput = () => {
    if (auth?.user?.isAdmin === 1) {
      return (
        <>
          {" "}
          <NavLink className="text-decoration-none" to="/admin">
            {" "}
            <b> Admin</b>
          </NavLink>
          <NavLink className="text-decoration-none" to="/teacher">
            {" "}
            <b>Teacher</b>
          </NavLink>
          <NavLink className="text-decoration-none" to="/student">
            {" "}
            <b> Student</b>
          </NavLink>
        </>
      );
    } else if (auth?.user?.isTeacher === 1) {
      return (
        <>
          <NavLink className="text-decoration-none" to="/teacher">
            {" "}
            Teacher
          </NavLink>
          <NavLink className="text-decoration-none" to="/student">
            {" "}
            Student
          </NavLink>
        </>
      );
    } else if (auth?.user) {
      return (
        <NavLink className="text-decoration-none" to="/student">
          {" "}
          Student
        </NavLink>
      );
    } else {
      return "";
    }
  };
  return (
    <>
      <nav className="cNavbar position-relative bg-dark my-0 py-3">
        <ul className="px-0  my-0">
          <li
            className="text-start h4 px-2 text-white shadow open-icons"
            onClick={() => setIsMenu(!isMenu)}
          >
            <BsGrid3X3Gap className="h1" />
            <span className="ms-2">MENU</span>
          </li>
          <ul
            className={` nav-list text-start my-0 d-${
              isMenu ? "block" : "none"
            }  d-lg-flex justify-content-center text-capitalize me-4`}
          >
            <p
              className={`h1 text-end d-${isMenu ? "" : "none"} close-icons`}
              onClick={() => setIsMenu(!isMenu)}
            >
              <RxCross1 />
            </p>
            {NavbarData.map((item, ikey) =>
              item?.children ? (
                <>
                  <li className="text-white">
                    {item?.li}{" "}
                    {item?.children ? (
                      <BsChevronDown className="text-priamry" />
                    ) : (
                      ""
                    )}
                    <ul className=" text-white p-0">
                      {item?.children?.map((subitem, sbkey) => (
                        <>
                          {subitem?.children ? (
                            <li className="subnav border-0 border-bottom">
                              {subitem?.li}
                              <BsChevronRight className="text-end"></BsChevronRight>
                              <ul className="p-0">
                                {subitem?.children?.map((i, ik) => (
                                  <li className="border-0 border-bottom">
                                    {i.li}
                                  </li>
                                ))}
                              </ul>
                            </li>
                          ) : (
                            <li className="border-0 border-bottom">
                              {subitem?.li}
                            </li>
                          )}
                        </>
                      ))}
                    </ul>
                  </li>
                </>
              ) : (
                <>
                  <li>{item.li}</li>
                </>
              )
            )}
            <LoginOutput />
          </ul>
        </ul>
      </nav>
    </>
  );
};
export default Navbar;
export const NavbarData = [
  { li: <NavLink to="/"> Home</NavLink> },
  {
    li: <NavLink>Addmission</NavLink>,
    children: [
      // { li: <NavLink to="/about"> About OPS</NavLink> },
      {
        li: (
          <NavLink
            to="/addmission-enquery"
            className="text-decoration-none text-white"
          >
            Addmission Enquery{" "}
          </NavLink>
        ),
      },
      {
        li: (
          <NavLink
            to="/nursery-8thclass"
            className="text-decarion-none text-white"
          >
            Registration for upto 8th
          </NavLink>
        ),
      },
      {
        li: (
          <NavLink to="/class-9th" className="text-decarion-none text-white">
            Registration for Class 9th
          </NavLink>
        ),
      },
      {
        li: (
          <NavLink to="/document" className="text-decarion-none text-white">
            Important Documents
          </NavLink>
        ),
      },
      {
        li: (
          <NavLink
            to="/fee-structure"
            className="text-decoration-none text-white"
          >
            Fees Structure 2023-24
          </NavLink>
        ),
      },
      {
        li: (
          <NavLink className="text-white" to="/procedure">
            {" "}
            Procedure
          </NavLink>
        ),
      },
      {
        li: (
          <NavLink className="text-white" to="/eligibilty">
            {" "}
            Eligibility criteria
          </NavLink>
        ),
      },
      {
        li: (
          <a className="text-white" href="/images/facility.jpg" download>
            {" "}
            Dowload Addmission form
          </a>
        ),
      },
      {
        li: (
          <a className="text-white" href="/images/ban3.jpg" download>
            Download Fee Structure
          </a>
        ),
      },
      {
        li: (
          <NavLink className="text-white" to="/transport">
            {" "}
            School Transport
          </NavLink>
        ),
      },
    ],
  },

  {
    li: <NavLink>Achievement</NavLink>,
    children: [
      {
        li: (
          <NavLink className="text-white" to="/achive-teacher">
            Teachers
          </NavLink>
        ),
      },
      {
        li: (
          <NavLink className="text-white" to="/achive-student">
            {" "}
            Student{" "}
          </NavLink>
        ),
      },
      {
        li: (
          <NavLink className="text-white" to="/achieve-school">
            School
          </NavLink>
        ),
      },
    ],
  },
  {
    li: <NavLink>Facilities</NavLink>,
    children: [
      {
        li: (
          <NavLink className="text-white" to="/class">
            {" "}
            Class
          </NavLink>
        ),
      },
      // {
      //   li: (
      //     <NavLink className="text-white" to="/ground">
      //       Ground
      //     </NavLink>
      //   ),
      // },
      {
        li: (
          <NavLink className="text-white" to="/lab">
            lab
          </NavLink>
        ),
      },
      {
        li: (
          <NavLink className="text-white" to="/smart-class">
            smart class
          </NavLink>
        ),
      },
    ],
  },
  {
    li: <NavLink to="/media">In Media</NavLink>,
    children: [
      {
        li: (
          <NavLink className="text-white" to="/event">
            All School event
          </NavLink>
        ),
      },
      {
        li: (
          <NavLink className="text-white" to="/tour">
            Tour of Our School
          </NavLink>
        ),
      },
    ],
  },
  {
    li: <NavLink to="">About Us</NavLink>,
    children: [
      {
        li: (
          <NavLink className="text-white" to="/school">
            School profile
          </NavLink>
        ),
        // children: [{ li: "class 20" }, { li: "teachers 25" }],
      },
      {
        li: (
          <NavLink className="text-white" to="/mission-vision">
            Mission/vision
          </NavLink>
        ),
      },
      {
        li: (
          <NavLink className="text-white" to="/chairman">
            chairmain message
          </NavLink>
        ),
      },
      {
        li: (
          <NavLink className="text-white" to="/principle">
            principle message
          </NavLink>
        ),
      },
    ],
  },
  // {
  //   li: <NavLink> information Corner</NavLink>,
  //   children: [
  //     {
  //       li: <NavLink className="text-dark" to="/information">fees structure</NavLink>,
  //       children: [
  //         { li: "2022-2023" },
  //         { li: "2021-2022" },
  //         { li: "2020-2021" },
  //         { li: "2019-2020" },
  //         { li: "2018-2019" },
  //         { li: "2017-2018" },
  //         { li: "2016-2017" },
  //         { li: "2015-2016" },
  //       ],
  //     },
  //     { li: "CCA schedule" },
  //     { li: "examination", children: [{ li: "schedule" }, { li: "Rules" }] },
  //     { li: "school timing" },
  //     { li: "list of holiday" },
  //     { li: "PTM schedule" },
  //     { li: "guidline for parent" },
  //     { li: "bus route (senior)" },
  //     { li: "bus route (junior)" },
  //     { li: "rules & regulation" },
  //     { li: "alumni registration form" },
  //     { li: "list of book" },
  //   ],
  // },
  {
    li: <NavLink to=""> Infrastructure</NavLink>,
    children: [
      {
        li: (
          <NavLink className="text-white" to="/class-room">
            {" "}
            class room
          </NavLink>
        ),
      },
      {
        li: (
          <NavLink className="text-white" to="/sport">
            {" "}
            sport
          </NavLink>
        ),
      },
      {
        li: (
          <NavLink className="text-white" to="/library">
            {" "}
            Library & resources
          </NavLink>
        ),
      },
    ],
  },
];
