import { randomUniqueNum } from "./Functions/randomUniqueNum";
import { isPresent, isPresentByName } from "./Functions/IsPresent";
import { useIsFullScreen } from "./Hooks/fullScreen";
import { filterByCategory, searchByName, sortLatest } from "./Functions/FilterFunctions";
import { labels, secondaryLabels } from "./LocalData.js/SideBarLinks";

export{
  isPresent,
  useIsFullScreen,
  randomUniqueNum,
  sortLatest,
  searchByName,
  filterByCategory,
  isPresentByName,
  labels,
  secondaryLabels,
}