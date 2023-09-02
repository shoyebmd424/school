import React from "react";
import Layout from "../conponents/Layout";

const SchoolAchivement = () => {
  return (
    <Layout>
      <div className="school-achieve">
        <div className="container my-3">
          <div className="row">
            <div className="col-lg-8 order-2 order-lg-1">
              <h1 className="text-center text-primary">Awards and Honours</h1>
              {schooldata.map((data) => (
                <div>
                  <h3 className="my-3 text-info">{data.title}</h3>
                  <div>
                    <p>{data.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="col-lg-4 m-auto order-1 order-lg-2">
              <img className="col-12 m-auto" src="/school-img/54.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SchoolAchivement;

export const schooldata = [
  {
    title: "Global Leader of Education Award",
    desc: "OPS, Noida has been progressing leaps and bounds under the able stewardship of Ms. Badal Sir, the Principal. The vision to bring about a change in the field of education and to do something for the students was recognized when she was acknowledged as the ‘Global Leader of Education Initiatives’ by an NGO, Aesthetics. The prestigious award was conferred upon her on 5th May 2019.The Oriental family congratulates her on this achievement and wishes her good luck for future endeavours.  ",
  },
  {
    title: "Nothing to Stop the Unstoppable",

    desc: " The new session began with a bang of cheering noise for all OPSians as our school was ranked one of the best schools in the Ranking Survey 2018, conducted by Digital Learning Magazine in the November 2018 issue.Congratulations to all OPSians! And thank you for being with us through thick and thin. May the Almighty God continue to bless us all!",
  },
  {
    title: "Avantika Atal Samman-2018-19",

    desc: "It was a very proud moment for the OPS family when the school Principal, Ms Shikha Sharma was awarded the Avantika - “Atal Samman 2018-19”. Her remarkable contribution in Nation Building, Social Welfare, Environment Protection, Education and Promotion of Indian Art, Culture, Dance and Music fetched her this award. Her life will always guide the coming generations. Invaluable achievement indeed! Heartiest congratulations to her and many more to come her way!",
  },
  {
    title: "“OPS Notches Another Award”",
    desc: "Take pride in how far we have come, and have faith in how far we can go.Congratulations are in order!! A proud moment for IVPS family as the school has once again been awarded, and this time for 'Quality in Education”, in Uttar Pradesh by Education Today. The award was presented by the educationist. This award brings honour and opens door to more success in future. This is a much-deserved award for the school which believes in consistent hard work, and chooses to pursue excellence. It is inspirational to witness hard work giving birth to success. It is the combined efforts of the teachers and students that the school has been recognized with such a prestigious award. May we keep climbing new heights of success!",
  },

  {
    title: "Quality is never an accident.",
    desc: " It is always the result of intelligent and persistent efforts. We are thrilled to share with you all that our persistent efforts have been recognized and rewarded. Our school has been awarded amongst the top schools of India in three categories: Best Infrastructure, for the commendable contribution in Academic Excellence and exemplary contribution in Sports Education. The awards were presented in the 6th School Excellence Award by Brainfeed. The school has rightfully earned this award and it is highly appreciable to say that our school has been winning awards, giving us very joyous moments. We’ll continue with perseverance and set a benchmark for ourselves.",
  },
];
