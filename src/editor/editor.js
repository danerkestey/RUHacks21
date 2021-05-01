/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-undef */
import React from "react";
import ReactQuill from "react-quill";
import debounce, { sideBarValues } from "../helpers";
import BorderColorIcon from "@material-ui/icons/BorderColor";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import VideoEmbedComponent from "../videoEmbed/videoEmbed";
import { sidebarContext } from "../helpers";
//import "react-quill/dist/quill.snow.css";
import "../useSettings";
import "./editor.css";

class EditorComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      text: "",
      title: "",
      id: "",
    };
  }

  componentDidMount = () => {
    this.setState({
      text: this.props.selectedNote.body,
      title: this.props.selectedNote.title,
      id: this.props.selectedNote.id,
    });
  };

  componentDidUpdate = () => {
    if (this.props.selectedNote.id !== this.state.id) {
      this.setState({
        text: this.props.selectedNote.body,
        title: this.props.selectedNote.title,
        id: this.props.selectedNote.id,
      });
    }
  };

  render() {
    const { classes } = this.props;
<<<<<<< Updated upstream
    const { settings, saveSettings } = useSettings();

=======
    let sideBarValue = this.context;
>>>>>>> Stashed changes
    return (
      <div
        className={classes.editorContainer}
        style={{
          paddingLeft: sideBarValue.paddingLeft,
        }}
      >
        {/* <BorderColorIcon className={classes.editIcon}></BorderColorIcon> */}
        <input
          className={classes.titleInput}
          placeholder="Doc Title"
          // style={{fontFamily.}}
          value={this.state.title ? this.state.title : ""}
          onChange={(e) => this.updateTitle(e.target.value)}
          style={{
            paddingLeft: sideBarValue.paddingLeft,
          }}
        ></input>
        <VideoEmbedComponent />
        <ReactQuill
          borderColor="#FFF4E3"
          theme="snow"
          value={this.state.text}
          onChange={this.updateBody}
          placeholder="Compose an epic..."
          style={{
            backgroundColor: "#FFF4E3",
            paddingLeft: sideBarValue.paddingLeft,
            borderColor: "#FFF4E3",
          }}
        />
      </div>
    );
  }
  updateBody = async (val) => {
    await this.setState({ text: val });
    this.update();
  };
  updateTitle = async (txt) => {
    await this.setState({ title: txt });
    this.update();
  };
  update = debounce(() => {
    this.props.noteUpdate(this.state.id, {
      title: this.state.title,
      body: this.state.text,
    });
  }, 1500);
}

EditorComponent.contextType = sidebarContext;

export default withStyles(styles)(EditorComponent);
