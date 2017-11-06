import React, {Component} from 'react';
import {
  View,
  Text
} from 'react-native';

import Gallery from 'react-native-image-gallery';

class GalleryView extends Component{

  renderImageFooter(){
    return(
      <View style={{bottom: 0 , height: 30, backgroundColor: 'rgba(0, 0, 0, 0.4)', width: '100%', position: 'absolute', justifyContent: 'center' }}>
        <Text style={{ textAlign: 'center', color: 'white', fontSize: 15, fontStyle: 'italic'}}>Descripción del sitio</Text>
      </View>
    )
  }

  render(){
    return(
      <View>
        <Gallery style = {this.props.style}
                 images={this.props.images}
        />
        {this.renderImageFooter()}
      </View>
    )
  }

}

export default GalleryView;