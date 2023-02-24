import { Link } from "react-router-dom";
import { Container, Col, Row, Form, FormGroup } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import "../styles/contact.css";

const socialLinks = [
  {
    url: "#",
    icon: "ri-facebook-line",
  },
  {
    url: "#",
    icon: "ri-instagram-line",
  },
  {
    url: "#",
    icon: "ri-linkedin-line",
  },
  {
    url: "#",
    icon: "ri-twitter-line",
  },
];

const Contact = () => {
  return (
    <>
      <Helmet title="Contact">
        <CommonSection title="Contact" />
        <section>
          <Container>
            <Row>
              <Col lg="7" md="7">
                <h6 className="fw-bold mb-4">Get In Touch</h6>
                <Form>
                  <FormGroup className="contact_form">
                    <input placeholder="Your Name" type="text" />
                  </FormGroup>
                  <FormGroup className="contact_form">
                    <input placeholder="Email" type="email" />
                  </FormGroup>
                  <button className="btn contact_btn" type="submit">
                    Send
                  </button>
                </Form>
              </Col>
              <Col lg="5" md="5">
                <div className="contact_info">
                  <h6 className="fw-bold">Contact Information</h6>
                  <p className="section_description mb-0">Singapore</p>
                  <div className="d-flex align-items-center gap-2">
                    <h6 className="mb-0 fs-6">Phone:</h6>
                    <p className="sectin_description">+65 6666 8888</p>
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <h6 className="mb-0 fs-6">Email:</h6>
                    <p className="sectin_description">codrive@gmail.com</p>
                  </div>
                  <h6 className="fw-bold mt-4">Follow Us</h6>
                  <div className="d-flex align-items-center gap-4 mt-3">
                    {socialLinks.map((item, index) => (
                      <Link
                        to={item.url}
                        key={index}
                        className="social_link-icon"
                      >
                        <i className={item.icon}></i>
                      </Link>
                    ))}
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </Helmet>
    </>
  );
};

export default Contact;
