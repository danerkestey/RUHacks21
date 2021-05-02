import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import { Divider, Button } from "@material-ui/core";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import YoutubeEmbedComponent from "./YoutubeEmbed";
import "./YoutubeEmbed.css";

/*
1. Make a state flag for isOpenSearch
This is to tell if the search bar is open or not

2. Return a component with an input box for the url

3. Make a function for onChange to setState to the url
  this.setState({ url : ""})

  <input
    className={classes.titleInput}
    placeholder="Enter URL"
    style={{ paddingLeft: sidebar }}
    value={this.state.url ? this.state.url : ""}
    onChange={(e) => this.setState({ url : e.target.value })}
  ></input>


4. Pass this.state.url to Youtube Embed
*/

class videoEmbedComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
      isOpenVideo: false,
      isOpenSearch: false,
      url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    };
  }

  render() {
    const { classes } = this.props;
    if (this.state.isOpenSearch) {
    }
    if (this.state.isOpen) {
      return (
        <div className={classes.videoContainer}>
          <AiIcons.AiOutlineArrowRight
            onClick={this.setIsOpen}
            className={classes.closeMenu}
          />
          <YoutubeEmbedComponent url={this.state.url} />
          <div>
            <input
              type="text"
              className={classes.newVideoInput}
              placeholder="Enter Youtube Video"
              value={this.state.url ? this.state.url : ""}
              onChange={(e) => this.setState({ url: e.target.value })}
            ></input>
            <Button
              className={classes.newVideoSubmitBtn}
              onClick={this.newVideo}
            >
              Change Video
            </Button>
          </div>
        </div>
      );
    } else if (!this.state.isOpen) {
      return (
        <div className={classes.videoContainer}>
          <AiIcons.AiOutlineArrowLeft
            onClick={this.setIsOpen}
            className={classes.openMenu}
          />
        </div>
      );
    }
  }

  setIsOpen = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  newVideo = () => {
    // this.setState({ url:  });
  };
}

export default withStyles(styles)(videoEmbedComponent);
