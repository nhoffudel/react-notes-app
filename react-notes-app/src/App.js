import "./App.css";
import { useState } from 'react';

import Title from "./Title/Title";
import Notelist from "./Notelist/Notelist";
import AddNote from "./AddNote/AddNote";

import {
  BrowserRouter as Router,
  Switch, Route, Link
} from "react-router-dom"

/***
 * -App
 *  - Title
 *    - Notelist
 *      - Note
 *      - Note
 *      - Note
 *  - AddNote
 *    - AddNoteForm
 *    - AddNoteButton
 */
function App(props) {
  const [notes, setNotes] = useState(props.notes);

  const createNote = (title, content) => {
    const updatedNotes = notes.concat([{title, content }]);
    setNotes(updatedNotes);
  }

  return (
    <div className="App">
      <Title />
      <Router>
        <div>
          <ol>
            <li><Link to="/notelist">Note list</Link></li>
            <li><Link to="/add-note">Add note</Link></li>
          </ol>
        </div>
         
        <Switch>
          <Route path="/notelist">
            <Notelist notes={notes} />
          </Route>
          <Route path="/add-note">
            <AddNote createNote={createNote} />
          </Route>
        </Switch>
    </Router>
    </div>
  );
}

export default App;
