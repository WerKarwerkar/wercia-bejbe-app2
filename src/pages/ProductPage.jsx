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
  Reviews,
  CardButton,
  PageWrapper,
  OriginalPrice,
  DiscountText,
  MessageContainer,
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
    return <MessageContainer>Loading product...</MessageContainer>;
  }

  if (isError || !product) {
    return <MessageContainer>Product is not found :( </MessageContainer>;
  }

  const discountPercentage =
    product.discountedPrice && product.discountedPrice < product.price
      ? Math.floor(
          ((product.price - product.discountedPrice) / product.price) * 100
        )
      : null;

  return (
    <PageWrapper>
      <ProductContainer>
        <ProductTitle>{product.title}</ProductTitle>
        <ImageAndDetailsContainer>
          <ProductImage src={product.image.url} alt={product.title} />
          <ProductDetails>
            <ProductDescription>{product.description}</ProductDescription>

            {product.discountedPrice &&
            product.discountedPrice < product.price ? (
              <>
                <OriginalPrice>
                  Original Price: {product.price} USD
                </OriginalPrice>
                <DiscountedPrice>
                  Discounted Price: {product.discountedPrice} USD
                </DiscountedPrice>
                <DiscountText>Discount: -{discountPercentage}%</DiscountText>
              </>
            ) : (
              <Price>Price: {product.price} USD</Price>
            )}

            {product.reviews && product.reviews.length > 0 && (
              <Reviews>
                <h2>Reviews:</h2>
                {product.reviews.map((review) => (
                  <div key={review.id}>
                    <p>
                      <strong>Username:</strong> {review.username}
                    </p>
                    <p>
                      <strong>Rating:</strong> {review.rating}/5
                    </p>
                    <p>
                      <strong>Description:</strong> {review.description}
                    </p>
                  </div>
                ))}
              </Reviews>
            )}
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
