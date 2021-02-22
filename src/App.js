import React from "react";
import "bulma/css/bulma.css";
import Navbar from "./navbar/Navbar";
import FormField from "./Formfield/FormField";
import SignUp from "./Signup/SignUp";

const App = () => {
  return (
    <>
      <Navbar />
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField
        label="Email"
        type="email"
        placeholder="e.g. alexsmith@gmail.com"
      />
      <SignUp/>
    </>
  );
};

export default App;
