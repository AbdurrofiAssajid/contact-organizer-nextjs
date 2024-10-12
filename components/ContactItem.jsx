"use client";
import React, { useState } from "react";
import toast from "react-hot-toast";

export default function ContactItem({ id, imgUrl, name, email }) {
  const [isDeleting, setIsDeleting] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);

  const handleDelete = async () => {
    setIsDeleting(true);
    try {
      const confirmation = window.confirm(
        "Are you sure you want to delete this?"
      );
      if (!confirmation) {
        setIsDeleting(false);
        return;
      }

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/contacts/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_BEARER_TOKEN}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete contact");
      }

      setIsDeleted(true);
      toast.success("Contact successfully deleted!");
    } catch (error) {
      if (error.message === "Failed to delete contact") {
        toast.error("Error occurred while deleting contact");
      }
      console.error("Failed to delete contact:", error);
    } finally {
      setIsDeleting(false);
    }
  };

  if (isDeleted) {
    return null;
  }

  return (
    <div className="flex items-center p-4 justify-between mt-4 mb-4 rounded-lg shadow-md ease-in-out hover:shadow-2xl hover:scale-105 duration-300 transition-all">
      <div className="flex items-center space-x-4 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
        <img
          src={
            imgUrl ||
            "https://dummyjson.com/image/400x200/003366/ffffff?text=Hi+Sabrina"
          }
          width={128}
          height={128}
          alt={name}
          className="rounded-full w-14 h-14"
        />
        <div className="flex flex-col">
          <p className="text-lg font-semibold text-gray-900">{name}</p>
          <p className="text-sm font-medium text-gray-600">{email}</p>
        </div>
      </div>
      <button
        onClick={handleDelete}
        disabled={isDeleting}
        className="bg-red-700 w-12 h-10 text-white font-bold rounded-md hover:bg-red-800 transition duration-300"
      >
        {isDeleting ? "..." : "x"}
      </button>
    </div>
  );
}
