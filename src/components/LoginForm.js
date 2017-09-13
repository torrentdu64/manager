import React, {Component} from 'react';
import {Card, CardSection, Input, Button} from './common';


class LoginForm extends Component {
  render(){
    return(
      <Card>
        <CardSection>
          <Input
          label="E-mail"
          placeholder="toto@gmail.com"
          onChangeText={this.onEmailChange.bind(this)}
          />

        </CardSection>

        <CardSection>
          <Input
         secureTextEntry
         placeholder="*******"
         label="password"
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

export default LoginForm;
