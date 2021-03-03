//import React to use return component function
import React from "react";
import Button from "../../../common/button/button";
import { RiDoorOpenLine } from "react-icons/ri";
import { signUp } from "../../../utils/buttonAction";
import { BsDownload } from "react-icons/bs";
import { download } from "../../../utils/buttonAction";
import Logo from "../../../common/logo/logo";
import "./footerSpaceButtons.scss";

export default class FooterSpaceButtons extends React.Component {
  render() {
    return (
      <div className="footerSpaceButtons">
        <div className="footerHiddenSpace1"/>

        <div className="footerSpaceButtonsWrapper">
          <Logo className="footerLogo"/>

          <div className="footerLogoBundle">
            <Button
              isIcon="false"
              name="Signup footer"
              content="Free Signup"
              onclick={signUp}
              icon={<RiDoorOpenLine />}
            />

            <Button
              isIcon="false"
              name="Download footer"
              content="Download App"
              onclick={download}
              icon={<BsDownload />}
            />
          </div>

          
        <div className="footerHiddenSpace2"/>
        </div>
      </div>
    );
  }
}
