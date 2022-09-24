import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import {
  pathHomePage,
  pathMainPage,
  pathSignInPage,
  pathSignUpPage,
} from './assets/paths';
import Home from './pages/Home';
import Main from './pages/Main';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={pathHomePage} element={<Home />} />
        <Route path={pathMainPage} element={<Main />} />
        <Route path={pathSignInPage} element={<SignIn />} />
        <Route path={pathSignUpPage} element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
