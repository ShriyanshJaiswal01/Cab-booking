// const axios = require('axios');
// require('dotenv').config();

// module.exports.getAddressCoordinate = async (address) => {

//   const apiKey = process.env.GOOGLE_MAPS_API; // Ensure this is set in your environment variables
//   const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${apiKey}`;
  
//   // const url = 'https://api.openstreetmap.org/api/0.6/map?bbox=-0.489,-0.123,0.236,51.569';


//   try {
    
//     const response = await axios.get(url);
    

//     if (response.data.status === 'OK') {
//       const location = response.data.results[0].geometry.location;
//       return {
//         ltd: location.lat,
//         lng: location.lng,
//       };
//     } else {
//       throw new Error(`Geocoding API error: ${response.data.status}`);
//     }
//   } catch (error) {
//     console.error('Error fetching coordinates:', error.message);
//     throw error;
//   }
// }

// module.exports.getDistanceTime = async (origin, destination) => {
//   if (!origin || !destination) {
//       throw new Error('Origin and destination are required');
//   }

//   const apiKey = process.env.GOOGLE_MAPS_API;

//   const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${encodeURIComponent(origin)}&destinations=${encodeURIComponent(destination)}&key=${apiKey}`;

//   try {


//       const response = await axios.get(url);
//       if (response.data.status === 'OK') {

//           if (response.data.rows[ 0 ].elements[ 0 ].status === 'ZERO_RESULTS') {
//               throw new Error('No routes found');
//           }

//           return response.data.rows[ 0 ].elements[ 0 ];
//       } else {
//           throw new Error('Unable to fetch distance and time');
//       }

//   } catch (err) {
//       console.error(err);
//       throw err;
//   }
// }

// module.exports.getAutoCompleteSuggestions = async (input) => {
//   if (!input) {
//       throw new Error('query is required');
//   }

//   const apiKey = process.env.GOOGLE_MAPS_API;
//   const url = `https://maps.googleapis.com/maps/api/place/queryautocomplete/json?input=${encodeURIComponent(input)}&key=${apiKey}`;

//   try {
//       const response = await axios.get(url);
//       if (response.data.status === 'OK') {
//           return response.data.predictions.map(prediction => prediction.description).filter(value => value);
//       } else {
//           throw new Error('Unable to fetch suggestions');
//       }
//   } catch (err) {
//       console.error(err);
//       throw err;
//   }
// }

// module.exports.getCaptainsInTheRadius = async (ltd, lng, radius) => {

//   // radius in km


//   const captains = await captainModel.find({
//       location: {
//           $geoWithin: {
//               $centerSphere: [ [ ltd, lng ], radius / 6371 ]
//           }
//       }
//   });

//   return captains;


// }


// from here i have tried to use open street map

const axios = require('axios');
require('dotenv').config();
const captainModel = require('../models/captain.model');

// Helper for Nominatim headers (Required by their policy)
const axiosConfig = {
    headers: { 'User-Agent': 'MyRideApp/1.0 (contact@yourdomain.com)' }
};

/**
 * GEOCODING: Address -> Coordinates
 * Using Nominatim (OSM)
 */
module.exports.getAddressCoordinate = async (address) => {
    const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(address)}&format=json&limit=1`;

    try {
        const response = await axios.get(url, axiosConfig);

        if (response.data && response.data.length > 0) {
            const location = response.data[0];
            return {
                ltd: parseFloat(location.lat),
                lng: parseFloat(location.lon), // Nominatim uses 'lon'
            };
        } else {
            throw new Error('Address not found');
        }
    } catch (error) {
        console.error('Geocoding error:', error.message);
        throw error;
    }
};

/**
 * DISTANCE & TIME: Origin -> Destination
 * Using your local OSRM Docker instance (port 5000)
 */
module.exports.getDistanceTime = async (origin, destination) => {
    // API KEY IS USED HERE IN THE HEADERS
    const apiKey = process.env.ORS_API_KEY; 
    const url = `https://api.openrouteservice.org/v2/directions/driving-car`;

    try {
        const response = await axios.get(url, {
            params: {
                api_key: apiKey,
                start: origin, // Format: "lng,lat"
                end: destination
            }
        });

        // ORS returns data differently than OSRM
        const route = response.data.features[0].properties.summary;
        return {
            distance: { value: route.distance, text: (route.distance / 1000).toFixed(2) + ' km' },
            duration: { value: route.duration, text: Math.floor(route.duration / 60) + ' mins' }
        };
    } catch (err) {
        console.error('ORS Cloud Error:', err.message);
        throw err;
    }
};

/**
 * AUTOCOMPLETE: User Input -> Suggestions
 * Using Photon (by Komoot)
 */
module.exports.getAutoCompleteSuggestions = async (input) => {
    if (!input) {
        throw new Error('Query is required');
    }

    const url = `https://photon.komoot.io/api/?q=${encodeURIComponent(input)}&limit=5`;

    try {
        const response = await axios.get(url);
        
        // Photon returns GeoJSON. We map it to a simple string list.
        return response.data.features.map(feature => {
            const p = feature.properties;
            return [p.name, p.street, p.city, p.state].filter(Boolean).join(", ");
        });
    } catch (err) {
        console.error('Autocomplete error:', err.message);
        throw err;
    }
};

/**
 * RADIUS SEARCH: Find Captains
 * Uses GeoJSON format for MongoDB geospatial queries
 */
module.exports.getCaptainsInTheRadius = async (ltd, lng, radius) => {
    // MongoDB $centerSphere uses [longitude, latitude]
    // Radius in km divided by Earth's radius (6371)
    const captains = await captainModel.find({
        location: {
            $geoWithin: {
                $centerSphere: [[lng, ltd], radius / 6371]
            }
        }
    });

    return captains;
};
