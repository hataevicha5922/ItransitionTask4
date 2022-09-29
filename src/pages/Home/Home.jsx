import React from 'react';

import { Link } from 'react-router-dom';
import { pathSignInPage, pathSignUpPage } from '../../assets/paths';
import signUpImage from '../../assets/images/signUpImage.png';
import styles from './Home.module.scss';

function Home(props) {
  return (
    <div className="container">
      <div className="row">
        <div className={`col-md-5 my-auto ${styles.wrapper_btn}`}>
          <Link to={pathSignInPage} className={styles.link_btn}>
            SignIn
          </Link>
          <Link to={pathSignUpPage} className={styles.link_btn}>
            SignUp
          </Link>
        </div>
        <div className="col-md-7 my-auto">
          <img className="img-fluid w-100" src={signUpImage} alt="signUp" />
        </div>
      </div>
    </div>
  );
}

export default Home;
