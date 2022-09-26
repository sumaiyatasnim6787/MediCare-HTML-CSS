import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form } from "../components";

const SignUp = () => {
  const [phoneNumber, setphoneNumber] = useState("");
  const [password, setpassword] = useState("");

  const submit = (e) => {
    e.preventDefault();
    axios({
      method: "post",
      url: " http://localhost:4000/api/v1/signup",
      data: {
        phone: phoneNumber,
        password: password,
      },
    }).then((response)=>{
        console.log(response);
    });
    
    console.log("request done");
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
      <Link to="/signin">sign in</Link>
    </div>
  );
};

export default SignUp;
