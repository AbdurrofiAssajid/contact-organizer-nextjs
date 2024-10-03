'use server';

import React from 'react';
import ContactList from './ContactList'; // Import your ContactList component

async function fetchContacts() {
  try {
    const response = await fetch(`${process.env.BASE_URL}/api/contacts`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.BEARER_TOKEN}`,
      },
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    return data.data || []; // Return the contact data or an empty array

  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch contacts.");
  }
}

export default async function Page() {
  let contacts = [];
  
  try {
    contacts = await fetchContacts(); 
  } catch (error) {
    return <p>Error: {error.message}</p>;
  }

  // Render the ContactList with fetched contacts
  return (
    <div>
      <ContactList contacts={contacts} /> {/* Pass contacts to the ContactList component */}
    </div>
  );
}