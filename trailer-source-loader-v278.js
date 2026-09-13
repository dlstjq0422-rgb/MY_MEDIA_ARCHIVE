
/*
 MY MEDIA ARCHIVE v278
 Trailer Source Loader

 Additive only.
 Real trailer URL registry.
 Existing archive UI/modal/player untouched.

 Add actual movie trailer sources here.
 Source format:
 https://www.youtube.com/embed/VIDEO_ID?autoplay=1
*/

window.TRAILER_SOURCE_LOADER_V278 = {
  movies: {}
};

window.TRAILER_SOURCE_LOADER_V278.register = function(title, embedUrl){
  this.movies[title] = {
    source: embedUrl,
    status: "ready"
  };

  window.TRAILER_SOURCE_MAPPING_V258 =
    window.TRAILER_SOURCE_MAPPING_V258 || { movies:{} };

  window.TRAILER_SOURCE_MAPPING_V258.movies[title] = {
    source: embedUrl,
    status: "ready"
  };
};
