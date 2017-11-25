import React, {Component} from 'react';
import Header from './header';
import Menu from './menu';

import SideMenu from 'react-native-side-menu';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';
import {registrarUsuario} from "../../api_requests/requests";

import {
  Text,
  View,
  StyleSheet
} from 'react-native';

import ListExcursions from '../listExcursions';
import ListThemes from '../themesExcursion';
import ListPlaces from '../placesList';

const excursions = () => <ListExcursions/>
const themes = () => <ListThemes/>;
const places = () => <ListPlaces/>;

class Home extends Component{

  constructor(){
    super();
    this.state = {
      isOpen: false,
      index: 0,
      routes: [
        {key: 'excursions', title: 'Excursiones'},
        {key: 'themes', title: 'Temas'},
        {key: 'places', title: 'Lugares'}
      ]
    }
  }

  _handleIndexChange = index => this.setState({ index });

  _renderHeader = props =>
      <TabBar {...props}
              scrollEnabled = {false}
              indicatorStyle={styles.indicator}
              style={styles.tabbar}
              tabStyle={styles.tab}
              labelStyle={styles.label}
      />

  _renderScene = SceneMap({
    'excursions': excursions,
    'themes': themes,
    'places': places
  });

  toggle(){
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  updateMenu(isOpen){
    this.setState({
      isOpen
    });
  }

  render(){
    return(
      <View style={{flex: 1}}>
        <SideMenu
          menu={<Menu/>}
          isOpen={this.state.isOpen}
          onChange={(isOpen) => this.updateMenu(isOpen)}
          style={{flex: 1}}
        >
          {/* Header */}
          <View style={[{flex: 1}, styles.container]}>
            <Header toggle={this.toggle.bind(this)}/>
            
            <TabViewAnimated
              style={{flex: 1, backgroundColor: '#f0f0f0'}}
              navigationState={this.state}
              renderScene={this._renderScene}
              renderHeader={this._renderHeader}
              onIndexChange={this._handleIndexChange}
            />
          </View>

        </SideMenu>
      </View>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0f0f0'
  },
  tabbar: {
    backgroundColor:  'white'
  },
  tab: {
    width: 120
  },
  indicator: {
    backgroundColor: '#1E90FF',
  },
  label: {
    color: 'black',
    fontSize: 12
  }
});

export default Home;