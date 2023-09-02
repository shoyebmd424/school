import React from "react";
import "./ConnectWithUs.css";

const ConnectWithUs = () => {
  return (
    <>
      <section id="notice">
        <div className="main-notice">
          <div className="container-fluid border rounded-3">
            <div className="row">
              <div className="col-md-6">
                {/* <iframe
                  title="notice"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.046760740951!2d77.32263421440535!3d28.569925391562033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce1f57ab990a7%3A0x56d77417b7fc889!2sSector%2018%2C%20Noida%2C%20Uttar%20Pradesh%20201301%2C%20India!5e0!3m2!1sen!2sus!4v1621592760323!5m2!1sen!2sus"
                  width="100%"
                  height={450}
                  style={{ border: "6px" }}
                  allowFullScreen
                  loading="lazy"
                /> */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13998.161222825895!2d77.34184696376889!3d28.49835810114146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce19e8c32f577%3A0x68b60825fdd7d2f0!2sSector%20122%2C%20Noida%2C%20Uttar%20Pradesh%20201307%2C%20India!5e0!3m2!1sen!2sus!4v1621592760323!5m2!1sen!2sus"
                  width="600"
                  height="450"
                  style={{ border: "6px" }}
                  allowfullscreen=""
                  loading="lazy">
                </iframe>
              </div>
              <div className="col-md-6">
                <div className="right-section-enquiry">
                  <div className="form">
                    <div className="form-title-sitemap">
                      <h4>Get In Touch</h4>
                    </div>
                    <div className="enquiry-form">
                      <form>
                        <div className="form-group py-2">
                          <input
                            type="text"
                            className="form-control border_radius_none"
                            id="Name"
                            name="Name"
                            placeholder="Full Name"
                          />
                        </div>
                        <div className="form-group py-2">
                          <input
                            type="email"
                            className="form-control border_radius_none"
                            id="Email"
                            name="Email"
                            placeholder="Email"
                          />
                        </div>
                        <div className="form-group py-2">
                          <input
                            type="number"
                            className="form-control border_radius_none"
                            id="ContactNumber"
                            name="ContactNumber"
                            placeholder="Contact Number"
                          />
                        </div>
                        <div className="form-group py-2">
                          <textarea
                            type="text"
                            className="form-control border_radius_none"
                            id="Message"
                            name="Message"
                            placeholder="Your Query"
                            defaultValue={""}
                          />
                        </div>
                        <div className="text-center py-3">
                          <button className="enquiry btn btn-primary px-4">
                            SEND
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ConnectWithUs;
