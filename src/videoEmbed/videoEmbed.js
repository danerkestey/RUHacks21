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
    };
  }

  render() {
    const {classes} = this.props;
    if (this.state.isOpen) {
      return (
        <div className={classes.videoContainer}>
          <AiIcons.AiOutlineArrowRight
            onClick={this.setIsOpen}
            className={classes.closeMenu}
          />
          <YoutubeEmbedComponent embedId="5fN-Ac-KOUc" />

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





}


export default withStyles(styles)(videoEmbedComponent);