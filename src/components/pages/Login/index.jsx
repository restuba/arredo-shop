import { React, styled } from 'libraries';
import { AuthContainer, Button } from 'components';
import { handleAsync } from 'utils';
import { signInWithGoogle } from 'services';

const Login = () => {
  const submitGoogle = async () => {
    const [res, err] = await handleAsync(signInWithGoogle());
    if(err){
      alert('Terjadi kesalahan!', err);
      throw err;
    }

    alert('Berhasil Login')
    console.log(res)
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