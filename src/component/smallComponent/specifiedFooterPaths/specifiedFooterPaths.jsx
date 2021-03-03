//import React to use return component function
import React from "react";
import Button from "../../../common/button/button";
import "./specifiedFooterPaths.scss";

export default class SpecifiedFooterPaths extends React.Component {
  render() {
    return (
      <div className="specifiedFooterPaths">
        <div className="specifiedFooterPathsWrapper">
          <h3 className="pathHeader">{this.props.name}</h3>

          <div className="pathsLists">
            {this.props.arrayButtons.map((x) => (
              <Button
                isIcon={x[0]}
                name={x[1]}
                content={x[2]}
                onclick={x[3]}
                icon={x[4]}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
