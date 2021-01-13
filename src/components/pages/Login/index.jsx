import { React, styled } from 'libraries';
import { AuthContainer, Button } from 'components';
import { handleAsync } from 'utils';
import { addNotifications, signInWithGoogle } from 'services';

const Login = () => {
  const submitGoogle = async () => {
    const [res, err] = await handleAsync(signInWithGoogle());
    if(err){
      addNotifications({
        type: "DANGER",
        title: "Login",
        message: `Oops! ${err}`,
        id: Math.random()
      })
      throw err;
    }
    addNotifications({
      type: "SUCCESS",
      title: `Hello, ${res.user.displayName}`,
      message: "Well done! Login Successful",
      id: Math.random()
    })
    return res;
  }
  return (
    <AuthContainer>
      <LoginWrap>
        <Button title="Sign In with Google" onClick={() => submitGoogle()}/>
      </LoginWrap>  
    </AuthContainer>
  );
};

export default Login;

const LoginWrap = styled.div`
  width: 100%;
  padding: 2rem 3.5rem;
`;