import React from "react";

function Widget({ title, children, onRemove }) {
  return (
    <div className="border rounded-xl p-4 w-80 shadow-md bg-white m-4">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-xl font-semibold">{title}</h2>
        <button
          className="p-1 px-3 bg-blue-600 text-white text-sm rounded hover:bg-blue-800"
          onClick={onRemove}
        >
          Remove
        </button>
      </div>
      <div>{children}</div>
    </div>
  );
}

export default Widget;
