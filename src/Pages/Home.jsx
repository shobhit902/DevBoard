import React, { useState } from "react";
import Widget from "../Components/Widget";

const Home = () => {
  const [widget, setWidget] = useState([]);



  function addWidget(type) {
    const newWidget = {
      id: Date.now().toString(),
      type: type,
    };
    setWidget((prev) => [...prev, newWidget]);
  }

  const handleRemove = (id) => {
    setWidget((prev) => prev.filter((w) => w.id !== id));
  };

  return (
    <>
      {/* Buttons to add widgets */}
      <div className="flex gap-4 p-4">
        <button
          onClick={() => addWidget("quote")}
          className="bg-blue-500 text-white px-3 py-1 rounded"
        >
          Add Quote
        </button>
        <button
          onClick={() => addWidget("clock")}
          className="bg-blue-500 text-white px-3 py-1 rounded"
        >
          Add Clock
        </button>
        <button
          onClick={() => addWidget("pomodoro")}
          className="bg-blue-500 text-white px-3 py-1 rounded"
        >
          Add Pomodoro
        </button>
      </div>

      <div className="flex flex-wrap">
        {widget.map((widget) => (
          <Widget
            key={widget.id}
            title={widget.type}
            onRemove={() => handleRemove(widget.id)}
          >
            {widget.type === "quote" && (
              <p>
                "The best way to get started is to quit talking and begin doing."
              </p>
            )}
            {widget.type === "clock" && <p>[Clock will go here]</p>}
            {widget.type === "pomodoro" && <p>[Pomodoro Timer will go here]</p>}
          </Widget>
        ))}
      </div>
    </>
  );
};

export default Home;
