import React, { useState } from "react";
import { Form } from "../components";

const SignUp = () => {
  const [phoneNumber, setphoneNumber] = useState("");
  const [password, setpassword] = useState("");

  const submit = (e) => {
    e.preventDefault();
      console.log({
        phoneNumber,
        password,
      });
  };

  const getPhonNumber = (data) => {
    setphoneNumber(data);
  };

  const getPassword = (data) => {
    setpassword(data);
  };
  return (
    <div>
      <Form
        passPlaceHolder="Enter New Password"
        buttonName="Sign Up"
        func={submit}
        phoneNumber={getPhonNumber}
        Password={getPassword}
      />
    </div>
  );
};

export default SignUp;
