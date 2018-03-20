import React, { Component } from 'react';
import { ol, center, defaultZoom, geoJSON } from '../data';

class OpenLayers extends Component {
  componentDidMount() {
    var markers = [];

    geoJSON.forEach(function(geoLocation) {
      var marker = new ol.Feature({
        geometry: new ol.geom.Point(ol.proj.transform(geoLocation.longLat, 'EPSG:4326',
        'EPSG:3857')),
        name: geoLocation.name
      });

      markers.push(marker);
    });

    var vectorSource = new ol.source.Vector({
      features: markers
    });

    var iconStyle = new ol.style.Style({
      image: new ol.style.Icon(/** @type {olx.style.IconOptions} */ ({
        anchor: [0.5, 46],
        anchorXUnits: 'fraction',
        anchorYUnits: 'pixels',
        opacity: 0.75,
        src: 'https://openlayers.org/en/v4.6.5/examples/data/icon.png'
      }))
    });


    var vectorLayer = new ol.layer.Vector({
      source: vectorSource,
      style: iconStyle
    });

    var map = new ol.Map({
       target: 'openlayer-map',
       layers: [
         new ol.layer.Tile({
           source: new ol.source.OSM()
         }),
         vectorLayer
       ],
       view: new ol.View({
         center: ol.proj.fromLonLat(center),
         zoom: defaultZoom + 1
       })
     });
  }

  render() {
    return (
      <div>
        <h1 className="App-title">Open Layers</h1>
        <div id="openlayer-map"></div>
      </div>
    );
  }
}

export default OpenLayers;
