
/*
 MY MEDIA ARCHIVE v279
 Trailer Source Data

 Additive only.
 Stores actual trailer embed sources.
 Existing archive UI/modal/player untouched.
*/

(function(){

  window.TRAILER_SOURCE_DATA_V279 = {
    movies: {
      // Example format:
      // "Movie Title": "https://www.youtube.com/embed/VIDEO_ID?autoplay=1"
    }
  };

  window.TRAILER_SOURCE_DATA_V279.add = function(title, embedUrl){

    this.movies[title] = embedUrl;

    window.TRAILER_SOURCE_LOADER_V278 &&
      window.TRAILER_SOURCE_LOADER_V278.register(
        title,
        embedUrl
      );
  };

})();
