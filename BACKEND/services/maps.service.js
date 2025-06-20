const axios = require('axios');
require('dotenv').config();

module.exports.getAddressCoordinate = async (address) => {

  const apiKey = process.env.GOOGLE_MAPS_API; // Ensure this is set in your environment variables
  const url = `https://maps.gomaps.pro/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${apiKey}`;
  
  // const url = 'https://api.openstreetmap.org/api/0.6/map?bbox=-0.489,-0.123,0.236,51.569';


  try {
    
    const response = await axios.get(url);
    

    if (response.data.status === 'OK') {
      const location = response.data.results[0].geometry.location;
      return {
        ltd: location.lat,
        lng: location.lng,
      };
    } else {
      throw new Error(`Geocoding API error: ${response.data.status}`);
    }
  } catch (error) {
    console.error('Error fetching coordinates:', error.message);
    throw error;
  }
}

module.exports.getDistanceTime = async (origin, destination) => {
  if (!origin || !destination) {
      throw new Error('Origin and destination are required');
  }

  const apiKey = process.env.GOOGLE_MAPS_API;

  const url = `https://maps.gomaps.pro/maps/api/distancematrix/json?origins=${encodeURIComponent(origin)}&destinations=${encodeURIComponent(destination)}&key=${apiKey}`;

  try {


      const response = await axios.get(url);
      if (response.data.status === 'OK') {

          if (response.data.rows[ 0 ].elements[ 0 ].status === 'ZERO_RESULTS') {
              throw new Error('No routes found');
          }

          return response.data.rows[ 0 ].elements[ 0 ];
      } else {
          throw new Error('Unable to fetch distance and time');
      }

  } catch (err) {
      console.error(err);
      throw err;
  }
}

module.exports.getAutoCompleteSuggestions = async (input) => {
  if (!input) {
      throw new Error('query is required');
  }

  const apiKey = process.env.GOOGLE_MAPS_API;
  const url = `https://maps.gomaps.pro/maps/api/place/queryautocomplete/json?input=${encodeURIComponent(input)}&key=${apiKey}`;

  try {
      const response = await axios.get(url);
      if (response.data.status === 'OK') {
          return response.data.predictions.map(prediction => prediction.description).filter(value => value);
      } else {
          throw new Error('Unable to fetch suggestions');
      }
  } catch (err) {
      console.error(err);
      throw err;
  }
}

module.exports.getCaptainsInTheRadius = async (ltd, lng, radius) => {

  // radius in km


  const captains = await captainModel.find({
      location: {
          $geoWithin: {
              $centerSphere: [ [ ltd, lng ], radius / 6371 ]
          }
      }
  });

  return captains;


}
