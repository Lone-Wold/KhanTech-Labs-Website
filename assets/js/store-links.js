/*
 * Shows an app-store button only when its URL is set in site-config.js.
 * With no URLs (or without JavaScript) nothing is shown and no space is used.
 */
(function () {
  var config = window.KHANTECH_CONFIG || {};
  var allowedHosts = {
    'google-play': ['play.google.com'],
    'app-store': ['apps.apple.com', 'itunes.apple.com']
  };
  var keys = { 'google-play': 'GOOGLE_PLAY_URL', 'app-store': 'APPLE_APP_STORE_URL' };

  function validUrl(store) {
    var value = (config[keys[store]] || '').trim();
    if (!value) return null;
    try {
      var url = new URL(value);
      if (url.protocol === 'https:' && allowedHosts[store].indexOf(url.hostname) !== -1) return url.href;
    } catch (e) { /* not a valid URL: ignore */ }
    return null;
  }

  var wrapper = document.querySelector('[data-store-links]');
  if (!wrapper) return;

  var shown = 0;
  Array.prototype.forEach.call(wrapper.querySelectorAll('[data-store]'), function (link) {
    var href = validUrl(link.getAttribute('data-store'));
    if (!href) return;
    link.href = href;
    link.hidden = false;
    shown += 1;
  });
  if (shown) wrapper.hidden = false;
})();
