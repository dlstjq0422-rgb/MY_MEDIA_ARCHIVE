
/*
 MY MEDIA ARCHIVE v264
 Trailer First Source Test Layer

 Additive only.
 Does not replace existing modal/player/archive logic.
*/

(function(){
  window.TRAILER_FIRST_TEST_V264 = {
    register:function(title, source){
      if(!window.TRAILER_SOURCE_MAPPING_V261){
        window.TRAILER_SOURCE_MAPPING_V261 = { movies:{} };
      }
      if(!window.TRAILER_SOURCE_MAPPING_V261.movies){
        window.TRAILER_SOURCE_MAPPING_V261.movies = {};
      }

      window.TRAILER_SOURCE_MAPPING_V261.movies[title] = {
        source: source,
        status: "ready"
      };

      return true;
    }
  };
})();
