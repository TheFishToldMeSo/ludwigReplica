//import React to use return component function
import React from "react";
import SpecifiedAdStats from "../../../common/specifiedAdStats/specifiedAdStats";
import "./adStats.scss";

export default class AdStats extends React.Component {
  render() {
    return (
      <div className="adStats">
        <div className="adStatsWrapper">
          <SpecifiedAdStats name="drawn-quill" content1="15+ " content2="MILLION " colorText="red" content3="unique users "/>
          <SpecifiedAdStats name="drawn-world" content1="200 " content3="Countries "/>
          <SpecifiedAdStats name="drawn-gog-nui" content1="+200 "  content2="MILLION " colorText="blue" content3="Great English Sentences "/>
        </div>
      </div>
    );
  }
}
