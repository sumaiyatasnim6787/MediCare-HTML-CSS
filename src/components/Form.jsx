import React, { useState,useEffect } from "react";
import PhoneInput from "react-phone-number-input";
import Button from "./Button";
import logo from "../assets/logo.svg";

import "./form.css";

import "react-phone-number-input/style.css";

const Form = (props) => {
  const [value, setValue] = useState();
  const [password, setpassword] = useState("");

  const test=()=>{
    props.phoneNumber(value);
    props.Password(password);
  }
  useEffect(()=>{
    test();  
    // console.log("useEffect"); 
  })

  return (
    <form className="">
      <img src={logo} alt="MediCare" className="logo" />
      
        <PhoneInput
          placeholder="Enter phone number"
          defaultCountry="BD"
          value={value}
          onChange={setValue}

          // number={props.phoneNumber(value)}
        />
        <input
          type="password"
          className="passwordInput"
          placeholder={props.passPlaceHolder}
          onChange={(e) => {
            setpassword(e.target.value);
          }}
          // password={props.Password(password)}
        />

      <Button name={props.buttonName} func={props.func} />
    </form>
  );
};

export default Form;
