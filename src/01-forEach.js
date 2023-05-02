


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
//const printAllSongTitles = exampleSongDatas.forEach((songs)=>{console.log([songs.title])})
console.log("===================first function")

function printAllSongTitles(songs){     
  
  const printAllSongTitles = songs.forEach((songs)=>{console.log(songs.title)})
      }
  printAllSongTitles(exampleSongData)
  


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

//const printSongDetails = exampleSongData.forEach((songs)=>{console.log(songs.title+" by "+songs.artist)})
console.log("========================SECOND FUNCTION")
function printSongDetails(songs) {

const printSongDetails = songs.forEach((songs)=>{console.log(songs.title+" by "+songs.artist)})
        }
        printSongDetails(exampleSongData)

/**
 * Logs out all of the song titles which have a runtime over three minutes.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 */
console.log("=========================3rd FUNCTION")

//const printSongTitlesOverThreeMinutes = exampleSongData.forEach((songs)=>{if (songs.runtimeInSeconds>180)(console.log(songs.title))})


//console.log("============================3rdFunctionClone")

function printSongTitlesOverThreeMinutes(songs) {
const printSongTitlesOverThreeMinutes = songs.forEach((songs)=>{if (songs.runtimeInSeconds>180)(console.log(songs.title))})
}
printSongTitlesOverThreeMinutes(exampleSongData)
module.exports = {
 printAllSongTitles,
  printSongDetails,
  printSongTitlesOverThreeMinutes,
};

