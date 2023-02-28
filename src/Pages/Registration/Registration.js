import React, { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const Registration = () => {
  const [error, setError] = useState("");
  const { createUser } = useContext(AuthContext);
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const password = form.password.value;
    console.log(email, password, name, photoURL);
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        setError("");
      })
      .catch((e) => {
        console.log(e);
        setError(e.message);
      });
  };
  return (
    <div className="w-full mx-auto ">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label className="block text-gray-700 text-sm  mb-2">User Name</label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            name="name"
            type="text"
            required
            placeholder="User Name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm  mb-2">
            User Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            name="email"
            type="email"
            required
            placeholder="Email"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm  mb-2">
            User Photo URL
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            name="photoURL"
            type="text"
            required
            placeholder="Your Photo URL"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm  mb-2">Password</label>
          <input
            className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            required
            name="password"
            type="password"
            placeholder="*********"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white w-full  py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Register
          </button>
        </div>
      </form>
      <p className="text-center text-red-500 text-xs">{error}</p>
    </div>
  );
};

export default Registration;
