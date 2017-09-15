import React, { Component } from 'react';
import {View, Text} from 'react-native';

class EmployeeCreate extends Component {
  render(){
    return(
      <Card>
        <CardSection>
        <Input
        label="Name"
        placholder="jane"
        />
        </CardSection>

        <CardSection>
          <Input
          label="phone"
          placeholder="06 066 6545"
          />
        </CardSection>

        <CardSection>
        </CardSection>
      </Card>
      );
  }
}


export default EmployeeCreate;

