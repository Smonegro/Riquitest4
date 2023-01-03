import React, { useState } from "react";
import { Formik, Form } from "formik";
import styled from "styled-components";
import * as Yup from "yup";

import { register } from "../api/auth";

import Card from "../components/Card";
import Button from "../components/Button";
import Input from "../components/Input";
import MainHeader from "../components/MainHeader/MainHeader";

const initialValues = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
};

const passwordLength = { min: 6, max: 12 };

const schema = Yup.object().shape({
  first_name: Yup.string()
    .label("First Name")
    .required("This field is Required."),
  last_name: Yup.string()
    .label("Last Name")
    .required("This field is Required."),
  email: Yup.string()
    .email("Invalid email address")
    .required("This field is Required.")
    .label("Email Address"),
  password: Yup.string()
    .label("Password")
    .min(passwordLength.min, "Your password must be at least 6 characters")
    .max(passwordLength.max, "Your password must be less than 12 character")
    .required("This field is Required."),
});

const Register = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (values) => {
    setIsLoading(true);
    await register(values);
    alert("Successfully Register in!");
    setIsLoading(false);
  };

  return (
    <div>
      <MainHeader />
      <FormControl>
        <Card className="register">
          <Formik
            initialValues={initialValues}
            validationSchema={schema}
            onSubmit={handleSubmit}
          >
            {({ handleSubmit }) => (
              <Form className="control">
                <div style={{ marginTop: "8px" }}>
                  <div className="tittle">
                    <label>Register</label>
                  </div>
                  <Input
                    label="First Name"
                    name="first_name"
                    placeholder="Ricardo "
                    styleWrapper={{ marginTop: "16px" }}
                    type="text"
                  />
                  <Input
                    label="Last Name"
                    name="last_name"
                    placeholder="Malagon"
                    styleWrapper={{ marginTop: "16px" }}
                    type="text"
                  />
                  <Input
                    label="Email Address"
                    name="email"
                    placeholder="Ricardo@gmail.com"
                    styleWrapper={{ marginTop: "16px" }}
                    type="email"
                  />
                  <Input
                    label="Password"
                    name="password"
                    placeholder="Insert your Password"
                    styleWrapper={{ marginTop: "16px" }}
                    type="password"
                  />

                  <Button
                    kind="outline"
                    type="submit"
                    onClick={handleSubmit}
                    isLoading={isLoading}
                    disabled={isLoading}
                    className="login-button"
                  >
                    Register
                  </Button>

                  <div className="footer">
                    Already have a Upnread account?
                    <a href="http://10.0.0.116:3000/login"> Login </a>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </Card>
      </FormControl>
    </div>
  );
};

export default Register;

const FormControl = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .tittle {
    font-weight: bold;
    flex: 1;
    color: black;
    font-size: 1.5rem;
    margin-top: 0.4rem;
    margin-left: 10rem;
    display: block;
  }

  .register {
    width: 100%;
    max-width: 30rem;
    padding: 2rem;
  }

  .login-button {
    width: 100%;
  }

  .control {
    margin: 1rem 0;
    display: flex;
    align-items: stretch;
    flex-direction: column;
  }

  .centrado {
    align-items: center;
    font: inherit;
  }

  .footer {
    margin-top: 1rem;
    margin-left: 1rem;
    font-size: 0.9rem;
  }
`;

// .googlebutton {
//   margin-top: 1rem;
//   margin-bottom: 1rem;
//   width: 100%;
