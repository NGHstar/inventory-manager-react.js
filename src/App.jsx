import { Toaster } from "react-hot-toast";
import AddCategoryForm from "./components/AddCategoryForm";
import AddProductForm from "./components/AddProductForm";
import AppBar from "./components/Appbar";
import ProductsList from "./components/ProductsList";
import { useEffect, useMemo, useState } from "react";
import FilterProducts from "./components/FilterProducts";

function App() {
  // ---
  const [categories, setCategories] = useState(() => {
    const saved = localStorage.getItem("categories");
    return saved ? JSON.parse(saved) : [];
  });

  const [products, setProducts] = useState(() => {
    const saved = localStorage.getItem("products");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    localStorage.setItem("categories", JSON.stringify(categories));
  }, [categories]);

  const [sort, setSort] = useState("latest");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [searchPhrase, setSearchPhrase] = useState("");

  const sortHandler = (e) => {
    setSort(e.target.value);
  };

  const categorySortHandler = (e) => {
    setCategoryFilter(e.target.value);
  };

  const searchHandler = (e) => {
    setSearchPhrase(e.target.value.trim().toLowerCase());
  };

  const filteredProducts = useMemo(() => {
    let items = [...products];

    if (categoryFilter !== "all") {
      items = items.filter(
        (p) => String(p.categoryID) === String(categoryFilter)
      );
    }

    // search
    items = items.filter((p) =>
      p.title.toLowerCase().includes(searchPhrase)
    );

    // sort
    items.sort((a, b) =>
      sort === "latest"
        ? new Date(b.createdAt) - new Date(a.createdAt)
        : new Date(a.createdAt) - new Date(b.createdAt)
    );

    return items;
  }, [products, sort, searchPhrase, categoryFilter]);

  return (
    <div className="bg-slate-800 min-h-screen pb-24 max-sm:pb-48">
      <Toaster />
      <AppBar productsCount={products.length} />
      {/* App content */}
      <div className="container max-sm:px-2">
        <AddCategoryForm setCategories={setCategories} />
        <AddProductForm
          categories={categories}
          setProducts={setProducts}
        />
        <FilterProducts
          onSort={sortHandler}
          onSearch={searchHandler}
          searchPhrase={searchPhrase}
          sort={sort}
          categories={categories}
          categoryFilter={categoryFilter}
          onCategoryFilter={categorySortHandler}
        />
        <ProductsList
          categories={categories}
          products={filteredProducts}
          setProducts={setProducts}
        />
      </div>
    </div>
  );
}

export default App;
