
/*
 MY MEDIA ARCHIVE v290
 Trailer Movie Matching

 Trailer-only update.
 Matches movie titles with trailer sources.
 Existing archive UI/player/modal untouched.
*/

(function(){

  window.TRAILER_MOVIE_MATCHING_V290 = {

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

      if(!movies) return null;

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
