import { React, connect } from 'libraries';
import { profileSelector } from 'modules';
import { useEffect } from 'react';

const AuthContainer = ({ profile, children }) => {
  // const history = useHistory();
  console.log({profile})
  useEffect(() => {
    if(profile){
      // history.replace('/');
    }
  },[profile]);

  return <React.Fragment>{children}</React.Fragment>;
}

const reduxState = state => ({
  profile: profileSelector(state)
});

AuthContainer.defaultProps = {
  profile: null
}

export default connect(reduxState)(AuthContainer);