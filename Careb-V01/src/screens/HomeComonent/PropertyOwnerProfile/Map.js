import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
export class MapContainer extends Component {
  render() {
    return (
      <div className='map-heading'>
        <label> Property Location</label><br></br>
        <div className="side-map">
          <Map className='main-map'
            google={this.props.google}
            zoom={15}
            style={{ width: '12%', height: '300px', marginRight: 90 }}

            initialCenter={{ lat: -1.2884, lng: 36.8233 }} />
        </div>
      </div>
    );
  }

}

export default GoogleApiWrapper({ apiKey: 'AIzaSyAVvI3SO5ejMv89g0MeDaYODFycXPEy7a8' })(MapContainer);










