import React, { useEffect, useState, useContext } from "react";
import { CartContext } from "../components/CartContext";
import { useParams } from "react-router-dom";
import {
  ProductContainer,
  ProductTitle,
  ImageAndDetailsContainer,
  ProductImage,
  ProductDetails,
  ProductDescription,
  Price,
  DiscountedPrice,
  CardButton,
  PageWrapper,
} from "../components/ProductPageStyles";

function ProductPage() {
  const { id } = useParams();
  const { products, cartSetProducts } = useContext(CartContext);
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  function addToCart(product) {
    cartSetProducts((prevCartProducts) => [...prevCartProducts, product]);
  }

  useEffect(() => {
    const product_temp = products.find((item) => item.id === id);
    if (product_temp) {
      setProduct(product_temp);
    } else {
      setIsError(true);
    }
  }, [id, products]);

  if (isLoading) {
    return <div>Loading product...</div>;
  }

  if (isError || !product) {
    return <div>Product is not found</div>;
  }

  return (
    <PageWrapper>
      <ProductContainer>
        <ProductTitle>{product.title}</ProductTitle>
        <ImageAndDetailsContainer>
          <ProductImage src={product.image.url} alt={product.title} />
          <ProductDetails>
            <ProductDescription>{product.description}</ProductDescription>
            <Price>Price: {product.price} USD</Price>
            <DiscountedPrice>
              Discount Price: {product.discountedPrice} USD
            </DiscountedPrice>
            <CardButton onClick={() => addToCart(product)}>
              Add to Cart
            </CardButton>
          </ProductDetails>
        </ImageAndDetailsContainer>
      </ProductContainer>
    </PageWrapper>
  );
}
export default ProductPage;
