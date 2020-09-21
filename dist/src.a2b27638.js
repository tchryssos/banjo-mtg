// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"node_modules/preact/dist/preact.module.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.render = M;
exports.hydrate = O;
exports.h = exports.createElement = v;
exports.Fragment = p;
exports.createRef = y;
exports.Component = d;
exports.cloneElement = S;
exports.createContext = q;
exports.toChildArray = b;
exports.__u = I;
exports.options = exports.isValidElement = void 0;
var n,
    l,
    u,
    i,
    t,
    o,
    r,
    f = {},
    e = [],
    c = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
exports.isValidElement = l;
exports.options = n;

function s(n, l) {
  for (var u in l) n[u] = l[u];

  return n;
}

function a(n) {
  var l = n.parentNode;
  l && l.removeChild(n);
}

function v(n, l, u) {
  var i,
      t,
      o,
      r = arguments,
      f = {};

  for (o in l) "key" == o ? i = l[o] : "ref" == o ? t = l[o] : f[o] = l[o];

  if (arguments.length > 3) for (u = [u], o = 3; o < arguments.length; o++) u.push(r[o]);
  if (null != u && (f.children = u), "function" == typeof n && null != n.defaultProps) for (o in n.defaultProps) void 0 === f[o] && (f[o] = n.defaultProps[o]);
  return h(n, f, i, t, null);
}

function h(l, u, i, t, o) {
  var r = {
    type: l,
    props: u,
    key: i,
    ref: t,
    __k: null,
    __: null,
    __b: 0,
    __e: null,
    __d: void 0,
    __c: null,
    constructor: void 0,
    __v: o
  };
  return null == o && (r.__v = r), null != n.vnode && n.vnode(r), r;
}

function y() {
  return {
    current: null
  };
}

function p(n) {
  return n.children;
}

function d(n, l) {
  this.props = n, this.context = l;
}

function _(n, l) {
  if (null == l) return n.__ ? _(n.__, n.__.__k.indexOf(n) + 1) : null;

  for (var u; l < n.__k.length; l++) if (null != (u = n.__k[l]) && null != u.__e) return u.__e;

  return "function" == typeof n.type ? _(n) : null;
}

function w(n) {
  var l, u;

  if (null != (n = n.__) && null != n.__c) {
    for (n.__e = n.__c.base = null, l = 0; l < n.__k.length; l++) if (null != (u = n.__k[l]) && null != u.__e) {
      n.__e = n.__c.base = u.__e;
      break;
    }

    return w(n);
  }
}

function k(l) {
  (!l.__d && (l.__d = !0) && u.push(l) && !m.__r++ || t !== n.debounceRendering) && ((t = n.debounceRendering) || i)(m);
}

function m() {
  for (var n; m.__r = u.length;) n = u.sort(function (n, l) {
    return n.__v.__b - l.__v.__b;
  }), u = [], n.some(function (n) {
    var l, u, i, t, o, r, f;
    n.__d && (r = (o = (l = n).__v).__e, (f = l.__P) && (u = [], (i = s({}, o)).__v = i, t = T(f, o, i, l.__n, void 0 !== f.ownerSVGElement, null, u, null == r ? _(o) : r), $(u, o), t != r && w(o)));
  });
}

function g(n, l, u, i, t, o, r, c, s, v) {
  var y,
      d,
      w,
      k,
      m,
      g,
      b,
      A = i && i.__k || e,
      P = A.length;

  for (s == f && (s = null != r ? r[0] : P ? _(i, 0) : null), u.__k = [], y = 0; y < l.length; y++) if (null != (k = u.__k[y] = null == (k = l[y]) || "boolean" == typeof k ? null : "string" == typeof k || "number" == typeof k ? h(null, k, null, null, k) : Array.isArray(k) ? h(p, {
    children: k
  }, null, null, null) : null != k.__e || null != k.__c ? h(k.type, k.props, k.key, null, k.__v) : k)) {
    if (k.__ = u, k.__b = u.__b + 1, null === (w = A[y]) || w && k.key == w.key && k.type === w.type) A[y] = void 0;else for (d = 0; d < P; d++) {
      if ((w = A[d]) && k.key == w.key && k.type === w.type) {
        A[d] = void 0;
        break;
      }

      w = null;
    }
    m = T(n, k, w = w || f, t, o, r, c, s, v), (d = k.ref) && w.ref != d && (b || (b = []), w.ref && b.push(w.ref, null, k), b.push(d, k.__c || m, k)), null != m ? (null == g && (g = m), s = x(n, k, w, A, r, m, s), v || "option" != u.type ? "function" == typeof u.type && (u.__d = s) : n.value = "") : s && w.__e == s && s.parentNode != n && (s = _(w));
  }

  if (u.__e = g, null != r && "function" != typeof u.type) for (y = r.length; y--;) null != r[y] && a(r[y]);

  for (y = P; y--;) null != A[y] && I(A[y], A[y]);

  if (b) for (y = 0; y < b.length; y++) H(b[y], b[++y], b[++y]);
}

function b(n, l) {
  return l = l || [], null == n || "boolean" == typeof n || (Array.isArray(n) ? n.some(function (n) {
    b(n, l);
  }) : l.push(n)), l;
}

function x(n, l, u, i, t, o, r) {
  var f, e, c;
  if (void 0 !== l.__d) f = l.__d, l.__d = void 0;else if (t == u || o != r || null == o.parentNode) n: if (null == r || r.parentNode !== n) n.appendChild(o), f = null;else {
    for (e = r, c = 0; (e = e.nextSibling) && c < i.length; c += 2) if (e == o) break n;

    n.insertBefore(o, r), f = r;
  }
  return void 0 !== f ? f : o.nextSibling;
}

function A(n, l, u, i, t) {
  var o;

  for (o in u) "children" === o || "key" === o || o in l || C(n, o, null, u[o], i);

  for (o in l) t && "function" != typeof l[o] || "children" === o || "key" === o || "value" === o || "checked" === o || u[o] === l[o] || C(n, o, l[o], u[o], i);
}

function P(n, l, u) {
  "-" === l[0] ? n.setProperty(l, u) : n[l] = null == u ? "" : "number" != typeof u || c.test(l) ? u : u + "px";
}

function C(n, l, u, i, t) {
  var o, r;
  if (t && "className" == l && (l = "class"), "style" === l) {
    if ("string" == typeof u) n.style = u;else {
      if ("string" == typeof i && (n.style = i = ""), i) for (l in i) u && l in u || P(n.style, l, "");
      if (u) for (l in u) i && u[l] === i[l] || P(n.style, l, u[l]);
    }
  } else "o" === l[0] && "n" === l[1] ? (o = l !== (l = l.replace(/Capture$/, "")), (r = l.toLowerCase()) in n && (l = r), l = l.slice(2), n.l || (n.l = {}), n.l[l] = u, u ? i || n.addEventListener(l, z, o) : n.removeEventListener(l, z, o)) : "list" !== l && "tagName" !== l && "form" !== l && "type" !== l && "size" !== l && "download" !== l && "href" !== l && !t && l in n ? n[l] = null == u ? "" : u : "function" != typeof u && "dangerouslySetInnerHTML" !== l && (l !== (l = l.replace(/xlink:?/, "")) ? null == u || !1 === u ? n.removeAttributeNS("http://www.w3.org/1999/xlink", l.toLowerCase()) : n.setAttributeNS("http://www.w3.org/1999/xlink", l.toLowerCase(), u) : null == u || !1 === u && !/^ar/.test(l) ? n.removeAttribute(l) : n.setAttribute(l, u));
}

function z(l) {
  this.l[l.type](n.event ? n.event(l) : l);
}

function N(n, l, u) {
  var i, t;

  for (i = 0; i < n.__k.length; i++) (t = n.__k[i]) && (t.__ = n, t.__e && ("function" == typeof t.type && t.__k.length > 1 && N(t, l, u), l = x(u, t, t, n.__k, null, t.__e, l), "function" == typeof n.type && (n.__d = l)));
}

function T(l, u, i, t, o, r, f, e, c) {
  var a,
      v,
      h,
      y,
      _,
      w,
      k,
      m,
      b,
      x,
      A,
      P = u.type;

  if (void 0 !== u.constructor) return null;
  (a = n.__b) && a(u);

  try {
    n: if ("function" == typeof P) {
      if (m = u.props, b = (a = P.contextType) && t[a.__c], x = a ? b ? b.props.value : a.__ : t, i.__c ? k = (v = u.__c = i.__c).__ = v.__E : ("prototype" in P && P.prototype.render ? u.__c = v = new P(m, x) : (u.__c = v = new d(m, x), v.constructor = P, v.render = L), b && b.sub(v), v.props = m, v.state || (v.state = {}), v.context = x, v.__n = t, h = v.__d = !0, v.__h = []), null == v.__s && (v.__s = v.state), null != P.getDerivedStateFromProps && (v.__s == v.state && (v.__s = s({}, v.__s)), s(v.__s, P.getDerivedStateFromProps(m, v.__s))), y = v.props, _ = v.state, h) null == P.getDerivedStateFromProps && null != v.componentWillMount && v.componentWillMount(), null != v.componentDidMount && v.__h.push(v.componentDidMount);else {
        if (null == P.getDerivedStateFromProps && m !== y && null != v.componentWillReceiveProps && v.componentWillReceiveProps(m, x), !v.__e && null != v.shouldComponentUpdate && !1 === v.shouldComponentUpdate(m, v.__s, x) || u.__v === i.__v) {
          v.props = m, v.state = v.__s, u.__v !== i.__v && (v.__d = !1), v.__v = u, u.__e = i.__e, u.__k = i.__k, v.__h.length && f.push(v), N(u, e, l);
          break n;
        }

        null != v.componentWillUpdate && v.componentWillUpdate(m, v.__s, x), null != v.componentDidUpdate && v.__h.push(function () {
          v.componentDidUpdate(y, _, w);
        });
      }
      v.context = x, v.props = m, v.state = v.__s, (a = n.__r) && a(u), v.__d = !1, v.__v = u, v.__P = l, a = v.render(v.props, v.state, v.context), v.state = v.__s, null != v.getChildContext && (t = s(s({}, t), v.getChildContext())), h || null == v.getSnapshotBeforeUpdate || (w = v.getSnapshotBeforeUpdate(y, _)), A = null != a && a.type == p && null == a.key ? a.props.children : a, g(l, Array.isArray(A) ? A : [A], u, i, t, o, r, f, e, c), v.base = u.__e, v.__h.length && f.push(v), k && (v.__E = v.__ = null), v.__e = !1;
    } else null == r && u.__v === i.__v ? (u.__k = i.__k, u.__e = i.__e) : u.__e = j(i.__e, u, i, t, o, r, f, c);

    (a = n.diffed) && a(u);
  } catch (l) {
    u.__v = null, n.__e(l, u, i);
  }

  return u.__e;
}

function $(l, u) {
  n.__c && n.__c(u, l), l.some(function (u) {
    try {
      l = u.__h, u.__h = [], l.some(function (n) {
        n.call(u);
      });
    } catch (l) {
      n.__e(l, u.__v);
    }
  });
}

function j(n, l, u, i, t, o, r, c) {
  var s,
      a,
      v,
      h,
      y,
      p = u.props,
      d = l.props;
  if (t = "svg" === l.type || t, null != o) for (s = 0; s < o.length; s++) if (null != (a = o[s]) && ((null === l.type ? 3 === a.nodeType : a.localName === l.type) || n == a)) {
    n = a, o[s] = null;
    break;
  }

  if (null == n) {
    if (null === l.type) return document.createTextNode(d);
    n = t ? document.createElementNS("http://www.w3.org/2000/svg", l.type) : document.createElement(l.type, d.is && {
      is: d.is
    }), o = null, c = !1;
  }

  if (null === l.type) p !== d && n.data !== d && (n.data = d);else {
    if (null != o && (o = e.slice.call(n.childNodes)), v = (p = u.props || f).dangerouslySetInnerHTML, h = d.dangerouslySetInnerHTML, !c) {
      if (null != o) for (p = {}, y = 0; y < n.attributes.length; y++) p[n.attributes[y].name] = n.attributes[y].value;
      (h || v) && (h && v && h.__html == v.__html || (n.innerHTML = h && h.__html || ""));
    }

    A(n, d, p, t, c), h ? l.__k = [] : (s = l.props.children, g(n, Array.isArray(s) ? s : [s], l, u, i, "foreignObject" !== l.type && t, o, r, f, c)), c || ("value" in d && void 0 !== (s = d.value) && s !== n.value && C(n, "value", s, p.value, !1), "checked" in d && void 0 !== (s = d.checked) && s !== n.checked && C(n, "checked", s, p.checked, !1));
  }
  return n;
}

function H(l, u, i) {
  try {
    "function" == typeof l ? l(u) : l.current = u;
  } catch (l) {
    n.__e(l, i);
  }
}

function I(l, u, i) {
  var t, o, r;

  if (n.unmount && n.unmount(l), (t = l.ref) && (t.current && t.current !== l.__e || H(t, null, u)), i || "function" == typeof l.type || (i = null != (o = l.__e)), l.__e = l.__d = void 0, null != (t = l.__c)) {
    if (t.componentWillUnmount) try {
      t.componentWillUnmount();
    } catch (l) {
      n.__e(l, u);
    }
    t.base = t.__P = null;
  }

  if (t = l.__k) for (r = 0; r < t.length; r++) t[r] && I(t[r], u, i);
  null != o && a(o);
}

function L(n, l, u) {
  return this.constructor(n, u);
}

function M(l, u, i) {
  var t, r, c;
  n.__ && n.__(l, u), r = (t = i === o) ? null : i && i.__k || u.__k, l = v(p, null, [l]), c = [], T(u, (t ? u : i || u).__k = l, r || f, f, void 0 !== u.ownerSVGElement, i && !t ? [i] : r ? null : u.childNodes.length ? e.slice.call(u.childNodes) : null, c, i || f, t), $(c, l);
}

function O(n, l) {
  M(n, l, o);
}

function S(n, l, u) {
  var i,
      t,
      o,
      r = arguments,
      f = s({}, n.props);

  for (o in l) "key" == o ? i = l[o] : "ref" == o ? t = l[o] : f[o] = l[o];

  if (arguments.length > 3) for (u = [u], o = 3; o < arguments.length; o++) u.push(r[o]);
  return null != u && (f.children = u), h(n.type, f, i || n.key, t || n.ref, null);
}

function q(n, l) {
  var u = {
    __c: l = "__cC" + r++,
    __: n,
    Consumer: function (n, l) {
      return n.children(l);
    },
    Provider: function (n, u, i) {
      return this.getChildContext || (u = [], (i = {})[l] = this, this.getChildContext = function () {
        return i;
      }, this.shouldComponentUpdate = function (n) {
        this.props.value !== n.value && u.some(k);
      }, this.sub = function (n) {
        u.push(n);
        var l = n.componentWillUnmount;

        n.componentWillUnmount = function () {
          u.splice(u.indexOf(n), 1), l && l.call(n);
        };
      }), n.children;
    }
  };
  return u.Provider.__ = u.Consumer.contextType = u;
}

exports.options = n = {
  __e: function (n, l) {
    for (var u, i; l = l.__;) if ((u = l.__c) && !u.__) try {
      if (u.constructor && null != u.constructor.getDerivedStateFromError && (i = !0, u.setState(u.constructor.getDerivedStateFromError(n))), null != u.componentDidCatch && (i = !0, u.componentDidCatch(n)), i) return k(u.__E = u);
    } catch (l) {
      n = l;
    }

    throw n;
  }
}, exports.isValidElement = l = function (n) {
  return null != n && void 0 === n.constructor;
}, d.prototype.setState = function (n, l) {
  var u;
  u = null != this.__s && this.__s !== this.state ? this.__s : this.__s = s({}, this.state), "function" == typeof n && (n = n(s({}, u), this.props)), n && s(u, n), null != n && this.__v && (l && this.__h.push(l), k(this));
}, d.prototype.forceUpdate = function (n) {
  this.__v && (this.__e = !0, n && this.__h.push(n), k(this));
}, d.prototype.render = p, u = [], i = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, m.__r = 0, o = f, r = 0;
},{}],"node_modules/regenerator-runtime/runtime.js":[function(require,module,exports) {
var define;
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
  typeof module === "object" ? module.exports : {}
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}

},{}],"node_modules/preact/hooks/dist/hooks.module.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useState = m;
exports.useReducer = p;
exports.useEffect = y;
exports.useLayoutEffect = l;
exports.useRef = h;
exports.useImperativeHandle = s;
exports.useMemo = _;
exports.useCallback = A;
exports.useContext = F;
exports.useDebugValue = T;
exports.useErrorBoundary = d;

