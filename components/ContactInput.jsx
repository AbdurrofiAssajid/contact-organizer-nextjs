"use client";

import React, { useState, useEffect } from "react";
import ContactList from "./ContactList";
import toast from "react-hot-toast";
import Image from "next/image";


function ContactInput() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(false); 
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    Image_url: "",
  });

  useEffect(() => {
    async function fetchContacts() {
      setLoading(true); // Start loading
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/contacts`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_BEARER_TOKEN}`,
          },
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setContacts(data.data || []);
      } catch (error) {
        toast.error("Error during fetching the data.")
      } finally {
        setLoading(false); // Stop loading
      }
    }

    fetchContacts();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading when form is submitted

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/contacts/new`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_BEARER_TOKEN}`,
        },
        body: JSON.stringify(formData),
        
      });

      if (!response.ok) {
        throw new Error("Failed to submit contact");
      }

      const newContact = await response.json();
      setContacts([...contacts, newContact.data]);

      // RESET
      setFormData({
        name: "",
        email: "",
        Image_url: "",
      });
      toast.success("Contact successfully added")

    } catch (error) {
      console.error(error);
      toast.error("Insert the input correctly")
    } finally {
      setLoading(false); 
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-md mt-10">
      <h2 className="text-5xl font-bold mb-16 mt-5 text-center text-blue-950">
         Contact Organizer 📚
      </h2>

      <h2 className="text-3xl font-bold mb-6 text-blue-950 mt-6">Contact List: </h2>

      {error && <p className="text-red-500">{error}</p>}
      {!error && contacts.length > 0 ? (
        <ContactList contacts={contacts} />
      ) : (
        <></>
      )}

      <h2 className="text-3xl font-bold mb-3 mt-14 text-blue-950">Add New Contact</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <input
          placeholder="Name"
          required
          name="name"
          className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-950 transition duration-300"
          value={formData.name}
          onChange={handleInputChange}
        />
        <input
          placeholder="Email"
          name="email"
          required
          className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-950 transition duration-300"
          value={formData.email}
          onChange={handleInputChange}
        />
        <input
          placeholder="Image URL"
          name="Image_url"
          required
          className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-950 transition duration-300"
          value={formData.Image_url}
          onChange={handleInputChange}
        />
        <button
          className={`w-full mt-14 mb-2 p-4 ${
            loading ? "bg-gray-400" : "bg-blue-950"
          } text-white font-semibold rounded-md hover:bg-zinc-950 transition duration-150`}
          type="submit"
          disabled={loading} 
        >
          {loading ? "Loading..." : "Submit"} 
          
        </button>
      </form>
    </div>
  );
}

export default ContactInput;