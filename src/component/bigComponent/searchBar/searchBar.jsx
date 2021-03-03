//import React to use return component function
import React from "react";
import SearchBox from "../../../common/searchBox/searchBox";
import Logo from "../../../common/logo/logo";
import Button from "../../../common/button/button";
import { BsDownload } from "react-icons/bs";
import { download } from "../../../utils/buttonAction";
import { BiBadgeCheck } from "react-icons/bi";
import { goPremium } from "../../../utils/buttonAction";
import { RiDoorOpenLine } from "react-icons/ri";
import { signUp } from "../../../utils/buttonAction";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { popUpOptions } from "../../../utils/buttonAction";
import "./searchBar.scss";

export default class SearchBar extends React.Component {
  render() {
    return (
      <div className="searchArea">
        <div className="searchAreaWrapper">
          <nav className="header">
            <div className="logoWraper">
              <Logo name="ludwigMain" title="ludwig.guru" />
              <div className="additionalLogo">
                {" "}
                <span class="text1">/</span>
                <span class="text2">Write Better English!</span>
              </div>
            </div>

            <nav className="searchButtonLists">
              <div className="uncoloredButtons">
                <Button
                  isIcon="false"
                  name="Download"
                  content="Download App"
                  onclick={download}
                  icon={<BsDownload />}
                />
                <Button
                  isIcon="false"
                  name="Premium"
                  content="Premium"
                  onclick={goPremium}
                  icon={<BiBadgeCheck />}
                />{" "}
              </div>

              <div className="coloredButtons">
                <Button
                  isIcon="false"
                  name="Signup"
                  content="Free Signup"
                  onclick={signUp}
                  icon={<RiDoorOpenLine />}
                />
              </div>

              <div className="optionButtons">
                <Button
                  iconOnly="true"
                  isIcon="true"
                  name="Options"
                  onclick={popUpOptions}
                  icon={<HiOutlineDotsVertical />}
                />
              </div>
            </nav>
          </nav>

          <div className="bottomPart">
            <SearchBox className="searchBox" />
          </div>
        </div>
      </div>
    );
  }
}