var _preact = require("preact");

var t,
    u,
    r,
    o = 0,
    i = [],
    c = _preact.options.__r,
    f = _preact.options.diffed,
    e = _preact.options.__c,
    a = _preact.options.unmount;

function v(t, r) {
  _preact.options.__h && _preact.options.__h(u, t, o || r), o = 0;
  var i = u.__H || (u.__H = {
    __: [],
    __h: []
  });
  return t >= i.__.length && i.__.push({}), i.__[t];
}

function m(n) {
  return o = 1, p(k, n);
}

function p(n, r, o) {
  var i = v(t++, 2);
  return i.t = n, i.__c || (i.__c = u, i.__ = [o ? o(r) : k(void 0, r), function (n) {
    var t = i.t(i.__[0], n);
    i.__[0] !== t && (i.__ = [t, i.__[1]], i.__c.setState({}));
  }]), i.__;
}

function y(r, o) {
  var i = v(t++, 3);
  !_preact.options.__s && j(i.__H, o) && (i.__ = r, i.__H = o, u.__H.__h.push(i));
}

function l(r, o) {
  var i = v(t++, 4);
  !_preact.options.__s && j(i.__H, o) && (i.__ = r, i.__H = o, u.__h.push(i));
}

function h(n) {
  return o = 5, _(function () {
    return {
      current: n
    };
  }, []);
}

function s(n, t, u) {
  o = 6, l(function () {
    "function" == typeof n ? n(t()) : n && (n.current = t());
  }, null == u ? u : u.concat(n));
}

function _(n, u) {
  var r = v(t++, 7);
  return j(r.__H, u) ? (r.__H = u, r.__h = n, r.__ = n()) : r.__;
}

function A(n, t) {
  return o = 8, _(function () {
    return n;
  }, t);
}

function F(n) {
  var r = u.context[n.__c],
      o = v(t++, 9);
  return o.__c = n, r ? (null == o.__ && (o.__ = !0, r.sub(u)), r.props.value) : n.__;
}

function T(t, u) {
  _preact.options.useDebugValue && _preact.options.useDebugValue(u ? u(t) : t);
}

function d(n) {
  var r = v(t++, 10),
      o = m();
  return r.__ = n, u.componentDidCatch || (u.componentDidCatch = function (n) {
    r.__ && r.__(n), o[1](n);
  }), [o[0], function () {
    o[1](void 0);
  }];
}

function q() {
  i.some(function (t) {
    if (t.__P) try {
      t.__H.__h.forEach(b), t.__H.__h.forEach(g), t.__H.__h = [];
    } catch (u) {
      return t.__H.__h = [], _preact.options.__e(u, t.__v), !0;
    }
  }), i = [];
}

_preact.options.__r = function (n) {
  c && c(n), t = 0;
  var r = (u = n.__c).__H;
  r && (r.__h.forEach(b), r.__h.forEach(g), r.__h = []);
}, _preact.options.diffed = function (t) {
  f && f(t);
  var u = t.__c;
  u && u.__H && u.__H.__h.length && (1 !== i.push(u) && r === _preact.options.requestAnimationFrame || ((r = _preact.options.requestAnimationFrame) || function (n) {
    var t,
        u = function () {
      clearTimeout(r), x && cancelAnimationFrame(t), setTimeout(n);
    },
        r = setTimeout(u, 100);

    x && (t = requestAnimationFrame(u));
  })(q));
}, _preact.options.__c = function (t, u) {
  u.some(function (t) {
    try {
      t.__h.forEach(b), t.__h = t.__h.filter(function (n) {
        return !n.__ || g(n);
      });
    } catch (r) {
      u.some(function (n) {
        n.__h && (n.__h = []);
      }), u = [], _preact.options.__e(r, t.__v);
    }
  }), e && e(t, u);
}, _preact.options.unmount = function (t) {
  a && a(t);
  var u = t.__c;
  if (u && u.__H) try {
    u.__H.__.forEach(b);
  } catch (t) {
    _preact.options.__e(t, u.__v);
  }
};
var x = "function" == typeof requestAnimationFrame;

function b(n) {
  "function" == typeof n.u && n.u();
}

function g(n) {
  n.u = n.__();
}

function j(n, t) {
  return !n || t.some(function (t, u) {
    return t !== n[u];
  });
}

function k(n, t) {
  return "function" == typeof t ? t(n) : t;
}
},{"preact":"node_modules/preact/dist/preact.module.js"}],"node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"src/App.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
module.exports = {
  "app": "_app_53670",
  "backgroundContainer": "_backgroundContainer_53670",
  "background": "_background_53670",
  "banjoJaceWrapper": "_banjoJaceWrapper_53670",
  "banjoJace": "_banjoJace_53670",
  "pageWrapper": "_pageWrapper_53670",
  "contentContainer": "_contentContainer_53670",
  "menu": "_menu_53670"
};
},{"/Users/troychryssos/Development/projects/banjo-mtg-preact/src/static/images/sm.png":[["sm.7a91bf12.png","src/static/images/sm.png"],"src/static/images/sm.png"],"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/logic/contexts/card.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _preact = require("preact");

var CardContext = (0, _preact.createContext)({
  cardData: {},
  cardError: '',
  setCardError: function setCardError() {},
  setCardData: function setCardData() {}
});
var _default = CardContext;
exports.default = _default;
},{"preact":"node_modules/preact/dist/preact.module.js"}],"src/logic/contexts/character.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _preact = require("preact");

var CharacterContext = (0, _preact.createContext)({
  character: '',
  setCharacter: function setCharacter() {}
});
var _default = CharacterContext;
exports.default = _default;
},{"preact":"node_modules/preact/dist/preact.module.js"}],"src/logic/contexts/browser.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _preact = require("preact");

var BrowserContext = (0, _preact.createContext)({
  browser: ''
});
var _default = BrowserContext;
exports.default = _default;
},{"preact":"node_modules/preact/dist/preact.module.js"}],"src/static/audio/banjo_hi.wav":[function(require,module,exports) {
module.exports = "/banjo_hi.e555f31e.wav";
},{}],"src/static/audio/banjo_mid.wav":[function(require,module,exports) {
module.exports = "/banjo_mid.f0b8013d.wav";
},{}],"src/static/audio/banjo_lo.wav":[function(require,module,exports) {
module.exports = "/banjo_lo.f1aa99e5.wav";
},{}],"src/static/images/banjo_icon.png":[function(require,module,exports) {
module.exports = "/banjo_icon.dccd01c5.png";
},{}],"src/static/images/banjo_ani.webp":[function(require,module,exports) {
module.exports = "/banjo_ani.8a5e69e2.webp";
},{}],"src/static/audio/kazooie_hi.wav":[function(require,module,exports) {
module.exports = "/kazooie_hi.9d131f07.wav";
},{}],"src/static/audio/kazooie_mid.wav":[function(require,module,exports) {
module.exports = "/kazooie_mid.45807b93.wav";
},{}],"src/static/audio/kazooie_lo.wav":[function(require,module,exports) {
module.exports = "/kazooie_lo.82dde0e9.wav";
},{}],"src/static/images/kazooie_icon.png":[function(require,module,exports) {
module.exports = "/kazooie_icon.d531683e.png";
},{}],"src/static/images/kazooie_ani.webp":[function(require,module,exports) {
module.exports = "/kazooie_ani.bf5304f5.webp";
},{}],"src/static/audio/grunty_hi.wav":[function(require,module,exports) {
module.exports = "/grunty_hi.dc3e0b95.wav";
},{}],"src/static/audio/grunty_mid.wav":[function(require,module,exports) {
module.exports = "/grunty_mid.fa0cedd3.wav";
},{}],"src/static/audio/grunty_lo.wav":[function(require,module,exports) {
module.exports = "/grunty_lo.c6cb1383.wav";
},{}],"src/static/images/grunty_icon.png":[function(require,module,exports) {
module.exports = "/grunty_icon.de35c3b7.png";
},{}],"src/static/images/grunty_ani.webp":[function(require,module,exports) {
module.exports = "/grunty_ani.c92a68b7.webp";
},{}],"src/constants/character.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CHARACTER_DATA = exports.GRUNTILDA = exports.KAZOOIE = exports.BANJO = void 0;

var _banjo_hi = _interopRequireDefault(require("ttt/static/audio/banjo_hi.wav"));

var _banjo_mid = _interopRequireDefault(require("ttt/static/audio/banjo_mid.wav"));

var _banjo_lo = _interopRequireDefault(require("ttt/static/audio/banjo_lo.wav"));

var _banjo_icon = _interopRequireDefault(require("ttt/static/images/banjo_icon.png"));

var _banjo_ani = _interopRequireDefault(require("ttt/static/images/banjo_ani.webp"));

var _kazooie_hi = _interopRequireDefault(require("ttt/static/audio/kazooie_hi.wav"));

var _kazooie_mid = _interopRequireDefault(require("ttt/static/audio/kazooie_mid.wav"));

var _kazooie_lo = _interopRequireDefault(require("ttt/static/audio/kazooie_lo.wav"));

var _kazooie_icon = _interopRequireDefault(require("ttt/static/images/kazooie_icon.png"));

var _kazooie_ani = _interopRequireDefault(require("ttt/static/images/kazooie_ani.webp"));

var _grunty_hi = _interopRequireDefault(require("ttt/static/audio/grunty_hi.wav"));

var _grunty_mid = _interopRequireDefault(require("ttt/static/audio/grunty_mid.wav"));

var _grunty_lo = _interopRequireDefault(require("ttt/static/audio/grunty_lo.wav"));

var _grunty_icon = _interopRequireDefault(require("ttt/static/images/grunty_icon.png"));

var _grunty_ani = _interopRequireDefault(require("ttt/static/images/grunty_ani.webp"));

var _CHARACTER_DATA;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var BANJO = 'banjo';
exports.BANJO = BANJO;
var KAZOOIE = 'kazooie';
exports.KAZOOIE = KAZOOIE;
var GRUNTILDA = 'gruntilda';
exports.GRUNTILDA = GRUNTILDA;
var CHARACTER_DATA = (_CHARACTER_DATA = {}, _defineProperty(_CHARACTER_DATA, BANJO, {
  name: BANJO,
  audio: {
    hi: _banjo_hi.default,
    mid: _banjo_mid.default,
    low: _banjo_lo.default
  },
  icon: _banjo_icon.default,
  animated: _banjo_ani.default
}), _defineProperty(_CHARACTER_DATA, KAZOOIE, {
  name: KAZOOIE,
  audio: {
    hi: _kazooie_hi.default,
    mid: _kazooie_mid.default,
    low: _kazooie_lo.default
  },
  icon: _kazooie_icon.default,
  animated: _kazooie_ani.default
}), _defineProperty(_CHARACTER_DATA, GRUNTILDA, {
  name: GRUNTILDA,
  audio: {
    hi: _grunty_hi.default,
    mid: _grunty_mid.default,
    low: _grunty_lo.default
  },
  icon: _grunty_icon.default,
  animated: _grunty_ani.default
}), _CHARACTER_DATA);
exports.CHARACTER_DATA = CHARACTER_DATA;
},{"ttt/static/audio/banjo_hi.wav":"src/static/audio/banjo_hi.wav","ttt/static/audio/banjo_mid.wav":"src/static/audio/banjo_mid.wav","ttt/static/audio/banjo_lo.wav":"src/static/audio/banjo_lo.wav","ttt/static/images/banjo_icon.png":"src/static/images/banjo_icon.png","ttt/static/images/banjo_ani.webp":"src/static/images/banjo_ani.webp","ttt/static/audio/kazooie_hi.wav":"src/static/audio/kazooie_hi.wav","ttt/static/audio/kazooie_mid.wav":"src/static/audio/kazooie_mid.wav","ttt/static/audio/kazooie_lo.wav":"src/static/audio/kazooie_lo.wav","ttt/static/images/kazooie_icon.png":"src/static/images/kazooie_icon.png","ttt/static/images/kazooie_ani.webp":"src/static/images/kazooie_ani.webp","ttt/static/audio/grunty_hi.wav":"src/static/audio/grunty_hi.wav","ttt/static/audio/grunty_mid.wav":"src/static/audio/grunty_mid.wav","ttt/static/audio/grunty_lo.wav":"src/static/audio/grunty_lo.wav","ttt/static/images/grunty_icon.png":"src/static/images/grunty_icon.png","ttt/static/images/grunty_ani.webp":"src/static/images/grunty_ani.webp"}],"src/constants/browser.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UNSUPPORTED = exports.EDGE = exports.FIREFOX = exports.SAFARI = exports.CHROME = void 0;
var CHROME = 'chrome';
exports.CHROME = CHROME;
var SAFARI = 'safari';
exports.SAFARI = SAFARI;
var FIREFOX = 'firefox';
exports.FIREFOX = FIREFOX;
var EDGE = 'edge';
exports.EDGE = EDGE;
var UNSUPPORTED = 'unsupported';
exports.UNSUPPORTED = UNSUPPORTED;
},{}],"src/components/Provider/Provider.jsx":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _preact = require("preact");

var _hooks = require("preact/hooks");

var _card = _interopRequireDefault(require("ttt/logic/contexts/card"));

var _character = _interopRequireDefault(require("ttt/logic/contexts/character"));

var _browser = _interopRequireDefault(require("ttt/logic/contexts/browser"));

var _character2 = require("ttt/constants/character");

var _browser2 = require("ttt/constants/browser");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Provider = function Provider(_ref) {
  var children = _ref.children;

  var _useState = (0, _hooks.useState)(),
      _useState2 = _slicedToArray(_useState, 2),
      cardData = _useState2[0],
      setCardData = _useState2[1];

  var _useState3 = (0, _hooks.useState)(''),
      _useState4 = _slicedToArray(_useState3, 2),
      cardError = _useState4[0],
      setCardError = _useState4[1];

  var _useState5 = (0, _hooks.useState)(_character2.BANJO),
      _useState6 = _slicedToArray(_useState5, 2),
      character = _useState6[0],
      setCharacter = _useState6[1];

  var _useState7 = (0, _hooks.useState)(''),
      _useState8 = _slicedToArray(_useState7, 2),
      browser = _useState8[0],
      setBrowser = _useState8[1];

  var _navigator = navigator,
      _navigator$userAgent = _navigator.userAgent,
      userAgent = _navigator$userAgent === void 0 ? '' : _navigator$userAgent,
      _navigator$vendor = _navigator.vendor,
      vendor = _navigator$vendor === void 0 ? '' : _navigator$vendor;
  var lUserAgent = userAgent.toLowerCase();

  if (lUserAgent.includes('firefox')) {
    setBrowser(_browser2.FIREFOX);
  } else if (lUserAgent.includes('edg/')) {
    setBrowser(_browser2.EDGE);
  } else if (vendor.toLowerCase().includes('apple')) {
    setBrowser(_browser2.SAFARI);
  } else if (lUserAgent.includes('chrome')) {
    setBrowser(_browser2.CHROME);
  } else {
    setBrowser(_browser2.UNSUPPORTED);
  }

  return (0, _preact.h)(_browser.default.Provider, {
    value: {
      browser: browser
    }
  }, (0, _preact.h)(_card.default.Provider, {
    value: {
      cardData: cardData,
      setCardData: setCardData,
      cardError: cardError,
      setCardError: setCardError
    }
  }, (0, _preact.h)(_character.default.Provider, {
    value: {
      character: character,
      setCharacter: setCharacter
    }
  }, children)));
};

