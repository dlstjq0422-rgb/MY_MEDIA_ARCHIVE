
/*
 MY MEDIA ARCHIVE v292
 Trailer Real Data Batch

 Trailer data only.
 Existing archive UI/player/modal untouched.
*/

(function(){

  const trailerData = [
    {
      title: "Avatar: Fire and Ash",
      source: "https://www.youtube.com/embed/nb_fFj_0rq8?autoplay=1",
      status: "ready"
    },
    {
      title: "Mission: Impossible",
      source: "https://www.youtube.com/embed/kLzsazwBanE?autoplay=1",
      status: "ready"
    }
  ];

  window.TRAILER_SOURCE_MAPPING_V258 =
    window.TRAILER_SOURCE_MAPPING_V258 || { movies:{} };

  trailerData.forEach(function(item){
    window.TRAILER_SOURCE_MAPPING_V258.movies[item.title] = item;
  });

  window.TRAILER_REAL_DATA_BATCH_V292 = trailerData;

})();
