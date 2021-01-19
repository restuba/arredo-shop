import { React, styled } from 'libraries';
import { AuthContainer, Button } from 'components';
import { handleAsync } from 'utils';
import { addNotifications, signInWithGoogle } from 'services';
import { SignIn, SignUp } from 'components/molecules';
import { Sign } from 'components/organism';
import { useState } from 'react';

const Login = () => {
  const [ rightPanel, setRightPanel ] = useState(false);

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
      {/* <Button title="Sign In with Google" onClick={() => submitGoogle()}/> */}
        <div className="login">
          <SignUp active={rightPanel}/>
          <SignIn active={rightPanel}/>
          <Sign
            active={rightPanel}
            handleClickSignIn={() => setRightPanel(false)}
            handleClickSignUp={() => setRightPanel(true)}
          />
          
        </div>
      </LoginWrap> 
    </AuthContainer>
  );
};

export default Login;

const LoginWrap = styled.div`
  width: 100%;
  background: red;
  .login {
    margin: auto;
    background-color: #ffffff;
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 100%;
}
`;