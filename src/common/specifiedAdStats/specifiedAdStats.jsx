//import React to use return component function
import React from "react";
import "./specifiedAdStats.scss";

export default class SpecifiedAdStats extends React.Component {
  render() {
    return (
      <div className="specifiedAdStats">
        <img
          loading="lazy"
          src={`https://cdn.ludwig.guru/${this.props.name}.png`}
          srcset={`https://cdn.ludwig.guru/${this.props.name}.png 1x, https://cdn.ludwig.guru/${this.props.name}@2x.png 2x`}
          alt={this.props.name}
          title={this.props.name}
          crossorigin="anonymous"
          width="100px"
        />

        <p className="content1">
          {this.props.content1}
          <small className={`content2 ${this.props.colorText}`}>{this.props.content2}</small>
        </p>
        <small className="content3">{this.props.content3}</small>
      </div>
    );
  }
}
