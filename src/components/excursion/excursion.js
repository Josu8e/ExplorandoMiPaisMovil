import React,{Component} from 'react';
import{
  View,
  Text
} from 'react-native';

import Header from '../header';
import Content from './content';
import video from '../../promoVideo/beach.mp4';
import ParallaxScroll from '@monterosa/react-native-parallax-scroll';

import Background from './background';

class Excursion extends Component{

  render(){
    return(
      <ParallaxScroll renderHeader={({ animatedValue }) => <Header title = {this.props.excursion.descripcion}/>}
        headerHeight={50}
        isHeaderFixed={false}
        parallaxHeight={250}
        useNativeDriver={false}
        isBackgroundScalable={true}
        renderParallaxBackground={({ animatedValue }) => <Background source={{uri: this.props.excursion.foto}}
                                                                     animatedValue={animatedValue} />
        }
        fadeOutParallaxBackground={true}
        headerBackgroundColor='rgba(51, 51, 51, 0)'
        headerFixedBackgroundColor='rgba(51, 51, 51, 0.2)'
        parallaxBackgroundScrollSpeed={5}>

        <Content info = {this.props.excursion}/>

      </ParallaxScroll>
    )
  }
}

export default Excursion;