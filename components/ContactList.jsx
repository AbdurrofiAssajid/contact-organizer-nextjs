import React from 'react';
import ContactItem from './ContactItem';

export default function ContactList({ contacts = [], setContacts }) { 
  const handleDelete = (deletedId) => {
    setContacts(contacts.filter(contact => contact.id !== deletedId));
  };

  return (
    <section>
      {contacts.length === 0 ? ( 
        <p></p>
      ) : (
        contacts.map((contact) => ( 
          <ContactItem
            key={contact.id}
            id={contact.id}
            imgUrl={contact.img_url} 
            name={contact.name}
            email={contact.email}
            onDelete={handleDelete}
          />
        ))
      )}
    </section>
  );
}