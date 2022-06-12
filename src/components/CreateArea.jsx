import React, {useState} from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab"
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {

  const [newNote, setNewNote] = useState({title:"", content:""});

  function handleNote (event) {
    const {name, value} = event.target;

      setNewNote(prevValue=>{
        return{
          ...prevValue,
          [name]:value
        }
      });

  }

  const [noteState, setNoteState] = useState(false);

  function handleNoteState() {
    setNoteState(true);
  }

  return (
    <div>
      <form className="create-note">        
          {noteState ?
            <input
            onChange={handleNote}
            value={newNote.title} 
            name="title" 
            placeholder="Title"
            /> : 
            null
          }
        <textarea
        onClick={handleNoteState}
        onChange={handleNote}
        value={newNote.content} 
        name="content" 
        placeholder="Take a note..." 
        rows={noteState ? 3 : 1}
        />
        <Zoom in={noteState}>
        <Fab
        onClick={(event)=>{
          event.preventDefault();
          props.onAdd(newNote);
          setNewNote({title:"", content:""});
        }}>
          <AddIcon />
        </Fab>
        </Zoom>
      </form>
    </div>
  );
}
  
export default CreateArea;