import React from "react";
import "./Career.css";
import Layout from "../conponents/Layout";
import Path from "../conponents/Path";

const Career = () => {
  return (
    <Layout>
      <Path path={[{ name: "Home", path: "/" }]} page="Career" />
      <div className="career">
        <div className="row py-5">
          <div className="col-md-8 pt-md-5 px-3">
            <h2 className="headi border-primary ">
              Supportive and Inclusive Culture
            </h2>
            <p className="text-justify">
              At School, we believe that diversity and inclusion are the
              cornerstones of a thriving workplace. We actively cultivate a
              supportive and inclusive culture where every individual's unique
              background, experiences, and perspectives are embraced and
              celebrated. We recognize that fostering a diverse workforce leads
              to innovation and creativity, enabling us to better serve our
              customers and drive business growth. Collaboration and teamwork
              are encouraged, allowing employees to learn from one another and
              leverage their collective strengths. We prioritize open
              communication, where ideas are freely shared and respected. By
              promoting mutual respect and understanding, we create an
              environment where everyone feels valued, heard, and empowered to
              contribute their best work.
            </p>
          </div>
          <div className="col-md-4">
            <img
              src="images\CareerPage\Supportive.jpg"
              alt=""
              className="rounded w-100"
              style={{ borderRadius: "0px 10px 10px 0px" }}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-4  order-2 order-md-1">
            <img
              src="images\CareerPage\Competitive_Compensation.jpg"
              alt=""
              className="rounded w-100"
              style={{ borderRadius: "0px 10px 10px 0px" }}
            />
          </div>
          <div className="col-md-8 pt-md-5 px-3 order-1 order-md-2">
            <h2 className="headi border-primary ">Competitive Compensation</h2>
            <p className="text-justify">
              We believe in recognizing and rewarding the valuable contributions
              of our employees. We understand that competitive compensation is a
              crucial factor in attracting and retaining top talent. That's why
              we offer competitive salaries that align with industry standards
              and reflect the skills, experience, and expertise of our team
              members. We also provide performance-based bonuses and incentives
              to motivate our employees and recognize exceptional achievements.
              These rewards are designed to celebrate individual and team
              successes, fostering a culture of excellence and driving
              continuous improvement. We believe that when employees are fairly
              compensated and acknowledged for their hard work, they are more
              motivated, engaged, and committed to delivering their best
              performance. At School, we strive to create a compensation package
              that not only recognizes employees' contributions but also
              supports their financial well-being and provides a sense of
              fulfillment and satisfaction in their work.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-8 pt-md-5 px-3">
            <h2 className="headi border-primary ">Work-Life Balance</h2>
            <p className="text-justify">
              We recognize that a healthy work-life balance is essential for our
              employees' overall well-being and satisfaction. We provide a range
              of initiatives and policies to support them in achieving this
              balance. Our flexible work hours allow employees to adjust their
              schedules to accommodate personal obligations and optimize their
              productivity. We also offer remote work options, providing the
              flexibility to work from home or any location that suits their
              needs. Additionally, we provide paid time off, including vacation
              days, holidays, and personal days, to encourage employees to take
              time for rest, relaxation, and personal commitments. By promoting
              work-life balance, we aim to foster happier, more engaged
              employees who can effectively manage their personal and
              professional responsibilities, leading to increased job
              satisfaction and overall fulfillment.
            </p>
          </div>
          <div className="col-md-4">
            <img
              src="images\CareerPage\Work_Balance.jpg"
              alt=""
              className="image"
              style={{ borderRadius: "0px 10px 10px 0px" }}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-4 order-2 order-md-1">
            <img
              src="images\CareerPage\opprtunities.jpg"
              alt=""
              className="rounded w-100"
              style={{ borderRadius: "0px 10px 10px 0px" }}
            />
          </div>
          <div className="col-md-8 pt-md-5 px-3  order-1 order-md-2">
            <h2 className=" headi border-primary ">Opportunities for Growth</h2>
            <p className="text-justify">
              We are committed to the growth and development of our employees.
              We believe that investing in their professional development not
              only benefits them individually but also strengthens our
              organization as a whole. We provide a range of opportunities for
              continuous learning and growth. Through our comprehensive training
              programs and workshops, employees have access to industry-specific
              knowledge, technical skills, and leadership development.
              Additionally, we offer mentorship programs where experienced
              professionals guide and support employees in their career
              journeys. We encourage employees to take ownership of their
              development and provide resources and support to help them reach
              their goals. Whether it's through acquiring new skills, expanding
              their knowledge, or taking on challenging projects, we are
              dedicated to empowering our employees to enhance their skills and
              advance their careers within School.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-8 pt-md-5 px-3">
            <h2 className="headi border-primary ">
              Comprehensive Benefits Package
            </h2>
            <p className="text-justify">
              We prioritize the well-being of our employees and understand the
              importance of comprehensive benefits. We offer a range of benefits
              to support our employees' health, financial security, and
              work-life balance. Our comprehensive package includes health
              insurance, covering medical, dental, and vision expenses,
              providing employees and their families with access to quality
              healthcare. We also provide retirement plans, allowing employees
              to save for their future and enjoy a secure retirement. Life
              insurance coverage offers financial protection to employees and
              their loved ones. Additionally, flexible spending accounts enable
              employees to set aside pre-tax dollars for eligible expenses like
              healthcare and dependent care, reducing their taxable income. By
              providing these benefits, we aim to create a supportive and caring
              environment that prioritizes the overall well-being of our
              employees.
            </p>
          </div>
          <div className="col-md-4">
            <img
              src="images\CareerPage\Comprehensive_package.jpg"
              alt=""
              className="image"
              style={{ borderRadius: "0px 10px 10px 0px" }}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-4 order-2 order-md-1">
            <img
              src="images\CareerPage\Fun.jpg"
              alt=""
              className="rounded w-100"
              style={{ borderRadius: "0px 10px 10px 0px" }}
            />
          </div>
          <div className="col-md-8 pt-md-5 px-3 order-1 order-md-2">
            <h2 className="headi border-primary ">
              Fun and Engaging Activities
            </h2>
            <p className="text-justify">
              We believe that a positive and enjoyable work environment is
              essential for fostering a strong sense of community and teamwork.
              We organize regular team-building activities, social events, and
              celebrations to bring our employees together and create
              opportunities for bonding and camaraderie. These activities can
              range from fun outings, sports events, themed parties, to
              team-building exercises that promote collaboration and
              communication. By engaging in these activities, employees have the
              chance to build connections, develop friendships, and strengthen
              working relationships beyond their daily tasks. We understand that
              these moments of shared experiences and enjoyment contribute to a
              more vibrant and cohesive workplace culture, where employees feel
              valued, supported, and connected to their colleagues.
            </p>
          </div>
        </div>
      </div>
      ;
    </Layout>
  );
};

export default Career;
