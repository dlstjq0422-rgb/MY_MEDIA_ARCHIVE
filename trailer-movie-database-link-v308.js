
/*
 MY MEDIA ARCHIVE v308
 Trailer Movie Database Link

 Trailer-only update.
 Existing archive UI/layout/modal/player preserved.
*/

(function(){

  window.TRAILER_MOVIE_DATABASE_LINK_V308 = {

    movies:{},

    register:function(title, source){

      this.movies[title] = {
        source: source,
        status: "ready"
      };

      window.TRAILER_SOURCE_MAPPING_V258 =
        window.TRAILER_SOURCE_MAPPING_V258 || {movies:{}};

      window.TRAILER_SOURCE_MAPPING_V258.movies[title] = this.movies[title];
    },

    resolve:function(title){
      return this.movies[title] || null;
    }

  };

})();
