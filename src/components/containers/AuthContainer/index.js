import { React, connect, useHistory } from 'libraries';
import { profileSelector } from 'modules';
import { useEffect } from 'react';

const AuthContainer = ({ profile, children }) => {
  const history = useHistory();

  useEffect(() => {
    if(profile){
      console.log('detected profile', profile)
      history.replace('/');
    }
  },[history, profile]);

  return <React.Fragment>{children}</React.Fragment>;
}

const reduxState = state => ({
  profile: profileSelector(state)
});

AuthContainer.defaultProps = {
  profile: null
}

export default connect(reduxState)(AuthContainer);