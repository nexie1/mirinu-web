// Le zoom du navigateur sur la version web de Mirinu : Ctrl + molette,
// pincement du pavé tactile, Ctrl + plus / moins / 0.
//
// Le moteur web de Flutter (3.44, pointer_binding.dart) écoute la molette
// sur l'élément flutter-view. Avec Ctrl, il en fait un geste de zoom de
// l'app (PointerSignalKind.scale) et appelle preventDefault : le
// navigateur ne zoome plus. Chrome envoie aussi le pincement du pavé
// tactile comme une molette avec Ctrl. Le clavier passe par un écouteur
// en capture sur window ; il bloque Ctrl + « + » quand l'app se sert de
// « + » (ajout depuis une affiche d'Explorer).
//
// Ces écouteurs, en capture sur window et posés avant le démarrage de
// Flutter, arrêtent ces événements-là avant l'app, sans preventDefault :
// le navigateur fait son zoom. La molette sans Ctrl, le défilement
// horizontal (Maj + molette) et les autres raccourcis vont à l'app comme
// avant. Fichier à part : la politique de sécurité de index.html refuse
// les scripts écrits dans la page.
(function () {
  'use strict';

  window.addEventListener(
    'wheel',
    function (event) {
      if (event.ctrlKey) event.stopPropagation();
    },
    { capture: true, passive: true },
  );

  // Les touches du zoom, d'après le caractère (claviers suisse, français,
  // anglais) et d'après la touche (pavé numérique).
  var keys = ['+', '=', '-', '_', '0'];
  var codes = ['Equal', 'Minus', 'Digit0', 'NumpadAdd', 'NumpadSubtract', 'Numpad0'];

  function isZoomShortcut(event) {
    if (!(event.ctrlKey || event.metaKey) || event.altKey) return false;
    return keys.indexOf(event.key) >= 0 || codes.indexOf(event.code) >= 0;
  }

  // Le relâchement aussi : l'app ne voit ni l'appui ni le relâchement de
  // la touche, son état du clavier reste juste.
  function stopForZoom(event) {
    if (isZoomShortcut(event)) event.stopImmediatePropagation();
  }

  window.addEventListener('keydown', stopForZoom, true);
  window.addEventListener('keyup', stopForZoom, true);
})();
