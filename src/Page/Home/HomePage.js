import { CategoryCard, Hero, Loader } from "../../Components";
import { useCategories } from "../../Context";

const HomePage = () => {
  const {categoriesData, isLoading} = useCategories();


  return (
    <main className="home-cont content">
      <Hero />
      <div className="box flex-column">
        <h3 className="headline3 ">Categories</h3>

        {isLoading ? (
          <Loader />
        ) : (
          <div className="category-layout">
            {categoriesData.map((category) => (
              <CategoryCard key={category._id} category={category} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default HomePage;
