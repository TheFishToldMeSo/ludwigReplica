//import React to use return component function
import React from "react";
import InstitutionLists from "../../../common/institutionLists/institutionLists";
import "./institutionUsers.scss";

export default class InstitutionUsers extends React.Component {
  render() {
    return (
      <div className="institutionUsers">
        <div className="institutionWrapper">
          <div className="institutionContent">
            <div className="institutionHeader">
              Used in great institutions all around the world
            </div>

            <InstitutionLists/>
          </div>
        </div>
      </div>
    );
  }
}
