
/*
 MY MEDIA ARCHIVE v271
 Trailer Click Connect Layer

 Additive only.
 Connects existing trailer selection flow to registered sources.
 Existing modal/player/UI remain untouched.
*/

(function(){
  window.TRAILER_CLICK_CONNECT_V271 = {

    open:function(title){
      const data =
        window.TRAILER_SOURCE_MAPPING_V258 &&
        window.TRAILER_SOURCE_MAPPING_V258.movies &&
        window.TRAILER_SOURCE_MAPPING_V258.movies[title];

      if(!data || !data.source){
        return {
          success:false,
          reason:"source_missing"
        };
      }

      window.CURRENT_TRAILER_SOURCE = data.source;
      window.CURRENT_TRAILER_TITLE = title;

      return {
        success:true,
        title:title,
        source:data.source
      };
    }

  };
})();
