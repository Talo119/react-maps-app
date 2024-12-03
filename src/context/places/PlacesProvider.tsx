import { useEffect, useReducer } from "react";
import { PlacesContext } from "./PlacesContext"
import { placesReducer } from "./PlacesReducer";
import { getUserLocation } from "../../helpers";
import { searchApi } from "../../apis";
import { Feature, PlacesResponse } from "../../interfaces/places";

export interface PlacesState {
    isLoading: boolean;
    userLocation?: [number, number];
    isLoadingPlaces: boolean;
    places: Feature[];
}

const INITIAL_STATE: PlacesState = {
    isLoading: true,
    userLocation: undefined,
    isLoadingPlaces: false,
    places: [],
}

interface Props {
    children: JSX.Element | JSX.Element[];
}

export const PlacesProvider = ({ children }: Props) => {
    const [state, dispatch] = useReducer(placesReducer, INITIAL_STATE);

    useEffect(() => {
      const getLocation = async () => {
        const userLocation = await getUserLocation();
        dispatch({ type: 'setUserLocation', payload: userLocation });
      }
      getLocation();
    }, [])

    const searchPlacesByTerm = async (query: string): Promise<Feature[]> => {
        if(query.length === 0) {
            dispatch({ type: 'searchPlaces', payload: [] });
            return [];
        }
        if(!state.userLocation) throw new Error('User location not found');

        dispatch({ type: 'setLoadingPlaces' });

        const respo = await searchApi.get<PlacesResponse>(`/${ query }.json`, {
            params: {
                proximity: state.userLocation.join(','),
            }
        });
        console.log(respo.data);
        
        dispatch({ type: 'searchPlaces', payload: respo.data.features });
        return respo.data.features;
    }
    

    return (
        <PlacesContext.Provider value={{
            ...state,
            searchPlacesByTerm
        }}>
            { children }
        </PlacesContext.Provider>
    )
}