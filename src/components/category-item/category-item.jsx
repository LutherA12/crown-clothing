import "./category-item.styles.scss";

function CategoryItem({ category }) {
  const { imageUrl, title, subtitle } = category;

  return (
    <div className="category-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>
    </div>
  );
}

export default CategoryItem;
