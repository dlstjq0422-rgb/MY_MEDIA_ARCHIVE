
/*
 MY MEDIA ARCHIVE v304
 Trailer Source Library

 Trailer-only update.
 Existing archive UI/layout/modal/player preserved.
*/

(function(){

  window.TRAILER_SOURCE_LIBRARY_V304 = {

    movies: {},

    add:function(title, source){

      this.movies[title] = {
        source: source,
        status: "ready"
      };

      window.TRAILER_SOURCE_MAPPING_V258 =
        window.TRAILER_SOURCE_MAPPING_V258 || {movies:{}};

      window.TRAILER_SOURCE_MAPPING_V258.movies[title] =
        this.movies[title];

    },

    find:function(title){
      return this.movies[title] || null;
    }

  };

})();
