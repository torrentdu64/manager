import React, {Component} from 'react';
import {Text} from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import {Card, CardSection, Input, Button, Spinner} from './common';


class LoginForm extends Component {
  onEmailChange(text){
      this.props.emailChanged(text);
  }

  onPasswordChange(text){
      this.props.passwordChanged(text);
  }

  onButtonPress(){
    const {email, password} = this.props;
    this.props.loginUser({email, password});
  }

  renderButton(){
    if(this.props.loading){
      return <Spinner size="large" />;
    }
    return(
       <Button onPress={this.onButtonPress.bind(this)} >
                Log in
        </Button>
      );
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

        <Text  style={styles.errorStyle}>
            {this.props.error}
        </Text>

        <CardSection>

            {this.renderButton()}
        </CardSection>
      </Card>
      );
  }
}
const styles = {
  errorStyle: {
      fontSize: 20,
      alignSelf: 'center',
      color: 'red'
  }
};
const mapStateToProps = ({auth}) => {
  const {email, password, error, loading} = auth;
  return {
    email,
    password,
    error,
    loading
  };
};


export default connect(mapStateToProps, {emailChanged, passwordChanged, loginUser})(LoginForm);
