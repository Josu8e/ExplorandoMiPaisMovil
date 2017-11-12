import React, {Component} from 'react';

import{
  View,
  Text,
  TextInput,
  Image,
  FlatList,
  TouchableWithoutFeedback,
  ToastAndroid
} from 'react-native';

import Modal from 'react-native-modal';
import { Actions } from 'react-native-router-flux';
import Tag from './tag';
import Icon from 'react-native-vector-icons/MaterialIcons';
import call from 'react-native-phone-call';
import GalleryView from '../gallery/gallery';

class Content extends Component{

  state = {
    modalVisible: false
  }

  setModalVisible(visible){
    this.setState({
      modalVisible: visible
    });
  }

  render(){
    return(

      <View>

        <Modal style = {styles.modal}
               isVisible={this.state.modalVisible}
               onBackdropPress = {() => {this.setModalVisible(false)}}>
          <View style = {styles.modalContent}>

            <TextInput placeholder='Número de reservas' style={{width: '65%', textAlign: 'center'}} keyboardType='numeric'/>

            <TouchableWithoutFeedback onPress = {() => {
                Actions.pop();
                ToastAndroid.show('Se registro su reserva', ToastAndroid.SHORT);
              }}>
                <View style = {styles.modalButton}>
                  <Text style={{color: '#fff'}}>Reservar</Text>
                </View>
              </TouchableWithoutFeedback>
          </View>
        </Modal>

        <View style = {styles.wrapper}>
          <Text style={styles.price}>&#8353; {this.props.info.price}</Text>
          <View style = {styles.info}>
            <Text style={styles.infoText}>Cupo de la excursión : </Text>
            <Text style={styles.infoText}>Estadía : </Text>
            <Text style={styles.infoText}>Fecha de salida y regreso : </Text>
            <Text style={styles.infoText}>Descripción : </Text>

            <Text style={[styles.infoText, {textAlign: 'center', marginTop: 10}]}>Temas</Text>
            <View style = {styles.themes}>
              <Tag text = 'Nombre del Tema'/>
            </View>

          </View>
        </View>

        {/*<View style={styles.hr}/>*/}

        <View style = {[styles.wrapper, styles.content]}>
          <Text style={styles.contactText}>Contactar con el organizador</Text>

          <View style = {styles.contactButton}>
            <Text style={{marginLeft: '25%', color: '#fff'}}>Llamada Teléfonica</Text>
            <Icon.Button
              name = 'call'
              onPress = {() => {
                const args = {
                  number: '61963168',
                  prompt: true
                }
                call(args).catch(console.error)
                }
              }
            />
          </View>

          <View style = {styles.contactButton}>
            <Text style={{marginLeft: '25%', color: '#fff'}}>Mensaje de Texto</Text>
            <Icon.Button
              name = 'message'
            />
          </View>

        </View>
        {/*<View style={styles.hr}/>*/}

        <View style = {[styles.wrapper, styles.content, {marginBottom: '10%'}]}>
        <Text style={styles.contactText}>Galería</Text>
        {/*TODO: Permitir ver a pantalla completa*/}
        <GalleryView
          style={styles.gallery}
          images={[
            {
              caption: 'Remote image with supplied dimensions',
              source: { uri: this.props.info.mainImage }
            },

          ]}
        />

        {/*<View style ={styles.hr}></View>*/}

          <TouchableWithoutFeedback onPress = {() => {
            this.setModalVisible(true);
          }}>
            <View style = {styles.submitButton}>
              <Text style={{color: '#fff'}}>Reservar</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
    )
  }
}

//TODO: agregar touchable with feedback a los botones

const styles = {
  wrapper: {
    flex: 1,
    zIndex: 10,
    margin: 10,
    marginBottom: '3%',
    padding: 24,
    position: 'relative',
    backgroundColor: 'white'
  },
  content: {
    marginTop: '2%',
    marginBottom: '3%'
  },
  info: {
    marginTop: 20
  },
  infoText: {
    marginBottom: 10
  },
  contactText: {
    marginTop: 10,
    textAlign: 'center',
    fontSize: 24
  },
  price: {
    fontSize: 24,
    textAlign: 'center'
  },
  contactButton: {
    marginTop: 10,
    backgroundColor: '#007AFF',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 15
  },
  gallery: {
    marginTop: 20,
    backgroundColor: 'black',
    height: 200
  },
  hr: {
    marginTop: 10,
    borderBottomColor: '#b3b3b3',
    borderBottomWidth: 1
  },
  submitButton: {
    height: 40,
    margin: 40,
    marginBottom: 0,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#31c753',
    borderRadius: 15
  },
  modalButton: {
    height: 40,
    width: '65%',
    marginBottom: 0,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#31c753',
    borderRadius: 15
  },
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  themes: {
    flexDirection: 'row',
  },
  tag: {
    marginRight: '2%'
  }
}

export default Content;