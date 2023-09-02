import React from "react";
import Describe from "./Describe";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="col-md-9 pt-md-5 pt-5 mx-auto">
      <div className="row pt-md-5 mt-md-5">
        <div className="col-md-8 ">
          <h3>
            <b>Welcome To Oriental Public School</b>
          </h3>
          <div className="row py-4 my-4 text-justify">
            <div className="col-md-6">
              <img className="w-100" src="/school-img/45.jpg" alt="" />
            </div>
            <div className="col-md-6">
              <p>
                Oriental Public School promoted under the aegis of the Oriental
                Public School Education Society, was founded in the year 2008 by
                the great visionary our Directors. Oriental Public School, which
                is schools considered as best amongst the schools in Noida, is
                spread over a sprawling. Situated in Sector 122, it provides a
                peaceful environment conducive for learning and holistic
                development of children.
              </p>
            </div>
            <div>
              <p>
                The School, which started with just 186 students on its rolls,
                has already celebrated 15+ glorious years of its inception.
                Despite its extremely modest beginnings, the School has
                established itself as one of the top schools in Noida and has
                carved out a niche for itself with high academic standards and
                excellence in various co-curricular activities. The School was
                affiliated to the UP Board. The first batch of Class X appeared
                for the All UP Board Exam in 2010 and all 11 students who
                appeared in the exam secured first division. The first batch of
                Class X appeared for the All India High School exam in 2010. The
                School started its first computer lab in 2010 and introduced an
                extensive Computer Aided Learning programme (CAL) in 2010 As one
                of the top UP Board in Noida, the School is committed to ensure
                holistic development of students by encouraging them to actively
                and enthusiastically participate in a plethora of activities
                such as sports, public speaking, drama, recitation, creative
                writing, music, dance, fine arts, etc. With its mission of
                providing holistic development of students, the School has
                integrated its activities in all spheres such as - sports,
                public speaking, drama, recitation, creative writing, music,
                dance, fine arts, etc.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <Describe />
        </div>
      </div>

      <h4>Our Mission</h4>
      <div>
        <p className="">
          Our mission is to nurture young minds through a sound educational
          programme which is sensitive to the multicultural ethos, so as to
          create caring and socially responsible individuals. The school
          promotes and ensures that each student has ample opportunities to be
          an impressive communicator, a keen inquirer and one who enhances his
          or her academics, social and sporting skills, thereby developing into
          a well-balanced personality.
        </p>
        <p>
          The New School prepares students to understand, contribute to, and
          succeed in a rapidly changing society, thus making the world a better
          and more just place. We will ensure that our students develop both the
          skills that a sound education provides and the competencies essential
          for success and leadership in the emerging creative economy. We will
          also lead in generating practical and theoretical knowledge that
          enables people to better understand our world and improve conditions
          for local and global communities.
        </p>
      </div>
      <h4> Our vision</h4>
      <div>
        <p className="">
          Oriental Public School is a visionary institution that thrives on the
          synergy between design and social research, propelling our exploration
          of contemporary challenges. Our curriculum delves into critical themes
          such as democracy, urbanization, technological evolution, economic
          empowerment, sustainability, migration, and globalization. As a
          premier intellectual and creative nucleus, we are dedicated to
          fostering impactful engagement in a world that increasingly hungers
          for expertly crafted objects, effective communication, streamlined
          systems, and purpose-oriented organizations to fulfill societal needs.
        </p>
      </div>

      <div className="row mt-5">
        <div className="row row-cols-md-2 ">
          <div className="py-3">
            <h2 className=" border-bottom">
              <b>Chairman</b>
            </h2>
            <div className="d-flex">
              <div className="d-flex flex-column text-center m-auto">
                {/* <img
                  className="col-5 mx-auto rounded-circle"
                  src="/school-img/54.jpg"
                  alt=""
                />
                <h5>Razak Alam</h5> */}
              </div>
              <div>
                <p className="p-3">
                  The ORIENTAL Group of Schools are committed to providing a
                  progressive education system that steers the holistic
                  education of a child. While we strive to groom our students to
                  enable them to turn into excellent professionals and
                  achievers, we also aim to nurture them as ethical individuals
                  with a deep understanding and regard for human values. Put
                  simply, we aim to develop a future generation that takes pride
                  in our heritage and culture, has a sense of right and wrong,
                  and at the same time a yearning for global competitive
                  excellence. It is with this aim of offering brilliance to our
                  students on all fronts that we at Oriental leave no stone
                  unturned. From recruiting highly qualified professionals to
                  offering the best educational programmes, great care is taken
                  to ensure that the students get nothing short of the best.
                </p>
                <div className="text-center">
                  {" "}
                  <Link to="/chairman" className="text-decoartion-none">
                    {" "}
                    <button className="btn btn-outline-primary">
                      Read More
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="py-3 ">
            <h2 className=" border-bottom">
              <b>Director</b>
            </h2>
            <div className="d-flex border-start">
              <div className="d-flex flex-column text-center m-auto">
                {/* <img
                  className="col-5 mx-auto rounded-circle"
                  src="/school-img/54.jpg"
                  alt=""
                />
                <h5>Wills M.Smith</h5> */}
              </div>
              <div>
                <p className="p-3">
                  According to Director Sir, our esteemed Director, is a
                  visionary leader with over 15 years of invaluable experience
                  in the industry. His journey with our organization has been
                  nothing short of remarkable, marked by a trail of remarkable
                  achievements and milestones. leadership style is a testament
                  to his passion for excellence. Under his able guidance, our
                  company has not only weathered industry storms but has also
                  consistently surged ahead, setting new benchmarks and
                  standards.
                </p>
                <div className="text-center">
                  {" "}
                  <Link to="/chairman" className="text-decoartion-none">
                    {" "}
                    <button className="btn btn-outline-primary">
                      Read More
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
