
/*
 MY MEDIA ARCHIVE v268
 Trailer Button Binding Layer

 Additive only.
 Connects existing trailer buttons to existing source mapping.
 Does not replace modal/player logic.
*/

(function(){
  function getSource(title){
    const map = window.TRAILER_SOURCE_MAPPING_V258;
    return map && map.movies && map.movies[title]
      ? map.movies[title].source
      : null;
  }

  window.TRAILER_BUTTON_BIND_V268 = {
    bind:function(button, title){
      const source = getSource(title);

      if(!source) return false;

      button.dataset.trailerSource = source;
      return true;
    }
  };
})();
