import React from 'react';
import ContactItem from './ContactItem'; 


export default function ContactList({ contacts = [] }) { 
  return (
    <section>
      {contacts.length === 0 ? ( 
        <p></p> 
      ) : (
        contacts.map((contact) => ( 
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
