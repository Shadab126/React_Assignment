import { useState, useEffect } from "react";
import './App.css';
import Header from './header';
import Footer from './footer';
import CreateNote from './createNote';
import Notes from './notes';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [addItem, setAddItem] = useState([]);


  // for temperary storing
  // const addNote = (note) => {
  //   // alert("i m clicked");
  //   setAddItem((prevData) => {
  //     return [...prevData,{...note}]
  //   });
  // };

  // for permanent add in localstorage
  const addNote = (note) => {
    // Create a copy of the previous data
    const newData = [...addItem, { ...note }];
  
    // Save the updated data to localStorage
    localStorage.setItem("notes", JSON.stringify(newData));
  
    // Update the state
    setAddItem(newData);
  };

  // for temporary deletion
  // const deleteItem = (id) => {
  //   setAddItem((prevData) => {
  //     return prevData.filter((item, index) => index !== id);
  //   });
  // };


  // for permanent deletion
  
const deleteItem = (id) => {
  // Create a copy of the previous data and remove the specified note
  const newData = addItem.filter((item, index) => index !== id);

  // Save the updated data to localStorage
  localStorage.setItem("notes", JSON.stringify(newData));

  // Update the state
  setAddItem(newData);
};

useEffect(() => {
  // Retrieve the notes from localStorage and parse them
  const storedNotes = JSON.parse(localStorage.getItem("notes"));

  if (storedNotes) {
    setAddItem(storedNotes);
  }
}, []);

  return (
    <div className="App">
    <Header/>
    <CreateNote passNote={addNote} />
   { addItem.map((val, index)=>{
      return <Notes
      key={index}
      id={index}
      title={val.title}
      content={val.content}
      deleteItem={deleteItem} 
      />
    })}
    <Footer/>
    </div>
  );
}

export default App;
