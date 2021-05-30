export default function RenderCategories({ clickHandler, nestedCategories }) {
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
