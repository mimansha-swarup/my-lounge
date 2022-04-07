import { useState, useEffect } from "react";
import { CategoryCard, Hero, Loader } from "../../Components";
import axios from "axios";
import { categoriesApi } from "../../Helper/Api/Api";
import { useToast, useAuth } from "../../Context";
const HomePage = () => {
  const { setToastData } = useToast();
  const [categoriesData, setCategoriesData] = useState([]);
  const [status, setStatus] = useState({ isLoading: false });
  const { authState } = useAuth();
  useEffect(() => {
    (async () => {
      try {
        setStatus({ isLoading: true, error: "" });
        const response = await axios.get(categoriesApi);
        if (response.status === 200) {
          setCategoriesData(response.data.categories);
          setStatus({ isLoading: false });
        }
      } catch (error) {
        setStatus({ isLoading: false });
        setToastData((prevToastData) => [
          ...prevToastData,
          { type: "error", message: error.message },
        ]);
      }
    })();
  }, [authState?.isAuth]);
  return (
    <main className="home-cont content">
      <Hero />
      <div className="box flex-column">
        <h3 className="headline3 ">Categories</h3>

        {status.isLoading ? (
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
