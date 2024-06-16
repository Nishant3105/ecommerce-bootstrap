import { Route, Switch } from 'react-router-dom';
import './App.css';
import Products from './pages/Products';
import Home from './pages/Home';
import About from './pages/About';
import RootLayout from './pages/Root';
import ContactUs from './pages/ContactUs';
import ProductDetails from './pages/ProductDetails';
import Login from './pages/Login';

function App() {
  return (
    <> 
      <RootLayout>
        <Switch>
        <Route path="/" exact><Home/></Route>
        <Route path="/home"><Home/></Route>
        <Route path="/about" ><About/></Route>
        <Route path="/productlist" exact><Products/></Route>
        <Route path="/productlist/:id"><ProductDetails/></Route>
        <Route path="/contactus"><ContactUs/></Route>
        <Route path="/login"><Login/></Route>
        </Switch>
      </RootLayout>
    </>
  );
}

export default App;
