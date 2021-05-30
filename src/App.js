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

  const clickHandler = (_categories) => {
    if (_categories.name === "root") {
      _categories.name = "1";
      _categories.categories.push({
        name: `${_categories.categories.length + 1}`,
        categories: [],
      });
      _categories.name = "root";
      setNestedCategories([_categories]);
    } else {
      _categories.categories.push({
        name: `${_categories.name}.${_categories.categories.length + 1}`,
        categories: [],
      });
      setNestedCategories([...staticCategories, _categories]);
    }
  };

  return (
    <>
      {nestedCategories.map((categories) => {
        if (categories.categories.length > 0) {
          return (
            <div key={categories.name}>
              <p>{categories.name}</p>
              <button onClick={() => clickHandler(categories)}>+</button>
              <RenderCategories
                clickHandler={clickHandler}
                nestedCategories={categories.categories}
              />
            </div>
          );
        } else {
          return (
            <div key={categories.name}>
              <p>{categories.name}</p>
              <button onClick={() => clickHandler(categories)}>+</button>
            </div>
          );
        }
      })}
    </>
  );
}

export default App;
