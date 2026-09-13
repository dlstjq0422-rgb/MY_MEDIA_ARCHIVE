
/*
 MY MEDIA ARCHIVE v299
 Trailer Source Batch Expand

 Trailer-only update.
 Existing archive UI/layout/modal/player preserved.
*/

(function(){

  window.TRAILER_SOURCE_BATCH_EXPAND_V299 = {
    movies: []
  };

  window.TRAILER_SOURCE_BATCH_EXPAND_V299.add = function(title, source){

    const item = {
      title: title,
      source: source,
      status: "ready"
    };

    this.movies.push(item);

    window.TRAILER_SOURCE_MAPPING_V258 =
      window.TRAILER_SOURCE_MAPPING_V258 || {movies:{}};

    window.TRAILER_SOURCE_MAPPING_V258.movies[title] = item;
  };

})();
