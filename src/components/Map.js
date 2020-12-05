import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import logo from '../files/Logo.svg';
 
const AnyReactComponent = (props) => {
  return (
    <div style = {{width: 25, height: 25, cursor: 'pointer'}}>
      <img src = {logo} alt = 'logo'/>
    </div>
    // <div className="marker"
    //   style={{ backgroundColor: 'red', cursor: 'pointer'}}
    // />
  );
};
 
class Map extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '80vh', width: '95%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', overflow: 'hidden'}}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyD6iZG7xjTCNbAe8DQEHx2euU8lgV-9170' }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          >
            {
              this.props.points.map(point => {
                return (
                  <AnyReactComponent
                    lat={point[0]}
                    lng={point[1]}
                    text="My Marker"
                  />
                )
              })
            }
            <AnyReactComponent
              lat={35.193405}
              lng={-80.793761}
              text="My Marker"
            />
          </GoogleMapReact>
      </div>
    );
  }
}
 
export default Map;