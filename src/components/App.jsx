import React from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import notes from "../notes"


function App() {
    return (
        <div>
            <Header />
            {notes.map(note => (
                <Note
                //acá es donde creamos las propiedades que seleccionamos luego, en Note.jsx 
                key={note.key}
                title={note.title}
                content={note.content}
            />
            ))}            
            <Footer />
        </div>
    );
}

export default App;



