
/*
 MY MEDIA ARCHIVE v277
 Trailer Real Connect

 Additive only.
 Real trailer source -> existing trailer player flow.
 Existing archive UI/modal/player structure preserved.
*/

(function(){

  window.TRAILER_REAL_CONNECT_V277 = {

    movies:{
      "Avatar: Fire and Ash":{
        source:"",
        status:"ready"
      },
      "Mission: Impossible":{
        source:"",
        status:"ready"
      }
    },

    connect:function(title){

      const movie = this.movies[title];

      if(!movie || !movie.source){
        return false;
      }

      window.CURRENT_TRAILER_SOURCE = movie.source;
      window.CURRENT_TRAILER_TITLE = title;

      if(typeof window.openTrailerPlayer === "function"){
        window.openTrailerPlayer(movie.source, title);
      }

      return true;
    }

  };

})();
