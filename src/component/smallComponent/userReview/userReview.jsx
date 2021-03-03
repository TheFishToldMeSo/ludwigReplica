//import React to use return component function
import React from "react";
import SpecifiedReview from "../../../common/specifiedReview/specifiedReview";
import "./userReview.scss";

export default class UserReview extends React.Component {
  render() {
    return (
      <div className="userReview">
        <div className="reviewWrapper">
          <div className="reviewHeader">
            Loved by hundreds of thousands of users
          </div>

          <div className="reviewsList">
            <SpecifiedReview
              contentInfo="Awesome tool! I started using it one year ago and I never had to look for another app"
              reviewersName="ha"
              reviewersFullName="Ha Thuy Vy"
              reviewersEducation="MA of Applied Linguistic, Maquarie University, Australia"
              reviewersJob="English teacher at Nói Tiéng Anh Chuån, Vietnam"
            />

            <SpecifiedReview
              contentInfo="Ludwig does not simply clarify my doubts with English writing, it enlightens my writing with new possibilities"
              reviewersName="iv"
              reviewersFullName="Simone Ivan Conte"
              reviewersEducation="Software Engineer at Adobe, UK"
              reviewersJob="PhDs in Computer Science, University of St Andrews, UK"
            />

            <SpecifiedReview
              contentInfo="Thanks to Ludwig my first paper got accepted! The editor wrote me that my manuscript was well-written"
              reviewersName="li"
              reviewersFullName="Listya Utami K."
              reviewersEducation="PhD Student in Biology, Bandung Institute of Technology, Indonesia"
            />
          </div>
        </div>
      </div>
    );
  }
}
