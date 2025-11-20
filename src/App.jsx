import { useState } from "react";
import "./App.css";
import MainPage from "./pages/MainPage/MainPage";
import Header from "./components/Header/Header";
import MoviesPage from "./pages/MoviesPage/MoviesPage";
import UserPage from "./pages/UserPage/UserPage";

function App() {
  return (
    <>
      <Header />
      {/* <MainPage /> */}
      {/* <MoviesPage /> */}
      <UserPage/>
    </>
  );
}

export default App;
