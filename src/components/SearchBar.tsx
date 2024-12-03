import { ChangeEvent, useContext, useRef } from "react"
import { PlacesContext } from "../context";
import { SearchResults } from "./SearchResults";

export const SearchBar = () => {
  const { searchPlacesByTerm  } = useContext(PlacesContext);

  const debounceRef = useRef<NodeJS.Timeout>();
  const onQueryChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      console.log('onQueryChange', event.target.value)
      searchPlacesByTerm(event.target.value);

    }, 1000);
  }

  return (
    <div className="search-container">
      <input 
        type="text"
        placeholder="Buscar un lugar..."
        className="form-control"
        onChange={onQueryChange}
       />
       <SearchResults />
    </div>
  )
}
