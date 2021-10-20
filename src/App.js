import { BrowserRouter as Router,Switch, Route } from 'react-router-dom';
import './App.css';
import AboutUs from './components/AboutUs/AboutUs';
import ContactUs from './components/ContactUs/ContactUs';
import AuthProvider from './components/context/AuthProvider';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Registration from './components/Registration/Registration';
import ServiceDetails from './components/ServiceDetails/ServiceDetails';
import Services from './components/Services/Services';
import Footer from './components/Shared/Footer';
import Header from './components/Shared/Header';

function App() {
  return (
    <div>
        <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
              <Route path="/home">
                  <Home></Home>
              </Route>
              <PrivateRoute path ="/services/:serviceId/:serviceName/:description">
                <ServiceDetails></ServiceDetails>
              </PrivateRoute>
              <Route path="/login">
                <Login></Login>
              </Route>
              <PrivateRoute path="service">
                <Services></Services>
              </PrivateRoute>
              <Route path="/registration">
                <Registration></Registration>
              </Route>
              <Route path='/about'>
                <AboutUs></AboutUs>
              </Route>
              <Route path="/contact">
                <ContactUs></ContactUs>
              </Route>
              <Route path="*">
                  <NotFound></NotFound>
              </Route>
          </Switch>
          <Footer></Footer>
        </Router>
        </AuthProvider>
    </div>
  );
}

export default App;
