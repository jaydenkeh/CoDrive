import "../../styles/booking-form.css";
import { Form, FormGroup } from "reactstrap";

const BookingForm = () => {
  const handleSubmit = (event: any) => {
    event.preventDefault();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup className="booking_form d-inline-block me-4 mb-4">
        <input type="text" placeholder="First Name" />
      </FormGroup>
      <FormGroup className="booking_form d-inline-block ms-1 mb-4">
        <input type="text" placeholder="Last Name" />
      </FormGroup>
      <FormGroup className="booking_form d-inline-block me-4 mb-4">
        <input type="email" placeholder="Email" />
      </FormGroup>
      <FormGroup className="booking_form d-inline-block ms-1 mb-4">
        <input type="number" placeholder="Mobile Number" />
      </FormGroup>
      <FormGroup className="booking_form d-inline-block me-4 mb-4">
        <input type="text" placeholder="From Address" />
      </FormGroup>
      <FormGroup className="booking_form d-inline-block ms-1 mb-4">
        <input type="text" placeholder="To Address" />
      </FormGroup>
      <FormGroup className="booking_form d-inline-block me-4 mb-4">
        <select name="" id="">
          <option value="1 person">1 Person</option>
          <option value="2 person">2 Person</option>
          <option value="3 person">3 Person</option>
          <option value="4 person">4 Person</option>
          <option value="5+ person">5+ Person</option>
        </select>
      </FormGroup>
      <FormGroup className="booking_form d-inline-block me-4 mb-4">
        <input type="date" placeholder="Journey Date" />
      </FormGroup>
      <FormGroup className="booking_form d-inline-block ms-1 mb-4">
        <input type="time" placeholder="Journey Time" className="time_picker" />
      </FormGroup>
    </Form>
  );
};

export default BookingForm;
