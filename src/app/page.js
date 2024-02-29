"use client";

import Navbar from "./components/layout/Navbar";
import MobileFoter from "./components/layout/MobileFoter";
import Footer from "./components/layout/Footer";
import CategoryProducts from "./CategoryProducts";
import { useQuery } from "react-query";

export default function Home() {
  const fetchHelper = async (url) => {
    const response = await fetch(url);
    return await response.json();
  };

  const {
    data: categories,
    isLoading: categoriesLoading,
    error: categoriesError,
  } = useQuery({
    queryFn: () =>
      fetchHelper("https://api.testvalley.kr/collections?prearrangedDiscount"),
    queryKey: ["categories"],
  });
  return (
    <div>
      <Navbar />
      <MobileFoter />
      <div className="container py-10 mb-40 px-4 lg:px-8">
        {categories === null || (categoriesLoading && <h1>Loading...</h1>)}
        {categoriesError && <h1>Something went wrong, try again later</h1>}
        {categories?.items?.map((category) => {
          if (category?.items?.length > 0) {
            return <CategoryProducts key={category.id} category={category} />;
          }
        })}
      </div>

      <Footer />
    </div>
  );
}
