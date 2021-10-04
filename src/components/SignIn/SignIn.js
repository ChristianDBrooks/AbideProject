import React from "react";
import {
    View,
    StyleSheet
} from 'react-native';
import { TextField, Button, Text } from "react-native-ui-lib";
import auth from '@react-native-firebase/auth';

const SignIn = ({navigation}) => {
  let emailInput = React.createRef();
  let passwordInput = React.createRef();

  const handleSignIn = async () => {
    let email = emailInput.current.state.value;
    let password = passwordInput.current.state.value;
    if (email && password) {
      try {
        await auth().signInWithEmailAndPassword(email, password);
        console.log('User account signed in!');
      } catch ( error ) {
        if (error.code === 'auth/email-already-in-use') {
          emailInput.current.state.error = 'That email address is already in use!'
        }
        if (error.code === 'auth/invalid-email') {
          emailInput.current.state.error = 'That email address is invalid!'
        }
        if (error.code === 'auth/invalid-password') {
          passwordInput.current.state.error = 'That password is invalid!'
        }
        if (error.code === 'auth/weak-password') {
          passwordInput.current.state.error = 'That password is invalid!'
        }
      }
    }
  }

  return ( 
      <View style={styles.container}>
          <View style={styles.inputWrapper}>
              <TextField ref={emailInput} centered={false} title='Email'></TextField>
              <TextField ref={passwordInput} centered={false} title='Password'></TextField>
              <Button 
                  label='Sign In'
                  onPress={handleSignIn}
              />
              <Text style={{marginTop: 30, textAlign: 'center'}}>Don't have an account?
                  {' '}
                  <Button
                      link
                      label='Sign Up'
                      onPress={() => navigation.navigate('Sign Up')}
                  />
              </Text>
          </View>
      </View>
  );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        padding: 20
    },
    title: {
        fontSize: 24,
        marginBottom: 32
    }
})
 
export default SignIn;