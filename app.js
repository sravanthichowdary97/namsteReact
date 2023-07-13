import React from "react";
import ReactDOM from "react-dom/client";

// const heading = <h1 id="heading"> {"namste react from freact"} </h1>;
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "namste react from freact"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
