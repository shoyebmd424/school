import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Layout from "../conponents/Layout";
import Path from "../conponents/Path";

const ContactUs = () => {
  return (
    <Layout>
      <Path path={[{ name: "Home", path: "/" }]} page="Contact us" />
      <div className="bg-black text-white">
        <Container className="">
          <Row className="py-3">
            <Col lg="8">
              <h1 className="display-4 mb-4">
                <b>Contact Me</b>
              </h1>
            </Col>
          </Row>
          <Row className="sec_sp">
            <Col lg="5" className="mb-5">
              <h3 className="">
                Feel free to reach out to us using the contact information
                below:
              </h3>
              <h3 className="color_sec py-4">Get in touch</h3>
              <address>
                <strong>Email:</strong>{" "}
                <a href={`mailto:${"Info@gmail.com"}`}>Info@gmail.com</a>
                <br />
                <br />
                <p>
                  <strong>Phone:</strong> +918920111751
                  <br />
                  <strong>For Any Query:</strong> +918920111751 <br />
                  <strong>For Business Query:</strong>+91 9811658485 <br />
                </p>
              </address>
              <p>
                <strong>Address: </strong>parthala khanjarpur sec 122 Noida U.P.
                201301 (INDIA)
              </p>
            </Col>

            <Col lg="7" className="d-flex align-items-center">
              <form className="contact__form w-100 ">
                <Row>
                  <Col lg="6" className="form-group py-3">
                    <input
                      className="form-control"
                      id="name"
                      name="name"
                      placeholder="Name"
                      type="text"
                      required
                    />
                  </Col>
                  <Col lg="6" className="form-group py-3">
                    <input
                      className="form-control rounded-0"
                      id="email"
                      name="email"
                      placeholder="Email"
                      type="email"
                      required
                    />
                  </Col>
                </Row>
                <textarea
                  className="form-control rounded-0"
                  id="message"
                  name="message"
                  placeholder="Message"
                  rows="5"
                  required
                ></textarea>
                <br />
                <Row>
                  <Col lg="12" className="form-group text-center">
                    <button className="btn btn-primary px-3 py-2" type="submit">
                      <b>Send</b>
                    </button>
                  </Col>
                </Row>
              </form>
            </Col>
            <h3 className="text-center py-5 ">
              <strong>Thanks For Visiting Us!!!</strong>
            </h3>
          </Row>
        </Container>
      </div>
    </Layout>
  );
};

export default ContactUs;
