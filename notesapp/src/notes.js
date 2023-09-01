import React from "react";
import { BsTrash } from "react-icons/bs";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Notes.css"; // Import a custom CSS file for styling

function Notes({ id, title, content, deleteItem }) {
  const handleDelete = () => {
    deleteItem(id);
  };
  return (
    <div className="note-card">
      <Card className="card_main">
        <Card.Body>
          <Card.Title>
            <h1>{title}</h1>
          </Card.Title>
          <Card.Text>
            <p>{content}</p>
          </Card.Text>
          <Button variant="primary" onClick={handleDelete}>
            <BsTrash />
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Notes;
