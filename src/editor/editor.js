import React from "react";
import ReactQuill from "react-quill";
import debounce from "../helpers";

import BorderColorIcon from "@material-ui/icons/BorderColor";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import VideoEmbedComponent from "../videoEmbed/videoEmbed";
import { sidebarContext } from "../helpers";
//import "react-quill/dist/quill.snow.css";
import "./editor.css";

class EditorComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      text: "",
      title: "",
      id: "",
      sidebar: "6rem",
      setSidebarValue: this.setSidebarValue,
    };
    this.modules = {
			toolbar: [
		      [{ 'font': [] }],
		      [{ 'size': ['small', false, 'large', 'huge'] }],
		      ['bold', 'italic', 'underline'],
		      [{'list': 'ordered'}, {'list': 'bullet'}],
		      [{ 'align': [] }],
		      [{ 'color': [] }, { 'background': [] }],
		      ['clean']
		    ]
		};
		this.formats = [
      'font',
      'size',
      'bold', 'italic', 'underline',
      'list', 'bullet',
      'align',
      'color', 'background'
    ];
  }

  setSidebarValue = (sidebar) => {
    this.setState({ sidebar });
  };

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

    return (
      <sidebarContext.Consumer>
        {({ sidebar, setSidebarValue }) => (
          <div
            className={classes.editorContainer}
            style={{ paddingLeft: sidebar }}
          >
            <input
              className={classes.titleInput}
              placeholder="Doc Title"
              style={{ paddingLeft: sidebar }}
              value={this.state.title ? this.state.title : ""}
              onChange={(e) => this.updateTitle(e.target.value)}
            ></input>
            <VideoEmbedComponent 
              style={{
                zIndex: "1000",
              }}
            />
            <ReactQuill
              borderColor="#FFF4E3"
              theme="snow"
              modules={this.modules}
              formats={this.formats}
              value={this.state.text}
              onChange={this.updateBody}
              placeholder="Compose an epic..."
              style={{
                backgroundColor: "#FFF4E3",
                paddingLeft: sidebar,
                borderColor: "#FFF4E3",
              }}
            />
          </div>
        )}
      </sidebarContext.Consumer>
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

export default withStyles(styles)(EditorComponent);
