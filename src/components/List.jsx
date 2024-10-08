import { useEffect } from "react";
import { Button, Container } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { addToCart, fetchProducts } from "../store/productSlice";
import Product from "./Product";

const List = () => {
  const products = useAppSelector((state) => state.products.products);
  const dispatch = useAppDispatch();
  console.log("products", products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div>
      <h1>Products List</h1>
      {products.map((product) => (
        <Container key={product.id} lg style={{ padding: "10px" }}>
          <Product product={product} />
          <Button onClick={() => dispatch(addToCart(product))}>
            Add to Cart
          </Button>
        </Container>
      ))}
    </div>
  );
};

export default List;
