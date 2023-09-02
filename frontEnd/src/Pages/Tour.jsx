import React from "react";
import Layout from "../conponents/Layout";
import Path from "../conponents/Path";
const Tour = () => {
  return (
    <Layout>
      <Path path={[{ name: "Home", path: "/" }]} page="Tour of our School" />
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <img
              className=" col-12 py-5 m-auto "
              src="/school-img/72.jpg"
              alt=""
            />
          </div>
          <div className="col-md-8">
            <div className="p-2  mx-auto">
              <h4>
                <b>Summer vacation</b>
              </h4>
              <p className="p-3">
                Enjoy your summer break at our school! We have an exciting
                lineup of activities planned for you during this summer
                vacation. From outdoor adventures like hiking and camping to
                creative workshops and sports tournaments, there's something for
                everyone. Dates: [Insert Summer Vacation Dates] Activities: -
                Hiking in the nearby mountains - Arts and crafts workshops -
                Soccer and basketball tournaments - Movie nights under the stars
                - Barbecue parties - Swimming and water sports - Field trips to
                local attractions
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <h4>
            <b>Winter vacation</b>
          </h4>
          <div className="col-md-8 ">
            <div className="p-2  mx-auto">
              <p className="p-3">
                Embrace the magic of winter at our school during the winter
                vacation. Get ready for a winter wonderland filled with snow
                sports, cozy evenings by the fireplace, and festive
                celebrations. Dates: [Insert Winter Vacation Dates] Activities:
                - Skiing and snowboarding on our slopes - Ice skating on our
                frozen lake - Winter art exhibitions - Snowman-building contests
                - Warm cocoa and marshmallow roasting - Holiday-themed parties -
                New Year's Eve fireworks Don't miss out on the winter fun at our
                school!
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <img
              className=" col-12 py-5 m-auto "
              src="/school-img/65.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Tour;
