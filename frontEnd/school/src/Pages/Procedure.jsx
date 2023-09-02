import React from "react";
import Layout from "../conponents/Layout";
import Path from "../conponents/Path";

const Procedure = () => {
  const pageStyles = {
    backgroundColor: "#f4f4f4",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  };

  return (
    <Layout>
      <Path
        path={[
          { path: "/", name: "Home" },
          { path: "/", name: "Addmission" },
        ]}
        page="Procedure"
      />
      <div style={pageStyles}>
        <header>
          <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
            Admission Procedure
          </h1>
        </header>
        <main className="container">
          <div className="row">
            <div className="col-md-7">
              <div>
                <h3 className="text-primary">
                  <b>Procedure</b>
                </h3>
                <div>
                  <ol style={{ listStyleType: "decimal" }}>
                    {proData.map((data) => (
                      <li>{data.li}</li>
                    ))}
                  </ol>
                </div>
              </div>
              <div>
                <h3 className="text-primary">
                  {" "}
                  <b>School Transport</b>
                </h3>
                <div>
                  <ol style={{ listStyleType: "decimal" }}>
                    {tranposrt.map((data) => (
                      <li>{data.li}</li>
                    ))}
                  </ol>
                </div>
              </div>

              <div>
                <h3 className="text-primary">
                  <b>Payment of Fee</b>
                </h3>
                <div>
                  <ol style={{ listStyleType: "decimal" }}>
                    {pay.map((data) => (
                      <li>{data.li}</li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <img className="col-12" src="\images\facility\music.jpg" alt="" />
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
};

export default Procedure;

export const proData = [
  {
    li: " The Registration Form should be filled and submitted to the School Office before the end of the Registration period.",
  },
  {
    li: "An Incomplete or illegible Registration Form, without a photograph and other documents will not be accepted.",
  },
  {
    li: " The acknowledgement slip will be issued to the parents only after the form is duly filled and submitted.",
  },

  {
    li: (
      <>
        a) Photocopy of Birth Certificate issued by Municipal Corporation or
        concerned civic authority must accompany the Registration Form for
        Classes Nursery & K.G.
        <br />
        b) Photocopy of report card of the last exam passed must be attached
        with the Registration Form for Classes - I & above.
        <br />
        c) Original Transfer Certificate shall be required at the time of
        admission for Classes I & above.
        <br />
        d) Photocopy of Aadhar Card.
        <br />
        e) Photo ID proof of the parents.
      </>
    ),
  },

  {
    li: " Mere registration does not imply admission, which is subject to Interaction / Entrance Test and also to the availability of seats.",
  },

  {
    li: " Dates for Interaction / entrance test will be given at the time of registration. The school authorities reserve the right to change the date and time of the Interaction / Entrance Test.",
  },
  {
    li: "Age of admission to class Nursery is 3 yrs. in the academic session in which admission is being sought. Age should be properly specified on the form. Request for relaxation of age criterion will not be entertained.",
  },

  { li: "Date of Birth once recorded will not be changed later." },

  {
    li: "In all matters related to admission, the management's decision is final.",
  },
];
export const tranposrt = [
  {
    li: " Safe and secure transport is available for all the adjoining areas.",
  },

  {
    li: "Students can avail school transport subject to the availability of seats in respective route.",
  },
];
export const pay = [
  {
    li: '  Payment are to be made by e-Banking through NEFT / Cheque / D.D. in favour of "ORIENTAL PUBLIC SCHOOL".',
  },

  {
    li: "Payment once deposited shall not be refunded under any circumstances.",
  },
];
