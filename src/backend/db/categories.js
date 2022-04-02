import { v4 as uuid } from "uuid";
import {categoriesImage} from "../../Assets/index"

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */


export const categories = [
  {
    _id: uuid(),
    categoryName: "Lofi",
    categoryImage: categoriesImage.lofi ,
    description:
    "",
  },
  {
    _id: uuid(),
    categoryName: "Bollywood",
    categoryImage: categoriesImage.bollywood ,
    description:
    "",
  },
  {
    _id: uuid(),
    categoryName: "Anime",
    categoryImage: categoriesImage.anime ,
    description:
      "",
  },
];
