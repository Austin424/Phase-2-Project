import Navbar from "./Navbar";
import React, { useState, useEffect } from "react";
import {v4 as uuidv4} from 'uuid';


function FanPage() {
  const [comments, setComments] = useState([]);
  const [newName, setNewName] = useState('');
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments = () => {
    fetch('http://localhost:3002/comments')
    .then((response) => response.json())
    .then((comments) => {
      setComments(comments)
    });

  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newCommentObj = {
      id: uuidv4(), // Generate a unique ID for the new comment
      name: newName,
      comment: newComment
    };

    setComments([...comments, newCommentObj]);

    postCommentToServer(newCommentObj);

    setNewName('');
    setNewComment('');
  };

  const postCommentToServer = (comment) => {
    // Assuming you have an endpoint to post comments
    fetch('http://localhost:3002/comments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(comment),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };



  return (
    <div>
      <h1>Comments</h1>
      {/* <div>
        {comments.map((comment) => (
          <div key={comment.id}>
            <h3>{comment.name}</h3>
            <p>{comment.comment}</p>
          </div>
        ))}
      </div> */}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" value={newName} onChange={handleNameChange} />
        </div>
        <div>
          <label>Comment:</label>
          <textarea value={newComment} onChange={handleCommentChange} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}









 

export default FanPage