import axios from "axios";
import React, { useEffect, useState } from "react";
import { HashRouter as Router } from "react-router-dom";

import { nanoid } from "nanoid";

import { ThemeProvider } from "styled-components";
import GlobalStylesDark from "./components/GlobalStylesDark";
import NavBar from "./components/NavBar";
import TitleBar from "./components/TitleBar";
import Translator from "./tabs/Translator";
import Dictionary from "./tabs/Dictionary";
import Notes from "./tabs/Notes";
import Signin from "./pages/signin";
import Signup from "./pages/signup";

import * as ROUTES from "./constants/routes";
import { IsUserRedirect, ProtectedRoute } from "./helpers/routes";
import { getUser } from "./utils/Common";
import { GlobalStyles, LightTheme, DarkTheme } from "./utils/themes";

export default function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const [transparent, setTransparent] = useState(false);

  const [user, setUser] = useState(getUser());

  const [tabs, setTabs] = useState(1);
  const handleTabChange = (value) => {
    setTabs(value);
  };

  const [notes, setNotes] = useState([]);
  const [updateNoteTimes, setUpdateNoteTimes] = useState(0);
  useEffect(() => {
    //get note from local storage
    const savedNotes = JSON.parse(localStorage.getItem("notes"));
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  const postNoteURL = `http://${ROUTES.URL}/api/auth/updatenotes`;
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
    // skip 2 update times when starting the app
    if (updateNoteTimes > 2) {
      try {
        //update the note in the database (server)
        axios.put(postNoteURL, {
          id: user.id,
          username: user.username,
          updateNotes: JSON.stringify(notes),
        });
      } catch (error) {
        console.error(error.response.data);
      }
    }
    //increase update note times
    setUpdateNoteTimes(updateNoteTimes + 1);
  }, [notes]);

  //edit note stuff
  const [activeNote, setActiveNote] = useState(false);
  const getActiveNote = () => {
    return notes.find((note) => note.id === activeNote);
  };
  const onUpdateNote = (updatedNote) => {
    const updatedNotesArray = notes.map((note) => {
      if (note.id == activeNote) {
        return updatedNote;
      }
      return note;
    });

    setNotes(updatedNotesArray);
  };

  const addNote = (title, content) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      title: title,
      content: content ? content : "",
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  const [searchNote, setSearchNote] = useState("");

  return (
    <>
      <ThemeProvider theme={theme === "light" ? LightTheme : DarkTheme}>
        <GlobalStyles mode={theme} />
        <GlobalStylesDark>
          <TitleBar
            theme={theme}
            setTheme={setTheme}
            transparent={transparent}
            setTransparent={setTransparent}
          />
          <Router>
            <IsUserRedirect
              user={user}
              loggedInPath={ROUTES.APP}
              path={ROUTES.SIGN_IN}
              exact
            >
              <Signin user={user} setUser={setUser} setNotes={setNotes} />
            </IsUserRedirect>

            <IsUserRedirect
              user={user}
              loggedInPath={ROUTES.APP}
              path={ROUTES.SIGN_UP}
              exact
            >
              <Signup />
            </IsUserRedirect>

            <ProtectedRoute user={user} path={ROUTES.APP} exact>
              <NavBar
                user={user}
                setUser={setUser}
                onChange={handleTabChange}
                setUpdateNoteTimes={setUpdateNoteTimes}
                notes={notes}
              />
              <Translator
                display={tabs == 1 ? "flex" : "none"}
                transparent={transparent}
              />
              <Dictionary
                display={tabs == 2 ? "flex" : "none"}
                handleAddNote={addNote}
                transparent={transparent}
              />
              <Notes
                notes={notes.filter(
                  (note) =>
                    note.content
                      .toLowerCase()
                      .includes(searchNote.toLowerCase()) ||
                    note.title.toLowerCase().includes(searchNote.toLowerCase())
                )}
                handleAddNote={addNote}
                handleDeleteNote={deleteNote}
                handleSearchNote={setSearchNote}
                activeNote={getActiveNote()}
                setActiveNote={setActiveNote}
                handleUpdateNote={onUpdateNote}
                display={tabs == 3 ? "block" : "none"}
              />
            </ProtectedRoute>
          </Router>
        </GlobalStylesDark>
      </ThemeProvider>
    </>
  );
}
