import { createContext } from "react";
import { Feature } from "../../interfaces/places";

interface PlacesContextProps {
    isLoading: boolean;
    userLocation?: [number, number];
    searchPlacesByTerm: (query: string) => Promise<Feature[]>;
    places: Feature[];
    isLoadingPlaces: boolean;
}

export const PlacesContext = createContext<PlacesContextProps>({} as PlacesContextProps);