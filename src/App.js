import React, { lazy, Suspense } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import RootLayout from './pages/Root';
import { useContext } from 'react';
import AuthContext from './Context/AuthContext';
import LoadingSpinner from './UI/LoadingSpinner';

function App() {
  const authCtx = useContext(AuthContext)
  const { isLoggedIn } = authCtx

  const Products = lazy(() => import('./pages/Products'))
  const Home = lazy(() => import('./pages/Home'))
  const About = lazy(() => import('./pages/About'))
  const ContactUs = lazy(() => import('./pages/ContactUs'))
  const ProductDetails = lazy(() => import('./pages/ProductDetails'))
  const Login = lazy(() => import('./pages/Login'))

  return (
    <>
      <RootLayout>
        <Suspense fallback={
          <div className="d-flex justify-content-center align-items-center" style={{height:'100vh'}}>
            <LoadingSpinner />
          </div>
        }>
          <Switch>
            <Route path="/" exact><Home /></Route>
            <Route path="/home"><Home /></Route>
            <Route path="/about" ><About /></Route>
            {!isLoggedIn && <Route path="/productlist" exact><Redirect to="/login" /></Route>}
            {isLoggedIn && <Route path="/productlist" exact><Products /></Route>}
            {!isLoggedIn && <Route path="/productlist/:id"><Redirect to="/login" /></Route>}
            {isLoggedIn && <Route path="/productlist/:id"><ProductDetails /></Route>}
            <Route path="/contactus"><ContactUs /></Route>
            {!isLoggedIn && <Route path="/login"><Login /></Route>}
            {isLoggedIn && <Route path="/login"><Redirect to="home" /></Route>}
            <Route path="*"><Redirect to="/home" /></Route>
          </Switch>
        </Suspense>
      </RootLayout>
    </>
  );
}

export default App;
