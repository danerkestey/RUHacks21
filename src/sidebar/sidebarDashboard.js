import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import List from "@material-ui/core/List";
import { Link } from "react-router-dom";
import { Divider, Button } from "@material-ui/core";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import SidebarItemComponent from "../sidebaritem/sidebaritem";
//import "./sidebar.css";
import { StyledMenu, StyledMenuItem } from "./menuItems";
import { sidebarContext } from "../helpers";
import { ToggleSidebarCancel, ToggleSidebarOpen } from "../toggleSidebar";

class SidebarComponentDashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      addingNote: false,
      title: null,
      isOpen: false,
      anchorEl: null,
      sidebar: "6rem",
      setSidebarValue: this.setSidebarValue,
    };
  }

  setSidebarValue = (sidebar) => {
    this.setState({ isOpen: !this.state.isOpen });
    this.setState({ sidebar });
    console.log(this.state.sidebar);
  };

  render() {
    const { notes, classes, selectedNoteIndex } = this.props;

    if (this.state.isOpen) {
      return (
        <sidebarContext.Provider value={this.state}>
          <div
            className={classes.sidebarContainer1}
            // style={{ width: this.state.sidebar }}
          >
            <ToggleSidebarOpen />
            <Link to="/dashboard" style={{ textDecoration: "none" }}>
              <Button
                aria-controls="customized-menu"
                aria-haspopup="true"
                variant="contained"
                className={classes.notebookMenuButton}
              >
                Dashboard
              </Button>
            </Link>
            <Link to="/" style={{ textDecoration: "none" }}>
              <Button
                aria-controls="customized-menu"
                aria-haspopup="true"
                variant="contained"
                onClick={this.handleClick}
                className={classes.notebookMenuButton}
              >
                My Notes
              </Button>
            </Link>

            <Link to="/update-profile" style={{ textDecoration: "none" }}>
              <Button
                aria-controls="customized-menu"
                aria-haspopup="true"
                variant="contained"
                className={classes.notebookMenuButton}
              >
                Update Profile
              </Button>
            </Link>
          </div>
        </sidebarContext.Provider>
      );
    } else if (!this.state.isOpen) {
      return (
        <sidebarContext.Provider value={this.state}>
          <div
            className={classes.sidebarContainer2}
            // style={{ width: this.state.sidebar }}
          >
            <ToggleSidebarCancel />
          </div>
        </sidebarContext.Provider>
      );
    } else {
      return <div></div>;
    }
  }
}

export default withStyles(styles)(SidebarComponentDashboard);
