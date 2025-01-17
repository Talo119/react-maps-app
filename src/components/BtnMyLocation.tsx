import { useContext } from "react"
import { MapContext, PlacesContext } from "../context";

export const BtnMyLocation = () => {

    const { map, isMapReady } = useContext(MapContext);
    const { userLocation } = useContext(PlacesContext);

    const onClick = () => {
        if (!isMapReady) throw new Error('Map is not ready');
        if (!userLocation) throw new Error('User location is not set');

        map?.flyTo({ 
            center: [userLocation[1], userLocation[0]],
            zoom: 14 
        });
    }
  return (
    <button 
        className="btn btn-primary"
        style={{
            position: 'fixed',
            top: '20px',
            right: '20px',
            zIndex: 999,
        }}
        onClick={onClick}
    >
        Mi Ubicación
    </button>
  )
}
