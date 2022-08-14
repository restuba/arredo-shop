import { RiFilter2Line as FilterIc } from "react-icons/ri";
import { connect, React, useCallback, useEffect, useState, useNavigate } from "libraries";
import { Product, Filter, Loading } from "components";
import { urlParams } from "utils";
import { getProducts } from "services";
import { productsSelector } from "modules";
import { productsURL } from "configs";
import { FloatingBtn, Wrapper } from "./style";

const Index = ({ products }) => {
  const [filterActive, setFilterActive] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const initData = useCallback(async () => {
    try {
      setLoading(true);
      await getProducts();
      setLoading(false);
    } catch (err) {
      setLoading(false);
      alert("Terjadi kesalahan!");
      throw err;
    }
  }, []);

  useEffect(() => {
    initData();
  }, [initData]);

  const onRedirectToProduct = (slug) => {
    const url = urlParams(productsURL().detail, { slug });
    navigate(url);
  };

  return (
    <Wrapper>
      <Filter isActive={filterActive} onClick={() => setFilterActive(false)} />
      <FloatingBtn onClick={() => setFilterActive(!filterActive)}>
        <FilterIc />
      </FloatingBtn>
      {loading ? (
        <Loading color="#202020" type="spinningBubbles" />
      ) : (
        <div className="component_product_list">
          {products.map((product) => (
            <Product
              key={product?.slug}
              image={product?.images[0]}
              price={product?.price}
              name={product?.name}
              onClick={() => {
                onRedirectToProduct(product?.slug);
              }}
            />
          ))}
        </div>
      )}
    </Wrapper>
  );
};

const reduxState = (state) => ({
  products: productsSelector(state),
});

export default connect(reduxState)(Index);
