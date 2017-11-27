import React, {Component} from 'react';

import {
  View,
  Image,
  Text,
  StyleSheet,
  FlatList,
  TouchableWithoutFeedback,
  ToastAndroid,
  Alert
} from 'react-native';

import {
  Card,
  CardTitle,
  CardContent
} from 'react-native-card-view';


import {misReservaciones, cancelarReserva} from "../api_requests/requests";
import {_getItem} from "../localStorage";

class ReservationList extends Component{
  constructor(){
    super();
    this.state = {
      myList: [],
      userInfo: {}
    }
  }

  componentDidMount(){
    this.getUserInfo();
  }

  getUserInfo(){
    _getItem('user', (userInfo) => {
      this.setState({
        userInfo
      }, () => {
        this.getReservations();
      })
    })
  }

  getReservations(){
    if(this.state.userInfo.id === undefined){
      ToastAndroid.show('Inicie sesión para acceder a sus reservas', ToastAndroid.SHORT);
      return;
    }
    misReservaciones(this.state.userInfo.id, (reservas) => {
      this.setState({
        myList: reservas
      })
    })
  }

  showConfirmDialog(idReserva){
    Alert.alert('¿Cancelar la excursión?',
                'Solamente se pueden cancelar la reserva 3 días antes de la excursion',
                [
                  {text: 'Mejor no', onPress: () => {}},
                  {text: 'Cancelar', onPress: () => {this.cancelExcursion(idReserva)}}
                ]
    );
  }

  cancelExcursion(idReserva){
    cancelarReserva(this.state.userInfo.id, idReserva, (response) => {
      if(!response.succesful){
        ToastAndroid.show('Hubo un error realizando su petición, intente más tarde', ToastAndroid.SHORT);
        return;
      }
      this.getReservations();
    })
  }

  _keyExtractor = (item, index) => item.id;

  _renderItem(item){
    return(
      <TouchableWithoutFeedback>
        <View>
          <Card>
            <CardTitle>
              <Text>{item.descripcion}</Text>
            </CardTitle>
            <CardContent>
              <View>
                <Text style={styles.r_price}>&#8353;{item.precio}</Text>
                <TouchableWithoutFeedback onPress={() => {
                 this.showConfirmDialog(item.id);
                }}>
                  <View style = {styles.r_button}>
                    <Text style={{textAlign: 'center', color:'#fff'}}>Cancelar</Text>
                  </View>
                </TouchableWithoutFeedback>
              </View>
            </CardContent>
          </Card>
        </View>
      </TouchableWithoutFeedback>
    )
  }

  render(){
    return(
      <View style = {styles.content}>
        <FlatList data = {this.state.myList}
                  renderItem = {({item}) => this._renderItem(item)}
                  keyExtractor = {this._keyExtractor}
                  showsVerticalScrollIndicator={false}
                  style = {{marginTop: 10}}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  cardContent: {
    flexDirection: 'column'
  },
  r_button: {
    width: '100%',
    height: 40,
    marginBottom: 0,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#e84c3d',
    borderRadius: 15,
  },
  r_price: {
    textAlign: 'center',
    fontSize: 24,
    color: '#333',
    marginBottom: '7%'
  },
  title: {

  }
})

export default ReservationList;