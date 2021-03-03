//import React to use return component function
import React from "react";
import "./exampleChunks.scss";
import { IoIosSearch } from "react-icons/io";

export default class ExampleChunks extends React.Component {
  render() {
    return (
      <div className="chunks">
        {this.props.children}
        <div className="chunkWrapper">
          <div className="situation">
            <strong>{this.props.firstWord}</strong> {this.props.situationGiven}
          </div>

          <div className="solution">
            <a href="/" className="exampleLink">
              <span className="searchIcon">
                <IoIosSearch />
              </span>

              <span>
                {this.props.beforeHighlight}
                {this.props.hasHighlight === "true" ? (
                  <span id="highlighted">{this.props.highlight}</span>
                ) : null}

                {this.props.afterHighlight}
              </span>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
