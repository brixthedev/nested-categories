import { useState, useEffect } from "react";

import RenderCategories from "./renderCategories";
import staticCategories from "./staticCategories";

function App() {
  const [nestedCategories, setNestedCategories] = useState([]);

  useEffect(() => {
    setNestedCategories(staticCategories);
  }, [nestedCategories]);

  const clickHandler = (categories) => {
    if (categories.name === "root") {
      categories.name = "1";
      categories.categories.push({
        name: `${categories.categories.length + 1}`,
        categories: [],
      });
      categories.name = "root";
      setNestedCategories([categories]);
    } else {
      categories.categories.push({
        name: `${categories.name}.${categories.categories.length + 1}`,
        categories: [],
      });
      setNestedCategories([...staticCategories, categories]);
    }
  };

  return (
    <RenderCategories
      clickHandler={clickHandler}
      nestedCategories={nestedCategories}
    />
  );
}

export default App;
