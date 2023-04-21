const key = process.env.REACT_APP_NASA_KEY

const requests = {
    requestRover: `https://api.nasa.gov/mars-photos/api/v1/rovers/?api_key=${key}`,
    requestPhotos: `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2021-12-3&api_key=${key}`
};

export default requests