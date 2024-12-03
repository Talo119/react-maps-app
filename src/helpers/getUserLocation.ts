export const getUserLocation = async (): Promise<[number, number]> => {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
            ({ coords }) => {
                //resolve([coords.latitude, coords.longitude]);
                resolve([15.50417, -88.025]);
            },
            (error) => {
                throw new Error('Could not get user location');
                console.error(error);
                reject(error);
            },
        )
    });
}