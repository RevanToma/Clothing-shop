import { useContext, Fragment } from "react";
import { CategoryContext } from "../../context/categories.context";

import CategoryPreview from "../../components/category-preview/category-preview.context";

import "./shop.style.scss";
const Shop = () => {
  const { categoriesMap } = useContext(CategoryContext);

  return (
    <div className="shop-container">
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </div>
  );
};
export default Shop;
