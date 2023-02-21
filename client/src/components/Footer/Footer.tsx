import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/footer.css";

const quickLinks = [
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/#",
    display: "Privacy Policy",
  },
  {
    path: "/cars",
    display: "Car Listing",
  },
  {
    path: "/blogs",
    display: "Blog",
  },
  {
    path: "/contact",
    display: "Contact",
  },
];

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4" md="4" sm="12">
            <div className="logo footer_logo">
              <h1>
                <Link to="/home" className="d-flex align-items-center gap-2">
                  <i className="ri-roadster-line"></i>
                  <span>CoDrive</span>
                </Link>
              </h1>
            </div>
            <p className="footer_logo-content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              dolores aliquid, fugit dicta molestiae non molestias, temporibus
              reprehenderit modi similique tempora maiores, cupiditate facilis
              dignissimos asperiores beatae mollitia ducimus! Eos.
            </p>
          </Col>
          <Col lg="2" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer_link-title">Quick Links</h5>
              <ListGroup>
                {quickLinks.map((item, index) => (
                  <ListGroupItem key={index} className="p-0 mt-3 quick_link">
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </div>
          </Col>
          <Col lg="3" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer_link-title mb-4">Head Office</h5>
              <p className="office_info">Singapore</p>
              <p className="office_info">Phone: +65 6666 8888</p>
              <p className="office_info">Email: codrive@gmail.com</p>
              <p className="office_info">Office Time: 10am - 7pm</p>
            </div>
          </Col>
          <Col lg="3" md="4">
            <div className="mb-4">
              <h5 className="footer_link-title">Newsletter</h5>
              <p className="section_description">Subscribe to our newsletter</p>
              <div className="newsletter">
                <input type="email" placeholder="Email" />
                <span>
                  <i className="ri-send-plane-line"></i>
                </span>
              </div>
            </div>
          </Col>
          <Col lg="12">
            <div className="footer_bottom">
              <p className="section_description d-flex align-items-center justify-content-center gap-1 pt-4">
                <i className="ri-copyright-line"></i>Copyright {year}, All
                rights reserved.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