var _default = Provider;
exports.default = _default;
},{"preact":"node_modules/preact/dist/preact.module.js","preact/hooks":"node_modules/preact/hooks/dist/hooks.module.js","ttt/logic/contexts/card":"src/logic/contexts/card.js","ttt/logic/contexts/character":"src/logic/contexts/character.js","ttt/logic/contexts/browser":"src/logic/contexts/browser.js","ttt/constants/character":"src/constants/character.js","ttt/constants/browser":"src/constants/browser.js"}],"src/components/Provider/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Provider = _interopRequireDefault(require("./Provider"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _Provider.default;
exports.default = _default;
},{"./Provider":"src/components/Provider/Provider.jsx"}],"src/components/Image/Image.jsx":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _preact = require("preact");

var Image = function Image(_ref) {
  var src = _ref.src,
      _ref$alt = _ref.alt,
      alt = _ref$alt === void 0 ? '' : _ref$alt,
      className = _ref.className;
  return (0, _preact.h)("img", {
    src: src,
    className: className,
    alt: alt
  });
};

var _default = Image;
exports.default = _default;
},{"preact":"node_modules/preact/dist/preact.module.js"}],"src/components/Image/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Image = _interopRequireDefault(require("./Image"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _Image.default;
exports.default = _default;
},{"./Image":"src/components/Image/Image.jsx"}],"src/components/icons/Icon/Icon.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
module.exports = {
  "svg": "_svg_31153"
};
},{"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/components/icons/Icon/Icon.jsx":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _preact = require("preact");

var classes = _interopRequireWildcard(require("./Icon.css"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Icon = function Icon(_ref) {
  var _ref$viewBox = _ref.viewBox,
      viewBox = _ref$viewBox === void 0 ? '0 0 24 24' : _ref$viewBox,
      className = _ref.className,
      children = _ref.children;
  return (0, _preact.h)("svg", {
    className: "".concat(className, " ").concat(classes.svg),
    viewBox: viewBox,
    xmlns: "http://www.w3.org/2000/svg"
  }, children);
};

var _default = Icon;
exports.default = _default;
},{"preact":"node_modules/preact/dist/preact.module.js","./Icon.css":"src/components/icons/Icon/Icon.css"}],"src/components/icons/Icon/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Icon = _interopRequireDefault(require("./Icon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _Icon.default;
exports.default = _default;
},{"./Icon":"src/components/icons/Icon/Icon.jsx"}],"src/components/icons/Loading/Loading.jsx":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _preact = require("preact");

var _Icon = _interopRequireDefault(require("ttt/components/icons/Icon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Loading = function Loading(_ref) {
  var className = _ref.className;
  return (0, _preact.h)(_Icon.default, {
    className: className
  }, (0, _preact.h)("path", {
    d: "M12,4V2A10,10 0 0,0 2,12H4A8,8 0 0,1 12,4Z",
    fill: "#fff"
  }));
};

var _default = Loading;
exports.default = _default;
},{"preact":"node_modules/preact/dist/preact.module.js","ttt/components/icons/Icon":"src/components/icons/Icon/index.js"}],"src/components/icons/Loading/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Loading = _interopRequireDefault(require("./Loading"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _Loading.default;
exports.default = _default;
},{"./Loading":"src/components/icons/Loading/Loading.jsx"}],"src/components/typography/Body/Body.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
module.exports = {
  "body": "_body_73aad"
};
},{"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/components/typography/Body/Body.jsx":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _preact = require("preact");

var classes = _interopRequireWildcard(require("./Body.css"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Body = function Body(_ref) {
  var children = _ref.children,
      className = _ref.className;
  return (0, _preact.h)("p", {
    className: "".concat(className, " ").concat(classes.body)
  }, children);
};

var _default = Body;
exports.default = _default;
},{"preact":"node_modules/preact/dist/preact.module.js","./Body.css":"src/components/typography/Body/Body.css"}],"src/components/typography/Body/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Body = _interopRequireDefault(require("./Body"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _Body.default;
exports.default = _default;
},{"./Body":"src/components/typography/Body/Body.jsx"}],"src/static/audio/banjo_fail.wav":[function(require,module,exports) {
module.exports = "/banjo_fail.95314fca.wav";
},{}],"src/logic/speech.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.speakAndSet = exports.safariAudioSetup = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// START - SETUP - START
var safariAudioSetup = function safariAudioSetup() {
  // Safari audio is choppy unless audio context is created
  // See https://stackoverflow.com/a/54119854
  var AudioContext = window.AudioContext || window.webkitAudioContext;

  if (AudioContext) {
    new AudioContext();
  }
  /*
  	Safari (and maybe other browsers) don't allow auto-play unmuted audio.
  	In this case, loading and playing audio files after an async fetch counts as
  	auto-play.
  		We can get around this by creating and playing an audio object in response to
  	any button press (in this case, the search button press).
  	Once a user has "allowed" audio playback, all future audio will play fine.
  		Firefox throws a warning about trying to load and play audio from an invalid
  	src but runs just fine, and every other browser complains about trying to work around
  	that, so I'm just letting it fly
  */


  new Audio().play();
}; // END - SETUP - END
// START - AUDIO PLAYBACK - START


exports.safariAudioSetup = safariAudioSetup;

var playAudio = function playAudio(audio, audioArray) {
  // This pauses any playing audio before playback of the next sample
  // which allows us to speed up sample playback more naturally.
  audioArray.forEach(function (sample) {
    sample.pause();
  });
  audio.currentTime = 0;
  audio.play();
}; // END - AUDIO PLAYBACK - END
// START - SYLLABLE - START
// Overall, this function works 'okay' ¯\_(ツ)_/¯


var syllableBreaker = function syllableBreaker(word) {
  word = word.toLowerCase();
  var oneSyl = ['fff'];

  if (word.length <= 4) {
    return oneSyl;
  } // The following lines replace all characters that aren't
  // (commonly) syllable breakpoints with empty strings
  // leaving us with a string of syllable break vowels


  word = word.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '');
  word = word.replace(/^y/, ''); // The following line makes sure that of the remaining vowels
  // we chunk on a maximum of two at a time

  var parsedSyllables = word.match(/[aeiouy]{1,2}/g);
  return parsedSyllables || oneSyl;
};

var syllableWordChunker = function syllableWordChunker(word) {
  var wordChunkObj = {
    remainingWord: word,
    chunkedWord: []
  };
  var sylBreaks = syllableBreaker(word);
  wordChunkObj = sylBreaks.reduce(function (wordObj, syllableBreak) {
    // This builds a regex which selects a substring
    // up to and including the first instance of the current syllable break point
    var regex = new RegExp("(^[^".concat(syllableBreak, "]*").concat(syllableBreak, ")"));
    var split = []; // This filter removes empty strings created when the regex test
    // splits up a string on the first character

    if (wordObj.remainingWord) {
      split = wordObj.remainingWord.split(regex).filter(function (x) {
        return x;
      });
    }

    return {
      remainingWord: split[1],
      chunkedWord: [].concat(_toConsumableArray(wordObj.chunkedWord), [split[0]])
    };
  }, wordChunkObj);
  wordChunkObj.chunkedWord.push(wordChunkObj.remainingWord); // This filter removes falsey values pushed on the line above

  return wordChunkObj.chunkedWord.filter(function (x) {
    return x;
  });
};

var playSyllablePushWord = function playSyllablePushWord(_ref) {
  var syllables = _ref.syllables,
      audioArray = _ref.audioArray,
      syllableTimeoutsRef = _ref.syllableTimeoutsRef,
      textRef = _ref.textRef,
      setDisplayText = _ref.setDisplayText,
      setIsSpeaking = _ref.setIsSpeaking,
      isLastWord = _ref.isLastWord,
      audioSpeed = _ref.audioSpeed;
  var avgDuration = audioArray.reduce(function (acc, cur) {
    return acc += cur.duration;
  }, 0) / audioArray.length;
  audioArray.forEach(function (audio, i) {
    syllableTimeoutsRef.current.push(setTimeout(function () {
      playAudio(audio, audioArray);
      var newText = "".concat(textRef.current).concat(syllables[i]); // add a space if this is the last time through the loop
      // aka the end of the word

      if (i === audioArray.length - 1) {
        newText = "".concat(newText, " ");

        if (isLastWord) {
          setIsSpeaking(false);
        }
      }

      textRef.current = newText;
      setDisplayText(newText);
    }, i * avgDuration * audioSpeed));
  });
}; // END - SYLLABLE - END


var samplePicker = function samplePicker(voiceArray) {
  return voiceArray[Math.floor(Math.random() * voiceArray.length)];
};

var speakAndSet = function speakAndSet(_ref2) {
  var responseText = _ref2.responseText,
      textRef = _ref2.textRef,
      voiceArray = _ref2.voiceArray,
      syllableTimeoutsRef = _ref2.syllableTimeoutsRef,
      setDisplayText = _ref2.setDisplayText,
      wordTimeoutsRef = _ref2.wordTimeoutsRef,
      setIsSpeaking = _ref2.setIsSpeaking,
      _ref2$audioSpeed = _ref2.audioSpeed,
      audioSpeed = _ref2$audioSpeed === void 0 ? 850 : _ref2$audioSpeed;
  setIsSpeaking(true);
  var words = responseText.split(/\s/);
  var speechPause = 0;
  words.forEach(function (word, i) {
    /*
    	1) Get an array of the given word's syllable break points
    	2) Get an array consisting of one audio sample per syllable
    	3) Add the durations of these audio samples together.
    		(The durations are in seconds, so convert to milliseconds)
    	4) Create a timeout function that plays audio samples and writes the words to the page.
    		This is delayed by the current total audio duration of all samples for all words preceeding,
    		so that each word is added and played in order.
    		Push this timeout into the appropriate timeout array.
    	5) Update the timeout timer for the next iteration with this word's audio duration.
    */
    var syllables = syllableWordChunker(word);
    var audioArray = syllables.map(function () {
      return samplePicker(voiceArray);
    });
    var audioDuration = Math.ceil(audioArray.reduce(function (totalTime, audioObj) {
      return totalTime += audioObj.duration * audioSpeed;
    }, 0));
    wordTimeoutsRef.current.push(setTimeout(function () {
      var isLastWord = i === words.length - 1;
      playSyllablePushWord({
        syllables: syllables,
        audioArray: audioArray,
        syllableTimeoutsRef: syllableTimeoutsRef,
        textRef: textRef,
        setDisplayText: setDisplayText,
        setIsSpeaking: setIsSpeaking,
        isLastWord: isLastWord,
        audioSpeed: audioSpeed
      });
    }, speechPause));
    speechPause += audioDuration;
  });
};

