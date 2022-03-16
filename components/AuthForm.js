import React, { useState } from "react";
import { doSignInWithEmailAndPassword, auth } from "../firebase/firebase";
let f = true;
const SignInPage = ({ handler }) => (
  <div>
    <SignInFormBase handler={handler} />
  </div>
);

const INITIAL_STATE = {
  email: "admin@axis.com",
  password: "",
  error: null,
};
const SignInFormBase = ({ handler }) => {
  const [state, setState] = useState(INITIAL_STATE);
  const { email, password, error } = state;
  const isInvalid = password === "" || email === "";

  const onSubmit = (event) => {
    try {
      doSignInWithEmailAndPassword(email, password)
        .then((obj) => {
          setState({ ...INITIAL_STATE });
          handler(true);
        })
        .catch((error) => {
          setState((prev) => ({ ...prev, error }));
        });

      event.preventDefault();
    } catch (e) {
      setState((prev) => ({ ...prev, error }));
    }
  };

  const changeHandler = (event) => {
    const { value, name } = event.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <div className="h-screen flex flex-col justify-center items-center font-Raleway">
        <div className="w-2/3">
          <label
            htmlFor="full-name"
            className="leading-7 text-sm text-gray-600"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            placeholder="type password here"
            onChange={changeHandler}
            className="w-full bg-gray-100 bg-opacity-50 rounded border h-16 border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
          <a
            onClick={onSubmit}
            disabled={isInvalid}
            className="btn btn-primary mt-4"
          >
            submit
          </a>
        </div>
      </div>
    </>
  );
};

export default SignInPage;
