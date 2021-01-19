import { firebase } from 'libraries';
import { appConfig } from 'configs';
import { handleAsync } from 'utils';

// initalizeApp
firebase.initializeApp(appConfig.firebase);

const getAuthUser = () => firebase.auth().currentUser;
const firestore = firebase.firestore();

/**
 * a firebase service for creating auth user with email and password
 * @param {*} payload a payload require ['email', 'password']
 */
const register = async (payload = {}) => {
  const [ res, err ] = await handleAsync(
    firebase
      .auth()
      .createUserWithEmailAndPassword(payload.email, payload.password)
  );
  if(err) throw err;
  return res;
}



/**
 * a firebase service for login user with email and password
 * @param {*} payload a payload require ['email', 'password']
 */
const login = async (payload = {}) => {
  try{
    const response = await firebase
      .auth()
      .signInWithEmailAndPassword(payload.email, payload.password);
    
    return response;
  }catch(err){
    throw err;
  }
}


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
  console.log('payload', payload)
  const { name, email, userId, photo, createData } = payload;
  try{
    await firestore
      .doc(`users/${userId}`)
      .set({ name, email, userId, photo, createData
      });
  }catch(err){
    throw err;
  }
  return payload;
  // try{
  //   await firebase
  //     .database()
  //     .ref(`users/${payload.userId}`)
  //     .set({
  //       userId: payload.userId,
  //       name: payload.userId,
  //       email: payload.email,
  //       photo: payload.photo || null
  //     });
    
  //     return payload;
  // }catch(err){
  //   throw err;
  // }
};

/**
 * a firebase service for get user data information
 * from firebase database, user id get from current auth user
 */
const getUserData = () => {
  const userId = firebase.auth().currentUser.uid;
  const promise = new Promise((resolve, rejected) => {
    firebase
      .database()
      .ref(`users/${userId}`)
      .once('value', snapshot => {
        resolve(snapshot.val());
      });
  });
  return promise;
};

const handleUserProfile = async userAuth => {
  if(!userAuth) return;
  const { uid } = userAuth;
  const userRef = firestore.doc(`users/${uid}`);
  const snapshot =  await userRef.get();
  return snapshot;
  // console.log('userRef', userRef, snapshot)
  // if(!snapshot.exists){
  //   const { displayName, email } = userAuth;
  //   const timestamp = new Date();
  //   console.log('userAuth',userAuth)

  //   try{
  //     await userRef.set({
  //       displayName,
  //       email,
  //       createDate: timestamp,
  //       ...additionalData
  //     });
  //   }catch(err){

  //   }
  // }
  // return userRef;
}

const logout = async () => {
  const [res, err] = await handleAsync(firebase.auth().signOut());
  if(err) throw err;
  return res;
}

export const  firebaseService = {
  getAuthUser,
  signInWithGoogle,
  createUserData,
  getUserData,
  logout,
  handleUserProfile,
  register,
  login
}



