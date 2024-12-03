import { useContext, useState } from "react";
import { MapContext, PlacesContext } from "../context";
import { LoadingPlaces } from "./LoadingPlaces";
import { Feature } from "../interfaces/places";

export const SearchResults = () => {
  const { places, isLoadingPlaces, userLocation } = useContext(PlacesContext);
  const { map, getRouteBetweenPoints } = useContext(MapContext);

  const [activeId, setActiveId] = useState("");

  const onPlaceClick = (place: Feature) => {
    console.log("onPlaceClick", place);
    const [lng, lat] = place.center;
    map?.flyTo({ center: [lng, lat], zoom: 15 });
    setActiveId(place.id);
  };

  const getRoute = (place: Feature) => {
    if (!userLocation) return;
    const [lng, lat] = place.center;
    getRouteBetweenPoints([userLocation![1], userLocation![0]], [lng, lat])
  }


  if (isLoadingPlaces) return <LoadingPlaces />;
  if (places.length === 0) return <></>;
  return (
    <ul className="list-group mt-3">
      {places.map((place) => (
        <li
          className={`${
            activeId === place.id ? "active" : ""
          } list-group-item list-group-item-action pointer`}
          key={place.id}
          onClick={() => onPlaceClick(place)}
        >
          <h6>{place.text_es}</h6>
          <p
            style={{
              fontSize: "12px",
            }}
          >
            {place.place_name}
          </p>
          <button
            onClick={() => getRoute(place)}
            className={`btn btn-sm ${
              activeId === place.id ? "btn-outline-light" : "btn-outline-primary"
            } `}
          >
            Direcciones
          </button>
        </li>
      ))}
    </ul>
  );
};
