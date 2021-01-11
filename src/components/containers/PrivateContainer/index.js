import {React, connect, useHistory} from 'libraries';
import { profileSelector } from 'modules';
import { useEffect } from 'react';

const PrivateContainer = ({ profile, children }) => {
  const history = useHistory();

  useEffect(() => {
    if(!profile){
      history.replace('/');
    }
  }, [history, profile]);

  return <>{children}</>
}

const reduxState = state => ({
  profile: profileSelector(state)
});

PrivateContainer.defaultProps = {
  profile: null
}

export default connect(reduxState)(PrivateContainer);