import React from 'react';
import { Formik, Form } from 'formik';
import TextField from '../../textField/TextField';
import { validationSchemaSignIn } from '../../../assets/validatinSchema/validationSchemas';

const SignInForm = () => {
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={validationSchemaSignIn}
      onSubmit={(data) => console.log(data)}
    >
      {() => (
        <div className="col-md-5">
          <h1 className="my-4 font-weight-bolt-display-4">SignIn</h1>
          <Form>
            <TextField label="Email" name="email" type="email" />
            <TextField label="Password" name="password" type="password" />

            <button className="btn btn-dark mt-3" type="submit">
              Sign In
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

export default SignInForm;
