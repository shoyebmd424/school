import React from "react";
import "./fee.css";
import Layout from "../conponents/Layout";
import Path from "../conponents/Path";

function FeeStructure() {
  return (
    <Layout>
      <Path path={[{ path: "/", name: "Home" }]} page="Fee Structure" />
      <div className="container my-5">
        <div className="mid_sec">
          <div className="leftmenuinner row">
            {/* <div className="col-md-3 ">
              <h3>Admissions</h3>
              <div className="tabsfees">
                <div>
                  <li> Overview</li>
                </div>
                <div>
                  <li> Fee Structure</li>
                </div>
                <div>
                  <li> Admission 2023-24</li>
                </div>
                <div>
                  <li> Bus Routes</li>
                </div>
                <div>
                  <li> Special Categories</li>
                </div>
              </div>
            </div> */}
            <div className="col-md-9 mx-auto">
              <div className="tabcontent">
                <div className="message_container">
                  <div className="about_sec1">
                    <h3 className="moveUp">Fee Structure</h3>
                    <div className="Structure_content">
                      <div className="infoBox">
                        <div className="information-table">
                          <table className="table-formatfee">
                            <thead className="feethead">
                              <tr>
                                <td
                                  className="table-format-head"
                                  colSpan={7}
                                  style={{
                                    border: "1px solid #ece4e4",
                                    textAlign: "center",
                                  }}
                                >
                                  <b>Oriental Public School</b>
                                </td>
                              </tr>
                              <tr>
                                <td
                                  className="table-format-head"
                                  colSpan={7}
                                  style={{
                                    border: "1px solid #ece4e4",
                                    textAlign: "center",
                                  }}
                                >
                                  <b>
                                    PAYABLE FEE SCHEDULE 2023-24&nbsp;
                                    &nbsp;&nbsp;
                                    <br />
                                  </b>
                                </td>
                              </tr>
                              <tr>
                                <td
                                  className="table-format-head"
                                  colSpan={7}
                                  style={{
                                    border: "1px solid #ece4e4",
                                    textAlign: "center",
                                  }}
                                >
                                  <b>
                                    Monthly Fee - Pre School to XII (Aug 2023
                                    onwards) <sup>*</sup>revised As per DoE Orde
                                  </b>
                                </td>
                              </tr>
                              <tr>
                                <td
                                  className="table-format-head"
                                  style={{
                                    width: "12%",
                                    border: "1px solid #ece4e4",
                                  }}
                                >
                                  <b>Class</b>
                                </td>
                                <td
                                  className="table-format-head"
                                  style={{
                                    width: "12%",
                                    border: "1px solid #ece4e4",
                                  }}
                                >
                                  <b>Pre Sch to Class I</b>
                                </td>
                                <td
                                  className="table-format-head"
                                  style={{
                                    width: "12%",
                                    border: "1px solid #ece4e4",
                                  }}
                                >
                                  <b>Class II</b>
                                </td>
                                <td
                                  className="table-format-head"
                                  style={{
                                    width: "12%",
                                    border: "1px solid #ece4e4",
                                  }}
                                >
                                  <b>III To X</b>
                                </td>
                                <td
                                  className="table-format-head"
                                  style={{
                                    width: "12%",
                                    border: "1px solid #ece4e4",
                                  }}
                                >
                                  <b>XII Biotech</b>
                                </td>
                                <td
                                  className="table-format-head"
                                  style={{
                                    width: "12%",
                                    border: "1px solid #ece4e4",
                                  }}
                                >
                                  <b>XI &amp; XII Science</b>
                                </td>
                                <td
                                  className="table-format-head"
                                  style={{
                                    width: "12%",
                                    border: "1px solid #ece4e4",
                                  }}
                                >
                                  <b>Xi &amp; XII Comm./Hum</b>
                                </td>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>Tuition Fee</td>
                                <td>6185</td>
                                <td>4820</td>
                                <td>4820</td>
                                <td>4820</td>
                                <td>5585</td>
                                <td>5160</td>
                              </tr>
                              <tr>
                                <td>Annual Charges</td>
                                <td>2995</td>
                                <td>1885</td>
                                <td>1885</td>
                                <td>1970</td>
                                <td>1960</td>
                                <td>1960</td>
                              </tr>
                              <tr>
                                <td>Dev. Fund</td>
                                <td>635</td>
                                <td>505</td>
                                <td>505</td>
                                <td>610</td>
                                <td>590</td>
                                <td>590</td>
                              </tr>
                              <tr>
                                <td>Meal Charges</td>
                                <td>2000</td>
                                <td>2000</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                              </tr>
                              <tr>
                                <td>Smart Class </td>
                                <td>350</td>
                                <td>350 </td>
                                <td>350</td>
                                <td>350 </td>
                                <td>350</td>
                                <td>350</td>
                              </tr>
                              <tr>
                                <td>
                                  <b>Total</b>
                                </td>
                                <td>
                                  <b>12165</b>
                                </td>
                                <td>
                                  <b>9560</b>
                                </td>
                                <td>
                                  <b>7560</b>
                                </td>
                                <td>
                                  <b>8655</b>
                                </td>
                                <td>
                                  <b>8485</b>
                                </td>
                                <td>
                                  <b>8060</b>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <b>
                                    <sup>*</sup>Arrears (fee due from April 2023
                                    to Jul 2023) for Four months
                                  </b>
                                </td>
                                <td>
                                  <b>2900</b>
                                </td>
                                <td>
                                  <b>2140</b>
                                </td>
                                <td>
                                  <b>2140</b>
                                </td>
                                <td>
                                  <b>2460</b>
                                </td>
                                <td>
                                  <b>2420</b>
                                </td>
                                <td>
                                  <b>2280</b>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <p>
                          Accordingly, it is hereby conveyed that the proposal
                          for fee hike of Ahlcon International School, Mayur
                          Vihar, Phase-1, Delhi-110091(School Id: 1002365) filed
                          by the school in response to the Order No.
                          F.DE.-15(40)/PSB/2019/4440-4412 dated 08.06.2022 for
                          the academic session 2022-23, is accepted by the
                          Director(Education) with the above conclusion and
                          suggestions and the school is allowed to increase the
                          fee by 8% for session 2022-23 to be effective from
                          01.04.2023
                        </p>
                        <p>
                          <b>SCHOOL TRANSPORT CHARGES PER MONTH:</b>
                        </p>
                        <p>
                          <b>Delhi Route : </b>3300/- PM
                          <br />
                          <b>UP Route : </b>3500/- PM
                          <br />
                          <b>Noida Ext. : </b>4500/- PM
                          <br />
                        </p>
                        <p>
                          <b>
                            (Bus and Meal fee will be charged for 11 Months)
                          </b>
                          <br />
                        </p>
                        <p>
                          <b>
                            (One month Notice mandatory in case of transport
                            withdrawal)
                            <br />
                            (No withdrawal of transport after 2 QTR)
                          </b>
                        </p>

                        <br />
                        <br />

                        <p>&nbsp;</p>
                        <div className="scroll_table">
                          <table
                            className="table table-bordered"
                            style={{ fontSize: 18 }}
                          >
                            <tbody>
                              <tr>
                                <th
                                  style={{
                                    textAlign: "center",
                                    fontSize: 18,
                                    background: "#033f88",
                                    color: "#fff",
                                  }}
                                  colSpan={2}
                                >
                                  Bank Detail
                                </th>
                              </tr>
                              <tr>
                                <td style={{ width: "50%" }}>
                                  <b>Account Holder Name</b>
                                </td>
                                <td style={{ width: "50%" }}>
                                  <b>Ahlcon International School</b>
                                </td>
                              </tr>
                              <tr>
                                <td style={{ width: "50%" }}>Bank</td>
                                <td style={{ width: "50%" }}>ICICI Bank</td>
                              </tr>
                              <tr>
                                <td style={{ width: "50%" }}>Account No.</td>
                                <td style={{ width: "50%" }}>123343343452</td>
                              </tr>
                              <tr>
                                <td style={{ width: "50%" }}>Account Type</td>
                                <td style={{ width: "50%" }}>Saving</td>
                              </tr>
                              <tr>
                                <td style={{ width: "50%" }}>IFSC Code</td>
                                <td style={{ width: "50%" }}>ICICI00062641</td>
                              </tr>
                              <tr>
                                <td style={{ width: "50%" }}>Branch</td>
                                <td style={{ width: "50%" }}>Noida</td>
                              </tr>
                              <tr>
                                <td colSpan={2}>
                                  <b>Important Note -</b> Please Share The Below
                                  Information On Email
                                </td>
                              </tr>
                              <tr>
                                <td colSpan={2}>
                                  <strong
                                    style={{
                                      color: "rgb(34, 34, 34)",
                                      fontFamily:
                                        "Arial, Helvetica, sans-serif",
                                      fontSize: "small",
                                    }}
                                  >
                                    <span
                                      style={{
                                        fontSize: "9pt",
                                        fontFamily: "Calibri, sans-serif",
                                      }}
                                    >
                                      IN CASE OF CHEQUE DEPOSIT OTHER THAN Noida
                                      BRANCH PLEASE SHARE THE CHEQUE DETAILS
                                      WITH CHILD NAME - ADMISSION NO. - CLASS
                                      &amp; SECTION ON EMAIL -&nbsp;
                                    </span>
                                  </strong>
                                  <a
                                    href="mailto:School@gmail.com"
                                    rel="noreferrer"
                                    target="_blank"
                                    style={{
                                      color: "rgb(17, 85, 204)",
                                      fontFamily:
                                        "Arial, Helvetica, sans-serif",
                                      fontSize: "small",
                                      backgroundColor: "rgb(255, 255, 255)",
                                    }}
                                  >
                                    <b>
                                      <span
                                        style={{
                                          fontSize: "9pt",
                                          color: "red",
                                        }}
                                      >
                                        school@gmail.com
                                      </span>
                                    </b>
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td colSpan={2}>
                                  <strong
                                    style={{
                                      color: "rgb(34, 34, 34)",
                                      fontFamily:
                                        "Arial, Helvetica, sans-serif",
                                      fontSize: "small",
                                    }}
                                  >
                                    <span
                                      style={{
                                        fontSize: "9pt",
                                        fontFamily: "Calibri, sans-serif",
                                      }}
                                    >
                                      IN CASE OF NEFT PLEASE SHARE THE
                                      TRANSACTION ID ALONG WITH CHILD NAME -
                                      ADMISSION NO. - CLASS &amp; SECTION ON
                                      EMAIL
                                      <span style={{ color: "red" }}>
                                        &nbsp;
                                      </span>
                                    </span>
                                  </strong>
                                  <a
                                    href="mailto:school@gmail.com"
                                    rel="noreferrer"
                                    target="_blank"
                                    style={{
                                      color: "rgb(17, 85, 204)",
                                      fontFamily:
                                        "Arial, Helvetica, sans-serif",
                                      fontSize: "small",
                                      backgroundColor: "rgb(255, 255, 255)",
                                    }}
                                  >
                                    <b>
                                      <span
                                        style={{
                                          fontSize: "9pt",
                                          color: "red",
                                        }}
                                      >
                                        school@gmail.com
                                      </span>
                                    </b>
                                  </a>
                                  <br />
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default FeeStructure;
