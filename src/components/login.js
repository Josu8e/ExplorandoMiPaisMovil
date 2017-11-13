import React, {Component} from 'react';
import video from '../promoVideo/beach.mp4';

import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  TouchableWithoutFeedback,
  Modal,
  TextInput,
  ToastAndroid
} from 'react-native';

import { Actions } from 'react-native-router-flux';
import Video from "react-native-video";
import Icon from 'react-native-vector-icons/FontAwesome';

const {width, height} = Dimensions.get('window');
import {login, registrarUsuario} from "../api_requests/requests";

class Login extends Component{

  constructor(){
    super();
    this.state = {
      modalVisible: false,
      name: '',
      password: '',
      email: ''
    }
  }

  _login(){
    let email = this.state.email;
    if(email !== '' && password !== password){
      login(email, response => {
        this.setState({
          modalVisible: false
        })
      });
    }
    else{
      ToastAndroid.show('Todos los campos son necesarios', ToastAndroid.SHORT);
    }
  }

  _register(){
    let email = this.state.email;
    let name = this.state.name;
    let password = this.state.password;
    if(email !== '' && password !== '' && name !== ''){
      registrarUsuario(name, email, password, response => {
        this.setState({
          modalVisible: false
        })
      });
    }
    else {
      ToastAndroid.show('Todos los campos son necesarios', ToastAndroid.SHORT);
    }
  }

  render(){
    return(
      <View>
        {/* Modal */}
        <Modal animationType='slide'
               transparent={false}
               visible={this.state.modalVisible}
               onRequestClose={() => {}}>

          <View style = {styles.modalContainer}>
            {/* Background Video */}
            <Video repeat source={video}
                   resizeMode="cover"
                   style={StyleSheet.absoluteFill}
                   muted={true}
                   playInBackground={false}
            />
            <View style = {styles.modalCard}>
              <Text style={styles.title}>Iniciar sesión</Text>
              <TextInput placeholder='Email'
                         keyboardType='email-address'
                         style={{color: 'white'}}
                         onChange={(text) => this.setState({email: text})}
              />
              <TextInput placeholder='Contraseña'
                         secureTextEntry = {true}
                         style={{color: 'white'}}
                         onChange={(text) => this.setState({password: text})}
              />

              <TouchableWithoutFeedback onPress = {() => {
                Actions.pop();
              }}>
                <View style = {styles.submitButton}>
                  <Text style={{color: '#fff'}}>Ingresar</Text>
                </View>
              </TouchableWithoutFeedback>

              <Text style={styles.title}>o Registrarse</Text>
              <TextInput placeholder='Nombre' style={styles.text} onChange={(text) => this.setState({name: text})}/>
              <TextInput placeholder='Email'
                         keyboardType='email-address'
                         style={styles.text}
                         onChange={(text) => this.setState({email: text})}
              />
              <TextInput placeholder='Contraseña'
                         secureTextEntry = {true}
                         style={styles.text}
                         onChange={(text) => this.setState({password: text})}
              />

              <TouchableWithoutFeedback onPress = {() => {
                Actions.pop();
              }}>
                <View style = {styles.submitButton}>
                  <Text style={{color: '#fff'}}>Registrarse</Text>
                </View>
              </TouchableWithoutFeedback>

            </View>
          </View>

        </Modal>

        {/* Background Video */}
        <Video repeat source={video}
               resizeMode="cover"
               style={StyleSheet.absoluteFill}
               muted={true}
               playInBackground={false}
        />

        <View style = {styles.hashtag}>
          {/* Hashtag Text */}
          <Text style = {styles.hastagText}>
            #explorandomipaís
          </Text>
        </View>


        {/* Buttons */}
        <View style = {styles.buttons}>
          <Icon.Button
            name="user"
            backgroundColor="#3b5998"
            {...iconStyles}
            onPress={() => { this.setState({modalVisible: true}) }}
          >
            Login with email
          </Icon.Button>

          <Icon.Button
            name="google"
            backgroundColor="#DD4B39"
            {...iconStyles}
            onPress={() => {  }}
          >
            Or with Google
          </Icon.Button>
        </View>
      </View>
    )
  }
}

const iconStyles = {
  borderRadius: 10,
  iconStyle: { paddingVertical: 5 }
};

const styles = StyleSheet.create({
  container: {
    resizeMode: 'stretch',
    flex: 1,
    position: 'absolute',
    width: width,
    height: height,
    justifyContent: 'center'
  },

  modalContainer: {

    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',

  },

  title: {
    textAlign: 'center',
    color: 'white',
    fontSize: 24
  },

  text: {
    color: 'white'
  },

  modalCard: {
    margin: '5%',
  },

  hashtag: {
    marginTop: (height / 2) - 60
  },

  hastagText: {
    fontFamily: 'Roboto',
    color: 'white',
    textAlign: 'center',
    fontSize: 40
  },

  buttons: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: (height / 2) - 100,
    margin: 30
  },
  submitButton: {
    height: 35,
    margin: 90,
    marginTop: 20,
    marginBottom: 20,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#31c753',
    borderRadius: 15
  }

});

export default Login;
