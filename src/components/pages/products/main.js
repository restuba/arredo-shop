import { ProductsContainer } from "components";
import { React, Helmet } from "libraries";

const index = () => {
  return (
    <>
      <Helmet>
        <title>Product - List</title>
      </Helmet>
      <ProductsContainer />
    </>
  );
};

export default index;
