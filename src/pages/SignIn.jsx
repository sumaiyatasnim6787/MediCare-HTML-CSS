import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form } from "../components";

const SignIn = () => {
  const [phoneNumber, setphoneNumber] = useState("");
  const [password, setpassword] = useState("");

  const submit = (e) => {
    e.preventDefault();
    axios({
      method: "post",
      url: "http://localhost:4000/api/v1/signin",
      data: {
        phone: phoneNumber,
        password: password,
      },
    }).then((response) => {
      console.log(response);
    });
  };

  const getphonNumber = (data) => {
    setphoneNumber(data);
  };
  const getPassword = (data) => {
    setpassword(data);
  };
  return (
    <div>
      <Form
        passPlaceHolder="Enter Your Password"
        buttonName="Sign In"
        func={submit}
        phoneNumber={getphonNumber}
        Password={getPassword}
      />
      <Link to="/signup">Sign Up</Link>
    </div>
  );
};

export default SignIn;
