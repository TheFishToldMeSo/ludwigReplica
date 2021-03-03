//import React to use return component function
import React from "react";
import InstitutionIcon from "../../../common/institutionIcon/institutionIcon";
import "./seenOn.scss";

export default class SeenOn extends React.Component {
  render() {
    return (
      <div className="seenOn">
        <div className="seenOnWrapper">
          <div className="seenOnContent">
            <div className="seenOnHeader">As seen on</div>

            <div className="seenOnButtons">
              <InstitutionIcon name="news-huff" link="https://www.huffingtonpost.it/2016/05/06/ludwig-software-inglese_n_9854736.html"/>
              <InstitutionIcon name="news-wired" link="https://www.wired.it/internet/web/2017/10/04/ludwig-motore-di-ricerca-frasi-in-inglese/"/>
              <InstitutionIcon name="news-vice" link="http://www.electru.de/2017-04-27/endlich-echtes-englisch-ludwig-helps-you/" />
              <InstitutionIcon name="news-tc" link="https://techcrunch.com/2016/08/05/online-linguistic-search-engine-ludwig-helps-get-your-english-on/" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
