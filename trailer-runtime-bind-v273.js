
/*
 MY MEDIA ARCHIVE v273
 Trailer Runtime Bind Layer

 Additive only.
 Connects trailer source data with runtime player variables.
 Existing archive UI/modal/player code is preserved.
*/

(function(){
  window.TRAILER_RUNTIME_BIND_V273 = {

    bind:function(title){
      const movie =
        window.TRAILER_SOURCE_MAPPING_V258 &&
        window.TRAILER_SOURCE_MAPPING_V258.movies &&
        window.TRAILER_SOURCE_MAPPING_V258.movies[title];

      if(!movie || !movie.source){
        return {
          success:false,
          status:"missing_source"
        };
      }

      window.CURRENT_TRAILER_SOURCE = movie.source;
      window.CURRENT_TRAILER_TITLE = title;

      return {
        success:true,
        status:"bound",
        title:title,
        source:movie.source
      };
    }

  };
})();
