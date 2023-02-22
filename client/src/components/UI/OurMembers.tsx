import "../../styles/our-member.css";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import ava01 from "../../assets/all-images/ava-1.jpg";
const ourMembers = [
  {
    name: "Jayden Keh",
    experience: "4 years of experience",
    linkedInUrl: "#",
    imgUrl: ava01,
  },
];

const OurMembers = () => {
  return (
    <>
      {ourMembers.map((item, index) => (
        <Col lg="3" md="3" sm="4" xs="6" key={index} className="mb-4">
          <div className="single_member">
            <div className="single_member-img">
              <img src={item.imgUrl} alt="" className="w-100" />
              <div className="single_member-social">
                <Link to={item.linkedInUrl}>
                  <i className="ri-linkedin-line"></i>
                </Link>
              </div>
            </div>
            <h6 className="text-center mb-0 mt-3">{item.name}</h6>
            <p className="section_description text-lg-center">
              {item.experience}
            </p>
          </div>
        </Col>
      ))}
      ;
    </>
  );
};

export default OurMembers;
