import React from 'react';

import { Link } from 'react-router-dom';
import { pathSignInPage, pathSignUpPage } from '../../assets/paths';

function Home(props) {
  return (
    <div>
      <Link to={pathSignInPage}>SignIn</Link>

      <Link to={pathSignUpPage}>SignUp</Link>
    </div>
  );
}

export default Home;
