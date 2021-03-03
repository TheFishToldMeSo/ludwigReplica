//import React to use return component function
import React from "react";
import Button from "../../../common/button/button";
import {BsChevronDown} from "react-icons/bs";
import "./footerSpaceCredits.scss";

export default class FooterSpaceCredits extends React.Component {
  render() {
    return (
      <div className="footerSpaceCredits">
        <div className="footerCreditsButtons">
          <div className="creditsButtonLists">
            <Button
              isIcon="false"
              name="Terms"
              content="Terms"
            />
            <Button
              isIcon="false"
              name="Privacy"
              content="Privacy"
            />
            <Button
              isIcon="false"
              name="Cookies"
              content="Cookies"
            />
          </div>

          <div className="languagesWrapper">
            <div class="anotherLanguageWrapper">
              <div class="anotherLanguageWrapper2">
                <label for="lang-select" class="langSelectLabel">
                  <span></span>
                </label>
                <select id="lang-select" class="langDropDown">
                  <option value="vi" class="langVi">
                    Vietnamese
                  </option>
                  <option value="en" class="langEn">
                    English
                  </option>
                </select>
                <span class="dropDownIcon">
                  <span
                    title="chevronDownOutline"
                    alt="chevronDownOutline"
                    class="dropDownIconWrapper"
                  >
                    <BsChevronDown/>
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div class="footerCreditsContent">
          <div class="contentWrapper">
            <div class="anotherContentWrapper">
              © 2014-2021 Ludwig S.R.L.S. P.IVA 06333200829 REA PA-314445
            </div>
          </div>
        </div>
      </div>
    );
  }
}
