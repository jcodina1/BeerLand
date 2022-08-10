import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import LandingPage from "./components/LandingPage/LandingPage";
import Home from "./components/Home/Home";
import BeerDetail from "./components/BeerDetail/BeerDetail";
import { Register } from "./components/register/resgister2";
import { Login } from "./components/Login/login2";
import { AuthProvider } from "./components/Context/Contestautenticacion.jsx";
import AddProduct from "./components/AddProduct/AddProduct";
import UserFavs from "./components/UserFavs/UserFavs";
import PromoPage from "./components/PromoPage/PromoPage";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Checkout from "./components/Checkout/Checkout";
import Cart from "./components/Cart/Cart";
import UpdateProduct from "./components/Forms/UpdateProductForm";
import ValidacionUSer from "./components/validacion/validacionUsuario";
import RegisterSeller from "./components/register/RegisterSeller";
import Purchases from "./components/Purchases/AllPurchases"
import axios from "axios";
import BreweryDetail from "./components/BreweryDetail/BreweryDetail";
import ShowBrewery from "./components/ShowBrewery/ShowBrewery";
import UserProfile from "./components/UserProfile/UserProfile"
import UserPurchases from "./components/Purchases/UserPurchases/UserPurchases";
import SupportUser from "./components/SupportUser/SuportUser";
import Contact from "./components/Contact/Contact";
import AdminAnswer from "./components/SuperAdmin/AdminSupport/AdminAnswer";

import BrewerySales from "./components/Purchases/BrewerySales"
import SuperAdmin from "./components/SuperAdmin/SuperAdmin";
import Support from "./components/Support/Support";

import AboutUs from "./components/AboutUs/AboutUs";

require("dotenv").config();
axios.defaults.baseURL = process.env.REACT_APP_API || "http://localhost:3001"; //

function App() {
  return (
    <Router>
      <div className="App">
        <AuthProvider>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/promoPage" component={PromoPage} />
            <Route exact path="/home" component={ValidacionUSer} />
            <Route exact path="/add" component={AddProduct} />
            <Route exact path="/update" component={UpdateProduct} />
            <Route path="/beers/detail/:id" component={BeerDetail} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/checkout" component={Checkout} />
            <Route path="/cart" component={Cart} />
            <Route path="/registerCompany" component={RegisterSeller} />
            <Route path="/user/favourites" component={UserFavs} />
            <Route path="/purchases" component={Purchases} />
            <Route path="/sellers" component={ShowBrewery}/>
            <Route path="/seller/detail/:id" component={BreweryDetail}/>
            <Route path="/userProfile" component={UserProfile}/>
            <Route path="/history" component={UserPurchases}/>
            <Route path="/purchases/seller/:id" component={BrewerySales}/>
            <Route path="/test" component={SuperAdmin}/>
            <Route exact path="/SupportUser" component={SupportUser}/>
            <Route exact path="/Support" component={Support}/>
            <Route exact path="/Contact" component={Contact}/>
            <Route exact path="/AdminAnswer" component={AdminAnswer}/>
            <Route path="/aboutus" component={AboutUs}/>
          </Switch>
        </AuthProvider>
      </div>
    </Router>
  );
}

export default App;
