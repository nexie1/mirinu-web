/*
  Préchargement de l'app Mirinu (https://app.mirinu.ch/), sans que la personne ait demandé
  de l'ouvrir. Un seul fichier, deux usages :

  1. Chargé par les pages d'accueil de mirinu.ch (<script src="https://app.mirinu.ch/prefetch.js"
     async>). Après 2 s passées sur la page, le navigateur demande en basse priorité les fichiers
     de démarrage de l'app. mirinu.ch et app.mirinu.ch sont du même site : leur cache HTTP est
     partagé, et quand la personne ouvre l'app, ces fichiers sont déjà là (banc, 4G : première
     image 7,6 -> 3,3 s après 20 s sur mirinu.ch).
  2. Chargé par l'app web elle-même quand elle apprend qu'une version plus récente est en ligne
     (lib/features/version/version_prefetch_web.dart) : la prochaine ouverture, ou le bouton
     « Mettre à jour », trouve la nouvelle version en cache. Après 10 s.

  La marque de la version en ligne (MARQUE, plus bas) est posée par tool/web_install.sh à CHAQUE
  publication, avec le fichier : sans cela le préchargement demanderait des fichiers d'une
  autre version. Le serveur le sert « no-cache » : il désigne toujours la version en ligne.

  Ce qu'il ne fait jamais : rien si l'économiseur de données est actif
  (navigator.connection.saveData), rien sur une connexion 2g ou slow-2g, rien tant que la
  personne n'est pas restée à l'écran, une seule fois par chargement de page, aucun cookie ni
  stockage, aucune donnée envoyée (des GET de fichiers publics, sans paramètre propre à la
  personne). Les morceaux différés de l'app ne sont pas demandés : seulement ce que le premier
  écran exige (le script de l'app, CanvasKit, le script de démarrage, les polices).

  La variante de CanvasKit : les mêmes tests que le chargeur de Flutter (flutter.js) et que le
  petit script de web/index.html (test/prefetch_web_test.dart les compare).
*/
(function () {
  var MARQUE = '0.72.1-f0ed2de';
  var DELAI_SITE = 2000;
  var DELAI_APP = 10000;
  // {M} : la marque ; {C} : le dossier de CanvasKit (chromium ou non). Les plus gros d'abord.
  var FICHIERS = [
    'v/{M}/main.dart.js',
    '{C}canvaskit.wasm',
    '{C}canvaskit.js',
    'flutter_bootstrap.js?v={M}',
    'fonts/Inter-Regular.woff2',
    'fonts/BricolageGrotesque-Bold.woff2',
    'fonts/Roboto-Regular.woff2',
    'v/{M}/assets/fonts/MaterialIcons-Regular.otf'
  ];
  var w = window;
  var d = document;
  // Pas de marque posée (fichier de web/ servi tel quel en développement) ou déjà lancé.
  if (MARQUE.charAt(0) === '_' || w.mirinuPrefetch) return;
  w.mirinuPrefetch = 1;
  try {
    var script = d.currentScript;
    var base = new URL('.', script && script.src ? script.src : 'https://app.mirinu.ch/prefetch.js').href;
    var c = navigator.connection;
    var econome = function () {
      return !!c && (c.saveData || /^(slow-)?2g$/.test(c.effectiveType || ''));
    };
    if (econome()) return;
    if (!d.createElement('link').relList.supports('prefetch')) return;
    var dansLApp = base === w.location.origin + '/';
    // L'app qui tourne est déjà cette version : rien à préparer.
    if (dansLApp && d.querySelector('script[src="flutter_bootstrap.js?v=' + MARQUE + '"]')) return;

    var lancer = function () {
      if (econome()) return;
      var chromium =
        typeof ImageDecoder !== 'undefined' &&
        (navigator.vendor === 'Google Inc.' || navigator.userAgent.indexOf('Edg/') >= 0) &&
        typeof Intl.v8BreakIterator !== 'undefined' &&
        typeof Intl.Segmenter !== 'undefined';
      var dossier = chromium ? 'canvaskit/chromium/' : 'canvaskit/';
      for (var i = 0; i < FICHIERS.length; i++) {
        var l = d.createElement('link');
        l.rel = 'prefetch';
        l.href = base + FICHIERS[i].replace(/\{M\}/g, MARQUE).replace('{C}', dossier);
        d.head.appendChild(l);
      }
    };
    setTimeout(function () {
      if (d.visibilityState !== 'hidden') return lancer();
      // Onglet en arrière-plan : on attend que la personne y revienne.
      var revenu = function () {
        if (d.visibilityState === 'hidden') return;
        d.removeEventListener('visibilitychange', revenu);
        lancer();
      };
      d.addEventListener('visibilitychange', revenu);
    }, dansLApp ? DELAI_APP : DELAI_SITE);
  } catch (e) {
    // Un préchargement qui échoue ne doit jamais se voir.
  }
})();
