// Contrôle anti-robots de turnstile.html. Paramètres de l'adresse :
// k (clé du site, publique), theme (dark | light), lang (fr, en, de, it,
// es), v (2 : l'app gère elle-même les reprises).
//
// CONTRAT avec les apps (celles déjà installées s'en servent aussi : ne rien
// changer à ce qui suit sans en tenir compte) :
// - le jeton, et seulement lui, part vers l'app Android par le canal
//   JavaScript « MirinuTurnstile » et vers la version web qui porte le
//   cadre par postMessage({mirinuTurnstile: true, token}), restreint à notre
//   propre origine. Un jeton vide veut dire « expiré ou échoué ».
// - l'état (geste demandé, erreur…) part AILLEURS : canal
//   « MirinuTurnstileEvents » sur Android, postMessage({mirinuTurnstileEvent:
//   true, event, code}) sur le web. Une app ancienne n'a pas ce canal et
//   ignore ce message ; sur l'ancien canal, elle prendrait tout texte pour un
//   jeton.
// Le widget ne se montre que si Cloudflare demande un geste
// (appearance: interaction-only) ; l'app dessine l'attente elle-même.
(function () {
  'use strict';
  var q = new URLSearchParams(window.location.search);
  var key = q.get('k') || '';
  var langs = ['fr', 'en', 'de', 'it', 'es'];
  var lang = langs.indexOf(q.get('lang')) >= 0 ? q.get('lang') : 'fr';
  var theme = q.get('theme') === 'light' ? 'light' : 'dark';
  // v=2 : l'app relance elle-même ; sans lui (apps anciennes), Cloudflare
  // relance seul le défi échoué ou expiré, comme avant.
  var selfRetry = q.get('v') === '2';

  // Même schéma de couleurs que le cadre qui nous porte, sinon le navigateur
  // peint la page sur un fond opaque.
  document.documentElement.style.colorScheme = theme;

  function send(token) {
    var t = typeof token === 'string' ? token : '';
    if (window.MirinuTurnstile && typeof window.MirinuTurnstile.postMessage === 'function') {
      window.MirinuTurnstile.postMessage(t);
    }
    if (window.parent && window.parent !== window) {
      window.parent.postMessage({ mirinuTurnstile: true, token: t }, window.location.origin);
    }
  }

  function emit(event, code) {
    var c = typeof code === 'string' || typeof code === 'number' ? String(code).slice(0, 40) : '';
    if (window.MirinuTurnstileEvents && typeof window.MirinuTurnstileEvents.postMessage === 'function') {
      window.MirinuTurnstileEvents.postMessage(JSON.stringify({ event: event, code: c }));
    }
    if (window.parent && window.parent !== window) {
      window.parent.postMessage(
        { mirinuTurnstileEvent: true, event: event, code: c },
        window.location.origin
      );
    }
  }

  // Un échec : l'état d'abord (l'app nouvelle le lit), puis le jeton vide
  // (les apps anciennes n'ont que lui).
  function fail(event, code) {
    emit(event, code);
    send('');
  }

  // Le script de Cloudflare n'a pas pu se charger (réseau coupé, bloqué).
  window.addEventListener('error', function (e) {
    var t = e && e.target;
    if (t && t.tagName === 'SCRIPT' && !window.turnstile) fail('error', 'load');
  }, true);

  // Le contrôle fait 300 px au moins (size: flexible) : dans un cadre plus
  // étroit, on le réduit plutôt que de le couper.
  function fit() {
    var el = document.getElementById('t');
    if (!el) return;
    var w = window.innerWidth;
    if (w > 0 && w < 300) {
      el.style.width = '300px';
      el.style.transformOrigin = '0 0';
      el.style.transform = 'scale(' + (w / 300) + ')';
      document.body.style.justifyContent = 'flex-start';
    } else {
      el.style.width = '';
      el.style.transform = '';
      document.body.style.justifyContent = '';
    }
  }
  window.addEventListener('resize', fit);

  window.mirinuTurnstileReady = function () {
    fit();
    if (!/^[0-9A-Za-z_-]{10,80}$/.test(key)) {
      fail('error', 'key');
      return;
    }
    var options = {
      sitekey: key,
      action: 'email',
      theme: theme,
      language: lang,
      size: 'flexible',
      appearance: 'interaction-only',
      callback: send,
      'before-interactive-callback': function () { emit('interactive'); },
      'after-interactive-callback': function () { emit('interactive-done'); },
      'unsupported-callback': function () { fail('unsupported'); },
      'expired-callback': function () { fail('expired'); },
      'timeout-callback': function () { fail('timeout'); },
      'error-callback': function (code) { fail('error', code); },
    };
    if (selfRetry) {
      options.retry = 'never';
      options['refresh-expired'] = 'never';
      options['refresh-timeout'] = 'never';
    }
    window.turnstile.render('#t', options);
  };
}());
