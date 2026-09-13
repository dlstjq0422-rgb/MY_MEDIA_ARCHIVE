
/*
 MY MEDIA ARCHIVE v283
 Trailer Button To Player Final

 Direct connection helper.
 Keeps existing modal/player flow.
*/

(function(){

  function connect(title){

    const movie =
      window.TRAILER_SOURCE_MAPPING_V258 &&
      window.TRAILER_SOURCE_MAPPING_V258.movies &&
      window.TRAILER_SOURCE_MAPPING_V258.movies[title];

    if(!movie || !movie.source){
      return false;
    }

    window.CURRENT_TRAILER_SOURCE = movie.source;
    window.CURRENT_TRAILER_TITLE = title;

    const iframe =
      document.querySelector("#trailer-player") ||
      document.querySelector("#trailerPlayer") ||
      document.querySelector(".trailer-player iframe");

    if(iframe){
      iframe.src = movie.source;
    }

    return true;
  }

  window.connectArchiveTrailerV283 = connect;

})();
