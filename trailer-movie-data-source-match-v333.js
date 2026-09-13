
/*
 MY MEDIA ARCHIVE v333
 Trailer Movie Data Source Match

 Trailer-only update.
 Existing archive UI/layout/modal/player preserved.
*/

(function(){

  window.TRAILER_MOVIE_DATA_SOURCE_MATCH_V333 = {

    normalize:function(title){
      return String(title || "")
        .toLowerCase()
        .replace(/\s+/g," ")
        .trim();
    },

    findSource:function(title){

      const movies =
        window.TRAILER_SOURCE_MAPPING_V258 &&
        window.TRAILER_SOURCE_MAPPING_V258.movies;

      if(!movies){
        return null;
      }

      const target = this.normalize(title);

      for(const key in movies){
        if(this.normalize(key) === target && movies[key].source){
          return movies[key].source;
        }
      }

      return null;
    },

    play:function(title){

      const source = this.findSource(title);

      if(!source){
        return false;
      }

      window.CURRENT_TRAILER_TITLE = title;
      window.CURRENT_TRAILER_SOURCE = source;

      const player =
        document.querySelector("#trailer-player") ||
        document.querySelector("#trailerPlayer") ||
        document.querySelector(".trailer-player iframe");

      if(player){
        player.src = source;
      }

      return true;
    }

  };

})();
