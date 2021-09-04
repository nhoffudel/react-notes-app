import { useRef, useState } from 'react';

function AddNote({ title, content, createNote }) {
  const [titleInput, setTitleInput] = useState(null);

  const titleRef = useRef(null);
  const contentRef = useRef(null);

  const handleAddNoteClick = () => {
    const newTitle = titleRef.current.value;
    const newContent = contentRef.current.value;

    createNote(newTitle, newContent);
  }

  // Example
  const handleTitleInput = () => {
    console.log('titleRef is ', titleRef.current.value);
    setTitleInput(titleRef.current.value);
  }

  return (
    <div>
      <p>Title INPUT: {titleInput}</p>
      <label>Note title:</label>
      <input ref={titleRef} onChange={handleTitleInput}></input>

      <label>Note content:</label>
      <input ref={contentRef} ></input>
      <button onClick={handleAddNoteClick}>Add note</button>
    </div>
  );
}

export default AddNote;
