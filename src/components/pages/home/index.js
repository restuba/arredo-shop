import { HomeContainer } from "components/containers";
import { Helmet } from "libraries";

const index = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <HomeContainer />
    </>
  );
};

export default index;
