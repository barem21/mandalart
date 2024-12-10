import { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <>
      <Header />
      <LoginPage />
      <Footer />
    </>
  );
}

export default App;
