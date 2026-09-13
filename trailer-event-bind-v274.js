
/*
 MY MEDIA ARCHIVE v274
 Trailer Event Bind Layer

 Additive only.
 Attaches trailer source flow to existing button events.
 Existing archive UI/modal/player remain unchanged.
*/

(function(){
  window.TRAILER_EVENT_BIND_V274 = {

    handle:function(title){
      const result =
        window.TRAILER_RUNTIME_BIND_V273 &&
        window.TRAILER_RUNTIME_BIND_V273.bind
          ? window.TRAILER_RUNTIME_BIND_V273.bind(title)
          : null;

      if(!result || !result.success){
        return false;
      }

      // Existing player/modal handlers can consume these values.
      window.CURRENT_TRAILER_SOURCE = result.source;
      window.CURRENT_TRAILER_TITLE = result.title;

      return true;
    }

  };
})();
