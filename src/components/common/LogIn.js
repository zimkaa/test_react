import React, { useState } from "react";
// import PropTypes from "prop-types";
// import { Link, IndexLink } from 'react-router';
// import Loader from './Loader';
import { instance } from "../utils";
import Loader from './Loader';

function LogIn() {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState(false);

  let bodyFormData = new FormData();

  function submitHandler(event) {
    event.preventDefault();
    setLoading(true)
    // console.log("user", user)
    // console.log("password", password)
    bodyFormData.append("username", user);
    bodyFormData.append("password", password);

    instance
      .post("token", bodyFormData, { "Content-Type": "multipart/form-data" })
      .then((res) => {
        const value = res.data.token_type + " " + res.data.access_token;
        // context.commit(SET_AUTH, "YES")
        // context.commit(SET_COOKIES, token)
        // context.commit(SET_HEADERS, token)
        instance.defaults.headers = { Authorization: value };
        // console.log("token", token)
        setToken(true)
        setLoading(false)
      })
      .catch(function (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log("response.data", error.response.data);
          console.log("response.status)", error.response.status);
          console.log("response.headers", error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log("request", error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("Error", error.message);
        }
        console.log("config", error.config);
      });
  }

  return (
    <div>
      <form style={{ marginBottom: "1rem" }} onSubmit={submitHandler}>
        {/* <input {...input.bind} /> */}
        <input
          type="text"
          placeholder="user"
          required
          onChange={(e) => setUser(e.target.value)}
        />
        <input
          type="password"
          placeholder="pass"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Log In</button>
      </form>
      <hr></hr>
      {loading && <Loader />}
      { token ? "Yes token" : "No token" }
      {/* {token} */}
    </div>
  );
}

export default LogIn;
