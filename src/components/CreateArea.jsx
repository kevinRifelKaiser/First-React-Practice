import React, {useState} from "react";

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

  return (
    <div>
      <form>
        <input
        onChange={handleNote}
        value={newNote.title} 
        name="title" 
        placeholder="Title"
        />
        <textarea
        onChange={handleNote}
        value={newNote.content} 
        name="content" 
        placeholder="Take a note..." 
        rows="3"
        />
        <button
        onClick={(event)=>{
          event.preventDefault();
          props.onAdd(newNote);
          setNewNote({title:"", content:""});
        }}
        >Add</button>
      </form>
    </div>
  );
}
  
export default CreateArea;