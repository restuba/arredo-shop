import { ProductDetailContainer } from "components";
import { React, Helmet } from "libraries";

const index = () => {
  return (
    <>
      <Helmet>
        <title>Product - Detail</title>
      </Helmet>
      <ProductDetailContainer />
    </>
  );
};

export default index;
