import React, {Component} from 'react';

import{
  View,
  Text,
  Image,
  FlatList
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import call from 'react-native-phone-call';
import Gallery from 'react-native-image-gallery';

class Content extends Component{
  render(){
    return(

      <View style = {styles.wrapper}>
        <Text style={styles.price}>&#8353; {this.props.info.price}</Text>
        <View style = {styles.info}>
          <Text style={styles.infoText}>Cupo de la excursión : </Text>
          <Text style={styles.infoText}>Estadía : </Text>
          <Text style={styles.infoText}>Fecha de salida y regreso : </Text>
          <Text style={styles.infoText}>Descripción : </Text>
        </View>

        <View style={styles.hr}/>

        <Text style={styles.contactText}>Contactar con el organizador</Text>

        <View style = {styles.contactButton}>
          <Text style={{marginLeft: '25%', color: '#fff'}}>Llamada Teléfonica</Text>
          <Icon.Button
            name = 'call'
            onPress = {() => {
              const args = {
                number: '9093900003',
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

        <View style={styles.hr}/>

        <View>
          <Gallery
            style={styles.gallery}
            images={[
              {
                caption: 'Remote image with supplied dimensions',
                source: { uri: this.props.info.mainImage }
              },

            ]}
          />
          <View style={{bottom: 0 , height: 30, backgroundColor: 'rgba(0, 0, 0, 0.4)', width: '100%', position: 'absolute', justifyContent: 'center' }}>
            <Text style={{ textAlign: 'center', color: 'white', fontSize: 15, fontStyle: 'italic'}}>Descripción del sitio</Text>
          </View>
        </View>

        <View style ={styles.hr}></View>

      </View>
    )
  }
}

const styles = {
  wrapper: {
    flex: 1,
    zIndex: 10,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    padding: 24,
    position: 'relative',
    backgroundColor: 'white'
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
  }
}

export default Content;