
/*
 MY MEDIA ARCHIVE v281
 Trailer Source Batch 1

 Real trailer data only.
 Existing archive UI/player/modal untouched.
*/

(function(){

  const sources = [
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
    window.TRAILER_SOURCE_MAPPING_V258 || {movies:{}};

  sources.forEach(function(movie){
    window.TRAILER_SOURCE_MAPPING_V258.movies[movie.title] = movie;
  });

})();
