import React from "react";
import { StyleSheet } from 'react-native';
import { TextField, Text, Button, View } from "react-native-ui-lib";
import auth from '@react-native-firebase/auth';

const handleCreateAccount = async () => {
  let email = emailInput.current.state.value;
  let password = passwordInput.current.state.value;
  if (email && password) {
    try {
      await auth().createUserWithEmailAndPassword(email, password);
      console.log('User account created & signed in!');
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

const SignUp = ({navigation}) => {
  let emailInput = React.createRef();
  let passwordInput = React.createRef();

  return ( 
      <View style={styles.container}>
          <View style={styles.inputWrapper}>
              <TextField ref={emailInput} centered={false} title='Email' />
              <TextField ref={passwordInput} centered={false} title='Password' />
              <Button 
                style={{
                  marginTop: 30
                }}
                label='Create Account'
                onPress={handleCreateAccount}
              />
              <Text style={{marginTop: 30, textAlign: 'center'}}>
                    Already have an account? {' '}
                    <Button 
                        link
                        label='Sign In'
                        onPress={() => navigation.navigate('Sign In')}
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
 
export default SignUp;