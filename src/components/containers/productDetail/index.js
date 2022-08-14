import {
  React,
  useCallback,
  useEffect,
  useState,
  useSelector,
  useParams,
} from "libraries";
import { Button, Gallery, Loading } from "components";
import { getDetailProduct, getProducts } from "services";
import Wrapper from "./style";

const Index = () => {
  const [loading, setLoading] = useState(true);
  const { name, description, images, price } = useSelector(
    (state) => state?.product?.detailProduct
  );
  const [order, setOrder] = useState(1);
  const { slug } = useParams();

  const initData = useCallback(async () => {
    try {
      setLoading(true);
      const data = await getProducts();
      getDetailProduct(data, slug);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      alert("Terjadi kesalahan!");
      throw err;
    }
  }, [slug]);

  useEffect(() => {
    initData();
  }, [initData]);

  return (
    <Wrapper>
      {loading ? (
        <Loading color="#202020" type="spinningBubbles" />
      ) : (
        <div className="detail-product">
          <section>
            <div className="thumb-product">
              <Gallery images={images} />
            </div>
            <div className="desc-product">
              <div className="desc-header">
                <h2 className="price">${price}</h2>
                <h3 className="name">{name}</h3>
              </div>
              <p className="desc-body">{description}</p>
              <div className="desc-footer">
                <div className="quantity">
                  <p>Quantity</p>
                  <div className="qty-btn">
                    <button className="qty-btn">-</button>
                    <input type="number" className="qty-value" />
                    <button
                      onClick={() => setOrder(order + 1)}
                      className="qty-btn"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="add-cart">
                  <Button title="Add to cart" />
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </Wrapper>
  );
};

export default Index;
