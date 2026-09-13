
/*
 MY MEDIA ARCHIVE v293
 Trailer Data Expansion

 Trailer data expansion only.
 Existing archive UI/player/modal untouched.
*/

(function(){

  window.TRAILER_DATA_EXPANSION_V293 = {
    movies: []
  };

  window.TRAILER_DATA_EXPANSION_V293.add = function(title, source){

    const movie = {
      title:title,
      source:source,
      status:"ready"
    };

    this.movies.push(movie);

    window.TRAILER_SOURCE_MAPPING_V258 =
      window.TRAILER_SOURCE_MAPPING_V258 || {movies:{}};

    window.TRAILER_SOURCE_MAPPING_V258.movies[title] = movie;
  };

})();
