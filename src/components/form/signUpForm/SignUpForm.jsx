import React from 'react';
import { Formik, Form } from 'formik';
import TextField from '../../textField/TextField';
import { validationSchemaSignUp } from '../../../assets/validatinSchema/validationSchemas';

const SignUpForm = () => {
  return (
    <Formik
      initialValues={{
        firstName: '',
        email: '',
        password: '',
        confirmPassword: '',
      }}
      validationSchema={validationSchemaSignUp}
      onSubmit={(data) => console.log(data)}
    >
      {() => (
        <div className="col-md-5 ">
          <h1 className="my-4 font-weight-bolt-display-4">SignUp</h1>
          <Form>
            <TextField label="First Name" name="firstName" type="text" />
            <TextField label="Email" name="email" type="email" />
            <TextField label="Password" name="password" type="password" />
            <TextField
              label="Confirm Password"
              name="confirmPassword"
              type="password"
            />
            <button className="btn btn-dark mt-3" type="submit">
              Sign Up
            </button>
            <button className="btn btn-danger mt-3 ml-3" type="reset">
              Reset
            </button>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default SignUpForm;
