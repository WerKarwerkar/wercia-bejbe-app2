import React, { useState } from "react";
import {
  SearchBarWrapper,
  SearchInput,
  SuggestionsList,
  SuggestionItem,
  StyledLink,
} from "../components/SearchStyles";

function SearchBar({ products = [] }) {
  const [searchTerm, setSearchTerm] = useState("");

  const filterProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <SearchBarWrapper>
      <SearchInput
        autoComplete="off"
        value={searchTerm}
        id="search"
        placeholder="Search for products"
        onChange={(event) => setSearchTerm(event.target.value)}
      />
      {filterProducts.length > 0 && searchTerm.length > 0 && (
        <SuggestionsList>
          {filterProducts.map((product) => (
            <SuggestionItem key={product.id}>
              <StyledLink to={`/products/${product.id}`}>
                {product.title}
              </StyledLink>
            </SuggestionItem>
          ))}
        </SuggestionsList>
      )}
    </SearchBarWrapper>
  );
}

export default SearchBar;
