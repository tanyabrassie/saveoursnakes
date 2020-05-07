import React from 'react';
import { Flex, Box } from 'rebass';
import { MegaHeadline, BasicText } from '../ui/typography';
import Map from './Map';
import MemberButton from './MemberButton';
import Grasslands from '../Grasslands';

class Directory extends React.Component {
  constructor() {
    super();
    this.state = {
      memberToMap: [],
    };

    this.getMemberToMap = this.getMemberToMap.bind(this);
  }

  getMemberToMap(member) {
    this.setState({ memberToMap: member });
  }

  render() {
    return (
      <div>
        <Flex align="center" flexDirection="column" is="section" px={2}>
          <Grasslands />
          <MegaHeadline textAlign="center">Snake Savior Directory</MegaHeadline>
          <BasicText py={1}>
            See the snakes actively being saved by our saviors!
          </BasicText>
          <Grasslands />
        </Flex>
        <Flex>
          <Box w={1 / 3}>
            {this.props.memberList.length > 0 ? (
              this.props.memberList.map((member, index) => {
                return (
                  <MemberButton
                    key={index}
                    getMemberToMap={this.getMemberToMap}
                    member={member}
                    index={index}
                  />
                );
              })
            ) : (
              <Flex p={3} bg={'#ffffffab'}>
                <BasicText>
                  No snakes currently are being saved. Register now!
                </BasicText>
              </Flex>
            )}
          </Box>
          <Box w={2 / 3}>
            <Map memberToMap={this.state.memberToMap} />
          </Box>
        </Flex>
      </div>
    );
  }
}
export default Directory;
