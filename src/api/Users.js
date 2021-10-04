import firestore from '@react-native-firebase/firestore';

const usersCollection = firestore().collection('users');

export const getUser = (userId) => {
  return usersCollection
  .doc(userId)
  .get()
}

export const getUserSub = (userId, onResult, onError) => {
  return usersCollection
  .doc(userId)
  .onSnapshot(onResult, onError = error => console.error(error))
}

export const updateUser = (userId, data) => {
  return usersCollection
  .doc(userId)
  .update({
    'info': data
  })
}