//import React to use return component function
import React from "react";
import "./button.scss";

export default class Button extends React.Component {
  render() {
    return (
      <div className={`button ${this.props.name}`} onClick={this.props.onclick}>
        <a
          className="linkPage"
          href={this.props.link}
          target="_blank"
          rel="noreferrer"
        >
          <div className="buttonContentWrapper">
            <div className="buttonContent">
              <div className="iconWrapper">
                {this.props.isIcon === "true" ? (
                  <div className="icon" title="icon" alt="icon">
                    {this.props.icon}
                  </div>
                ) : null}
              </div>

              {this.props.iconOnly !== "true" ? (
                <div class="textContent">{this.props.content}</div>
              ) : null}
            </div>
          </div>
        </a>
      </div>
    );
  }
}
