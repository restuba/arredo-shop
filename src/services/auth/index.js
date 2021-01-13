import { clearProfile, store } from "modules";
import { firebaseService } from "modules/firebase/utils"
import { handleAsync } from "utils"

const { dispatch } = store;

/**
 * a Service for login / register with google
 */
export const signInWithGoogle = async () => {
  const [res, err] = await handleAsync(firebaseService.signInWithGoogle());
  console.log('signIn with Google',res)
  if(err) throw err;
  
  return res;
}


/**
 * a Service for logout
 */
export const logout = async () => {
  const [res, err] = await handleAsync(firebaseService.logout());
  if(err) throw err;
  dispatch(clearProfile());
  return res;
}