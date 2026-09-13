
/*
 MY MEDIA ARCHIVE v263
 Trailer Source Verify Layer

 Additive only.
 Existing archive pages, UI and player logic remain untouched.
*/

(function(){
  window.TRAILER_VERIFY_V263 = {
    check:function(title){
      const map = window.TRAILER_SOURCE_MAPPING_V258 || window.TRAILER_SOURCE_MAP_V261 || {};
      const movie = map.movies?.[title];

      return {
        title:title,
        ready:!!(movie && movie.source),
        source:movie?.source || null
      };
    }
  };
})();
