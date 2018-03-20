import React, { Component } from 'react';
import { L, accessToken, center, defaultZoom, geoJSON } from '../data';

class Leaflet extends Component {
  componentDidMount() {
    var map = new L.Map('leaflet-map').setView([center[1], center[0]], defaultZoom + 1);

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox.streets',
        accessToken: accessToken
    }).addTo(map);

    geoJSON.forEach(function(geoLocation) {
      new L.Marker([geoLocation.longLat[1], geoLocation.longLat[0]]).addTo(map);
    });
  }

  render() {
    return (
      <div>
        <h1 className="App-title">Leaflet</h1>
        <div id="leaflet-map"></div>
      </div>
    );
  }
}

export default Leaflet;
