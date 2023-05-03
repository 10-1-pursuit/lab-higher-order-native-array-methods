/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleSongData` variable below to gain access to tickets data. This data is pulled from the `data/songs.js` file.

  You may use this data to test your functions. You may assume the shape of the data remains the same but that the values may change.

  Keep in mind that your functions must still have and use a parameter for accepting all songs.
*/
const exampleSongData = require("../data/songs");
// Do not change the line above.

/**
 * Reorders the array so that the song objects are organized by their runtime. The shortest song should come first.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {Object[]}
 */
// function anySongIsOverFourMinutes(songs) {
//   const anySongIsOverFourMinutes= songs.some(element=>{
// return element = element.runtimeInSeconds>"240"});
// return anySongIsOverFourMinutes;

// }
// console.log(anySongIsOverFourMinutes(exampleSongData))

 
function sortByRuntimeAscending(songs){
  const myComparisonFunction = (a,b) => {
    return element =a.runtimeInSeconds-b.runtimeInSeconds
  };

    return songs.sort(myComparisonFunction)
}
console.log(sortByRuntimeAscending(exampleSongData))



/**
 * Reorders the array so that the song objects are organized by their artist name. The artist that comes last in the alphabet should come first.
 *
 * TIP: "A" and "a" sort differently. To avoid this issue, you may want to use `.toLowerCase()` or `.toUpperCase()`.
 *
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {Object[]}
 */
function sortByArtistNameDescending(songs) {
 const myCompFunction =(a,b) => {
  return element= b.artist.toLowerCase() -a.artist.toLowerCase()
 };
 return songs.sort(myCompFunction)

}
sortByArtistNameDescending(exampleSongData)



/**
 * Reorders the array so that the song objects are organized by their song title. The title that comes first in the alphabet should come first.
 *
 * TIP: "A" and "a" sort differently. To avoid this issue, you may want to use `.toLowerCase()` or `.toUpperCase()`.
 *
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {Object[]}
 */



function sortBySongTitleAscending(songs) {
  const myComparisonFunction =(a,b) =>{
    return element = a.title - b.title
  };
    return songs.sort(myComparisonFunction)


}
console.log(sortBySongTitleAscending(exampleSongData))

module.exports = {
  sortByRuntimeAscending,
  sortByArtistNameDescending,
  sortBySongTitleAscending,
};
