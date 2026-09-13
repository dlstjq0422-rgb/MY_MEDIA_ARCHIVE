
/*
 MY MEDIA ARCHIVE v291
 Trailer Source Database

 Trailer data expansion only.
 Existing archive UI/player/modal untouched.
*/

(function(){

  window.TRAILER_SOURCE_DATABASE_V291 = {
    movies: {}
  };

  window.TRAILER_SOURCE_DATABASE_V291.add = function(title, source){
    this.movies[title] = {
      source: source,
      status: "ready"
    };

    window.TRAILER_SOURCE_MAPPING_V258 =
      window.TRAILER_SOURCE_MAPPING_V258 || { movies:{} };

    window.TRAILER_SOURCE_MAPPING_V258.movies[title] = {
      source: source,
      status: "ready"
    };
  };

})();
