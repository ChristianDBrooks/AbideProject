import React, { useContext, useEffect, useState } from 'react';
import { Text, View, TextField, DateTimePicker, Button } from 'react-native-ui-lib';
import { GlobalContext } from '../../../App';
import { updateUser } from '../../api/Users';
import { StyleSheet } from 'react-native';

const ProfileScreen = () => {
  let {userAuth, userInfo} = useContext(GlobalContext);
  let firstNameInput = React.createRef();
  let lastNameInput = React.createRef();
  let dobInput = React.createRef();

  const handleUpdateUserInfo = () => {
    let updatedUserInfo = {
      firstName: firstNameInput.current.state.value,
      lastName: lastNameInput.current.state.value,
      dob: dobInput.current.state.value,
    }
    updateUser(userAuth.uid, updatedUserInfo)
    .then(() => {
      console.log('User info updated!');  
    })
    .catch( error => {
      alert('There was a problem updating user!')
      console.error(error);
    });
  }

  return (
    <View style={styles.container}>
      <TextField
        ref={firstNameInput}
        title='First Name'
        value={userInfo.firstName ?? ''}
      />
      <TextField
        ref={lastNameInput}
        title='Last Name'
        value={userInfo.lastName ?? ''}
      />
      <DateTimePicker 
        ref={dobInput}
        title='Date of Birth'
        value={userInfo.dob.toDate() ?? null}
      />
      <Text color={'#777'}>
        Email
      </Text>
      <Text style={{fontSize: 18, paddingTop: 5}}>
        {userAuth.email ?? 'Not Found'}
      </Text>
      <Button 
        label='Update Info'
        onPress={handleUpdateUserInfo}
        style={{marginTop: 30}}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 30,
    paddingHorizontal: 15,
  }
})
 
export default ProfileScreen;