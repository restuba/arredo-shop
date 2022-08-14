import { Loading } from "components";
import {
  React,
  ResponsiveMasonry,
  Masonry,
  useSelector,
  useCallback,
  useEffect,
  useState,
} from "libraries";
import { getFeatured, getProducts } from "services";
import { Wrapper } from "./style";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const { featuredProducts } = useSelector((state) => state.product);
  // const history = useHistory();
  const initData = useCallback(async () => {
    try {
      setLoading(true);
      const data = await getProducts();
      getFeatured(data);
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

  return (
    <Wrapper>
      {loading ? (
        <Loading color="#202020" type="spinningBubbles" />
      ) : (
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 320: 1, 576: 2, 768: 3, 992: 3 }}
        >
          <Masonry>
            {featuredProducts.map((product) => (
              <div className="product" key={product.slug}>
                <img src={product.images[0]} alt="" />
                <div className="product-content">
                  <p>${product.price}</p>
                  <h4>{product.name}</h4>
                </div>
              </div>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      )}
    </Wrapper>
  );
};

export default Home;
