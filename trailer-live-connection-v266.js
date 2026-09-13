
/*
 MY MEDIA ARCHIVE v266
 Trailer Live Connection Layer

 ADDITIVE ONLY.
 Existing archive UI/modal/player logic is preserved.
*/

(function(){
  window.TRAILER_LIVE_V266 = {
    registerSource:function(title, source){
      window.TRAILER_SOURCE_MAPPING_V258 =
        window.TRAILER_SOURCE_MAPPING_V258 || { movies:{} };

      window.TRAILER_SOURCE_MAPPING_V258.movies =
        window.TRAILER_SOURCE_MAPPING_V258.movies || {};

      window.TRAILER_SOURCE_MAPPING_V258.movies[title] = {
        source: source,
        status: "ready"
      };
    },

    getSource:function(title){
      const data =
        window.TRAILER_SOURCE_MAPPING_V258 &&
        window.TRAILER_SOURCE_MAPPING_V258.movies &&
        window.TRAILER_SOURCE_MAPPING_V258.movies[title];

      return data ? data.source : null;
    }
  };
})();
