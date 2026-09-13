
/*
 MY MEDIA ARCHIVE v262
 Trailer Source Test Layer

 Additive only. Existing archive/trailer files remain untouched.
*/
window.TRAILER_TEST_V262 = {
  check: function(title){
    const map = window.TRAILER_SOURCE_MAPPING_V261;
    return !!(map && map.movies && map.movies[title] && map.movies[title].source);
  }
};
