//import React to use return component function
import React from "react";
import AdDefinition from "../../../common/adDefinition/adDefinition";
import InstitutionUsers from "../../smallComponent/institutionUsers/institutionUsers";
import UserReview from "../../smallComponent/userReview/userReview";
import DownloadPanel from "../../smallComponent/downloadPanel/downloadPanel";
import AdStats from "../../smallComponent/adStats/adStats";
import SeenOn from "../../smallComponent/seenOn/seenOn";
import "./adBar.scss";

export default class AdBar extends React.Component {
  render() {
    return (
      <div className="Ad">
        <AdDefinition className="definition"></AdDefinition>
        <InstitutionUsers className="institutionUsers"></InstitutionUsers>
        <UserReview className="userReview"></UserReview>
        <DownloadPanel className="downloadPanel"></DownloadPanel>
        <AdStats className="adStats"></AdStats>
        <SeenOn className="seenOn"></SeenOn>
      </div>
    );
  }
}