exports.speakAndSet = speakAndSet;
},{}],"node_modules/ramda/src/internal/_isPlaceholder.js":[function(require,module,exports) {
function _isPlaceholder(a) {
  return a != null && typeof a === 'object' && a['@@functional/placeholder'] === true;
}

module.exports = _isPlaceholder;
},{}],"node_modules/ramda/src/internal/_curry1.js":[function(require,module,exports) {
var _isPlaceholder =
/*#__PURE__*/
require("./_isPlaceholder");
/**
 * Optimized internal one-arity curry function.
 *
 * @private
 * @category Function
 * @param {Function} fn The function to curry.
 * @return {Function} The curried function.
 */


function _curry1(fn) {
  return function f1(a) {
    if (arguments.length === 0 || _isPlaceholder(a)) {
      return f1;
    } else {
      return fn.apply(this, arguments);
    }
  };
}

module.exports = _curry1;
},{"./_isPlaceholder":"node_modules/ramda/src/internal/_isPlaceholder.js"}],"node_modules/ramda/src/internal/_curry2.js":[function(require,module,exports) {
var _curry1 =
/*#__PURE__*/
require("./_curry1");

var _isPlaceholder =
/*#__PURE__*/
require("./_isPlaceholder");
/**
 * Optimized internal two-arity curry function.
 *
 * @private
 * @category Function
 * @param {Function} fn The function to curry.
 * @return {Function} The curried function.
 */


function _curry2(fn) {
  return function f2(a, b) {
    switch (arguments.length) {
      case 0:
        return f2;

      case 1:
        return _isPlaceholder(a) ? f2 : _curry1(function (_b) {
          return fn(a, _b);
        });

      default:
        return _isPlaceholder(a) && _isPlaceholder(b) ? f2 : _isPlaceholder(a) ? _curry1(function (_a) {
          return fn(_a, b);
        }) : _isPlaceholder(b) ? _curry1(function (_b) {
          return fn(a, _b);
        }) : fn(a, b);
    }
  };
}

module.exports = _curry2;
},{"./_curry1":"node_modules/ramda/src/internal/_curry1.js","./_isPlaceholder":"node_modules/ramda/src/internal/_isPlaceholder.js"}],"node_modules/ramda/src/internal/_isArray.js":[function(require,module,exports) {
/**
 * Tests whether or not an object is an array.
 *
 * @private
 * @param {*} val The object to test.
 * @return {Boolean} `true` if `val` is an array, `false` otherwise.
 * @example
 *
 *      _isArray([]); //=> true
 *      _isArray(null); //=> false
 *      _isArray({}); //=> false
 */
module.exports = Array.isArray || function _isArray(val) {
  return val != null && val.length >= 0 && Object.prototype.toString.call(val) === '[object Array]';
};
},{}],"node_modules/ramda/src/internal/_isFunction.js":[function(require,module,exports) {
function _isFunction(x) {
  var type = Object.prototype.toString.call(x);
  return type === '[object Function]' || type === '[object AsyncFunction]' || type === '[object GeneratorFunction]' || type === '[object AsyncGeneratorFunction]';
}

module.exports = _isFunction;
},{}],"node_modules/ramda/src/internal/_isString.js":[function(require,module,exports) {
function _isString(x) {
  return Object.prototype.toString.call(x) === '[object String]';
}

module.exports = _isString;
},{}],"node_modules/ramda/src/internal/_arrayFromIterator.js":[function(require,module,exports) {
function _arrayFromIterator(iter) {
  var list = [];
  var next;

  while (!(next = iter.next()).done) {
    list.push(next.value);
  }

  return list;
}

module.exports = _arrayFromIterator;
},{}],"node_modules/ramda/src/internal/_includesWith.js":[function(require,module,exports) {
function _includesWith(pred, x, list) {
  var idx = 0;
  var len = list.length;

  while (idx < len) {
    if (pred(x, list[idx])) {
      return true;
    }

    idx += 1;
  }

  return false;
}

module.exports = _includesWith;
},{}],"node_modules/ramda/src/internal/_functionName.js":[function(require,module,exports) {
function _functionName(f) {
  // String(x => x) evaluates to "x => x", so the pattern may not match.
  var match = String(f).match(/^function (\w*)/);
  return match == null ? '' : match[1];
}

module.exports = _functionName;
},{}],"node_modules/ramda/src/internal/_has.js":[function(require,module,exports) {
function _has(prop, obj) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = _has;
},{}],"node_modules/ramda/src/internal/_objectIs.js":[function(require,module,exports) {
// Based on https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
function _objectIs(a, b) {
  // SameValue algorithm
  if (a === b) {
    // Steps 1-5, 7-10
    // Steps 6.b-6.e: +0 != -0
    return a !== 0 || 1 / a === 1 / b;
  } else {
    // Step 6.a: NaN == NaN
    return a !== a && b !== b;
  }
}

module.exports = typeof Object.is === 'function' ? Object.is : _objectIs;
},{}],"node_modules/ramda/src/internal/_isArguments.js":[function(require,module,exports) {
var _has =
/*#__PURE__*/
require("./_has");

var toString = Object.prototype.toString;

var _isArguments =
/*#__PURE__*/
function () {
  return toString.call(arguments) === '[object Arguments]' ? function _isArguments(x) {
    return toString.call(x) === '[object Arguments]';
  } : function _isArguments(x) {
    return _has('callee', x);
  };
}();

module.exports = _isArguments;
},{"./_has":"node_modules/ramda/src/internal/_has.js"}],"node_modules/ramda/src/keys.js":[function(require,module,exports) {
var _curry1 =
/*#__PURE__*/
require("./internal/_curry1");

var _has =
/*#__PURE__*/
require("./internal/_has");

var _isArguments =
/*#__PURE__*/
require("./internal/_isArguments"); // cover IE < 9 keys issues


var hasEnumBug = !
/*#__PURE__*/
{
  toString: null
}.propertyIsEnumerable('toString');
var nonEnumerableProps = ['constructor', 'valueOf', 'isPrototypeOf', 'toString', 'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString']; // Safari bug

var hasArgsEnumBug =
/*#__PURE__*/
function () {
  'use strict';

  return arguments.propertyIsEnumerable('length');
}();

var contains = function contains(list, item) {
  var idx = 0;

  while (idx < list.length) {
    if (list[idx] === item) {
      return true;
    }

    idx += 1;
  }

  return false;
};
/**
 * Returns a list containing the names of all the enumerable own properties of
 * the supplied object.
 * Note that the order of the output array is not guaranteed to be consistent
 * across different JS platforms.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig {k: v} -> [k]
 * @param {Object} obj The object to extract properties from
 * @return {Array} An array of the object's own properties.
 * @see R.keysIn, R.values
 * @example
 *
 *      R.keys({a: 1, b: 2, c: 3}); //=> ['a', 'b', 'c']
 */


var keys = typeof Object.keys === 'function' && !hasArgsEnumBug ?
/*#__PURE__*/
_curry1(function keys(obj) {
  return Object(obj) !== obj ? [] : Object.keys(obj);
}) :
/*#__PURE__*/
_curry1(function keys(obj) {
  if (Object(obj) !== obj) {
    return [];
  }

  var prop, nIdx;
  var ks = [];

  var checkArgsLength = hasArgsEnumBug && _isArguments(obj);

  for (prop in obj) {
    if (_has(prop, obj) && (!checkArgsLength || prop !== 'length')) {
      ks[ks.length] = prop;
    }
  }

  if (hasEnumBug) {
    nIdx = nonEnumerableProps.length - 1;

    while (nIdx >= 0) {
      prop = nonEnumerableProps[nIdx];

      if (_has(prop, obj) && !contains(ks, prop)) {
        ks[ks.length] = prop;
      }

      nIdx -= 1;
    }
  }

  return ks;
});
module.exports = keys;
},{"./internal/_curry1":"node_modules/ramda/src/internal/_curry1.js","./internal/_has":"node_modules/ramda/src/internal/_has.js","./internal/_isArguments":"node_modules/ramda/src/internal/_isArguments.js"}],"node_modules/ramda/src/type.js":[function(require,module,exports) {
var _curry1 =
/*#__PURE__*/
require("./internal/_curry1");
/**
 * Gives a single-word string description of the (native) type of a value,
 * returning such answers as 'Object', 'Number', 'Array', or 'Null'. Does not
 * attempt to distinguish user Object types any further, reporting them all as
 * 'Object'.
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Type
 * @sig (* -> {*}) -> String
 * @param {*} val The value to test
 * @return {String}
 * @example
 *
 *      R.type({}); //=> "Object"
 *      R.type(1); //=> "Number"
 *      R.type(false); //=> "Boolean"
 *      R.type('s'); //=> "String"
 *      R.type(null); //=> "Null"
 *      R.type([]); //=> "Array"
 *      R.type(/[A-z]/); //=> "RegExp"
 *      R.type(() => {}); //=> "Function"
 *      R.type(undefined); //=> "Undefined"
 */


var type =
/*#__PURE__*/
_curry1(function type(val) {
  return val === null ? 'Null' : val === undefined ? 'Undefined' : Object.prototype.toString.call(val).slice(8, -1);
});

module.exports = type;
},{"./internal/_curry1":"node_modules/ramda/src/internal/_curry1.js"}],"node_modules/ramda/src/internal/_equals.js":[function(require,module,exports) {
var _arrayFromIterator =
/*#__PURE__*/
require("./_arrayFromIterator");

var _includesWith =
/*#__PURE__*/
require("./_includesWith");

var _functionName =
/*#__PURE__*/
require("./_functionName");

var _has =
/*#__PURE__*/
require("./_has");

var _objectIs =
/*#__PURE__*/
require("./_objectIs");

var keys =
/*#__PURE__*/
require("../keys");

var type =
/*#__PURE__*/
require("../type");
/**
 * private _uniqContentEquals function.
 * That function is checking equality of 2 iterator contents with 2 assumptions
 * - iterators lengths are the same
 * - iterators values are unique
 *
 * false-positive result will be returned for comparision of, e.g.
 * - [1,2,3] and [1,2,3,4]
 * - [1,1,1] and [1,2,3]
 * */


function _uniqContentEquals(aIterator, bIterator, stackA, stackB) {
  var a = _arrayFromIterator(aIterator);

  var b = _arrayFromIterator(bIterator);

  function eq(_a, _b) {
    return _equals(_a, _b, stackA.slice(), stackB.slice());
  } // if *a* array contains any element that is not included in *b*


  return !_includesWith(function (b, aItem) {
    return !_includesWith(eq, aItem, b);
  }, b, a);
}

function _equals(a, b, stackA, stackB) {
  if (_objectIs(a, b)) {
    return true;
  }

  var typeA = type(a);

  if (typeA !== type(b)) {
    return false;
  }

  if (a == null || b == null) {
    return false;
  }

  if (typeof a['fantasy-land/equals'] === 'function' || typeof b['fantasy-land/equals'] === 'function') {
    return typeof a['fantasy-land/equals'] === 'function' && a['fantasy-land/equals'](b) && typeof b['fantasy-land/equals'] === 'function' && b['fantasy-land/equals'](a);
  }

  if (typeof a.equals === 'function' || typeof b.equals === 'function') {
    return typeof a.equals === 'function' && a.equals(b) && typeof b.equals === 'function' && b.equals(a);
  }

  switch (typeA) {
    case 'Arguments':
    case 'Array':
    case 'Object':
      if (typeof a.constructor === 'function' && _functionName(a.constructor) === 'Promise') {
        return a === b;
      }

      break;

    case 'Boolean':
    case 'Number':
    case 'String':
      if (!(typeof a === typeof b && _objectIs(a.valueOf(), b.valueOf()))) {
        return false;
      }

      break;

    case 'Date':
      if (!_objectIs(a.valueOf(), b.valueOf())) {
        return false;
      }

      break;

    case 'Error':
      return a.name === b.name && a.message === b.message;

    case 'RegExp':
      if (!(a.source === b.source && a.global === b.global && a.ignoreCase === b.ignoreCase && a.multiline === b.multiline && a.sticky === b.sticky && a.unicode === b.unicode)) {
        return false;
      }

      break;
  }

  var idx = stackA.length - 1;

  while (idx >= 0) {
    if (stackA[idx] === a) {
      return stackB[idx] === b;
    }

    idx -= 1;
  }

  switch (typeA) {
    case 'Map':
      if (a.size !== b.size) {
        return false;
      }

      return _uniqContentEquals(a.entries(), b.entries(), stackA.concat([a]), stackB.concat([b]));

    case 'Set':
      if (a.size !== b.size) {
        return false;
      }

      return _uniqContentEquals(a.values(), b.values(), stackA.concat([a]), stackB.concat([b]));

    case 'Arguments':
    case 'Array':
    case 'Object':
    case 'Boolean':
    case 'Number':
    case 'String':
    case 'Date':
    case 'Error':
    case 'RegExp':
    case 'Int8Array':
    case 'Uint8Array':
    case 'Uint8ClampedArray':
    case 'Int16Array':
    case 'Uint16Array':
    case 'Int32Array':
    case 'Uint32Array':
    case 'Float32Array':
    case 'Float64Array':
    case 'ArrayBuffer':
      break;

    default:
      // Values of other types are only equal if identical.
      return false;
  }

  var keysA = keys(a);

  if (keysA.length !== keys(b).length) {
    return false;
  }

  var extendedStackA = stackA.concat([a]);
  var extendedStackB = stackB.concat([b]);
  idx = keysA.length - 1;

  while (idx >= 0) {
    var key = keysA[idx];

    if (!(_has(key, b) && _equals(b[key], a[key], extendedStackA, extendedStackB))) {
      return false;
    }

    idx -= 1;
  }

  return true;
}

module.exports = _equals;
},{"./_arrayFromIterator":"node_modules/ramda/src/internal/_arrayFromIterator.js","./_includesWith":"node_modules/ramda/src/internal/_includesWith.js","./_functionName":"node_modules/ramda/src/internal/_functionName.js","./_has":"node_modules/ramda/src/internal/_has.js","./_objectIs":"node_modules/ramda/src/internal/_objectIs.js","../keys":"node_modules/ramda/src/keys.js","../type":"node_modules/ramda/src/type.js"}],"node_modules/ramda/src/equals.js":[function(require,module,exports) {
var _curry2 =
/*#__PURE__*/
require("./internal/_curry2");

var _equals =
/*#__PURE__*/
require("./internal/_equals");
/**
 * Returns `true` if its arguments are equivalent, `false` otherwise. Handles
 * cyclical data structures.
 *
 * Dispatches symmetrically to the `equals` methods of both arguments, if
 * present.
 *
 * @func
 * @memberOf R
 * @since v0.15.0
 * @category Relation
 * @sig a -> b -> Boolean
 * @param {*} a
 * @param {*} b
 * @return {Boolean}
 * @example
 *
 *      R.equals(1, 1); //=> true
 *      R.equals(1, '1'); //=> false
 *      R.equals([1, 2, 3], [1, 2, 3]); //=> true
 *
 *      const a = {}; a.v = a;
 *      const b = {}; b.v = b;
 *      R.equals(a, b); //=> true
 */


var equals =
/*#__PURE__*/
_curry2(function equals(a, b) {
  return _equals(a, b, [], []);
});

module.exports = equals;
},{"./internal/_curry2":"node_modules/ramda/src/internal/_curry2.js","./internal/_equals":"node_modules/ramda/src/internal/_equals.js"}],"node_modules/ramda/src/internal/_indexOf.js":[function(require,module,exports) {
var equals =
/*#__PURE__*/
require("../equals");

function _indexOf(list, a, idx) {
  var inf, item; // Array.prototype.indexOf doesn't exist below IE9

  if (typeof list.indexOf === 'function') {
    switch (typeof a) {
      case 'number':
        if (a === 0) {
          // manually crawl the list to distinguish between +0 and -0
          inf = 1 / a;

          while (idx < list.length) {
            item = list[idx];

            if (item === 0 && 1 / item === inf) {
              return idx;
            }

            idx += 1;
          }

          return -1;
        } else if (a !== a) {
          // NaN
          while (idx < list.length) {
            item = list[idx];

            if (typeof item === 'number' && item !== item) {
              return idx;
            }

            idx += 1;
          }

          return -1;
        } // non-zero numbers can utilise Set


        return list.indexOf(a, idx);
      // all these types can utilise Set

      case 'string':
      case 'boolean':
      case 'function':
      case 'undefined':
        return list.indexOf(a, idx);

      case 'object':
        if (a === null) {
          // null can utilise Set
          return list.indexOf(a, idx);
        }

    }
  } // anything else not covered above, defer to R.equals


  while (idx < list.length) {
    if (equals(list[idx], a)) {
      return idx;
    }

    idx += 1;
  }

  return -1;
}

module.exports = _indexOf;
},{"../equals":"node_modules/ramda/src/equals.js"}],"node_modules/ramda/src/internal/_includes.js":[function(require,module,exports) {
var _indexOf =
/*#__PURE__*/
require("./_indexOf");

function _includes(a, list) {
  return _indexOf(list, a, 0) >= 0;
}

module.exports = _includes;
},{"./_indexOf":"node_modules/ramda/src/internal/_indexOf.js"}],"node_modules/ramda/src/internal/_map.js":[function(require,module,exports) {
function _map(fn, functor) {
  var idx = 0;
  var len = functor.length;
  var result = Array(len);

  while (idx < len) {
    result[idx] = fn(functor[idx]);
    idx += 1;
  }

  return result;
}

module.exports = _map;
},{}],"node_modules/ramda/src/internal/_quote.js":[function(require,module,exports) {
function _quote(s) {
  var escaped = s.replace(/\\/g, '\\\\').replace(/[\b]/g, '\\b') // \b matches word boundary; [\b] matches backspace
  .replace(/\f/g, '\\f').replace(/\n/g, '\\n').replace(/\r/g, '\\r').replace(/\t/g, '\\t').replace(/\v/g, '\\v').replace(/\0/g, '\\0');
  return '"' + escaped.replace(/"/g, '\\"') + '"';
}

module.exports = _quote;
},{}],"node_modules/ramda/src/internal/_toISOString.js":[function(require,module,exports) {
/**
 * Polyfill from <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString>.
 */
var pad = function pad(n) {
  return (n < 10 ? '0' : '') + n;
};

var _toISOString = typeof Date.prototype.toISOString === 'function' ? function _toISOString(d) {
  return d.toISOString();
} : function _toISOString(d) {
  return d.getUTCFullYear() + '-' + pad(d.getUTCMonth() + 1) + '-' + pad(d.getUTCDate()) + 'T' + pad(d.getUTCHours()) + ':' + pad(d.getUTCMinutes()) + ':' + pad(d.getUTCSeconds()) + '.' + (d.getUTCMilliseconds() / 1000).toFixed(3).slice(2, 5) + 'Z';
};

module.exports = _toISOString;
},{}],"node_modules/ramda/src/internal/_complement.js":[function(require,module,exports) {
function _complement(f) {
  return function () {
    return !f.apply(this, arguments);
  };
}

module.exports = _complement;
},{}],"node_modules/ramda/src/internal/_isTransformer.js":[function(require,module,exports) {
function _isTransformer(obj) {
  return obj != null && typeof obj['@@transducer/step'] === 'function';
}

module.exports = _isTransformer;
},{}],"node_modules/ramda/src/internal/_dispatchable.js":[function(require,module,exports) {
var _isArray =
/*#__PURE__*/
require("./_isArray");

var _isTransformer =
/*#__PURE__*/
require("./_isTransformer");
/**
 * Returns a function that dispatches with different strategies based on the
 * object in list position (last argument). If it is an array, executes [fn].
 * Otherwise, if it has a function with one of the given method names, it will
 * execute that function (functor case). Otherwise, if it is a transformer,
 * uses transducer [xf] to return a new transformer (transducer case).
 * Otherwise, it will default to executing [fn].
 *
 * @private
 * @param {Array} methodNames properties to check for a custom implementation
 * @param {Function} xf transducer to initialize if object is transformer
 * @param {Function} fn default ramda implementation
 * @return {Function} A function that dispatches on object in list position
 */


function _dispatchable(methodNames, xf, fn) {
  return function () {
    if (arguments.length === 0) {
      return fn();
    }

    var args = Array.prototype.slice.call(arguments, 0);
    var obj = args.pop();

    if (!_isArray(obj)) {
      var idx = 0;

      while (idx < methodNames.length) {
        if (typeof obj[methodNames[idx]] === 'function') {
          return obj[methodNames[idx]].apply(obj, args);
        }

        idx += 1;
      }

      if (_isTransformer(obj)) {
        var transducer = xf.apply(null, args);
        return transducer(obj);
      }
    }

    return fn.apply(this, arguments);
  };
}

module.exports = _dispatchable;
},{"./_isArray":"node_modules/ramda/src/internal/_isArray.js","./_isTransformer":"node_modules/ramda/src/internal/_isTransformer.js"}],"node_modules/ramda/src/internal/_filter.js":[function(require,module,exports) {
function _filter(fn, list) {
  var idx = 0;
  var len = list.length;
  var result = [];

  while (idx < len) {
    if (fn(list[idx])) {
      result[result.length] = list[idx];
    }

    idx += 1;
  }

  return result;
}

module.exports = _filter;
},{}],"node_modules/ramda/src/internal/_isObject.js":[function(require,module,exports) {
function _isObject(x) {
  return Object.prototype.toString.call(x) === '[object Object]';
}

module.exports = _isObject;
},{}],"node_modules/ramda/src/internal/_isArrayLike.js":[function(require,module,exports) {
var _curry1 =
/*#__PURE__*/
require("./_curry1");

var _isArray =
/*#__PURE__*/
require("./_isArray");

var _isString =
/*#__PURE__*/
require("./_isString");
/**
 * Tests whether or not an object is similar to an array.
 *
 * @private
 * @category Type
 * @category List
 * @sig * -> Boolean
 * @param {*} x The object to test.
 * @return {Boolean} `true` if `x` has a numeric length property and extreme indices defined; `false` otherwise.
 * @example
 *
 *      _isArrayLike([]); //=> true
 *      _isArrayLike(true); //=> false
 *      _isArrayLike({}); //=> false
 *      _isArrayLike({length: 10}); //=> false
 *      _isArrayLike({0: 'zero', 9: 'nine', length: 10}); //=> true
 */


var _isArrayLike =
/*#__PURE__*/
_curry1(function isArrayLike(x) {
  if (_isArray(x)) {
    return true;
  }

  if (!x) {
    return false;
  }

  if (typeof x !== 'object') {
    return false;
  }

  if (_isString(x)) {
    return false;
  }

  if (x.nodeType === 1) {
    return !!x.length;
  }

  if (x.length === 0) {
    return true;
  }

  if (x.length > 0) {
    return x.hasOwnProperty(0) && x.hasOwnProperty(x.length - 1);
  }

  return false;
});

module.exports = _isArrayLike;
},{"./_curry1":"node_modules/ramda/src/internal/_curry1.js","./_isArray":"node_modules/ramda/src/internal/_isArray.js","./_isString":"node_modules/ramda/src/internal/_isString.js"}],"node_modules/ramda/src/internal/_xwrap.js":[function(require,module,exports) {
var XWrap =
/*#__PURE__*/
function () {
  function XWrap(fn) {
    this.f = fn;
  }

  XWrap.prototype['@@transducer/init'] = function () {
    throw new Error('init not implemented on XWrap');
  };

  XWrap.prototype['@@transducer/result'] = function (acc) {
    return acc;
  };

  XWrap.prototype['@@transducer/step'] = function (acc, x) {
    return this.f(acc, x);
  };

  return XWrap;
}();

function _xwrap(fn) {
  return new XWrap(fn);
}

module.exports = _xwrap;
},{}],"node_modules/ramda/src/internal/_arity.js":[function(require,module,exports) {
function _arity(n, fn) {
  /* eslint-disable no-unused-vars */
  switch (n) {
    case 0:
      return function () {
        return fn.apply(this, arguments);
      };

    case 1:
      return function (a0) {
        return fn.apply(this, arguments);
      };

    case 2:
      return function (a0, a1) {
        return fn.apply(this, arguments);
      };

    case 3:
      return function (a0, a1, a2) {
        return fn.apply(this, arguments);
      };

    case 4:
      return function (a0, a1, a2, a3) {
        return fn.apply(this, arguments);
      };

    case 5:
      return function (a0, a1, a2, a3, a4) {
        return fn.apply(this, arguments);
      };

    case 6:
      return function (a0, a1, a2, a3, a4, a5) {
        return fn.apply(this, arguments);
      };

    case 7:
      return function (a0, a1, a2, a3, a4, a5, a6) {
        return fn.apply(this, arguments);
      };

    case 8:
      return function (a0, a1, a2, a3, a4, a5, a6, a7) {
        return fn.apply(this, arguments);
      };

    case 9:
      return function (a0, a1, a2, a3, a4, a5, a6, a7, a8) {
        return fn.apply(this, arguments);
      };

    case 10:
      return function (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
        return fn.apply(this, arguments);
      };

    default:
      throw new Error('First argument to _arity must be a non-negative integer no greater than ten');
  }
}

module.exports = _arity;
},{}],"node_modules/ramda/src/bind.js":[function(require,module,exports) {
var _arity =
/*#__PURE__*/
require("./internal/_arity");

var _curry2 =
/*#__PURE__*/
require("./internal/_curry2");
/**
 * Creates a function that is bound to a context.
 * Note: `R.bind` does not provide the additional argument-binding capabilities of
 * [Function.prototype.bind](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind).
 *
 * @func
 * @memberOf R
 * @since v0.6.0
 * @category Function
 * @category Object
 * @sig (* -> *) -> {*} -> (* -> *)
 * @param {Function} fn The function to bind to context
 * @param {Object} thisObj The context to bind `fn` to
 * @return {Function} A function that will execute in the context of `thisObj`.
 * @see R.partial
 * @example
 *
 *      const log = R.bind(console.log, console);
 *      R.pipe(R.assoc('a', 2), R.tap(log), R.assoc('a', 3))({a: 1}); //=> {a: 3}
 *      // logs {a: 2}
 * @symb R.bind(f, o)(a, b) = f.call(o, a, b)
 */


var bind =
/*#__PURE__*/
_curry2(function bind(fn, thisObj) {
  return _arity(fn.length, function () {
    return fn.apply(thisObj, arguments);
  });
});

module.exports = bind;
},{"./internal/_arity":"node_modules/ramda/src/internal/_arity.js","./internal/_curry2":"node_modules/ramda/src/internal/_curry2.js"}],"node_modules/ramda/src/internal/_reduce.js":[function(require,module,exports) {
var _isArrayLike =
/*#__PURE__*/
require("./_isArrayLike");

var _xwrap =
/*#__PURE__*/
require("./_xwrap");

var bind =
/*#__PURE__*/
require("../bind");

function _arrayReduce(xf, acc, list) {
  var idx = 0;
  var len = list.length;

  while (idx < len) {
    acc = xf['@@transducer/step'](acc, list[idx]);

    if (acc && acc['@@transducer/reduced']) {
      acc = acc['@@transducer/value'];
      break;
    }

    idx += 1;
  }

  return xf['@@transducer/result'](acc);
}

function _iterableReduce(xf, acc, iter) {
  var step = iter.next();

  while (!step.done) {
    acc = xf['@@transducer/step'](acc, step.value);

    if (acc && acc['@@transducer/reduced']) {
      acc = acc['@@transducer/value'];
      break;
    }

    step = iter.next();
  }

  return xf['@@transducer/result'](acc);
}

function _methodReduce(xf, acc, obj, methodName) {
  return xf['@@transducer/result'](obj[methodName](bind(xf['@@transducer/step'], xf), acc));
}

var symIterator = typeof Symbol !== 'undefined' ? Symbol.iterator : '@@iterator';

function _reduce(fn, acc, list) {
  if (typeof fn === 'function') {
    fn = _xwrap(fn);
  }

  if (_isArrayLike(list)) {
    return _arrayReduce(fn, acc, list);
  }

  if (typeof list['fantasy-land/reduce'] === 'function') {
    return _methodReduce(fn, acc, list, 'fantasy-land/reduce');
  }

  if (list[symIterator] != null) {
    return _iterableReduce(fn, acc, list[symIterator]());
  }

  if (typeof list.next === 'function') {
    return _iterableReduce(fn, acc, list);
  }

  if (typeof list.reduce === 'function') {
    return _methodReduce(fn, acc, list, 'reduce');
  }

  throw new TypeError('reduce: list must be array or iterable');
}

module.exports = _reduce;
},{"./_isArrayLike":"node_modules/ramda/src/internal/_isArrayLike.js","./_xwrap":"node_modules/ramda/src/internal/_xwrap.js","../bind":"node_modules/ramda/src/bind.js"}],"node_modules/ramda/src/internal/_xfBase.js":[function(require,module,exports) {
module.exports = {
  init: function () {
    return this.xf['@@transducer/init']();
  },
  result: function (result) {
    return this.xf['@@transducer/result'](result);
  }
};
},{}],"node_modules/ramda/src/internal/_xfilter.js":[function(require,module,exports) {
var _curry2 =
/*#__PURE__*/
require("./_curry2");

var _xfBase =
/*#__PURE__*/
require("./_xfBase");

var XFilter =
/*#__PURE__*/
function () {
  function XFilter(f, xf) {
    this.xf = xf;
    this.f = f;
  }

  XFilter.prototype['@@transducer/init'] = _xfBase.init;
  XFilter.prototype['@@transducer/result'] = _xfBase.result;

  XFilter.prototype['@@transducer/step'] = function (result, input) {
    return this.f(input) ? this.xf['@@transducer/step'](result, input) : result;
  };

  return XFilter;
}();

var _xfilter =
/*#__PURE__*/
_curry2(function _xfilter(f, xf) {
  return new XFilter(f, xf);
});

module.exports = _xfilter;
},{"./_curry2":"node_modules/ramda/src/internal/_curry2.js","./_xfBase":"node_modules/ramda/src/internal/_xfBase.js"}],"node_modules/ramda/src/filter.js":[function(require,module,exports) {
var _curry2 =
/*#__PURE__*/
require("./internal/_curry2");

var _dispatchable =
/*#__PURE__*/
require("./internal/_dispatchable");

var _filter =
/*#__PURE__*/
require("./internal/_filter");

var _isObject =
/*#__PURE__*/
require("./internal/_isObject");

var _reduce =
/*#__PURE__*/
require("./internal/_reduce");

var _xfilter =
/*#__PURE__*/
require("./internal/_xfilter");

var keys =
/*#__PURE__*/
require("./keys");
/**
 * Takes a predicate and a `Filterable`, and returns a new filterable of the
 * same type containing the members of the given filterable which satisfy the
 * given predicate. Filterable objects include plain objects or any object
 * that has a filter method such as `Array`.
 *
 * Dispatches to the `filter` method of the second argument, if present.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Filterable f => (a -> Boolean) -> f a -> f a
 * @param {Function} pred
 * @param {Array} filterable
 * @return {Array} Filterable
 * @see R.reject, R.transduce, R.addIndex
 * @example
 *
 *      const isEven = n => n % 2 === 0;
 *
 *      R.filter(isEven, [1, 2, 3, 4]); //=> [2, 4]
 *
 *      R.filter(isEven, {a: 1, b: 2, c: 3, d: 4}); //=> {b: 2, d: 4}
 */


var filter =
/*#__PURE__*/
_curry2(
/*#__PURE__*/
_dispatchable(['filter'], _xfilter, function (pred, filterable) {
  return _isObject(filterable) ? _reduce(function (acc, key) {
    if (pred(filterable[key])) {
      acc[key] = filterable[key];
    }

    return acc;
  }, {}, keys(filterable)) : // else
  _filter(pred, filterable);
}));

module.exports = filter;
},{"./internal/_curry2":"node_modules/ramda/src/internal/_curry2.js","./internal/_dispatchable":"node_modules/ramda/src/internal/_dispatchable.js","./internal/_filter":"node_modules/ramda/src/internal/_filter.js","./internal/_isObject":"node_modules/ramda/src/internal/_isObject.js","./internal/_reduce":"node_modules/ramda/src/internal/_reduce.js","./internal/_xfilter":"node_modules/ramda/src/internal/_xfilter.js","./keys":"node_modules/ramda/src/keys.js"}],"node_modules/ramda/src/reject.js":[function(require,module,exports) {
var _complement =
/*#__PURE__*/
require("./internal/_complement");

var _curry2 =
/*#__PURE__*/
require("./internal/_curry2");

var filter =
/*#__PURE__*/
require("./filter");
/**
 * The complement of [`filter`](#filter).
 *
 * Acts as a transducer if a transformer is given in list position. Filterable
 * objects include plain objects or any object that has a filter method such
 * as `Array`.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Filterable f => (a -> Boolean) -> f a -> f a
 * @param {Function} pred
 * @param {Array} filterable
 * @return {Array}
 * @see R.filter, R.transduce, R.addIndex
 * @example
 *
 *      const isOdd = (n) => n % 2 === 1;
 *
 *      R.reject(isOdd, [1, 2, 3, 4]); //=> [2, 4]
 *
 *      R.reject(isOdd, {a: 1, b: 2, c: 3, d: 4}); //=> {b: 2, d: 4}
 */


var reject =
/*#__PURE__*/
_curry2(function reject(pred, filterable) {
  return filter(_complement(pred), filterable);
});

module.exports = reject;
},{"./internal/_complement":"node_modules/ramda/src/internal/_complement.js","./internal/_curry2":"node_modules/ramda/src/internal/_curry2.js","./filter":"node_modules/ramda/src/filter.js"}],"node_modules/ramda/src/internal/_toString.js":[function(require,module,exports) {
var _includes =
/*#__PURE__*/
require("./_includes");

var _map =
/*#__PURE__*/
require("./_map");

var _quote =
/*#__PURE__*/
require("./_quote");

var _toISOString =
/*#__PURE__*/
require("./_toISOString");

var keys =
/*#__PURE__*/
require("../keys");

var reject =
/*#__PURE__*/
require("../reject");

function _toString(x, seen) {
  var recur = function recur(y) {
    var xs = seen.concat([x]);
    return _includes(y, xs) ? '<Circular>' : _toString(y, xs);
  }; //  mapPairs :: (Object, [String]) -> [String]


  var mapPairs = function (obj, keys) {
    return _map(function (k) {
      return _quote(k) + ': ' + recur(obj[k]);
    }, keys.slice().sort());
  };

  switch (Object.prototype.toString.call(x)) {
    case '[object Arguments]':
      return '(function() { return arguments; }(' + _map(recur, x).join(', ') + '))';

    case '[object Array]':
      return '[' + _map(recur, x).concat(mapPairs(x, reject(function (k) {
        return /^\d+$/.test(k);
      }, keys(x)))).join(', ') + ']';

    case '[object Boolean]':
      return typeof x === 'object' ? 'new Boolean(' + recur(x.valueOf()) + ')' : x.toString();

    case '[object Date]':
      return 'new Date(' + (isNaN(x.valueOf()) ? recur(NaN) : _quote(_toISOString(x))) + ')';

    case '[object Null]':
      return 'null';

    case '[object Number]':
      return typeof x === 'object' ? 'new Number(' + recur(x.valueOf()) + ')' : 1 / x === -Infinity ? '-0' : x.toString(10);

    case '[object String]':
      return typeof x === 'object' ? 'new String(' + recur(x.valueOf()) + ')' : _quote(x);

    case '[object Undefined]':
      return 'undefined';

    default:
      if (typeof x.toString === 'function') {
        var repr = x.toString();

        if (repr !== '[object Object]') {
          return repr;
        }
      }

      return '{' + mapPairs(x, keys(x)).join(', ') + '}';
  }
}

module.exports = _toString;
},{"./_includes":"node_modules/ramda/src/internal/_includes.js","./_map":"node_modules/ramda/src/internal/_map.js","./_quote":"node_modules/ramda/src/internal/_quote.js","./_toISOString":"node_modules/ramda/src/internal/_toISOString.js","../keys":"node_modules/ramda/src/keys.js","../reject":"node_modules/ramda/src/reject.js"}],"node_modules/ramda/src/toString.js":[function(require,module,exports) {
var _curry1 =
/*#__PURE__*/
require("./internal/_curry1");

var _toString =
/*#__PURE__*/
require("./internal/_toString");
/**
 * Returns the string representation of the given value. `eval`'ing the output
 * should result in a value equivalent to the input value. Many of the built-in
 * `toString` methods do not satisfy this requirement.
 *
 * If the given value is an `[object Object]` with a `toString` method other
 * than `Object.prototype.toString`, this method is invoked with no arguments
 * to produce the return value. This means user-defined constructor functions
 * can provide a suitable `toString` method. For example:
 *
 *     function Point(x, y) {
 *       this.x = x;
 *       this.y = y;
 *     }
 *
 *     Point.prototype.toString = function() {
 *       return 'new Point(' + this.x + ', ' + this.y + ')';
 *     };
 *
 *     R.toString(new Point(1, 2)); //=> 'new Point(1, 2)'
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category String
 * @sig * -> String
 * @param {*} val
 * @return {String}
 * @example
 *
 *      R.toString(42); //=> '42'
 *      R.toString('abc'); //=> '"abc"'
 *      R.toString([1, 2, 3]); //=> '[1, 2, 3]'
 *      R.toString({foo: 1, bar: 2, baz: 3}); //=> '{"bar": 2, "baz": 3, "foo": 1}'
 *      R.toString(new Date('2001-02-03T04:05:06Z')); //=> 'new Date("2001-02-03T04:05:06.000Z")'
 */


var toString =
/*#__PURE__*/
_curry1(function toString(val) {
  return _toString(val, []);
});

module.exports = toString;
},{"./internal/_curry1":"node_modules/ramda/src/internal/_curry1.js","./internal/_toString":"node_modules/ramda/src/internal/_toString.js"}],"node_modules/ramda/src/concat.js":[function(require,module,exports) {
var _curry2 =
/*#__PURE__*/
require("./internal/_curry2");

var _isArray =
/*#__PURE__*/
require("./internal/_isArray");

var _isFunction =
/*#__PURE__*/
require("./internal/_isFunction");

var _isString =
/*#__PURE__*/
require("./internal/_isString");

var toString =
/*#__PURE__*/
require("./toString");
/**
 * Returns the result of concatenating the given lists or strings.
 *
 * Note: `R.concat` expects both arguments to be of the same type,
 * unlike the native `Array.prototype.concat` method. It will throw
 * an error if you `concat` an Array with a non-Array value.
 *
 * Dispatches to the `concat` method of the first argument, if present.
 * Can also concatenate two members of a [fantasy-land
 * compatible semigroup](https://github.com/fantasyland/fantasy-land#semigroup).
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig [a] -> [a] -> [a]
 * @sig String -> String -> String
 * @param {Array|String} firstList The first list
 * @param {Array|String} secondList The second list
 * @return {Array|String} A list consisting of the elements of `firstList` followed by the elements of
 * `secondList`.
 *
 * @example
 *
 *      R.concat('ABC', 'DEF'); // 'ABCDEF'
 *      R.concat([4, 5, 6], [1, 2, 3]); //=> [4, 5, 6, 1, 2, 3]
 *      R.concat([], []); //=> []
 */


var concat =
/*#__PURE__*/
_curry2(function concat(a, b) {
  if (_isArray(a)) {
    if (_isArray(b)) {
      return a.concat(b);
    }

    throw new TypeError(toString(b) + ' is not an array');
  }

  if (_isString(a)) {
    if (_isString(b)) {
      return a + b;
    }

    throw new TypeError(toString(b) + ' is not a string');
  }

  if (a != null && _isFunction(a['fantasy-land/concat'])) {
    return a['fantasy-land/concat'](b);
  }

  if (a != null && _isFunction(a.concat)) {
    return a.concat(b);
  }

  throw new TypeError(toString(a) + ' does not have a method named "concat" or "fantasy-land/concat"');
});

module.exports = concat;
},{"./internal/_curry2":"node_modules/ramda/src/internal/_curry2.js","./internal/_isArray":"node_modules/ramda/src/internal/_isArray.js","./internal/_isFunction":"node_modules/ramda/src/internal/_isFunction.js","./internal/_isString":"node_modules/ramda/src/internal/_isString.js","./toString":"node_modules/ramda/src/toString.js"}],"node_modules/ramda/src/internal/_Set.js":[function(require,module,exports) {
var _includes =
/*#__PURE__*/
require("./_includes");

var _Set =
/*#__PURE__*/
function () {
  function _Set() {
    /* globals Set */
    this._nativeSet = typeof Set === 'function' ? new Set() : null;
    this._items = {};
  }

  // until we figure out why jsdoc chokes on this
  // @param item The item to add to the Set
  // @returns {boolean} true if the item did not exist prior, otherwise false
  //
  _Set.prototype.add = function (item) {
    return !hasOrAdd(item, true, this);
  }; //
  // @param item The item to check for existence in the Set
  // @returns {boolean} true if the item exists in the Set, otherwise false
  //


  _Set.prototype.has = function (item) {
    return hasOrAdd(item, false, this);
  }; //
  // Combines the logic for checking whether an item is a member of the set and
  // for adding a new item to the set.
  //
  // @param item       The item to check or add to the Set instance.
  // @param shouldAdd  If true, the item will be added to the set if it doesn't
  //                   already exist.
  // @param set        The set instance to check or add to.
  // @return {boolean} true if the item already existed, otherwise false.
  //


  return _Set;
}();

function hasOrAdd(item, shouldAdd, set) {
  var type = typeof item;
  var prevSize, newSize;

  switch (type) {
    case 'string':
    case 'number':
      // distinguish between +0 and -0
      if (item === 0 && 1 / item === -Infinity) {
        if (set._items['-0']) {
          return true;
        } else {
          if (shouldAdd) {
            set._items['-0'] = true;
          }

          return false;
        }
      } // these types can all utilise the native Set


      if (set._nativeSet !== null) {
        if (shouldAdd) {
          prevSize = set._nativeSet.size;

          set._nativeSet.add(item);

          newSize = set._nativeSet.size;
          return newSize === prevSize;
        } else {
          return set._nativeSet.has(item);
        }
      } else {
        if (!(type in set._items)) {
          if (shouldAdd) {
            set._items[type] = {};
            set._items[type][item] = true;
          }

          return false;
        } else if (item in set._items[type]) {
          return true;
        } else {
          if (shouldAdd) {
            set._items[type][item] = true;
          }

          return false;
        }
      }

    case 'boolean':
      // set._items['boolean'] holds a two element array
      // representing [ falseExists, trueExists ]
      if (type in set._items) {
        var bIdx = item ? 1 : 0;

        if (set._items[type][bIdx]) {
          return true;
        } else {
          if (shouldAdd) {
            set._items[type][bIdx] = true;
          }

          return false;
        }
      } else {
        if (shouldAdd) {
          set._items[type] = item ? [false, true] : [true, false];
        }

        return false;
      }

    case 'function':
      // compare functions for reference equality
      if (set._nativeSet !== null) {
        if (shouldAdd) {
          prevSize = set._nativeSet.size;

          set._nativeSet.add(item);

          newSize = set._nativeSet.size;
          return newSize === prevSize;
        } else {
          return set._nativeSet.has(item);
        }
      } else {
        if (!(type in set._items)) {
          if (shouldAdd) {
            set._items[type] = [item];
          }

          return false;
        }

        if (!_includes(item, set._items[type])) {
          if (shouldAdd) {
            set._items[type].push(item);
          }

          return false;
        }

        return true;
      }

    case 'undefined':
      if (set._items[type]) {
        return true;
      } else {
        if (shouldAdd) {
          set._items[type] = true;
        }

        return false;
      }

    case 'object':
      if (item === null) {
        if (!set._items['null']) {
          if (shouldAdd) {
            set._items['null'] = true;
          }

          return false;
        }

        return true;
      }

    /* falls through */

    default:
      // reduce the search size of heterogeneous sets by creating buckets
      // for each type.
      type = Object.prototype.toString.call(item);

      if (!(type in set._items)) {
        if (shouldAdd) {
          set._items[type] = [item];
        }

        return false;
      } // scan through all previously applied items


      if (!_includes(item, set._items[type])) {
        if (shouldAdd) {
          set._items[type].push(item);
        }

        return false;
      }

      return true;
  }
} // A simple Set type that honours R.equals semantics


module.exports = _Set;
},{"./_includes":"node_modules/ramda/src/internal/_includes.js"}],"node_modules/ramda/src/difference.js":[function(require,module,exports) {
var _curry2 =
/*#__PURE__*/
require("./internal/_curry2");

var _Set =
/*#__PURE__*/
require("./internal/_Set");
/**
 * Finds the set (i.e. no duplicates) of all elements in the first list not
 * contained in the second list. Objects and Arrays are compared in terms of
 * value equality, not reference equality.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig [*] -> [*] -> [*]
 * @param {Array} list1 The first list.
 * @param {Array} list2 The second list.
 * @return {Array} The elements in `list1` that are not in `list2`.
 * @see R.differenceWith, R.symmetricDifference, R.symmetricDifferenceWith, R.without
 * @example
 *
 *      R.difference([1,2,3,4], [7,6,5,4,3]); //=> [1,2]
 *      R.difference([7,6,5,4,3], [1,2,3,4]); //=> [7,6,5]
 *      R.difference([{a: 1}, {b: 2}], [{a: 1}, {c: 3}]) //=> [{b: 2}]
 */


var difference =
/*#__PURE__*/
_curry2(function difference(first, second) {
  var out = [];
  var idx = 0;
  var firstLen = first.length;
  var secondLen = second.length;
  var toFilterOut = new _Set();

  for (var i = 0; i < secondLen; i += 1) {
    toFilterOut.add(second[i]);
  }

  while (idx < firstLen) {
    if (toFilterOut.add(first[idx])) {
      out[out.length] = first[idx];
    }

    idx += 1;
  }

  return out;
});

module.exports = difference;
},{"./internal/_curry2":"node_modules/ramda/src/internal/_curry2.js","./internal/_Set":"node_modules/ramda/src/internal/_Set.js"}],"node_modules/ramda/src/symmetricDifference.js":[function(require,module,exports) {
var _curry2 =
/*#__PURE__*/
require("./internal/_curry2");

var concat =
/*#__PURE__*/
require("./concat");

var difference =
/*#__PURE__*/
require("./difference");
/**
 * Finds the set (i.e. no duplicates) of all elements contained in the first or
 * second list, but not both.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category Relation
 * @sig [*] -> [*] -> [*]
 * @param {Array} list1 The first list.
 * @param {Array} list2 The second list.
 * @return {Array} The elements in `list1` or `list2`, but not both.
 * @see R.symmetricDifferenceWith, R.difference, R.differenceWith
 * @example
 *
 *      R.symmetricDifference([1,2,3,4], [7,6,5,4,3]); //=> [1,2,7,6,5]
 *      R.symmetricDifference([7,6,5,4,3], [1,2,3,4]); //=> [7,6,5,1,2]
 */


var symmetricDifference =
/*#__PURE__*/
_curry2(function symmetricDifference(list1, list2) {
  return concat(difference(list1, list2), difference(list2, list1));
});

module.exports = symmetricDifference;
},{"./internal/_curry2":"node_modules/ramda/src/internal/_curry2.js","./concat":"node_modules/ramda/src/concat.js","./difference":"node_modules/ramda/src/difference.js"}],"node_modules/ramda/src/internal/_curryN.js":[function(require,module,exports) {
var _arity =
/*#__PURE__*/
require("./_arity");

var _isPlaceholder =
/*#__PURE__*/
require("./_isPlaceholder");
/**
 * Internal curryN function.
 *
 * @private
 * @category Function
 * @param {Number} length The arity of the curried function.
 * @param {Array} received An array of arguments received thus far.
 * @param {Function} fn The function to curry.
 * @return {Function} The curried function.
 */


function _curryN(length, received, fn) {
  return function () {
    var combined = [];
    var argsIdx = 0;
    var left = length;
    var combinedIdx = 0;

    while (combinedIdx < received.length || argsIdx < arguments.length) {
      var result;

      if (combinedIdx < received.length && (!_isPlaceholder(received[combinedIdx]) || argsIdx >= arguments.length)) {
        result = received[combinedIdx];
      } else {
        result = arguments[argsIdx];
        argsIdx += 1;
      }

      combined[combinedIdx] = result;

      if (!_isPlaceholder(result)) {
        left -= 1;
      }

      combinedIdx += 1;
    }

    return left <= 0 ? fn.apply(this, combined) : _arity(left, _curryN(length, combined, fn));
  };
}

module.exports = _curryN;
},{"./_arity":"node_modules/ramda/src/internal/_arity.js","./_isPlaceholder":"node_modules/ramda/src/internal/_isPlaceholder.js"}],"node_modules/ramda/src/curryN.js":[function(require,module,exports) {
var _arity =
/*#__PURE__*/
require("./internal/_arity");

var _curry1 =
/*#__PURE__*/
require("./internal/_curry1");

var _curry2 =
/*#__PURE__*/
require("./internal/_curry2");

var _curryN =
/*#__PURE__*/
require("./internal/_curryN");
/**
 * Returns a curried equivalent of the provided function, with the specified
 * arity. The curried function has two unusual capabilities. First, its
 * arguments needn't be provided one at a time. If `g` is `R.curryN(3, f)`, the
 * following are equivalent:
 *
 *   - `g(1)(2)(3)`
 *   - `g(1)(2, 3)`
 *   - `g(1, 2)(3)`
 *   - `g(1, 2, 3)`
 *
 * Secondly, the special placeholder value [`R.__`](#__) may be used to specify
 * "gaps", allowing partial application of any combination of arguments,
 * regardless of their positions. If `g` is as above and `_` is [`R.__`](#__),
 * the following are equivalent:
 *
 *   - `g(1, 2, 3)`
 *   - `g(_, 2, 3)(1)`
 *   - `g(_, _, 3)(1)(2)`
 *   - `g(_, _, 3)(1, 2)`
 *   - `g(_, 2)(1)(3)`
 *   - `g(_, 2)(1, 3)`
 *   - `g(_, 2)(_, 3)(1)`
 *
 * @func
 * @memberOf R
 * @since v0.5.0
 * @category Function
 * @sig Number -> (* -> a) -> (* -> a)
 * @param {Number} length The arity for the returned function.
 * @param {Function} fn The function to curry.
 * @return {Function} A new, curried function.
 * @see R.curry
 * @example
 *
 *      const sumArgs = (...args) => R.sum(args);
 *
 *      const curriedAddFourNumbers = R.curryN(4, sumArgs);
 *      const f = curriedAddFourNumbers(1, 2);
 *      const g = f(3);
 *      g(4); //=> 10
 */


var curryN =
/*#__PURE__*/
_curry2(function curryN(length, fn) {
  if (length === 1) {
    return _curry1(fn);
  }

  return _arity(length, _curryN(length, [], fn));
});

module.exports = curryN;
},{"./internal/_arity":"node_modules/ramda/src/internal/_arity.js","./internal/_curry1":"node_modules/ramda/src/internal/_curry1.js","./internal/_curry2":"node_modules/ramda/src/internal/_curry2.js","./internal/_curryN":"node_modules/ramda/src/internal/_curryN.js"}],"node_modules/ramda/src/flip.js":[function(require,module,exports) {
var _curry1 =
/*#__PURE__*/
require("./internal/_curry1");

var curryN =
/*#__PURE__*/
require("./curryN");
/**
 * Returns a new function much like the supplied one, except that the first two
 * arguments' order is reversed.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig ((a, b, c, ...) -> z) -> (b -> a -> c -> ... -> z)
 * @param {Function} fn The function to invoke with its first two parameters reversed.
 * @return {*} The result of invoking `fn` with its first two parameters' order reversed.
 * @example
 *
 *      const mergeThree = (a, b, c) => [].concat(a, b, c);
 *
 *      mergeThree(1, 2, 3); //=> [1, 2, 3]
 *
 *      R.flip(mergeThree)(1, 2, 3); //=> [2, 1, 3]
 * @symb R.flip(f)(a, b, c) = f(b, a, c)
 */


var flip =
/*#__PURE__*/
_curry1(function flip(fn) {
  return curryN(fn.length, function (a, b) {
    var args = Array.prototype.slice.call(arguments, 0);
    args[0] = b;
    args[1] = a;
    return fn.apply(this, args);
  });
});

module.exports = flip;
},{"./internal/_curry1":"node_modules/ramda/src/internal/_curry1.js","./curryN":"node_modules/ramda/src/curryN.js"}],"node_modules/ramda/src/internal/_identity.js":[function(require,module,exports) {
function _identity(x) {
  return x;
}

module.exports = _identity;
},{}],"node_modules/ramda/src/identity.js":[function(require,module,exports) {
var _curry1 =
/*#__PURE__*/
require("./internal/_curry1");

var _identity =
/*#__PURE__*/
require("./internal/_identity");
/**
 * A function that does nothing but return the parameter supplied to it. Good
 * as a default or placeholder function.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig a -> a
 * @param {*} x The value to return.
 * @return {*} The input value, `x`.
 * @example
 *
 *      R.identity(1); //=> 1
 *
 *      const obj = {};
 *      R.identity(obj) === obj; //=> true
 * @symb R.identity(a) = a
 */


var identity =
/*#__PURE__*/
_curry1(_identity);

module.exports = identity;
},{"./internal/_curry1":"node_modules/ramda/src/internal/_curry1.js","./internal/_identity":"node_modules/ramda/src/internal/_identity.js"}],"node_modules/ramda/src/uniqBy.js":[function(require,module,exports) {
var _Set =
/*#__PURE__*/
require("./internal/_Set");

var _curry2 =
/*#__PURE__*/
require("./internal/_curry2");
/**
 * Returns a new list containing only one copy of each element in the original
 * list, based upon the value returned by applying the supplied function to
 * each list element. Prefers the first item if the supplied function produces
 * the same value on two items. [`R.equals`](#equals) is used for comparison.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category List
 * @sig (a -> b) -> [a] -> [a]
 * @param {Function} fn A function used to produce a value to use during comparisons.
 * @param {Array} list The array to consider.
 * @return {Array} The list of unique items.
 * @example
 *
 *      R.uniqBy(Math.abs, [-1, -5, 2, 10, 1, 2]); //=> [-1, -5, 2, 10]
 */


var uniqBy =
/*#__PURE__*/
_curry2(function uniqBy(fn, list) {
  var set = new _Set();
  var result = [];
  var idx = 0;
  var appliedItem, item;

  while (idx < list.length) {
    item = list[idx];
    appliedItem = fn(item);

    if (set.add(appliedItem)) {
      result.push(item);
    }

    idx += 1;
  }

  return result;
});

module.exports = uniqBy;
},{"./internal/_Set":"node_modules/ramda/src/internal/_Set.js","./internal/_curry2":"node_modules/ramda/src/internal/_curry2.js"}],"node_modules/ramda/src/uniq.js":[function(require,module,exports) {
var identity =
/*#__PURE__*/
require("./identity");

var uniqBy =
/*#__PURE__*/
require("./uniqBy");
/**
 * Returns a new list containing only one copy of each element in the original
 * list. [`R.equals`](#equals) is used to determine equality.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig [a] -> [a]
 * @param {Array} list The array to consider.
 * @return {Array} The list of unique items.
 * @example
 *
 *      R.uniq([1, 1, 2, 1]); //=> [1, 2]
 *      R.uniq([1, '1']);     //=> [1, '1']
 *      R.uniq([[42], [42]]); //=> [[42]]
 */


var uniq =
/*#__PURE__*/
uniqBy(identity);
module.exports = uniq;
},{"./identity":"node_modules/ramda/src/identity.js","./uniqBy":"node_modules/ramda/src/uniqBy.js"}],"node_modules/ramda/src/intersection.js":[function(require,module,exports) {
var _includes =
/*#__PURE__*/
require("./internal/_includes");

var _curry2 =
/*#__PURE__*/
require("./internal/_curry2");

var _filter =
/*#__PURE__*/
require("./internal/_filter");

var flip =
/*#__PURE__*/
require("./flip");

var uniq =
/*#__PURE__*/
require("./uniq");
/**
 * Combines two lists into a set (i.e. no duplicates) composed of those
 * elements common to both lists.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig [*] -> [*] -> [*]
 * @param {Array} list1 The first list.
 * @param {Array} list2 The second list.
 * @return {Array} The list of elements found in both `list1` and `list2`.
 * @see R.innerJoin
 * @example
 *
 *      R.intersection([1,2,3,4], [7,6,5,4,3]); //=> [4, 3]
 */


var intersection =
/*#__PURE__*/
_curry2(function intersection(list1, list2) {
  var lookupList, filteredList;

  if (list1.length > list2.length) {
    lookupList = list1;
    filteredList = list2;
  } else {
    lookupList = list2;
    filteredList = list1;
  }

  return uniq(_filter(flip(_includes)(lookupList), filteredList));
});

module.exports = intersection;
},{"./internal/_includes":"node_modules/ramda/src/internal/_includes.js","./internal/_curry2":"node_modules/ramda/src/internal/_curry2.js","./internal/_filter":"node_modules/ramda/src/internal/_filter.js","./flip":"node_modules/ramda/src/flip.js","./uniq":"node_modules/ramda/src/uniq.js"}],"src/logic/utils/checkSimilarity.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.createNGram = void 0;

var _symmetricDifference = _interopRequireDefault(require("ramda/src/symmetricDifference"));

var _intersection = _interopRequireDefault(require("ramda/src/intersection"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createNGram = function createNGram(str) {
  // When using trigrams, assume each string begins with two spaces and ends with one
  var compStr = "  ".concat(str, " ");
  var size = 3; // 3 for trigrams

  var grams = [];

  for (var i = 0; i < compStr.length - (size - 1); i++) {
    grams[i] = compStr.substr(i, size);
  }

  return grams;
};

exports.createNGram = createNGram;

var _default = function _default(str) {
  var queryNGram = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var compareNGram = createNGram(str);
  var numUnique = (0, _symmetricDifference.default)(compareNGram, queryNGram).length;
  var numShared = (0, _intersection.default)(compareNGram, queryNGram).length;
  return {
    nGram: compareNGram,
    score: numShared / numUnique
  };
};

exports.default = _default;
},{"ramda/src/symmetricDifference":"node_modules/ramda/src/symmetricDifference.js","ramda/src/intersection":"node_modules/ramda/src/intersection.js"}],"src/logic/search.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cardSearch = void 0;

var _speech = require("ttt/logic/speech");

var _checkSimilarity = _interopRequireWildcard(require("ttt/logic/utils/checkSimilarity"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var isCardId = function isCardId(id) {
  return !!parseInt(id, 10);
};

var fetchCard = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(searchVal) {
    var fetchTail, resp;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            fetchTail = isCardId(searchVal) ? searchVal : "?name=".concat(searchVal);
            _context.next = 3;
            return fetch("https://api.magicthegathering.io/v1/cards/".concat(fetchTail));

          case 3:
            resp = _context.sent;
            return _context.abrupt("return", resp.json());

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function fetchCard(_x) {
    return _ref.apply(this, arguments);
  };
}();

var cardSuccess = function cardSuccess(responseData, searchVal) {
  var card = responseData.card,
      cards = responseData.cards;

  if (card) {
    return card;
  }

  var queryNGram = (0, _checkSimilarity.createNGram)(searchVal.toLowerCase());
  return cards.reduce(function (acc, curr, i, arr) {
    // If current card name is an exact match for the query, use that card...
    if (curr.name.toLowerCase() === searchVal.toLowerCase()) {
      arr.splice(1); // modifying original array breaks reduce

      return {
        data: curr
      };
    } // ... otherwise run a similarity check on the current card name and the query
    // and keep the most relevant one


    var currRelevance = (0, _checkSimilarity.default)(curr.name.toLowerCase(), queryNGram);

    if (currRelevance.score > acc.score) {
      return _objectSpread({
        data: curr
      }, currRelevance);
    }

    return acc;
  }, {
    data: {},
    nGram: [],
    score: 0
  }).data;
};

var cardSearch = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(searchVal, setCardData, setCardError, isFirstSearch) {
    var resp;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (isFirstSearch) {
              // See comments in function def for explanation on what this does
              // We only need to set up safari audio workarounds on the first search
              (0, _speech.safariAudioSetup)();
            }

            setCardData(null);
            setCardError('');

            if (searchVal) {
              _context2.next = 5;
              break;
            }

            return _context2.abrupt("return", {
              error: 'Please include a card ID or name.'
            });

          case 5:
            _context2.next = 7;
            return fetchCard(searchVal);

          case 7:
            resp = _context2.sent;

            if (!resp.error) {
              _context2.next = 10;
              break;
            }

            return _context2.abrupt("return", {
              error: resp.error
            });

          case 10:
            if (!(!isCardId(searchVal) && !resp.cards.length)) {
              _context2.next = 12;
              break;
            }

            return _context2.abrupt("return", {
              error: 'No cards found with that name. Please try again.'
            });

          case 12:
            return _context2.abrupt("return", cardSuccess(resp, searchVal));

          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function cardSearch(_x2, _x3, _x4, _x5) {
    return _ref2.apply(this, arguments);
  };
}();

exports.cardSearch = cardSearch;
},{"ttt/logic/speech":"src/logic/speech.js","ttt/logic/utils/checkSimilarity":"src/logic/utils/checkSimilarity.js"}],"src/logic/utils/orNull.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default(bool, truthy) {
  if (bool) {
    return truthy;
  }

  return null;
};

