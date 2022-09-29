import React from 'react';
import SignInForm from '../../components/form/signInForm/SignInForm';
import signUpImage from '../../assets/images/signUpImage.png';
import styles from './SignIn.module.scss';

const SignIn = () => {
  return (
    <div className={`container ${styles.wrapper} `}>
      <div className="row">
        <SignInForm />
        <div className="col-md-7 my-auto">
          <img className="img-fluid w-100" src={signUpImage} alt="signUp" />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
