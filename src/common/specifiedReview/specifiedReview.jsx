//import React to use return component function
import React from "react";
import "./specifiedReview.scss";

export default class SpecifiedReview extends React.Component {
  render() {
    return (
      <div className="specifiedReview">
        <div className="reviewWrapper">
          <div className="reviewContentWrapper">
            <div className="reviewContent">
              <i></i>
              <span>{this.props.contentInfo}</span>
            </div>
          </div>

          <div className="reviewersDetail">
            <div className="reviewersPfp">
              <img
                loading="lazy"
                src={`https://cdn.ludwig.guru/quote-${this.props.reviewersName}.png`}
                srcset={`https://cdn.ludwig.guru/quote-${this.props.reviewersName}.png 1x, https://cdn.ludwig.guru/quote-${this.props.reviewersName}@2x.png 2x`}
                alt="Quote"
                title="Quote"
                crossorigin="anonymous"
              ></img>
            </div>

            <div className="reviewersInfo">
              <p>{this.props.reviewersFullName}</p>
              <small>
                {this.props.reviewersEducation}
                <br />
                {this.props.reviewersJob}
              </small>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
