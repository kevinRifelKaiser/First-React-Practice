import React, {useState} from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import CreateArea from "./CreateArea";
import { v4 as uuidv4 } from 'uuid';


function App() {

    const [notes, setNotes] = useState([]);

    function handleNotes(newNote) {
        setNotes(prevValue => {
            return [
                ...prevValue,
                newNote
            ];
        });
    }

    function deleteItem(id) {
        setNotes(prevValue => {
            return prevValue.filter((note, index) => {
                return index !== id;
            });
        });
    }

    return (
        <div>
            <Header />
            <CreateArea
            onAdd={handleNotes} 
            />
            {notes.map((note, index)=>(
                <Note            
                key={uuidv4()}
                id={index}
                title={note.title}
                content={note.content}
                onChecked={deleteItem} 
            />    
            ))} 
                   
            <Footer />
        </div>
    );
}

export default App;



