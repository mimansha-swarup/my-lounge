import { categories } from "../../backend/db/categories";
import { CategoryCard, VideoCard } from "../../Components";
import Hero from "../../Components/Home/Hero";

const HomePage = () => {
  return (
    <main className="home-cont content">
      <Hero />
      <div className="box">
        <div>
          <h3 className="headline3 ">Categories</h3>
          <div className="category-layout">
            {categories.map((category) => (
              <CategoryCard key={category._id} category={category} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
