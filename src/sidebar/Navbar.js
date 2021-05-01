import React, { useState, useEffect } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import SidebarComponent from "./sidebar";
import "./Navbar.css";
import { IconContext } from "react-icons";
import firebase from "firebase";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  const [selectedNoteIndex, setSelectedNoteIndex] = useState(null);
  const [selectedNote, setSelectedNote] = useState(null);
  const [notes, setNotes] = useState(null);

  const showSidebar = () => setSidebar(!sidebar);

  useEffect(() => {
    firebase
      .firestore()
      .collection("notes")
      .onSnapshot((serverUpdate) => {
        const notes_temp = serverUpdate.docs.map((_doc) => {
          const data = _doc.data();
          data["id"] = _doc.id;
          return data;
        });
        console.log(notes_temp);
        setNotes(notes_temp);
      });
  });

  const selectNote = (note, index) => {
    setSelectedNote(note);
    setSelectedNoteIndex(index);
  };

  const noteUpdate = (id, noteObj) => {
    firebase.firestore().collection("notes").doc(id).update({
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
    const newFromDB = await firebase.firestore().collection("notes").add({
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

    firebase.firestore().collection("notes").doc(note.id).delete();
  };
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            <li>
              <SidebarComponent
                selectedNoteIndex={selectedNoteIndex}
                notes={notes}
                deleteNote={deleteNote}
                selectNote={selectNote}
                newNote={newNote}
              ></SidebarComponent>
            </li>
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
