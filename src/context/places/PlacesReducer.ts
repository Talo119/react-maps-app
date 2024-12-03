import { Feature } from "../../interfaces/places";
import { PlacesState } from "./PlacesProvider";

type PlacesActions = 
| { type: 'setUserLocation', payload: [number, number] }
| { type: 'searchPlaces', payload: Feature[] }
| { type: 'setLoadingPlaces' }

export const placesReducer = (state: PlacesState, action: PlacesActions): PlacesState => {
    switch (action.type) {
        case 'setUserLocation':
            return {
                ...state,
                isLoading: false,
                userLocation: action.payload,
            }
        case 'setLoadingPlaces':
            return {
                ...state,
                isLoadingPlaces: true,
                places: [],
            }
        case 'searchPlaces':
            return {
                ...state,
                isLoadingPlaces: false,
                places: action.payload,
            }
        default:
            return state;
    }
}