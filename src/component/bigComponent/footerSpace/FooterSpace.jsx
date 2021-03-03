//import React to use return component function
import React from "react";
import FooterSpaceButtons from "../../smallComponent/footerSpaceButtons/footerSpaceButtons";
import FooterSpacePaths from "../../smallComponent/footerSpacePaths/footerSpacePaths";
import FooterSpaceSnS from "../../smallComponent/footerSpaceSnS/footerSpaceSnS";
import FooterSpaceGgPl from "../../smallComponent/footerSpaceGglP/footerSpaceGglP";
import FooterSpaceCredits from "../../smallComponent/footerSpaceCredits/footerSpaceCredits";
import "./footerSpace.scss";

export default class FooterSpace extends React.Component {
  render() {
    return (
      <div className="footerSpace">
        <footer className="footerSpaceWrapper">
          <FooterSpaceButtons/>
          <FooterSpacePaths/>
          <FooterSpaceSnS/>
          <FooterSpaceGgPl/>
          <FooterSpaceCredits/>
        </footer>
      </div>
    );
  }
}
