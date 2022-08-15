import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";
import data from "./Data";
import "./App.css";

export default function App() {
  const cardData = data.map((item) => {
    return <Card key={item.id} {...item} />;
  });
  return (
    <div>
      <Navbar />
      <div className="container">
        <Header />
        <div className="mainCard">{cardData}</div>
      </div>
      <Footer />
    </div>
  );
}
