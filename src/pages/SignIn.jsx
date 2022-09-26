import React,{useState} from "react";
import { Form } from "../components";

const SignIn = () => {
    const [phoneNumber, setphoneNumber] = useState("");
    const [password, setpassword] = useState("");

  const submit = (e) => {
    e.preventDefault();
    console.log({
        phoneNumber,
        password
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
    </div>
  );
};

export default SignIn;
