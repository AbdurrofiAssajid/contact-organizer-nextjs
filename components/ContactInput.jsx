"use client";

import React, { useState, useEffect } from "react";
import ContactList from "./ContactList";
import toast from "react-hot-toast";

function ContactInput() {
  const [contacts, setContacts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false); 
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    img_url: "",
  });

  useEffect(() => {
    async function fetchContacts() {
      setLoading(true);
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
        console.error(error);
        toast.error('Failed to fetch contacts');
      } finally {
        setLoading(false);
      }
    }

    fetchContacts();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null); // Reset error state before submitting

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
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to submit contact");
      }

      const newContact = await response.json();
      setContacts(prevContacts => [...prevContacts, newContact.data]);

      // Reset form only on successful submission
      setFormData({
        name: "",
        email: "",
        img_url: "",
      });
      toast.success('Contact successfully added');
    } catch (error) {
      console.error(error);
      setError(error.message || "Failed to submit contact.");
      toast.error(error.message || 'Failed to add contact. Please check your input and try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
    // Clear error when user starts typing again
    if (error) {
      setError(null);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-md mt-10">
      <h2 className="text-5xl font-bold mb-16 mt-5 text-center text-blue-950">
         Contact Organizer 📚
      </h2>

      <h2 className="text-3xl font-bold mb-6 text-blue-950 mt-6">Contact List: </h2>

      {contacts.length > 0 ? (
        <ContactList contacts={contacts} />
      ) : (
        <p>No contacts available.</p>
      )}

      <h2 className="text-3xl font-bold mb-3 mt-14 text-blue-950">Add New Contact</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <input
          placeholder="Name"
          name="name"
          className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-950 transition duration-300"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
        <input
          placeholder="Email"
          name="email"
          type="email"
          className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-950 transition duration-300"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
        <input
          placeholder="Image URL"
          required
          name="img_url"
          className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-950 transition duration-300"
          value={formData.img_url}
          onChange={handleInputChange}
        />
        {error && <p className="text-red-500 text-sm">{error}</p>}
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