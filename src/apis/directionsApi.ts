import axios from "axios";


const directionsApi = axios.create({
    baseURL: "https://api.mapbox.com/directions/v5/mapbox/driving/",
    params: {
        access_token: "pk.eyJ1IjoiY21vdGlub2RldiIsImEiOiJjbTN4bDlwcmMxbWVqMmpweDFhaWk4c3d5In0.cB3iSBaqszhwOSQ5VKOzhQ",
        alternatives: false,
        geometries: 'geojson',
        overview: 'simplified',
        steps: false,
    },
});

export default directionsApi;