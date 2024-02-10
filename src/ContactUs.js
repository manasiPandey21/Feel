import React, { useState } from 'react';
import './ContactUs.css'; // Import CSS file for styling

const ContactUs = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const data = new FormData(form);
    try {
      const response = await fetch("https://example.com/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(Object.fromEntries(data))
      });
      if (response.ok) {
        setStatus("Message sent successfully!");
        form.reset();
      } else {
        setStatus("An error occurred while sending the message.");
      }
    } catch (error) {
      setStatus("An error occurred while sending the message.");
    }
  };

  return (
    <div className="container">
      <h1>Contact Us</h1>
      <form id="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows="4" required></textarea>
        <button type="submit">Send</button>
      </form>
      {status && <p id="status">{status}</p>}
    </div>
  );
};

export default ContactUs;
