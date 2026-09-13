/* v459 refresh/category stability patch
 * Disabled category reset behavior.
 * Refresh state is handled by the existing LIVE TRAILER refresh handler.
 */
(function(){
  // Intentionally no refresh override.
  // Previous behavior forced buttons[0].click(), resetting category to ALL/KR_MOVIE.
})();
