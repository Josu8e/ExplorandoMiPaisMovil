import React, {Component} from 'react';
import Header from './header';
import Menu from './menu';

import SideMenu from 'react-native-side-menu';

import {
  Text,
  View,
  StyleSheet
} from 'react-native';

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
          <View style={[{flex: 1}, styles.container]}>
            <Header toggle={this.toggle.bind(this)} />
            <Text style={{color: 'white'}}>Home</Text>
          </View>
        </SideMenu>
      </View>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white'
  }
});

export default Home;