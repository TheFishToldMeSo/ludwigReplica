//import React to use return component function
import React from "react";
import Button from "../../../common/button/button";
import { download } from "../../../utils/buttonAction";
import "./downloadPanel.scss";
//a single item will have 2 wrapper classes
//a panel of items will have 3 wrapper classes
//after 3 flex wrapper class, add anotherWrapper if contains complex components (not header, text,...)
export default class DownloadPanel extends React.Component {
  render() {
    return (
      <div className="downloadPanel">
        <div className="downloadWrapper">
          <div className="downloadContent">
            <div className="downloadDemoWrapper">
              <img
                loading="lazy"
                src="https://cdn.ludwig.guru/tour-search-select-text-arrow-win-nui.png"
                srcset="https://cdn.ludwig.guru/tour-search-select-text-arrow-win-nui.png 1x, https://cdn.ludwig.guru/tour-search-select-text-arrow-win-nui@2x.png 2x"
                alt="Select Text"
                title="Select Text"
                crossorigin="anonymous"
              />
            </div>

            <div className="downloadTextWrapper">
              <h2 class="downloadHeader">
                Have Ludwig at your fingertips anywhere you write
              </h2>
              <h4 class="downloadTextContent">
                Select a piece of text and use the shortcut
              </h4>

              <div class="downloadWinButton">
                <Button
                  isIcon="false"
                  name="WinDownload"
                  content="DOWNLOAD FOR Win"
                  onclick={download}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
