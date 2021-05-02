/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from "react";
import SidebarComponent from "../sidebar/sidebar";
import EditorComponent from "../editor/editor";
import firebase from "firebase";
import { useAuth } from "../AuthContext";
import { Link, useHistory } from "react-router-dom";
import { Form, Button, Card, Alert } from "react-bootstrap";

const Notes = () => {
  const [selectedNoteIndex, setSelectedNoteIndex] = useState(null);
  const [selectedNote, setSelectedNote] = useState(null);
  const [notes, setNotes] = useState(null);
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  let emailTemp = currentUser.email;
  let email = emailTemp.replace(/^\s+|\s+$/g, "");

  useEffect(() => {
    firebase
      .firestore()
      .collection(email)
      .onSnapshot((serverUpdate) => {
        const notes_temp = serverUpdate.docs.map((_doc) => {
          const data = _doc.data();
          data["id"] = _doc.id;
          return data;
        });
        // console.log(notes);
        setNotes(notes_temp);
      });
  });

  const selectNote = (note, index) => {
    setSelectedNoteIndex(index);
    setSelectedNote(note);
  };

  const noteUpdate = (id, noteObj) => {
    firebase.firestore().collection(email).doc(id).update({
      title: noteObj.title,
      body: noteObj.body,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
  };

  const newNote = async (title) => {
    const note = {
      title: title,
      body: "",
    };
    const newFromDB = await firebase.firestore().collection(email).add({
      title: note.title,
      body: note.body,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    const newID = newFromDB.id;
    await setNotes([...notes, note]);
    const newNoteIndex = notes.indexOf(
      notes.filter((_note) => _note.id === newID)[0]
    );
    setSelectedNote(notes[newNoteIndex]);
    setSelectedNoteIndex(newNoteIndex);
  };

  const deleteNote = async (note) => {
    const noteIndex = notes.indexOf(note);
    await setNotes(notes.filter((_note) => _note !== note));

    if (selectedNoteIndex === noteIndex) {
      setSelectedNoteIndex(null);
      setSelectedNote(null);
    } else {
      if (notes.length > 1) {
        selectNote(notes[selectedNoteIndex - 1], selectedNoteIndex - 1);
      } else {
        setSelectedNoteIndex(null);
        setSelectedNote(null);
      }
    }

    firebase.firestore().collection(email).doc(note.id).delete();
  };

  return (
    <div className="app-container" style={{ backgroundColor: "#FFF4E3" }}>
      <SidebarComponent
        selectedNoteIndex={selectedNoteIndex}
        notes={notes}
        deleteNote={deleteNote}
        selectNote={selectNote}
        newNote={newNote}
      ></SidebarComponent>
      {selectedNote ? (
        <EditorComponent
          selectedNote={selectedNote}
          selectedNoteIndex={selectedNoteIndex}
          notes={notes}
          noteUpdate={noteUpdate}
        ></EditorComponent>
      ) : (
        <div>
          <Card
            style={{
              fontFamily: "Nunito",
              textAlign: "center",
              fontSize: 18,
              padding: 10,
            }}
          >
            <Card.Body>
              <h2>Select the Notes you want to Edit</h2>
            </Card.Body>
          </Card>
        </div>
      )}
    </div>
  );
};
export default Notes;
