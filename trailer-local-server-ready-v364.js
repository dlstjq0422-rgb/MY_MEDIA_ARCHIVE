
/*
 MY MEDIA ARCHIVE v364
 Trailer Local Server Ready

 Purpose:
 - detect file:// execution
 - explain correct launch mode
 - keep existing trailer UI untouched
*/

(function(){
  if(location.protocol === "file:"){
    console.warn(
      "Trailer playback requires localhost. Run START_TRAILER_SERVER.bat"
    );
  }
})();
