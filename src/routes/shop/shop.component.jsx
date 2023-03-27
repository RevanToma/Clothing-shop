import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";

import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";
<<<<<<< HEAD
import { fetchCategoriesStart } from "../../store/categories/category.action";

=======
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import { setCategories } from "../../store/categories/category.reducer";
>>>>>>> thunk
const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
<<<<<<< HEAD
    dispatch(fetchCategoriesStart());
  }, []);
=======
    const getCategoriesMap = async () => {
      const categoriesArray = await getCategoriesAndDocuments("categories");
      dispatch(setCategories(categoriesArray));
    };
    getCategoriesMap();
  });
>>>>>>> thunk

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};
export default Shop;
