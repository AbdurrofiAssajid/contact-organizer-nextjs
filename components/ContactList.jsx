import React from 'react';
import ContactItem from "./ContactItem"; // Make sure this is imported correctly

export default function ContactList({ contacts = [] }) { // Default to an empty array
  return (
    <section>
      {contacts.length === 0 ? ( 
        <p></p> // Display a message when there are no contacts
      ) : (
        contacts.map((contact) => ( // Render the contact items
          <ContactItem
            key={contact.id}
            imgUrl={contact.imgUrl} 
            name={contact.name}
            email={contact.email}
          />
        ))
      )}
    </section>
  );
}
