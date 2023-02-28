import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";

const RightSideNav = () => {
  const { providerlogin } = useContext(AuthContext);

  const googleProvider = new GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    providerlogin(googleProvider)
      .then((result) => {
        const currentUser = result.user;
        console.log(currentUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div>
        <div className="rounded-md w-full shadow-sm" role="group">
          <button
            onClick={handleGoogleSignIn}
            type="submit"
            className="py-2 px-4 w-full font-medium border-2 border-blue-500  hover:text-white hover:bg-blue-600 rounded-lg  "
          >
            <small>Log In With Google</small>
          </button>
          <br />
          <button
            type="button"
            className="py-2 mt-2 px-4 w-full font-medium border-black border-2 text-black hover:bg-black hover:text-white rounded-lg  "
          >
            <small>Log In With Github</small>
          </button>
        </div>
        <div className="mt-10">
          <h1>Find Us On</h1>
          <button
            type="button"
            className="py-1 mt-2 px-4 w-full font-medium border-2 border-black  text-black  rounded-lg "
          >
            <small>Facebook</small>
          </button>
          <br />
          <button
            type="button"
            className="py-1 mt-2 px-4 w-full font-medium border-2 border-black  text-black  rounded-lg "
          >
            <small>YouTube</small>
          </button>
          <br />
          <button
            type="button"
            className="py-1 mt-2 px-4 w-full font-medium border-2 border-black  text-black  rounded-lg "
          >
            <small>Twitter</small>
          </button>
          <br />
          <button
            type="button"
            className="py-1 mt-2 px-4 w-full font-medium border-2 border-black  text-black  rounded-lg "
          >
            <small>Whatsapp</small>
          </button>
          <br />
          <button
            type="button"
            className="py-1 mt-2 px-4 w-full font-medium border-2 border-black  text-black  rounded-lg "
          >
            <small>Discord</small>
          </button>
          <br />
          <button
            type="button"
            className="py-1 mt-2 px-4 w-full font-medium border-2 border-black  text-black  rounded-lg "
          >
            <small>Privacy Policy</small>
          </button>
          <br />
          <button
            type="button"
            className="py-1 mt-2 px-4 w-full font-medium border-2 border-black  text-black  rounded-lg "
          >
            <small>Terms And Conditions</small>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightSideNav;
