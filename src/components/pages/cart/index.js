import { CartContainer } from "components";
import { Helmet } from "libraries";

const index = () => {
  return (
    <>
      <Helmet>
        <title>Cart</title>
      </Helmet>
      <CartContainer />
    </>
  );
};

export default index;
