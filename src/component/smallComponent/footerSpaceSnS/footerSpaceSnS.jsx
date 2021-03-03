//import React to use return component function
import React from "react";
import Button from "../../../common/button/button";
import { ImFacebook } from "react-icons/im";
import { IoLogoTwitter } from "react-icons/io";
import { RiLinkedinFill } from "react-icons/ri";
import { GrYoutube } from "react-icons/gr";
import "./footerSpaceSnS.scss";

export default class FooterSpaceSnS extends React.Component {
  render() {
    return (
      <div className="footerSpaceSnS">
        <div className="footerSpaceSnSWrapper">
          <h3 className="SnSHeader">Follow us</h3>

          <div className="SnSLists">
            <Button
              isIcon="true"
              iconOnly="true"
              icon={<ImFacebook />}
              name="Facebook"
              link="/"
            />
            
            <Button
              isIcon="true"
              iconOnly="true"
              icon={<IoLogoTwitter />}
              name="Twitter"
              link="/"
            />
            
            <Button
              isIcon="true"
              iconOnly="true"
              icon={<RiLinkedinFill />}
              name="Linkedin"
              link="/"
            />
            
            <Button
              isIcon="true"
              iconOnly="true"
              icon={<GrYoutube />}
              name="Youtube"
              link="/"
            />
          </div>
        </div>
      </div>
    );
  }
}
