import React from "react";
import Layout from "../conponents/Layout";
import Path from "../conponents/Path";

const Priciple = () => {
  return (
    <Layout>
      <Path path={[{ path: "/", name: "Home" }]} page="Principal Message" />
      <div className="container">
        {" "}
        <div className="row">
          <div className="col-md-4 p-3">
            <img className="col-12" src="/school-img/principal.jpeg" alt="" />
          </div>
          <div className="col-md-8">
            <h1>Principal Message</h1>
            <div className="p-4">
              <p>
                Oriental Public School,Noida takes on the role of igniting and
                fueling the very fire of learning in the students to produce
                scholars who have the mental agility, physical vigor, strong
                value system and IT skills. Founded in 2009, the school has
                burgeoned into multi- disciplinary institution, offering an
                environment of rich tutelage, harmonious learning, various
                facilities to help the learners broaden their horizons.
              </p>{" "}
              <p>
                {" "}
                The school’s objective is to provide pedagogy which will empower
                the learners with analytical and logical skills. The
                infrastructure of the school is being constantly upgraded to
                attain highest standards of excellence.{" "}
              </p>
              Oriental Public School, Noida nurtures a vision to bring forth
              responsible and self-developed citizens who will make all proud
              with their stellar role in nation building. The education gained
              at Oriental Public School will become the means to their all-round
              success in ever evolving and competitive global scenario.{" "}
              <p>
                The school relentlessly works to produce empowered individuals
                who are committed to Indian ethos and culture while keeping the
                adage ‘modernity blends with tradition’ alive. Our exemplary
                Founder President Mr.Sushil Kumar Yadav has enthused the
                Orientalians to meet the existing challenges headlong, with
                lateral thinking and global vision. Our dedicated Chairperson
                Mr.Sushil Kumar Yadav persistently emphasizes on commitment,
                innovation and hard work. Under her able direction and
                leadership, we at Oriental Public School are most certainly
                poised for an enriched future. I look forward to yet another
                awe-inspiring year of exaltation and success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Priciple;
