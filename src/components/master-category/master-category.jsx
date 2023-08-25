import "./master-category.styles.scss";
import { CategoryItem } from "../exports";

function MasterCategory({ categories }) {
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
}

export default MasterCategory;
