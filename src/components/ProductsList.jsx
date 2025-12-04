function ProductsList({ products, categories, setProducts }) {
  // ---

  const onDelete = (id) => {
    const filteredProducts = products.filter(
      (product) => product.id !== id
    );
    setProducts(filteredProducts);
  };

  return (
    <div>
      <div id="products-list" className="grid">
        {products?.map((product) => {
          const category = categories.find(
            (c) => c.id == product.categoryID
          );

          return (
            <div
              key={product.id}
              className="flex flex-nowrap gap-x-6 items-center justify-between bg-slate-700/50 py-2 px-3 rounded-md mb-2 sm:mb-1.5 overflow-x-auto"
            >
              <div className="whitespace-nowrap">
                <span>{product.title}</span>
              </div>
              <div className="space-x-2 flex flex-nowrap items-center">
                <span className="text-slate-400">
                  {new Date(product.createdAt).toLocaleDateString(
                    "en-us"
                  )}
                </span>
                <span className="justify-center whitespace-nowrap items-center bg-slate-700 border-slate-500 border-2 text-slate-400 pb-0.5 px-2 font-medium rounded-full">
                  {category?.title || "df"}
                </span>
                <span className="px-1 text-sm pb-0.5 border-2 border-slate-500 bg-slate-700 rounded-full font-medium">
                  {product.quantity}
                </span>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    onDelete(product.id);
                  }}
                  className="cursor-pointer hover:opacity-80 text-[indianred]"
                >
                  delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProductsList;
