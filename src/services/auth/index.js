import { clearProfile, store } from "modules";
import { firebaseService } from "modules/firebase/utils";
import { handleAsync } from "utils";

const { dispatch } = store;

export const register = async (payload = {}) => {
  try {
    const res = await firebaseService.register(payload);
    const { user } = res;
    console.log("from register auth", user);
    const timestamp = new Date();
    const userForm = {
      userId: user.uid,
      name: payload.name,
      email: payload.email,
      photo: user.photoURL || null,
      createData: timestamp,
    };
    // profile creation in database
    await firebaseService.createUserData(userForm);

    return res;
  } catch (err) {
    throw err;
  }
};

export const login = async (payload = {}) => {
  // eslint-disable-next-line no-unused-vars
  const [res, err] = await handleAsync(firebaseService.login(payload));

  if (err) {
    throw err;
  }

  // const { res } = res;
  // const userData = await firebaseService.handleUserProfile()
};

/**
 * a Service for login / register with google
 */
export const signInWithGoogle = async () => {
  const [res, err] = await handleAsync(firebaseService.signInWithGoogle());
  if (err) throw err;

  return res;
};

/**
 * a Service for logout
 */
export const logout = async () => {
  const [res, err] = await handleAsync(firebaseService.logout());
  if (err) throw err;
  dispatch(clearProfile());
  return res;
};
