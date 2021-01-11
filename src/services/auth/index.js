import { firebaseService } from "modules/firebase/utils"
import { handleAsync } from "utils"

/**
 * a Service for login / register with google
 */
export const signInWithGoogle = async () => {
  const [res, err] = await handleAsync(firebaseService.signInWithGoogle());
  console.log('signIn with Google',res)
  if(err) throw err;
  
  return res;
}