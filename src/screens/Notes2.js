/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import SidebarComponent from "../sidebar/sidebar";
import EditorComponent from "../editor/editor";
import firebase from "firebase";
import { AuthContext } from "../AuthContext";

class Notes2 extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedNoteIndex: null,
      selectedNote: null,
      notes: null,
      email: "notes",
    };
  }

  static userType = AuthContext;

  render() {
    return (
      <div className="app-container" style={{ backgroundColor: "#FFF4E3" }}>
        <SidebarComponent
          selectedNoteIndex={this.state.selectedNoteIndex}
          notes={this.state.notes}
          deleteNote={this.deleteNote}
          selectNote={this.selectNote}
          newNote={this.newNote}
        ></SidebarComponent>
        {this.state.selectedNote ? (
          <EditorComponent
            selectedNote={this.state.selectedNote}
            selectedNoteIndex={this.state.selectedNoteIndex}
            notes={this.state.notes}
            noteUpdate={this.noteUpdate}
          ></EditorComponent>
        ) : null}
      </div>
    );
  }

  componentDidMount = () => {
    // let email = firebase.auth().currentUser.email.replace(/^\s+|\s+$/g, "");
    // this.setState({ email });
    this.getUserEmail = this.getUserEmail.bind(this);

    this.getUserEmail();

    // const { currentUser, logout } = this.context;
    // this.setState({ email: currentUser.email.replace(/^\s+|\s+$/g, "") });
    firebase
      .firestore()
      .collection(this.state.email)
      .onSnapshot((serverUpdate) => {
        const notes = serverUpdate.docs.map((_doc) => {
          const data = _doc.data();
          data["id"] = _doc.id;
          return data;
        });
        // console.log(notes);
        this.setState({ notes: notes });
      });
  };

  getUserEmail() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user.email) {
        this.setState({ email: user.email.replace(/^\s+|\s+$/g, "") });
        console.log(user.email);
      } else {
        // No user is signed in.
        console.log("There is no logged in user");
      }
    });
  }

  selectNote = (note, index) =>
    this.setState({ selectedNoteIndex: index, selectedNote: note });

  noteUpdate = (id, noteObj) => {
    firebase.firestore().collection(this.state.email).doc(id).update({
      title: noteObj.title,
      body: noteObj.body,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
  };
  newNote = async (title) => {
    const note = {
      title: title,
      body: "",
    };
    const newFromDB = await firebase
      .firestore()
      .collection(this.state.email)
      .add({
        title: note.title,
        body: note.body,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });
    const newID = newFromDB.id;
    await this.setState({ notes: [...this.state.notes, note] });
    const newNoteIndex = this.state.notes.indexOf(
      this.state.notes.filter((_note) => _note.id === newID)[0]
    );
    this.setState({
      selectedNote: this.state.notes[newNoteIndex],
      selectedNoteIndex: newNoteIndex,
    });
  };
  deleteNote = async (note) => {
    const noteIndex = this.state.notes.indexOf(note);
    await this.setState({
      notes: this.state.notes.filter((_note) => _note !== note),
    });
    if (this.state.selectedNoteIndex === noteIndex) {
      this.setState({ selectedNoteIndex: null, selectedNote: null });
    } else {
      this.state.notes.length > 1
        ? this.selectNote(
            this.state.notes[this.state.selectedNoteIndex - 1],
            this.state.selectedNoteIndex - 1
          )
        : this.setState({ selectedNoteIndex: null, selectedNote: null });
    }

    firebase.firestore().collection(this.state.email).doc(note.id).delete();
  };
}

export default Notes2;
