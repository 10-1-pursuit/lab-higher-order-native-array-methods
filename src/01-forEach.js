const songs = [
  {
    title: "Berlin Tsukin",
    album: "Bi-To Te-Pu",
    artist: "Taiyo Ky",
    runtimeInSeconds: 193,
  },
  {
    title: "Up",
    album: "Bluewerks Vol. 1: Up Down Left Right",
    artist: "Sebastian Kamae",
    runtimeInSeconds: 120,
  },
  {
    title: "Daylight",
    album: "Bluewerks Vol. 1: Up Down Left Right",
    artist: "hiyasu",
    runtimeInSeconds: 154,
  },
  {
    title: "Dormancy",
    album: "Dormancy",
    artist: "Arcade Portal",
    runtimeInSeconds: 126,
  },
  {
    title: "Pineapple Jam",
    album: "Bluewerks Vol. 1: Up Down Left Right",
    artist: "Saib",
    runtimeInSeconds: 186,
  },
  {
    title: "Samui Sunrise",
    album: "Samui Sunrise",
    artist: "Saib",
    runtimeInSeconds: 204,
  },
  {
    title: "Regular Guy",
    album: "Regular Guy",
    artist: "Peanut",
    runtimeInSeconds: 215,
  },
  {
    title: "In the Middle of Nowhere",
    album: "It's OK",
    artist: "Soulaced",
    runtimeInSeconds: 123,
  },
  {
    title: "Pink Elephants",
    album: "Waterfalls",
    artist: "Timestreet",
    runtimeInSeconds: 171,
  },
  {
    title: "Kyona",
    album: "Kyona",
    artist: "Two Sleepy",
    runtimeInSeconds: 188,
  },
];

module.exports = songs;
//console.log(songs.title)





/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleSongData` variable below to gain access to tickets data. This data is pulled from the `data/songs.js` file.

  You may use this data to test your functions. You may assume the shape of the data remains the same but that the values may change.

  Keep in mind that your functions must still have and use a parameter for accepting all songs.
*/
const exampleSongData = require("../data/songs");
// Do not change the line above.

/**
 * Logs out all of the song titles.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 */

const printAllSongTitles = songs.forEach((songs)=>{console.log(songs.title)})
// function printAllSongTitles(songs) {
//   songs.forEach(songs){
//     console.log(songs.title)
    
//   }
// }

// printAllSongTitles()





/**
 * Logs out the song title and song artist.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 *
 * EXAMPLE:
 *  printSongDetails(songs);
 *  //> "Berlin Tsukin by Taiyo Ky"
 *  //> "Up by Sebastian Kamae"
 *  //> ...
 */
//function printSongDetails(songs) {}
const printSongDetails = songs.forEach((songs)=>{console.log(songs.title+" by "+songs.artist)})

/**
 * Logs out all of the song titles which have a runtime over three minutes.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 */
//function printSongTitlesOverThreeMinutes(songs) {}
const printSongTitlesOverThreeMinutes = songs.forEach((songs)=>{if (songs.runtimeInSeconds>180)(console.log(songs.title))})

module.exports = {
 printAllSongTitles,
  printSongDetails,
  printSongTitlesOverThreeMinutes,
};
