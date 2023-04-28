import React from "react";
import logo from "./logo.svg";
import {Counter} from "./features/counter/Counter";
import "./App.css";
import {Navigate, NavLink, Route, Routes} from "react-router-dom";
import {SignIn} from "./components/SignIn";
import {SignUp} from "./components/SignUp";
import {CheckEmail} from "./components/CheckEmail";
import {SetNewPassword} from "./components/SetNewPassword";
import {ForgotPassword} from "./components/ForgotPassword";
import {Profile} from "./components/Profile";
import {Packs} from "./components/Packs";
import {Cards} from "./components/Cards";
import {Learn} from "./components/Learn";


export const App = () => {
    return (
        <div>

            <NavLink to={'/login'}>login</NavLink>
            <NavLink to={'/register'}>register</NavLink>
            <NavLink to={'/checkEmail'}>checkEmail</NavLink>
            <NavLink to={'/setNewPassword'}>setNewPassword</NavLink>
            <NavLink to={'/forgotPassword'}>forgotPassword</NavLink>
            <NavLink to={'/profile'}>profile</NavLink>
            <NavLink to={'/packs'}>packs</NavLink>
            <NavLink to={'/cards'}>cards</NavLink>
            <NavLink to={'/learn'}>learn</NavLink>


    <Routes>
        <Route path="login" element={<SignIn/>}/>
        <Route path="register" element={<SignUp/>}/>
        <Route path="checkEmail" element={<CheckEmail/>}/>
        <Route path="setNewPassword" element={<SetNewPassword/>}/>
        <Route path="forgotPassword" element={<ForgotPassword/>}/>
        <Route path="profile" element={<Profile/>}/>
        <Route path="packs" element={<Packs/>}/>
        <Route path="cards" element={<Cards/>}/>
        <Route path="learn" element={<Learn/>}/>


        <Route path="/404" element={<h2>404: PAGE NOT FOUND</h2>}/>
        <Route path="*" element={<Navigate to="/404"/>}/>
    </Routes>
</div>
)
}


/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header>
    </div>
  );
}

export default App;*/
