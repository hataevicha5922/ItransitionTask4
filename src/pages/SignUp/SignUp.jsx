import React from 'react';
import signUpImage from '../../assets/images/signUpImage.png';
import SignUpForm from '../../components/form/signUpForm/SignUpForm';
import styles from './SignUp.module.scss';

const SignUp = () => {
  return (
    <div className={`container ${styles.wrapper}`}>
      <SignUpForm />
      <div className="col-md-7 my-auto">
        <img className="img-fluid w-100" src={signUpImage} alt="signUp" />
      </div>
    </div>
  );
};

export default SignUp;
