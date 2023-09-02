import React from "react";
import Layout from "../conponents/Layout";
import Path from "../conponents/Path";

const SportIndoor = () => {
  return (
    <Layout>
      <Path path={[{ name: "Home", path: "/" }]} page="Sports" />
      {/* =======Sports======== */}
      <section>
        <div className="container py-5">
          <div className="section-title bg-dark text-white rounded-3">
            <h2 className="text-center fs-2 text-monochrome py-2">Sports</h2>
          </div>
          <div className="">
            <div className="mainn row mt-5 border rounded p-3 m-3" style={{}}>
              <div className="row col-12" style={{ marginTop: "auto" }}>
                <div className="col-md-4">
                  <img
                    alt=""
                    src="/imgInfra/ind2.jpg"
                    className="images img alt=fluid  rounded"
                  />
                </div>
                <div className="col-md-8">
                  <h3>Chess</h3>
                  <p className="fs-6">
                    For Kids to Learn and Play Chess For Parents and Coaches to
                    Teach Chess Engaging online curriculum Easy to manage
                    clubs/classrooms Student chess report cards Organize
                    tournaments Manage students and clubs Organize tournaments
                    Review student games and progress Content supports coaching
                  </p>
                </div>
              </div>
              <div className="row col-12 py-2" style={{ marginTop: "auto" }}>
                <div className="col-md-8">
                  <h3>Pool Ball</h3>
                  <p className="fs-6">
                    Durable and longlasting Play Junctions & Ball Pools is quite
                    safe for growing kids. In recent years we have emerged s a
                    leading supplier and manufacturer of indoor Play Junctions &
                    Ball Pools and other play equipment in India. Browse through
                    our site to know in detail about our various indoor play
                    equipments.
                  </p>
                </div>
                <div className="col-md-4 order-2 order-md-1">
                  <img
                    alt=""
                    src="/imgInfra/ind5.jpg"
                    className="images img alt=fluid  rounded"
                  />
                </div>
              </div>
              <div className="row col-12" style={{ marginTop: "auto" }}>
                <div className="col-md-4 order-1 order-md-2">
                  <img
                    alt=""
                    src="/imgInfra/ind4.jpg"
                    className="images img alt=fluid  rounded"
                  />
                </div>
                <div className="col-md-8">
                  <h3>carrom</h3>
                  <p className="fs-6">
                    Carrom is a popular indoor game that is played on a board
                    with small round pieces called carrom men and a larger
                    striker piece. The objective of the game is to use the
                    striker piece to hit and pocket the carrom men, which are
                    usually made of plastic or wood.
                  </p>
                </div>
              </div>

              <br />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container py-5">
          <div className="section-title bg-dark text-white rounded-3">
            <h2 className="text-center fs-2 text-monochrome py-2">
              Outdoor Sports
            </h2>
          </div>
          <div className="">
            <div className="mainn row mt-5 border rounded p-3 m-3" style={{}}>
              <div className="row col-12" style={{ marginTop: "auto" }}>
                <div className="col-md-4">
                  <img
                    alt=""
                    src="/imgInfra/out6.jpg"
                    className="images img alt=fluid  rounded"
                  />
                </div>
                <div className="col-md-8">
                  <h3>Cricket</h3>
                  <p className="fs-6">
                    Cricket is a team sport which provides children and young
                    people with a variety of skills needed to develop a lifelong
                    love of sport and physical activity. It is fun, inclusive,
                    and the sport provides a wealth of opportunities to take
                    part.
                  </p>
                </div>
              </div>
              <div className="row col-12 py-2" style={{ marginTop: "auto" }}>
                <div className="col-md-8 order-2 order-md-1">
                  <h3>Hocky</h3>
                  <p className="fs-6">
                    Hockey is one of the most gender equitable team sports and
                    is fun, fast, safe, and exciting. The game is played 11
                    a-side with a goalkeeper but there are also many
                    age-appropriate, small-sided versions of the game.
                  </p>
                </div>
                <div className="col-md-4 order-1 order-md-2">
                  <img
                    alt=""
                    src="/imgInfra/out3.jpg"
                    className="images img alt=fluid  rounded"
                  />
                </div>
              </div>
              <div className="row col-12" style={{ marginTop: "auto" }}>
                <div className="col-md-4">
                  <img
                    alt=""
                    src="/imgInfra/out1.jpg"
                    className="images img alt=fluid  rounded"
                  />
                </div>
                <div className="col-md-8">
                  <h3>Vollyball</h3>
                  <p className="fs-6">
                    A team sport featuring two teams of six players. Each team
                    aims to score points by striking a ball over the net and
                    grounding it on their opponent's side of the court.
                  </p>
                </div>
              </div>

              <br />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SportIndoor;
