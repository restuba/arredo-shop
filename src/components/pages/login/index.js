import { LoginContainer } from "components/containers";
import { Helmet } from "libraries";

const index = () => {
  return (
    <>
      <Helmet>
        <title>Authentication</title>
      </Helmet>
      <LoginContainer />
    </>
  );
};

export default index;
