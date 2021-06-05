import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";
import DemoSignUpForm from "./components/auth/DemoSignUpForm";
import NavBar from "./components/NavBar";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import SplashPage from "./components/SplashPage";
import Shop from './components/Shop';
import Cart from './components/Cart';
import UsersList from "./components/UsersList";
import User from "./components/User";
import { authenticate } from "./store/session";

function App() {
  const user = useSelector(state => state.session.user)
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, []);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <div className='background'>
      <Switch>
        <Route path="/login" exact={true}>
          <LoginForm />
        </Route>
        <Route path="/sign-up" exact={true}>
          <SignUpForm />
        </Route>
        <Route path="/demo-sign-up" exact={true}>
          <DemoSignUpForm />
        </Route>
        {/* <ProtectedRoute path="/users" exact={true} >
          <UsersList/>
        </ProtectedRoute>
        <ProtectedRoute path="/users/:userId" exact={true} >
          <User />
        </ProtectedRoute> */}
        {/* <ProtectedRoute path="/" exact={true} >
        </ProtectedRoute> */}
        <ProtectedRoute path="/shop" exact={true} >
          <Shop />
        </ProtectedRoute>
        <Route path="/cart" exact={true}>
          <Cart />
        </Route>
        <Route path="/" exact={true}>
          <SplashPage /> 
        </Route>
      </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
