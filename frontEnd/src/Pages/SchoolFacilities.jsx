import React from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import Layout from "../conponents/Layout";
import Path from "../conponents/Path";

function SchoolFacilities() {
  return (
    <Layout>
      <Path path={[{ path: "/", name: "Home" }]} page={`School Facility`} />
      <div className="container">
        {/* <div className="row row-cols-md-2"> */}
        {facidata.map((data, key) => (
          <div className="row">
            <div className="col-md-6 order-2 order-md-1">
              {" "}
              <br /> <br />
              <h5 className="text-primary">{data.title}</h5>
              <h3>{data.head}</h3>
              <div>{data.para}</div>
            </div>
            <div className="col-md-6 order-1 order-md-2">
              {" "}
              <br /> <br />
              <img className="w-100" src={data.img} alt="school.png" />
            </div>
            <div className="col-md-6">
              {" "}
              <br />
              <br />
              <img
                className="w-100 col-md-6"
                src={data.img2}
                alt="school.png"
              />
            </div>
            <div className="col-md-6">
              {" "}
              <br />
              <br />
              <h5 className="text-primary">{data.title2}</h5>
              <h3>{data.head2}</h3>
              <div>{data.para2}</div>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}

export default SchoolFacilities;

export const facidata = [
  {
    title: "OUR FACILITIES",
    head: "Building A Better World For Your Child",
    img: "/images/facility/Slider-5-1.png",
    para: (
      <>
        <p>
          Our commitment to excellence extends to the facilities we provide on
          campus. The infrastructure, sports arenas, music room, transport
          arrangements, library, laboratories, medical facilities are all
          designed to be a part of the green surroundings. TAS is a
          well-designed campus which offers all the modern facilities that are
          needed to provide the students a safe, secure and happy learning
          environment.
        </p>
        <ul>
          <li>
            {" "}
            <BsFillArrowRightCircleFill /> Modern Infrastructure
          </li>
          <li>
            {" "}
            <BsFillArrowRightCircleFill /> Indoor and Outdoor Sports
          </li>
          <li>
            {" "}
            <BsFillArrowRightCircleFill /> Acoustically enriched Music Room
          </li>
          <li>
            {" "}
            <BsFillArrowRightCircleFill /> Artwork around the campus
          </li>
          <li>
            {" "}
            <BsFillArrowRightCircleFill /> Well stocked Library and
            Well-equipped Laboratories
          </li>
          <li>
            {" "}
            <BsFillArrowRightCircleFill /> Safe and Convenient Transport
          </li>
          <li>
            {" "}
            <BsFillArrowRightCircleFill /> Always ready Medical Room
          </li>
          <li>
            {" "}
            <BsFillArrowRightCircleFill /> Pedagogically designed Curriculum
          </li>
        </ul>
      </>
    ),
    title2:
      "SCHOOL IS A BUILDING WHICH HAS FOUR WALLS WITH TOMORROW INSIDE LON WATTERS",
    head2: "Infrastructure",
    img2: "/images/facility/infrastructure.jpg",
    para2: (
      <>
        <p>
          The modern infrastructure at TAS is an amalgamation of green, lush
          surroundings and state-of-the-art buildings. While on one hand, the
          green parts of the campus create a world of happiness, serenity and
          calm, the building provides a functional, safe and secure learning
          environment. Fully equipped smart classrooms, well-stocked library,
          Multipurpose hall, Basketball court, Skating Rink, music rooms,
          Open-air lunch space, Gazebo, and Bus services are what our
          infrastructure comprises of. <br />
          <br />
          To enhance the aesthetics of the school campus, the entire school has
          artwork/murals displayed on walls or in corners with educational
          aspects attached to them. The surroundings are an epitome of cohesive
          learning with happiness and fun being the mantra throughout.
        </p>
      </>
    ),
  },
  {
    title:
      "DO YOU KNOW WHAT MY FAVORITE PART OF THE GAME IS? THE OPPORTUNITY TO PLAY. - MIKE SINGLETARY",
    head: "Sports",
    img: "/images/facility/Sports2.jpg",
    para: (
      <>
        <p>
          The opportunity to play and play well is what we provide for at TAS.
          Sports are as important for the all-round development of a child as
          are academics. Sports inculcate a sense of responsibility, encourage
          team spirit, develop discipline and help the child learn to deal with
          success and failure equally. <br /> <br />
          The TAS campus has multiple sports facilities for both indoor and
          outdoor sports such as cricket, football, volleyball, basketball,
          badminton, table tennis. TAS has also tied up with various institutes
          and organisations where our students are trained and coached in
          different sports as a part of after-school activities
        </p>
      </>
    ),
    title2: "AMAZING THINGS COME FROM EXPERIMENTATION. - ANONYMOUS",
    head2: "Laboratories",
    img2: "/images/facility/Library.jpg",
    para2: (
      <>
        <p>
          Laboratories are rooms that feed the curiosity of our minds. They are
          places for discovery, for fun and to learn the science behind the
          world around us. We teach Science with the help of demonstrations,
          experiments, and activities aiming to strengthen the concepts in an
          interactive way. Providing a hands-on experience, our laboratories
          pave the way to budding scientists and their experimentations.
          <br /> <br />
          TAS has fully equipped labs for Physics, Chemistry, and Biology where
          the Faculty is ably assisted by our well-qualified Lab assistants{" "}
        </p>
      </>
    ),
  },
  {
    title: "BUILDING A BETTER WORLD, ONE STUDENT AT A TIME.",
    head: "Curriculum",
    img: "/images/facility/cirriculum.jpg",
    para: (
      <>
        <p>
          TAS prepares its students for the ICSE curriculum (Indian Certificate
          of Secondary Education) right from Grade I. Lessons are taught and
          concepts are imparted to the students with the aid of smart classes,
          role plays, experiments, and demonstrations. Students are encouraged
          to question and express themselves creatively.
          <br /> <br />
          The different types of co-curricular activities in the school help to
          broaden the horizons of learning. Inculcating a habit of reading is
          greatly emphasized and so is discipline. Speech and drama is an
          integral part of the curriculum and our annual concert is a
          testimonial for the same. Music and Sports are given equal importance
          for the all-round growth of our students. The curricular activities
          are complemented with Art and Craft, General Knowledge and Life
          Skills. Every child is unique and we ensure that every student is
          given individual attention. The curriculum at TAS is adapted to help
          every child realise his/her potential and emerge a winner.quipped labs
          for Physics, Chemistry, and Biology where the Faculty is ably assisted
          by our well-qualified Lab assistants{" "}
        </p>
      </>
    ),
    title2:
      "PUBLIC SPEAKING IS THE ART OF GIVING POWER TO WORDS—TO INFLUENCE, INSPIRE AND TRANSFORM LIVES. - DIRISH MOHAN",
    head2: "Public Speaking",
    img2: "/images/facility/Public-Speaking.jpg",
    para2: (
      <>
        <p>
          Public speaking techniques are a life skill and students with a good
          hold over the same tend to be more confident, aware, better at
          decision-making and open-minded. Numerous intra-school and
          inter-school competitions such as extempore, debates, elocution,
          theatre and many more are conducted regularly to provide the children
          with a platform to showcase their talents. The school focuses on
          developing the public speaking skills as these play a major role in
          shaping the personality of the children from an early age. Not only do
          we aim to build their confidence but also assist them in overcoming
          fear and performance anxiety.
        </p>
      </>
    ),
  },
  {
    title: "MUSIC UNLOCKS SEIF-EXPRESSION INTELLIGENCE CREATIVITY",
    head: "Music",
    img: "/images/facility/music.jpg",
    para: (
      <>
        <p>
          Music is an integral part of all our homes. It is a scientifically
          proven medium for relaxation, for enhancing communication skills and
          encouraging creativity. <br /> <br />
          TAS has incorporated music in the curriculum in such a way that it
          helps the students de-stress in a creative environment and enjoy a
          sense of accomplishment. Our music room is built with state-of-the-art
          acoustics. <br /> <br />
          The highlight of our Music Curriculum is the association with Furtado
          School of Music, Mumbai, which provides training in instrumental and
          vocal music with the help of in-house teachers. All children
          participate in the yearly concert and perform in various in-house
          events, competitions and celebrations.
        </p>
      </>
    ),
    title2: "SAFE, SECURE, COMFORTABLE, CONVENIENT",
    head2: "Transport",
    img2: "/images/facility/Facilities-Transport.png",
    para2: (
      <>
        <p>
          The need for safe passage of each child to school and back home is of
          paramount importance to us. To ensure safe travel, the school has its
          own fleet of outsourced school buses designed as per government
          standards and manned by trained drivers and personnel sensitized to
          the needs of our children.
          <br /> <br />
          The Transport Service (optional) is operated by the school and a
          separate transport fee is charged for this. For supervision and
          monitoring a lady attendant is on board throughout the journey.
        </p>
      </>
    ),
  },
  {
    title: "A PORTAL TO A DIFFERENT DIMENSION…….WHERE THE ADVENTURE BEGINS",
    head: "Library",
    img: "/images/facility/Library.jpg",
    para: (
      <>
        <p>
          The school library is a place where knowledge, inspiration,
          imagination and creativity are nurtured. <br /> <br />
          Academic support books, Non-Fiction and Fiction books are the hallmark
          of our library. Books by Ruskin Bond, Agatha Christie, Paolo Coelho,
          and many more authors as well as poets are all available for the
          reading pleasure of the students. A full time librarian helps the
          students choose age-appropriate literature and the comfortable chairs,
          cushions and sofas create an inviting ambience. <br />
          We ensure that every child spends some time here every day.
        </p>
      </>
    ),
    title2: "ALWAYS CARING…ALWAYS HERE",
    head2: "INFIRMARY",
    img2: "/images/facility/infrastructure.jpg",
    para2: (
      <>
        <p>
          Health check-ups including dental checks are carried out periodically
          for all the children. A record of their height and weight is
          maintained in order to monitor their growth. A fulltime qualified
          nurse is present on campus during school hours to provide medical
          assistance in case of any minor exigency. Basic First-aid is available
          in the infirmary. <br /> <br />
          We have a tie-up with the Chirayu Hospital for any special
          intervention needed.
        </p>
      </>
    ),
  },
];
