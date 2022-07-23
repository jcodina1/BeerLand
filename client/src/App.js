import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import LandingPage from "./components/LandingPage/LandingPage";
import Home from "./components/Home/Home";
import BeerDetail from "./components/BeerDetail/BeerDetail";
import Login from "./components/Login/login";
import Register from "./components/register/resgister";
import { AuthProvider } from "./components/context/authContext";
import AddProduct from "./components/AddProduct/AddProduct";
import RegisterSeller from "./components/register/registerSeller";

function App() {
  return (
    <Router>
      <div className="App">
        <AuthProvider>
           <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/add" component={AddProduct} />
          <Route path="/beers/detail/:id" component={BeerDetail} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/registerCompany" component={RegisterSeller} />
        </Switch>
        </AuthProvider>
       
      </div>
    </Router>
  );
}

export default App;
