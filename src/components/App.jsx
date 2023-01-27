import React from "react";
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { ContactFilter } from "./ContactFilter/ContactFilter";

export const App = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontSize: 20,
        color: "#010101",
        background: "linear-gradient(0.25turn, #3f87a6, #ebf8e1, #f69d3c)",
      }}>
      <h1>Phonebook ☎</h1>
      <ContactForm />
      <ContactFilter />
      <ContactList />
    </div>
  );
};
