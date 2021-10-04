import React, {useContext} from 'react';
import { StyleSheet } from 'react-native';
import { Text, View, ActionBar, Button } from "react-native-ui-lib";
import auth from '@react-native-firebase/auth';
import { GlobalContext } from '../../../App';



const HomeScreen = ({navigation}) => {
  let {userInfo} = useContext(GlobalContext);

  return (
    <View style={styles.container}>
      <ActionBar
        actions={[
          {label: 'Sign Out', onPress: () => auth().signOut().then(() => console.log('User signed out!')), red30: true},
          {label: 'Profile', onPress: () => navigation.navigate('Profile')},
        ]}
      />
      <Text> Hello, {userInfo.firstName}! </Text>
    </View>
  );
}


const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        padding: 20
    },
    title: {
        fontSize: 24,
        marginBottom: 32
    }
  })
 
export default HomeScreen;