const axios = require('axios');

const instance = axios.create({
  baseURL: 'http://meepcraft.com'
});

/**
 * Get a Player's stats from the Meepcraft API
 * 
 * @param {String} player Name of player to get stats for
 * @param {*} callback Result data (`err`, `stats`)
 */
const getPlayerStats = (player, callback) => {
  instance.get(`/players/${player}`).then((response) => {
    callback(false, response.data);

  }).catch((error) => {
    if (!error.response || !error.response.data.message) {
      return callback('Failed to fetch player stats!', false);
    }

    callback(error.response.data.message, false);
  });
};

module.exports = {
  getPlayerStats
};