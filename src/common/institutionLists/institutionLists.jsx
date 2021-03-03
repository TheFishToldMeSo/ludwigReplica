//import React to use return component function
import React from "react";
import InstitutionIcon from "../institutionIcon/institutionIcon";
import "./institutionLists.scss";

export default class InstitutionLists extends React.Component {
  render() {
    return (
      <div className="institutionLists">
        <div className="institutionIconList">
          <InstitutionIcon name="uni-mit" />
          <InstitutionIcon name="uni-stanford" />
          <InstitutionIcon name="uni-harvard" />
          <InstitutionIcon name="uni-anu" />
          <InstitutionIcon name="uni-nan" />
          <InstitutionIcon name="uni-ox" />
        </div>
      </div>
    );
  }
}
