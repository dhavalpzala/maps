import React, { Component } from 'react';
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
import { accessToken, center, defaultZoom, geoJSON } from '../data';

class Home extends Component {
  render() {
    const Map = ReactMapboxGl({
      accessToken: accessToken
    });

    var features = geoJSON.map((geoLocation, index)=> {
      return <Feature key={ 'feature-' + index } coordinates={geoLocation.longLat}/>
    });

    return (
      <div className="home">
        <Map
          style="mapbox://styles/mapbox/streets-v9"
          center={center}
          zoom={[defaultZoom]}
          containerStyle={{
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

export default Home;
