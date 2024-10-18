import React, { useEffect, useState, useContext } from "react";
import { CartContext } from "../components/CartContext";
import SearchBar from "../components/SearchBar";

import {
  ProductCard,
  ProductsGrid,
  ProductImage,
  ProductName,
  ProductPrice,
  OriginalPrice,
  DiscountedPrice,
  ProductLink,
  ProductTitle,
} from "../components/HomePageStyles";

function HomePage() {
  const { products, setProducts } = useContext(CartContext);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const response = await fetch("https://v2.api.noroff.dev/online-shop");
        const data = await response.json();
        setProducts(data.data);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading all the products......</div>;
  }

  if (isError) {
    return <div>Error while fetching data</div>;
  }

  return (
    <div>
      <ProductTitle>Our Products</ProductTitle>
      <SearchBar products={products} />

      <ProductsGrid>
        {products.map((product) => (
          <ProductCard key={product.id}>
            <ProductName>{product.title}</ProductName>
            <ProductImage src={product.image.url} alt={product.title} />
            {product.discountedPrice &&
            product.discountedPrice !== product.price ? (
              <>
                <ProductPrice>
                  <OriginalPrice>{product.price} USD</OriginalPrice>
                  <DiscountedPrice>
                    {product.discountedPrice} USD
                  </DiscountedPrice>
                </ProductPrice>
              </>
            ) : (
              <ProductPrice>{product.price} USD</ProductPrice>
            )}
            <ProductLink to={`/products/${product.id}`}>
              See details
            </ProductLink>
          </ProductCard>
        ))}
      </ProductsGrid>
    </div>
  );
}

export default HomePage;
