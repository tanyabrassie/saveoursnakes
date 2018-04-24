import React from 'react';
import {Flex} from 'rebass';

const Marker = styled(Flex)`
  height: 2px;
  width: 2px;
  background-color: red;
`;

const MapMarkers = ({ proposals }) => {
    proposals.map((proposal, index) => {
    return (
      <Marker
        lat={parseFloat(proposal.latitude)}
        lng={parseFloat(proposal.longitude)}
      />
    );
  });
  return (
    <Flex p={1} bg="red">{text}</Flex>
  );
}

export default MapMarkers;



// p.forEach((member, index) => {
  //   if (member.projectData.proposals) {
  //     const newMarkers = member.projectData.proposals.map((proposal, index) => {
  //       const latitude = parseFloat(proposal.latitude);
  //       const longitude = parseFloat(proposal.longitude);
  //       return (
  //         <MapMarker
  //           lat={latitude}
  //           lng={longitude}
  //           text={'project'}
  //         />  
  //       );
  //     });

  //     markers = markers.concat(newMarkers);
  //   } else {
  //     return null;
  //   }
  // })