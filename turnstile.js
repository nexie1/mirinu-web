// Contrôle anti-robots de turnstile.html. Paramètres de l'adresse :
// k (clé du site, publique), theme (dark | light), lang (fr, en, de, it,
// es). Le jeton part, et seulement lui :
// - vers l'app Android, par le canal JavaScript « MirinuTurnstile » ;
// - vers la version web qui porte le cadre, par postMessage, restreint à
//   notre propre origine.
// Un jeton vide veut dire « expiré ou échoué » : l'app attend le suivant.
(function () {
  'use strict';
  var q = new URLSearchParams(window.location.search);
  var key = q.get('k') || '';
  var langs = ['fr', 'en', 'de', 'it', 'es'];
  var lang = langs.indexOf(q.get('lang')) >= 0 ? q.get('lang') : 'fr';

  function send(token) {
    var t = typeof token === 'string' ? token : '';
    if (window.MirinuTurnstile && typeof window.MirinuTurnstile.postMessage === 'function') {
      window.MirinuTurnstile.postMessage(t);
    }
    if (window.parent && window.parent !== window) {
      window.parent.postMessage({ mirinuTurnstile: true, token: t }, window.location.origin);
    }
  }

  window.mirinuTurnstileReady = function () {
    if (!/^[0-9A-Za-z_-]{10,80}$/.test(key)) {
      send('');
      return;
    }
    window.turnstile.render('#t', {
      sitekey: key,
      action: 'email',
      theme: q.get('theme') === 'light' ? 'light' : 'dark',
      language: lang,
      size: 'flexible',
      callback: send,
      'expired-callback': function () { send(''); },
      'timeout-callback': function () { send(''); },
      'error-callback': function () { send(''); },
    });
  };
}());
