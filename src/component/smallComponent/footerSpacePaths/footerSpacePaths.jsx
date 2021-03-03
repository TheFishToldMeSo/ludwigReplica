//import React to use return component function
import React from "react";
import { goToMain } from "../../../utils/buttonAction";
import SpecifiedFooterPaths from "../specifiedFooterPaths/specifiedFooterPaths";
import "./footerSpacePaths.scss";

export default class FooterSpacePaths extends React.Component {
  render() {
    return (
      <div className="footerSpacePaths">
        <div className="footerSpacePathsWrapper">
          <SpecifiedFooterPaths
            name="Explore"
            arrayButtons={[
              ["false", "About", "About", goToMain],
              ["false", "Premium", "Premium", goToMain],
              ["false", "Business", "Business", goToMain],
              ["false", "LIA", "LIA Covid-19", goToMain],
            ]}
          />

          <SpecifiedFooterPaths
            name="Learn"
            arrayButtons={[
              ["false", "HTU", "How To Use", goToMain],
              ["false", "Blogwig", "Blogwig", goToMain],
              ["false", "FAQs", "FAQs", goToMain],
              ["false", "Contact", "Contact Us", goToMain],
            ]}
          />
        </div>
      </div>
    );
  }
}
