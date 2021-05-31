export default function RenderCategories({ clickHandler, nestedCategories }) {
  return (
    <>
      {nestedCategories.map((categories) => {
        return (
          <div key={categories.name}>
            <p>Name: "{categories.name}"</p>
            <button onClick={() => clickHandler(categories)}>+</button>
            {categories.categories.length > 0 && (
              <RenderCategories
                clickHandler={clickHandler}
                nestedCategories={categories.categories}
              />
            )}
          </div>
        );
      })}
    </>
  );
}
