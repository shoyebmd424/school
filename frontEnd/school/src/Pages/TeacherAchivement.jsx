import React from "react";
import Path from "../conponents/Path";
import Layout from "../conponents/Layout";

const TeacherAchivement = ({ data, title }) => {
  return (
    <Layout className="teacher">
      <Path
        path={[{ path: "/", name: "Home" }]}
        page={`${title} Achievement`}
      />
      <h1 className="my-5 px-3">{title} Achievements</h1>
      <div className="container">
        <div className="row row-cols-md-3 row-cols-sm-2 ">
          {data.map((data, key) => (
            <>
              <div>
                <div
                  style={{ height: "40rem" }}
                  className="p-2 text-center my-3 card mx-auto"
                >
                  <img
                    className="col-8 py-5 m-auto rounded-circle"
                    src={data.img}
                    alt=""
                  />
                  <h4>
                    <b>{data.title}</b>
                  </h4>
                  <p className="p-3">{data.desc}</p>
                  <b>{data.name}</b>
                  <p>{data.desig}</p>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default TeacherAchivement;

export const teacher = [
  {
    img: "/school-img/math.jpg",
    title: "Received Certificate from IIT Bombay",
    desc: "Mr. Abul is an accomplished educator with years of experience in teaching mathematics. He has received a prestigious certificate from IIT Bombay for his outstanding contributions to the field of education.",
    name: "Md Abul",
    desig: "Mathematics Teacher",
  },
  {
    img: "/school-img/science.jpg",
    title: "Published Research in Science Journal",
    desc: "Sanjeev sir is a dedicated science teacher who has recently published groundbreaking research in a renowned science journal. Her commitment to scientific inquiry inspires her students.",
    name: "Sanjeev sir",
    desig: "Science Teacher",
  },
  {
    img: "/school-img/debate.jpg",
    title: "Champion Debate Coach",
    desc: "Susan sir is our esteemed debate coach. Under her guidance, our debate team has won numerous championships at both regional and national levels.",
    name: "Susan sir",
    desig: "Debate Coach",
  },
  {
    img: "/school-img/art.jpg",
    title: "Artistic Excellence",
    desc: "Dr. Hamid is an art teacher who has a passion for nurturing young artists. Many of his students have won awards in local art exhibitions.",
    name: "Dr. Hamid Sir",
    desig: "Art Teacher",
  },
  // Add more teachers with their respective details
];

export const student = [
  {
    img: "/images/home/h5.jpg",
    title: "Winner of National Science Fair",
    desc: "Rahul kumar is an exceptional student who clinched the first prize at the National Science Fair. His project on renewable energy solutions earned him widespread recognition.",
    name: "Rahul kumar",
    desig: "High School Student",
  },
  {
    img: "/images/home/h6.jpg",
    title: "Science project winner",
    desc: "Aman sharma is not only a top-performing student but also an exceptional athlete. She has consistently achieved excellence in both academics and sports.",
    name: "Aman sharma",
    desig: "9th standard student",
  },
  {
    img: "/images/home/h7.jpg",
    title: "Quiz winner",
    desc: "Sofia ansari is a talented actress and a dedicated member of our school's Drama Club. She has played leading roles in several successful productions.",
    name: "Sofia ansari",
    desig: "7th standard student",
  },
  {
    img: "/images/home/h8.jpg",
    title: "chess winner",
    desc: "Abdur Rahman is passionate about environmental conservation. He has organized and led several community clean-up and tree-planting initiatives.",
    name: "Abdur rahman",
    desig: "8th class student",
  },
  // Add more students with their respective details
];
