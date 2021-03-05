//import React to use return component function
import React from "react";
import InstitutionIcon from "../../../common/institutionIcon/institutionIcon";
import IMGSS from "../../../assets/img/gglplay.png";
import "./footerSpaceGgPl.scss";

export default class FooterSpaceGglP extends React.Component {
  render() {
    return (
      <div className="footerSpaceGgPl">
        <div className="footerSpaceGgPlWrapper">
          <div className="ggPlHeader">
            Keep Ludwig handy on your smartphone,{" "}
            <strong>download the app!</strong>
          </div>

          <div className="ggPlContent">
            <InstitutionIcon
              selfSrc="true"
              name="GooglePlay"
              link="/"
              imgSrc={IMGSS}
            />
            <div class="ggPlContext">In-App purchases</div>
          </div>
        </div>
      </div>
    );
  }
}
