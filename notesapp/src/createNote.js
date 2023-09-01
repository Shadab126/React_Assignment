import React from "react";
import { useState } from "react";
import { AiOutlinePlusCircle } from 'react-icons/ai';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CreateNote(props) {

        const [note, setNote] = useState({
             title: "",
             content: "",
        })

        const InputEvent = (event) => {
            const { name, value } = event.target;
            setNote((prevData) => {
            return {
                ...prevData,
                 [name]: value,
            }
            })
        }

        const addEvent = () => {
              props.passNote(note);
              setNote({
                title: "",
                content: "",
           })
        }
  return (
    <div className="main_note">
      <form>
        <Card className="card_main">
          <Card.Body>
            <Card.Title>
            <input 
            style={{border:'none'}}
            type="text" 
            name="title"
            value={note.title}
            onChange={InputEvent}
            placeholder="Title" 
            autoComplete="off"
             />
            </Card.Title>
            <Card.Text>
            <textarea 
            style={{border:'none'}}
            rows="" 
            column=""
            name="content"
            value={note.content}
            onChange={InputEvent}
             placeholder="Write a note..."
              />
            </Card.Text>
            <Button onClick={addEvent} variant="primary"><AiOutlinePlusCircle/></Button>
          </Card.Body>
        </Card>
      </form>
    </div>
  );
}

export default CreateNote
