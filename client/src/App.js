import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import LandingPage from "./components/LandingPage/LandingPage";
import Home from "./components/Home/Home";
import BeerDetail from "./components/BeerDetail/BeerDetail";
import { Register } from "./components/register/resgister2";
import { Login } from "./components/Login/login2";
import { AuthProvider } from "./components/context/contestautenticacion";
import AddProduct from "./components/AddProduct/AddProduct";
// import Cart from "./components/Cart/Cart";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Checkout from "./components/Checkout/Checkout";
import Cart from "./components/Cart/Cart";
import UpdateProduct from "./components/Forms/UpdateProductForm";
import ValidacionUSer from "./components/validacion/validacionUsuario";


function App() {
  return (
    <Router>
      <div className="App">
        <AuthProvider>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/home" component={ValidacionUSer} />
            <Route exact path="/add" component={AddProduct} />
            <Route exact path="/update" component={UpdateProduct} />
            <Route path="/beers/detail/:id" component={BeerDetail} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/checkout" component={Checkout} />
            <Route path="/cart" component={Cart} />
          </Switch>
        </AuthProvider>
      </div>
    </Router>
  );
}

export default App;
