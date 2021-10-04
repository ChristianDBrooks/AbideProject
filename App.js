import React from 'react';
import {useState, useEffect} from 'react';
import {
  StyleSheet
} from 'react-native';
import LoginScreen from './src/components/LoginScreen/LoginScreen';
import UserScreen from './src/components/UserScreen/UserScreen';
import auth from '@react-native-firebase/auth';
import { getUserSub } from './src/api/Users';
export const GlobalContext = React.createContext();

const App = () => {
  const [initializing, setInitializing] = useState(true);
  const [userAuth, setUserAuth] = useState();
  const [userInfo, setUserInfo] = useState();
  
  const onAuthStateChanged = (user) => {
    setUserAuth(user);
    if (initializing) setInitializing(false);
  }
  
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  useEffect(() => {
    let subscriber;
    if (userAuth) {
      subscriber = getUserSub(userAuth.uid, docSnapshot => {
        console.log('userInfo:', docSnapshot)
        setUserInfo(docSnapshot.data().info);
      })
    }
    return subscriber;
  }, [userAuth])

  if (initializing) return null;

  if (!userAuth) {
    return (
      <LoginScreen />
    );
  } else {
    return (
      <GlobalContext.Provider value={{userAuth, userInfo}}>
        <UserScreen />
      </GlobalContext.Provider>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default App;
