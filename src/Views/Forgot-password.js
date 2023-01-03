import React, { useState } from "react";
import { Formik, Form } from "formik";
import styled from "styled-components";
import * as Yup from "yup";

import { forgotPassword } from "../api/auth";

import Card from "../components/Card";
import Button from "../components/Button";
import Input from "../components/Input";

const initialValues = {
  email: "",
};

const schema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("This field is Required.")
    .label("Email Address"),
});

const Forgotpassword = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (values) => {
    setIsLoading(true);
    await forgotPassword(values);
    alert("Successfully Login in!");
    setIsLoading(false);
  };

  return (
    <FormControl>
      <Card className="login">
        <Formik
          initialValues={initialValues}
          validationSchema={schema}
          onSubmit={handleSubmit}
        >
          {({ handleSubmit }) => (
            <Form className="control">
              <div style={{ marginTop: "8px" }}>
                <div className="tittle">
                  <label>Reset your password</label>
                  <div>
                    {" "}
                    Enter the email address associated with your account and
                    we'll send you a code to reset your password.
                  </div>
                </div>
                <Input
                  label="Email Address"
                  name="email"
                  placeholder="Ricardo@gmail.com"
                  styleWrapper={{ marginTop: "16px" }}
                  type="email"
                />

                <Button
                  kind="outline"
                  type="submit"
                  onClick={handleSubmit}
                  isLoading={isLoading}
                  disabled={isLoading}
                  className="login-button"
                >
                  Continue
                </Button>
                <div className="footer">
                  Check your email and follow the instructions.
                  {/* cambiar al link que corresponde  */}
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </Card>
    </FormControl>
  );
};

export default Forgotpassword;

const FormControl = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .tittle {
    font-weight: bold;
    flex: 1;
    color: black;
    font-size: 1.25rem;
    margin-top: 0.75rem;
    margin-bottom: 0.4rem;
    margin-left: 10rem;
    display: block;
  }

  .login {
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
  .googlebutton {
    margin-top: 1rem;
    margin-bottom: 1rem;
    width: 100%;
  }
  .centrado {
    align-items: center;
    font: inherit;
  }

  .footer {
    margin-top: 1rem;
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;
    font-size: 0.9rem;
    color: blue;
  }
`;
