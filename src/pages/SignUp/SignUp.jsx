import React from 'react';
import signUpImage from '../../assets/images/signUpImage.png';
import SignUpForm from '../../components/form/signUpForm/SignUpForm';

const SignUp = () => {
  return (
    <div className="container h-100">
      <div className="row h-100">
        <SignUpForm />
        <div className="col-md-7 my-auto">
          <img className="img-fluid w-100" src={signUpImage} alt="signUp" />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
