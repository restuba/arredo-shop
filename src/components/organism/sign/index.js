import { React } from "libraries";
import { Wrapper } from "./style";

const Index = ({ handleClickSignIn, handleClickSignUp, active }) => {
  return (
    <Wrapper className={`overlay-container ${active ? "isActive" : ""}`}>
      <div className={`overlay`}>
        <div className="overlay-panel overlay-left">
          <h1>Welcome Back!</h1>
          <p className="overlay-description">
            To keep connected with us please
            <br />
            sign in with your account
          </p>
          <button
            className="ghost form-button"
            id="signIn"
            onClick={handleClickSignIn}
          >
            Sign In
          </button>
        </div>
        <div className="overlay-panel overlay-right">
          <h1>Hello, Friend!</h1>
          <p className="overlay-description">
            If you are not yet a member,
            <br />
            After signing up, you can use more services.
          </p>
          <button
            className="ghost form-button"
            id="signUp"
            onClick={handleClickSignUp}
          >
            Sign Up
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

export default Index;
