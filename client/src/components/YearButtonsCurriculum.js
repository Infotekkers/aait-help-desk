import React from "react";

export default ({ prop, setYear }) => {
  return prop.map((item) => {
    return <button onClick={() => setYear(item)}>{item}</button>;
  });
};
