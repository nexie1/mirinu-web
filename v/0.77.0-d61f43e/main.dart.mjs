// Compiles a dart2wasm-generated main module from `source` which can then
// instantiatable via the `instantiate` method.
//
// `source` needs to be a `Response` object (or promise thereof) e.g. created
// via the `fetch()` JS API.
export async function compileStreaming(source) {
  const builtins = {builtins: ['js-string']};
  return new CompiledApp(
      await WebAssembly.compileStreaming(source, builtins), builtins);
}

// Compiles a dart2wasm-generated wasm modules from `bytes` which is then
// instantiatable via the `instantiate` method.
export async function compile(bytes) {
  const builtins = {builtins: ['js-string']};
  return new CompiledApp(await WebAssembly.compile(bytes, builtins), builtins);
}

// DEPRECATED: Please use `compile` or `compileStreaming` to get a compiled app,
// use `instantiate` method to get an instantiated app and then call
// `invokeMain` to invoke the main function.
export async function instantiate(modulePromise, importObjectPromise) {
  var moduleOrCompiledApp = await modulePromise;
  if (!(moduleOrCompiledApp instanceof CompiledApp)) {
    moduleOrCompiledApp = new CompiledApp(moduleOrCompiledApp);
  }
  const instantiatedApp = await moduleOrCompiledApp.instantiate(await importObjectPromise);
  return instantiatedApp.instantiatedModule;
}

// DEPRECATED: Please use `compile` or `compileStreaming` to get a compiled app,
// use `instantiate` method to get an instantiated app and then call
// `invokeMain` to invoke the main function.
export const invoke = (moduleInstance, ...args) => {
  moduleInstance.exports.$invokeMain(args);
}

class CompiledApp {
  constructor(module, builtins) {
    this.module = module;
    this.builtins = builtins;
  }

