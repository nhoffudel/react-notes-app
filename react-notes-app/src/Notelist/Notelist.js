import Note from '../Note/Note';

function Notelist({ notes }) {
  return (
    <div> 
      {
        notes.map(
          (note, index) => <Note title={note.title} content={note.content} key={index} />
        )
      }
    </div>
  );
}

export default Notelist;
