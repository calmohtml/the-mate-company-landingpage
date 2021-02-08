import React from "react";
import { motion } from "framer-motion";
import Button from "../Button/Button";
import { FaLeaf, FaWhatsapp } from "react-icons/fa";
import "../../assets/styles/Main/Main.scss";

const Main = () => {
  return (
    <motion.div
      className="wrapper"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <main className="main__container">
        <section className="main__name">
          <ul>
            <li>
              <h2>
                <i>{<FaLeaf />}</i> The Mate Company
              </h2>
            </li>
            <li>
              <h2><i>{<FaWhatsapp />}</i> +54 11 1234-5678</h2>
            </li>
          </ul>
        </section>
        <section className="main__intro">
          <h2>The best mate, here.</h2>
          <h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis?
          </h2>
          <Button text="Submit" />
        </section>
      </main>
    </motion.div>
  );
};

export default Main;
