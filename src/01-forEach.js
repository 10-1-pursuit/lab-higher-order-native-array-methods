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
 * ARRAY - "songs" loop title
 */
function printAllSongTitles(songs) {
    const songtitle = songs.forEach (
    (eachtitle) => {console.log(eachtitle.title)
  })
}
  // console.log(songtitle)
  // songs.title.forEach()
/*
const eachKingValue = arrayOfKings.forEach(

    (eachKing) => {
        // do somthing : put at check name to each king
        console.log(`🗡️ ${eachKing.name}`)
    }

 )
*/

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
function printSongDetails(songs) {

  const songDetails = songs.forEach((songDetails) => {
    console.log(`${songDetails.title} by ${songDetails.artist}`);
    
  })
}
//      const artistOfSong= songs.forEach (
//     (eachArtist) => {console.log(eachArtist.artist)
//       const songtitle = songs.forEach ( 
//     (eachtitle) => {console.log(eachtitle.title)
//   }
//   )
// }
// )
// }

/**
 * Logs out all of the song titles which have a runtime over three minutes.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 */
function printSongTitlesOverThreeMinutes(songs) {

  const avariableThatwillNeverBeUsed = songs.forEach((runTimeOver) => {
    if(runTimeOver.runtimeInSeconds > 180 ) {
      console.log(runTimeOver.title);
    }
  })
}  // const nonCalledVar= runtimeInSeconds


module.exports = {
  printAllSongTitles,
  printSongDetails,
  printSongTitlesOverThreeMinutes,
};
