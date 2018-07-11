import React, { Component } from 'react';
import { Link, Route, Switch} from 'react-router-dom';
import './App.css';
import { Navbar, 
         NavItem,
         Icon,
        } from 'react-materialize'

import Home from './Views/Home';
import Visualization from './Views/Visualization';
import DietInfo from './Views/DietInfo';
import NutritionInfo from './Views/NutritionInfo';


const NotFound = () => <h1>Not Found</h1>;

class App extends Component {
  render() {
    return (
      <main className='main' id='main'>
          <Navbar brand='BasicNutrition' right className='blue lighten-2'>
            <NavItem href='get-started.html'><Icon>search</Icon></NavItem>
            <NavItem><Link to="/">Home</Link></NavItem>
            <NavItem><Link to="/DietInfo">Diet Info</Link></NavItem>
            <NavItem><Link to="/NutritionInfo">Nutrition Info</Link></NavItem>
            {/* <NavItem><Link to="/Visualization">Visualization</Link></NavItem> */}
          </Navbar>
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route path='/Visualization' component={Visualization}/>
              <Route path='/DietInfo' component={DietInfo}/>
              <Route path='/NutritionInfo' component={NutritionInfo}/>
              <Route path='*' component={NotFound}/>
            </Switch>
      </main>
    );
  }
  // <Navbar brand='logo' right className='blue lighten-2'>
  //           <NavItem href='get-started.html'><Icon>search</Icon></NavItem>
  //           <NavItem> <Link to="./Views/NutritionFacts">NutritionFacts</Link></NavItem>
  //           <NavItem onClick={() => console.log('this will take you to the Food page')}>Food Info Page</NavItem>
  //           <NavItem onClick={() => console.log('this will take you to the DietInfo page')}>DietInfo</NavItem>
  //           <NavItem onClick={() => console.log('this will take you to the Visualization page')}>Visualization</NavItem>
}

export default App;
