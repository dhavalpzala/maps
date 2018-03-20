import React, { Component } from 'react';
import { mapboxgl, accessToken, center, defaultZoom, geoJSON } from '../data';

class MapBox extends Component {
  componentDidMount() {
    mapboxgl.accessToken = accessToken;
    var map = new mapboxgl.Map({
        container: 'mapbox-map',
        style: 'mapbox://styles/mapbox/streets-v9',
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
        <h1 className="App-title">Mapbox</h1>
        <div id='mapbox-map'></div>
      </div>
    );
  }
}

export default MapBox;
