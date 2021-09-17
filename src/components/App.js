// import React, { useState, useEffect, useReducer } from "react";
import React, { useEffect, useState }  from "react";
// import { Context } from "./context";
// import reducer from "./reducer";
import Header from "./common/Header";
import LogIn from "./common/LogIn";
// import { setCookies } from "./utils";
import { Cookies } from "./utils";

// const LogIn = React.lazy(() => import("./common/LogIn"))

export default function App() {

  // console.log(setCookies('my-name', 1))

  const [auth, setAuth] = useState(false);

  // function onChange(value) {
  //   setCookie('mcc', value, { path: '/', sameSite: 'lax', maxAge: "9999" });
  // }

  // onChange('TOKEN')

  // const [state, dispatch] = useReducer(
  //   reducer,
  //   JSON.parse(localStorage.getItem("todos"))
  // );
  // const [todoTitle, setTodoTitle] = useState("");

  // useEffect(() => {
  //   localStorage.setItem("todos", JSON.stringify(state));
  // }, [state]);

  // const addTodo = (event) => {
  //   if (event.key === "Enter") {
  //     dispatch({
  //       type: 'add',
  //       payload: todoTitle,
  //     })
  //     setTodoTitle("");
  //   }
  // };

  // const [loading, setLoading] = React.useState(true);

  // useEffect(() => {
  //   if (Cookies.get('mcc')) {
  //     setAuth(true)
  //   } else {
  //     setAuth(false)
  //   }
  // }, []);

  return (
    <div className="container-fluid">
      {/* { console.log("cookies", cookies) } */}
      { auth ? (<LogIn />) : "yes"}
      {/* { cookies.mcc && <h1>Hello {cookies.mcc}!</h1> } */}
      <Header />
      <LogIn />
    </div>
  );
}
