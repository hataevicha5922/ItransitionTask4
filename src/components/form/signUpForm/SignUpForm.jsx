import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form } from 'formik';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

import TextField from '../../textField/TextField';
import ButtonGroup from '../../buttons/ButtonGroup';
import TextNav from '../../textNav/TextNav';
import { validationSchemaSignUp } from '../../../assets/validatinSchema/validationSchemas';

import styles from './SignUpForm.module.scss';

const SignUpForm = () => {
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const registr_data = new Date().toLocaleDateString('en-ca');
  const visit_date = new Date().toLocaleDateString('en-ca');
  const status = 'acrive';
  const id_user = function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const handleSubmit = async (id, name, email, password, registr_data) => {
    try {
      await axios.post(
        '/auth/register',
        JSON.stringify({
          id,
          user_name: name,
          email,
          password,
          registr_data,
          visit_date,
          status,
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
    <>
      <Formik
        initialValues={{
          firstName: '',
          email: '',
          password: '',
          confirmPassword: '',
        }}
        validationSchema={validationSchemaSignUp}
        onSubmit={(data) => {
          handleSubmit(
            id_user(0, 100),
            data.firstName,
            data.email,
            data.password,
            registr_data
          );
        }}
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
              <ButtonGroup sign="Sign Up" />
              <TextNav
                text="I already have an account"
                path="/signIn"
                sign="Sign In"
              />
            </Form>
            {error && <div className={styles.error}> {error.code}</div>}
          </div>
        )}
      </Formik>
    </>
  );
};

export default SignUpForm;
