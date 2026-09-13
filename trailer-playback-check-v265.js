
/*
 MY MEDIA ARCHIVE v265
 Trailer Playback Check Layer

 Additive only.
 Existing archive pages, modal and player remain untouched.
*/

(function(){
  window.TRAILER_PLAYBACK_CHECK_V265 = {
    verify:function(title){
      const mapping =
        window.TRAILER_SOURCE_MAPPING_V261 ||
        window.TRAILER_SOURCE_MAP_V261 ||
        {movies:{}};

      const item = mapping.movies && mapping.movies[title];

      return {
        title:title,
        ready:!!(item && item.source),
        source:item ? item.source : null,
        status:item && item.source ? "ready" : "missing"
      };
    }
  };
})();
