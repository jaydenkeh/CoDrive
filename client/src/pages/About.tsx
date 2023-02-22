import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import AboutSection from "../components/UI/AboutSection";
import { Container, Row, Col } from "reactstrap";
import driveImg from "../assets/all-images/drive.jpg";
import OurMembers from "../components/UI/OurMembers";
import "../styles/about.css";

const About = () => {
  return (
    <Helmet title="About">
      <CommonSection title="About Us" />
      <AboutSection aboutClass="aboutPage" />
      <section className="about_page-section">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12">
              <div className="about_page-img">
                <img src={driveImg} alt="" className="w-100 rounded-3" />
              </div>
            </Col>
            <Col lg="6" md="6" sm="12">
              <div className="about_page-content">
                <h2 className="section_title">
                  We are Committed To Provide Safe Ride Solutions
                </h2>
                <p className="section_description">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Saepe sint natus ducimus dolorem. Enim consectetur ducimus
                  architecto sapiente doloremque doloribus, recusandae quos
                  eaque eius impedit? Deserunt eos est ipsam soluta.
                </p>
                <p className="section_description">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Saepe sint natus ducimus dolorem. Enim consectetur ducimus
                  architecto sapiente doloremque doloribus, recusandae quos
                  eaque eius impedit? Deserunt eos est ipsam soluta.
                </p>
                <div className="d-flex align-items-center gap-3 mt-4">
                  <span className="fs-4">
                    <i className="ri-phone-line"></i>
                  </span>
                  <div>
                    <h6 className="section_subtitle">Need Any Help?</h6>
                    <h4>+65 6666 8888</h4>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb=5 text-center">
              <h6 className="section_subtitle">Leadership</h6>
              <h2 className="section_title">Our Members</h2>
            </Col>
            <OurMembers />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default About;
