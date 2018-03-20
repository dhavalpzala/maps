import React, { Component } from 'react';
import MapBoxCustom from './components/MapBox-Custom';
import MapBoxGLCustom from './components/MapBox-GL-Custom';
import MapBox from './components/MapBox';
import MapBoxGL from './components/MapBox-GL';
import Leaflet from './components/Leaflet';
import OpenLayers from './components/OpenLayers';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App">
         <div className="routerView">
           {this.props.children}
         </div>
       </div>
        <MapBoxGLCustom />
        <MapBoxCustom />
        <MapBoxGL />
        <MapBox />
        <Leaflet />
        <OpenLayers />
      </div>
    );
  }
}

export default App;
