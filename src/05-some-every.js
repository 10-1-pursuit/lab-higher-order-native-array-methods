/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleSongData` variable below to gain access to tickets data. This data is pulled from the `data/songs.js` file.

  You may use this data to test your functions. You may assume the shape of the data remains the same but that the values may change.

  Keep in mind that your functions must still have and use a parameter for accepting all songs.
*/
const exampleSongData = require("../data/songs");
// Do not change the line above.

/**
 * Returns `true` if every song is over two minutes. Otherwise, return `false`.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {boolean}
 * 
 */

function allSongsAreOverTwoMinutes(songs) {
  const allSongsAreOverTwoMinutes= songs.every(element=>{
return element = element.runtimeInSeconds>"120"});
return allSongsAreOverTwoMinutes;

}
console.log(allSongsAreOverTwoMinutes(exampleSongData))




/**
 * Returns `true` if any song is over four minutes. Otherwise, return `false`.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {boolean}
 */


function anySongIsOverFourMinutes(songs) {
  const anySongIsOverFourMinutes= songs.some(element=>{
return element = element.runtimeInSeconds>"240"});
return anySongIsOverFourMinutes;

}
console.log(anySongIsOverFourMinutes(exampleSongData))


/**
 * Returns `true` if any song is by the artist "Peanut". Otherwise, return `false`.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {boolean}
 */
function anySongIsByPeanut(songs) {
  const anySongIsByPeanut= songs.some(element=>{
 return element = element.artist = "Peanut"});
 return anySongIsByPeanut;
  }

console.log(anySongIsByPeanut(exampleSongData))


module.exports = {
  allSongsAreOverTwoMinutes,
  anySongIsOverFourMinutes,
  anySongIsByPeanut,
};
