import _ from 'lodash';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import Communications from 'react-native-communications';
import EmployeeForm from './EmployeeForm';
import {employeeUpdate, employeeSave, employeeDelete} from '../actions';
import {Card, CardSection, Button, Confirm } from './common';



class EmployeeEdit extends Component {
  state = {showModal: false};
componentWillMount() {
  _.each(this.props.employee, (value, prop ) => {
    this.props.employeeUpdate({ value, prop });
  });
}

onButtonPress(){
  const { name, phone, shift} = this.props;
  this.props.employeeSave({name, phone, shift, uid: this.props.employee.uid });
}

onTextPress(){
const {phone, shift} = this.props;
Communications.text(phone, `you upcomming shift is on ${shift}`);
}

onAccept(){
  const { uid } = this.props.employee;

  this.props.employeeDelete({uid});

}

onDecline(){
    this.setState({ showModal: false});
}

  render(){
    return(
      <Card>
        <EmployeeForm />
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
           Edit
          </Button>
        </CardSection>

        <CardSection>
          <Button onPress={this.onTextPress.bind(this)}>Note</Button>
        </CardSection>

        <CardSection>
          <Button onPress={ () => this.setState({ showModal: !this.state.showModal})}>
          Delete
          </Button>
        </CardSection>

        <Confirm
        onAccept={this.onAccept.bind(this)}
        onDecline={this.onDecline.bind(this)}
        visible={this.state.showModal}
        >
            Are you chure to Delete ?
        </Confirm>
      </Card>
      );

  }
}

const mapStateToProps = (state) => {
    const {name, phone, shift} = state.employeeForm;
    return { name,phone, shift};
};
export default connect(mapStateToProps, {employeeUpdate, employeeSave, employeeDelete})(EmployeeEdit);
