import ProfilePic from "../Assets/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";

export default function Testimonials() {
  return (
    <div className="work-section-container">
      <div className="work-section-top">
        <p className="primary-subheading">Testimonials</p>
        <h1 className="primary-heading">What They Are Saying</h1>
        <p className="primary-text">
          Lorem ipsum dolor si amet consectetur. Non tincidunt magna non et
          elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
        </p>
      </div>

      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="" />
        <p>
          Lorem ipsum dolor si amet consectetur. Non tincidunt magna non elit.
          Dolor turpis molestie dui magnis facilisis at fringilla quam.
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>

        <h2>John Doe</h2>
      </div>
    </div>
  );
}
