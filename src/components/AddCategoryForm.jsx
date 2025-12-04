import { useState } from "react";
import toast from "react-hot-toast";

function AddCategoryForm({ setCategories }) {
  // ---
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const addCategoryHandler = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.description) {
      toast.error("Please fill all the fields");
      return;
    }
    setCategories((prevCategories) => [
      ...prevCategories,
      {
        ...formData,
        createdAt: new Date().toISOString(),
        id: new Date().getTime(),
      },
    ]);
    setFormData({ title: "", description: "" });
    setOpen(false);
    toast.success("Category added successfully");
  };

  return (
    <section className="mt-8">
      <button
        onClick={(e) => {
          e.preventDefault();
          setOpen(true);
        }}
        className={`btn btn--secondary w-full ${
          open ? "hidden" : ""
        }`}
      >
        Add new Category
      </button>
      <div
        id="category-form-wrapper"
        className={open ? "" : "hidden"}
      >
        <h2 className="text-xl text-slate-300 font-medium mb-2">
          Add new category
        </h2>
        <form
          id="add-category-form"
          className="bg-slate-700 p-4 rounded-xl flex flex-col gap-y-4"
        >
          <div>
            <label htmlFor="category-title">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={changeHandler}
            />
          </div>
          <div>
            <label htmlFor="category-description">Description</label>
            <textarea
              type="text"
              name="description"
              value={formData.description}
              onChange={changeHandler}
              rows="4"
              className="w-full"
            ></textarea>
          </div>
          <div className="flex items-center gap-x-4">
            <button
              onClick={(e) => {
                e.preventDefault();
                setOpen(false);
              }}
              className="flex-1 btn btn--secondary"
            >
              Cancel
            </button>
            <button
              onClick={addCategoryHandler}
              className="flex-1 btn btn--primary"
            >
              Create Category
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default AddCategoryForm;
