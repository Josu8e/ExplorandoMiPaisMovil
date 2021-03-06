import React, {Component} from 'react';

import Home from './components/home/home';
import Login from './components/login';
import Excursion from './components/excursion/excursion';
import ReservationList from './components/myReservations';

import {
  Router,
  Scene
}from 'react-native-router-flux';


class App extends Component{
  render(){
    return(
      <Router>
        <Scene key = 'root'>
          <Scene key = 'home' component = {Home} title = 'Inicio' hideNavBar={true}></Scene>
          <Scene key = 'login' component = {Login} direction="vertical" title = 'Ingresar' hideNavBar={true}></Scene>
          <Scene key = 'excursion' component = {Excursion} direction = 'vertical' hideNavBar = {true}></Scene>
          <Scene key = 'reservas' component = {ReservationList}></Scene>
        </Scene>
      </Router>
    );
  }
}

export default App;