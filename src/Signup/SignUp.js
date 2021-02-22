import React from "react";
import "bulma/css/bulma.css";
import Navbar from "./../navbar/Navbar";
import CoolButton from "./../CoolButton/CoolButton";
import FormField from "./../Formfield/FormField";

const SignUp = () => {
  return (
    <>
      <Navbar />
      <form action="/endPointName" method="GET">
        <FormField label="Name" type ="text" placeholder="Maria Conchita"/>
        <FormField label="Email" type ="email" placeholder="conchi@gmail.com"/>
        <FormField label="Password" type ="password" placeholder="**********"/>

        <CoolButton action="Submit" className="button is-warning"/>
      </form>
    </>
  );
};

export default SignUp;
