import React from "react";
import Path from "../conponents/Path";
import Layout from "../conponents/Layout";

const Cratiria = () => {
  return (
    <Layout>
      <Path
        path={[
          { path: "/", name: "Home" },
          { path: "/admission", name: "Addmsion" },
        ]}
        page="Eligibility"
      />
      <div className="container my-4 criteria">
        <h3 className="text-center my-3">
          <b>
            Eligibility Criteria for Oriental Public School Admission 2023-24
          </b>
        </h3>
        <h3>Age:</h3>
        <p>
          Children who are a minimum of 3 years and under 4 years of age on 31,
          March 2023 would be allowed to participate in the admission process.
        </p>
        <p>
          The age relaxation of up to 30 days could be granted by the Head of
          School in the minimum and upper age limit, through the approval of a
          manual application.
        </p>
        <div className="out-table">
          <table class="table table-hover table-bordered bg-white">
            <thead>
              <tr>
                <th class="bg-primary text-white font-1">Class</th>
                <th class="bg-primary text-white font-1">
                  Lower Age Limit as of 31st March 2023
                </th>
                <th class="bg-primary text-white font-1">
                  Upper Age Limit as of 31st march 2023
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>For Pre-School (Nursery)</td>
                <td>3 Years</td>
                <td>Less than 04 Years</td>
              </tr>
              <tr>
                <td>For Pre-Primary (KG)</td>
                <td>4 Years</td>
                <td>Less than 05 Years</td>
              </tr>
              <tr>
                <td>For Class- 1st</td>
                <td>5 Years</td>
                <td>Less than 06 Years</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 id="Application-form-Availability-for-Delhi-Nursery-Admission-2023-24">
          <strong>
            Application form Availability for OPS Admission 2023-24
          </strong>
        </h3>
        <p>
          The registration process for the session 2023-24 is going to commence
          on 1<sup>st </sup>December 2022.
        </p>
        <p>
          Candidates would be allowed to submit the application forms until the
          23<sup>rd</sup> of December 2022.
        </p>
        <h3 id="Documents-Required-for-Delhi-Nursery-Admission-2023-24">
          <strong>Documents Required for OPS Admission 2023-24</strong>
        </h3>
        <ul>
          <li>Aadhar Card of one of the Guardian</li>
          <li>Child&rsquo;s recent passport-size photograph</li>
          <li>Guardian's recent passport-size photograph</li>
          <li>Family Photograph</li>
          <li>Birth Certificate</li>
          <li>Medical Fitness Certificate</li>
          <li>Child's Aadhar Card</li>
        </ul>
        <h3 id="Documents-Supporting-Address-Proof-for-Delhi-Nursery-Admission-2023-24">
          <strong>
            Documents Supporting Address Proof for OPS Admission 2023-24
          </strong>
        </h3>
        <ul>
          <li>Aadhar Card/UID card issued in the name of any of the parents</li>
          <li>
            Ration Card/Smart Card issued in the name of parents(carrying the
            child's name)
          </li>
          <li>Domicile Certificate of child or parents</li>
          <li>
            Electricity Bill/MTNL Phone Bill/Water Bill/Passport in the name of
            the parents or the child
          </li>
          <li>Voter I-Card(EPIC) of one of the parents</li>
        </ul>
        <p>
          As per the official notification, the government has asked all the
          private schools in the NCT to upload their admission criteria by 28
          November, so that the procedure runs smoothly.
        </p>
        <h3 id="Admission-Criteria-for-Delhi-Nursery-Admission-2023-24">
          Admission Criteria for OPS Admission 2023-24
        </h3>
        <ul>
          <li>
            The schools will upload their criteria and points using the login id
            and password.
          </li>
          <li>
            The commencement of admission 2023-24, forms are being made
            available.
          </li>
          <li>
            The submission of duly filled forms by parents before the said
            closing date.
          </li>
          <li>
            Schools upload the details of children who have applied for
            admission under Open seats.
          </li>
          <li>Uploading of marks(as per point system) allotted to children.</li>
          <li>
            The first list of selected children along with the waiting list
            including the marks allotted to them will be displayed.
          </li>
          <li>
            8 days are allotted to the parents for their query resolution
            regarding marks allotment to their child in the first list.
          </li>
          <li>
            Display of the Second List of the selected children along with the
            marks allotted to them under the point system, and the waiting list.
          </li>
          <li>
            Resolution of parent queries regarding marks allotment to their
            child.
          </li>
          <li>
            The display of the subsequent admission list, if there is any new
            list.
          </li>
          <li>Closure of the admission process.</li>
        </ul>
        <p>
          The draw of lots will be conducted in a transparent manner in the
          presence of the parents under videography. The footage will be held by
          the school. The parents would be allowed to see the slip of their
          child&rsquo;s name before it is put in the box, to be used for
          drawing.
        </p>
      </div>
    </Layout>
  );
};

export default Cratiria;
