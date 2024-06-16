import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import Products from './pages/Products';
import Home from './pages/Home';
import About from './pages/About';
import RootLayout from './pages/Root';
import ContactUs from './pages/ContactUs';
import ProductDetails from './pages/ProductDetails';
import Login from './pages/Login';
import { useContext } from 'react';
import AuthContext from './Context/AuthContext';

function App() {
  const authCtx=useContext(AuthContext)
  const {isLoggedIn} = authCtx
  return (
    <> 
      <RootLayout>
        <Switch>
        <Route path="/" exact><Home/></Route>
        <Route path="/home"><Home/></Route>
        <Route path="/about" ><About/></Route>
        {!isLoggedIn && <Route path="/productlist" exact><Redirect to="/login"/></Route>}
        {isLoggedIn && <Route path="/productlist" exact><Products/></Route>}
        {!isLoggedIn && <Route path="/productlist/:id"><Redirect to="/login"/></Route>}
        {isLoggedIn && <Route path="/productlist/:id"><ProductDetails/></Route>}
        <Route path="/contactus"><ContactUs/></Route>
        {!isLoggedIn && <Route path="/login"><Login/></Route>}
        {isLoggedIn && <Route path="/login"><Redirect to="home"/></Route>}
        </Switch>
      </RootLayout>
    </>
  );
}

export default App;
