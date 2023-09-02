import React from "react";
import Layout from "../conponents/Layout";
import Path from "../conponents/Path";

const Lab = () => {
  return (
    <Layout>
      <Path path={[{ path: "/", name: "Home" }]} page={`Lab facility`} />
      <div className="container">
        {facidata.map((data, key) => (
          <div className="row mb-5" key={key}>
            <div className="col-md-6 order-md-2">
              <img className="w-100" src={data.img} alt="Lab" />
            </div>
            <div className="col-md-6 order-md-1">
              <h5 className="text-primary">{data.title}</h5>
              <h3>{data.head}</h3>
              <div>{data.para}</div>
            </div>
          </div>
        ))}
      </div>    </Layout>
  );
};

export default Lab;
export const facidata = [
  {
    title: "Electrical Lab",
    head: "Empowering Innovation through Electricity",
    img: "/imgInfra/tl1.jpg",
    para: (
      <>
        <p>
          Our Electrical Lab is equipped with state-of-the-art equipment and tools
          to facilitate hands-on learning in the field of electrical engineering.
          Students get to work on real-world projects and experiments, gaining
          practical experience that complements their theoretical knowledge.
        </p>
      </>
    ),
  },
  {
    title: "Chemical Lab",
    head: "Exploring the World of Chemical Reactions",
    img: "/imgInfra/pl1.webp",
    para: (
      <>
        <p>
          The Chemical Lab provides a safe and controlled environment for students
          to conduct experiments, explore chemical reactions, and delve into the
          wonders of chemistry. Our lab is designed to foster curiosity and
          hands-on learning.
        </p>
      </>
    ),
  },
  {
    title: "Biology Lab",
    head: "Unraveling the Mysteries of Life",
    img: "/images/facility/Facilities-Lab.png",
    para: (
      <>
        <p>
          In our Biology Lab, students engage with specimens, microscopes, and
          cutting-edge tools to discover the intricacies of living organisms.
          Through hands-on activities, students learn about genetics, ecology,
          and anatomy, enhancing their understanding of life sciences.
        </p>
      </>
    ),
  },
  // Add more lab facilities with unique data as needed
];
