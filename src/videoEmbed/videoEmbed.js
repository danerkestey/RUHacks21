import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import { Divider, Button } from "@material-ui/core";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import YoutubeEmbedComponent from "./YoutubeEmbed";
import "./YoutubeEmbed.css";

class videoEmbedComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
      isOpenVideo: false,
      isOpenSearch: false,
      url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      urlTemp: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    };
  }

  convert_youtube(input) {
    var pattern = /(?:http?s?:\/\/)?(?:www\.)?(?:youtube\.com|youtu\.be)\/(?:watch\?v=)?(\S+)/g;
    if (pattern.test(input)) {
      var replacement = "http://www.youtube.com/embed/$1";
      var input = input.replace(pattern, replacement);
      // For start time, turn get param & into ?
      var input = input.replace("&amp;t=", "?t=");
    }
    return input;
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
          <div className="video-responsive">
            <iframe
              width="100%"
              height="100%"
              src={this.state.url}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded youtube"
            />
          </div>{" "}
          <div>
            <input
              type="text"
              className={classes.newVideoInput}
              placeholder="Enter Youtube Video"
              value={this.state.urlTemp ? this.state.urlTemp : ""}
              onChange={(e) => this.setState({ urlTemp: e.target.value })}
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
    let val = this.convert_youtube(this.state.urlTemp);
    console.log(val);
    this.setState({ url: val });
  };
}

export default withStyles(styles)(videoEmbedComponent);
