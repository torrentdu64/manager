import React, {Component} from 'react';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged } from '../actions';
import {Card, CardSection, Input, Button} from './common';


class LoginForm extends Component {
  onEmailChange(text){
      this.props.emailChanged(text);
  }

  onPasswordChange(text){
      this.props.passwordChanged(text);
  }

  render(){
    return(
      <Card>
        <CardSection>
          <Input
          label="E-mail"
          placeholder="toto@gmail.com"
          onChangeText={this.onEmailChange.bind(this)}
          value={this.props.email}
          />

        </CardSection>

        <CardSection>
          <Input
         secureTextEntry
         placeholder="*******"
         label="password"
         onChangeText={this.onPasswordChange.bind(this)}
         value={this.props.password}
         />
        </CardSection>

        <CardSection>
            <Button>
                Log in
            </Button>
        </CardSection>
      </Card>
      );
  }
}

const mapStateToProps = state => {
  return {
    email: state.auth.email,
    password: state.auth.password

  };
};


export default connect(mapStateToProps, {emailChanged, passwordChanged})(LoginForm);
