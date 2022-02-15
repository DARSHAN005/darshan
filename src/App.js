
import './App.css';
import HeaderComponent from './Components/HeaderComponent';
import FooterComponent from './Components/FooterComponent';
import {BrowserRouter as Router,Route,Switch } from 'react-router-dom'
import LoginComponents from './Components/LoginComponents';
import ListUserComponent from './Components/ListUserComponent';
import AddUsers from './Components/AddUsers';
import ProductsComponents from './Components/ProductsComponents';
import AdminProductsComponents from './Components/AdminProductComponent';
import Home from './Components/HomeComponent';
import AdminHome from './Components/AdminHomeComponent';
function App() {
  return (
    
      <Router>
        <div className='container'>
          <HeaderComponent/>
          <div className='container'>
          
            <Switch>
            <Route exact path="/" exact component={LoginComponents}></Route>
              <Route path="/home" component={Home}></Route>
              <Route path="/adminhome" component={AdminHome}></Route>
              <Route path="/Register"  component={AddUsers}></Route>
              <Route  path="/list"  component={ListUserComponent}></Route>
              <Route  path="/Products"  component={ProductsComponents}></Route>
              <Route  path="/AdminProducts"  component={AdminProductsComponents}></Route>
              <Route ><LoginComponents/></Route>
            </Switch>
          </div>
          <FooterComponent/>
        </div>
      </Router>
    
  );
}

export default App;
