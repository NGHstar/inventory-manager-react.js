import { useState } from "react";
import toast from "react-hot-toast";

function AddProductForm({ categories, setProducts }) {
  // ---
  const [formData, setFormData] = useState({
    title: "",
    quantity: "",
    categoryID: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const addProductHandler = (e) => {
    e.preventDefault();
    if (
      !formData.title ||
      !formData.quantity ||
      !formData.categoryID
    ) {
      toast.error("Please fill all the fields");
      return;
    }

    const newProduct = {
      ...formData,
      createdAt: new Date().toISOString(),
      id: new Date().getTime(),
    };

    setProducts((prevProducts) => [...prevProducts, newProduct]);

    toast.success("Product added successfully");

    setFormData({
      title: "",
      quantity: "",
      categoryID: "",
    });
  };

  return (
    <div>
      <h2 className="text-xl text-slate-300 font-medium mb-2 mt-10">
        Add new product
      </h2>
      <form
        id="add-product-form"
        className="bg-slate-700 p-4 rounded-xl flex flex-col gap-y-4"
      >
        <div className="flex gap-x-4 max-sm:flex-wrap max-sm:gap-y-4">
          <div className="flex-1">
            <label htmlFor="product-title">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
            />
          </div>
          <div className="flex-1">
            <label htmlFor="product-quantity">Quantity</label>
            <input
              type="number"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
            />
          </div>
        </div>
        <div>
          <label htmlFor="product-category">Category</label>
          <div className="relative group">
            <select
              type="number"
              name="categoryID"
              value={formData.categoryID}
              onChange={handleChange}
              className="w-full cursor-pointer hover:opacity-80 transition"
            >
              <option
                className="bg-slate-600 text-slate-300 hover:bg-slate-500 py-2 px-3 hover:text-slate-100"
                value=""
              >
                Select category
              </option>
              {categories.map((category) => (
                <option
                  key={category.id}
                  className="bg-slate-600 text-slate-300 hover:bg-slate-500 py-2 px-3 hover:text-slate-100"
                  value={category.id}
                >
                  {category.title}
                </option>
              ))}
            </select>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="group-hover:rotate-0 -rotate-90 pointer-events-none transition duration-300 absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </div>
        </div>

        <button
          className="flex-1 btn btn--primary"
          onClick={addProductHandler}
        >
          Create Product
        </button>
      </form>
    </div>
  );
}

export default AddProductForm;
