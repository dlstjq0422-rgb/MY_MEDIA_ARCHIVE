
/*
 MY MEDIA ARCHIVE v298
 Trailer Movie Source Link

 Trailer-only update.
 Keeps existing archive UI/player/modal unchanged.
*/

(function(){

  window.TRAILER_MOVIE_SOURCE_LINK_V298 = {

    register:function(title, source){

      window.TRAILER_SOURCE_MAPPING_V258 =
        window.TRAILER_SOURCE_MAPPING_V258 || { movies:{} };

      window.TRAILER_SOURCE_MAPPING_V258.movies[title] = {
        source: source,
        status: "ready"
      };

      return true;
    },

    get:function(title){

      const item =
        window.TRAILER_SOURCE_MAPPING_V258 &&
        window.TRAILER_SOURCE_MAPPING_V258.movies &&
        window.TRAILER_SOURCE_MAPPING_V258.movies[title];

      return item ? item.source : null;
    }

  };

})();