exports.default = _default;
},{}],"src/logic/utils/capitalize.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default() {
  var string = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return "".concat(string[0].toUpperCase()).concat(string.slice(1));
};

exports.default = _default;
},{}],"src/components/Search/Search.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
module.exports = {
  "searchInput": "_searchInput_b17dd",
  "submit": "_submit_b17dd",
  "loadingIcon": "_loadingIcon_b17dd",
  "loadingRotate": "_loadingRotate_b17dd"
};
},{"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/components/Search/Search.jsx":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _preact = require("preact");

var _hooks = require("preact/hooks");

var _Loading = _interopRequireDefault(require("ttt/components/icons/Loading"));

var _Body = _interopRequireDefault(require("ttt/components/typography/Body"));

var _banjo_fail = _interopRequireDefault(require("ttt/static/audio/banjo_fail.wav"));

var _search = require("ttt/logic/search");

var _card = _interopRequireDefault(require("ttt/logic/contexts/card"));

var _character = _interopRequireDefault(require("ttt/logic/contexts/character"));

var _orNull = _interopRequireDefault(require("ttt/logic/utils/orNull"));

var _capitalize = _interopRequireDefault(require("ttt/logic/utils/capitalize"));

var classes = _interopRequireWildcard(require("./Search.css"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Search = function Search() {
  var _useContext = (0, _hooks.useContext)(_card.default),
      setCardData = _useContext.setCardData,
      setCardError = _useContext.setCardError;

  var _useContext2 = (0, _hooks.useContext)(_character.default),
      character = _useContext2.character;

  var _useState = (0, _hooks.useState)(''),
      _useState2 = _slicedToArray(_useState, 2),
      searchVal = _useState2[0],
      setSearchVal = _useState2[1];

  var _useState3 = (0, _hooks.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isLoading = _useState4[0],
      setIsLoading = _useState4[1];

  var _useState5 = (0, _hooks.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      hasSearched = _useState6[0],
      setHasSearched = _useState6[1];

  var errorAudioRef = (0, _hooks.useRef)();

  var onChange = function onChange(e) {
    return setSearchVal(e.target.value);
  };

  var onSubmit = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var isFirstSearch, data;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              isFirstSearch = !hasSearched;
              setIsLoading(true);
              setHasSearched(true);
              _context.next = 5;
              return (0, _search.cardSearch)(searchVal, setCardData, setCardError, isFirstSearch);

            case 5:
              data = _context.sent;
              setIsLoading(false);

              if (data.error) {
                if (!errorAudioRef.current) {
                  errorAudioRef.current = new Audio(_banjo_fail.default);
                }

                errorAudioRef.current.play();
                setCardError(data.error);
              } else {
                setCardData(data);
              }

              setSearchVal('');

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function onSubmit() {
      return _ref.apply(this, arguments);
    };
  }();

  return (0, _preact.h)(_preact.Fragment, null, (0, _orNull.default)(!hasSearched, (0, _preact.h)(_Body.default, null, "Enter the Multiverse ID or name of a Magic the Gathering card to have", " ".concat((0, _capitalize.default)(character), " "), "read the card text!")), (0, _orNull.default)(isLoading, (0, _preact.h)(_Loading.default, {
    className: classes.loadingIcon
  })), (0, _preact.h)("input", {
    placeholder: "Multiverse ID or Card Name",
    value: searchVal,
    onChange: onChange,
    className: classes.searchInput,
    disabled: isLoading
  }), (0, _preact.h)("button", {
    onClick: onSubmit,
    className: classes.submit,
    disabled: isLoading
  }, "Submit"));
};

var _default = Search;
exports.default = _default;
},{"preact":"node_modules/preact/dist/preact.module.js","preact/hooks":"node_modules/preact/hooks/dist/hooks.module.js","ttt/components/icons/Loading":"src/components/icons/Loading/index.js","ttt/components/typography/Body":"src/components/typography/Body/index.js","ttt/static/audio/banjo_fail.wav":"src/static/audio/banjo_fail.wav","ttt/logic/search":"src/logic/search.js","ttt/logic/contexts/card":"src/logic/contexts/card.js","ttt/logic/contexts/character":"src/logic/contexts/character.js","ttt/logic/utils/orNull":"src/logic/utils/orNull.js","ttt/logic/utils/capitalize":"src/logic/utils/capitalize.js","./Search.css":"src/components/Search/Search.css"}],"src/components/Search/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Search = _interopRequireDefault(require("./Search"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _Search.default;
exports.default = _default;
},{"./Search":"src/components/Search/Search.jsx"}],"src/components/CharacterPortrait/CharacterPortrait.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
module.exports = {
  "portrait": "_portrait_76f7b",
  "rotateHead": "_rotateHead_76f7b",
  "headRotate": "_headRotate_76f7b"
};
},{"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/components/CharacterPortrait/CharacterPortrait.jsx":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _preact = require("preact");

var _hooks = require("preact/hooks");

var _character = require("ttt/constants/character");

var _browser = require("ttt/constants/browser");

var _browser2 = _interopRequireDefault(require("ttt/logic/contexts/browser"));

var _Image = _interopRequireDefault(require("ttt/components/Image"));

var classes = _interopRequireWildcard(require("./CharacterPortrait.css"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CharacterPortrait = function CharacterPortrait(_ref) {
  var className = _ref.className,
      _ref$shouldAnimate = _ref.shouldAnimate,
      shouldAnimate = _ref$shouldAnimate === void 0 ? true : _ref$shouldAnimate,
      _ref$character = _ref.character,
      character = _ref$character === void 0 ? _character.BANJO : _ref$character;
  var characterData = _character.CHARACTER_DATA[character];

  var _useContext = (0, _hooks.useContext)(_browser2.default),
      browser = _useContext.browser;

  var safariRotate = browser === _browser.SAFARI && shouldAnimate;
  return (0, _preact.h)("picture", null, (0, _preact.h)("source", {
    type: shouldAnimate ? 'image/webp' : 'image/png',
    srcSet: shouldAnimate ? characterData.animated : characterData.icon
  }), (0, _preact.h)(_Image.default, {
    src: characterData.icon,
    alt: character,
    className: "\n\t\t\t\t\t".concat(classes.portrait, " ").concat(safariRotate && classes.rotateHead, " ").concat(className, "\n\t\t\t\t")
  }));
};

var _default = CharacterPortrait;
exports.default = _default;
},{"preact":"node_modules/preact/dist/preact.module.js","preact/hooks":"node_modules/preact/hooks/dist/hooks.module.js","ttt/constants/character":"src/constants/character.js","ttt/constants/browser":"src/constants/browser.js","ttt/logic/contexts/browser":"src/logic/contexts/browser.js","ttt/components/Image":"src/components/Image/index.js","./CharacterPortrait.css":"src/components/CharacterPortrait/CharacterPortrait.css"}],"src/components/CharacterPortrait/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _CharacterPortrait = _interopRequireDefault(require("./CharacterPortrait"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _CharacterPortrait.default;
exports.default = _default;
},{"./CharacterPortrait":"src/components/CharacterPortrait/CharacterPortrait.jsx"}],"src/components/SpeechBox/SpeechBox.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
module.exports = {
  "textBox": "_textBox_0de2c",
  "characterHead": "_characterHead_0de2c",
  "boxBody": "_boxBody_0de2c"
};
},{"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/components/SpeechBox/SpeechBox.jsx":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _preact = require("preact");

var _hooks = require("preact/hooks");

var _card = _interopRequireDefault(require("ttt/logic/contexts/card"));

var _character = _interopRequireDefault(require("ttt/logic/contexts/character"));

var _orNull = _interopRequireDefault(require("ttt/logic/utils/orNull"));

var _speech = require("ttt/logic/speech");

var _Body = _interopRequireDefault(require("ttt/components/typography/Body"));

var _CharacterPortrait = _interopRequireDefault(require("ttt/components/CharacterPortrait"));

var _character2 = require("ttt/constants/character");

var classes = _interopRequireWildcard(require("./SpeechBox.css"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var SpeechBox = function SpeechBox(_ref) {
  var className = _ref.className;

  var _useState = (0, _hooks.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      audioArray = _useState2[0],
      setAudioArray = _useState2[1];

  var _useState3 = (0, _hooks.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isSpeaking = _useState4[0],
      setIsSpeaking = _useState4[1];

  var _useState5 = (0, _hooks.useState)(''),
      _useState6 = _slicedToArray(_useState5, 2),
      displayText = _useState6[0],
      setDisplayText = _useState6[1];

  var _useContext = (0, _hooks.useContext)(_card.default),
      cardData = _useContext.cardData,
      cardError = _useContext.cardError,
      setCardError = _useContext.setCardError;

  var _useContext2 = (0, _hooks.useContext)(_character.default),
      character = _useContext2.character;

  var textRef = (0, _hooks.useRef)('');
  var syllableTimeoutsRef = (0, _hooks.useRef)([]);
  var wordTimeoutsRef = (0, _hooks.useRef)([]);
  var cardDescriptionRef = (0, _hooks.useRef)();
  var isInitializedRef = (0, _hooks.useRef)(false);
  var characterData = _character2.CHARACTER_DATA[character]; // Multiplier to convert seconds from audio duration to milliseconds
  // By dropping the multiplier from 1000, we're able to speed up playback.

  var audioSpeed;

  switch (character) {
    case _character2.KAZOOIE:
      audioSpeed = 1000;
      break;

    case _character2.GRUNTILDA:
      audioSpeed = 680;
      break;

    default:
      // BANJO
      audioSpeed = 850;
  }

  var setOrResetSamples = (0, _hooks.useCallback)(function () {
    if (characterData) {
      var _characterData$audio = characterData.audio,
          low = _characterData$audio.low,
          mid = _characterData$audio.mid,
          hi = _characterData$audio.hi;
      var sampleArray = [low, mid, hi];

      if (audioArray.length) {
        setAudioArray(_toConsumableArray(audioArray.map(function (audioEl, i) {
          audioEl.src = sampleArray[i];
          return audioEl;
        })));
      } else {
        setAudioArray(sampleArray.map(function (sample) {
          return new Audio(sample);
        }));
      }
    }
  }, [character]);
  var reset = (0, _hooks.useCallback)(function () {
    audioArray.forEach(function (audio) {
      return audio.src = '';
    });
    textRef.current = '';
    syllableTimeoutsRef.current.forEach(function (timeout) {
      return clearTimeout(timeout);
    });
    wordTimeoutsRef.current.forEach(function (timeout) {
      return clearTimeout(timeout);
    });
    setDisplayText('');
  }, [audioArray]);
  (0, _hooks.useEffect)(function () {
    setCardError('');
    reset();
    setOrResetSamples();
  }, [character]);
  (0, _hooks.useEffect)(function () {
    if (isInitializedRef.current) {
      // Only run this after initialization of component
      if (cardData && cardDescriptionRef.current) {
        // Safari doesn't allow auto-play audio
        // so we need to allow the user to enable audio on each card search
        // @TODO there may be a way to have audio begin 'muted'
        (0, _speech.speakAndSet)({
          responseText: cardData.text || cardData.flavor,
          textRef: textRef,
          setDisplayText: setDisplayText,
          voiceArray: audioArray,
          syllableTimeoutsRef: syllableTimeoutsRef,
          wordTimeoutsRef: wordTimeoutsRef,
          setIsSpeaking: setIsSpeaking,
          audioSpeed: audioSpeed
        });
      } else {
        // cardData gets reset to null before a search
        reset();
        setOrResetSamples();
      }
    } else {
      isInitializedRef.current = true;
    }
  }, [cardData]);
  return (0, _orNull.default)(cardData || cardError, (0, _preact.h)("div", {
    className: "".concat(className, " ").concat(classes.textBox)
  }, (0, _preact.h)(_CharacterPortrait.default, {
    className: classes.characterHead,
    character: cardError ? _character2.BANJO : character,
    shouldAnimate: isSpeaking && !cardError
  }), (0, _preact.h)("div", {
    className: classes.cardDesc,
    ref: cardDescriptionRef
  }, (0, _preact.h)(_Body.default, {
    className: classes.boxBody
  }, cardError || displayText))));
};

var _default = SpeechBox;
exports.default = _default;
},{"preact":"node_modules/preact/dist/preact.module.js","preact/hooks":"node_modules/preact/hooks/dist/hooks.module.js","ttt/logic/contexts/card":"src/logic/contexts/card.js","ttt/logic/contexts/character":"src/logic/contexts/character.js","ttt/logic/utils/orNull":"src/logic/utils/orNull.js","ttt/logic/speech":"src/logic/speech.js","ttt/components/typography/Body":"src/components/typography/Body/index.js","ttt/components/CharacterPortrait":"src/components/CharacterPortrait/index.js","ttt/constants/character":"src/constants/character.js","./SpeechBox.css":"src/components/SpeechBox/SpeechBox.css"}],"src/components/SpeechBox/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _SpeechBox = _interopRequireDefault(require("./SpeechBox"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _SpeechBox.default;
exports.default = _default;
},{"./SpeechBox":"src/components/SpeechBox/SpeechBox.jsx"}],"src/components/typography/Title/Title.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
module.exports = {
  "title": "_title_7b4f2"
};
},{"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/components/typography/Title/Title.jsx":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _preact = require("preact");

var classes = _interopRequireWildcard(require("./Title.css"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Title = function Title(_ref) {
  var className = _ref.className,
      children = _ref.children;
  return (0, _preact.h)("h1", {
    className: "".concat(className, " ").concat(classes.title)
  }, children);
};

var _default = Title;
exports.default = _default;
},{"preact":"node_modules/preact/dist/preact.module.js","./Title.css":"src/components/typography/Title/Title.css"}],"src/components/typography/Title/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Title = _interopRequireDefault(require("./Title"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _Title.default;
exports.default = _default;
},{"./Title":"src/components/typography/Title/Title.jsx"}],"src/logic/utils/ternary.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default(bool, truthy, falsey) {
  if (bool) {
    return truthy;
  }

  return falsey;
};

