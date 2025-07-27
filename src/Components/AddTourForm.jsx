import React, { useState } from "react";

const AddTourForm = () => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    price: "",
    daynight: "",
    location: "",
    person: "",
    imageUrl: "",
    rating: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Add logic to submit form data
    alert("Tour added! (Demo only)");
    setForm({
      title: "",
      description: "",
      price: "",
      daynight: "",
      location: "",
      person: "",
      imageUrl: "",
      rating: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl mt-11 mx-auto p-6 bg-white border rounded shadow-2xl"
    >
      <h2 className="text-2xl font-bold ml-52 text-sky-500 mb-4">
        Add New Tour
      </h2>
      <div className="mb-3 inline-flex">
        <label className="block mb-1 mr-16 font-medium">Title :</label>
        <input
          type="text"
          name="title"
          placeholder="Enter Tour Title"
          value={form.title}
          onChange={handleChange}
          className="w-96 border px-3 ml-3 py-2 rounded"
          required
        />
      </div>
      <div className="mb-3 inline-flex">
        <label className="block mb-1 mr-6 font-medium">Description :</label>
        <textarea
          name="description"
          placeholder="Enter Tour Description"
          value={form.description}
          onChange={handleChange}
          className="w-96 border px-3 py-2 rounded"
          required
        />
      </div>
      <div className="mb-3 inline-flex ">
        <label className="block mb-1 mr-14 font-medium">Price :</label>
        <input
          type="number"
          name="price"
          placeholder="Enter Tour Price"
          value={form.price}
          onChange={handleChange}
          className="w-96 border ml-4 px-3 py-2 rounded"
          required
        />
      </div>
      <div className="mb-3 inline-flex">
        <label className="block mb-1 mr-8 font-medium">Day/Night :</label>
        <input
          type="text"
          name="daynight"
          placeholder="Enter Day/Night Duration"
          value={form.daynight}
          onChange={handleChange}
          className="w-96 border px-3 py-2 rounded"
          required
        />
      </div>
      <div className="mb-3 inline-flex">
        <label className="block mb-1 mr-11 font-medium">Location :</label>
        <input
          type="text"
          name="location"
          placeholder="Enter Tour Location"
          value={form.location}
          onChange={handleChange}
          className="w-96 border mr-1 px-3 py-2 rounded"
          required
        />
      </div>
      <div className="mb-3 inline-flex">
        <label className="block mb-1 mr-14 font-medium">Person :</label>
        <input
          type="number"
          name="person"
          placeholder="Enter Number of Persons"
          value={form.person}
          onChange={handleChange}
          className="w-96 border px-3 py-2 rounded"
          required
        />
      </div>
      <div className="mb-3 inline-flex">
        <label className="block mb-1 mr-9 font-medium">imageUrl :</label>
        <input
          type="text"
          name="imageUrl"
          placeholder="Enter Image URL"
          value={form.imageUrl}
          onChange={handleChange}
          className="w-96 ml-1 border px-3 py-2 rounded"
          required
        />
      </div>
      <div className="mb-3 inline-flex">
        <label className="block mb-1 mr-14 font-medium">Rating :</label>
        <input
          type="number"
          name="rating"
          placeholder="Enter Tour Rating (1-5)"
          value={form.rating}
          onChange={handleChange}
          className="w-96 border px-3 py-2 rounded"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-sky-600 block w-96 ml-28 text-white px-4 py-2 rounded hover:bg-sky-700"
      >
        Add Tour
      </button>
    </form>
  );
};

export default AddTourForm;
