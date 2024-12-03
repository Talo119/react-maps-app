import axios from "axios";

const searchApi = axios.create({
    baseURL: "https://api.mapbox.com/geocoding/v5/mapbox.places/",
    params: {
        access_token: "pk.eyJ1IjoiY21vdGlub2RldiIsImEiOiJjbTN4bDlwcmMxbWVqMmpweDFhaWk4c3d5In0.cB3iSBaqszhwOSQ5VKOzhQ",
        limit: 5,
        language: "es",
    },
});

export default searchApi;