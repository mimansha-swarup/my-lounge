import { useState, useEffect } from "react";
import { CategoryCard, Hero, VideoCard } from "../../Components";
 import axios from "axios";
import { categoriesApi } from "../../Helper/Api/Api";
const HomePage = () => {
  
  const [categoriesData, setCategoriesData] = useState([]);
  const [status, setStatus] = useState({ isLoading: false, error: "" });

  useEffect(() => {
    (async () => {
      setStatus({ isLoading: true, error: "" });
      const response = await axios.get(categoriesApi);
      if (response.status === 200) {
        setCategoriesData(response.data.categories);
        setStatus({ isLoading: false, error: "" });
      }
      try {
      } catch (error) {
        setStatus({ isLoading: false, error: error.message });
      }
    })();
  }, [])
  return (
    <main className="home-cont content">
      <Hero />
      <div className="box">
        <div>
          <h3 className="headline3 ">Categories</h3>
          <div className="category-layout">
            {categoriesData.map((category) => (
              <CategoryCard key={category._id} category={category} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
