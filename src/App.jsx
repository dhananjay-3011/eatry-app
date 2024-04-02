import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import HeadlineCard from "./Components/HeadlineCard";
import Food from "./Components/Food";
import Category from "./Components/Category";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <HeadlineCard />
      <Food />
      <Category />
    </div>
  );
};

export default App;
