import React from "react";
import Main from "../components/Main/Main";
import { AnimatePresence } from "framer-motion";
import "../assets/styles/App.scss";

const App = () => {
  return (
    <AnimatePresence>
      <Main />
    </AnimatePresence>
  );
};

export default App;
