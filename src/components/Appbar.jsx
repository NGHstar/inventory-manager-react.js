function AppBar({ productsCount }) {
  return (
    <div className="h-12 flex items-center justify-center gap-x-4 bg-slate-700">
      <h1 className="text-xl text-slate-300 mb-1">
        Inventory App using tailwind & js
      </h1>
      <span className="badge">{productsCount}</span>
    </div>
  );
}

export default AppBar;
