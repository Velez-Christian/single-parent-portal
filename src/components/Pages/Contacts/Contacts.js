import React, { useState } from 'react';
import './Contacts.css';

const Contacts = () => {
  const [adminContacts, setAdminContacts] = useState([
    { id: 1, name: 'Admin 1', email: 'admin1@example.com' },
    { id: 2, name: 'Admin 2', email: 'admin2@example.com' },
    // Add more admin contacts as needed
  ]);

  const [userContacts, setUserContacts] = useState([
    { id: 1, name: 'User 1', email: 'user1@example.com' },
    { id: 2, name: 'User 2', email: 'user2@example.com' },
    // Add more user contacts as needed
  ]);

  return (
    <div className="contacts-page">
      <h1>Contacts</h1>

      <div className="admin-contacts">
        <h2>Admin Contacts</h2>
        {adminContacts.map((contact) => (
          <div key={contact.id} className="contact-card">
            <h3>{contact.name}</h3>
            <p>{contact.email}</p>
          </div>
        ))}
      </div>

      <div className="user-contacts">
        <h2>User Contacts</h2>
        {userContacts.map((contact) => (
          <div key={contact.id} className="contact-card">
            <h3>{contact.name}</h3>
            <p>{contact.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contacts;
