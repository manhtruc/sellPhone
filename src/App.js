import { useEffect } from "react";
import { connect } from "react-redux";
import {
  BrowserRouter as Router
} from "react-router-dom";
import { loginFailed, loginSuccess } from "./actions/loginAction";
import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import AuthNavigator from "./router/AuthNavigator";
import Navigator from './router/Navigator';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App({ loginStatus, loginSuccess, loginFailed }) {

  useEffect(() => {
    const isLoginStorage = localStorage.getItem('loginStatus');
    if (isLoginStorage === "true")
      loginSuccess();
    else loginFailed()
  }, [loginStatus])

  return (
    <div className='app-root'>
      <Router>
        {loginStatus ? <>
          <Header />
          <Navigator />
          <Footer />
        </> :
          <AuthNavigator />}
        <ToastContainer
          autoClose={2000}
        />
      </Router>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    loginStatus: state.login.status
  }
}

export default connect(mapStateToProps, { loginSuccess, loginFailed })(App);
