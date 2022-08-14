import { React, useState } from "libraries";
import { SignIn, SignUp, Sign } from "components";
import { Wrapper } from "./style";

const Login = () => {
  const [rightPanel, setRightPanel] = useState(false);

  return (
    <Wrapper>
      {/* <Button title="Sign In with Google" onClick={() => submitGoogle()}/> */}
      <div className="login">
        <SignUp active={rightPanel} />
        <SignIn active={rightPanel} />
        <Sign
          active={rightPanel}
          handleClickSignIn={() => setRightPanel(false)}
          handleClickSignUp={() => setRightPanel(true)}
        />
      </div>
    </Wrapper>
  );
};

export default Login;
