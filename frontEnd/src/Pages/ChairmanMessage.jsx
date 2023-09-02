import React from "react";
import Layout from "../conponents/Layout";
import Path from "../conponents/Path";

const ChairmanMessage = () => {
  return (
    <Layout>
      <Path path={[{ path: "/", name: "Home" }]} page="Chairman Message" />
      <div className="row">
        {Message.map((data, key) => (
          <div
            key={key}
            className={`mainn row mt-5 border rounded p-3 m-3 ${
              key % 2 === 0 ? "flex-md-row-reverse" : ""
            }`}
          >
            <div className="col-md-4 col-12" style={{ marginTop: "auto" }}>
              {data.img}
            </div>
            <div className="col-md-8 col-12">
              <div
                className="fs-2 text-start font-monospace fw-bold"
                style={{ backgroundColor: "beige" }}
              >
                {data.title}
              </div>

              <p className="fs-6 text-start">{data.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default ChairmanMessage;

export const Message = [
  {
    img: (
      <img src="/images/port.jpg" className="images img-fluid rounded" alt="" />
    ),
    title: "Director",
    desc: (
      <>
        According to Director Sir, our esteemed Director, is a visionary leader
        with over 15 years of invaluable experience in the industry. His journey
        with our organization has been nothing short of remarkable, marked by a
        trail of remarkable achievements and milestones. John's leadership style
        is a testament to his passion for excellence. Under his able guidance,
        our company has not only weathered industry storms but has also
        consistently surged ahead, setting new benchmarks and standards.
      </>
    ),
  },
  {
    img: (
      <img src="/images/port.jpg" className="images img-fluid rounded" alt="" />
    ),
    title: "Chairman",
    desc: (
      <>
        The ORIENTAL Group of Schools are committed to providing a progressive
        education system that steers the holistic education of a child. While we
        strive to groom our students to enable them to turn into excellent
        professionals and achievers, we also aim to nurture them as ethical
        individuals with a deep understanding and regard for human values. Put
        simply, we aim to develop a future generation that takes pride in our
        heritage and culture, has a sense of right and wrong, and at the same
        time a yearning for global competitive excellence. It is with this aim
        of offering brilliance to our students on all fronts that we at Oriental
        leave no stone unturned. From recruiting highly qualified professionals
        to offering the best educational programmes, great care is taken to
        ensure that the students get nothing short of the best. The teaching
        pedagogy at Oriental Public School has been carefully crafted to ensure
        a unique study programme for each learning level. The scientifically
        designed school curriculum caters to every age group. It is Oriental
        Public School customized approach to learning which has the perfect
        blend of worlds best educational practices and Indian traditional values
        that has enabled our students to set academic and co-curricular records
        year after year Oriental Public School believes in lighting every little
        lamp that walks into its Universe to enkindle the world tomorrow with
        wisdom and knowledge. Each one of our students will be a success story.
        This is my dream; this is my commitment I take immense happiness in
        sharing Oriental Public School excellence in education through these
        pages of the school website. The website gives a comprehensive overview
        of our world class school infrastructure and educational pedagogy,
        academic and co-curricular excellence, global reach out, an assortment
        of activities and events that nurture the social, emotional, academic,
        patriotic and scientific temperament in students in an environment that
        blends tradition with modernity.
      </>
    ),
  },
  {
    img: (
      <img src="/images/port.jpg" className="images img-fluid rounded" alt="" />
    ),
    title: "principal",
    desc: (
      <>
        According to Principle Sir, a cherished member of our teaching staff,
        brings a wealth of knowledge and passion to the classroom. With a Ph.D.
        in Education and years of experience, she plays a vital role in shaping
        the minds of our students. Emily's teaching philosophy is rooted in
        interactive and engaging learning. She believes that education is not
        merely about imparting information but also about inspiring critical
        thinking and a love for learning. Her classes are a testament to this
        philosophy, where students are actively involved in discussions,
        projects, and hands-on activities. One of Emily's remarkable qualities
        is her dedication to her students' holistic development. She goes beyond
        textbooks and curricula to nurture their creativity, curiosity, and
        problem-solving skills. Her classroom is a vibrant and inclusive space
        where every student feels valued and encouraged to explore their
        potential. Emily's impact extends beyond the classroom. She is involved
        in educational research and often shares her insights with fellow
        educators. Her contributions to the field of education are
        well-recognized, and she has presented her work at prestigious
        conferences and seminars. Her commitment to education is not limited to
        the academic realm. Emily is also passionate about community outreach
        and often volunteers her time to mentor disadvantaged youth. Her
        dedication to empowering the next generation is a testament to her
        belief in the transformative power of education.
      </>
    ),
  },
  {
    img: (
      <img src="/images/port.jpg" className="images img-fluid rounded" alt="" />
    ),
    title: "vice-Principle    ",
    desc: (
      <>
        According to Vice-Principle Sir, an integral member of our teaching
        staff, is known for his expertise and dedication in the field of
        education. With a deep passion for teaching and a commitment to
        excellence, he has left an indelible mark on the lives of countless
        students. Mark's teaching philosophy centers around fostering critical
        thinking skills in his students. He believes that education is not about
        rote memorization but about equipping students with the tools to
        analyze, question, and innovate. His classrooms are dynamic spaces where
        lively discussions and debates are the norm. One of Mark's outstanding
        qualities is his ability to inspire curiosity. He encourages his
        students to ask questions, explore new ideas, and challenge conventional
        wisdom. This approach not only enhances their academic growth but also
        prepares them for the complexities of the real world. Mark's dedication
        to his students goes beyond the classroom. He is actively involved in
        extracurricular activities and often mentors students in various
        projects and competitions. His guidance has led many students to achieve
        remarkable success in academic and extracurricular pursuits.
        Furthermore, Mark's commitment to lifelong learning sets an exemplary
        standard for his students. He is a voracious reader and continuously
        seeks opportunities for professional development. His dedication to
        self-improvement serves as an inspiration to both his colleagues and
        students alike. In summary, According to Director Sir, According to
        Chairman Sir, According to Principle Sir, and Mark Wilson are not just
        professionals; they are exemplars of leadership, commitment, and passion
        in their respective roles within our organization. Their contributions
        have not only elevated our organization but have also made a profound
        impact on education, sustainability, and community welfare.
      </>
    ),
  },
];
