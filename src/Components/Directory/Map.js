import React from 'react';
import styled from 'styled-components';
import {Flex} from 'rebass';
import GoogleMapReact from 'google-map-react';

const Dot = styled.div`
  height: 10px;
  width: 10px;
  background-color: ${props => props.theme.colors.electricPurple};
  border-radius: 50%;
  display: inline-block;
`;

const MapMarker = () => <Dot p={1} bg="red" />;

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.getMapCenter = this.getMapCenter.bind(this);
  }

  getMapCenter(memberToMap) {
    let mapCenter = {lat: 40.699921, lng: -73.924553};
    
    if (memberToMap) {
      mapCenter.lat = memberToMap.latitude;
      mapCenter.lng = memberToMap.longitude;
    }

    return mapCenter;
  }

  render () {
    let markers = [];
    const mapCenter = this.getMapCenter(this.props.memberToMap.projectData);
    if (this.props.memberToMap.projectData) {
      markers = this.props.memberToMap.projectData.proposals.map((marker, index) => {
        const markerLat = parseFloat(marker.latitude);
        const markerLng = parseFloat(marker.longitude);
        return (
          <MapMarker
            lat={markerLat}
            lng={markerLng}
            text={'project'}
            key={index}
          />
        );
      });
    }

    return (
      <GoogleMapReact
        bootstrapURLKeys={{key: 'AIzaSyDnXYgSKyV4HhkmPDXxOOpDFjNaUJPqomQ'}}
        center={mapCenter}
        defaultZoom={11}
      >
        {markers}
      </GoogleMapReact>
    );
  }
}


// const Map = ({memberToMap}) => {
  
//   let markers = [];
//   if (memberToMap.projectData) {
//     markers = memberToMap.projectData.map((marker, index) => {
//       const markerLat = parseFloat(marker.latitude);
//       const markerLng = parseFloat(marker.longitude);
//       return (
//         <MapMarker
//           lat={markerLat}
//           lng={markerLng}
//           text={'project'}
//           key={index}
//         />
//       );
//     });
//   }

//   return (
//     <GoogleMapReact
//         bootstrapURLKeys={{key: 'AIzaSyDnXYgSKyV4HhkmPDXxOOpDFjNaUJPqomQ'}}
//         defaultCenter={() => {getMapCenter(memberToMap)}}
//         defaultZoom={11}
//       >
//         {markers}
//       </GoogleMapReact>
//   );
// };

export default Map;