  // The second argument is an options object containing:
  // `loadDeferredModules` is a JS function that takes an array of module names
  //   matching wasm files produced by the dart2wasm compiler. It also takes a
  //   callback that should be invoked for each loaded module with 2 arugments:
  //   (1) the module name, (2) the loaded module in a format supported by
  //   `WebAssembly.compile` or `WebAssembly.compileStreaming`. The callback
  //   returns a Promise that resolves when the module is instantiated.
  //   loadDeferredModules should return a Promise that resolves when all the
  //   modules have been loaded and the callback promises have resolved.
  // `loadDeferredId` is a JS function that takes load ID produced by the
  //   compiler when the `load-ids` option is passed. Each load ID maps to one
  //   or more wasm files as specified in the emitted JSON file. It also takes a
  //   callback that should be invoked for each loaded module with 2 arugments:
  //   (1) the module name, (2) the loaded module in a format supported by
  //   `WebAssembly.compile` or `WebAssembly.compileStreaming`. The callback
  //   returns a Promise that resolves when the module is instantiated.
  //   loadDeferredModules should return a Promise that resolves when all the
  //   modules have been loaded and the callback promises have resolved.
  // `loadDynamicModule` is a JS function that takes two string names matching,
  //   in order, a wasm file produced by the dart2wasm compiler during dynamic
  //   module compilation and a corresponding js file produced by the same
  //   compilation. It also takes a callback that should be invoked with the
  //   loaded module in a format supported by `WebAssembly.compile` or
  //   `WebAssembly.compileStreaming` and the result of using the JS 'import'
  //   API on the js file path. It should return a Promise that resolves when
  //   all the modules have been loaded and the callback promises have resolved.
  async instantiate(additionalImports,
      {loadDeferredModules, loadDynamicModule, loadDeferredId} = {}) {
    let dartInstance;

    // Prints to the console
    function printToConsole(value) {
      if (typeof dartPrint == "function") {
        dartPrint(value);
        return;
      }
      if (typeof console == "object" && typeof console.log != "undefined") {
        console.log(value);
        return;
      }
      if (typeof print == "function") {
        print(value);
        return;
      }

      throw "Unable to print message: " + value;
    }

    // A special symbol attached to functions that wrap Dart functions.
    const jsWrappedDartFunctionSymbol = Symbol("JSWrappedDartFunction");

    function finalizeWrapper(dartFunction, wrapped) {
      wrapped.dartFunction = dartFunction;
      wrapped[jsWrappedDartFunctionSymbol] = true;
      return wrapped;
    }

    // Imports
    const dart2wasm = {
            _1: (decoder, codeUnits) => decoder.decode(codeUnits),
      _2: () => new TextDecoder("utf-8", {fatal: true}),
      _3: () => new TextDecoder("utf-8", {fatal: false}),
      _4: (s) => +s,
      _5: x0 => new Uint8Array(x0),
      _6: (x0,x1,x2) => x0.set(x1,x2),
      _7: (x0,x1) => x0.transferFromImageBitmap(x1),
      _8: x0 => x0.arrayBuffer(),
      _9: (x0,x1,x2) => x0.slice(x1,x2),
      _10: (x0,x1) => x0.decode(x1),
      _11: (x0,x1) => x0.segment(x1),
      _12: () => new TextDecoder(),
      _13: (x0,x1) => x0.get(x1),
      _14: x0 => x0.buffer,
      _15: x0 => x0.wasmMemory,
      _16: () => globalThis.window._flutter_skwasmInstance,
      _17: x0 => x0.rasterStartMilliseconds,
      _18: x0 => x0.rasterEndMilliseconds,
      _19: x0 => x0.imageBitmaps,
      _135: (x0,x1) => x0.appendChild(x1),
      _166: (x0,x1,x2) => x0.addEventListener(x1,x2),
      _167: (x0,x1,x2) => x0.removeEventListener(x1,x2),
      _168: (x0,x1) => new OffscreenCanvas(x0,x1),
      _169: x0 => x0.remove(),
      _170: (x0,x1) => x0.append(x1),
      _172: x0 => x0.unlock(),
      _173: x0 => x0.getReader(),
      _174: (x0,x1) => x0.item(x1),
      _175: x0 => x0.next(),
      _176: x0 => x0.now(),
      _177: (x0,x1) => x0.revokeObjectURL(x1),
      _178: x0 => x0.close(),
      _179: (x0,x1,x2,x3,x4) => ({type: x0,data: x1,premultiplyAlpha: x2,colorSpaceConversion: x3,preferAnimation: x4}),
      _180: x0 => new window.ImageDecoder(x0),
      _181: (x0,x1) => ({frameIndex: x0,completeFramesOnly: x1}),
      _182: (x0,x1) => x0.decode(x1),
      _183: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._183(f,arguments.length,x0) }),
      _184: (x0,x1,x2,x3) => x0.addEventListener(x1,x2,x3),
      _186: (x0,x1) => x0.getModifierState(x1),
      _187: x0 => x0.preventDefault(),
      _188: x0 => x0.stopPropagation(),
      _189: (x0,x1) => x0.removeProperty(x1),
      _190: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._190(f,arguments.length,x0) }),
      _191: x0 => new window.FinalizationRegistry(x0),
      _192: (x0,x1,x2,x3) => x0.register(x1,x2,x3),
      _194: (x0,x1) => x0.unregister(x1),
      _195: (x0,x1) => x0.prepend(x1),
      _196: x0 => new Intl.Locale(x0),
      _197: (x0,x1) => x0.observe(x1),
      _198: x0 => x0.disconnect(),
      _199: (x0,x1) => x0.getAttribute(x1),
      _200: (x0,x1) => x0.contains(x1),
      _201: (x0,x1) => x0.querySelector(x1),
      _202: (x0,x1) => x0.matchMedia(x1),
      _203: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._203(f,arguments.length,x0) }),
      _204: (x0,x1,x2) => x0.call(x1,x2),
      _205: x0 => x0.blur(),
      _206: x0 => x0.hasFocus(),
      _207: (x0,x1) => x0.removeAttribute(x1),
      _208: (x0,x1,x2) => x0.insertBefore(x1,x2),
      _209: (x0,x1) => x0.hasAttribute(x1),
      _210: (x0,x1) => x0.getModifierState(x1),
      _211: (x0,x1) => x0.createTextNode(x1),
      _212: x0 => x0.getBoundingClientRect(),
      _213: (x0,x1) => x0.replaceWith(x1),
      _214: (x0,x1) => x0.contains(x1),
      _215: (x0,x1) => x0.closest(x1),
      _216: () => new Array(),
      _653: x0 => new Uint8Array(x0),
      _656: () => globalThis.window.flutterConfiguration,
      _658: x0 => x0.assetBase,
      _663: x0 => x0.canvasKitMaximumSurfaces,
      _664: x0 => x0.debugShowSemanticsNodes,
      _665: x0 => x0.hostElement,
      _666: x0 => x0.multiViewEnabled,
      _667: x0 => x0.nonce,
      _669: x0 => x0.fontFallbackBaseUrl,
      _679: x0 => x0.console,
      _680: x0 => x0.devicePixelRatio,
      _681: x0 => x0.document,
      _682: x0 => x0.history,
      _683: x0 => x0.innerHeight,
      _684: x0 => x0.innerWidth,
      _685: x0 => x0.location,
      _686: x0 => x0.navigator,
      _687: x0 => x0.visualViewport,
      _688: x0 => x0.performance,
      _689: x0 => x0.parent,
      _691: x0 => x0.URL,
      _693: (x0,x1) => x0.getComputedStyle(x1),
      _694: x0 => x0.screen,
      _695: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._695(f,arguments.length,x0) }),
      _696: (x0,x1) => x0.requestAnimationFrame(x1),
      _700: (x0,x1) => x0.warn(x1),
      _702: (x0,x1) => x0.debug(x1),
      _703: x0 => globalThis.parseFloat(x0),
      _704: () => globalThis.window,
      _705: () => globalThis.Intl,
      _706: () => globalThis.Symbol,
      _707: (x0,x1,x2,x3,x4) => globalThis.createImageBitmap(x0,x1,x2,x3,x4),
      _709: x0 => x0.clipboard,
      _710: x0 => x0.maxTouchPoints,
      _711: x0 => x0.vendor,
      _712: x0 => x0.language,
      _713: x0 => x0.platform,
      _714: x0 => x0.userAgent,
      _715: (x0,x1) => x0.vibrate(x1),
      _716: x0 => x0.languages,
      _717: x0 => x0.documentElement,
      _718: (x0,x1) => x0.querySelector(x1),
      _719: (x0,x1) => x0.querySelectorAll(x1),
      _721: (x0,x1) => x0.createElement(x1),
      _724: (x0,x1) => x0.createEvent(x1),
      _725: x0 => x0.activeElement,
      _728: x0 => x0.head,
      _729: x0 => x0.body,
      _731: (x0,x1) => { x0.title = x1 },
      _734: x0 => x0.visibilityState,
      _735: () => globalThis.document,
      _736: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._736(f,arguments.length,x0) }),
      _737: (x0,x1) => x0.dispatchEvent(x1),
      _745: x0 => x0.target,
      _747: x0 => x0.timeStamp,
      _748: x0 => x0.type,
      _750: (x0,x1,x2,x3) => x0.initEvent(x1,x2,x3),
      _757: x0 => x0.firstChild,
      _761: x0 => x0.parentElement,
      _763: (x0,x1) => { x0.textContent = x1 },
      _764: x0 => x0.parentNode,
      _765: x0 => x0.nextSibling,
      _766: (x0,x1) => x0.removeChild(x1),
      _767: x0 => x0.isConnected,
      _772: x0 => x0.firstElementChild,
      _775: x0 => x0.clientHeight,
      _776: x0 => x0.clientWidth,
      _777: x0 => x0.offsetHeight,
      _778: x0 => x0.offsetWidth,
      _779: x0 => x0.id,
      _780: (x0,x1) => { x0.id = x1 },
      _783: (x0,x1) => { x0.spellcheck = x1 },
      _784: x0 => x0.tagName,
      _785: x0 => x0.style,
      _787: (x0,x1) => x0.querySelectorAll(x1),
      _788: (x0,x1,x2) => x0.setAttribute(x1,x2),
      _789: x0 => x0.tabIndex,
      _790: (x0,x1) => { x0.tabIndex = x1 },
      _791: (x0,x1) => x0.focus(x1),
      _792: x0 => x0.scrollTop,
      _793: (x0,x1) => { x0.scrollTop = x1 },
      _794: (x0,x1) => { x0.scrollLeft = x1 },
      _795: x0 => x0.scrollLeft,
      _796: x0 => x0.classList,
      _797: (x0,x1) => x0.scrollIntoView(x1),
      _800: (x0,x1) => { x0.className = x1 },
      _802: (x0,x1) => x0.getElementsByClassName(x1),
      _803: x0 => x0.click(),
      _804: (x0,x1) => x0.attachShadow(x1),
      _807: x0 => x0.computedStyleMap(),
      _808: (x0,x1) => x0.get(x1),
      _814: (x0,x1) => x0.getPropertyValue(x1),
      _815: (x0,x1,x2,x3) => x0.setProperty(x1,x2,x3),
      _816: x0 => x0.offsetLeft,
      _817: x0 => x0.offsetTop,
      _818: x0 => x0.offsetParent,
      _820: (x0,x1) => { x0.name = x1 },
      _821: x0 => x0.content,
      _822: (x0,x1) => { x0.content = x1 },
      _826: (x0,x1) => { x0.src = x1 },
      _827: x0 => x0.naturalWidth,
      _828: x0 => x0.naturalHeight,
      _832: (x0,x1) => { x0.crossOrigin = x1 },
      _834: (x0,x1) => { x0.decoding = x1 },
      _835: x0 => x0.decode(),
      _840: (x0,x1) => { x0.nonce = x1 },
      _845: (x0,x1) => { x0.width = x1 },
      _847: (x0,x1) => { x0.height = x1 },
      _850: (x0,x1) => x0.getContext(x1),
      _918: x0 => x0.width,
      _919: x0 => x0.height,
      _921: (x0,x1) => x0.fetch(x1),
      _922: x0 => x0.status,
      _923: x0 => x0.headers,
      _924: x0 => x0.body,
      _925: x0 => x0.arrayBuffer(),
      _928: x0 => x0.read(),
      _929: x0 => x0.value,
      _930: x0 => x0.done,
      _937: x0 => x0.name,
      _938: x0 => x0.x,
      _939: x0 => x0.y,
      _942: x0 => x0.top,
      _943: x0 => x0.right,
      _944: x0 => x0.bottom,
      _945: x0 => x0.left,
      _955: x0 => x0.height,
      _956: x0 => x0.width,
      _957: x0 => x0.scale,
      _958: (x0,x1) => { x0.value = x1 },
      _961: (x0,x1) => { x0.placeholder = x1 },
      _963: (x0,x1) => { x0.name = x1 },
      _964: x0 => x0.selectionDirection,
      _965: x0 => x0.selectionStart,
      _966: x0 => x0.selectionEnd,
      _969: x0 => x0.value,
      _971: (x0,x1,x2) => x0.setSelectionRange(x1,x2),
      _972: x0 => x0.readText(),
      _973: (x0,x1) => x0.writeText(x1),
      _975: x0 => x0.altKey,
      _976: x0 => x0.code,
      _977: x0 => x0.ctrlKey,
      _978: x0 => x0.key,
      _979: x0 => x0.keyCode,
      _980: x0 => x0.location,
      _981: x0 => x0.metaKey,
      _982: x0 => x0.repeat,
      _983: x0 => x0.shiftKey,
      _984: x0 => x0.isComposing,
      _986: x0 => x0.state,
      _987: (x0,x1) => x0.go(x1),
      _989: (x0,x1,x2,x3) => x0.pushState(x1,x2,x3),
      _990: (x0,x1,x2,x3) => x0.replaceState(x1,x2,x3),
      _991: x0 => x0.pathname,
      _992: x0 => x0.search,
      _993: x0 => x0.hash,
      _997: x0 => x0.state,
      _1000: (x0,x1) => x0.createObjectURL(x1),
      _1002: x0 => new Blob(x0),
      _1012: x0 => x0.matches,
      _1016: x0 => x0.matches,
      _1020: x0 => x0.relatedTarget,
      _1022: x0 => x0.clientX,
      _1023: x0 => x0.clientY,
      _1024: x0 => x0.offsetX,
      _1025: x0 => x0.offsetY,
      _1028: x0 => x0.button,
      _1029: x0 => x0.buttons,
      _1030: x0 => x0.ctrlKey,
      _1034: x0 => x0.pointerId,
      _1035: x0 => x0.pointerType,
      _1036: x0 => x0.pressure,
      _1037: x0 => x0.tiltX,
      _1038: x0 => x0.tiltY,
      _1039: x0 => x0.getCoalescedEvents(),
      _1042: x0 => x0.deltaX,
      _1043: x0 => x0.deltaY,
      _1044: x0 => x0.wheelDeltaX,
      _1045: x0 => x0.wheelDeltaY,
      _1046: x0 => x0.deltaMode,
      _1053: x0 => x0.changedTouches,
      _1056: x0 => x0.clientX,
      _1057: x0 => x0.clientY,
      _1060: x0 => x0.data,
      _1063: (x0,x1) => { x0.disabled = x1 },
      _1065: (x0,x1) => { x0.type = x1 },
      _1066: (x0,x1) => { x0.max = x1 },
      _1067: (x0,x1) => { x0.min = x1 },
      _1068: x0 => x0.value,
      _1069: (x0,x1) => { x0.value = x1 },
      _1070: x0 => x0.disabled,
      _1071: (x0,x1) => { x0.disabled = x1 },
      _1073: (x0,x1) => { x0.placeholder = x1 },
      _1075: (x0,x1) => { x0.name = x1 },
      _1076: (x0,x1) => { x0.autocomplete = x1 },
      _1078: x0 => x0.selectionDirection,
      _1079: x0 => x0.selectionStart,
      _1081: x0 => x0.selectionEnd,
      _1084: (x0,x1,x2) => x0.setSelectionRange(x1,x2),
      _1085: (x0,x1) => x0.add(x1),
      _1087: (x0,x1) => { x0.noValidate = x1 },
      _1088: (x0,x1) => { x0.method = x1 },
      _1089: (x0,x1) => { x0.action = x1 },
      _1095: (x0,x1) => x0.getContext(x1),
      _1097: x0 => x0.convertToBlob(),
      _1114: x0 => x0.orientation,
      _1115: x0 => x0.width,
      _1116: x0 => x0.height,
      _1117: (x0,x1) => x0.lock(x1),
      _1136: x0 => new ResizeObserver(x0),
      _1139: (module,f) => finalizeWrapper(f, function(x0,x1) { return module.exports._1139(f,arguments.length,x0,x1) }),
      _1147: x0 => x0.length,
      _1148: x0 => x0.iterator,
      _1149: x0 => x0.Segmenter,
      _1150: x0 => x0.v8BreakIterator,
      _1151: (x0,x1) => new Intl.Segmenter(x0,x1),
      _1154: x0 => x0.language,
      _1155: x0 => x0.script,
      _1156: x0 => x0.region,
      _1174: x0 => x0.done,
      _1175: x0 => x0.value,
      _1176: x0 => x0.index,
      _1180: (x0,x1) => new Intl.v8BreakIterator(x0,x1),
      _1181: (x0,x1) => x0.adoptText(x1),
      _1182: x0 => x0.first(),
      _1183: x0 => x0.next(),
      _1184: x0 => x0.current(),
      _1186: () => globalThis.window.FinalizationRegistry,
      _1197: x0 => x0.hostElement,
      _1198: x0 => x0.viewConstraints,
      _1201: x0 => x0.maxHeight,
      _1202: x0 => x0.maxWidth,
      _1203: x0 => x0.minHeight,
      _1204: x0 => x0.minWidth,
      _1205: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._1205(f,arguments.length,x0) }),
      _1206: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._1206(f,arguments.length,x0) }),
      _1207: (x0,x1) => ({addView: x0,removeView: x1}),
      _1210: x0 => x0.loader,
      _1211: () => globalThis._flutter,
      _1212: (x0,x1) => x0.didCreateEngineInitializer(x1),
      _1213: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._1213(f,arguments.length,x0) }),
      _1214: (module,f) => finalizeWrapper(f, function() { return module.exports._1214(f,arguments.length) }),
      _1215: (x0,x1) => ({initializeEngine: x0,autoStart: x1}),
      _1218: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._1218(f,arguments.length,x0) }),
      _1219: x0 => ({runApp: x0}),
      _1221: (module,f) => finalizeWrapper(f, function(x0,x1) { return module.exports._1221(f,arguments.length,x0,x1) }),
      _1222: x0 => new Promise(x0),
      _1223: x0 => x0.length,
      _1224: () => globalThis.window.ImageDecoder,
      _1225: x0 => x0.tracks,
      _1227: x0 => x0.completed,
      _1229: x0 => x0.image,
      _1235: x0 => x0.displayWidth,
      _1236: x0 => x0.displayHeight,
      _1237: x0 => x0.duration,
      _1240: x0 => x0.ready,
      _1241: x0 => x0.selectedTrack,
      _1242: x0 => x0.repetitionCount,
      _1243: x0 => x0.frameCount,
      _1285: (x0,x1,x2) => x0.setAttribute(x1,x2),
      _1286: (x0,x1) => ({video: x0,audio: x1}),
      _1287: (x0,x1) => x0.getUserMedia(x1),
      _1288: x0 => x0.play(),
      _1289: x0 => x0.getTracks(),
      _1290: x0 => x0.stop(),
      _1291: (x0,x1) => x0.createElement(x1),
      _1299: x0 => x0.persisted(),
      _1300: x0 => x0.persist(),
      _1301: (x0,x1) => x0.canShare(x1),
      _1302: (x0,x1) => x0.share(x1),
      _1305: (x0,x1) => ({files: x0,text: x1}),
      _1307: x0 => ({files: x0}),
      _1309: x0 => ({text: x0}),
      _1310: x0 => x0.click(),
      _1311: x0 => x0.remove(),
      _1312: () => ({}),
      _1313: (x0,x1,x2) => new File(x0,x1,x2),
      _1314: x0 => x0.createRange(),
      _1315: (x0,x1) => x0.selectNode(x1),
      _1316: x0 => x0.getSelection(),
      _1317: x0 => x0.removeAllRanges(),
      _1318: (x0,x1) => x0.addRange(x1),
      _1319: (x0,x1) => x0.createElement(x1),
      _1320: (x0,x1) => x0.append(x1),
      _1321: (x0,x1,x2) => x0.insertRule(x1,x2),
      _1322: (x0,x1) => x0.add(x1),
      _1323: x0 => x0.preventDefault(),
      _1324: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._1324(f,arguments.length,x0) }),
      _1325: (x0,x1,x2) => x0.addEventListener(x1,x2),
      _1326: x0 => x0.preventDefault(),
      _1327: (x0,x1,x2,x3) => x0.addEventListener(x1,x2,x3),
      _1328: (x0,x1,x2,x3) => x0.removeEventListener(x1,x2,x3),
      _1330: (x0,x1) => x0.getAttribute(x1),
      _1334: (x0,x1,x2,x3) => x0.open(x1,x2,x3),
      _1335: x0 => x0.disconnect(),
      _1336: x0 => x0.disconnect(),
      _1337: (module,f) => finalizeWrapper(f, function(x0,x1) { return module.exports._1337(f,arguments.length,x0,x1) }),
      _1338: x0 => new ResizeObserver(x0),
      _1339: (x0,x1) => x0.observe(x1),
      _1340: (module,f) => finalizeWrapper(f, function(x0,x1) { return module.exports._1340(f,arguments.length,x0,x1) }),
      _1341: x0 => new MutationObserver(x0),
      _1342: x0 => ({childList: x0}),
      _1343: (x0,x1,x2) => x0.observe(x1,x2),
      _1344: (x0,x1) => x0.item(x1),
      _1345: (x0,x1) => x0.querySelector(x1),
      _1346: x0 => x0.decode(),
      _1347: (x0,x1,x2,x3) => x0.open(x1,x2,x3),
      _1348: (x0,x1,x2) => x0.setRequestHeader(x1,x2),
      _1349: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._1349(f,arguments.length,x0) }),
      _1350: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._1350(f,arguments.length,x0) }),
      _1351: x0 => x0.send(),
      _1352: () => new XMLHttpRequest(),
      _1353: (x0,x1) => x0.appendChild(x1),
      _1354: (x0,x1) => x0.item(x1),
      _1355: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._1355(f,arguments.length,x0) }),
      _1356: (x0,x1,x2) => x0.addEventListener(x1,x2),
      _1357: x0 => globalThis.URL.createObjectURL(x0),
      _1358: x0 => new BroadcastChannel(x0),
      _1359: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._1359(f,arguments.length,x0) }),
      _1360: x0 => ({mode: x0}),
      _1361: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._1361(f,arguments.length,x0) }),
      _1362: (x0,x1,x2,x3) => x0.request(x1,x2,x3),
      _1363: x0 => x0.query(),
      _1364: (x0,x1) => x0.postMessage(x1),
      _1365: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._1365(f,arguments.length,x0) }),
      _1366: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._1366(f,arguments.length,x0) }),
      _1367: x0 => x0.databases(),
      _1368: (x0,x1,x2) => x0.open(x1,x2),
      _1369: x0 => x0.abort(),
      _1370: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._1370(f,arguments.length,x0) }),
      _1371: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._1371(f,arguments.length,x0) }),
      _1372: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._1372(f,arguments.length,x0) }),
      _1373: x0 => x0.close(),
      _1374: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._1374(f,arguments.length,x0) }),
      _1375: x0 => x0.reload(),
      _1376: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._1376(f,arguments.length,x0) }),
      _1377: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._1377(f,arguments.length,x0) }),
      _1378: (x0,x1) => x0.getItem(x1),
      _1379: (x0,x1,x2) => x0.setItem(x1,x2),
      _1380: (x0,x1) => x0.removeItem(x1),
      _1381: (x0,x1) => x0.key(x1),
      _1391: (x0,x1) => x0.initialize(x1),
      _1399: Date.now,
      _1401: s => new Date(s * 1000).getTimezoneOffset() * 60,
      _1402: s => {
        if (!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(s)) {
          return NaN;
        }
        return parseFloat(s);
      },
      _1403: () => typeof dartUseDateNowForTicks !== "undefined",
      _1404: () => 1000 * performance.now(),
      _1405: () => Date.now(),
      _1406: () => {
        // On browsers return `globalThis.location.href`
        if (globalThis.location != null) {
          return globalThis.location.href;
        }
        return null;
      },
      _1407: () => {
        return typeof process != "undefined" &&
               Object.prototype.toString.call(process) == "[object process]" &&
               process.platform == "win32"
      },
      _1408: () => new WeakMap(),
      _1409: (map, o) => map.get(o),
      _1410: (map, o, v) => map.set(o, v),
      _1411: x0 => new WeakRef(x0),
      _1412: x0 => x0.deref(),
      _1413: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._1413(f,arguments.length,x0) }),
      _1414: x0 => new FinalizationRegistry(x0),
      _1415: (x0,x1,x2,x3) => x0.register(x1,x2,x3),
      _1417: (x0,x1) => x0.unregister(x1),
      _1419: () => globalThis.WeakRef,
      _1420: () => globalThis.FinalizationRegistry,
      _1422: x0 => x0.call(),
      _1423: s => JSON.stringify(s),
      _1424: s => printToConsole(s),
      _1425: o => {
        if (o === null || o === undefined) return 0;
        if (typeof(o) === 'string') return 1;
        return 2;
      },
      _1426: (o, p, r) => o.replaceAll(p, () => r),
      _1427: (o, p, r) => o.replace(p, () => r),
      _1428: Function.prototype.call.bind(String.prototype.toLowerCase),
      _1429: s => s.toUpperCase(),
      _1430: s => s.trim(),
      _1431: s => s.trimLeft(),
      _1432: s => s.trimRight(),
      _1433: (string, times) => string.repeat(times),
      _1434: Function.prototype.call.bind(String.prototype.indexOf),
      _1435: (s, p, i) => s.lastIndexOf(p, i),
      _1436: (string, token) => string.split(token),
      _1437: Object.is,
      _1441: (o, t) => typeof o === t,
      _1442: (o, c) => o instanceof c,
      _1443: o => Object.keys(o),
      _1445: (o) => {
        const typeofValue = typeof o;
        return (typeofValue === 'object') ||
            typeofValue === 'function';
      },
      _1446: (o,s,v) => o[s] = v,
      _1447: (o, a) => o + a,
      _1457: (o, a) => o == a,
      _1459: (o, a) => o === a,
      _1476: (x0,x1) => x0.call(x1),
      _1497: x0 => new Array(x0),
      _1499: x0 => x0.length,
      _1501: (x0,x1) => x0[x1],
      _1502: (x0,x1,x2) => { x0[x1] = x2 },
      _1505: (x0,x1,x2) => new DataView(x0,x1,x2),
      _1507: x0 => new Int8Array(x0),
      _1508: (x0,x1,x2) => new Uint8Array(x0,x1,x2),
      _1510: x0 => new Uint8ClampedArray(x0),
      _1512: x0 => new Int16Array(x0),
      _1514: x0 => new Uint16Array(x0),
      _1516: x0 => new Int32Array(x0),
      _1518: x0 => new Uint32Array(x0),
      _1520: x0 => new Float32Array(x0),
      _1522: x0 => new Float64Array(x0),
      _1542: (module,f) => finalizeWrapper(f, function(x0,x1) { return module.exports._1542(f,arguments.length,x0,x1) }),
      _1543: (module,f) => finalizeWrapper(f, function(x0,x1) { return module.exports._1543(f,arguments.length,x0,x1) }),
      _1545: () => Symbol("jsBoxedDartObjectProperty"),
      _1546: x0 => x0.random(),
      _1547: (x0,x1) => x0.getRandomValues(x1),
      _1548: () => globalThis.crypto,
      _1549: () => globalThis.Math,
      _1562: (ms, c) =>
      setTimeout(() => dartInstance.exports.$invokeCallback(c),ms),
      _1563: (handle) => clearTimeout(handle),
      _1564: (ms, c) =>
      setInterval(() => dartInstance.exports.$invokeCallback(c), ms),
      _1565: (handle) => clearInterval(handle),
      _1566: (c) =>
      queueMicrotask(() => dartInstance.exports.$invokeCallback(c)),
      _1567: () => Date.now(),
      _1568: () => new Error().stack,
      _1569: (exn) => {
        let stackString = exn.toString();
        let frames = stackString.split('\n');
        let drop = 4;
        if (frames[0].startsWith('Error')) {
            drop += 1;
        }
        return frames.slice(drop).join('\n');
      },
      _1570: (s, m) => {
        try {
          return new RegExp(s, m);
        } catch (e) {
          return String(e);
        }
      },
      _1571: (x0,x1) => x0.exec(x1),
      _1572: (x0,x1) => x0.test(x1),
      _1573: x0 => x0.pop(),
      _1575: o => o === undefined,
      _1577: o => typeof o === 'function' && o[jsWrappedDartFunctionSymbol] === true,
      _1579: o => {
        const proto = Object.getPrototypeOf(o);
        return proto === Object.prototype || proto === null;
      },
      _1580: o => o instanceof RegExp,
      _1581: (l, r) => l === r,
      _1582: o => o,
      _1583: o => {
        if (o === undefined || o === null) return 0;
        if (typeof o === 'number') return 1;
        return 2;
      },
      _1584: o => o,
      _1585: o => {
        if (o === undefined || o === null) return 0;
        if (typeof o === 'boolean') return 1;
        return 2;
      },
      _1586: o => o,
      _1587: b => !!b,
      _1588: o => o.length,
      _1590: (o, i) => o[i],
      _1591: f => f.dartFunction,
      _1592: () => ({}),
      _1593: () => [],
      _1595: () => globalThis,
      _1596: (constructor, args) => {
        const factoryFunction = constructor.bind.apply(
            constructor, [null, ...args]);
        return new factoryFunction();
      },
      _1597: (o, p) => p in o,
      _1598: (o, p) => o[p],
      _1599: (o, p, v) => o[p] = v,
      _1600: (o, m, a) => o[m].apply(o, a),
      _1602: o => String(o),
      _1603: (p, s, f) => p.then(s, (e) => f(e, e === undefined)),
      _1604: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._1604(f,arguments.length,x0) }),
      _1605: (module,f) => finalizeWrapper(f, function(x0,x1) { return module.exports._1605(f,arguments.length,x0,x1) }),
      _1606: o => {
        if (o === undefined) return 1;
        var type = typeof o;
        if (type === 'boolean') return 2;
        if (type === 'number') return 3;
        if (type === 'string') return 4;
        if (o instanceof Array) return 5;
        if (ArrayBuffer.isView(o)) {
          if (o instanceof Int8Array) return 6;
          if (o instanceof Uint8Array) return 7;
          if (o instanceof Uint8ClampedArray) return 8;
          if (o instanceof Int16Array) return 9;
          if (o instanceof Uint16Array) return 10;
          if (o instanceof Int32Array) return 11;
          if (o instanceof Uint32Array) return 12;
          if (o instanceof Float32Array) return 13;
          if (o instanceof Float64Array) return 14;
          if (o instanceof DataView) return 15;
        }
        if (o instanceof ArrayBuffer) return 16;
        // Feature check for `SharedArrayBuffer` before doing a type-check.
        if (globalThis.SharedArrayBuffer !== undefined &&
            o instanceof SharedArrayBuffer) {
            return 17;
        }
        if (o instanceof Promise) return 18;
        return 19;
      },
      _1607: o => [o],
      _1608: (o0, o1) => [o0, o1],
      _1609: (o0, o1, o2) => [o0, o1, o2],
      _1610: (o0, o1, o2, o3) => [o0, o1, o2, o3],
      _1611: (exn) => {
        if (exn instanceof Error) {
          return exn.stack;
        } else {
          return null;
        }
      },
      _1612: (jsArray, jsArrayOffset, wasmArray, wasmArrayOffset, length) => {
        const getValue = dartInstance.exports.$wasmI8ArrayGet;
        for (let i = 0; i < length; i++) {
          jsArray[jsArrayOffset + i] = getValue(wasmArray, wasmArrayOffset + i);
        }
      },
      _1613: (jsArray, jsArrayOffset, wasmArray, wasmArrayOffset, length) => {
        const setValue = dartInstance.exports.$wasmI8ArraySet;
        for (let i = 0; i < length; i++) {
          setValue(wasmArray, wasmArrayOffset + i, jsArray[jsArrayOffset + i]);
        }
      },
      _1614: (jsArray, jsArrayOffset, wasmArray, wasmArrayOffset, length) => {
        const getValue = dartInstance.exports.$wasmI16ArrayGet;
        for (let i = 0; i < length; i++) {
          jsArray[jsArrayOffset + i] = getValue(wasmArray, wasmArrayOffset + i);
        }
      },
      _1615: (jsArray, jsArrayOffset, wasmArray, wasmArrayOffset, length) => {
        const setValue = dartInstance.exports.$wasmI16ArraySet;
        for (let i = 0; i < length; i++) {
          setValue(wasmArray, wasmArrayOffset + i, jsArray[jsArrayOffset + i]);
        }
      },
      _1616: (jsArray, jsArrayOffset, wasmArray, wasmArrayOffset, length) => {
        const getValue = dartInstance.exports.$wasmI32ArrayGet;
        for (let i = 0; i < length; i++) {
          jsArray[jsArrayOffset + i] = getValue(wasmArray, wasmArrayOffset + i);
        }
      },
      _1617: (jsArray, jsArrayOffset, wasmArray, wasmArrayOffset, length) => {
        const setValue = dartInstance.exports.$wasmI32ArraySet;
        for (let i = 0; i < length; i++) {
          setValue(wasmArray, wasmArrayOffset + i, jsArray[jsArrayOffset + i]);
        }
      },
      _1618: (jsArray, jsArrayOffset, wasmArray, wasmArrayOffset, length) => {
        const getValue = dartInstance.exports.$wasmF32ArrayGet;
        for (let i = 0; i < length; i++) {
          jsArray[jsArrayOffset + i] = getValue(wasmArray, wasmArrayOffset + i);
        }
      },
      _1619: (jsArray, jsArrayOffset, wasmArray, wasmArrayOffset, length) => {
        const setValue = dartInstance.exports.$wasmF32ArraySet;
        for (let i = 0; i < length; i++) {
          setValue(wasmArray, wasmArrayOffset + i, jsArray[jsArrayOffset + i]);
        }
      },
      _1620: (jsArray, jsArrayOffset, wasmArray, wasmArrayOffset, length) => {
        const getValue = dartInstance.exports.$wasmF64ArrayGet;
        for (let i = 0; i < length; i++) {
          jsArray[jsArrayOffset + i] = getValue(wasmArray, wasmArrayOffset + i);
        }
      },
      _1621: (jsArray, jsArrayOffset, wasmArray, wasmArrayOffset, length) => {
        const setValue = dartInstance.exports.$wasmF64ArraySet;
        for (let i = 0; i < length; i++) {
          setValue(wasmArray, wasmArrayOffset + i, jsArray[jsArrayOffset + i]);
        }
      },
      _1622: x0 => new ArrayBuffer(x0),
      _1623: s => {
        if (/[[\]{}()*+?.\\^$|]/.test(s)) {
            s = s.replace(/[[\]{}()*+?.\\^$|]/g, '\\$&');
        }
        return s;
      },
      _1625: x0 => x0.index,
      _1626: x0 => x0.groups,
      _1627: x0 => x0.flags,
      _1628: x0 => x0.multiline,
      _1629: x0 => x0.ignoreCase,
      _1630: x0 => x0.unicode,
      _1631: x0 => x0.dotAll,
      _1632: (x0,x1) => { x0.lastIndex = x1 },
      _1633: (o, p) => p in o,
      _1634: (o, p) => o[p],
      _1635: (o, p, v) => o[p] = v,
      _1637: x0 => x0.arrayBuffer(),
      _1638: (x0,x1) => x0.sqlite3changeset_finalize(x1),
      _1639: (x0,x1) => x0.sqlite3session_delete(x1),
      _1640: (x0,x1) => x0.sqlite3_close_v2(x1),
      _1641: (x0,x1) => x0.sqlite3_finalize(x1),
      _1642: (x0,x1) => x0.dart_sqlite3_malloc(x1),
      _1643: (x0,x1) => x0.dart_sqlite3_free(x1),
      _1645: x0 => x0.sqlite3_initialize(),
      _1651: (x0,x1,x2,x3,x4) => x0.sqlite3_open_v2(x1,x2,x3,x4),
      _1652: (x0,x1) => x0.sqlite3_extended_errcode(x1),
      _1653: (x0,x1) => x0.sqlite3_errmsg(x1),
      _1654: (x0,x1) => x0.sqlite3_errstr(x1),
      _1655: (x0,x1) => x0.sqlite3_error_offset(x1),
      _1656: (x0,x1,x2) => x0.sqlite3_extended_result_codes(x1,x2),
      _1660: (x0,x1,x2,x3,x4,x5) => x0.sqlite3_exec(x1,x2,x3,x4,x5),
      _1661: (x0,x1,x2,x3,x4,x5,x6) => x0.sqlite3_prepare_v3(x1,x2,x3,x4,x5,x6),
      _1662: (x0,x1) => x0.sqlite3_bind_parameter_count(x1),
      _1663: (x0,x1,x2) => x0.sqlite3_bind_null(x1,x2),
      _1664: (x0,x1,x2,x3) => x0.sqlite3_bind_int64(x1,x2,x3),
      _1665: (x0,x1,x2,x3) => x0.sqlite3_bind_double(x1,x2,x3),
      _1666: (x0,x1,x2,x3,x4) => x0.dart_sqlite3_bind_text(x1,x2,x3,x4),
      _1667: (x0,x1,x2,x3,x4) => x0.dart_sqlite3_bind_blob(x1,x2,x3,x4),
      _1669: (x0,x1) => x0.sqlite3_column_count(x1),
      _1670: (x0,x1,x2) => x0.sqlite3_column_name(x1,x2),
      _1671: (x0,x1,x2) => x0.sqlite3_column_type(x1,x2),
      _1672: (x0,x1,x2) => x0.sqlite3_column_int64(x1,x2),
      _1673: (x0,x1,x2) => x0.sqlite3_column_double(x1,x2),
      _1674: (x0,x1,x2) => x0.sqlite3_column_bytes(x1,x2),
      _1675: (x0,x1,x2) => x0.sqlite3_column_text(x1,x2),
      _1676: (x0,x1,x2) => x0.sqlite3_column_blob(x1,x2),
      _1677: (x0,x1) => x0.sqlite3_value_type(x1),
      _1679: (x0,x1) => x0.sqlite3_value_int64(x1),
      _1680: (x0,x1) => x0.sqlite3_value_double(x1),
      _1681: (x0,x1) => x0.sqlite3_value_bytes(x1),
      _1682: (x0,x1) => x0.sqlite3_value_text(x1),
      _1683: (x0,x1) => x0.sqlite3_value_blob(x1),
      _1684: (x0,x1) => x0.sqlite3_result_null(x1),
      _1685: (x0,x1,x2) => x0.sqlite3_result_int64(x1,x2),
      _1686: (x0,x1,x2) => x0.sqlite3_result_double(x1,x2),
      _1687: (x0,x1,x2,x3,x4) => x0.sqlite3_result_text(x1,x2,x3,x4),
      _1688: (x0,x1,x2,x3,x4) => x0.sqlite3_result_blob64(x1,x2,x3,x4),
      _1689: (x0,x1,x2,x3) => x0.sqlite3_result_error(x1,x2,x3),
      _1690: (x0,x1,x2) => x0.sqlite3_result_subtype(x1,x2),
      _1693: (x0,x1) => x0.sqlite3_step(x1),
      _1694: (x0,x1) => x0.sqlite3_reset(x1),
      _1695: (x0,x1) => x0.sqlite3_changes(x1),
      _1696: (x0,x1) => x0.sqlite3_stmt_isexplain(x1),
      _1698: (x0,x1) => x0.sqlite3_last_insert_rowid(x1),
      _1699: (x0,x1) => x0.sqlite3_get_autocommit(x1),
      _1715: (x0,x1,x2,x3) => x0.dart_sqlite3_register_vfs(x1,x2,x3),
      _1718: (x0,x1,x2,x3,x4,x5,x6) => x0.dart_sqlite3_create_function_v2(x1,x2,x3,x4,x5,x6),
      _1723: (x0,x1) => new URL(x0,x1),
      _1724: (x0,x1) => globalThis.fetch(x0,x1),
      _1725: (x0,x1,x2) => x0.postMessage(x1,x2),
      _1726: (x0,x1,x2) => x0.postMessage(x1,x2),
      _1728: (x0,x1) => ({i: x0,p: x1}),
      _1729: (x0,x1) => ({c: x0,r: x1}),
      _1730: x0 => x0.i,
      _1731: x0 => x0.p,
      _1732: x0 => x0.c,
      _1733: x0 => x0.r,
      _1734: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._1734(f,arguments.length,x0) }),
      _1735: (x0,x1) => x0.postMessage(x1),
      _1736: x0 => x0.close(),
      _1738: x0 => new Worker(x0),
      _1739: () => globalThis.navigator,
      _1741: x0 => x0.locks,
      _1742: x0 => x0.getDirectory(),
      _1743: x0 => ({create: x0}),
      _1744: (x0,x1,x2) => x0.getFileHandle(x1,x2),
      _1745: x0 => x0.createSyncAccessHandle(),
      _1746: x0 => x0.close(),
      _1752: (x0,x1,x2) => x0.getDirectoryHandle(x1,x2),
      _1757: () => ({}),
      _1759: (module,f) => finalizeWrapper(f, function() { return module.exports._1759(f,arguments.length) }),
      _1760: () => globalThis.crypto,
      _1761: x0 => x0.randomUUID(),
      _1762: () => new AbortController(),
      _1763: x0 => x0.abort(),
      _1764: (x0,x1) => new SharedWorker(x0,x1),
      _1765: x0 => x0.start(),
      _1766: x0 => x0.terminate(),
      _1767: () => new MessageChannel(),
      _1770: x0 => ({create: x0}),
      _1777: x0 => globalThis.BigInt(x0),
      _1778: x0 => globalThis.Number(x0),
      _1786: () => globalThis.navigator,
      _1787: (x0,x1) => x0.read(x1),
      _1788: (x0,x1,x2) => x0.read(x1,x2),
      _1789: (x0,x1) => x0.write(x1),
      _1790: (x0,x1,x2) => x0.write(x1,x2),
      _1793: x0 => ({at: x0}),
      _1794: x0 => x0.getSize(),
      _1795: (x0,x1) => x0.truncate(x1),
      _1796: x0 => x0.flush(),
      _1799: x0 => x0.synchronizationBuffer,
      _1800: x0 => x0.communicationBuffer,
      _1801: (x0,x1,x2,x3) => ({clientVersion: x0,root: x1,synchronizationBuffer: x2,communicationBuffer: x3}),
      _1802: x0 => new SharedArrayBuffer(x0),
      _1803: x0 => ({autoIncrement: x0}),
      _1804: (x0,x1,x2) => x0.createObjectStore(x1,x2),
      _1805: x0 => ({unique: x0}),
      _1806: (x0,x1,x2,x3) => x0.createIndex(x1,x2,x3),
      _1807: (x0,x1) => x0.createObjectStore(x1),
      _1808: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._1808(f,arguments.length,x0) }),
      _1809: (x0,x1,x2) => x0.transaction(x1,x2),
      _1810: x0 => x0.commit(),
      _1811: (x0,x1) => x0.objectStore(x1),
      _1812: (module,f) => finalizeWrapper(f, function() { return module.exports._1812(f,arguments.length) }),
      _1813: x0 => new DOMException(x0),
      _1814: (module,f) => finalizeWrapper(f, function() { return module.exports._1814(f,arguments.length) }),
      _1815: (x0,x1) => globalThis.IDBKeyRange.bound(x0,x1),
      _1817: (x0,x1) => x0.index(x1),
      _1818: x0 => x0.openKeyCursor(),
      _1819: (x0,x1) => x0.getKey(x1),
      _1820: (x0,x1) => x0.get(x1),
      _1821: (x0,x1) => x0.openCursor(x1),
      _1822: (x0,x1) => ({name: x0,length: x1}),
      _1823: (x0,x1) => x0.put(x1),
      _1824: x0 => globalThis.IDBKeyRange.only(x0),
      _1825: (x0,x1,x2) => x0.put(x1,x2),
      _1826: (x0,x1) => x0.update(x1),
      _1827: (x0,x1) => x0.delete(x1),
      _1828: () => globalThis.Blob,
      _1829: x0 => x0.name,
      _1830: x0 => x0.length,
      _1831: x0 => globalThis.Array.isArray(x0),
      _1832: x0 => x0.close(),
      _1833: (x0,x1) => ({kind: x0,table: x1}),
      _1834: x0 => x0.kind,
      _1835: x0 => x0.table,
      _1836: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._1836(f,arguments.length,x0) }),
      _1837: (module,f) => finalizeWrapper(f, function(x0,x1) { return module.exports._1837(f,arguments.length,x0,x1) }),
      _1838: (module,f) => finalizeWrapper(f, function(x0,x1,x2,x3,x4) { return module.exports._1838(f,arguments.length,x0,x1,x2,x3,x4) }),
      _1839: (module,f) => finalizeWrapper(f, function(x0,x1,x2) { return module.exports._1839(f,arguments.length,x0,x1,x2) }),
      _1840: (module,f) => finalizeWrapper(f, function(x0,x1,x2,x3) { return module.exports._1840(f,arguments.length,x0,x1,x2,x3) }),
      _1841: (module,f) => finalizeWrapper(f, function(x0,x1,x2,x3) { return module.exports._1841(f,arguments.length,x0,x1,x2,x3) }),
      _1842: (module,f) => finalizeWrapper(f, function(x0,x1,x2) { return module.exports._1842(f,arguments.length,x0,x1,x2) }),
      _1843: (module,f) => finalizeWrapper(f, function(x0,x1) { return module.exports._1843(f,arguments.length,x0,x1) }),
      _1844: (module,f) => finalizeWrapper(f, function(x0,x1) { return module.exports._1844(f,arguments.length,x0,x1) }),
      _1845: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._1845(f,arguments.length,x0) }),
      _1846: (module,f) => finalizeWrapper(f, function(x0,x1,x2,x3) { return module.exports._1846(f,arguments.length,x0,x1,x2,x3) }),
      _1847: (module,f) => finalizeWrapper(f, function(x0,x1,x2,x3) { return module.exports._1847(f,arguments.length,x0,x1,x2,x3) }),
      _1848: (module,f) => finalizeWrapper(f, function(x0,x1) { return module.exports._1848(f,arguments.length,x0,x1) }),
      _1849: (module,f) => finalizeWrapper(f, function(x0,x1) { return module.exports._1849(f,arguments.length,x0,x1) }),
      _1850: (module,f) => finalizeWrapper(f, function(x0,x1) { return module.exports._1850(f,arguments.length,x0,x1) }),
      _1851: (module,f) => finalizeWrapper(f, function(x0,x1) { return module.exports._1851(f,arguments.length,x0,x1) }),
      _1852: (module,f) => finalizeWrapper(f, function(x0,x1) { return module.exports._1852(f,arguments.length,x0,x1) }),
      _1853: (module,f) => finalizeWrapper(f, function(x0,x1) { return module.exports._1853(f,arguments.length,x0,x1) }),
      _1854: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._1854(f,arguments.length,x0) }),
      _1855: (module,f) => finalizeWrapper(f, function(x0,x1,x2) { return module.exports._1855(f,arguments.length,x0,x1,x2) }),
      _1856: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._1856(f,arguments.length,x0) }),
      _1857: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._1857(f,arguments.length,x0) }),
      _1858: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._1858(f,arguments.length,x0) }),
      _1859: (module,f) => finalizeWrapper(f, function(x0,x1,x2,x3,x4) { return module.exports._1859(f,arguments.length,x0,x1,x2,x3,x4) }),
      _1860: (module,f) => finalizeWrapper(f, function(x0,x1,x2,x3) { return module.exports._1860(f,arguments.length,x0,x1,x2,x3) }),
      _1861: (module,f) => finalizeWrapper(f, function(x0,x1,x2,x3) { return module.exports._1861(f,arguments.length,x0,x1,x2,x3) }),
      _1862: (module,f) => finalizeWrapper(f, function(x0,x1,x2,x3) { return module.exports._1862(f,arguments.length,x0,x1,x2,x3) }),
      _1863: (module,f) => finalizeWrapper(f, function(x0,x1) { return module.exports._1863(f,arguments.length,x0,x1) }),
      _1864: (module,f) => finalizeWrapper(f, function(x0,x1) { return module.exports._1864(f,arguments.length,x0,x1) }),
      _1865: (module,f) => finalizeWrapper(f, function(x0,x1,x2,x3,x4) { return module.exports._1865(f,arguments.length,x0,x1,x2,x3,x4) }),
      _1866: (module,f) => finalizeWrapper(f, function(x0,x1) { return module.exports._1866(f,arguments.length,x0,x1) }),
      _1867: (module,f) => finalizeWrapper(f, function(x0,x1) { return module.exports._1867(f,arguments.length,x0,x1) }),
      _1868: (module,f) => finalizeWrapper(f, function(x0,x1,x2) { return module.exports._1868(f,arguments.length,x0,x1,x2) }),
      _1869: (x0,x1,x2) => x0.instantiateStreaming(x1,x2),
      _1870: (x0,x1,x2) => new DataView(x0,x1,x2),
      _1871: (x0,x1) => x0.getInt32(x1),
      _1872: (x0,x1,x2) => x0.setInt32(x1,x2),
      _1873: (x0,x1) => x0.getBigInt64(x1),
      _1874: (x0,x1,x2) => x0.setBigInt64(x1,x2),
      _1875: x0 => x0.continue(),
      _1876: () => globalThis.indexedDB,
      _1877: (x0,x1,x2) => globalThis.Atomics.wait(x0,x1,x2),
      _1879: (x0,x1,x2) => globalThis.Atomics.notify(x0,x1,x2),
      _1880: (x0,x1,x2) => globalThis.Atomics.store(x0,x1,x2),
      _1881: (x0,x1) => globalThis.Atomics.load(x0,x1),
      _1882: () => globalThis.Int32Array,
      _1884: () => globalThis.Uint8Array,
      _1886: x0 => x0.byteLength,
      _1887: (x0,x1,x2,x3) => ({name: x0,iv: x1,additionalData: x2,tagLength: x3}),
      _1888: x0 => globalThis.window.crypto.getRandomValues(x0),
      _1889: (x0,x1,x2,x3) => ({crv: x0,d: x1,kty: x2,x: x3}),
      _1890: (x0,x1,x2) => ({crv: x0,kty: x1,x: x2}),
      _1891: (x0,x1) => ({name: x0,public: x1}),
      _1892: x0 => ({name: x0}),
      _1906: (x0,x1,x2,x3) => ({name: x0,hash: x1,salt: x2,iterations: x3}),
      _1907: (x0,x1) => ({name: x0,hash: x1}),
      _1908: (x0,x1,x2,x3) => ({name: x0,hash: x1,salt: x2,info: x3}),
      _1909: () => new XMLHttpRequest(),
      _1910: (x0,x1,x2,x3) => x0.open(x1,x2,x3),
      _1914: x0 => x0.send(),
      _1916: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._1916(f,arguments.length,x0) }),
      _1917: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._1917(f,arguments.length,x0) }),
      _1925: (x0,x1) => x0.item(x1),
      _1926: (x0,x1) => x0.removeChild(x1),
      _1928: x0 => ({type: x0}),
      _1929: (x0,x1) => new Blob(x0,x1),
      _1931: () => new FileReader(),
      _1932: (x0,x1) => x0.readAsArrayBuffer(x1),
      _1933: x0 => x0.trustedTypes,
      _1934: (x0,x1) => { x0.src = x1 },
      _1935: (x0,x1) => x0.createScriptURL(x1),
      _1936: x0 => x0.nonce,
      _1937: (x0,x1) => x0.debug(x1),
      _1938: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._1938(f,arguments.length,x0) }),
      _1939: x0 => ({createScriptURL: x0}),
      _1940: (x0,x1,x2) => x0.createPolicy(x1,x2),
      _1941: (x0,x1) => x0.querySelectorAll(x1),
      _1942: (x0,x1,x2,x3,x4,x5) => ({method: x0,headers: x1,body: x2,credentials: x3,redirect: x4,signal: x5}),
      _1943: (x0,x1) => globalThis.fetch(x0,x1),
      _1944: (x0,x1) => x0.get(x1),
      _1945: (module,f) => finalizeWrapper(f, function(x0,x1,x2) { return module.exports._1945(f,arguments.length,x0,x1,x2) }),
      _1946: (x0,x1) => x0.forEach(x1),
      _1947: x0 => x0.getReader(),
      _1948: x0 => x0.cancel(),
      _1949: x0 => x0.read(),
      _1968: (x0,x1) => x0.getElementById(x1),
      _1969: (x0,x1) => x0.append(x1),
      _1970: x0 => new Event(x0),
      _1971: (x0,x1) => x0.dispatchEvent(x1),
      _1975: o => o instanceof Array,
      _1979: a => a.pop(),
      _1980: (a, i) => a.splice(i, 1),
      _1981: (a, s) => a.join(s),
      _1982: (a, s, e) => a.slice(s, e),
      _1984: (a, b) => a == b ? 0 : (a > b ? 1 : -1),
      _1985: a => a.length,
      _1987: (a, i) => a[i],
      _1988: (a, i, v) => a[i] = v,
      _1990: o => {
        if (o === null || o === undefined) return 0;
        if (o instanceof ArrayBuffer) return 1;
        if (globalThis.SharedArrayBuffer !== undefined &&
            o instanceof SharedArrayBuffer) {
          return 2;
        }
        return 3;
      },
      _1991: (o, offsetInBytes, lengthInBytes) => {
        var dst = new ArrayBuffer(lengthInBytes);
        new Uint8Array(dst).set(new Uint8Array(o, offsetInBytes, lengthInBytes));
        return new DataView(dst);
      },
      _1993: o => {
        if (o === null || o === undefined) return 0;
        if (o instanceof Uint8Array) return 1;
        return 2;
      },
      _1994: (o, start, length) => new Uint8Array(o.buffer, o.byteOffset + start, length),
      _1995: o => {
        if (o === null || o === undefined) return 0;
        if (o instanceof Int8Array) return 1;
        return 2;
      },
      _1996: (o, start, length) => new Int8Array(o.buffer, o.byteOffset + start, length),
      _1997: o => o instanceof Uint8ClampedArray,
      _1998: (o, start, length) => new Uint8ClampedArray(o.buffer, o.byteOffset + start, length),
      _1999: o => o instanceof Uint16Array,
      _2000: (o, start, length) => new Uint16Array(o.buffer, o.byteOffset + start, length),
      _2001: o => o instanceof Int16Array,
      _2002: (o, start, length) => new Int16Array(o.buffer, o.byteOffset + start, length),
      _2003: o => {
        if (o === null || o === undefined) return 0;
        if (o instanceof Uint32Array) return 1;
        return 2;
      },
      _2004: (o, start, length) => new Uint32Array(o.buffer, o.byteOffset + start, length),
      _2005: o => {
        if (o === null || o === undefined) return 0;
        if (o instanceof Int32Array) return 1;
        return 2;
      },
      _2006: (o, start, length) => new Int32Array(o.buffer, o.byteOffset + start, length),
      _2008: (o, start, length) => new BigInt64Array(o.buffer, o.byteOffset + start, length),
      _2009: o => {
        if (o === null || o === undefined) return 0;
        if (o instanceof Float32Array) return 1;
        return 2;
      },
      _2010: (o, start, length) => new Float32Array(o.buffer, o.byteOffset + start, length),
      _2011: o => {
        if (o === null || o === undefined) return 0;
        if (o instanceof Float64Array) return 1;
        return 2;
      },
      _2012: (o, start, length) => new Float64Array(o.buffer, o.byteOffset + start, length),
      _2013: (a, i) => a.push(i),
      _2014: (t, s) => t.set(s),
      _2015: l => new DataView(new ArrayBuffer(l)),
      _2016: (o) => new DataView(o.buffer, o.byteOffset, o.byteLength),
      _2017: o => o.byteLength,
      _2018: o => o.buffer,
      _2019: o => o.byteOffset,
      _2020: Function.prototype.call.bind(Object.getOwnPropertyDescriptor(DataView.prototype, 'byteLength').get),
      _2021: (b, o) => new DataView(b, o),
      _2022: (b, o, l) => new DataView(b, o, l),
      _2023: Function.prototype.call.bind(DataView.prototype.getUint8),
      _2024: Function.prototype.call.bind(DataView.prototype.setUint8),
      _2025: Function.prototype.call.bind(DataView.prototype.getInt8),
      _2026: Function.prototype.call.bind(DataView.prototype.setInt8),
      _2027: Function.prototype.call.bind(DataView.prototype.getUint16),
      _2028: Function.prototype.call.bind(DataView.prototype.setUint16),
      _2029: Function.prototype.call.bind(DataView.prototype.getInt16),
      _2030: Function.prototype.call.bind(DataView.prototype.setInt16),
      _2031: Function.prototype.call.bind(DataView.prototype.getUint32),
      _2032: Function.prototype.call.bind(DataView.prototype.setUint32),
      _2033: Function.prototype.call.bind(DataView.prototype.getInt32),
      _2034: Function.prototype.call.bind(DataView.prototype.setInt32),
      _2035: Function.prototype.call.bind(DataView.prototype.getBigUint64),
      _2037: Function.prototype.call.bind(DataView.prototype.getBigInt64),
      _2038: Function.prototype.call.bind(DataView.prototype.setBigInt64),
      _2039: Function.prototype.call.bind(DataView.prototype.getFloat32),
      _2040: Function.prototype.call.bind(DataView.prototype.setFloat32),
      _2041: Function.prototype.call.bind(DataView.prototype.getFloat64),
      _2042: Function.prototype.call.bind(DataView.prototype.setFloat64),
      _2043: Function.prototype.call.bind(Number.prototype.toString),
      _2044: Function.prototype.call.bind(BigInt.prototype.toString),
      _2045: Function.prototype.call.bind(Number.prototype.toString),
      _2046: (d, digits) => d.toFixed(digits),
      _2050: (module,f) => finalizeWrapper(f, function() { return module.exports._2050(f,arguments.length) }),
      _2051: () => globalThis.Promise.resolve(),
      _2052: (x0,x1) => x0.then(x1),
      _2062: () => globalThis.window.isSecureContext,
      _2063: () => globalThis.crypto.subtle,
      _2064: (x0,x1,x2) => globalThis.crypto.subtle.decrypt(x0,x1,x2),
      _2065: (x0,x1,x2) => globalThis.crypto.subtle.deriveBits(x0,x1,x2),
      _2067: (x0,x1) => globalThis.crypto.subtle.digest(x0,x1),
      _2068: (x0,x1,x2) => globalThis.crypto.subtle.encrypt(x0,x1,x2),
      _2071: (x0,x1,x2,x3,x4) => globalThis.crypto.subtle.importKey(x0,x1,x2,x3,x4),
      _2072: (x0,x1,x2) => globalThis.crypto.subtle.sign(x0,x1,x2),
      _2113: () => globalThis.document,
      _2114: () => globalThis.window,
      _2115: () => globalThis.console,
      _2120: (x0,x1) => { x0.height = x1 },
      _2122: (x0,x1) => { x0.width = x1 },
      _2124: (x0,x1) => { x0.pointerEvents = x1 },
      _2127: x0 => x0.head,
      _2128: x0 => x0.classList,
      _2132: (x0,x1) => { x0.innerText = x1 },
      _2133: x0 => x0.style,
      _2135: x0 => x0.sheet,
      _2136: x0 => x0.src,
      _2137: (x0,x1) => { x0.src = x1 },
      _2138: x0 => x0.naturalWidth,
      _2139: x0 => x0.naturalHeight,
      _2146: x0 => x0.offsetX,
      _2147: x0 => x0.offsetY,
      _2148: x0 => x0.button,
      _2154: (x0,x1) => x0.error(x1),
      _2159: x0 => x0.status,
      _2160: (x0,x1) => { x0.responseType = x1 },
      _2162: x0 => x0.response,
      _2198: () => globalThis.google.accounts.id,
      _2203: (x0,x1) => x0.renderButton(x1),
      _2204: (x0,x1,x2) => x0.renderButton(x1,x2),
      _2212: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._2212(f,arguments.length,x0) }),
      _2215: (x0,x1,x2,x3,x4,x5,x6,x7,x8,x9,x10,x11,x12,x13,x14,x15,x16) => ({client_id: x0,auto_select: x1,callback: x2,login_uri: x3,native_callback: x4,cancel_on_tap_outside: x5,prompt_parent_id: x6,nonce: x7,context: x8,state_cookie_domain: x9,ux_mode: x10,allowed_parent_origin: x11,intermediate_iframe_close_callback: x12,itp_support: x13,login_hint: x14,hd: x15,use_fedcm_for_prompt: x16}),
      _2226: x0 => x0.error,
      _2228: x0 => x0.credential,
      _2231: (x0,x1,x2,x3,x4,x5,x6,x7,x8) => ({type: x0,theme: x1,size: x2,text: x3,shape: x4,logo_alignment: x5,width: x6,locale: x7,click_listener: x8}),
      _2239: x0 => { globalThis.onGoogleLibraryLoad = x0 },
      _2240: (module,f) => finalizeWrapper(f, function() { return module.exports._2240(f,arguments.length) }),
      _2289: (x0,x1) => { x0.responseType = x1 },
      _2290: x0 => x0.response,
      _2335: (x0,x1) => { x0.title = x1 },
      _2366: x0 => x0.style,
      _2565: (x0,x1) => { x0.nonce = x1 },
      _2725: (x0,x1) => { x0.download = x1 },
      _2750: (x0,x1) => { x0.href = x1 },
      _2843: (x0,x1) => { x0.src = x1 },
      _2862: x0 => x0.contentWindow,
      _2975: (x0,x1) => { x0.srcObject = x1 },
      _2983: x0 => x0.readyState,
      _2999: (x0,x1) => { x0.autoplay = x1 },
      _3007: (x0,x1) => { x0.muted = x1 },
      _3294: (x0,x1) => { x0.accept = x1 },
      _3308: x0 => x0.files,
      _3334: (x0,x1) => { x0.multiple = x1 },
      _3352: (x0,x1) => { x0.type = x1 },
      _3602: (x0,x1) => { x0.src = x1 },
      _3608: (x0,x1) => { x0.async = x1 },
      _3610: (x0,x1) => { x0.defer = x1 },
      _4071: () => globalThis.window,
      _4111: x0 => x0.document,
      _4114: x0 => x0.location,
      _4133: x0 => x0.navigator,
      _4390: x0 => x0.indexedDB,
      _4395: x0 => x0.trustedTypes,
      _4396: x0 => x0.sessionStorage,
      _4397: x0 => x0.localStorage,
      _4406: x0 => x0.origin,
      _4447: x0 => x0.persisted,
      _4454: x0 => x0.message,
      _4502: x0 => x0.mediaDevices,
      _4518: x0 => x0.userAgent,
      _4519: x0 => x0.vendor,
      _4531: x0 => x0.storage,
      _4532: x0 => x0.locks,
      _4569: x0 => x0.data,
      _4570: x0 => x0.origin,
      _4572: x0 => x0.source,
      _4599: x0 => x0.port1,
      _4600: x0 => x0.port2,
      _4602: (x0,x1) => { x0.onmessage = x1 },
      _4612: (x0,x1) => { x0.onmessage = x1 },
      _4680: x0 => x0.port,
      _4715: x0 => x0.length,
      _6619: x0 => x0.type,
      _6659: x0 => x0.signal,
      _6668: x0 => x0.length,
      _6670: x0 => x0.length,
      _6689: x0 => x0.addedNodes,
      _6727: () => globalThis.document,
      _6807: x0 => x0.body,
      _6809: x0 => x0.head,
      _6821: x0 => x0.visibilityState,
      _7139: (x0,x1) => { x0.id = x1 },
      _7166: x0 => x0.children,
      _7406: x0 => x0.held,
      _7411: x0 => x0.name,
      _8483: x0 => x0.value,
      _8485: x0 => x0.done,
      _8642: x0 => x0.size,
      _8643: x0 => x0.type,
      _8646: (x0,x1) => { x0.type = x1 },
      _8649: x0 => x0.name,
      _8650: x0 => x0.lastModified,
      _8655: x0 => x0.length,
      _8661: x0 => x0.result,
      _9155: x0 => x0.url,
      _9157: x0 => x0.status,
      _9159: x0 => x0.statusText,
      _9160: x0 => x0.headers,
      _9161: x0 => x0.body,
      _9173: x0 => x0.instance,
      _9175: () => globalThis.WebAssembly,
      _9197: x0 => x0.exports,
      _9205: x0 => x0.buffer,
      _9519: x0 => x0.contentRect,
      _10611: x0 => x0.result,
      _10612: x0 => x0.error,
      _10614: x0 => x0.transaction,
      _10617: (x0,x1) => { x0.onsuccess = x1 },
      _10619: (x0,x1) => { x0.onerror = x1 },
      _10621: (x0,x1) => { x0.onblocked = x1 },
      _10623: (x0,x1) => { x0.onupgradeneeded = x1 },
      _10625: x0 => x0.oldVersion,
      _10634: x0 => x0.name,
      _10636: x0 => x0.version,
      _10704: x0 => x0.key,
      _10705: x0 => x0.primaryKey,
      _10707: x0 => x0.value,
      _10712: x0 => x0.error,
      _10714: (x0,x1) => { x0.onabort = x1 },
      _10716: (x0,x1) => { x0.oncomplete = x1 },
      _10718: (x0,x1) => { x0.onerror = x1 },
      _11266: (x0,x1) => { x0.border = x1 },
      _11470: (x0,x1) => { x0.colorScheme = x1 },
      _11544: (x0,x1) => { x0.display = x1 },
      _11708: (x0,x1) => { x0.height = x1 },
      _11902: (x0,x1) => { x0.objectFit = x1 },
      _12398: (x0,x1) => { x0.width = x1 },
      _12766: x0 => x0.name,
      _12767: x0 => x0.message,
      _12855: x0 => x0.href,
      _12870: x0 => x0.pathname,
      _13089: x0 => x0.width,
      _13090: x0 => x0.height,
      _13474: () => globalThis.console,

    };

    const baseImports = {
      dart2wasm: dart2wasm,
      Math: Math,
      Date: Date,
      Object: Object,
      Array: Array,
      Reflect: Reflect,
      WebAssembly: {
        JSTag: WebAssembly.JSTag,
      },
      "": new Proxy({}, { get(_, prop) { return prop; } }),

    };

    const jsStringPolyfill = {
      "charCodeAt": (s, i) => s.charCodeAt(i),
      "compare": (s1, s2) => {
        if (s1 < s2) return -1;
        if (s1 > s2) return 1;
        return 0;
      },
      "concat": (s1, s2) => s1 + s2,
      "equals": (s1, s2) => s1 === s2,
      "fromCharCode": (i) => String.fromCharCode(i),
      "length": (s) => s.length,
      "substring": (s, a, b) => s.substring(a, b),
      "fromCharCodeArray": (a, start, end) => {
        if (end <= start) return '';

        const read = dartInstance.exports.$wasmI16ArrayGet;
        let result = '';
        let index = start;
        const chunkLength = Math.min(end - index, 500);
        let array = new Array(chunkLength);
        while (index < end) {
          const newChunkLength = Math.min(end - index, 500);
          for (let i = 0; i < newChunkLength; i++) {
            array[i] = read(a, index++);
          }
          if (newChunkLength < chunkLength) {
            array = array.slice(0, newChunkLength);
          }
          result += String.fromCharCode(...array);
        }
        return result;
      },
      "intoCharCodeArray": (s, a, start) => {
        if (s === '') return 0;

        const write = dartInstance.exports.$wasmI16ArraySet;
        for (var i = 0; i < s.length; ++i) {
          write(a, start++, s.charCodeAt(i));
        }
        return s.length;
      },
      "test": (s) => typeof s == "string",
    };


    

    dartInstance = await WebAssembly.instantiate(this.module, {
      ...baseImports,
      ...additionalImports,
      
      "wasm:js-string": jsStringPolyfill,
    });
    dartInstance.exports.$setThisModule(dartInstance);

    return new InstantiatedApp(this, dartInstance);
  }
}

class InstantiatedApp {
  constructor(compiledApp, instantiatedModule) {
    this.compiledApp = compiledApp;
    this.instantiatedModule = instantiatedModule;
  }

  // Call the main function with the given arguments.
  invokeMain(...args) {
    this.instantiatedModule.exports.$invokeMain(args);
  }
}