exports.default = _default;
},{}],"src/components/icons/Menu/Menu.jsx":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _preact = require("preact");

var _Icon = _interopRequireDefault(require("ttt/components/icons/Icon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Menu = function Menu(_ref) {
  var className = _ref.className;
  return (0, _preact.h)(_Icon.default, {
    className: className
  }, (0, _preact.h)("path", {
    d: "M12 16a2 2 0 012 2 2 2 0 01-2 2 2 2 0 01-2-2 2 2 0 012-2m0-6a2 2 0 012 2 2 2 0 01-2 2 2 2 0 01-2-2 2 2 0 012-2m0-6a2 2 0 012 2 2 2 0 01-2 2 2 2 0 01-2-2 2 2 0 012-2z",
    fill: "#fff"
  }));
};

var _default = Menu;
exports.default = _default;
},{"preact":"node_modules/preact/dist/preact.module.js","ttt/components/icons/Icon":"src/components/icons/Icon/index.js"}],"src/components/icons/Menu/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Menu = _interopRequireDefault(require("./Menu"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _Menu.default;
exports.default = _default;
},{"./Menu":"src/components/icons/Menu/Menu.jsx"}],"src/components/icons/X/X.jsx":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _preact = require("preact");

var _Icon = _interopRequireDefault(require("ttt/components/icons/Icon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var X = function X(_ref) {
  var className = _ref.className,
      colorClassName = _ref.colorClassName;
  return (0, _preact.h)(_Icon.default, {
    className: className
  }, (0, _preact.h)("path", {
    d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z",
    className: colorClassName
  }));
};

var _default = X;
exports.default = _default;
},{"preact":"node_modules/preact/dist/preact.module.js","ttt/components/icons/Icon":"src/components/icons/Icon/index.js"}],"src/components/icons/X/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _X = _interopRequireDefault(require("./X"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _X.default;
exports.default = _default;
},{"./X":"src/components/icons/X/X.jsx"}],"src/components/Menu/Menu.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
module.exports = {
  "menuContent": "_menuContent_3253f",
  "menuPortrait": "_menuPortrait_3253f",
  "icon": "_icon_3253f",
  "closeIcon": "_closeIcon_3253f",
  "iconButton": "_iconButton_3253f",
  "text": "_text_3253f",
  "portraitRow": "_portraitRow_3253f",
  "selectButton": "_selectButton_3253f",
  "currentSelection": "_currentSelection_3253f"
};
},{"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/components/Menu/Menu.jsx":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _preact = require("preact");

var _hooks = require("preact/hooks");

var _ternary = _interopRequireDefault(require("ttt/logic/utils/ternary"));

var _character = _interopRequireDefault(require("ttt/logic/contexts/character"));

var _card = _interopRequireDefault(require("ttt/logic/contexts/card"));

var _character2 = require("ttt/constants/character");

var _Menu = _interopRequireDefault(require("ttt/components/icons/Menu"));

var _X = _interopRequireDefault(require("ttt/components/icons/X"));

var _Body = _interopRequireDefault(require("ttt/components/typography/Body"));

var _CharacterPortrait = _interopRequireDefault(require("ttt/components/CharacterPortrait"));

var classes = _interopRequireWildcard(require("./Menu.css"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Button = function Button(_ref) {
  var setIsMenuOpen = _ref.setIsMenuOpen,
      type = _ref.type,
      className = _ref.className;
  var isMenuButton = type === 'menu';
  var classString = "".concat(classes.icon, " ").concat(className);
  return (0, _preact.h)("button", {
    onClick: function onClick() {
      return setIsMenuOpen(isMenuButton);
    },
    className: classes.iconButton
  }, (0, _ternary.default)(isMenuButton, (0, _preact.h)(_Menu.default, {
    className: classString
  }), (0, _preact.h)(_X.default, {
    className: classString,
    colorClassName: classes.closeIcon
  })));
};

var CharacterSelectPortrait = function CharacterSelectPortrait(_ref2) {
  var setCharacter = _ref2.setCharacter,
      setCardData = _ref2.setCardData,
      character = _ref2.character,
      type = _ref2.type;
  return (0, _preact.h)("button", {
    onClick: function onClick(e) {
      e.preventDefault();
      e.stopPropagation();
      setCardData(null);
      setCharacter(type);
    },
    className: "\n\t\t\t".concat(classes.selectButton, " \n\t\t\t").concat(character === type && classes.currentSelection, "\n\t\t")
  }, (0, _preact.h)(_CharacterPortrait.default, {
    character: type,
    shouldAnimate: character === type,
    className: classes.menuPortrait
  }));
};

var Menu = function Menu(_ref3) {
  var className = _ref3.className;

  var _useContext = (0, _hooks.useContext)(_character.default),
      setCharacter = _useContext.setCharacter,
      character = _useContext.character;

  var _useContext2 = (0, _hooks.useContext)(_card.default),
      setCardData = _useContext2.setCardData;

  return (0, _preact.h)("div", {
    className: "".concat(classes.menuContent, " ").concat(className)
  }, (0, _preact.h)(_Body.default, {
    className: classes.text
  }, "Select a character to read your cards"), (0, _preact.h)("div", {
    className: classes.portraitRow
  }, Object.keys(_character2.CHARACTER_DATA).map(function (charKey) {
    return (0, _preact.h)(CharacterSelectPortrait, {
      type: charKey,
      character: character,
      setCharacter: setCharacter,
      setCardData: setCardData
    });
  })));
};

var _default = Menu;
exports.default = _default;
},{"preact":"node_modules/preact/dist/preact.module.js","preact/hooks":"node_modules/preact/hooks/dist/hooks.module.js","ttt/logic/utils/ternary":"src/logic/utils/ternary.js","ttt/logic/contexts/character":"src/logic/contexts/character.js","ttt/logic/contexts/card":"src/logic/contexts/card.js","ttt/constants/character":"src/constants/character.js","ttt/components/icons/Menu":"src/components/icons/Menu/index.js","ttt/components/icons/X":"src/components/icons/X/index.js","ttt/components/typography/Body":"src/components/typography/Body/index.js","ttt/components/CharacterPortrait":"src/components/CharacterPortrait/index.js","./Menu.css":"src/components/Menu/Menu.css"}],"src/components/Menu/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Menu = _interopRequireDefault(require("./Menu"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _Menu.default;
exports.default = _default;
},{"./Menu":"src/components/Menu/Menu.jsx"}],"src/static/images/banjo_jace.png":[function(require,module,exports) {
module.exports = "/banjo_jace.05b5f88b.png";
},{}],"src/App.jsx":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("regenerator-runtime/runtime");

