import React, { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleClick = async () => {
    console.log(name, email, password);
  };
  return (
    <div className="d-flex justify-content-center" style={{ height: "80vh" }}>
      <div className="container align-items-center d-flex">
        <div className="row col-md-6 offset-md-3 text-center">
          <h1 className="pt-5 fw-bold">Let's get Started</h1>
          <p className="lead pb-4">Sign up for free.No credit card required</p>
          <div className="form-group"></div>
          <Input label="Name" value={name} setValue={setName} />
          <Input label="Email" value={email} setValue={setEmail} type="email" />
          <Input
            label="Password"
            value={password}
            setValue={setPassword}
            type="password"
          />
          <Button
            handleClick={handleClick}
            type="danger"
            size="sm"
            text="Register"
          />
        </div>
      </div>
      <div className="row">
        <pre>{JSON.stringify({ name, email, password }, null, 4)}</pre>
      </div>
    </div>
  );
};

export default Register;
