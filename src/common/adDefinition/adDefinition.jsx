//import React to use return component function
import React from "react";
import "./adDefinition.scss";

export default class AdDefinition extends React.Component {
  render() {
    return (
      <div className="adDefinition">
        <secion className="adDefinitionWrapper">
          <div className="definitionText">
            <div className="textHeader">What is Lugwid?</div>
            <div className="textContent">
              Ludwig is the first sentence search engine that helps you write
              better English by giving you contextualized examples taken from
              reliable sources.
            </div>
          </div>

          <div className="definitionVideo">
            <div className="videoWrapper">
              <div className="videoBorder">
                <iframe title="advertise Youtube Video"
                  width="100%"
                  height="244"
                  src="https://www.youtube.com/embed/w0vNe0E76Vo"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
        </secion>
      </div>
    );
  }
}