var _preact = require("preact");

var _hooks = require("preact/hooks");

var classes = _interopRequireWildcard(require("./App.css"));

var _Provider = _interopRequireDefault(require("ttt/components/Provider"));

var _Image = _interopRequireDefault(require("ttt/components/Image"));

var _Search = _interopRequireDefault(require("ttt/components/Search"));

var _SpeechBox = _interopRequireDefault(require("ttt/components/SpeechBox"));

var _Title = _interopRequireDefault(require("ttt/components/typography/Title"));

var _Menu = _interopRequireDefault(require("ttt/components/Menu"));

var _card = _interopRequireDefault(require("ttt/logic/contexts/card"));

var _orNull = _interopRequireDefault(require("ttt/logic/utils/orNull"));

var _banjo_jace = _interopRequireDefault(require("ttt/static/images/banjo_jace.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var AppContent = function AppContent() {
  var _useContext = (0, _hooks.useContext)(_card.default),
      cardData = _useContext.cardData,
      cardError = _useContext.cardError;

  return (0, _preact.h)("div", {
    className: classes.app
  }, (0, _preact.h)("div", {
    className: classes.backgroundContainer
  }, (0, _preact.h)("div", {
    className: classes.background
  })), (0, _preact.h)("div", {
    className: classes.pageWrapper
  }, (0, _preact.h)("div", {
    className: classes.banjoJaceWrapper
  }, (0, _preact.h)(_Image.default, {
    src: _banjo_jace.default,
    alt: "Banjo the Mindwalker",
    className: classes.banjoJace
  })), (0, _preact.h)("div", {
    className: classes.contentContainer
  }, (0, _orNull.default)(cardData || cardError, (0, _preact.h)(_Title.default, {
    className: classes.cardTitle
  }, cardError ? 'Error!' : cardData === null || cardData === void 0 ? void 0 : cardData.name)), (0, _preact.h)(_SpeechBox.default, null), (0, _preact.h)(_Search.default, null), (0, _preact.h)(_Menu.default, {
    className: classes.menu
  }))));
};

var App = function App() {
  return (0, _preact.h)(_Provider.default, null, (0, _preact.h)(AppContent, null));
};

var _default = App;
exports.default = _default;
},{"regenerator-runtime/runtime":"node_modules/regenerator-runtime/runtime.js","preact":"node_modules/preact/dist/preact.module.js","preact/hooks":"node_modules/preact/hooks/dist/hooks.module.js","./App.css":"src/App.css","ttt/components/Provider":"src/components/Provider/index.js","ttt/components/Image":"src/components/Image/index.js","ttt/components/Search":"src/components/Search/index.js","ttt/components/SpeechBox":"src/components/SpeechBox/index.js","ttt/components/typography/Title":"src/components/typography/Title/index.js","ttt/components/Menu":"src/components/Menu/index.js","ttt/logic/contexts/card":"src/logic/contexts/card.js","ttt/logic/utils/orNull":"src/logic/utils/orNull.js","ttt/static/images/banjo_jace.png":"src/static/images/banjo_jace.png"}],"src/index.js":[function(require,module,exports) {
"use strict";

var _preact = require("preact");

var _App = _interopRequireDefault(require("ttt/App.jsx"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mount = document.querySelector('#app');
(0, _preact.render)((0, _preact.h)(_App.default, null), mount);
},{"preact":"node_modules/preact/dist/preact.module.js","ttt/App.jsx":"src/App.jsx"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "65422" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/index.js"], null)
//# sourceMappingURL=/src.a2b27638.js.map