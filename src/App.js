import { useState, useEffect } from "react";

import RenderCategories from "./renderCategories";

const staticCategories = [
  {
    name: "root",
    categories: [
      {
        name: "1",
        categories: [
          {
            name: "1.1",
            categories: [],
          },
          {
            name: "1.2",
            categories: [
              {
                name: "1.2.1",
                categories: [],
              },
            ],
          },
        ],
      },
      {
        name: "2",
        categories: [
          {
            name: "2.1",
            categories: [],
          },
        ],
      },
    ],
  },
];

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
