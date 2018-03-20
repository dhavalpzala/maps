import React, { Component } from 'react';
import { mapboxgl, accessToken, center, defaultZoom, geoJSON } from '../data';

class MapBoxCustom extends Component {
  componentDidMount() {
    mapboxgl.accessToken = accessToken;
    var map = new mapboxgl.Map({
        container: 'mapbox-custom-map',
        style: 'mapbox://styles/dhavalzala/cjey7fs0j3y5o2ro1ilu7sezm',
        zoom: defaultZoom,
        center: center
    });

    geoJSON.forEach(function(geoLocation) {
      var marker = new mapboxgl.Marker()
        .setLngLat(geoLocation.longLat)
        .addTo(map);
    });
  }

  render() {
    return (
      <div>
        <h1 className="App-title">Mapbox - custom style</h1>
        <div id='mapbox-custom-map'></div>
      </div>
    );
  }
}

export default MapBoxCustom;
