import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp'



const ChatEntry = ({ message }) => {

  const handleLike = (id) => {
    console.log('liked')
  }
  
  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{message.sender}</h2>
      <section className="entry-bubble">
        <p>{message.body}</p>
        {/* <p className="entry-time">{message.timeStamp}</p>
         */}
         <TimeStamp className="entry-time" message={message}/>
        <button className="like" onClick={() => {handleLike(message.id)}}>🤍</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
    sender: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    timeStamp: PropTypes.string.isRequired,
};

export default ChatEntry;
