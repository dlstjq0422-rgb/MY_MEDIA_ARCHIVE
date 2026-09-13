
/*
 MY MEDIA ARCHIVE v285
 Trailer Movie Source Batch 2

 Real trailer source data expansion.
 Existing archive UI/player/modal untouched.
*/

(function(){

  const additionalSources = [
    /*
    {
      title: "Movie Title",
      source: "https://www.youtube.com/embed/VIDEO_ID?autoplay=1",
      status: "ready"
    }
    */
  ];

  window.TRAILER_SOURCE_MAPPING_V258 =
    window.TRAILER_SOURCE_MAPPING_V258 || { movies:{} };

  additionalSources.forEach(function(movie){
    window.TRAILER_SOURCE_MAPPING_V258.movies[movie.title] = movie;
  });

})();
