import { firebase } from 'libraries';
import { clearProfile, setProfile, store } from 'modules';
import { firebaseService } from 'modules/firebase/utils';
import { createProfileObj } from 'utils';


const { dispatch } = store;

/**
 * a Service for get current user from firebase auth with auth state change
 * this sevice will be to use in App.js and always call every user change
 * like login, register, and logout
 */
export const getProfile = () => {
  const promise = new Promise((resolve, reject) => {
    firebase.auth().onAuthStateChanged(
      async user => {
        if(user){
          let userData = await firebaseService.getUserData(user.uid);
  
          if(!userData){
            userData = await firebaseService.createUserData({
              name: user.displayName,
              email: user.email,
              userId: user.uid,
              photo: user.photoURL
            });
          }
  
          const userObj = createProfileObj({ ...user, ...userData });
          dispatch(setProfile(userObj));
          resolve(user);
        }else{
          dispatch(clearProfile());
          resolve(null);
        }
      }, err => {
        dispatch(clearProfile());
        reject(err);
      }
    );
  });

  return promise;
}