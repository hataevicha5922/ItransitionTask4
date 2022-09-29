import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { validationSchemaSignIn } from '../../../assets/validatinSchema/validationSchemas';

import TextField from '../../textField/TextField';
import ButtonGroup from '../../buttons/ButtonGroup';
import TextNav from '../../textNav/TextNav';
import styles from './SignInForm.module.scss';

const SignInForm = () => {
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (email, password) => {
    try {
      await axios.post(
        '/auth/logIn',
        JSON.stringify({
          email,
          password,
        }),
        {
          headers: { 'Content-Type': 'application/json' },
        }
      );
      navigate('/main');
    } catch (error) {
      setError(error);
    }
  };

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={validationSchemaSignIn}
      onSubmit={({ email, password }) => handleSubmit(email, password)}
    >
      {() => (
        <div className="col-md-5 pt-5">
          <h1 className="my-4 font-weight-bolt-display-4">SignIn</h1>
          <Form>
            <TextField label="Email" name="email" type="email" />
            <TextField label="Password" name="password" type="password" />

            <ButtonGroup sign="Sign In" />
            <TextNav
              text="I don't have an account"
              path="/signUp"
              sign="Sign Up"
            />
            {error && <div className={styles.error}> {error.code}</div>}
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default SignInForm;
