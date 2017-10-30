import React, {Component} from 'react';
import {
  Dimensions,
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TouchableHighlight
} from 'react-native';

import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconEnt from 'react-native-vector-icons/Entypo';

const {width, height} = Dimensions.get('window');

class Menu extends Component{

  render(){
    return(
      <View style = {styles.menu}>
        <View style = {styles.avatarContainer}>
          <View style = {styles.avatarImage}>
            <Image>

            </Image>
            <Icon name="user-circle" size={100} color="rgba(0,0,0,.09)" />
          </View>
        </View>
        <ScrollView>

          <TouchableHighlight underlayColor = 'azure'
                              onPress={() => { Actions.login(); }}>
            <View style={styles.textItem}>
              <Text style={styles.text}>Mi Perfil</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight underlayColor = 'azure'
                              onPress={() => { }}>
            <View style={styles.textItem}>
              <Text style={styles.text}>Reservas</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight underlayColor = 'azure'
                              onPress={() => { }}>
            <View style={styles.textItem}>
              <Text style={styles.text}>Pagos</Text>
            </View>
          </TouchableHighlight>

        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({

  menu: {
    height: height,
    backgroundColor: 'white'
  },

  avatarContainer: {
    height: 200,
    backgroundColor: '#1E90FF',
    flexDirection: 'row',
    justifyContent: 'center'
  },

  avatarImage: {
    marginTop: 50
  },

  scrollContainer: {
    width: width / 2 + 59,
  },

  text: {
    color: '#b3b3b3',
    fontSize: 15
  },

  textItem: {
    alignItems: 'center',
    paddingVertical: 15,
    borderColor: '#d9d9d9',
    borderBottomWidth: 1
  },

  rightIcon: {
    paddingRight: 20
  }
});

export default Menu;