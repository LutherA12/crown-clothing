import "./home-page.styles.scss";
import { MasterCategory } from "../../components/exports.jsx";
import { categories } from "../../constants/constants.jsx";

function HomePage() {
  return (
    <div>
      <MasterCategory categories={categories} />
    </div>
  );
}

export default HomePage;
