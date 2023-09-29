import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Landing, Home, Detail, Form, Error, Login} from "./Views";
import NavBar from "./Components/NavBar/NavBar";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();


  return (
    <div className="App">
      {location.pathname === "/home" || location.pathname === '/create'
       ? <NavBar />
      : null
      }
      <Routes>
      <Route path="/home" element={<Home />}></Route>
      <Route path="/dogs/:id" element={<Detail />}></Route>
      <Route path="/create" element={<Form />}></Route>
      <Route exact path="/" element={<Landing />}></Route>
      <Route path='*' element={<Error/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      </Routes>
    </div>
  );
}

export default App;