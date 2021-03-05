//import React to use return component function
import React from "react";
import "./institutionIcon.scss";

export default class InstitutionIcon extends React.Component {
  render() {
    return (
      <div className={`institutionIcon ${this.props.name}`}>
        <a rel="noreferrer" target="_blank" href={this.props.link}>
          <img
            loading="lazy"
            
            src={(this.props.selfSrc !== "true") ? (`https://cdn.ludwig.guru/${this.props.name}.png`) : this.props.imgSrc}
            
            srcset={(this.props.selfSrc !== "true") ? (`https://cdn.ludwig.guru/${this.props.name}.png 1x, https://cdn.ludwig.guru/${this.props.name}@2x.png 2x`) : this.props.imgSrc}
            
            alt={this.props.name}
            title={this.props.name}
            crossorigin="anonymous"
          />
        </a>
      </div>
    );
  }
}
