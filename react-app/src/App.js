import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";
import DemoSignUpForm from "./components/auth/DemoSignUpForm";
import NavBar from "./components/NavBar";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import SplashPage from "./components/SplashPage";
import Shop from './components/Shop';
import Cart from './components/Cart';
import { authenticate } from "./store/session";
import Footer from "./components/Footer";
import DemoLoginForm from "./components/auth/DemoLoginForm";

function App() {
  // const user = useSelector(state => state.session.user)
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

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
        <Route path="/demo-login" exact={true}>
          <DemoLoginForm />
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
        <ProtectedRoute path="/cart" exact={true} >
          <Cart />
        </ProtectedRoute>
        {/* <Route path="/cart" exact={true}>
        </Route> */}
        <Route path="/" exact={true}>
          <SplashPage /> 
        </Route>
      </Switch>
      <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
