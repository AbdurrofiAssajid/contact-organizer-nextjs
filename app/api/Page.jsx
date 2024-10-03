"use server";

import React from "react";
import ContactList from "./ContactList";

async function fetchContacts() {
  try {
    const response = await fetch(`${process.env.BASE_URL}/api/contacts/new`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.BEARER_TOKEN}`,
      },
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    console.log(data);
    return data.data || [];
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

  return (
    <div>
      <ContactList contacts={contacts} />
    </div>
  );
}
