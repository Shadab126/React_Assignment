import { useState } from "react";
import './App.css';
import Header from './header';
import Footer from './footer';
import CreateNote from './createNote';
import Notes from './notes';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [addItem, setAddItem] = useState([]);

  const addNote = (note) => {
    // alert("i m clicked");
    setAddItem((prevData) => {
      return [...prevData,{...note}]
    });
  };

  const deleteItem = (id) => {
    setAddItem((prevData) => {
      return prevData.filter((item, index) => index !== id);
    });
  };

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
