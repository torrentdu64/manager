import React, { Component} from 'react';
import {Text, touchableWithoutFeedback, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardSection } from './common';


class ListItem extends Component {
onRowPress(){
  Actions.employeeCreate();
}

  render(){
    const { name } = this.props.employee;

    return (
      <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
        <View>
        <CardSection >
          <Text style={styles.titleStyle}>
            {name}
          </Text>
        </CardSection >
        </View>
      </TouchableWithoutFeedback>
      );
  }
}

const styles = {
  titleStyle: {
    paddingLeft: 15,
    fontSize: 18
  }
}

export default ListItem;