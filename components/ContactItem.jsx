import React from "react";

export default function ContactItem({ imgUrl, name, email }) {
  return (
<div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-md mt-10">
  <h2 className="font-bold text-4xl text-blue-950 mt-6 mb-8">Contact List</h2>
  <div className="flex items-center justify-between">
    <div className="flex items-center space-x-4">
      <img
        src={
          imgUrl ??
          "https://dummyjson.com/image/400x200/008080/ffffff?text=Hello+Peter"
        }
        width={128}
        height={128}
        alt={name}
        className="rounded-xl"
      />
      <div className="flex flex-col space-y-1">
        <p className="text-lg font-semibold text-gray-800">{name}</p>
        <p className="text-sm font-medium text-gray-600">{email}</p>
      </div>
    </div>
    <button className="bg-red-700 w-10 h-10 text-white rounded-md hover:bg-red-800 transition duration-300">
      x
    </button>
  </div>
</div>
  );
}
