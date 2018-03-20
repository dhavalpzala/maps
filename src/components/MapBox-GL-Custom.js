import React, { Component } from 'react';
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
import { accessToken, center, defaultZoom, geoJSON } from '../data';

class MapBoxGLCustom extends Component {
  render() {
    const Map = ReactMapboxGl({
      accessToken: accessToken
    });

    var features = geoJSON.map((geoLocation, index)=> {
      return <Feature key={ 'feature-' + index } coordinates={geoLocation.longLat}/>
    });

    return (
      <div>
        <h1 className="App-title">Mapbox - custom style (using react-mapbox-gl)</h1>
        <Map
          style="mapbox://styles/dhavalzala/cjey7fs0j3y5o2ro1ilu7sezm"
          center={center}
          zoom={[defaultZoom]}
          containerStyle={{
            height: "300px",
          }}>
            <Layer
              type="symbol"
              id="marker"
              layout={{ "icon-image": "harbor-15" }}>
              {features}
            </Layer>
        </Map>
      </div>
    );
  }
}

export default MapBoxGLCustom;
