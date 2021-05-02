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

class SidebarComponent extends React.Component {
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

    if (notes && this.state.isOpen) {
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
            <Button
              aria-controls="customized-menu"
              aria-haspopup="true"
              variant="contained"
              onClick={this.handleClick}
              className={classes.notebookMenuButton}
            >
              My Notes
            </Button>
            <StyledMenu
              id="customized-menu"
              anchorEl={this.state.anchorEl}
              keepMounted
              open={Boolean(this.state.anchorEl)}
              onClose={this.handleClose}
            >
              {/* <List> */}
              {notes.map((_note, _index) => {
                return (
                  <StyledMenuItem>
                    <div key={_index}>
                      <SidebarItemComponent
                        _note={_note}
                        _index={_index}
                        selectedNoteIndex={selectedNoteIndex}
                        selectNote={this.selectNote}
                        deleteNote={this.deleteNote}
                      ></SidebarItemComponent>
                      <Divider></Divider>
                    </div>
                  </StyledMenuItem>
                );
              })}
              {/* </List> */}
            </StyledMenu>
            <Button
              onClick={this.newNoteBtnClick}
              className={classes.newNoteBtn}
            >
              {this.state.addingNote ? "Cancel" : "+ New Note"}
            </Button>
            {this.state.addingNote ? (
              <div>
                <input
                  type="text"
                  className={classes.newNoteInput}
                  placeholder="Enter note title"
                  onKeyUp={(e) => this.updateTitle(e.target.value)}
                ></input>
                <Button
                  className={classes.newNoteSubmitBtn}
                  onClick={this.newNote}
                >
                  Submit Note
                </Button>
              </div>
            ) : null}
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
    } else if (notes && !this.state.isOpen) {
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
  newNoteBtnClick = () => {
    this.setState({ title: null, addingNote: !this.state.addingNote });
  };
  setIsOpen = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  updateTitle = (txt) => {
    this.setState({ title: txt });
  };
  newNote = () => {
    this.props.newNote(this.state.title);
    this.setState({ title: null, addingNote: false });
  };
  selectNote = (n, i) => this.props.selectNote(n, i);
  deleteNote = (note) => this.props.deleteNote(note);

  handleClick = (event) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };
}

export default withStyles(styles)(SidebarComponent);
