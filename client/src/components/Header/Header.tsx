import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header_top">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6">
              <div className="header_top_left">
                <span>Need Help?</span>
                <span className="header_top_help">
                  <i className="ri-phone-fill"></i> +65 6666 8888
                </span>
              </div>
            </Col>
            <Col lg="6" md="6" sm="6">
              <div
                className="header_top_right
                d-flex
                align-items-center
                justify-content-end
                gap-3"
              >
                <Link to="#" className="d-flex align-items-center gap-1">
                  <i className="ri-login-box-line"></i>Login
                </Link>
                <Link to="#" className="d-flex align-items-center gap-1">
                  <i className="ri-user-3-line"></i>Register
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </header>
  );
};

export default Header;
