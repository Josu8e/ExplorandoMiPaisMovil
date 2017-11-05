import React, {Component} from 'react';
import Header from './header';
import Menu from './menu';

import SideMenu from 'react-native-side-menu';

import {
  Text,
  View,
  StyleSheet
} from 'react-native';

import ListExcursions from '../listExcursions';

class Home extends Component{

  constructor(){
    super();
    this.state = {
      isOpen: false
    }
  }

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
            {/* Excursions */}
            <ListExcursions/>
          </View>

        </SideMenu>
      </View>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0f0f0'
  }
});

export default Home;