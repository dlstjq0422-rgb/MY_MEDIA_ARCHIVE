
/*
 MY MEDIA ARCHIVE v329
 Trailer Movie Match Final

 Trailer-only update.
 Existing archive UI/layout/modal/player preserved.
*/

(function(){

  window.TRAILER_MOVIE_MATCH_FINAL_V329 = {

    normalize:function(title){
      return String(title || "")
        .toLowerCase()
        .replace(/\s+/g," ")
        .trim();
    },

    find:function(title){

      const movies =
        window.TRAILER_SOURCE_MAPPING_V258 &&
        window.TRAILER_SOURCE_MAPPING_V258.movies;

      if(!movies){
        return null;
      }

      const target = this.normalize(title);

      for(const key in movies){
        if(this.normalize(key) === target){
          return movies[key];
        }
      }

      return null;
    }

  };

})();
