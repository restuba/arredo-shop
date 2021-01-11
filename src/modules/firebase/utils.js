import { firebase } from 'libraries';
import { appConfig } from 'configs';

// initalizeApp
firebase.initializeApp(appConfig.firebase);

const getAuthUser = () => firebase.auth().currentUser;

/**
 * a firebase service for sign in with google
 */
const signInWithGoogle = async () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  const response = await firebase.auth().signInWithPopup(provider);
  return response;
}


/**
 * a firebase service for create user data,
 * user data store to firebase db for user information
 * @param {*} payload a payload require ['name', 'email', 'userId', 'photo']
 */
const createUserData = async (payload = {}) => {
  try{
    await firebase
      .database()
      .ref(`users/${payload.userId}`)
      .set({
        userId: payload.userId,
        name: payload.userId,
        email: payload.email,
        photo: payload.photo || null
      });
    
      return payload;
  }catch(err){
    throw err;
  }
};

/**
 * a firebase service for get user data information
 * from firebase database, user id get from current auth user
 */
const getUserData = () => {
  const userId = firebase.auth().currentUser.uid;
  const promise = new Promise(resolve => {
    firebase
      .database()
      .ref(`users/${userId}`)
      .on('value', snapshot => {
        resolve(snapshot.val());
      });
  });
  return promise;
};



export const firebaseService = {
  getAuthUser,
  signInWithGoogle,
  createUserData,
  getUserData
}



