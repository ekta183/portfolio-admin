import React, { useEffect, useState } from 'react';

const Home = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Fetch data from API
    fetch('https://portfolio-backend-625e.onrender.com/api/v1/message/getall')
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setMessages(data.messages); // Store messages in state
        }
      })
      .catch((error) => {
        console.error('Error fetching messages:', error);
      });
  }, []);

  return (
    <div>
      <div className="container row mt-3">
        {messages.map((message) => (
          <div key={message._id} className="col-md-4 mb-4">
            <div
              className="card"
              style={{
                width: '100%',
                backgroundColor: '#418470', // Light grey background
                borderRadius: '10px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Light shadow effect
              }}
            >
              <div className="card-body">
                <h5 className="card-title">{message.firstName} {message.lastName}</h5>
                <p className="card-text">{message.message}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
