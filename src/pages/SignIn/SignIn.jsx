import React from 'react';
import SignInForm from '../../components/form/signInForm/SignInForm';
import signUpImage from '../../assets/images/signUpImage.png';

const SignIn = () => {
  return (
    <div className="container h-100">
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
