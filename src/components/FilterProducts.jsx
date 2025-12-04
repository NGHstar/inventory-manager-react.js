import SortSVG from "../assets/sort.svg";
import CategorySVG from "../assets/category.svg";

function FilterProducts({
  searchPhrase,
  onSearch,
  sort,
  onSort,
  categories,
  categoryFilter,
  onCategoryFilter,
}) {
  // ---

  return (
    <div>
      <h2 className="text-xl text-slate-300 font-medium mb-2 mt-10">
        Products List
      </h2>
      <div className="relative">
        <input
          value={searchPhrase}
          onChange={onSearch}
          name="search"
          type="text"
          className="w-full"
          placeholder="Search in products"
        />
        <span className="text-2xl absolute right-1.5 top-1.5">
          🔎
        </span>
      </div>
      <div className="flex  gap-x-3 mb-4 mt-2.5">
        <div className="relative group flex-1">
          <select
            name="sort"
            value={sort}
            onChange={onSort}
            className="w-full cursor-pointer hover:opacity-80 transition"
          >
            <option
              className="bg-slate-600 text-slate-300 hover:bg-slate-500 py-2 px-3 hover:text-slate-100"
              value="latest"
            >
              Latest
            </option>
            <option
              className="bg-slate-600 text-slate-300 hover:bg-slate-500 py-2 px-3 hover:text-slate-100"
              value="earliest"
            >
              Earliest
            </option>
          </select>
          <img
            src={SortSVG}
            alt="sort svg"
            className="group-hover:scale-115 pointer-events-none transition duration-300 absolute right-3 top-1/2 transform -translate-y-1/2 w-6 h-6 fill-amber-400"
          />
        </div>

        <div className="relative group flex-1">
          <select
            name="categories"
            value={categoryFilter}
            onChange={onCategoryFilter}
            className="w-full cursor-pointer hover:opacity-80 transition"
          >
            <option
              className="bg-slate-600 text-slate-300 hover:bg-slate-500 py-2 px-3 hover:text-slate-100"
              value="all"
            >
              Category (All)
            </option>
            {categories.map((category) => (
              <option
                className="bg-slate-600 text-slate-300 hover:bg-slate-500 py-2 px-3 hover:text-slate-100"
                value={category.id}
              >
                {category.title}
              </option>
            ))}
          </select>
          <img
            src={CategorySVG}
            alt="sort svg"
            className="group-hover:scale-115 pointer-events-none transition duration-300 absolute right-3 top-1/2 transform -translate-y-1/2 w-6 h-6 fill-amber-400"
          />
        </div>
      </div>
    </div>
  );
}

export default FilterProducts;
