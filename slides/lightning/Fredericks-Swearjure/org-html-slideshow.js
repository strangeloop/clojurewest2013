function e(a) {
  throw a;
}
var g = void 0, l = !0, m = null, n = !1;
function aa() {
  return function(a) {
    return a
  }
}
function o(a) {
  return function() {
    return this[a]
  }
}
function p(a) {
  return function() {
    return a
  }
}
var q, ba = this;
function ca(a, b) {
  var c = a.split("."), d = ba;
  !(c[0] in d) && d.execScript && d.execScript("var " + c[0]);
  for(var f;c.length && (f = c.shift());) {
    !c.length && s(b) ? d[f] = b : d = d[f] ? d[f] : d[f] = {}
  }
}
function da(a) {
  for(var a = a.split("."), b = ba, c;c = a.shift();) {
    if(b[c] != m) {
      b = b[c]
    }else {
      return m
    }
  }
  return b
}
function ea() {
}
function u(a) {
  var b = typeof a;
  if("object" == b) {
    if(a) {
      if(a instanceof Array) {
        return"array"
      }
      if(a instanceof Object) {
        return b
      }
      var c = Object.prototype.toString.call(a);
      if("[object Window]" == c) {
        return"object"
      }
      if("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) {
        return"array"
      }
      if("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) {
        return"function"
      }
    }else {
      return"null"
    }
  }else {
    if("function" == b && "undefined" == typeof a.call) {
      return"object"
    }
  }
  return b
}
function s(a) {
  return a !== g
}
function fa(a) {
  return"array" == u(a)
}
function ga(a) {
  var b = u(a);
  return"array" == b || "object" == b && "number" == typeof a.length
}
function ia(a) {
  return"string" == typeof a
}
function ka(a) {
  return"function" == u(a)
}
function la(a) {
  a = u(a);
  return"object" == a || "array" == a || "function" == a
}
function ma(a) {
  return a[na] || (a[na] = ++oa)
}
var na = "closure_uid_" + Math.floor(2147483648 * Math.random()).toString(36), oa = 0;
function pa(a, b, c) {
  return a.call.apply(a.bind, arguments)
}
function qa(a, b, c) {
  var d = b || ba;
  if(2 < arguments.length) {
    var f = Array.prototype.slice.call(arguments, 2);
    return function() {
      var b = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply(b, f);
      return a.apply(d, b)
    }
  }
  return function() {
    return a.apply(d, arguments)
  }
}
function sa(a, b, c) {
  sa = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? pa : qa;
  return sa.apply(m, arguments)
}
function ta(a, b) {
  var c = Array.prototype.slice.call(arguments, 1);
  return function() {
    var b = Array.prototype.slice.call(arguments);
    b.unshift.apply(b, c);
    return a.apply(this, b)
  }
}
var ua = Date.now || function() {
  return+new Date
};
function va(a, b) {
  function c() {
  }
  c.prototype = b.prototype;
  a.kb = b.prototype;
  a.prototype = new c;
  a.prototype.constructor = a
}
;function wa(a) {
  this.stack = Error().stack || "";
  a && (this.message = "" + a)
}
va(wa, Error);
wa.prototype.name = "CustomError";
function xa(a, b) {
  for(var c = 1;c < arguments.length;c++) {
    var d = ("" + arguments[c]).replace(/\$/g, "$$$$"), a = a.replace(/\%s/, d)
  }
  return a
}
var ya = /(\.\d+)|(\d+)|(\D+)/g;
function za(a, b) {
  if(a == b) {
    return 0
  }
  if(!a) {
    return-1
  }
  if(!b) {
    return 1
  }
  for(var c = a.toLowerCase().match(ya), d = b.toLowerCase().match(ya), f = Math.min(c.length, d.length), h = 0;h < f;h++) {
    var i = c[h], j = d[h];
    if(i != j) {
      return c = parseInt(i, 10), !isNaN(c) && (d = parseInt(j, 10), !isNaN(d) && c - d) ? c - d : i < j ? -1 : 1
    }
  }
  return c.length != d.length ? c.length - d.length : a < b ? -1 : 1
}
var Aa = /^[a-zA-Z0-9\-_.!~*'()]*$/;
function Ba(a) {
  a = "" + a;
  return!Aa.test(a) ? encodeURIComponent(a) : a
}
function Ca(a) {
  if(!Da.test(a)) {
    return a
  }
  -1 != a.indexOf("&") && (a = a.replace(Fa, "&amp;"));
  -1 != a.indexOf("<") && (a = a.replace(Ga, "&lt;"));
  -1 != a.indexOf(">") && (a = a.replace(Ha, "&gt;"));
  -1 != a.indexOf('"') && (a = a.replace(Ia, "&quot;"));
  return a
}
var Fa = /&/g, Ga = /</g, Ha = />/g, Ia = /\"/g, Da = /[&<>\"]/, Ja = {"\x00":"\\0", "\u0008":"\\b", "\u000c":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t", "\x0B":"\\x0B", '"':'\\"', "\\":"\\\\"}, Ka = {"'":"\\'"};
function La(a) {
  a = "" + a;
  if(a.quote) {
    return a.quote()
  }
  for(var b = ['"'], c = 0;c < a.length;c++) {
    var d = a.charAt(c), f = d.charCodeAt(0), h = b, i = c + 1, j;
    if(!(j = Ja[d])) {
      if(!(31 < f && 127 > f)) {
        if(d in Ka) {
          d = Ka[d]
        }else {
          if(d in Ja) {
            d = Ka[d] = Ja[d]
          }else {
            f = d;
            j = d.charCodeAt(0);
            if(31 < j && 127 > j) {
              f = d
            }else {
              if(256 > j) {
                if(f = "\\x", 16 > j || 256 < j) {
                  f += "0"
                }
              }else {
                f = "\\u", 4096 > j && (f += "0")
              }
              f += j.toString(16).toUpperCase()
            }
            d = Ka[d] = f
          }
        }
      }
      j = d
    }
    h[i] = j
  }
  b.push('"');
  return b.join("")
}
function Ma(a, b) {
  for(var c = 0, d = ("" + a).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), f = ("" + b).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), h = Math.max(d.length, f.length), i = 0;0 == c && i < h;i++) {
    var j = d[i] || "", k = f[i] || "", r = RegExp("(\\d*)(\\D*)", "g"), x = RegExp("(\\d*)(\\D*)", "g");
    do {
      var t = r.exec(j) || ["", "", ""], y = x.exec(k) || ["", "", ""];
      if(0 == t[0].length && 0 == y[0].length) {
        break
      }
      c = ((0 == t[1].length ? 0 : parseInt(t[1], 10)) < (0 == y[1].length ? 0 : parseInt(y[1], 10)) ? -1 : (0 == t[1].length ? 0 : parseInt(t[1], 10)) > (0 == y[1].length ? 0 : parseInt(y[1], 10)) ? 1 : 0) || ((0 == t[2].length) < (0 == y[2].length) ? -1 : (0 == t[2].length) > (0 == y[2].length) ? 1 : 0) || (t[2] < y[2] ? -1 : t[2] > y[2] ? 1 : 0)
    }while(0 == c)
  }
  return c
}
function Na(a) {
  for(var b = 0, c = 0;c < a.length;++c) {
    b = 31 * b + a.charCodeAt(c), b %= 4294967296
  }
  return b
}
var Oa = {};
function Pa(a) {
  return Oa[a] || (Oa[a] = ("" + a).replace(/\-([a-z])/g, function(a, c) {
    return c.toUpperCase()
  }))
}
;function Qa(a, b) {
  b.unshift(a);
  wa.call(this, xa.apply(m, b));
  b.shift()
}
va(Qa, wa);
Qa.prototype.name = "AssertionError";
function Ra(a, b) {
  e(new Qa("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1)))
}
;var Sa = Array.prototype, Ta = Sa.indexOf ? function(a, b, c) {
  return Sa.indexOf.call(a, b, c)
} : function(a, b, c) {
  c = c == m ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
  if(ia(a)) {
    return!ia(b) || 1 != b.length ? -1 : a.indexOf(b, c)
  }
  for(;c < a.length;c++) {
    if(c in a && a[c] === b) {
      return c
    }
  }
  return-1
}, Ua = Sa.forEach ? function(a, b, c) {
  Sa.forEach.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, f = ia(a) ? a.split("") : a, h = 0;h < d;h++) {
    h in f && b.call(c, f[h], h, a)
  }
};
function Va(a) {
  return Sa.concat.apply(Sa, arguments)
}
function Wa(a) {
  if(fa(a)) {
    return Va(a)
  }
  for(var b = [], c = 0, d = a.length;c < d;c++) {
    b[c] = a[c]
  }
  return b
}
function Xa(a) {
  return fa(a) ? Va(a) : Wa(a)
}
function Ya(a, b) {
  for(var c = 1;c < arguments.length;c++) {
    var d = arguments[c], f;
    if(fa(d) || (f = ga(d)) && d.hasOwnProperty("callee")) {
      a.push.apply(a, d)
    }else {
      if(f) {
        for(var h = a.length, i = d.length, j = 0;j < i;j++) {
          a[h + j] = d[j]
        }
      }else {
        a.push(d)
      }
    }
  }
}
function Za(a, b, c, d) {
  Sa.splice.apply(a, $a(arguments, 1))
}
function $a(a, b, c) {
  return 2 >= arguments.length ? Sa.slice.call(a, b) : Sa.slice.call(a, b, c)
}
;function ab(a) {
  return(a = a.className) && "function" == typeof a.split ? a.split(/\s+/) : []
}
function bb(a, b) {
  var c = ab(a), d = $a(arguments, 1), f;
  f = c;
  for(var h = 0, i = 0;i < d.length;i++) {
    0 <= Ta(f, d[i]) || (f.push(d[i]), h++)
  }
  f = h == d.length;
  a.className = c.join(" ");
  return f
}
function cb(a, b) {
  for(var c = ab(a), d = $a(arguments, 1), f = c, h = 0, i = 0;i < f.length;i++) {
    0 <= Ta(d, f[i]) && (Za(f, i--, 1), h++)
  }
  a.className = c.join(" ")
}
;function db() {
}
db.prototype.Kc = n;
db.prototype.qb = function() {
  this.Kc || (this.Kc = l, this.ia())
};
db.prototype.ia = function() {
};
var eb, fb, gb, ib;
function jb() {
  return ba.navigator ? ba.navigator.userAgent : m
}
ib = gb = fb = eb = n;
var kb;
if(kb = jb()) {
  var lb = ba.navigator;
  eb = 0 == kb.indexOf("Opera");
  fb = !eb && -1 != kb.indexOf("MSIE");
  gb = !eb && -1 != kb.indexOf("WebKit");
  ib = !eb && !gb && "Gecko" == lb.product
}
var mb = eb, nb = fb, ob = ib, pb = gb, qb = ba.navigator, rb = -1 != (qb && qb.platform || "").indexOf("Mac"), sb;
a: {
  var tb = "", ub;
  if(mb && ba.opera) {
    var vb = ba.opera.version, tb = "function" == typeof vb ? vb() : vb
  }else {
    if(ob ? ub = /rv\:([^\);]+)(\)|;)/ : nb ? ub = /MSIE\s+([^\);]+)(\)|;)/ : pb && (ub = /WebKit\/(\S+)/), ub) {
      var wb = ub.exec(jb()), tb = wb ? wb[1] : ""
    }
  }
  if(nb) {
    var xb, yb = ba.document;
    xb = yb ? yb.documentMode : g;
    if(xb > parseFloat(tb)) {
      sb = "" + xb;
      break a
    }
  }
  sb = tb
}
var zb = {};
function Ab(a) {
  return zb[a] || (zb[a] = 0 <= Ma(sb, a))
}
;var Bb;
!nb || Ab("9");
var Cb = nb && !Ab("8");
function Db(a, b) {
  this.type = a;
  this.currentTarget = this.target = b
}
va(Db, db);
q = Db.prototype;
q.ia = function() {
  delete this.type;
  delete this.target;
  delete this.currentTarget
};
q.Qa = n;
q.zb = l;
q.stopPropagation = function() {
  this.Qa = l
};
q.preventDefault = function() {
  this.zb = n
};
var Eb = new Function("a", "return a");
function Fb(a, b) {
  a && this.ub(a, b)
}
va(Fb, Db);
q = Fb.prototype;
q.target = m;
q.relatedTarget = m;
q.offsetX = 0;
q.offsetY = 0;
q.clientX = 0;
q.clientY = 0;
q.screenX = 0;
q.screenY = 0;
q.button = 0;
q.keyCode = 0;
q.charCode = 0;
q.ctrlKey = n;
q.altKey = n;
q.shiftKey = n;
q.metaKey = n;
q.La = m;
q.ub = function(a, b) {
  var c = this.type = a.type;
  Db.call(this, c);
  this.target = a.target || a.srcElement;
  this.currentTarget = b;
  var d = a.relatedTarget;
  if(d) {
    if(ob) {
      try {
        Eb(d.nodeName)
      }catch(f) {
        d = m
      }
    }
  }else {
    "mouseover" == c ? d = a.fromElement : "mouseout" == c && (d = a.toElement)
  }
  this.relatedTarget = d;
  this.offsetX = a.offsetX !== g ? a.offsetX : a.layerX;
  this.offsetY = a.offsetY !== g ? a.offsetY : a.layerY;
  this.clientX = a.clientX !== g ? a.clientX : a.pageX;
  this.clientY = a.clientY !== g ? a.clientY : a.pageY;
  this.screenX = a.screenX || 0;
  this.screenY = a.screenY || 0;
  this.button = a.button;
  this.keyCode = a.keyCode || 0;
  this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
  this.ctrlKey = a.ctrlKey;
  this.altKey = a.altKey;
  this.shiftKey = a.shiftKey;
  this.metaKey = a.metaKey;
  this.state = a.state;
  this.La = a;
  delete this.zb;
  delete this.Qa
};
q.stopPropagation = function() {
  Fb.kb.stopPropagation.call(this);
  this.La.stopPropagation ? this.La.stopPropagation() : this.La.cancelBubble = l
};
q.preventDefault = function() {
  Fb.kb.preventDefault.call(this);
  var a = this.La;
  if(a.preventDefault) {
    a.preventDefault()
  }else {
    if(a.returnValue = n, Cb) {
      try {
        if(a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) {
          a.keyCode = -1
        }
      }catch(b) {
      }
    }
  }
};
q.ia = function() {
  Fb.kb.ia.call(this);
  this.relatedTarget = this.currentTarget = this.target = this.La = m
};
function Gb() {
}
var Hb = 0;
q = Gb.prototype;
q.key = 0;
q.ib = n;
q.zc = n;
q.ub = function(a, b, c, d, f, h) {
  ka(a) ? this.Mc = l : a && a.handleEvent && ka(a.handleEvent) ? this.Mc = n : e(Error("Invalid listener argument"));
  this.xb = a;
  this.Sc = b;
  this.src = c;
  this.type = d;
  this.capture = !!f;
  this.lc = h;
  this.zc = n;
  this.key = ++Hb;
  this.ib = n
};
q.handleEvent = function(a) {
  return this.Mc ? this.xb.call(this.lc || this.src, a) : this.xb.handleEvent.call(this.xb, a)
};
function Ib(a, b) {
  this.Pc = b;
  this.Na = [];
  a > this.Pc && e(Error("[goog.structs.SimplePool] Initial cannot be greater than max"));
  for(var c = 0;c < a;c++) {
    this.Na.push(this.ra ? this.ra() : {})
  }
}
va(Ib, db);
Ib.prototype.ra = m;
Ib.prototype.Jc = m;
function Jb(a) {
  return a.Na.length ? a.Na.pop() : a.ra ? a.ra() : {}
}
function Kb(a, b) {
  a.Na.length < a.Pc ? a.Na.push(b) : Lb(a, b)
}
function Lb(a, b) {
  if(a.Jc) {
    a.Jc(b)
  }else {
    if(la(b)) {
      if(ka(b.qb)) {
        b.qb()
      }else {
        for(var c in b) {
          delete b[c]
        }
      }
    }
  }
}
Ib.prototype.ia = function() {
  Ib.kb.ia.call(this);
  for(var a = this.Na;a.length;) {
    Lb(this, a.pop())
  }
  delete this.Na
};
var Mb, Nb = (Mb = "ScriptEngine" in ba && "JScript" == ba.ScriptEngine()) ? ba.ScriptEngineMajorVersion() + "." + ba.ScriptEngineMinorVersion() + "." + ba.ScriptEngineBuildVersion() : "0";
var Ob, Pb, Qb, Rb, Sb, Tb, Ub, Vb, Wb, Xb, Yb;
(function() {
  function a() {
    return{G:0, ga:0}
  }
  function b() {
    return[]
  }
  function c() {
    function a(b) {
      return i.call(a.src, a.key, b)
    }
    return a
  }
  function d() {
    return new Gb
  }
  function f() {
    return new Fb
  }
  var h = Mb && !(0 <= Ma(Nb, "5.7")), i;
  Tb = function(a) {
    i = a
  };
  if(h) {
    Ob = function() {
      return Jb(j)
    };
    Pb = function(a) {
      Kb(j, a)
    };
    Qb = function() {
      return Jb(k)
    };
    Rb = function(a) {
      Kb(k, a)
    };
    Sb = function() {
      return Jb(r)
    };
    Ub = function() {
      Kb(r, c())
    };
    Vb = function() {
      return Jb(x)
    };
    Wb = function(a) {
      Kb(x, a)
    };
    Xb = function() {
      return Jb(t)
    };
    Yb = function(a) {
      Kb(t, a)
    };
    var j = new Ib(0, 600);
    j.ra = a;
    var k = new Ib(0, 600);
    k.ra = b;
    var r = new Ib(0, 600);
    r.ra = c;
    var x = new Ib(0, 600);
    x.ra = d;
    var t = new Ib(0, 600);
    t.ra = f
  }else {
    Ob = a, Pb = ea, Qb = b, Rb = ea, Sb = c, Ub = ea, Vb = d, Wb = ea, Xb = f, Yb = ea
  }
})();
function Zb(a, b) {
  for(var c in a) {
    b.call(g, a[c], c, a)
  }
}
function $b(a) {
  var b = [], c = 0, d;
  for(d in a) {
    b[c++] = a[d]
  }
  return b
}
function ac(a) {
  var b = [], c = 0, d;
  for(d in a) {
    b[c++] = d
  }
  return b
}
function bc(a) {
  var b = {}, c;
  for(c in a) {
    b[c] = a[c]
  }
  return b
}
var cc = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
function dc(a, b) {
  for(var c, d, f = 1;f < arguments.length;f++) {
    d = arguments[f];
    for(c in d) {
      a[c] = d[c]
    }
    for(var h = 0;h < cc.length;h++) {
      c = cc[h], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
    }
  }
}
;var ec = {}, fc = {}, gc = {}, hc = {};
function ic(a, b, c, d, f) {
  if(b) {
    if(fa(b)) {
      for(var h = 0;h < b.length;h++) {
        ic(a, b[h], c, d, f)
      }
      return m
    }
    var d = !!d, i = fc;
    b in i || (i[b] = Ob());
    i = i[b];
    d in i || (i[d] = Ob(), i.G++);
    var i = i[d], j = ma(a), k;
    i.ga++;
    if(i[j]) {
      k = i[j];
      for(h = 0;h < k.length;h++) {
        if(i = k[h], i.xb == c && i.lc == f) {
          if(i.ib) {
            break
          }
          return k[h].key
        }
      }
    }else {
      k = i[j] = Qb(), i.G++
    }
    h = Sb();
    h.src = a;
    i = Vb();
    i.ub(c, h, a, b, d, f);
    c = i.key;
    h.key = c;
    k.push(i);
    ec[c] = i;
    gc[j] || (gc[j] = Qb());
    gc[j].push(i);
    a.addEventListener ? (a == ba || !a.Ic) && a.addEventListener(b, h, d) : a.attachEvent(b in hc ? hc[b] : hc[b] = "on" + b, h);
    return c
  }
  e(Error("Invalid event type"))
}
function jc(a, b, c, d, f) {
  if(fa(b)) {
    for(var h = 0;h < b.length;h++) {
      jc(a, b[h], c, d, f)
    }
  }else {
    d = !!d;
    a: {
      h = fc;
      if(b in h && (h = h[b], d in h && (h = h[d], a = ma(a), h[a]))) {
        a = h[a];
        break a
      }
      a = m
    }
    if(a) {
      for(h = 0;h < a.length;h++) {
        if(a[h].xb == c && a[h].capture == d && a[h].lc == f) {
          kc(a[h].key);
          break
        }
      }
    }
  }
}
function kc(a) {
  if(ec[a]) {
    var b = ec[a];
    if(!b.ib) {
      var c = b.src, d = b.type, f = b.Sc, h = b.capture;
      c.removeEventListener ? (c == ba || !c.Ic) && c.removeEventListener(d, f, h) : c.detachEvent && c.detachEvent(d in hc ? hc[d] : hc[d] = "on" + d, f);
      c = ma(c);
      f = fc[d][h][c];
      if(gc[c]) {
        var i = gc[c], j = Ta(i, b);
        0 <= j && Sa.splice.call(i, j, 1);
        0 == i.length && delete gc[c]
      }
      b.ib = l;
      f.Rc = l;
      lc(d, h, c, f);
      delete ec[a]
    }
  }
}
function lc(a, b, c, d) {
  if(!d.Jb && d.Rc) {
    for(var f = 0, h = 0;f < d.length;f++) {
      if(d[f].ib) {
        var i = d[f].Sc;
        i.src = m;
        Ub(i);
        Wb(d[f])
      }else {
        f != h && (d[h] = d[f]), h++
      }
    }
    d.length = h;
    d.Rc = n;
    if(0 == h && (Rb(d), delete fc[a][b][c], fc[a][b].G--, 0 == fc[a][b].G && (Pb(fc[a][b]), delete fc[a][b], fc[a].G--), 0 == fc[a].G)) {
      Pb(fc[a]), delete fc[a]
    }
  }
}
function mc(a) {
  var b, c = 0, d = b == m;
  b = !!b;
  if(a == m) {
    Zb(gc, function(a) {
      for(var f = a.length - 1;0 <= f;f--) {
        var h = a[f];
        if(d || b == h.capture) {
          kc(h.key), c++
        }
      }
    })
  }else {
    if(a = ma(a), gc[a]) {
      for(var a = gc[a], f = a.length - 1;0 <= f;f--) {
        var h = a[f];
        if(d || b == h.capture) {
          kc(h.key), c++
        }
      }
    }
  }
}
function nc(a, b, c, d, f) {
  var h = 1, b = ma(b);
  if(a[b]) {
    a.ga--;
    a = a[b];
    a.Jb ? a.Jb++ : a.Jb = 1;
    try {
      for(var i = a.length, j = 0;j < i;j++) {
        var k = a[j];
        k && !k.ib && (h &= oc(k, f) !== n)
      }
    }finally {
      a.Jb--, lc(c, d, b, a)
    }
  }
  return Boolean(h)
}
function oc(a, b) {
  var c = a.handleEvent(b);
  a.zc && kc(a.key);
  return c
}
Tb(function(a, b) {
  if(!ec[a]) {
    return l
  }
  var c = ec[a], d = c.type, f = fc;
  if(!(d in f)) {
    return l
  }
  var f = f[d], h, i;
  Bb === g && (Bb = nb && !ba.addEventListener);
  if(Bb) {
    h = b || da("window.event");
    var j = l in f, k = n in f;
    if(j) {
      if(0 > h.keyCode || h.returnValue != g) {
        return l
      }
      a: {
        var r = n;
        if(0 == h.keyCode) {
          try {
            h.keyCode = -1;
            break a
          }catch(x) {
            r = l
          }
        }
        if(r || h.returnValue == g) {
          h.returnValue = l
        }
      }
    }
    r = Xb();
    r.ub(h, this);
    h = l;
    try {
      if(j) {
        for(var t = Qb(), y = r.currentTarget;y;y = y.parentNode) {
          t.push(y)
        }
        i = f[l];
        i.ga = i.G;
        for(var G = t.length - 1;!r.Qa && 0 <= G && i.ga;G--) {
          r.currentTarget = t[G], h &= nc(i, t[G], d, l, r)
        }
        if(k) {
          i = f[n];
          i.ga = i.G;
          for(G = 0;!r.Qa && G < t.length && i.ga;G++) {
            r.currentTarget = t[G], h &= nc(i, t[G], d, n, r)
          }
        }
      }else {
        h = oc(c, r)
      }
    }finally {
      t && (t.length = 0, Rb(t)), r.qb(), Yb(r)
    }
    return h
  }
  d = new Fb(b, this);
  try {
    h = oc(c, d)
  }finally {
    d.qb()
  }
  return h
});
function pc() {
}
va(pc, db);
q = pc.prototype;
q.Ic = l;
q.qc = m;
q.addEventListener = function(a, b, c, d) {
  ic(this, a, b, c, d)
};
q.removeEventListener = function(a, b, c, d) {
  jc(this, a, b, c, d)
};
q.dispatchEvent = function(a) {
  var b = a.type || a, c = fc;
  if(b in c) {
    if(ia(a)) {
      a = new Db(a, this)
    }else {
      if(a instanceof Db) {
        a.target = a.target || this
      }else {
        var d = a, a = new Db(b, this);
        dc(a, d)
      }
    }
    var d = 1, f, c = c[b], b = l in c, h;
    if(b) {
      f = [];
      for(h = this;h;h = h.qc) {
        f.push(h)
      }
      h = c[l];
      h.ga = h.G;
      for(var i = f.length - 1;!a.Qa && 0 <= i && h.ga;i--) {
        a.currentTarget = f[i], d &= nc(h, f[i], a.type, l, a) && a.zb != n
      }
    }
    if(n in c) {
      if(h = c[n], h.ga = h.G, b) {
        for(i = 0;!a.Qa && i < f.length && h.ga;i++) {
          a.currentTarget = f[i], d &= nc(h, f[i], a.type, n, a) && a.zb != n
        }
      }else {
        for(f = this;!a.Qa && f && h.ga;f = f.qc) {
          a.currentTarget = f, d &= nc(h, f, a.type, n, a) && a.zb != n
        }
      }
    }
    a = Boolean(d)
  }else {
    a = l
  }
  return a
};
q.ia = function() {
  pc.kb.ia.call(this);
  mc(this);
  this.qc = m
};
var qc = ba.window;
function rc(a, b) {
  this.ba = Mb ? [] : "";
  a != m && this.append.apply(this, arguments)
}
rc.prototype.set = function(a) {
  this.clear();
  this.append(a)
};
Mb ? (rc.prototype.Mb = 0, rc.prototype.append = function(a, b, c) {
  b == m ? this.ba[this.Mb++] = a : (this.ba.push.apply(this.ba, arguments), this.Mb = this.ba.length);
  return this
}) : rc.prototype.append = function(a, b, c) {
  this.ba += a;
  if(b != m) {
    for(var d = 1;d < arguments.length;d++) {
      this.ba += arguments[d]
    }
  }
  return this
};
rc.prototype.clear = function() {
  if(Mb) {
    this.Mb = this.ba.length = 0
  }else {
    this.ba = ""
  }
};
rc.prototype.toString = function() {
  if(Mb) {
    var a = this.ba.join("");
    this.clear();
    a && this.append(a);
    return a
  }
  return this.ba
};
g;
g;
g;
g;
g;
g;
function v(a) {
  return a != m && a !== n
}
g;
function w(a, b) {
  return a[u(b)] ? l : a._ ? l : n
}
g;
function z(a, b) {
  return Error(["No protocol method ", a, " defined for type ", u(b), ": ", b].join(""))
}
var sc = function() {
  var a = m, a = function(b, c) {
    switch(arguments.length) {
      case 1:
        return Array(b);
      case 2:
        return a.b(c)
    }
    e("Invalid arity: " + arguments.length)
  };
  a.b = function(a) {
    return Array(a)
  };
  a.a = function(b, c) {
    return a.b(c)
  };
  return a
}();
g;
g;
g;
g;
g;
var tc = {};
function uc(a) {
  if(a ? a.w : a) {
    a = a.w(a)
  }else {
    var b;
    var c = uc[u(a)];
    c ? b = c : (c = uc._) ? b = c : e(z("ICounted.-count", a));
    a = b.call(m, a)
  }
  return a
}
g;
g;
g;
g;
function vc(a, b) {
  var c;
  if(a ? a.D : a) {
    c = a.D(a, b)
  }else {
    var d = vc[u(a)];
    d ? c = d : (d = vc._) ? c = d : e(z("ICollection.-conj", a));
    c = c.call(m, a, b)
  }
  return c
}
g;
g;
var wc = {}, A = function() {
  function a(a, b, c) {
    if(a ? a.L : a) {
      a = a.L(a, b, c)
    }else {
      var i;
      var j = A[u(a)];
      j ? i = j : (j = A._) ? i = j : e(z("IIndexed.-nth", a));
      a = i.call(m, a, b, c)
    }
    return a
  }
  function b(a, b) {
    var c;
    if(a ? a.R : a) {
      c = a.R(a, b)
    }else {
      var i = A[u(a)];
      i ? c = i : (i = A._) ? c = i : e(z("IIndexed.-nth", a));
      c = c.call(m, a, b)
    }
    return c
  }
  var c = m, c = function(c, f, h) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, f);
      case 3:
        return a.call(this, c, f, h)
    }
    e("Invalid arity: " + arguments.length)
  };
  c.a = b;
  c.c = a;
  return c
}();
g;
g;
var xc = {};
g;
g;
var yc = {};
function B(a) {
  if(a ? a.Y : a) {
    a = a.Y(a)
  }else {
    var b;
    var c = B[u(a)];
    c ? b = c : (c = B._) ? b = c : e(z("ISeq.-first", a));
    a = b.call(m, a)
  }
  return a
}
function C(a) {
  if(a ? a.U : a) {
    a = a.U(a)
  }else {
    var b;
    var c = C[u(a)];
    c ? b = c : (c = C._) ? b = c : e(z("ISeq.-rest", a));
    a = b.call(m, a)
  }
  return a
}
g;
g;
var zc = {};
function Ac(a) {
  if(a ? a.za : a) {
    a = a.za(a)
  }else {
    var b;
    var c = Ac[u(a)];
    c ? b = c : (c = Ac._) ? b = c : e(z("INext.-next", a));
    a = b.call(m, a)
  }
  return a
}
g;
g;
var D = function() {
  function a(a, b, c) {
    if(a ? a.r : a) {
      a = a.r(a, b, c)
    }else {
      var i;
      var j = D[u(a)];
      j ? i = j : (j = D._) ? i = j : e(z("ILookup.-lookup", a));
      a = i.call(m, a, b, c)
    }
    return a
  }
  function b(a, b) {
    var c;
    if(a ? a.B : a) {
      c = a.B(a, b)
    }else {
      var i = D[u(a)];
      i ? c = i : (i = D._) ? c = i : e(z("ILookup.-lookup", a));
      c = c.call(m, a, b)
    }
    return c
  }
  var c = m, c = function(c, f, h) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, f);
      case 3:
        return a.call(this, c, f, h)
    }
    e("Invalid arity: " + arguments.length)
  };
  c.a = b;
  c.c = a;
  return c
}();
g;
g;
function Bc(a, b) {
  var c;
  if(a ? a.Va : a) {
    c = a.Va(a, b)
  }else {
    var d = Bc[u(a)];
    d ? c = d : (d = Bc._) ? c = d : e(z("IAssociative.-contains-key?", a));
    c = c.call(m, a, b)
  }
  return c
}
function Cc(a, b, c) {
  if(a ? a.Q : a) {
    a = a.Q(a, b, c)
  }else {
    var d;
    var f = Cc[u(a)];
    f ? d = f : (f = Cc._) ? d = f : e(z("IAssociative.-assoc", a));
    a = d.call(m, a, b, c)
  }
  return a
}
g;
g;
var Dc = {};
function Ec(a, b) {
  var c;
  if(a ? a.Xa : a) {
    c = a.Xa(a, b)
  }else {
    var d = Ec[u(a)];
    d ? c = d : (d = Ec._) ? c = d : e(z("IMap.-dissoc", a));
    c = c.call(m, a, b)
  }
  return c
}
g;
g;
var Fc = {};
function Gc(a) {
  if(a ? a.Fb : a) {
    a = a.Fb(a)
  }else {
    var b;
    var c = Gc[u(a)];
    c ? b = c : (c = Gc._) ? b = c : e(z("IMapEntry.-key", a));
    a = b.call(m, a)
  }
  return a
}
function Hc(a) {
  if(a ? a.Gb : a) {
    a = a.Gb(a)
  }else {
    var b;
    var c = Hc[u(a)];
    c ? b = c : (c = Hc._) ? b = c : e(z("IMapEntry.-val", a));
    a = b.call(m, a)
  }
  return a
}
g;
g;
var Ic = {};
g;
g;
function Jc(a) {
  if(a ? a.pa : a) {
    a = a.pa(a)
  }else {
    var b;
    var c = Jc[u(a)];
    c ? b = c : (c = Jc._) ? b = c : e(z("IStack.-peek", a));
    a = b.call(m, a)
  }
  return a
}
g;
g;
var Kc = {};
function Lc(a, b, c) {
  if(a ? a.$a : a) {
    a = a.$a(a, b, c)
  }else {
    var d;
    var f = Lc[u(a)];
    f ? d = f : (f = Lc._) ? d = f : e(z("IVector.-assoc-n", a));
    a = d.call(m, a, b, c)
  }
  return a
}
g;
g;
function E(a) {
  if(a ? a.Eb : a) {
    a = a.Eb(a)
  }else {
    var b;
    var c = E[u(a)];
    c ? b = c : (c = E._) ? b = c : e(z("IDeref.-deref", a));
    a = b.call(m, a)
  }
  return a
}
g;
g;
g;
g;
var Mc = {};
function Nc(a) {
  if(a ? a.I : a) {
    a = a.I(a)
  }else {
    var b;
    var c = Nc[u(a)];
    c ? b = c : (c = Nc._) ? b = c : e(z("IMeta.-meta", a));
    a = b.call(m, a)
  }
  return a
}
g;
g;
function Oc(a, b) {
  var c;
  if(a ? a.K : a) {
    c = a.K(a, b)
  }else {
    var d = Oc[u(a)];
    d ? c = d : (d = Oc._) ? c = d : e(z("IWithMeta.-with-meta", a));
    c = c.call(m, a, b)
  }
  return c
}
g;
g;
var Pc = {}, Qc = function() {
  function a(a, b, c) {
    if(a ? a.oa : a) {
      a = a.oa(a, b, c)
    }else {
      var i;
      var j = Qc[u(a)];
      j ? i = j : (j = Qc._) ? i = j : e(z("IReduce.-reduce", a));
      a = i.call(m, a, b, c)
    }
    return a
  }
  function b(a, b) {
    var c;
    if(a ? a.na : a) {
      c = a.na(a, b)
    }else {
      var i = Qc[u(a)];
      i ? c = i : (i = Qc._) ? c = i : e(z("IReduce.-reduce", a));
      c = c.call(m, a, b)
    }
    return c
  }
  var c = m, c = function(c, f, h) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, f);
      case 3:
        return a.call(this, c, f, h)
    }
    e("Invalid arity: " + arguments.length)
  };
  c.a = b;
  c.c = a;
  return c
}();
g;
g;
g;
g;
function Rc(a, b) {
  var c;
  if(a ? a.A : a) {
    c = a.A(a, b)
  }else {
    var d = Rc[u(a)];
    d ? c = d : (d = Rc._) ? c = d : e(z("IEquiv.-equiv", a));
    c = c.call(m, a, b)
  }
  return c
}
g;
g;
function Sc(a) {
  if(a ? a.F : a) {
    a = a.F(a)
  }else {
    var b;
    var c = Sc[u(a)];
    c ? b = c : (c = Sc._) ? b = c : e(z("IHash.-hash", a));
    a = b.call(m, a)
  }
  return a
}
g;
g;
var Tc = {};
function Uc(a) {
  if(a ? a.z : a) {
    a = a.z(a)
  }else {
    var b;
    var c = Uc[u(a)];
    c ? b = c : (c = Uc._) ? b = c : e(z("ISeqable.-seq", a));
    a = b.call(m, a)
  }
  return a
}
g;
g;
var Vc = {};
g;
g;
g;
g;
g;
g;
var Wc = {};
function Xc(a) {
  if(a ? a.nb : a) {
    a = a.nb(a)
  }else {
    var b;
    var c = Xc[u(a)];
    c ? b = c : (c = Xc._) ? b = c : e(z("IReversible.-rseq", a));
    a = b.call(m, a)
  }
  return a
}
g;
g;
g;
g;
var Yc = {};
function Zc(a, b) {
  var c;
  if(a ? a.C : a) {
    c = a.C(a, b)
  }else {
    var d = Zc[u(a)];
    d ? c = d : (d = Zc._) ? c = d : e(z("IPrintable.-pr-seq", a));
    c = c.call(m, a, b)
  }
  return c
}
g;
g;
g;
g;
function $c(a, b, c) {
  if(a ? a.Hc : a) {
    a = a.Hc(a, b, c)
  }else {
    var d;
    var f = $c[u(a)];
    f ? d = f : (f = $c._) ? d = f : e(z("IWatchable.-notify-watches", a));
    a = d.call(m, a, b, c)
  }
  return a
}
function ad(a, b, c) {
  if(a ? a.Gc : a) {
    a = a.Gc(a, b, c)
  }else {
    var d;
    var f = ad[u(a)];
    f ? d = f : (f = ad._) ? d = f : e(z("IWatchable.-add-watch", a));
    a = d.call(m, a, b, c)
  }
  return a
}
g;
g;
var bd = {};
function cd(a) {
  if(a ? a.Wa : a) {
    a = a.Wa(a)
  }else {
    var b;
    var c = cd[u(a)];
    c ? b = c : (c = cd._) ? b = c : e(z("IEditableCollection.-as-transient", a));
    a = b.call(m, a)
  }
  return a
}
g;
g;
function ed(a, b) {
  var c;
  if(a ? a.Za : a) {
    c = a.Za(a, b)
  }else {
    var d = ed[u(a)];
    d ? c = d : (d = ed._) ? c = d : e(z("ITransientCollection.-conj!", a));
    c = c.call(m, a, b)
  }
  return c
}
function fd(a) {
  if(a ? a.ob : a) {
    a = a.ob(a)
  }else {
    var b;
    var c = fd[u(a)];
    c ? b = c : (c = fd._) ? b = c : e(z("ITransientCollection.-persistent!", a));
    a = b.call(m, a)
  }
  return a
}
g;
g;
function gd(a, b, c) {
  if(a ? a.Ya : a) {
    a = a.Ya(a, b, c)
  }else {
    var d;
    var f = gd[u(a)];
    f ? d = f : (f = gd._) ? d = f : e(z("ITransientAssociative.-assoc!", a));
    a = d.call(m, a, b, c)
  }
  return a
}
g;
g;
g;
g;
g;
g;
g;
g;
var hd = {};
function id(a, b) {
  var c;
  if(a ? a.Dc : a) {
    c = a.Dc(a, b)
  }else {
    var d = id[u(a)];
    d ? c = d : (d = id._) ? c = d : e(z("IComparable.-compare", a));
    c = c.call(m, a, b)
  }
  return c
}
g;
g;
function jd(a) {
  if(a ? a.Ac : a) {
    a = a.Ac()
  }else {
    var b;
    var c = jd[u(a)];
    c ? b = c : (c = jd._) ? b = c : e(z("IChunk.-drop-first", a));
    a = b.call(m, a)
  }
  return a
}
g;
g;
var kd = {};
function ld(a) {
  if(a ? a.Qb : a) {
    a = a.Qb(a)
  }else {
    var b;
    var c = ld[u(a)];
    c ? b = c : (c = ld._) ? b = c : e(z("IChunkedSeq.-chunked-first", a));
    a = b.call(m, a)
  }
  return a
}
function md(a) {
  if(a ? a.Db : a) {
    a = a.Db(a)
  }else {
    var b;
    var c = md[u(a)];
    c ? b = c : (c = md._) ? b = c : e(z("IChunkedSeq.-chunked-rest", a));
    a = b.call(m, a)
  }
  return a
}
g;
g;
g;
g;
g;
var K = function() {
  function a(a, b) {
    var c = a === b;
    return c ? c : Rc(a, b)
  }
  var b = m, c = function() {
    function a(b, d, j) {
      var k = m;
      s(j) && (k = F(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, k)
    }
    function c(a, d, f) {
      for(;;) {
        if(v(b.a(a, d))) {
          if(H(f)) {
            a = d, d = I(f), f = H(f)
          }else {
            return b.a(d, I(f))
          }
        }else {
          return n
        }
      }
    }
    a.o = 2;
    a.n = function(a) {
      var b = I(a), d = I(H(a)), a = J(H(a));
      return c(b, d, a)
    };
    a.e = c;
    return a
  }(), b = function(b, f, h) {
    switch(arguments.length) {
      case 1:
        return l;
      case 2:
        return a.call(this, b, f);
      default:
        return c.e(b, f, F(arguments, 2))
    }
    e("Invalid arity: " + arguments.length)
  };
  b.o = 2;
  b.n = c.n;
  b.b = p(l);
  b.a = a;
  b.e = c.e;
  return b
}();
g;
g;
g;
Sc["null"] = p(0);
D["null"] = function() {
  var a = m;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return m;
      case 3:
        return d
    }
    e("Invalid arity: " + arguments.length)
  }
}();
Cc["null"] = function(a, b, c) {
  return nd.e(F([b, c], 0))
};
zc["null"] = l;
Ac["null"] = p(m);
vc["null"] = function(a, b) {
  return M.b(b)
};
Pc["null"] = l;
Qc["null"] = function() {
  var a = m;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return c.P ? c.P() : c.call(m);
      case 3:
        return d
    }
    e("Invalid arity: " + arguments.length)
  }
}();
Yc["null"] = l;
Zc["null"] = function() {
  return M.b("nil")
};
Ic["null"] = l;
tc["null"] = l;
uc["null"] = p(0);
Jc["null"] = p(m);
yc["null"] = l;
B["null"] = p(m);
C["null"] = function() {
  return M.P()
};
Rc["null"] = function(a, b) {
  return b == m
};
Oc["null"] = p(m);
Mc["null"] = l;
Nc["null"] = p(m);
wc["null"] = l;
A["null"] = function() {
  var a = m;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return m;
      case 3:
        return d
    }
    e("Invalid arity: " + arguments.length)
  }
}();
Dc["null"] = l;
Ec["null"] = p(m);
Date.prototype.A = function(a, b) {
  return a.toString() === b.toString()
};
Sc.number = aa();
Rc.number = function(a, b) {
  return a === b
};
Sc["boolean"] = function(a) {
  return a === l ? 1 : 0
};
Sc._ = function(a) {
  return ma(a)
};
g;
g;
var pd = function() {
  function a(a, b, c, d) {
    for(var k = uc(a);;) {
      if(d < k) {
        c = b.a ? b.a(c, A.a(a, d)) : b.call(m, c, A.a(a, d));
        if(N(od, c)) {
          return E(c)
        }
        d += 1
      }else {
        return c
      }
    }
  }
  function b(a, b, c) {
    for(var d = uc(a), k = 0;;) {
      if(k < d) {
        c = b.a ? b.a(c, A.a(a, k)) : b.call(m, c, A.a(a, k));
        if(N(od, c)) {
          return E(c)
        }
        k += 1
      }else {
        return c
      }
    }
  }
  function c(a, b) {
    var c = uc(a);
    if(0 === c) {
      return b.P ? b.P() : b.call(m)
    }
    for(var d = A.a(a, 0), k = 1;;) {
      if(k < c) {
        d = b.a ? b.a(d, A.a(a, k)) : b.call(m, d, A.a(a, k));
        if(N(od, d)) {
          return E(d)
        }
        k += 1
      }else {
        return d
      }
    }
  }
  var d = m, d = function(d, h, i, j) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, h);
      case 3:
        return b.call(this, d, h, i);
      case 4:
        return a.call(this, d, h, i, j)
    }
    e("Invalid arity: " + arguments.length)
  };
  d.a = c;
  d.c = b;
  d.p = a;
  return d
}();
g;
g;
g;
g;
g;
function qd(a, b) {
  this.T = a;
  this.t = b;
  this.q = 0;
  this.k = 166199546
}
q = qd.prototype;
q.F = function(a) {
  return rd(a)
};
q.za = function() {
  return this.t + 1 < this.T.length ? new qd(this.T, this.t + 1) : m
};
q.D = function(a, b) {
  return O(b, a)
};
q.nb = function(a) {
  var b = a.w(a);
  return 0 < b ? new sd(a, b - 1, m) : P
};
q.toString = function() {
  return Q.e(F([this], 0))
};
q.na = function(a, b) {
  return td(this.T) ? pd.p(this.T, b, this.T[this.t], this.t + 1) : pd.p(a, b, this.T[this.t], 0)
};
q.oa = function(a, b, c) {
  return td(this.T) ? pd.p(this.T, b, c, this.t) : pd.p(a, b, c, 0)
};
q.z = aa();
q.w = function() {
  return this.T.length - this.t
};
q.Y = function() {
  return this.T[this.t]
};
q.U = function() {
  return this.t + 1 < this.T.length ? new qd(this.T, this.t + 1) : M.P()
};
q.A = function(a, b) {
  return ud(a, b)
};
q.R = function(a, b) {
  var c = b + this.t;
  return c < this.T.length ? this.T[c] : m
};
q.L = function(a, b, c) {
  a = b + this.t;
  return a < this.T.length ? this.T[a] : c
};
qd;
var vd = function() {
  function a(a, b) {
    return 0 === a.length ? m : new qd(a, b)
  }
  function b(a) {
    return c.a(a, 0)
  }
  var c = m, c = function(c, f) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, f)
    }
    e("Invalid arity: " + arguments.length)
  };
  c.b = b;
  c.a = a;
  return c
}(), F = function() {
  function a(a, b) {
    return vd.a(a, b)
  }
  function b(a) {
    return vd.a(a, 0)
  }
  var c = m, c = function(c, f) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, f)
    }
    e("Invalid arity: " + arguments.length)
  };
  c.b = b;
  c.a = a;
  return c
}();
Pc.array = l;
Qc.array = function() {
  var a = m;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return pd.a(a, c);
      case 3:
        return pd.c(a, c, d)
    }
    e("Invalid arity: " + arguments.length)
  }
}();
D.array = function() {
  var a = m;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return a[c];
      case 3:
        return A.c(a, c, d)
    }
    e("Invalid arity: " + arguments.length)
  }
}();
wc.array = l;
A.array = function() {
  var a = m;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return c < a.length ? a[c] : m;
      case 3:
        return c < a.length ? a[c] : d
    }
    e("Invalid arity: " + arguments.length)
  }
}();
tc.array = l;
uc.array = function(a) {
  return a.length
};
Tc.array = l;
Uc.array = function(a) {
  return F.a(a, 0)
};
function sd(a, b, c) {
  this.Pb = a;
  this.t = b;
  this.h = c;
  this.q = 0;
  this.k = 31850570
}
q = sd.prototype;
q.F = function(a) {
  return rd(a)
};
q.D = function(a, b) {
  return O(b, a)
};
q.toString = function() {
  return Q.e(F([this], 0))
};
q.z = aa();
q.w = function() {
  return this.t + 1
};
q.Y = function() {
  return A.a(this.Pb, this.t)
};
q.U = function() {
  return 0 < this.t ? new sd(this.Pb, this.t - 1, m) : P
};
q.A = function(a, b) {
  return ud(a, b)
};
q.K = function(a, b) {
  return new sd(this.Pb, this.t, b)
};
q.I = o("h");
sd;
function R(a) {
  if(a == m) {
    a = m
  }else {
    var b;
    b = a ? ((b = a.k & 32) ? b : a.wd) ? l : a.k ? n : w(xc, a) : w(xc, a);
    a = b ? a : Uc(a)
  }
  return a
}
function I(a) {
  if(a == m) {
    return m
  }
  var b;
  b = a ? ((b = a.k & 64) ? b : a.Sb) ? l : a.k ? n : w(yc, a) : w(yc, a);
  if(b) {
    return B(a)
  }
  a = R(a);
  return a == m ? m : B(a)
}
function J(a) {
  if(a != m) {
    var b;
    b = a ? ((b = a.k & 64) ? b : a.Sb) ? l : a.k ? n : w(yc, a) : w(yc, a);
    if(b) {
      return C(a)
    }
    a = R(a);
    return a != m ? C(a) : P
  }
  return P
}
function H(a) {
  if(a == m) {
    a = m
  }else {
    var b;
    b = a ? ((b = a.k & 128) ? b : a.zd) ? l : a.k ? n : w(zc, a) : w(zc, a);
    a = b ? Ac(a) : R(J(a))
  }
  return a
}
function wd(a) {
  return I(H(a))
}
function xd(a) {
  for(;;) {
    var b = H(a);
    if(b != m) {
      a = b
    }else {
      return I(a)
    }
  }
}
Rc._ = function(a, b) {
  return a === b
};
function yd(a) {
  return v(a) ? n : l
}
var zd = function() {
  var a = m, b = function() {
    function b(a, c, i) {
      var j = m;
      s(i) && (j = F(Array.prototype.slice.call(arguments, 2), 0));
      return d.call(this, a, c, j)
    }
    function d(b, c, d) {
      for(;;) {
        if(v(d)) {
          b = a.a(b, c), c = I(d), d = H(d)
        }else {
          return a.a(b, c)
        }
      }
    }
    b.o = 2;
    b.n = function(a) {
      var b = I(a), c = I(H(a)), a = J(H(a));
      return d(b, c, a)
    };
    b.e = d;
    return b
  }(), a = function(a, d, f) {
    switch(arguments.length) {
      case 2:
        return vc(a, d);
      default:
        return b.e(a, d, F(arguments, 2))
    }
    e("Invalid arity: " + arguments.length)
  };
  a.o = 2;
  a.n = b.n;
  a.a = function(a, b) {
    return vc(a, b)
  };
  a.e = b.e;
  return a
}();
g;
function S(a) {
  if(td(a)) {
    a = uc(a)
  }else {
    a: {
      for(var a = R(a), b = 0;;) {
        if(td(a)) {
          a = b + uc(a);
          break a
        }
        a = H(a);
        b += 1
      }
      a = g
    }
  }
  return a
}
g;
var Bd = function() {
  function a(a, b, h) {
    return a == m ? h : 0 === b ? R(a) ? I(a) : h : Ad(a) ? A.c(a, b, h) : R(a) ? c.c(H(a), b - 1, h) : h
  }
  function b(a, b) {
    a == m && e(Error("Index out of bounds"));
    if(0 === b) {
      if(R(a)) {
        return I(a)
      }
      e(Error("Index out of bounds"))
    }
    if(Ad(a)) {
      return A.a(a, b)
    }
    if(R(a)) {
      return c.a(H(a), b - 1)
    }
    e(Error("Index out of bounds"))
  }
  var c = m, c = function(c, f, h) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, f);
      case 3:
        return a.call(this, c, f, h)
    }
    e("Invalid arity: " + arguments.length)
  };
  c.a = b;
  c.c = a;
  return c
}(), Cd = function() {
  function a(a, b, c) {
    if(a != m) {
      var i;
      i = a ? ((i = a.k & 16) ? i : a.mb) ? l : a.k ? n : w(wc, a) : w(wc, a);
      a = i ? A.c(a, Math.floor(b), c) : Bd.c(a, Math.floor(b), c)
    }else {
      a = c
    }
    return a
  }
  function b(a, b) {
    var c;
    a == m ? c = m : (c = a ? ((c = a.k & 16) ? c : a.mb) ? l : a.k ? n : w(wc, a) : w(wc, a), c = c ? A.a(a, Math.floor(b)) : Bd.a(a, Math.floor(b)));
    return c
  }
  var c = m, c = function(c, f, h) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, f);
      case 3:
        return a.call(this, c, f, h)
    }
    e("Invalid arity: " + arguments.length)
  };
  c.a = b;
  c.c = a;
  return c
}(), Dd = function() {
  var a = m, b = function() {
    function b(a, c, i, j) {
      var k = m;
      s(j) && (k = F(Array.prototype.slice.call(arguments, 3), 0));
      return d.call(this, a, c, i, k)
    }
    function d(b, c, d, j) {
      for(;;) {
        if(b = a.c(b, c, d), v(j)) {
          c = I(j), d = wd(j), j = H(H(j))
        }else {
          return b
        }
      }
    }
    b.o = 3;
    b.n = function(a) {
      var b = I(a), c = I(H(a)), j = I(H(H(a))), a = J(H(H(a)));
      return d(b, c, j, a)
    };
    b.e = d;
    return b
  }(), a = function(a, d, f, h) {
    switch(arguments.length) {
      case 3:
        return Cc(a, d, f);
      default:
        return b.e(a, d, f, F(arguments, 3))
    }
    e("Invalid arity: " + arguments.length)
  };
  a.o = 3;
  a.n = b.n;
  a.c = function(a, b, f) {
    return Cc(a, b, f)
  };
  a.e = b.e;
  return a
}(), Ed = function() {
  var a = m, b = function() {
    function b(a, c, i) {
      var j = m;
      s(i) && (j = F(Array.prototype.slice.call(arguments, 2), 0));
      return d.call(this, a, c, j)
    }
    function d(b, c, d) {
      for(;;) {
        if(b = a.a(b, c), v(d)) {
          c = I(d), d = H(d)
        }else {
          return b
        }
      }
    }
    b.o = 2;
    b.n = function(a) {
      var b = I(a), c = I(H(a)), a = J(H(a));
      return d(b, c, a)
    };
    b.e = d;
    return b
  }(), a = function(a, d, f) {
    switch(arguments.length) {
      case 1:
        return a;
      case 2:
        return Ec(a, d);
      default:
        return b.e(a, d, F(arguments, 2))
    }
    e("Invalid arity: " + arguments.length)
  };
  a.o = 2;
  a.n = b.n;
  a.b = aa();
  a.a = function(a, b) {
    return Ec(a, b)
  };
  a.e = b.e;
  return a
}();
function Fd(a, b) {
  return Oc(a, b)
}
function Gd(a) {
  var b;
  b = a ? ((b = a.k & 131072) ? b : a.ad) ? l : a.k ? n : w(Mc, a) : w(Mc, a);
  return b ? Nc(a) : m
}
var Hd = {}, Id = 0, Jd = function() {
  function a(a, b) {
    var c = ia(a);
    if(c ? b : c) {
      if(255 < Id && (Hd = {}, Id = 0), c = Hd[a], c == m) {
        c = Na(a), Hd[a] = c, Id += 1
      }
    }else {
      c = Sc(a)
    }
    return c
  }
  function b(a) {
    return c.a(a, l)
  }
  var c = m, c = function(c, f) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, f)
    }
    e("Invalid arity: " + arguments.length)
  };
  c.b = b;
  c.a = a;
  return c
}();
function Kd(a) {
  if(a == m) {
    a = n
  }else {
    if(a) {
      var b = a.k & 4096, a = (b ? b : a.Cd) ? l : a.k ? n : w(Ic, a)
    }else {
      a = w(Ic, a)
    }
  }
  return a
}
function td(a) {
  if(a) {
    var b = a.k & 2, a = (b ? b : a.Rb) ? l : a.k ? n : w(tc, a)
  }else {
    a = w(tc, a)
  }
  return a
}
function Ad(a) {
  if(a) {
    var b = a.k & 16, a = (b ? b : a.mb) ? l : a.k ? n : w(wc, a)
  }else {
    a = w(wc, a)
  }
  return a
}
function Ld(a) {
  if(a == m) {
    a = n
  }else {
    if(a) {
      var b = a.k & 1024, a = (b ? b : a.yd) ? l : a.k ? n : w(Dc, a)
    }else {
      a = w(Dc, a)
    }
  }
  return a
}
function Md(a) {
  if(a) {
    var b = a.k & 16384, a = (b ? b : a.Dd) ? l : a.k ? n : w(Kc, a)
  }else {
    a = w(Kc, a)
  }
  return a
}
function Nd(a) {
  return a ? v(v(m) ? m : a.Cc) ? l : a.cd ? n : w(kd, a) : w(kd, a)
}
function Od(a) {
  var b = [];
  Zb(a, function(a, d) {
    return b.push(d)
  });
  return b
}
function Pd(a, b, c, d, f) {
  for(;0 !== f;) {
    c[d] = a[b], d += 1, f -= 1, b += 1
  }
}
var Qd = {};
function N(a, b) {
  return b instanceof a
}
function Rd(a) {
  if(a == m) {
    a = n
  }else {
    if(a) {
      var b = a.k & 64, a = (b ? b : a.Sb) ? l : a.k ? n : w(yc, a)
    }else {
      a = w(yc, a)
    }
  }
  return a
}
function Sd(a) {
  return v(a) ? l : n
}
function Td(a) {
  var b = ia(a);
  b ? (b = "\ufdd0" === a.charAt(0), a = !(b ? b : "\ufdd1" === a.charAt(0))) : a = b;
  return a
}
function Ud(a) {
  var b = ia(a);
  return b ? "\ufdd0" === a.charAt(0) : b
}
function Vd(a) {
  var b = ia(a);
  return b ? "\ufdd1" === a.charAt(0) : b
}
function Wd(a, b) {
  return D.c(a, b, Qd) === Qd ? n : l
}
function Xd(a, b) {
  if(a === b) {
    return 0
  }
  if(a == m) {
    return-1
  }
  if(b == m) {
    return 1
  }
  if((a == m ? m : a.constructor) === (b == m ? m : b.constructor)) {
    return(a ? v(v(m) ? m : a.Zc) || (a.cd ? 0 : w(hd, a)) : w(hd, a)) ? id(a, b) : a > b ? 1 : a < b ? -1 : 0
  }
  e(Error("compare on non-nil objects of different types"))
}
var Yd = function() {
  function a(a, b, c, i) {
    for(;;) {
      var j = Xd(Cd.a(a, i), Cd.a(b, i)), k = 0 === j;
      if(k ? i + 1 < c : k) {
        i += 1
      }else {
        return j
      }
    }
  }
  function b(a, b) {
    var h = S(a), i = S(b);
    return h < i ? -1 : h > i ? 1 : c.p(a, b, h, 0)
  }
  var c = m, c = function(c, f, h, i) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, f);
      case 4:
        return a.call(this, c, f, h, i)
    }
    e("Invalid arity: " + arguments.length)
  };
  c.a = b;
  c.p = a;
  return c
}();
g;
var $d = function() {
  function a(a, b, c) {
    for(c = R(c);;) {
      if(c) {
        b = a.a ? a.a(b, I(c)) : a.call(m, b, I(c));
        if(N(od, b)) {
          return E(b)
        }
        c = H(c)
      }else {
        return b
      }
    }
  }
  function b(a, b) {
    var c = R(b);
    return c ? Zd.c(a, I(c), H(c)) : a.P ? a.P() : a.call(m)
  }
  var c = m, c = function(c, f, h) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, f);
      case 3:
        return a.call(this, c, f, h)
    }
    e("Invalid arity: " + arguments.length)
  };
  c.a = b;
  c.c = a;
  return c
}();
g;
var Zd = function() {
  function a(a, b, c) {
    var i;
    i = c ? ((i = c.k & 524288) ? i : c.bd) ? l : c.k ? n : w(Pc, c) : w(Pc, c);
    return i ? Qc.c(c, a, b) : $d.c(a, b, c)
  }
  function b(a, b) {
    var c;
    c = b ? ((c = b.k & 524288) ? c : b.bd) ? l : b.k ? n : w(Pc, b) : w(Pc, b);
    return c ? Qc.a(b, a) : $d.a(a, b)
  }
  var c = m, c = function(c, f, h) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, f);
      case 3:
        return a.call(this, c, f, h)
    }
    e("Invalid arity: " + arguments.length)
  };
  c.a = b;
  c.c = a;
  return c
}();
function od(a) {
  this.m = a;
  this.q = 0;
  this.k = 32768
}
od.prototype.Eb = o("m");
od;
function ae(a) {
  return 0 <= a ? Math.floor.b ? Math.floor.b(a) : Math.floor.call(m, a) : Math.ceil.b ? Math.ceil.b(a) : Math.ceil.call(m, a)
}
function be(a) {
  a -= a >> 1 & 1431655765;
  a = (a & 858993459) + (a >> 2 & 858993459);
  return 16843009 * (a + (a >> 4) & 252645135) >> 24
}
var ce = function() {
  function a(a) {
    return a == m ? "" : a.toString()
  }
  var b = m, c = function() {
    function a(b, d) {
      var j = m;
      s(d) && (j = F(Array.prototype.slice.call(arguments, 1), 0));
      return c.call(this, b, j)
    }
    function c(a, d) {
      return function(a, c) {
        for(;;) {
          if(v(c)) {
            var d = a.append(b.b(I(c))), f = H(c), a = d, c = f
          }else {
            return b.b(a)
          }
        }
      }.call(m, new rc(b.b(a)), d)
    }
    a.o = 1;
    a.n = function(a) {
      var b = I(a), a = J(a);
      return c(b, a)
    };
    a.e = c;
    return a
  }(), b = function(b, f) {
    switch(arguments.length) {
      case 0:
        return"";
      case 1:
        return a.call(this, b);
      default:
        return c.e(b, F(arguments, 1))
    }
    e("Invalid arity: " + arguments.length)
  };
  b.o = 1;
  b.n = c.n;
  b.P = p("");
  b.b = a;
  b.e = c.e;
  return b
}(), T = function() {
  function a(a) {
    return Vd(a) ? a.substring(2, a.length) : Ud(a) ? ce.e(":", F([a.substring(2, a.length)], 0)) : a == m ? "" : a.toString()
  }
  var b = m, c = function() {
    function a(b, d) {
      var j = m;
      s(d) && (j = F(Array.prototype.slice.call(arguments, 1), 0));
      return c.call(this, b, j)
    }
    function c(a, d) {
      return function(a, c) {
        for(;;) {
          if(v(c)) {
            var d = a.append(b.b(I(c))), f = H(c), a = d, c = f
          }else {
            return ce.b(a)
          }
        }
      }.call(m, new rc(b.b(a)), d)
    }
    a.o = 1;
    a.n = function(a) {
      var b = I(a), a = J(a);
      return c(b, a)
    };
    a.e = c;
    return a
  }(), b = function(b, f) {
    switch(arguments.length) {
      case 0:
        return"";
      case 1:
        return a.call(this, b);
      default:
        return c.e(b, F(arguments, 1))
    }
    e("Invalid arity: " + arguments.length)
  };
  b.o = 1;
  b.n = c.n;
  b.P = p("");
  b.b = a;
  b.e = c.e;
  return b
}(), de = function() {
  var a = m, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return a.substring(c);
      case 3:
        return a.substring(c, d)
    }
    e("Invalid arity: " + arguments.length)
  };
  a.a = function(a, c) {
    return a.substring(c)
  };
  a.c = function(a, c, d) {
    return a.substring(c, d)
  };
  return a
}();
function ud(a, b) {
  var c;
  c = b ? ((c = b.k & 16777216) ? c : b.Bd) ? l : b.k ? n : w(Vc, b) : w(Vc, b);
  if(c) {
    a: {
      c = R(a);
      for(var d = R(b);;) {
        if(c == m) {
          c = d == m;
          break a
        }
        if(d != m && K.a(I(c), I(d))) {
          c = H(c), d = H(d)
        }else {
          c = n;
          break a
        }
      }
      c = g
    }
  }else {
    c = m
  }
  return Sd(c)
}
function rd(a) {
  return Zd.c(function(a, c) {
    var d = Jd.a(c, n);
    return a ^ d + 2654435769 + (a << 6) + (a >> 2)
  }, Jd.a(I(a), n), H(a))
}
g;
g;
function ee(a) {
  for(var b = 0, a = R(a);;) {
    if(a) {
      var c = I(a), b = (b + (Jd.b(Gc(c)) ^ Jd.b(Hc(c)))) % 4503599627370496, a = H(a)
    }else {
      return b
    }
  }
}
function fe(a) {
  for(var b = 0, a = R(a);;) {
    if(a) {
      var c = I(a), b = (b + Jd.b(c)) % 4503599627370496, a = H(a)
    }else {
      return b
    }
  }
}
g;
function ge(a, b, c, d, f) {
  this.h = a;
  this.eb = b;
  this.va = c;
  this.count = d;
  this.l = f;
  this.q = 0;
  this.k = 65413358
}
q = ge.prototype;
q.F = function(a) {
  var b = this.l;
  return b != m ? b : this.l = a = rd(a)
};
q.za = function() {
  return 1 === this.count ? m : this.va
};
q.D = function(a, b) {
  return new ge(this.h, b, a, this.count + 1, m)
};
q.toString = function() {
  return Q.e(F([this], 0))
};
q.z = aa();
q.w = o("count");
q.pa = o("eb");
q.Y = o("eb");
q.U = function() {
  return 1 === this.count ? P : this.va
};
q.A = function(a, b) {
  return ud(a, b)
};
q.K = function(a, b) {
  return new ge(b, this.eb, this.va, this.count, this.l)
};
q.I = o("h");
q.O = function() {
  return P
};
ge;
function he(a) {
  this.h = a;
  this.q = 0;
  this.k = 65413326
}
q = he.prototype;
q.F = p(0);
q.za = p(m);
q.D = function(a, b) {
  return new ge(this.h, b, m, 1, m)
};
q.toString = function() {
  return Q.e(F([this], 0))
};
q.z = p(m);
q.w = p(0);
q.pa = p(m);
q.Y = p(m);
q.U = function() {
  return P
};
q.A = function(a, b) {
  return ud(a, b)
};
q.K = function(a, b) {
  return new he(b)
};
q.I = o("h");
q.O = aa();
he;
var P = new he(m);
function ie(a) {
  if(a) {
    var b = a.k & 134217728, a = (b ? b : a.Ad) ? l : a.k ? n : w(Wc, a)
  }else {
    a = w(Wc, a)
  }
  return a
}
var M = function() {
  function a(a, b, c) {
    return zd.a(d.a(b, c), a)
  }
  function b(a, b) {
    return zd.a(d.b(b), a)
  }
  function c(a) {
    return zd.a(P, a)
  }
  var d = m, f = function() {
    function a(c, d, f, h) {
      var t = m;
      s(h) && (t = F(Array.prototype.slice.call(arguments, 3), 0));
      return b.call(this, c, d, f, t)
    }
    function b(a, c, d, f) {
      return zd.a(zd.a(zd.a(Zd.c(zd, P, ie(f) ? Xc(f) : Zd.c(zd, P, f)), d), c), a)
    }
    a.o = 3;
    a.n = function(a) {
      var c = I(a), d = I(H(a)), f = I(H(H(a))), a = J(H(H(a)));
      return b(c, d, f, a)
    };
    a.e = b;
    return a
  }(), d = function(d, i, j, k) {
    switch(arguments.length) {
      case 0:
        return P;
      case 1:
        return c.call(this, d);
      case 2:
        return b.call(this, d, i);
      case 3:
        return a.call(this, d, i, j);
      default:
        return f.e(d, i, j, F(arguments, 3))
    }
    e("Invalid arity: " + arguments.length)
  };
  d.o = 3;
  d.n = f.n;
  d.P = function() {
    return P
  };
  d.b = c;
  d.a = b;
  d.c = a;
  d.e = f.e;
  return d
}();
function je(a, b, c, d) {
  this.h = a;
  this.eb = b;
  this.va = c;
  this.l = d;
  this.q = 0;
  this.k = 65405164
}
q = je.prototype;
q.F = function(a) {
  var b = this.l;
  return b != m ? b : this.l = a = rd(a)
};
q.za = function() {
  return this.va == m ? m : Uc(this.va)
};
q.D = function(a, b) {
  return new je(m, b, a, this.l)
};
q.toString = function() {
  return Q.e(F([this], 0))
};
q.z = aa();
q.Y = o("eb");
q.U = function() {
  return this.va == m ? P : this.va
};
q.A = function(a, b) {
  return ud(a, b)
};
q.K = function(a, b) {
  return new je(b, this.eb, this.va, this.l)
};
q.I = o("h");
q.O = function() {
  return Oc(P, this.h)
};
je;
function O(a, b) {
  var c = b == m;
  c || (c = b ? ((c = b.k & 64) ? c : b.Sb) ? l : b.k ? n : w(yc, b) : w(yc, b));
  return c ? new je(m, a, b, m) : new je(m, a, R(b), m)
}
Pc.string = l;
Qc.string = function() {
  var a = m;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return pd.a(a, c);
      case 3:
        return pd.c(a, c, d)
    }
    e("Invalid arity: " + arguments.length)
  }
}();
D.string = function() {
  var a = m;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return A.a(a, c);
      case 3:
        return A.c(a, c, d)
    }
    e("Invalid arity: " + arguments.length)
  }
}();
wc.string = l;
A.string = function() {
  var a = m;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return c < uc(a) ? a.charAt(c) : m;
      case 3:
        return c < uc(a) ? a.charAt(c) : d
    }
    e("Invalid arity: " + arguments.length)
  }
}();
tc.string = l;
uc.string = function(a) {
  return a.length
};
Tc.string = l;
Uc.string = function(a) {
  return vd.a(a, 0)
};
Sc.string = function(a) {
  return Na(a)
};
function ke(a) {
  this.Nc = a;
  this.q = 0;
  this.k = 1
}
ke.prototype.call = function(a, b) {
  if(b == m) {
    return m
  }
  var c = b.xa;
  return c == m ? D.c(b, this.Nc, m) : c[this.Nc]
};
ke.prototype.apply = function(a, b) {
  return a.call.apply(a, [a].concat(b.slice()))
};
ke;
String.prototype.call = function() {
  var a = m;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return D.c(c, this.toString(), m);
      case 3:
        return D.c(c, this.toString(), d)
    }
    e("Invalid arity: " + arguments.length)
  }
}();
String.prototype.apply = function(a, b) {
  return a.call.apply(a, [a].concat(b.slice()))
};
String.prototype.apply = function(a, b) {
  return 2 > S(b) ? D.c(b[0], a, m) : D.c(b[0], a, b[1])
};
function le(a) {
  var b = a.x;
  if(a.rc) {
    return b
  }
  a.x = b.P ? b.P() : b.call(m);
  a.rc = l;
  return a.x
}
function U(a, b, c, d) {
  this.h = a;
  this.rc = b;
  this.x = c;
  this.l = d;
  this.q = 0;
  this.k = 31850700
}
q = U.prototype;
q.F = function(a) {
  var b = this.l;
  return b != m ? b : this.l = a = rd(a)
};
q.za = function(a) {
  return Uc(a.U(a))
};
q.D = function(a, b) {
  return O(b, a)
};
q.toString = function() {
  return Q.e(F([this], 0))
};
q.z = function(a) {
  return R(le(a))
};
q.Y = function(a) {
  return I(le(a))
};
q.U = function(a) {
  return J(le(a))
};
q.A = function(a, b) {
  return ud(a, b)
};
q.K = function(a, b) {
  return new U(b, this.rc, this.x, this.l)
};
q.I = o("h");
q.O = function() {
  return Oc(P, this.h)
};
U;
g;
function me(a, b) {
  this.Lb = a;
  this.end = b;
  this.q = 0;
  this.k = 2
}
me.prototype.w = o("end");
me.prototype.add = function(a) {
  this.Lb[this.end] = a;
  return this.end += 1
};
me.prototype.ya = function() {
  var a = new ne(this.Lb, 0, this.end);
  this.Lb = m;
  return a
};
me;
function ne(a, b, c) {
  this.g = a;
  this.S = b;
  this.end = c;
  this.q = 0;
  this.k = 524306
}
q = ne.prototype;
q.na = function(a, b) {
  return pd.p(a, b, this.g[this.S], this.S + 1)
};
q.oa = function(a, b, c) {
  return pd.p(a, b, c, this.S)
};
q.Ac = function() {
  this.S === this.end && e(Error("-drop-first of empty chunk"));
  return new ne(this.g, this.S + 1, this.end)
};
q.R = function(a, b) {
  return this.g[this.S + b]
};
q.L = function(a, b, c) {
  return((a = 0 <= b) ? b < this.end - this.S : a) ? this.g[this.S + b] : c
};
q.w = function() {
  return this.end - this.S
};
ne;
var oe = function() {
  function a(a, b, c) {
    return new ne(a, b, c)
  }
  function b(a, b) {
    return d.c(a, b, a.length)
  }
  function c(a) {
    return d.c(a, 0, a.length)
  }
  var d = m, d = function(d, h, i) {
    switch(arguments.length) {
      case 1:
        return c.call(this, d);
      case 2:
        return b.call(this, d, h);
      case 3:
        return a.call(this, d, h, i)
    }
    e("Invalid arity: " + arguments.length)
  };
  d.b = c;
  d.a = b;
  d.c = a;
  return d
}();
function pe(a, b, c) {
  this.ya = a;
  this.Fa = b;
  this.h = c;
  this.q = 0;
  this.k = 27656296
}
q = pe.prototype;
q.D = function(a, b) {
  return O(b, a)
};
q.z = aa();
q.Y = function() {
  return A.a(this.ya, 0)
};
q.U = function() {
  return 1 < uc(this.ya) ? new pe(jd(this.ya), this.Fa, this.h) : this.Fa == m ? P : this.Fa
};
q.Bc = function() {
  return this.Fa == m ? m : this.Fa
};
q.A = function(a, b) {
  return ud(a, b)
};
q.K = function(a, b) {
  return new pe(this.ya, this.Fa, b)
};
q.I = o("h");
q.Cc = l;
q.Qb = o("ya");
q.Db = function() {
  return this.Fa == m ? P : this.Fa
};
pe;
function qe(a, b) {
  return 0 === uc(a) ? b : new pe(a, b, m)
}
function re(a) {
  for(var b = [];;) {
    if(R(a)) {
      b.push(I(a)), a = H(a)
    }else {
      return b
    }
  }
}
function se(a, b) {
  if(td(a)) {
    return S(a)
  }
  for(var c = a, d = b, f = 0;;) {
    var h;
    h = (h = 0 < d) ? R(c) : h;
    if(v(h)) {
      c = H(c), d -= 1, f += 1
    }else {
      return f
    }
  }
}
var ue = function te(b) {
  return b == m ? m : H(b) == m ? R(I(b)) : O(I(b), te(H(b)))
}, ve = function() {
  function a(a, b) {
    return new U(m, n, function() {
      var c = R(a);
      return c ? Nd(c) ? qe(ld(c), d.a(md(c), b)) : O(I(c), d.a(J(c), b)) : b
    }, m)
  }
  function b(a) {
    return new U(m, n, function() {
      return a
    }, m)
  }
  function c() {
    return new U(m, n, p(m), m)
  }
  var d = m, f = function() {
    function a(c, d, f) {
      var h = m;
      s(f) && (h = F(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, d, h)
    }
    function b(a, c, f) {
      var h = function y(a, b) {
        return new U(m, n, function() {
          var c = R(a);
          return c ? Nd(c) ? qe(ld(c), y(md(c), b)) : O(I(c), y(J(c), b)) : v(b) ? y(I(b), H(b)) : m
        }, m)
      };
      return h.a ? h.a(d.a(a, c), f) : h.call(m, d.a(a, c), f)
    }
    a.o = 2;
    a.n = function(a) {
      var c = I(a), d = I(H(a)), a = J(H(a));
      return b(c, d, a)
    };
    a.e = b;
    return a
  }(), d = function(d, i, j) {
    switch(arguments.length) {
      case 0:
        return c.call(this);
      case 1:
        return b.call(this, d);
      case 2:
        return a.call(this, d, i);
      default:
        return f.e(d, i, F(arguments, 2))
    }
    e("Invalid arity: " + arguments.length)
  };
  d.o = 2;
  d.n = f.n;
  d.P = c;
  d.b = b;
  d.a = a;
  d.e = f.e;
  return d
}(), we = function() {
  function a(a, b, c, d) {
    return O(a, O(b, O(c, d)))
  }
  function b(a, b, c) {
    return O(a, O(b, c))
  }
  var c = m, d = function() {
    function a(c, d, f, r, x) {
      var t = m;
      s(x) && (t = F(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, f, r, t)
    }
    function b(a, c, d, f, h) {
      return O(a, O(c, O(d, O(f, ue(h)))))
    }
    a.o = 4;
    a.n = function(a) {
      var c = I(a), d = I(H(a)), f = I(H(H(a))), x = I(H(H(H(a)))), a = J(H(H(H(a))));
      return b(c, d, f, x, a)
    };
    a.e = b;
    return a
  }(), c = function(c, h, i, j, k) {
    switch(arguments.length) {
      case 1:
        return R(c);
      case 2:
        return O(c, h);
      case 3:
        return b.call(this, c, h, i);
      case 4:
        return a.call(this, c, h, i, j);
      default:
        return d.e(c, h, i, j, F(arguments, 4))
    }
    e("Invalid arity: " + arguments.length)
  };
  c.o = 4;
  c.n = d.n;
  c.b = function(a) {
    return R(a)
  };
  c.a = function(a, b) {
    return O(a, b)
  };
  c.c = b;
  c.p = a;
  c.e = d.e;
  return c
}();
function xe(a) {
  return cd(a)
}
function ye(a) {
  return fd(a)
}
function ze(a, b, c) {
  return gd(a, b, c)
}
g;
function Ae(a, b, c) {
  var d = R(c);
  if(0 === b) {
    return a.P ? a.P() : a.call(m)
  }
  var c = B(d), f = C(d);
  if(1 === b) {
    return a.b ? a.b(c) : a.b ? a.b(c) : a.call(m, c)
  }
  var d = B(f), h = C(f);
  if(2 === b) {
    return a.a ? a.a(c, d) : a.a ? a.a(c, d) : a.call(m, c, d)
  }
  var f = B(h), i = C(h);
  if(3 === b) {
    return a.c ? a.c(c, d, f) : a.c ? a.c(c, d, f) : a.call(m, c, d, f)
  }
  var h = B(i), j = C(i);
  if(4 === b) {
    return a.p ? a.p(c, d, f, h) : a.p ? a.p(c, d, f, h) : a.call(m, c, d, f, h)
  }
  i = B(j);
  j = C(j);
  if(5 === b) {
    return a.$ ? a.$(c, d, f, h, i) : a.$ ? a.$(c, d, f, h, i) : a.call(m, c, d, f, h, i)
  }
  var a = B(j), k = C(j);
  if(6 === b) {
    return a.Aa ? a.Aa(c, d, f, h, i, a) : a.Aa ? a.Aa(c, d, f, h, i, a) : a.call(m, c, d, f, h, i, a)
  }
  var j = B(k), r = C(k);
  if(7 === b) {
    return a.pb ? a.pb(c, d, f, h, i, a, j) : a.pb ? a.pb(c, d, f, h, i, a, j) : a.call(m, c, d, f, h, i, a, j)
  }
  var k = B(r), x = C(r);
  if(8 === b) {
    return a.ec ? a.ec(c, d, f, h, i, a, j, k) : a.ec ? a.ec(c, d, f, h, i, a, j, k) : a.call(m, c, d, f, h, i, a, j, k)
  }
  var r = B(x), t = C(x);
  if(9 === b) {
    return a.fc ? a.fc(c, d, f, h, i, a, j, k, r) : a.fc ? a.fc(c, d, f, h, i, a, j, k, r) : a.call(m, c, d, f, h, i, a, j, k, r)
  }
  var x = B(t), y = C(t);
  if(10 === b) {
    return a.Ub ? a.Ub(c, d, f, h, i, a, j, k, r, x) : a.Ub ? a.Ub(c, d, f, h, i, a, j, k, r, x) : a.call(m, c, d, f, h, i, a, j, k, r, x)
  }
  var t = B(y), G = C(y);
  if(11 === b) {
    return a.Vb ? a.Vb(c, d, f, h, i, a, j, k, r, x, t) : a.Vb ? a.Vb(c, d, f, h, i, a, j, k, r, x, t) : a.call(m, c, d, f, h, i, a, j, k, r, x, t)
  }
  var y = B(G), L = C(G);
  if(12 === b) {
    return a.Wb ? a.Wb(c, d, f, h, i, a, j, k, r, x, t, y) : a.Wb ? a.Wb(c, d, f, h, i, a, j, k, r, x, t, y) : a.call(m, c, d, f, h, i, a, j, k, r, x, t, y)
  }
  var G = B(L), ha = C(L);
  if(13 === b) {
    return a.Xb ? a.Xb(c, d, f, h, i, a, j, k, r, x, t, y, G) : a.Xb ? a.Xb(c, d, f, h, i, a, j, k, r, x, t, y, G) : a.call(m, c, d, f, h, i, a, j, k, r, x, t, y, G)
  }
  var L = B(ha), ja = C(ha);
  if(14 === b) {
    return a.Yb ? a.Yb(c, d, f, h, i, a, j, k, r, x, t, y, G, L) : a.Yb ? a.Yb(c, d, f, h, i, a, j, k, r, x, t, y, G, L) : a.call(m, c, d, f, h, i, a, j, k, r, x, t, y, G, L)
  }
  var ha = B(ja), ra = C(ja);
  if(15 === b) {
    return a.Zb ? a.Zb(c, d, f, h, i, a, j, k, r, x, t, y, G, L, ha) : a.Zb ? a.Zb(c, d, f, h, i, a, j, k, r, x, t, y, G, L, ha) : a.call(m, c, d, f, h, i, a, j, k, r, x, t, y, G, L, ha)
  }
  var ja = B(ra), Ea = C(ra);
  if(16 === b) {
    return a.$b ? a.$b(c, d, f, h, i, a, j, k, r, x, t, y, G, L, ha, ja) : a.$b ? a.$b(c, d, f, h, i, a, j, k, r, x, t, y, G, L, ha, ja) : a.call(m, c, d, f, h, i, a, j, k, r, x, t, y, G, L, ha, ja)
  }
  var ra = B(Ea), hb = C(Ea);
  if(17 === b) {
    return a.ac ? a.ac(c, d, f, h, i, a, j, k, r, x, t, y, G, L, ha, ja, ra) : a.ac ? a.ac(c, d, f, h, i, a, j, k, r, x, t, y, G, L, ha, ja, ra) : a.call(m, c, d, f, h, i, a, j, k, r, x, t, y, G, L, ha, ja, ra)
  }
  var Ea = B(hb), dd = C(hb);
  if(18 === b) {
    return a.bc ? a.bc(c, d, f, h, i, a, j, k, r, x, t, y, G, L, ha, ja, ra, Ea) : a.bc ? a.bc(c, d, f, h, i, a, j, k, r, x, t, y, G, L, ha, ja, ra, Ea) : a.call(m, c, d, f, h, i, a, j, k, r, x, t, y, G, L, ha, ja, ra, Ea)
  }
  hb = B(dd);
  dd = C(dd);
  if(19 === b) {
    return a.cc ? a.cc(c, d, f, h, i, a, j, k, r, x, t, y, G, L, ha, ja, ra, Ea, hb) : a.cc ? a.cc(c, d, f, h, i, a, j, k, r, x, t, y, G, L, ha, ja, ra, Ea, hb) : a.call(m, c, d, f, h, i, a, j, k, r, x, t, y, G, L, ha, ja, ra, Ea, hb)
  }
  var ef = B(dd);
  C(dd);
  if(20 === b) {
    return a.dc ? a.dc(c, d, f, h, i, a, j, k, r, x, t, y, G, L, ha, ja, ra, Ea, hb, ef) : a.dc ? a.dc(c, d, f, h, i, a, j, k, r, x, t, y, G, L, ha, ja, ra, Ea, hb, ef) : a.call(m, c, d, f, h, i, a, j, k, r, x, t, y, G, L, ha, ja, ra, Ea, hb, ef)
  }
  e(Error("Only up to 20 arguments supported on functions"))
}
g;
var Be = function() {
  function a(a, b, c, d, f) {
    b = we.p(b, c, d, f);
    c = a.o;
    return v(a.n) ? (d = se(b, c + 1), d <= c ? Ae(a, d, b) : a.n(b)) : a.apply(a, re(b))
  }
  function b(a, b, c, d) {
    b = we.c(b, c, d);
    c = a.o;
    return v(a.n) ? (d = se(b, c + 1), d <= c ? Ae(a, d, b) : a.n(b)) : a.apply(a, re(b))
  }
  function c(a, b, c) {
    b = we.a(b, c);
    c = a.o;
    if(v(a.n)) {
      var d = se(b, c + 1);
      return d <= c ? Ae(a, d, b) : a.n(b)
    }
    return a.apply(a, re(b))
  }
  function d(a, b) {
    var c = a.o;
    if(v(a.n)) {
      var d = se(b, c + 1);
      return d <= c ? Ae(a, d, b) : a.n(b)
    }
    return a.apply(a, re(b))
  }
  var f = m, h = function() {
    function a(c, d, f, h, i, G) {
      var L = m;
      s(G) && (L = F(Array.prototype.slice.call(arguments, 5), 0));
      return b.call(this, c, d, f, h, i, L)
    }
    function b(a, c, d, f, h, i) {
      c = O(c, O(d, O(f, O(h, ue(i)))));
      d = a.o;
      return v(a.n) ? (f = se(c, d + 1), f <= d ? Ae(a, f, c) : a.n(c)) : a.apply(a, re(c))
    }
    a.o = 5;
    a.n = function(a) {
      var c = I(a), d = I(H(a)), f = I(H(H(a))), h = I(H(H(H(a)))), i = I(H(H(H(H(a))))), a = J(H(H(H(H(a)))));
      return b(c, d, f, h, i, a)
    };
    a.e = b;
    return a
  }(), f = function(f, j, k, r, x, t) {
    switch(arguments.length) {
      case 2:
        return d.call(this, f, j);
      case 3:
        return c.call(this, f, j, k);
      case 4:
        return b.call(this, f, j, k, r);
      case 5:
        return a.call(this, f, j, k, r, x);
      default:
        return h.e(f, j, k, r, x, F(arguments, 5))
    }
    e("Invalid arity: " + arguments.length)
  };
  f.o = 5;
  f.n = h.n;
  f.a = d;
  f.c = c;
  f.p = b;
  f.$ = a;
  f.e = h.e;
  return f
}(), Ce = function() {
  function a(a, b) {
    return!K.a(a, b)
  }
  function b() {
    return n
  }
  var c = m, d = function() {
    function a(c, d, f) {
      var r = m;
      s(f) && (r = F(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, d, r)
    }
    function b(a, c, d) {
      return yd(Be.p(K, a, c, d))
    }
    a.o = 2;
    a.n = function(a) {
      var c = I(a), d = I(H(a)), a = J(H(a));
      return b(c, d, a)
    };
    a.e = b;
    return a
  }(), c = function(c, h, i) {
    switch(arguments.length) {
      case 1:
        return b.call(this);
      case 2:
        return a.call(this, c, h);
      default:
        return d.e(c, h, F(arguments, 2))
    }
    e("Invalid arity: " + arguments.length)
  };
  c.o = 2;
  c.n = d.n;
  c.b = b;
  c.a = a;
  c.e = d.e;
  return c
}();
function De(a, b) {
  for(;;) {
    if(R(b) == m) {
      return l
    }
    if(v(a.b ? a.b(I(b)) : a.call(m, I(b)))) {
      var c = a, d = H(b), a = c, b = d
    }else {
      return n
    }
  }
}
function Ee(a, b) {
  for(;;) {
    if(R(b)) {
      var c = a.b ? a.b(I(b)) : a.call(m, I(b));
      if(v(c)) {
        return c
      }
      var c = a, d = H(b), a = c, b = d
    }else {
      return m
    }
  }
}
function Fe(a) {
  return a
}
var Ge = function() {
  function a(a, b, c, d) {
    return function() {
      function f(a) {
        var b = m;
        s(a) && (b = F(Array.prototype.slice.call(arguments, 0), 0));
        return x.call(this, b)
      }
      function x(f) {
        return Be.$(a, b, c, d, f)
      }
      f.o = 0;
      f.n = function(a) {
        a = R(a);
        return x(a)
      };
      f.e = x;
      return f
    }()
  }
  function b(a, b, c) {
    return function() {
      function d(a) {
        var b = m;
        s(a) && (b = F(Array.prototype.slice.call(arguments, 0), 0));
        return f.call(this, b)
      }
      function f(d) {
        return Be.p(a, b, c, d)
      }
      d.o = 0;
      d.n = function(a) {
        a = R(a);
        return f(a)
      };
      d.e = f;
      return d
    }()
  }
  function c(a, b) {
    return function() {
      function c(a) {
        var b = m;
        s(a) && (b = F(Array.prototype.slice.call(arguments, 0), 0));
        return d.call(this, b)
      }
      function d(c) {
        return Be.c(a, b, c)
      }
      c.o = 0;
      c.n = function(a) {
        a = R(a);
        return d(a)
      };
      c.e = d;
      return c
    }()
  }
  var d = m, f = function() {
    function a(c, d, f, h, t) {
      var y = m;
      s(t) && (y = F(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, f, h, y)
    }
    function b(a, c, d, f, h) {
      return function() {
        function b(a) {
          var c = m;
          s(a) && (c = F(Array.prototype.slice.call(arguments, 0), 0));
          return i.call(this, c)
        }
        function i(b) {
          return Be.$(a, c, d, f, ve.a(h, b))
        }
        b.o = 0;
        b.n = function(a) {
          a = R(a);
          return i(a)
        };
        b.e = i;
        return b
      }()
    }
    a.o = 4;
    a.n = function(a) {
      var c = I(a), d = I(H(a)), f = I(H(H(a))), h = I(H(H(H(a)))), a = J(H(H(H(a))));
      return b(c, d, f, h, a)
    };
    a.e = b;
    return a
  }(), d = function(d, i, j, k, r) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, i);
      case 3:
        return b.call(this, d, i, j);
      case 4:
        return a.call(this, d, i, j, k);
      default:
        return f.e(d, i, j, k, F(arguments, 4))
    }
    e("Invalid arity: " + arguments.length)
  };
  d.o = 4;
  d.n = f.n;
  d.a = c;
  d.c = b;
  d.p = a;
  d.e = f.e;
  return d
}(), He = function() {
  function a(a, b, c, f) {
    return new U(m, n, function() {
      var r = R(b), x = R(c), t = R(f);
      return(r ? x ? t : x : r) ? O(a.c ? a.c(I(r), I(x), I(t)) : a.call(m, I(r), I(x), I(t)), d.p(a, J(r), J(x), J(t))) : m
    }, m)
  }
  function b(a, b, c) {
    return new U(m, n, function() {
      var f = R(b), r = R(c);
      return(f ? r : f) ? O(a.a ? a.a(I(f), I(r)) : a.call(m, I(f), I(r)), d.c(a, J(f), J(r))) : m
    }, m)
  }
  function c(a, b) {
    return new U(m, n, function() {
      var c = R(b);
      if(c) {
        if(Nd(c)) {
          for(var f = ld(c), r = S(f), x = new me(sc.b(r), 0), t = 0;;) {
            if(t < r) {
              var y = a.b ? a.b(A.a(f, t)) : a.call(m, A.a(f, t));
              x.add(y);
              t += 1
            }else {
              break
            }
          }
          return qe(x.ya(), d.a(a, md(c)))
        }
        return O(a.b ? a.b(I(c)) : a.call(m, I(c)), d.a(a, J(c)))
      }
      return m
    }, m)
  }
  var d = m, f = function() {
    function a(c, d, f, h, t) {
      var y = m;
      s(t) && (y = F(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, f, h, y)
    }
    function b(a, c, f, h, i) {
      var y = function L(a) {
        return new U(m, n, function() {
          var b = d.a(R, a);
          return De(Fe, b) ? O(d.a(I, b), L(d.a(J, b))) : m
        }, m)
      };
      return d.a(function(b) {
        return Be.a(a, b)
      }, y.b ? y.b(zd.e(i, h, F([f, c], 0))) : y.call(m, zd.e(i, h, F([f, c], 0))))
    }
    a.o = 4;
    a.n = function(a) {
      var c = I(a), d = I(H(a)), f = I(H(H(a))), h = I(H(H(H(a)))), a = J(H(H(H(a))));
      return b(c, d, f, h, a)
    };
    a.e = b;
    return a
  }(), d = function(d, i, j, k, r) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, i);
      case 3:
        return b.call(this, d, i, j);
      case 4:
        return a.call(this, d, i, j, k);
      default:
        return f.e(d, i, j, k, F(arguments, 4))
    }
    e("Invalid arity: " + arguments.length)
  };
  d.o = 4;
  d.n = f.n;
  d.a = c;
  d.c = b;
  d.p = a;
  d.e = f.e;
  return d
}(), Je = function Ie(b, c) {
  return new U(m, n, function() {
    if(0 < b) {
      var d = R(c);
      return d ? O(I(d), Ie(b - 1, J(d))) : m
    }
    return m
  }, m)
};
function Ke(a, b) {
  function c(a, b) {
    for(;;) {
      var c = R(b), i = 0 < a;
      if(v(i ? c : i)) {
        i = a - 1, c = J(c), a = i, b = c
      }else {
        return c
      }
    }
  }
  return new U(m, n, function() {
    return c.a ? c.a(a, b) : c.call(m, a, b)
  }, m)
}
function Le(a) {
  function b(a, b) {
    for(;;) {
      var c = R(b), i;
      i = (i = c) ? a.b ? a.b(I(c)) : a.call(m, I(c)) : i;
      if(v(i)) {
        i = a, c = J(c), a = i, b = c
      }else {
        return c
      }
    }
  }
  var c = E(Me);
  return new U(m, n, function() {
    return b.a ? b.a(a, c) : b.call(m, a, c)
  }, m)
}
var Ne = function() {
  function a(a, b) {
    return Je(a, c.b(b))
  }
  function b(a) {
    return new U(m, n, function() {
      return O(a, c.b(a))
    }, m)
  }
  var c = m, c = function(c, f) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, f)
    }
    e("Invalid arity: " + arguments.length)
  };
  c.b = b;
  c.a = a;
  return c
}(), Oe = function() {
  function a(a, c) {
    return new U(m, n, function() {
      var h = R(a), i = R(c);
      return(h ? i : h) ? O(I(h), O(I(i), b.a(J(h), J(i)))) : m
    }, m)
  }
  var b = m, c = function() {
    function a(b, d, j) {
      var k = m;
      s(j) && (k = F(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, k)
    }
    function c(a, d, f) {
      return new U(m, n, function() {
        var c = He.a(R, zd.e(f, d, F([a], 0)));
        return De(Fe, c) ? ve.a(He.a(I, c), Be.a(b, He.a(J, c))) : m
      }, m)
    }
    a.o = 2;
    a.n = function(a) {
      var b = I(a), d = I(H(a)), a = J(H(a));
      return c(b, d, a)
    };
    a.e = c;
    return a
  }(), b = function(b, f, h) {
    switch(arguments.length) {
      case 2:
        return a.call(this, b, f);
      default:
        return c.e(b, f, F(arguments, 2))
    }
    e("Invalid arity: " + arguments.length)
  };
  b.o = 2;
  b.n = c.n;
  b.a = a;
  b.e = c.e;
  return b
}();
function Pe(a, b) {
  return Ke(1, Oe.a(Ne.b(a), b))
}
function Qe(a) {
  var b = function d(a, b) {
    return new U(m, n, function() {
      var i = R(a);
      return i ? O(I(i), d(J(i), b)) : R(b) ? d(I(b), J(b)) : m
    }, m)
  };
  return b.a ? b.a(m, a) : b.call(m, m, a)
}
var Re = function() {
  function a(a, b) {
    return Qe(He.a(a, b))
  }
  var b = m, c = function() {
    function a(c, d, j) {
      var k = m;
      s(j) && (k = F(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, d, k)
    }
    function b(a, c, d) {
      return Qe(Be.p(He, a, c, d))
    }
    a.o = 2;
    a.n = function(a) {
      var c = I(a), d = I(H(a)), a = J(H(a));
      return b(c, d, a)
    };
    a.e = b;
    return a
  }(), b = function(b, f, h) {
    switch(arguments.length) {
      case 2:
        return a.call(this, b, f);
      default:
        return c.e(b, f, F(arguments, 2))
    }
    e("Invalid arity: " + arguments.length)
  };
  b.o = 2;
  b.n = c.n;
  b.a = a;
  b.e = c.e;
  return b
}(), Te = function Se(b, c) {
  return new U(m, n, function() {
    var d = R(c);
    if(d) {
      if(Nd(d)) {
        for(var f = ld(d), h = S(f), i = new me(sc.b(h), 0), j = 0;;) {
          if(j < h) {
            if(v(b.b ? b.b(A.a(f, j)) : b.call(m, A.a(f, j)))) {
              var k = A.a(f, j);
              i.add(k)
            }
            j += 1
          }else {
            break
          }
        }
        return qe(i.ya(), Se(b, md(d)))
      }
      f = I(d);
      d = J(d);
      return v(b.b ? b.b(f) : b.call(m, f)) ? O(f, Se(b, d)) : Se(b, d)
    }
    return m
  }, m)
};
function Ue(a, b) {
  var c;
  c = a ? ((c = a.q & 1) ? c : a.xd) ? l : a.q ? n : w(bd, a) : w(bd, a);
  return c ? ye(Zd.c(ed, cd(a), b)) : Zd.c(vc, a, b)
}
var Ve = function() {
  function a(a, b, c, j) {
    return new U(m, n, function() {
      var k = R(j);
      if(k) {
        var r = Je(a, k);
        return a === S(r) ? O(r, d.p(a, b, c, Ke(b, k))) : M.b(Je(a, ve.a(r, c)))
      }
      return m
    }, m)
  }
  function b(a, b, c) {
    return new U(m, n, function() {
      var j = R(c);
      if(j) {
        var k = Je(a, j);
        return a === S(k) ? O(k, d.c(a, b, Ke(b, j))) : m
      }
      return m
    }, m)
  }
  function c(a, b) {
    return d.c(a, a, b)
  }
  var d = m, d = function(d, h, i, j) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, h);
      case 3:
        return b.call(this, d, h, i);
      case 4:
        return a.call(this, d, h, i, j)
    }
    e("Invalid arity: " + arguments.length)
  };
  d.a = c;
  d.c = b;
  d.p = a;
  return d
}();
function We(a, b, c) {
  this.h = a;
  this.X = b;
  this.l = c;
  this.q = 0;
  this.k = 32400159
}
q = We.prototype;
q.F = function(a) {
  var b = this.l;
  return b != m ? b : this.l = a = rd(a)
};
q.B = function(a, b) {
  return a.L(a, b, m)
};
q.r = function(a, b, c) {
  return a.L(a, b, c)
};
q.Q = function(a, b, c) {
  a = this.X.slice();
  a[b] = c;
  return new We(this.h, a, m)
};
q.call = function() {
  var a = m;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.B(this, c);
      case 3:
        return this.r(this, c, d)
    }
    e("Invalid arity: " + arguments.length)
  }
}();
q.apply = function(a, b) {
  return a.call.apply(a, [a].concat(b.slice()))
};
q.D = function(a, b) {
  var c = this.X.slice();
  c.push(b);
  return new We(this.h, c, m)
};
q.toString = function() {
  return Q.e(F([this], 0))
};
q.na = function(a, b) {
  return pd.a(this.X, b)
};
q.oa = function(a, b, c) {
  return pd.c(this.X, b, c)
};
q.z = function() {
  var a = this;
  if(0 < a.X.length) {
    var b = function d(b) {
      return new U(m, n, function() {
        return b < a.X.length ? O(a.X[b], d(b + 1)) : m
      }, m)
    };
    return b.b ? b.b(0) : b.call(m, 0)
  }
  return m
};
q.w = function() {
  return this.X.length
};
q.pa = function() {
  var a = this.X.length;
  return 0 < a ? this.X[a - 1] : m
};
q.$a = function(a, b, c) {
  return a.Q(a, b, c)
};
q.A = function(a, b) {
  return ud(a, b)
};
q.K = function(a, b) {
  return new We(b, this.X, this.l)
};
q.I = o("h");
q.R = function(a, b) {
  var c = 0 <= b;
  return(c ? b < this.X.length : c) ? this.X[b] : m
};
q.L = function(a, b, c) {
  return((a = 0 <= b) ? b < this.X.length : a) ? this.X[b] : c
};
q.O = function() {
  return Oc(Xe, this.h)
};
We;
var Xe = new We(m, [], 0);
function Ye(a, b) {
  this.v = a;
  this.g = b
}
Ye;
function Ze(a) {
  a = a.j;
  return 32 > a ? 0 : a - 1 >>> 5 << 5
}
function $e(a, b, c) {
  for(;;) {
    if(0 === b) {
      return c
    }
    var d = new Ye(a, sc.b(32));
    d.g[0] = c;
    c = d;
    b -= 5
  }
}
var bf = function af(b, c, d, f) {
  var h = new Ye(d.v, d.g.slice()), i = b.j - 1 >>> c & 31;
  5 === c ? h.g[i] = f : (d = d.g[i], b = d != m ? af(b, c - 5, d, f) : $e(m, c - 5, f), h.g[i] = b);
  return h
};
function cf(a, b) {
  var c = 0 <= b;
  if(c ? b < a.j : c) {
    if(b >= Ze(a)) {
      return a.Z
    }
    for(var c = a.root, d = a.shift;;) {
      if(0 < d) {
        var f = d - 5, c = c.g[b >>> d & 31], d = f
      }else {
        return c.g
      }
    }
  }else {
    e(Error([T("No item "), T(b), T(" in vector of length "), T(a.j)].join("")))
  }
}
var ff = function df(b, c, d, f, h) {
  var i = new Ye(d.v, d.g.slice());
  if(0 === c) {
    i.g[f & 31] = h
  }else {
    var j = f >>> c & 31, b = df(b, c - 5, d.g[j], f, h);
    i.g[j] = b
  }
  return i
};
g;
g;
g;
g;
g;
g;
g;
function gf(a, b, c, d, f, h) {
  this.h = a;
  this.j = b;
  this.shift = c;
  this.root = d;
  this.Z = f;
  this.l = h;
  this.q = 1;
  this.k = 167668511
}
q = gf.prototype;
q.Wa = function() {
  var a = this.j, b = this.shift, c = new Ye({}, this.root.g.slice()), d = this.Z, f = sc.b(32);
  Pd(d, 0, f, 0, d.length);
  return new hf(a, b, c, f)
};
q.F = function(a) {
  var b = this.l;
  return b != m ? b : this.l = a = rd(a)
};
q.B = function(a, b) {
  return a.L(a, b, m)
};
q.r = function(a, b, c) {
  return a.L(a, b, c)
};
q.Q = function(a, b, c) {
  var d = 0 <= b;
  if(d ? b < this.j : d) {
    return Ze(a) <= b ? (a = this.Z.slice(), a[b & 31] = c, new gf(this.h, this.j, this.shift, this.root, a, m)) : new gf(this.h, this.j, this.shift, ff(a, this.shift, this.root, b, c), this.Z, m)
  }
  if(b === this.j) {
    return a.D(a, c)
  }
  e(Error([T("Index "), T(b), T(" out of bounds  [0,"), T(this.j), T("]")].join("")))
};
q.call = function() {
  var a = m;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.B(this, c);
      case 3:
        return this.r(this, c, d)
    }
    e("Invalid arity: " + arguments.length)
  }
}();
q.apply = function(a, b) {
  return a.call.apply(a, [a].concat(b.slice()))
};
q.D = function(a, b) {
  if(32 > this.j - Ze(a)) {
    var c = this.Z.slice();
    c.push(b);
    return new gf(this.h, this.j + 1, this.shift, this.root, c, m)
  }
  var d = this.j >>> 5 > 1 << this.shift, c = d ? this.shift + 5 : this.shift;
  if(d) {
    d = new Ye(m, sc.b(32));
    d.g[0] = this.root;
    var f = $e(m, this.shift, new Ye(m, this.Z));
    d.g[1] = f
  }else {
    d = bf(a, this.shift, this.root, new Ye(m, this.Z))
  }
  return new gf(this.h, this.j + 1, c, d, [b], m)
};
q.nb = function(a) {
  return 0 < this.j ? new sd(a, this.j - 1, m) : P
};
q.Fb = function(a) {
  return a.R(a, 0)
};
q.Gb = function(a) {
  return a.R(a, 1)
};
q.toString = function() {
  return Q.e(F([this], 0))
};
q.na = function(a, b) {
  return pd.a(a, b)
};
q.oa = function(a, b, c) {
  return pd.c(a, b, c)
};
q.z = function(a) {
  return 0 === this.j ? m : jf.c(a, 0, 0)
};
q.w = o("j");
q.pa = function(a) {
  return 0 < this.j ? a.R(a, this.j - 1) : m
};
q.$a = function(a, b, c) {
  return a.Q(a, b, c)
};
q.A = function(a, b) {
  return ud(a, b)
};
q.K = function(a, b) {
  return new gf(b, this.j, this.shift, this.root, this.Z, this.l)
};
q.I = o("h");
q.R = function(a, b) {
  return cf(a, b)[b & 31]
};
q.L = function(a, b, c) {
  var d = 0 <= b;
  return(d ? b < this.j : d) ? a.R(a, b) : c
};
q.O = function() {
  return Oc(kf, this.h)
};
gf;
var lf = new Ye(m, sc.b(32)), kf = new gf(m, 0, 5, lf, [], 0);
function V(a) {
  var b = a.length;
  if(32 > b) {
    return new gf(m, b, 5, lf, a, m)
  }
  for(var c = a.slice(0, 32), d = 32, f = cd(new gf(m, 32, 5, lf, c, m));;) {
    if(d < b) {
      c = d + 1, f = ed(f, a[d]), d = c
    }else {
      return fd(f)
    }
  }
}
function mf(a) {
  return fd(Zd.c(ed, cd(kf), a))
}
var nf = function() {
  function a(a) {
    var c = m;
    s(a) && (c = F(Array.prototype.slice.call(arguments, 0), 0));
    return mf(c)
  }
  a.o = 0;
  a.n = function(a) {
    a = R(a);
    return mf(a)
  };
  a.e = function(a) {
    return mf(a)
  };
  return a
}();
function of(a, b, c, d, f) {
  this.Ua = a;
  this.ta = b;
  this.t = c;
  this.S = d;
  this.h = f;
  this.q = 0;
  this.k = 27525356
}
q = of.prototype;
q.za = function(a) {
  return this.S + 1 < this.ta.length ? (a = jf.p(this.Ua, this.ta, this.t, this.S + 1), a == m ? m : a) : a.Bc(a)
};
q.D = function(a, b) {
  return O(b, a)
};
q.z = aa();
q.Y = function() {
  return this.ta[this.S]
};
q.U = function(a) {
  return this.S + 1 < this.ta.length ? (a = jf.p(this.Ua, this.ta, this.t, this.S + 1), a == m ? P : a) : a.Db(a)
};
q.Bc = function() {
  var a = this.ta.length, a = this.t + a < uc(this.Ua) ? jf.c(this.Ua, this.t + a, 0) : m;
  return a == m ? m : a
};
q.A = function(a, b) {
  return ud(a, b)
};
q.K = function(a, b) {
  return jf.$(this.Ua, this.ta, this.t, this.S, b)
};
q.O = function() {
  return Oc(kf, this.h)
};
q.Cc = l;
q.Qb = function() {
  return oe.a(this.ta, this.S)
};
q.Db = function() {
  var a = this.ta.length, a = this.t + a < uc(this.Ua) ? jf.c(this.Ua, this.t + a, 0) : m;
  return a == m ? P : a
};
of;
var jf = function() {
  function a(a, b, c, d, k) {
    return new of(a, b, c, d, k)
  }
  function b(a, b, c, j) {
    return d.$(a, b, c, j, m)
  }
  function c(a, b, c) {
    return d.$(a, cf(a, b), b, c, m)
  }
  var d = m, d = function(d, h, i, j, k) {
    switch(arguments.length) {
      case 3:
        return c.call(this, d, h, i);
      case 4:
        return b.call(this, d, h, i, j);
      case 5:
        return a.call(this, d, h, i, j, k)
    }
    e("Invalid arity: " + arguments.length)
  };
  d.c = c;
  d.p = b;
  d.$ = a;
  return d
}();
function pf(a, b, c, d, f) {
  this.h = a;
  this.Ta = b;
  this.start = c;
  this.end = d;
  this.l = f;
  this.q = 0;
  this.k = 32400159
}
q = pf.prototype;
q.F = function(a) {
  var b = this.l;
  return b != m ? b : this.l = a = rd(a)
};
q.B = function(a, b) {
  return a.L(a, b, m)
};
q.r = function(a, b, c) {
  return a.L(a, b, c)
};
q.Q = function(a, b, c) {
  a = this.start + b;
  return new pf(this.h, Cc(this.Ta, a, c), this.start, this.end > a + 1 ? this.end : a + 1, m)
};
q.call = function() {
  var a = m;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.B(this, c);
      case 3:
        return this.r(this, c, d)
    }
    e("Invalid arity: " + arguments.length)
  }
}();
q.apply = function(a, b) {
  return a.call.apply(a, [a].concat(b.slice()))
};
q.D = function(a, b) {
  return new pf(this.h, Lc(this.Ta, this.end, b), this.start, this.end + 1, m)
};
q.toString = function() {
  return Q.e(F([this], 0))
};
q.na = function(a, b) {
  return pd.a(a, b)
};
q.oa = function(a, b, c) {
  return pd.c(a, b, c)
};
q.z = function() {
  var a = this, b = function d(b) {
    return b === a.end ? m : O(A.a(a.Ta, b), new U(m, n, function() {
      return d(b + 1)
    }, m))
  };
  return b.b ? b.b(a.start) : b.call(m, a.start)
};
q.w = function() {
  return this.end - this.start
};
q.pa = function() {
  return A.a(this.Ta, this.end - 1)
};
q.$a = function(a, b, c) {
  return a.Q(a, b, c)
};
q.A = function(a, b) {
  return ud(a, b)
};
q.K = function(a, b) {
  return new pf(b, this.Ta, this.start, this.end, this.l)
};
q.I = o("h");
q.R = function(a, b) {
  return A.a(this.Ta, this.start + b)
};
q.L = function(a, b, c) {
  return A.c(this.Ta, this.start + b, c)
};
q.O = function() {
  return Oc(Xe, this.h)
};
pf;
var rf = function qf(b, c, d, f) {
  var d = b.root.v === d.v ? d : new Ye(b.root.v, d.g.slice()), h = b.j - 1 >>> c & 31;
  if(5 === c) {
    b = f
  }else {
    var i = d.g[h], b = i != m ? qf(b, c - 5, i, f) : $e(b.root.v, c - 5, f)
  }
  d.g[h] = b;
  return d
};
function hf(a, b, c, d) {
  this.j = a;
  this.shift = b;
  this.root = c;
  this.Z = d;
  this.k = 275;
  this.q = 22
}
q = hf.prototype;
q.call = function() {
  var a = m;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.B(this, c);
      case 3:
        return this.r(this, c, d)
    }
    e("Invalid arity: " + arguments.length)
  }
}();
q.apply = function(a, b) {
  return a.call.apply(a, [a].concat(b.slice()))
};
q.B = function(a, b) {
  return a.L(a, b, m)
};
q.r = function(a, b, c) {
  return a.L(a, b, c)
};
q.R = function(a, b) {
  if(this.root.v) {
    return cf(a, b)[b & 31]
  }
  e(Error("nth after persistent!"))
};
q.L = function(a, b, c) {
  var d = 0 <= b;
  return(d ? b < this.j : d) ? a.R(a, b) : c
};
q.w = function() {
  if(this.root.v) {
    return this.j
  }
  e(Error("count after persistent!"))
};
function sf(a, b, c, d) {
  if(a.root.v) {
    if(function() {
      var b = 0 <= c;
      return b ? c < a.j : b
    }()) {
      if(Ze(b) <= c) {
        a.Z[c & 31] = d
      }else {
        var f = function i(b, f) {
          var r = a.root.v === f.v ? f : new Ye(a.root.v, f.g.slice());
          if(0 === b) {
            r.g[c & 31] = d
          }else {
            var x = c >>> b & 31, t = i(b - 5, r.g[x]);
            r.g[x] = t
          }
          return r
        }.call(m, a.shift, a.root);
        a.root = f
      }
      return b
    }
    if(c === a.j) {
      return b.Za(b, d)
    }
    e(Error([T("Index "), T(c), T(" out of bounds for TransientVector of length"), T(a.j)].join("")))
  }
  e(Error("assoc! after persistent!"))
}
q.Ya = function(a, b, c) {
  return sf(a, a, b, c)
};
q.Za = function(a, b) {
  if(this.root.v) {
    if(32 > this.j - Ze(a)) {
      this.Z[this.j & 31] = b
    }else {
      var c = new Ye(this.root.v, this.Z), d = sc.b(32);
      d[0] = b;
      this.Z = d;
      if(this.j >>> 5 > 1 << this.shift) {
        var d = sc.b(32), f = this.shift + 5;
        d[0] = this.root;
        d[1] = $e(this.root.v, this.shift, c);
        this.root = new Ye(this.root.v, d);
        this.shift = f
      }else {
        this.root = rf(a, this.shift, this.root, c)
      }
    }
    this.j += 1;
    return a
  }
  e(Error("conj! after persistent!"))
};
q.ob = function(a) {
  if(this.root.v) {
    this.root.v = m;
    var a = this.j - Ze(a), b = sc.b(a);
    Pd(this.Z, 0, b, 0, a);
    return new gf(m, this.j, this.shift, this.root, b, m)
  }
  e(Error("persistent! called twice"))
};
hf;
function tf(a, b, c, d) {
  this.h = a;
  this.ca = b;
  this.Ha = c;
  this.l = d;
  this.q = 0;
  this.k = 31850572
}
q = tf.prototype;
q.F = function(a) {
  var b = this.l;
  return b != m ? b : this.l = a = rd(a)
};
q.D = function(a, b) {
  return O(b, a)
};
q.toString = function() {
  return Q.e(F([this], 0))
};
q.z = aa();
q.Y = function() {
  return B(this.ca)
};
q.U = function(a) {
  var b = H(this.ca);
  return b ? new tf(this.h, b, this.Ha, m) : this.Ha == m ? a.O(a) : new tf(this.h, this.Ha, m, m)
};
q.A = function(a, b) {
  return ud(a, b)
};
q.K = function(a, b) {
  return new tf(b, this.ca, this.Ha, this.l)
};
q.I = o("h");
q.O = function() {
  return Oc(P, this.h)
};
tf;
function uf(a, b, c, d, f) {
  this.h = a;
  this.count = b;
  this.ca = c;
  this.Ha = d;
  this.l = f;
  this.q = 0;
  this.k = 31858766
}
q = uf.prototype;
q.F = function(a) {
  var b = this.l;
  return b != m ? b : this.l = a = rd(a)
};
q.D = function(a, b) {
  var c;
  v(this.ca) ? (c = this.Ha, c = new uf(this.h, this.count + 1, this.ca, zd.a(v(c) ? c : kf, b), m)) : c = new uf(this.h, this.count + 1, zd.a(this.ca, b), kf, m);
  return c
};
q.toString = function() {
  return Q.e(F([this], 0))
};
q.z = function() {
  var a = R(this.Ha), b = this.ca;
  return v(v(b) ? b : a) ? new tf(m, this.ca, R(a), m) : m
};
q.w = o("count");
q.pa = function() {
  return B(this.ca)
};
q.Y = function() {
  return I(this.ca)
};
q.U = function(a) {
  return J(R(a))
};
q.A = function(a, b) {
  return ud(a, b)
};
q.K = function(a, b) {
  return new uf(b, this.count, this.ca, this.Ha, this.l)
};
q.I = o("h");
q.O = function() {
  return vf
};
uf;
var vf = new uf(m, 0, m, kf, 0);
function wf() {
  this.q = 0;
  this.k = 2097152
}
wf.prototype.A = p(n);
wf;
var xf = new wf;
function yf(a, b) {
  return Sd(Ld(b) ? S(a) === S(b) ? De(Fe, He.a(function(a) {
    return K.a(D.c(b, I(a), xf), wd(a))
  }, a)) : m : m)
}
function zf(a, b, c) {
  for(var d = c.length, f = 0;;) {
    if(f < d) {
      if(b === c[f]) {
        return f
      }
      f += a
    }else {
      return m
    }
  }
}
function Af(a, b) {
  var c = Jd.b(a), d = Jd.b(b);
  return c < d ? -1 : c > d ? 1 : 0
}
function Bf(a, b, c) {
  for(var d = a.keys, f = d.length, h = a.xa, i = Fd(Cf, Gd(a)), a = 0, i = cd(i);;) {
    if(a < f) {
      var j = d[a], a = a + 1, i = gd(i, j, h[j])
    }else {
      return ye(gd(i, b, c))
    }
  }
}
function Df(a, b) {
  for(var c = {}, d = b.length, f = 0;;) {
    if(f < d) {
      var h = b[f];
      c[h] = a[h];
      f += 1
    }else {
      break
    }
  }
  return c
}
function Ef(a, b, c, d, f) {
  this.h = a;
  this.keys = b;
  this.xa = c;
  this.Ab = d;
  this.l = f;
  this.q = 1;
  this.k = 15075087
}
q = Ef.prototype;
q.Wa = function(a) {
  return xe(Ue(nd(), a))
};
q.F = function(a) {
  var b = this.l;
  return b != m ? b : this.l = a = ee(a)
};
q.B = function(a, b) {
  return a.r(a, b, m)
};
q.r = function(a, b, c) {
  return((a = ia(b)) ? zf(1, b, this.keys) != m : a) ? this.xa[b] : c
};
q.Q = function(a, b, c) {
  if(ia(b)) {
    var d = this.Ab > Ff;
    if(d ? d : this.keys.length >= Ff) {
      return Bf(a, b, c)
    }
    if(zf(1, b, this.keys) != m) {
      return a = Df(this.xa, this.keys), a[b] = c, new Ef(this.h, this.keys, a, this.Ab + 1, m)
    }
    a = Df(this.xa, this.keys);
    d = this.keys.slice();
    a[b] = c;
    d.push(b);
    return new Ef(this.h, d, a, this.Ab + 1, m)
  }
  return Bf(a, b, c)
};
q.Va = function(a, b) {
  var c = ia(b);
  return(c ? zf(1, b, this.keys) != m : c) ? l : n
};
q.call = function() {
  var a = m;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.B(this, c);
      case 3:
        return this.r(this, c, d)
    }
    e("Invalid arity: " + arguments.length)
  }
}();
q.apply = function(a, b) {
  return a.call.apply(a, [a].concat(b.slice()))
};
q.D = function(a, b) {
  return Md(b) ? a.Q(a, A.a(b, 0), A.a(b, 1)) : Zd.c(vc, a, b)
};
q.toString = function() {
  return Q.e(F([this], 0))
};
q.z = function() {
  var a = this;
  return 0 < a.keys.length ? He.a(function(b) {
    return nf.e(F([b, a.xa[b]], 0))
  }, a.keys.sort(Af)) : m
};
q.w = function() {
  return this.keys.length
};
q.A = function(a, b) {
  return yf(a, b)
};
q.K = function(a, b) {
  return new Ef(b, this.keys, this.xa, this.Ab, this.l)
};
q.I = o("h");
q.O = function() {
  return Oc(Gf, this.h)
};
q.Xa = function(a, b) {
  var c = ia(b);
  if(c ? zf(1, b, this.keys) != m : c) {
    var c = this.keys.slice(), d = Df(this.xa, this.keys);
    c.splice(zf(1, b, c), 1);
    delete d[b];
    return new Ef(this.h, c, d, this.Ab + 1, m)
  }
  return a
};
Ef;
var Gf = new Ef(m, [], {}, 0, 0), Ff = 32;
function Hf(a, b) {
  return new Ef(m, a, b, 0, m)
}
function If(a, b, c, d) {
  this.h = a;
  this.count = b;
  this.ja = c;
  this.l = d;
  this.q = 0;
  this.k = 15075087
}
q = If.prototype;
q.F = function(a) {
  var b = this.l;
  return b != m ? b : this.l = a = ee(a)
};
q.B = function(a, b) {
  return a.r(a, b, m)
};
q.r = function(a, b, c) {
  a = this.ja[Jd.b(b)];
  b = v(a) ? zf(2, b, a) : m;
  return v(b) ? a[b + 1] : c
};
q.Q = function(a, b, c) {
  var a = Jd.b(b), d = this.ja[a];
  if(v(d)) {
    var d = d.slice(), f = bc(this.ja);
    f[a] = d;
    a = zf(2, b, d);
    if(v(a)) {
      return d[a + 1] = c, new If(this.h, this.count, f, m)
    }
    d.push(b, c);
    return new If(this.h, this.count + 1, f, m)
  }
  d = bc(this.ja);
  d[a] = [b, c];
  return new If(this.h, this.count + 1, d, m)
};
q.Va = function(a, b) {
  var c = this.ja[Jd.b(b)];
  return v(v(c) ? zf(2, b, c) : m) ? l : n
};
q.call = function() {
  var a = m;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.B(this, c);
      case 3:
        return this.r(this, c, d)
    }
    e("Invalid arity: " + arguments.length)
  }
}();
q.apply = function(a, b) {
  return a.call.apply(a, [a].concat(b.slice()))
};
q.D = function(a, b) {
  return Md(b) ? a.Q(a, A.a(b, 0), A.a(b, 1)) : Zd.c(vc, a, b)
};
q.toString = function() {
  return Q.e(F([this], 0))
};
q.z = function() {
  var a = this;
  if(0 < a.count) {
    var b = Od(a.ja).sort();
    return Re.a(function(b) {
      return He.a(mf, Ve.a(2, a.ja[b]))
    }, b)
  }
  return m
};
q.w = o("count");
q.A = function(a, b) {
  return yf(a, b)
};
q.K = function(a, b) {
  return new If(b, this.count, this.ja, this.l)
};
q.I = o("h");
q.O = function() {
  return Oc(Jf, this.h)
};
q.Xa = function(a, b) {
  var c = Jd.b(b), d = this.ja[c], f = v(d) ? zf(2, b, d) : m;
  if(yd(f)) {
    return a
  }
  var h = bc(this.ja);
  3 > d.length ? delete h[c] : (d = d.slice(), d.splice(f, 2), h[c] = d);
  return new If(this.h, this.count - 1, h, m)
};
If;
var Jf = new If(m, 0, {}, 0);
function Kf(a, b) {
  for(var c = a.g, d = c.length, f = 0;;) {
    if(d <= f) {
      return-1
    }
    if(K.a(c[f], b)) {
      return f
    }
    f += 2
  }
}
g;
function Lf(a, b, c, d) {
  this.h = a;
  this.j = b;
  this.g = c;
  this.l = d;
  this.q = 1;
  this.k = 16123663
}
q = Lf.prototype;
q.Wa = function() {
  return new Mf({}, this.g.length, this.g.slice())
};
q.F = function(a) {
  var b = this.l;
  return b != m ? b : this.l = a = ee(a)
};
q.B = function(a, b) {
  return a.r(a, b, m)
};
q.r = function(a, b, c) {
  a = Kf(a, b);
  return-1 === a ? c : this.g[a + 1]
};
q.Q = function(a, b, c) {
  var d = this, f = Kf(a, b);
  return-1 === f ? d.j < Nf ? new Lf(d.h, d.j + 1, function() {
    var a = d.g.slice();
    a.push(b);
    a.push(c);
    return a
  }(), m) : ye(ze(xe(Ue(Cf, a)), b, c)) : c === d.g[f + 1] ? a : new Lf(d.h, d.j, function() {
    var a = d.g.slice();
    a[f + 1] = c;
    return a
  }(), m)
};
q.Va = function(a, b) {
  return-1 !== Kf(a, b)
};
q.call = function() {
  var a = m;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.B(this, c);
      case 3:
        return this.r(this, c, d)
    }
    e("Invalid arity: " + arguments.length)
  }
}();
q.apply = function(a, b) {
  return a.call.apply(a, [a].concat(b.slice()))
};
q.D = function(a, b) {
  return Md(b) ? a.Q(a, A.a(b, 0), A.a(b, 1)) : Zd.c(vc, a, b)
};
q.toString = function() {
  return Q.e(F([this], 0))
};
q.z = function() {
  var a = this;
  if(0 < a.j) {
    var b = a.g.length, c = function f(c) {
      return new U(m, n, function() {
        return c < b ? O(V([a.g[c], a.g[c + 1]]), f(c + 2)) : m
      }, m)
    };
    return c.b ? c.b(0) : c.call(m, 0)
  }
  return m
};
q.w = o("j");
q.A = function(a, b) {
  return yf(a, b)
};
q.K = function(a, b) {
  return new Lf(b, this.j, this.g, this.l)
};
q.I = o("h");
q.O = function() {
  return Oc(Of, this.h)
};
q.Xa = function(a, b) {
  if(0 <= Kf(a, b)) {
    var c = this.g.length, d = c - 2;
    if(0 === d) {
      return a.O(a)
    }
    for(var d = sc.b(d), f = 0, h = 0;;) {
      if(f >= c) {
        return new Lf(this.h, this.j - 1, d, m)
      }
      K.a(b, this.g[f]) || (d[h] = this.g[f], d[h + 1] = this.g[f + 1], h += 2);
      f += 2
    }
  }else {
    return a
  }
};
Lf;
var Of = new Lf(m, 0, [], m), Nf = 16;
function Pf(a, b) {
  for(var c = S(a), d = 0, f = cd(Of);;) {
    if(d < c) {
      var h = d + 1, f = gd(f, a[d], b[d]), d = h
    }else {
      return fd(f)
    }
  }
}
g;
function Mf(a, b, c) {
  this.bb = a;
  this.Ea = b;
  this.g = c;
  this.q = 14;
  this.k = 258
}
q = Mf.prototype;
q.Ya = function(a, b, c) {
  if(v(this.bb)) {
    var d = Kf(a, b);
    if(-1 === d) {
      if(this.Ea + 2 <= 2 * Nf) {
        return this.Ea += 2, this.g.push(b), this.g.push(c), a
      }
      var f;
      a: {
        for(var a = this.Ea, d = this.g, h = cd(Gf), i = 0;;) {
          if(i < a) {
            h = gd(h, d[i], d[i + 1]), i += 2
          }else {
            f = h;
            break a
          }
        }
      }
      return gd(f, b, c)
    }
    c !== this.g[d + 1] && (this.g[d + 1] = c);
    return a
  }
  e(Error("assoc! after persistent!"))
};
q.Za = function(a, b) {
  if(v(this.bb)) {
    var c;
    c = b ? ((c = b.k & 2048) ? c : b.$c) ? l : b.k ? n : w(Fc, b) : w(Fc, b);
    if(c) {
      return a.Ya(a, Gc(b), Hc(b))
    }
    c = R(b);
    for(var d = a;;) {
      var f = I(c);
      if(v(f)) {
        c = H(c), d = d.Ya(d, Gc(f), Hc(f))
      }else {
        return d
      }
    }
  }else {
    e(Error("conj! after persistent!"))
  }
};
q.ob = function() {
  if(v(this.bb)) {
    return this.bb = n, new Lf(m, ae((this.Ea - this.Ea % 2) / 2), this.g, m)
  }
  e(Error("persistent! called twice"))
};
q.B = function(a, b) {
  return a.r(a, b, m)
};
q.r = function(a, b, c) {
  if(v(this.bb)) {
    return a = Kf(a, b), -1 === a ? c : this.g[a + 1]
  }
  e(Error("lookup after persistent!"))
};
q.w = function() {
  if(v(this.bb)) {
    return ae((this.Ea - this.Ea % 2) / 2)
  }
  e(Error("count after persistent!"))
};
Mf;
g;
function Qf(a) {
  this.m = a
}
Qf;
g;
g;
g;
g;
g;
g;
function Rf(a, b) {
  return ia(a) ? a === b : K.a(a, b)
}
var Sf = function() {
  function a(a, b, c, i, j) {
    a = a.slice();
    a[b] = c;
    a[i] = j;
    return a
  }
  function b(a, b, c) {
    a = a.slice();
    a[b] = c;
    return a
  }
  var c = m, c = function(c, f, h, i, j) {
    switch(arguments.length) {
      case 3:
        return b.call(this, c, f, h);
      case 5:
        return a.call(this, c, f, h, i, j)
    }
    e("Invalid arity: " + arguments.length)
  };
  c.c = b;
  c.$ = a;
  return c
}();
function Tf(a, b) {
  var c = sc.b(a.length - 2);
  Pd(a, 0, c, 0, 2 * b);
  Pd(a, 2 * (b + 1), c, 2 * b, c.length - 2 * b);
  return c
}
var Uf = function() {
  function a(a, b, c, i, j, k) {
    a = a.cb(b);
    a.g[c] = i;
    a.g[j] = k;
    return a
  }
  function b(a, b, c, i) {
    a = a.cb(b);
    a.g[c] = i;
    return a
  }
  var c = m, c = function(c, f, h, i, j, k) {
    switch(arguments.length) {
      case 4:
        return b.call(this, c, f, h, i);
      case 6:
        return a.call(this, c, f, h, i, j, k)
    }
    e("Invalid arity: " + arguments.length)
  };
  c.p = b;
  c.Aa = a;
  return c
}();
g;
function Vf(a, b, c) {
  this.v = a;
  this.H = b;
  this.g = c
}
q = Vf.prototype;
q.fa = function(a, b, c, d, f, h) {
  var i = 1 << (c >>> b & 31), j = be(this.H & i - 1);
  if(0 === (this.H & i)) {
    var k = be(this.H);
    if(2 * k < this.g.length) {
      a = this.cb(a);
      b = a.g;
      h.m = l;
      a: {
        c = 2 * (k - j);
        h = 2 * j + (c - 1);
        for(k = 2 * (j + 1) + (c - 1);;) {
          if(0 === c) {
            break a
          }
          b[k] = b[h];
          k -= 1;
          c -= 1;
          h -= 1
        }
      }
      b[2 * j] = d;
      b[2 * j + 1] = f;
      a.H |= i;
      return a
    }
    if(16 <= k) {
      j = sc.b(32);
      j[c >>> b & 31] = Wf.fa(a, b + 5, c, d, f, h);
      for(f = d = 0;;) {
        if(32 > d) {
          0 !== (this.H >>> d & 1) && (j[d] = this.g[f] != m ? Wf.fa(a, b + 5, Jd.b(this.g[f]), this.g[f], this.g[f + 1], h) : this.g[f + 1], f += 2), d += 1
        }else {
          break
        }
      }
      return new Xf(a, k + 1, j)
    }
    b = sc.b(2 * (k + 4));
    Pd(this.g, 0, b, 0, 2 * j);
    b[2 * j] = d;
    b[2 * j + 1] = f;
    Pd(this.g, 2 * j, b, 2 * (j + 1), 2 * (k - j));
    h.m = l;
    d = this.cb(a);
    d.g = b;
    d.H |= i;
    return d
  }
  k = this.g[2 * j];
  i = this.g[2 * j + 1];
  if(k == m) {
    return d = i.fa(a, b + 5, c, d, f, h), d === i ? this : Uf.p(this, a, 2 * j + 1, d)
  }
  if(Rf(d, k)) {
    return f === i ? this : Uf.p(this, a, 2 * j + 1, f)
  }
  h.m = l;
  return Uf.Aa(this, a, 2 * j, m, 2 * j + 1, Yf.pb(a, b + 5, k, i, c, d, f))
};
q.vb = function() {
  return Zf.b(this.g)
};
q.cb = function(a) {
  if(a === this.v) {
    return this
  }
  var b = be(this.H), c = sc.b(0 > b ? 4 : 2 * (b + 1));
  Pd(this.g, 0, c, 0, 2 * b);
  return new Vf(a, this.H, c)
};
q.wb = function(a, b, c) {
  var d = 1 << (b >>> a & 31);
  if(0 === (this.H & d)) {
    return this
  }
  var f = be(this.H & d - 1), h = this.g[2 * f], i = this.g[2 * f + 1];
  return h == m ? (a = i.wb(a + 5, b, c), a === i ? this : a != m ? new Vf(m, this.H, Sf.c(this.g, 2 * f + 1, a)) : this.H === d ? m : new Vf(m, this.H ^ d, Tf(this.g, f))) : Rf(c, h) ? new Vf(m, this.H ^ d, Tf(this.g, f)) : this
};
q.ea = function(a, b, c, d, f) {
  var h = 1 << (b >>> a & 31), i = be(this.H & h - 1);
  if(0 === (this.H & h)) {
    var j = be(this.H);
    if(16 <= j) {
      i = sc.b(32);
      i[b >>> a & 31] = Wf.ea(a + 5, b, c, d, f);
      for(d = c = 0;;) {
        if(32 > c) {
          0 !== (this.H >>> c & 1) && (i[c] = this.g[d] != m ? Wf.ea(a + 5, Jd.b(this.g[d]), this.g[d], this.g[d + 1], f) : this.g[d + 1], d += 2), c += 1
        }else {
          break
        }
      }
      return new Xf(m, j + 1, i)
    }
    a = sc.b(2 * (j + 1));
    Pd(this.g, 0, a, 0, 2 * i);
    a[2 * i] = c;
    a[2 * i + 1] = d;
    Pd(this.g, 2 * i, a, 2 * (i + 1), 2 * (j - i));
    f.m = l;
    return new Vf(m, this.H | h, a)
  }
  h = this.g[2 * i];
  j = this.g[2 * i + 1];
  if(h == m) {
    return f = j.ea(a + 5, b, c, d, f), f === j ? this : new Vf(m, this.H, Sf.c(this.g, 2 * i + 1, f))
  }
  if(Rf(c, h)) {
    return d === j ? this : new Vf(m, this.H, Sf.c(this.g, 2 * i + 1, d))
  }
  f.m = l;
  return new Vf(m, this.H, Sf.$(this.g, 2 * i, m, 2 * i + 1, Yf.Aa(a + 5, h, j, b, c, d)))
};
q.Ba = function(a, b, c, d) {
  var f = 1 << (b >>> a & 31);
  if(0 === (this.H & f)) {
    return d
  }
  var h = be(this.H & f - 1), f = this.g[2 * h], h = this.g[2 * h + 1];
  return f == m ? h.Ba(a + 5, b, c, d) : Rf(c, f) ? h : d
};
Vf;
var Wf = new Vf(m, 0, sc.b(0));
function Xf(a, b, c) {
  this.v = a;
  this.j = b;
  this.g = c
}
q = Xf.prototype;
q.fa = function(a, b, c, d, f, h) {
  var i = c >>> b & 31, j = this.g[i];
  if(j == m) {
    return a = Uf.p(this, a, i, Wf.fa(a, b + 5, c, d, f, h)), a.j += 1, a
  }
  b = j.fa(a, b + 5, c, d, f, h);
  return b === j ? this : Uf.p(this, a, i, b)
};
q.vb = function() {
  return $f.b(this.g)
};
q.cb = function(a) {
  return a === this.v ? this : new Xf(a, this.j, this.g.slice())
};
q.wb = function(a, b, c) {
  var d = b >>> a & 31, f = this.g[d];
  if(f != m) {
    a = f.wb(a + 5, b, c);
    if(a === f) {
      d = this
    }else {
      if(a == m) {
        if(8 >= this.j) {
          a: {
            for(var f = this.g, a = 2 * (this.j - 1), b = sc.b(a), c = 0, h = 1, i = 0;;) {
              if(c < a) {
                var j = c !== d;
                if(j ? f[c] != m : j) {
                  b[h] = f[c], h += 2, i |= 1 << c
                }
                c += 1
              }else {
                d = new Vf(m, i, b);
                break a
              }
            }
            d = g
          }
        }else {
          d = new Xf(m, this.j - 1, Sf.c(this.g, d, a))
        }
      }else {
        d = new Xf(m, this.j, Sf.c(this.g, d, a))
      }
    }
    return d
  }
  return this
};
q.ea = function(a, b, c, d, f) {
  var h = b >>> a & 31, i = this.g[h];
  if(i == m) {
    return new Xf(m, this.j + 1, Sf.c(this.g, h, Wf.ea(a + 5, b, c, d, f)))
  }
  a = i.ea(a + 5, b, c, d, f);
  return a === i ? this : new Xf(m, this.j, Sf.c(this.g, h, a))
};
q.Ba = function(a, b, c, d) {
  var f = this.g[b >>> a & 31];
  return f != m ? f.Ba(a + 5, b, c, d) : d
};
Xf;
function ag(a, b, c) {
  for(var b = 2 * b, d = 0;;) {
    if(d < b) {
      if(Rf(c, a[d])) {
        return d
      }
      d += 2
    }else {
      return-1
    }
  }
}
function bg(a, b, c, d) {
  this.v = a;
  this.qa = b;
  this.j = c;
  this.g = d
}
q = bg.prototype;
q.fa = function(a, b, c, d, f, h) {
  if(c === this.qa) {
    b = ag(this.g, this.j, d);
    if(-1 === b) {
      if(this.g.length > 2 * this.j) {
        return a = Uf.Aa(this, a, 2 * this.j, d, 2 * this.j + 1, f), h.m = l, a.j += 1, a
      }
      c = this.g.length;
      b = sc.b(c + 2);
      Pd(this.g, 0, b, 0, c);
      b[c] = d;
      b[c + 1] = f;
      h.m = l;
      h = this.j + 1;
      a === this.v ? (this.g = b, this.j = h, a = this) : a = new bg(this.v, this.qa, h, b);
      return a
    }
    return this.g[b + 1] === f ? this : Uf.p(this, a, b + 1, f)
  }
  return(new Vf(a, 1 << (this.qa >>> b & 31), [m, this, m, m])).fa(a, b, c, d, f, h)
};
q.vb = function() {
  return Zf.b(this.g)
};
q.cb = function(a) {
  if(a === this.v) {
    return this
  }
  var b = sc.b(2 * (this.j + 1));
  Pd(this.g, 0, b, 0, 2 * this.j);
  return new bg(a, this.qa, this.j, b)
};
q.wb = function(a, b, c) {
  a = ag(this.g, this.j, c);
  return-1 === a ? this : 1 === this.j ? m : new bg(m, this.qa, this.j - 1, Tf(this.g, ae((a - a % 2) / 2)))
};
q.ea = function(a, b, c, d, f) {
  return b === this.qa ? (a = ag(this.g, this.j, c), -1 === a ? (a = this.g.length, b = sc.b(a + 2), Pd(this.g, 0, b, 0, a), b[a] = c, b[a + 1] = d, f.m = l, new bg(m, this.qa, this.j + 1, b)) : K.a(this.g[a], d) ? this : new bg(m, this.qa, this.j, Sf.c(this.g, a + 1, d))) : (new Vf(m, 1 << (this.qa >>> a & 31), [m, this])).ea(a, b, c, d, f)
};
q.Ba = function(a, b, c, d) {
  a = ag(this.g, this.j, c);
  return 0 > a ? d : Rf(c, this.g[a]) ? this.g[a + 1] : d
};
bg;
var Yf = function() {
  function a(a, b, c, i, j, k, r) {
    var x = Jd.b(c);
    if(x === j) {
      return new bg(m, x, 2, [c, i, k, r])
    }
    var t = new Qf(n);
    return Wf.fa(a, b, x, c, i, t).fa(a, b, j, k, r, t)
  }
  function b(a, b, c, i, j, k) {
    var r = Jd.b(b);
    if(r === i) {
      return new bg(m, r, 2, [b, c, j, k])
    }
    var x = new Qf(n);
    return Wf.ea(a, r, b, c, x).ea(a, i, j, k, x)
  }
  var c = m, c = function(c, f, h, i, j, k, r) {
    switch(arguments.length) {
      case 6:
        return b.call(this, c, f, h, i, j, k);
      case 7:
        return a.call(this, c, f, h, i, j, k, r)
    }
    e("Invalid arity: " + arguments.length)
  };
  c.Aa = b;
  c.pb = a;
  return c
}();
function cg(a, b, c, d, f) {
  this.h = a;
  this.Ga = b;
  this.t = c;
  this.wa = d;
  this.l = f;
  this.q = 0;
  this.k = 31850572
}
q = cg.prototype;
q.F = function(a) {
  var b = this.l;
  return b != m ? b : this.l = a = rd(a)
};
q.D = function(a, b) {
  return O(b, a)
};
q.toString = function() {
  return Q.e(F([this], 0))
};
q.z = aa();
q.Y = function() {
  return this.wa == m ? V([this.Ga[this.t], this.Ga[this.t + 1]]) : I(this.wa)
};
q.U = function() {
  return this.wa == m ? Zf.c(this.Ga, this.t + 2, m) : Zf.c(this.Ga, this.t, H(this.wa))
};
q.A = function(a, b) {
  return ud(a, b)
};
q.K = function(a, b) {
  return new cg(b, this.Ga, this.t, this.wa, this.l)
};
q.I = o("h");
q.O = function() {
  return Oc(P, this.h)
};
cg;
var Zf = function() {
  function a(a, b, c) {
    if(c == m) {
      for(c = a.length;;) {
        if(b < c) {
          if(a[b] != m) {
            return new cg(m, a, b, m, m)
          }
          var i = a[b + 1];
          if(v(i) && (i = i.vb(), v(i))) {
            return new cg(m, a, b + 2, i, m)
          }
          b += 2
        }else {
          return m
        }
      }
    }else {
      return new cg(m, a, b, c, m)
    }
  }
  function b(a) {
    return c.c(a, 0, m)
  }
  var c = m, c = function(c, f, h) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 3:
        return a.call(this, c, f, h)
    }
    e("Invalid arity: " + arguments.length)
  };
  c.b = b;
  c.c = a;
  return c
}();
function dg(a, b, c, d, f) {
  this.h = a;
  this.Ga = b;
  this.t = c;
  this.wa = d;
  this.l = f;
  this.q = 0;
  this.k = 31850572
}
q = dg.prototype;
q.F = function(a) {
  var b = this.l;
  return b != m ? b : this.l = a = rd(a)
};
q.D = function(a, b) {
  return O(b, a)
};
q.toString = function() {
  return Q.e(F([this], 0))
};
q.z = aa();
q.Y = function() {
  return I(this.wa)
};
q.U = function() {
  return $f.p(m, this.Ga, this.t, H(this.wa))
};
q.A = function(a, b) {
  return ud(a, b)
};
q.K = function(a, b) {
  return new dg(b, this.Ga, this.t, this.wa, this.l)
};
q.I = o("h");
q.O = function() {
  return Oc(P, this.h)
};
dg;
var $f = function() {
  function a(a, b, c, i) {
    if(i == m) {
      for(i = b.length;;) {
        if(c < i) {
          var j = b[c];
          if(v(j) && (j = j.vb(), v(j))) {
            return new dg(a, b, c + 1, j, m)
          }
          c += 1
        }else {
          return m
        }
      }
    }else {
      return new dg(a, b, c, i, m)
    }
  }
  function b(a) {
    return c.p(m, a, 0, m)
  }
  var c = m, c = function(c, f, h, i) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 4:
        return a.call(this, c, f, h, i)
    }
    e("Invalid arity: " + arguments.length)
  };
  c.b = b;
  c.p = a;
  return c
}();
g;
function eg(a, b, c, d, f, h) {
  this.h = a;
  this.j = b;
  this.root = c;
  this.V = d;
  this.aa = f;
  this.l = h;
  this.q = 1;
  this.k = 16123663
}
q = eg.prototype;
q.Wa = function() {
  return new fg({}, this.root, this.j, this.V, this.aa)
};
q.F = function(a) {
  var b = this.l;
  return b != m ? b : this.l = a = ee(a)
};
q.B = function(a, b) {
  return a.r(a, b, m)
};
q.r = function(a, b, c) {
  return b == m ? this.V ? this.aa : c : this.root == m ? c : this.root.Ba(0, Jd.b(b), b, c)
};
q.Q = function(a, b, c) {
  if(b == m) {
    var d = this.V;
    return(d ? c === this.aa : d) ? a : new eg(this.h, this.V ? this.j : this.j + 1, this.root, l, c, m)
  }
  d = new Qf(n);
  c = (this.root == m ? Wf : this.root).ea(0, Jd.b(b), b, c, d);
  return c === this.root ? a : new eg(this.h, d.m ? this.j + 1 : this.j, c, this.V, this.aa, m)
};
q.Va = function(a, b) {
  return b == m ? this.V : this.root == m ? n : this.root.Ba(0, Jd.b(b), b, Qd) !== Qd
};
q.call = function() {
  var a = m;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.B(this, c);
      case 3:
        return this.r(this, c, d)
    }
    e("Invalid arity: " + arguments.length)
  }
}();
q.apply = function(a, b) {
  return a.call.apply(a, [a].concat(b.slice()))
};
q.D = function(a, b) {
  return Md(b) ? a.Q(a, A.a(b, 0), A.a(b, 1)) : Zd.c(vc, a, b)
};
q.toString = function() {
  return Q.e(F([this], 0))
};
q.z = function() {
  if(0 < this.j) {
    var a = this.root != m ? this.root.vb() : m;
    return this.V ? O(V([m, this.aa]), a) : a
  }
  return m
};
q.w = o("j");
q.A = function(a, b) {
  return yf(a, b)
};
q.K = function(a, b) {
  return new eg(b, this.j, this.root, this.V, this.aa, this.l)
};
q.I = o("h");
q.O = function() {
  return Oc(Cf, this.h)
};
q.Xa = function(a, b) {
  if(b == m) {
    return this.V ? new eg(this.h, this.j - 1, this.root, n, m, m) : a
  }
  if(this.root == m) {
    return a
  }
  var c = this.root.wb(0, Jd.b(b), b);
  return c === this.root ? a : new eg(this.h, this.j - 1, c, this.V, this.aa, m)
};
eg;
var Cf = new eg(m, 0, m, n, m, 0);
function fg(a, b, c, d, f) {
  this.v = a;
  this.root = b;
  this.count = c;
  this.V = d;
  this.aa = f;
  this.q = 14;
  this.k = 258
}
q = fg.prototype;
q.Ya = function(a, b, c) {
  return gg(a, b, c)
};
q.Za = function(a, b) {
  var c;
  a: {
    if(a.v) {
      var d;
      d = b ? ((d = b.k & 2048) ? d : b.$c) ? l : b.k ? n : w(Fc, b) : w(Fc, b);
      if(d) {
        c = gg(a, Gc(b), Hc(b))
      }else {
        d = R(b);
        for(var f = a;;) {
          var h = I(d);
          if(v(h)) {
            d = H(d), f = gg(f, Gc(h), Hc(h))
          }else {
            c = f;
            break a
          }
        }
      }
    }else {
      e(Error("conj! after persistent"))
    }
  }
  return c
};
q.ob = function(a) {
  var b;
  a.v ? (a.v = m, b = new eg(m, a.count, a.root, a.V, a.aa, m)) : e(Error("persistent! called twice"));
  return b
};
q.B = function(a, b) {
  return b == m ? this.V ? this.aa : m : this.root == m ? m : this.root.Ba(0, Jd.b(b), b)
};
q.r = function(a, b, c) {
  return b == m ? this.V ? this.aa : c : this.root == m ? c : this.root.Ba(0, Jd.b(b), b, c)
};
q.w = function() {
  if(this.v) {
    return this.count
  }
  e(Error("count after persistent!"))
};
function gg(a, b, c) {
  if(a.v) {
    if(b == m) {
      if(a.aa !== c && (a.aa = c), !a.V) {
        a.count += 1, a.V = l
      }
    }else {
      var d = new Qf(n), b = (a.root == m ? Wf : a.root).fa(a.v, 0, Jd.b(b), b, c, d);
      b !== a.root && (a.root = b);
      d.m && (a.count += 1)
    }
    return a
  }
  e(Error("assoc! after persistent!"))
}
fg;
function hg(a, b, c) {
  for(var d = b;;) {
    if(a != m) {
      b = c ? a.left : a.right, d = zd.a(d, a), a = b
    }else {
      return d
    }
  }
}
function ig(a, b, c, d, f) {
  this.h = a;
  this.stack = b;
  this.Cb = c;
  this.j = d;
  this.l = f;
  this.q = 0;
  this.k = 31850570
}
q = ig.prototype;
q.F = function(a) {
  var b = this.l;
  return b != m ? b : this.l = a = rd(a)
};
q.D = function(a, b) {
  return O(b, a)
};
q.toString = function() {
  return Q.e(F([this], 0))
};
q.z = aa();
q.w = function(a) {
  return 0 > this.j ? S(H(a)) + 1 : this.j
};
q.Y = function() {
  return Jc(this.stack)
};
q.U = function() {
  var a = I(this.stack), a = hg(this.Cb ? a.right : a.left, H(this.stack), this.Cb);
  return a != m ? new ig(m, a, this.Cb, this.j - 1, m) : P
};
q.A = function(a, b) {
  return ud(a, b)
};
q.K = function(a, b) {
  return new ig(b, this.stack, this.Cb, this.j, this.l)
};
q.I = o("h");
ig;
g;
g;
function jg(a, b, c, d) {
  return N(W, c) ? N(W, c.left) ? new W(c.key, c.m, c.left.ma(), new X(a, b, c.right, d, m), m) : N(W, c.right) ? new W(c.right.key, c.right.m, new X(c.key, c.m, c.left, c.right.left, m), new X(a, b, c.right.right, d, m), m) : new X(a, b, c, d, m) : new X(a, b, c, d, m)
}
function kg(a, b, c, d) {
  return N(W, d) ? N(W, d.right) ? new W(d.key, d.m, new X(a, b, c, d.left, m), d.right.ma(), m) : N(W, d.left) ? new W(d.left.key, d.left.m, new X(a, b, c, d.left.left, m), new X(d.key, d.m, d.left.right, d.right, m), m) : new X(a, b, c, d, m) : new X(a, b, c, d, m)
}
function lg(a, b, c, d) {
  if(N(W, c)) {
    return new W(a, b, c.ma(), d, m)
  }
  if(N(X, d)) {
    return kg(a, b, c, d.yb())
  }
  var f = N(W, d);
  if(f ? N(X, d.left) : f) {
    return new W(d.left.key, d.left.m, new X(a, b, c, d.left.left, m), kg(d.key, d.m, d.left.right, d.right.yb()), m)
  }
  e(Error("red-black tree invariant violation"))
}
function mg(a, b, c, d) {
  if(N(W, d)) {
    return new W(a, b, c, d.ma(), m)
  }
  if(N(X, c)) {
    return jg(a, b, c.yb(), d)
  }
  var f = N(W, c);
  if(f ? N(X, c.right) : f) {
    return new W(c.right.key, c.right.m, jg(c.key, c.m, c.left.yb(), c.right.left), new X(a, b, c.right.right, d, m), m)
  }
  e(Error("red-black tree invariant violation"))
}
function X(a, b, c, d, f) {
  this.key = a;
  this.m = b;
  this.left = c;
  this.right = d;
  this.l = f;
  this.q = 0;
  this.k = 32402207
}
q = X.prototype;
q.F = function(a) {
  var b = this.l;
  return b != m ? b : this.l = a = rd(a)
};
q.B = function(a, b) {
  return a.L(a, b, m)
};
q.r = function(a, b, c) {
  return a.L(a, b, c)
};
q.Q = function(a, b, c) {
  return Dd.c(V([this.key, this.m]), b, c)
};
q.call = function() {
  var a = m;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.B(this, c);
      case 3:
        return this.r(this, c, d)
    }
    e("Invalid arity: " + arguments.length)
  }
}();
q.apply = function(a, b) {
  return a.call.apply(a, [a].concat(b.slice()))
};
q.D = function(a, b) {
  return V([this.key, this.m, b])
};
q.Fb = o("key");
q.Gb = o("m");
q.wc = function(a) {
  return a.yc(this)
};
q.yb = function() {
  return new W(this.key, this.m, this.left, this.right, m)
};
q.replace = function(a, b, c, d) {
  return new X(a, b, c, d, m)
};
q.vc = function(a) {
  return a.xc(this)
};
q.xc = function(a) {
  return new X(a.key, a.m, this, a.right, m)
};
q.toString = function() {
  return function() {
    switch(arguments.length) {
      case 0:
        return Q.e(F([this], 0))
    }
    e("Invalid arity: " + arguments.length)
  }
}();
q.yc = function(a) {
  return new X(a.key, a.m, a.left, this, m)
};
q.ma = function() {
  return this
};
q.na = function(a, b) {
  return pd.a(a, b)
};
q.oa = function(a, b, c) {
  return pd.c(a, b, c)
};
q.z = function() {
  return M.a(this.key, this.m)
};
q.w = p(2);
q.pa = o("m");
q.$a = function(a, b, c) {
  return Lc(V([this.key, this.m]), b, c)
};
q.A = function(a, b) {
  return ud(a, b)
};
q.K = function(a, b) {
  return Fd(V([this.key, this.m]), b)
};
q.I = p(m);
q.R = function(a, b) {
  return 0 === b ? this.key : 1 === b ? this.m : m
};
q.L = function(a, b, c) {
  return 0 === b ? this.key : 1 === b ? this.m : c
};
q.O = function() {
  return kf
};
X;
function W(a, b, c, d, f) {
  this.key = a;
  this.m = b;
  this.left = c;
  this.right = d;
  this.l = f;
  this.q = 0;
  this.k = 32402207
}
q = W.prototype;
q.F = function(a) {
  var b = this.l;
  return b != m ? b : this.l = a = rd(a)
};
q.B = function(a, b) {
  return a.L(a, b, m)
};
q.r = function(a, b, c) {
  return a.L(a, b, c)
};
q.Q = function(a, b, c) {
  return Dd.c(V([this.key, this.m]), b, c)
};
q.call = function() {
  var a = m;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.B(this, c);
      case 3:
        return this.r(this, c, d)
    }
    e("Invalid arity: " + arguments.length)
  }
}();
q.apply = function(a, b) {
  return a.call.apply(a, [a].concat(b.slice()))
};
q.D = function(a, b) {
  return V([this.key, this.m, b])
};
q.Fb = o("key");
q.Gb = o("m");
q.wc = function(a) {
  return new W(this.key, this.m, this.left, a, m)
};
q.yb = function() {
  e(Error("red-black tree invariant violation"))
};
q.replace = function(a, b, c, d) {
  return new W(a, b, c, d, m)
};
q.vc = function(a) {
  return new W(this.key, this.m, a, this.right, m)
};
q.xc = function(a) {
  return N(W, this.left) ? new W(this.key, this.m, this.left.ma(), new X(a.key, a.m, this.right, a.right, m), m) : N(W, this.right) ? new W(this.right.key, this.right.m, new X(this.key, this.m, this.left, this.right.left, m), new X(a.key, a.m, this.right.right, a.right, m), m) : new X(a.key, a.m, this, a.right, m)
};
q.toString = function() {
  return function() {
    switch(arguments.length) {
      case 0:
        return Q.e(F([this], 0))
    }
    e("Invalid arity: " + arguments.length)
  }
}();
q.yc = function(a) {
  return N(W, this.right) ? new W(this.key, this.m, new X(a.key, a.m, a.left, this.left, m), this.right.ma(), m) : N(W, this.left) ? new W(this.left.key, this.left.m, new X(a.key, a.m, a.left, this.left.left, m), new X(this.key, this.m, this.left.right, this.right, m), m) : new X(a.key, a.m, a.left, this, m)
};
q.ma = function() {
  return new X(this.key, this.m, this.left, this.right, m)
};
q.na = function(a, b) {
  return pd.a(a, b)
};
q.oa = function(a, b, c) {
  return pd.c(a, b, c)
};
q.z = function() {
  return M.a(this.key, this.m)
};
q.w = p(2);
q.pa = o("m");
q.$a = function(a, b, c) {
  return Lc(V([this.key, this.m]), b, c)
};
q.A = function(a, b) {
  return ud(a, b)
};
q.K = function(a, b) {
  return Fd(V([this.key, this.m]), b)
};
q.I = p(m);
q.R = function(a, b) {
  return 0 === b ? this.key : 1 === b ? this.m : m
};
q.L = function(a, b, c) {
  return 0 === b ? this.key : 1 === b ? this.m : c
};
q.O = function() {
  return kf
};
W;
var og = function ng(b, c, d, f, h) {
  if(c == m) {
    return new W(d, f, m, m, m)
  }
  var i = b.a ? b.a(d, c.key) : b.call(m, d, c.key);
  if(0 === i) {
    return h[0] = c, m
  }
  if(0 > i) {
    return b = ng(b, c.left, d, f, h), b != m ? c.vc(b) : m
  }
  b = ng(b, c.right, d, f, h);
  return b != m ? c.wc(b) : m
}, qg = function pg(b, c) {
  if(b == m) {
    return c
  }
  if(c == m) {
    return b
  }
  if(N(W, b)) {
    if(N(W, c)) {
      var d = pg(b.right, c.left);
      return N(W, d) ? new W(d.key, d.m, new W(b.key, b.m, b.left, d.left, m), new W(c.key, c.m, d.right, c.right, m), m) : new W(b.key, b.m, b.left, new W(c.key, c.m, d, c.right, m), m)
    }
    return new W(b.key, b.m, b.left, pg(b.right, c), m)
  }
  if(N(W, c)) {
    return new W(c.key, c.m, pg(b, c.left), c.right, m)
  }
  d = pg(b.right, c.left);
  return N(W, d) ? new W(d.key, d.m, new X(b.key, b.m, b.left, d.left, m), new X(c.key, c.m, d.right, c.right, m), m) : lg(b.key, b.m, b.left, new X(c.key, c.m, d, c.right, m))
}, sg = function rg(b, c, d, f) {
  if(c != m) {
    var h = b.a ? b.a(d, c.key) : b.call(m, d, c.key);
    if(0 === h) {
      return f[0] = c, qg(c.left, c.right)
    }
    if(0 > h) {
      var i = rg(b, c.left, d, f);
      return function() {
        var b = i != m;
        return b ? b : f[0] != m
      }() ? N(X, c.left) ? lg(c.key, c.m, i, c.right) : new W(c.key, c.m, i, c.right, m) : m
    }
    var j = rg(b, c.right, d, f);
    return function() {
      var b = j != m;
      return b ? b : f[0] != m
    }() ? N(X, c.right) ? mg(c.key, c.m, c.left, j) : new W(c.key, c.m, c.left, j, m) : m
  }
  return m
}, ug = function tg(b, c, d, f) {
  var h = c.key, i = b.a ? b.a(d, h) : b.call(m, d, h);
  return 0 === i ? c.replace(h, f, c.left, c.right) : 0 > i ? c.replace(h, c.m, tg(b, c.left, d, f), c.right) : c.replace(h, c.m, c.left, tg(b, c.right, d, f))
};
g;
function vg(a, b, c, d, f) {
  this.da = a;
  this.Sa = b;
  this.j = c;
  this.h = d;
  this.l = f;
  this.q = 0;
  this.k = 418776847
}
q = vg.prototype;
q.F = function(a) {
  var b = this.l;
  return b != m ? b : this.l = a = ee(a)
};
q.B = function(a, b) {
  return a.r(a, b, m)
};
q.r = function(a, b, c) {
  a = wg(a, b);
  return a != m ? a.m : c
};
q.Q = function(a, b, c) {
  var d = [m], f = og(this.da, this.Sa, b, c, d);
  return f == m ? (d = Cd.a(d, 0), K.a(c, d.m) ? a : new vg(this.da, ug(this.da, this.Sa, b, c), this.j, this.h, m)) : new vg(this.da, f.ma(), this.j + 1, this.h, m)
};
q.Va = function(a, b) {
  return wg(a, b) != m
};
q.call = function() {
  var a = m;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.B(this, c);
      case 3:
        return this.r(this, c, d)
    }
    e("Invalid arity: " + arguments.length)
  }
}();
q.apply = function(a, b) {
  return a.call.apply(a, [a].concat(b.slice()))
};
q.D = function(a, b) {
  return Md(b) ? a.Q(a, A.a(b, 0), A.a(b, 1)) : Zd.c(vc, a, b)
};
q.nb = function() {
  return 0 < this.j ? new ig(m, hg(this.Sa, m, n), n, this.j, m) : m
};
q.toString = function() {
  return Q.e(F([this], 0))
};
function wg(a, b) {
  for(var c = a.Sa;;) {
    if(c != m) {
      var d = a.da.a ? a.da.a(b, c.key) : a.da.call(m, b, c.key);
      if(0 === d) {
        return c
      }
      c = 0 > d ? c.left : c.right
    }else {
      return m
    }
  }
}
q.z = function() {
  return 0 < this.j ? new ig(m, hg(this.Sa, m, l), l, this.j, m) : m
};
q.w = o("j");
q.A = function(a, b) {
  return yf(a, b)
};
q.K = function(a, b) {
  return new vg(this.da, this.Sa, this.j, b, this.l)
};
q.I = o("h");
q.O = function() {
  return Oc(xg, this.h)
};
q.Xa = function(a, b) {
  var c = [m], d = sg(this.da, this.Sa, b, c);
  return d == m ? Cd.a(c, 0) == m ? a : new vg(this.da, m, 0, this.h, m) : new vg(this.da, d.ma(), this.j - 1, this.h, m)
};
vg;
var xg = new vg(Xd, m, 0, m, 0), nd = function() {
  function a(a) {
    var d = m;
    s(a) && (d = F(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d)
  }
  function b(a) {
    for(var a = R(a), b = cd(Cf);;) {
      if(a) {
        var f = H(H(a)), b = ze(b, I(a), wd(a)), a = f
      }else {
        return fd(b)
      }
    }
  }
  a.o = 0;
  a.n = function(a) {
    a = R(a);
    return b(a)
  };
  a.e = b;
  return a
}(), yg = function() {
  function a(a) {
    var d = m;
    s(a) && (d = F(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d)
  }
  function b(a) {
    for(var a = R(a), b = xg;;) {
      if(a) {
        var f = H(H(a)), b = Dd.c(b, I(a), wd(a)), a = f
      }else {
        return b
      }
    }
  }
  a.o = 0;
  a.n = function(a) {
    a = R(a);
    return b(a)
  };
  a.e = b;
  return a
}();
function zg(a) {
  return Gc(a)
}
g;
function Ag(a, b, c) {
  this.h = a;
  this.tb = b;
  this.l = c;
  this.q = 1;
  this.k = 15077647
}
q = Ag.prototype;
q.Wa = function() {
  return new Bg(cd(this.tb))
};
q.F = function(a) {
  var b = this.l;
  return b != m ? b : this.l = a = fe(a)
};
q.B = function(a, b) {
  return a.r(a, b, m)
};
q.r = function(a, b, c) {
  return v(Bc(this.tb, b)) ? b : c
};
q.call = function() {
  var a = m;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.B(this, c);
      case 3:
        return this.r(this, c, d)
    }
    e("Invalid arity: " + arguments.length)
  }
}();
q.apply = function(a, b) {
  return a.call.apply(a, [a].concat(b.slice()))
};
q.D = function(a, b) {
  return new Ag(this.h, Dd.c(this.tb, b, m), m)
};
q.toString = function() {
  return Q.e(F([this], 0))
};
q.z = function() {
  return R(He.a(I, this.tb))
};
q.w = function(a) {
  return S(R(a))
};
q.A = function(a, b) {
  var c = Kd(b);
  return c ? (c = S(a) === S(b)) ? De(function(b) {
    return Wd(a, b)
  }, b) : c : c
};
q.K = function(a, b) {
  return new Ag(b, this.tb, this.l)
};
q.I = o("h");
q.O = function() {
  return Oc(Cg, this.h)
};
Ag;
var Cg = new Ag(m, nd(), 0);
function Bg(a) {
  this.Ra = a;
  this.k = 259;
  this.q = 34
}
q = Bg.prototype;
q.call = function() {
  var a = m;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return D.c(this.Ra, c, Qd) === Qd ? m : c;
      case 3:
        return D.c(this.Ra, c, Qd) === Qd ? d : c
    }
    e("Invalid arity: " + arguments.length)
  }
}();
q.apply = function(a, b) {
  return a.call.apply(a, [a].concat(b.slice()))
};
q.B = function(a, b) {
  return a.r(a, b, m)
};
q.r = function(a, b, c) {
  return D.c(this.Ra, b, Qd) === Qd ? c : b
};
q.w = function() {
  return S(this.Ra)
};
q.Za = function(a, b) {
  this.Ra = gd(this.Ra, b, m);
  return a
};
q.ob = function() {
  return new Ag(m, fd(this.Ra), m)
};
Bg;
function Dg(a, b, c) {
  this.h = a;
  this.lb = b;
  this.l = c;
  this.q = 0;
  this.k = 417730831
}
q = Dg.prototype;
q.F = function(a) {
  var b = this.l;
  return b != m ? b : this.l = a = fe(a)
};
q.B = function(a, b) {
  return a.r(a, b, m)
};
q.r = function(a, b, c) {
  return v(Bc(this.lb, b)) ? b : c
};
q.call = function() {
  var a = m;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.B(this, c);
      case 3:
        return this.r(this, c, d)
    }
    e("Invalid arity: " + arguments.length)
  }
}();
q.apply = function(a, b) {
  return a.call.apply(a, [a].concat(b.slice()))
};
q.D = function(a, b) {
  return new Dg(this.h, Dd.c(this.lb, b, m), m)
};
q.nb = function() {
  return He.a(zg, Xc(this.lb))
};
q.toString = function() {
  return Q.e(F([this], 0))
};
q.z = function() {
  return R(He.a(I, this.lb))
};
q.w = function() {
  return S(this.lb)
};
q.A = function(a, b) {
  var c = Kd(b);
  return c ? (c = S(a) === S(b)) ? De(function(b) {
    return Wd(a, b)
  }, b) : c : c
};
q.K = function(a, b) {
  return new Dg(b, this.lb, this.l)
};
q.I = o("h");
q.O = function() {
  return Oc(Eg, this.h)
};
Dg;
var Eg = new Dg(m, yg(), 0);
function Fg(a) {
  for(var b = R(a), c = cd(Cg);;) {
    if(R(b)) {
      a = H(b), b = I(b), c = ed(c, b), b = a
    }else {
      return fd(c)
    }
  }
}
function Gg(a) {
  if(Td(a)) {
    return a
  }
  var b = Ud(a);
  if(b ? b : Vd(a)) {
    return b = a.lastIndexOf("/"), 0 > b ? de.a(a, 2) : de.a(a, b + 1)
  }
  e(Error([T("Doesn't support name: "), T(a)].join("")))
}
function Hg(a) {
  var b = Ud(a);
  if(b ? b : Vd(a)) {
    return b = a.lastIndexOf("/"), -1 < b ? de.c(a, 2, b) : m
  }
  e(Error([T("Doesn't support namespace: "), T(a)].join("")))
}
var Jg = function Ig(b, c) {
  return new U(m, n, function() {
    var d = R(c);
    return d ? v(b.b ? b.b(I(d)) : b.call(m, I(d))) ? O(I(d), Ig(b, J(d))) : m : m
  }, m)
};
function Kg(a, b, c, d, f) {
  this.h = a;
  this.start = b;
  this.end = c;
  this.step = d;
  this.l = f;
  this.q = 0;
  this.k = 32375006
}
q = Kg.prototype;
q.F = function(a) {
  var b = this.l;
  return b != m ? b : this.l = a = rd(a)
};
q.za = function() {
  return 0 < this.step ? this.start + this.step < this.end ? new Kg(this.h, this.start + this.step, this.end, this.step, m) : m : this.start + this.step > this.end ? new Kg(this.h, this.start + this.step, this.end, this.step, m) : m
};
q.D = function(a, b) {
  return O(b, a)
};
q.toString = function() {
  return Q.e(F([this], 0))
};
q.na = function(a, b) {
  return pd.a(a, b)
};
q.oa = function(a, b, c) {
  return pd.c(a, b, c)
};
q.z = function(a) {
  return 0 < this.step ? this.start < this.end ? a : m : this.start > this.end ? a : m
};
q.w = function(a) {
  return yd(a.z(a)) ? 0 : Math.ceil((this.end - this.start) / this.step)
};
q.Y = o("start");
q.U = function(a) {
  return a.z(a) != m ? new Kg(this.h, this.start + this.step, this.end, this.step, m) : P
};
q.A = function(a, b) {
  return ud(a, b)
};
q.K = function(a, b) {
  return new Kg(b, this.start, this.end, this.step, this.l)
};
q.I = o("h");
q.R = function(a, b) {
  if(b < a.w(a)) {
    return this.start + b * this.step
  }
  var c = this.start > this.end;
  if(c ? 0 === this.step : c) {
    return this.start
  }
  e(Error("Index out of bounds"))
};
q.L = function(a, b, c) {
  c = b < a.w(a) ? this.start + b * this.step : ((a = this.start > this.end) ? 0 === this.step : a) ? this.start : c;
  return c
};
q.O = function() {
  return Oc(P, this.h)
};
Kg;
var Lg = function() {
  function a(a, b, c) {
    return new Kg(m, a, b, c, m)
  }
  function b(a, b) {
    return f.c(a, b, 1)
  }
  function c(a) {
    return f.c(0, a, 1)
  }
  function d() {
    return f.c(0, Number.MAX_VALUE, 1)
  }
  var f = m, f = function(f, i, j) {
    switch(arguments.length) {
      case 0:
        return d.call(this);
      case 1:
        return c.call(this, f);
      case 2:
        return b.call(this, f, i);
      case 3:
        return a.call(this, f, i, j)
    }
    e("Invalid arity: " + arguments.length)
  };
  f.P = d;
  f.b = c;
  f.a = b;
  f.c = a;
  return f
}();
function Mg(a, b) {
  var c = a.exec(b);
  return c == m ? m : 1 === S(c) ? I(c) : mf(c)
}
function Y(a, b, c, d, f, h) {
  return ve.e(V([b]), Qe(Pe(V([c]), He.a(function(b) {
    return a.a ? a.a(b, f) : a.call(m, b, f)
  }, h))), F([V([d])], 0))
}
var Z = function Ng(b, c) {
  return b == m ? M.b("nil") : g === b ? M.b("#<undefined>") : ve.a(v(function() {
    var d = D.c(c, "\ufdd0'meta", m);
    return v(d) ? (d = b ? ((d = b.k & 131072) ? d : b.ad) ? l : b.k ? n : w(Mc, b) : w(Mc, b), v(d) ? Gd(b) : d) : d
  }()) ? ve.e(V(["^"]), Ng(Gd(b), c), F([V([" "])], 0)) : m, function() {
    var c = b != m;
    return c ? b.Fd : c
  }() ? b.Ed(b) : function() {
    var c;
    c = b ? ((c = b.k & 536870912) ? c : b.J) ? l : b.k ? n : w(Yc, b) : w(Yc, b);
    return c
  }() ? Zc(b, c) : v(b instanceof RegExp) ? M.c('#"', b.source, '"') : M.c("#<", "" + T(b), ">"))
}, Q = function() {
  function a(a) {
    var d = m;
    s(a) && (d = F(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d)
  }
  function b(a) {
    var b = Hf(["\ufdd0'flush-on-newline", "\ufdd0'readably", "\ufdd0'meta", "\ufdd0'dup"], {"\ufdd0'flush-on-newline":l, "\ufdd0'readably":l, "\ufdd0'meta":n, "\ufdd0'dup":n}), f = I(a), h = new rc;
    if(a = R(a)) {
      for(var i = I(a);;) {
        i !== f && h.append(" ");
        var j = R(Z(i, b));
        if(j) {
          for(i = I(j);;) {
            if(h.append(i), i = H(j)) {
              j = i, i = I(j)
            }else {
              break
            }
          }
        }
        if(a = H(a)) {
          i = a, a = I(i), j = i, i = a, a = j
        }else {
          break
        }
      }
    }
    return"" + T(h)
  }
  a.o = 0;
  a.n = function(a) {
    a = R(a);
    return b(a)
  };
  a.e = b;
  return a
}();
If.prototype.J = l;
If.prototype.C = function(a, b) {
  return Y(function(a) {
    return Y(Z, "", " ", "", b, a)
  }, "{", ", ", "}", b, a)
};
Yc.number = l;
Zc.number = function(a) {
  return M.b("" + T(a))
};
qd.prototype.J = l;
qd.prototype.C = function(a, b) {
  return Y(Z, "(", " ", ")", b, a)
};
pf.prototype.J = l;
pf.prototype.C = function(a, b) {
  return Y(Z, "[", " ", "]", b, a)
};
pe.prototype.J = l;
pe.prototype.C = function(a, b) {
  return Y(Z, "(", " ", ")", b, a)
};
vg.prototype.J = l;
vg.prototype.C = function(a, b) {
  return Y(function(a) {
    return Y(Z, "", " ", "", b, a)
  }, "{", ", ", "}", b, a)
};
Lf.prototype.J = l;
Lf.prototype.C = function(a, b) {
  return Y(function(a) {
    return Y(Z, "", " ", "", b, a)
  }, "{", ", ", "}", b, a)
};
uf.prototype.J = l;
uf.prototype.C = function(a, b) {
  return Y(Z, "#queue [", " ", "]", b, R(a))
};
U.prototype.J = l;
U.prototype.C = function(a, b) {
  return Y(Z, "(", " ", ")", b, a)
};
sd.prototype.J = l;
sd.prototype.C = function(a, b) {
  return Y(Z, "(", " ", ")", b, a)
};
Dg.prototype.J = l;
Dg.prototype.C = function(a, b) {
  return Y(Z, "#{", " ", "}", b, a)
};
Yc["boolean"] = l;
Zc["boolean"] = function(a) {
  return M.b("" + T(a))
};
Yc.string = l;
Zc.string = function(a, b) {
  return Ud(a) ? M.b([T(":"), T(function() {
    var b = Hg(a);
    return v(b) ? [T(b), T("/")].join("") : m
  }()), T(Gg(a))].join("")) : Vd(a) ? M.b([T(function() {
    var b = Hg(a);
    return v(b) ? [T(b), T("/")].join("") : m
  }()), T(Gg(a))].join("")) : M.b(v((new ke("\ufdd0'readably")).call(m, b)) ? La(a) : a)
};
cg.prototype.J = l;
cg.prototype.C = function(a, b) {
  return Y(Z, "(", " ", ")", b, a)
};
W.prototype.J = l;
W.prototype.C = function(a, b) {
  return Y(Z, "[", " ", "]", b, a)
};
of.prototype.J = l;
of.prototype.C = function(a, b) {
  return Y(Z, "(", " ", ")", b, a)
};
eg.prototype.J = l;
eg.prototype.C = function(a, b) {
  return Y(function(a) {
    return Y(Z, "", " ", "", b, a)
  }, "{", ", ", "}", b, a)
};
We.prototype.J = l;
We.prototype.C = function(a, b) {
  return Y(Z, "[", " ", "]", b, a)
};
Ag.prototype.J = l;
Ag.prototype.C = function(a, b) {
  return Y(Z, "#{", " ", "}", b, a)
};
gf.prototype.J = l;
gf.prototype.C = function(a, b) {
  return Y(Z, "[", " ", "]", b, a)
};
ge.prototype.J = l;
ge.prototype.C = function(a, b) {
  return Y(Z, "(", " ", ")", b, a)
};
Yc.array = l;
Zc.array = function(a, b) {
  return Y(Z, "#<Array [", ", ", "]>", b, a)
};
Yc["function"] = l;
Zc["function"] = function(a) {
  return M.c("#<", "" + T(a), ">")
};
he.prototype.J = l;
he.prototype.C = function() {
  return M.b("()")
};
X.prototype.J = l;
X.prototype.C = function(a, b) {
  return Y(Z, "[", " ", "]", b, a)
};
Date.prototype.J = l;
Date.prototype.C = function(a) {
  function b(a, b) {
    for(var f = "" + T(a);;) {
      if(S(f) < b) {
        f = [T("0"), T(f)].join("")
      }else {
        return f
      }
    }
  }
  return M.b([T('#inst "'), T(a.getUTCFullYear()), T("-"), T(b.a ? b.a(a.getUTCMonth() + 1, 2) : b.call(m, a.getUTCMonth() + 1, 2)), T("-"), T(b.a ? b.a(a.getUTCDate(), 2) : b.call(m, a.getUTCDate(), 2)), T("T"), T(b.a ? b.a(a.getUTCHours(), 2) : b.call(m, a.getUTCHours(), 2)), T(":"), T(b.a ? b.a(a.getUTCMinutes(), 2) : b.call(m, a.getUTCMinutes(), 2)), T(":"), T(b.a ? b.a(a.getUTCSeconds(), 2) : b.call(m, a.getUTCSeconds(), 2)), T("."), T(b.a ? b.a(a.getUTCMilliseconds(), 3) : b.call(m, a.getUTCMilliseconds(), 
  3)), T("-"), T('00:00"')].join(""))
};
je.prototype.J = l;
je.prototype.C = function(a, b) {
  return Y(Z, "(", " ", ")", b, a)
};
Kg.prototype.J = l;
Kg.prototype.C = function(a, b) {
  return Y(Z, "(", " ", ")", b, a)
};
dg.prototype.J = l;
dg.prototype.C = function(a, b) {
  return Y(Z, "(", " ", ")", b, a)
};
Ef.prototype.J = l;
Ef.prototype.C = function(a, b) {
  return Y(function(a) {
    return Y(Z, "", " ", "", b, a)
  }, "{", ", ", "}", b, a)
};
ig.prototype.J = l;
ig.prototype.C = function(a, b) {
  return Y(Z, "(", " ", ")", b, a)
};
gf.prototype.Zc = l;
gf.prototype.Dc = function(a, b) {
  return Yd.a(a, b)
};
function Og(a, b, c, d) {
  this.state = a;
  this.h = b;
  this.vd = c;
  this.uc = d;
  this.q = 0;
  this.k = 2690809856
}
q = Og.prototype;
q.F = function(a) {
  return ma(a)
};
q.Hc = function(a, b, c) {
  var d = R(this.uc);
  if(d) {
    var f = I(d);
    Cd.c(f, 0, m);
    for(Cd.c(f, 1, m);;) {
      var h = f, f = Cd.c(h, 0, m), h = Cd.c(h, 1, m);
      h.p ? h.p(f, a, b, c) : h.call(m, f, a, b, c);
      if(d = H(d)) {
        f = d, d = I(f), h = f, f = d, d = h
      }else {
        return m
      }
    }
  }else {
    return m
  }
};
q.Gc = function(a, b, c) {
  return a.uc = Dd.c(this.uc, b, c)
};
q.C = function(a, b) {
  return ve.e(V(["#<Atom: "]), Zc(this.state, b), F([">"], 0))
};
q.I = o("h");
q.Eb = o("state");
q.A = function(a, b) {
  return a === b
};
Og;
var Pg = function() {
  function a(a) {
    return new Og(a, m, m, m)
  }
  var b = m, c = function() {
    function a(c, d) {
      var j = m;
      s(d) && (j = F(Array.prototype.slice.call(arguments, 1), 0));
      return b.call(this, c, j)
    }
    function b(a, c) {
      var d = Rd(c) ? $.lang.N.create.b ? $.lang.N.create.b(c) : $.lang.N.create.call(m, c) : c, f = D.c(d, "\ufdd0'validator", m), d = D.c(d, "\ufdd0'meta", m);
      return new Og(a, d, f, m)
    }
    a.o = 1;
    a.n = function(a) {
      var c = I(a), a = J(a);
      return b(c, a)
    };
    a.e = b;
    return a
  }(), b = function(b, f) {
    switch(arguments.length) {
      case 1:
        return a.call(this, b);
      default:
        return c.e(b, F(arguments, 1))
    }
    e("Invalid arity: " + arguments.length)
  };
  b.o = 1;
  b.n = c.n;
  b.b = a;
  b.e = c.e;
  return b
}();
function Qg(a, b) {
  var c = a.vd;
  v(c) && !v(c.b ? c.b(b) : c.call(m, b)) && e(Error([T("Assert failed: "), T("Validator rejected reference state"), T("\n"), T(Q.e(F([Fd(M("\ufdd1'validate", "\ufdd1'new-value"), nd("\ufdd0'line", 6394, "\ufdd0'column", 13))], 0)))].join("")));
  c = a.state;
  a.state = b;
  $c(a, c, b);
  return b
}
var Rg = function() {
  function a(a, b, c, d, f) {
    return Qg(a, b.p ? b.p(a.state, c, d, f) : b.call(m, a.state, c, d, f))
  }
  function b(a, b, c, d) {
    return Qg(a, b.c ? b.c(a.state, c, d) : b.call(m, a.state, c, d))
  }
  function c(a, b, c) {
    return Qg(a, b.a ? b.a(a.state, c) : b.call(m, a.state, c))
  }
  function d(a, b) {
    return Qg(a, b.b ? b.b(a.state) : b.call(m, a.state))
  }
  var f = m, h = function() {
    function a(c, d, f, h, i, G) {
      var L = m;
      s(G) && (L = F(Array.prototype.slice.call(arguments, 5), 0));
      return b.call(this, c, d, f, h, i, L)
    }
    function b(a, c, d, f, h, i) {
      return Qg(a, Be.e(c, a.state, d, f, h, F([i], 0)))
    }
    a.o = 5;
    a.n = function(a) {
      var c = I(a), d = I(H(a)), f = I(H(H(a))), h = I(H(H(H(a)))), i = I(H(H(H(H(a))))), a = J(H(H(H(H(a)))));
      return b(c, d, f, h, i, a)
    };
    a.e = b;
    return a
  }(), f = function(f, j, k, r, x, t) {
    switch(arguments.length) {
      case 2:
        return d.call(this, f, j);
      case 3:
        return c.call(this, f, j, k);
      case 4:
        return b.call(this, f, j, k, r);
      case 5:
        return a.call(this, f, j, k, r, x);
      default:
        return h.e(f, j, k, r, x, F(arguments, 5))
    }
    e("Invalid arity: " + arguments.length)
  };
  f.o = 5;
  f.n = h.n;
  f.a = d;
  f.c = c;
  f.p = b;
  f.$ = a;
  f.e = h.e;
  return f
}();
function Sg(a, b) {
  this.state = a;
  this.jc = b;
  this.q = 0;
  this.k = 1073774592
}
Sg.prototype.Eb = function() {
  var a = this;
  return(new ke("\ufdd0'value")).call(m, Rg.a(a.state, function(b) {
    var b = Rd(b) ? $.lang.N.create.b ? $.lang.N.create.b(b) : $.lang.N.create.call(m, b) : b, c = D.c(b, "\ufdd0'done", m);
    return v(c) ? b : Hf(["\ufdd0'done", "\ufdd0'value"], {"\ufdd0'done":l, "\ufdd0'value":a.jc.P ? a.jc.P() : a.jc.call(m)})
  }))
};
Sg;
var Tg = Pg.b(Hf(["\ufdd0'parents", "\ufdd0'descendants", "\ufdd0'ancestors"], {"\ufdd0'parents":Gf, "\ufdd0'descendants":Gf, "\ufdd0'ancestors":Gf})), Ug = function() {
  function a(a, b, h) {
    var i = K.a(b, h);
    if(!i && !(i = Wd((new ke("\ufdd0'ancestors")).call(m, a).call(m, b), h)) && (i = Md(h))) {
      if(i = Md(b)) {
        if(i = S(h) === S(b)) {
          for(var i = l, j = 0;;) {
            var k = yd(i);
            if(k ? k : j === S(h)) {
              return i
            }
            i = c.c(a, b.b ? b.b(j) : b.call(m, j), h.b ? h.b(j) : h.call(m, j));
            j += 1
          }
        }else {
          return i
        }
      }else {
        return i
      }
    }else {
      return i
    }
  }
  function b(a, b) {
    return c.c(E(Tg), a, b)
  }
  var c = m, c = function(c, f, h) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, f);
      case 3:
        return a.call(this, c, f, h)
    }
    e("Invalid arity: " + arguments.length)
  };
  c.a = b;
  c.c = a;
  return c
}(), Vg = function() {
  function a(a, b) {
    var c = D.c((new ke("\ufdd0'parents")).call(m, a), b, m);
    return R(c) ? c : m
  }
  function b(a) {
    return c.a(E(Tg), a)
  }
  var c = m, c = function(c, f) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, f)
    }
    e("Invalid arity: " + arguments.length)
  };
  c.b = b;
  c.a = a;
  return c
}();
function Wg(a, b, c, d) {
  Rg.a(a, function() {
    return E(b)
  });
  Rg.a(c, function() {
    return E(d)
  })
}
var Yg = function Xg(b, c, d) {
  var f = E(d).call(m, b), f = v(v(f) ? f.b ? f.b(c) : f.call(m, c) : f) ? l : m;
  if(v(f)) {
    return f
  }
  f = function() {
    for(var f = Vg.b(c);;) {
      if(0 < S(f)) {
        Xg(b, I(f), d), f = J(f)
      }else {
        return m
      }
    }
  }();
  if(v(f)) {
    return f
  }
  f = function() {
    for(var f = Vg.b(b);;) {
      if(0 < S(f)) {
        Xg(I(f), c, d), f = J(f)
      }else {
        return m
      }
    }
  }();
  return v(f) ? f : n
};
function Zg(a, b, c) {
  c = Yg(a, b, c);
  return v(c) ? c : Ug.a(a, b)
}
var ah = function $g(b, c, d, f, h, i, j) {
  var k = Zd.c(function(d, f) {
    var i = Cd.c(f, 0, m);
    Cd.c(f, 1, m);
    if(Ug.a(c, i)) {
      var j;
      j = (j = d == m) ? j : Zg(i, I(d), h);
      j = v(j) ? f : d;
      v(Zg(I(j), i, h)) || e(Error([T("Multiple methods in multimethod '"), T(b), T("' match dispatch value: "), T(c), T(" -> "), T(i), T(" and "), T(I(j)), T(", and neither is preferred")].join("")));
      return j
    }
    return d
  }, m, E(f));
  if(v(k)) {
    if(K.a(E(j), E(d))) {
      return Rg.p(i, Dd, c, wd(k)), wd(k)
    }
    Wg(i, f, j, d);
    return $g(b, c, d, f, h, i, j)
  }
  return m
};
g;
function bh(a, b) {
  var c;
  if(a ? a.Fc : a) {
    c = a.Fc(0, b)
  }else {
    var d = bh[u(a)];
    d ? c = d : (d = bh._) ? c = d : e(z("IMultiFn.-get-method", a));
    c = c.call(m, a, b)
  }
  return c
}
function ch(a, b) {
  var c;
  if(a ? a.Ec : a) {
    c = a.Ec(a, b)
  }else {
    var d = ch[u(a)];
    d ? c = d : (d = ch._) ? c = d : e(z("IMultiFn.-dispatch", a));
    c = c.call(m, a, b)
  }
  return c
}
g;
function dh(a, b, c, d, f, h, i, j) {
  this.name = a;
  this.ed = b;
  this.dd = c;
  this.mc = d;
  this.pc = f;
  this.nd = h;
  this.oc = i;
  this.Nb = j;
  this.k = 4194304;
  this.q = 64
}
dh.prototype.F = function(a) {
  return ma(a)
};
dh.prototype.Fc = function(a, b) {
  K.a(E(this.Nb), E(this.mc)) || Wg(this.oc, this.pc, this.Nb, this.mc);
  var c = E(this.oc).call(m, b);
  if(v(c)) {
    return c
  }
  c = ah(this.name, b, this.mc, this.pc, this.nd, this.oc, this.Nb);
  return v(c) ? c : E(this.pc).call(m, this.dd)
};
dh.prototype.Ec = function(a, b) {
  var c = Be.a(this.ed, b), d = bh(a, c);
  v(d) || e(Error([T("No method in multimethod '"), T(Gg), T("' for dispatch value: "), T(c)].join("")));
  return Be.a(d, b)
};
dh;
dh.prototype.call = function() {
  function a(a, b) {
    var f = m;
    s(b) && (f = F(Array.prototype.slice.call(arguments, 1), 0));
    return ch(this, f)
  }
  function b(a, b) {
    return ch(this, b)
  }
  a.o = 1;
  a.n = function(a) {
    I(a);
    a = J(a);
    return b(0, a)
  };
  a.e = b;
  return a
}();
dh.prototype.apply = function(a, b) {
  return ch(this, b)
};
function eh(a) {
  this.tc = a;
  this.q = 0;
  this.k = 543162368
}
eh.prototype.F = function(a) {
  return Na(Q.e(F([a], 0)))
};
eh.prototype.C = function() {
  return M.b([T('#uuid "'), T(this.tc), T('"')].join(""))
};
eh.prototype.A = function(a, b) {
  return this.tc === b.tc
};
eh.prototype.toString = function() {
  return Q.e(F([this], 0))
};
eh;
function fh(a) {
  if("function" == typeof a.Oa) {
    return a.Oa()
  }
  if(ia(a)) {
    return a.split("")
  }
  if(ga(a)) {
    for(var b = [], c = a.length, d = 0;d < c;d++) {
      b.push(a[d])
    }
    return b
  }
  return $b(a)
}
function gh(a, b, c) {
  if("function" == typeof a.forEach) {
    a.forEach(b, c)
  }else {
    if(ga(a) || ia(a)) {
      Ua(a, b, c)
    }else {
      var d;
      if("function" == typeof a.fb) {
        d = a.fb()
      }else {
        if("function" != typeof a.Oa) {
          if(ga(a) || ia(a)) {
            d = [];
            for(var f = a.length, h = 0;h < f;h++) {
              d.push(h)
            }
          }else {
            d = ac(a)
          }
        }else {
          d = g
        }
      }
      for(var f = fh(a), h = f.length, i = 0;i < h;i++) {
        b.call(c, f[i], d && d[i], a)
      }
    }
  }
}
;function hh(a, b) {
  this.la = {};
  this.W = [];
  var c = arguments.length;
  if(1 < c) {
    c % 2 && e(Error("Uneven number of arguments"));
    for(var d = 0;d < c;d += 2) {
      this.set(arguments[d], arguments[d + 1])
    }
  }else {
    if(a) {
      a instanceof hh ? (c = a.fb(), d = a.Oa()) : (c = ac(a), d = $b(a));
      for(var f = 0;f < c.length;f++) {
        this.set(c[f], d[f])
      }
    }
  }
}
q = hh.prototype;
q.G = 0;
q.Oa = function() {
  ih(this);
  for(var a = [], b = 0;b < this.W.length;b++) {
    a.push(this.la[this.W[b]])
  }
  return a
};
q.fb = function() {
  ih(this);
  return this.W.concat()
};
q.Ja = function(a) {
  return jh(this.la, a)
};
q.clear = function() {
  this.la = {};
  this.G = this.W.length = 0
};
q.remove = function(a) {
  return jh(this.la, a) ? (delete this.la[a], this.G--, this.W.length > 2 * this.G && ih(this), l) : n
};
function ih(a) {
  if(a.G != a.W.length) {
    for(var b = 0, c = 0;b < a.W.length;) {
      var d = a.W[b];
      jh(a.la, d) && (a.W[c++] = d);
      b++
    }
    a.W.length = c
  }
  if(a.G != a.W.length) {
    for(var f = {}, c = b = 0;b < a.W.length;) {
      d = a.W[b], jh(f, d) || (a.W[c++] = d, f[d] = 1), b++
    }
    a.W.length = c
  }
}
q.get = function(a, b) {
  return jh(this.la, a) ? this.la[a] : b
};
q.set = function(a, b) {
  jh(this.la, a) || (this.G++, this.W.push(a));
  this.la[a] = b
};
q.ab = function() {
  return new hh(this)
};
function jh(a, b) {
  return Object.prototype.hasOwnProperty.call(a, b)
}
;function kh(a) {
  return lh(a || arguments.callee.caller, [])
}
function lh(a, b) {
  var c = [];
  if(0 <= Ta(b, a)) {
    c.push("[...circular reference...]")
  }else {
    if(a && 50 > b.length) {
      c.push(mh(a) + "(");
      for(var d = a.arguments, f = 0;f < d.length;f++) {
        0 < f && c.push(", ");
        var h;
        h = d[f];
        switch(typeof h) {
          case "object":
            h = h ? "object" : "null";
            break;
          case "string":
            break;
          case "number":
            h = "" + h;
            break;
          case "boolean":
            h = h ? "true" : "false";
            break;
          case "function":
            h = (h = mh(h)) ? h : "[fn]";
            break;
          default:
            h = typeof h
        }
        40 < h.length && (h = h.substr(0, 40) + "...");
        c.push(h)
      }
      b.push(a);
      c.push(")\n");
      try {
        c.push(lh(a.caller, b))
      }catch(i) {
        c.push("[exception trying to get caller]\n")
      }
    }else {
      a ? c.push("[...long stack...]") : c.push("[end]")
    }
  }
  return c.join("")
}
function mh(a) {
  a = "" + a;
  if(!nh[a]) {
    var b = /function ([^\(]+)/.exec(a);
    nh[a] = b ? b[1] : "[Anonymous]"
  }
  return nh[a]
}
var nh = {};
function oh(a, b, c, d, f) {
  this.reset(a, b, c, d, f)
}
oh.prototype.ic = m;
oh.prototype.hc = m;
var ph = 0;
oh.prototype.reset = function(a, b, c, d, f) {
  "number" == typeof f || ph++;
  this.Xc = d || ua();
  this.Pa = a;
  this.Qc = b;
  this.ld = c;
  delete this.ic;
  delete this.hc
};
oh.prototype.Uc = function(a) {
  this.Pa = a
};
function qh(a) {
  this.md = a
}
qh.prototype.Kb = m;
qh.prototype.Pa = m;
qh.prototype.Ob = m;
qh.prototype.sb = m;
function rh(a, b) {
  this.name = a;
  this.value = b
}
rh.prototype.toString = o("name");
var sh = new rh("SHOUT", 1200), th = new rh("SEVERE", 1E3), uh = new rh("WARNING", 900), vh = new rh("INFO", 800), wh = new rh("CONFIG", 700);
q = qh.prototype;
q.getParent = o("Kb");
q.Uc = function(a) {
  this.Pa = a
};
function xh(a) {
  if(a.Pa) {
    return a.Pa
  }
  if(a.Kb) {
    return xh(a.Kb)
  }
  Ra("Root logger has no level set.");
  return m
}
q.log = function(a, b, c) {
  if(a.value >= xh(this).value) {
    a = this.gd(a, b, c);
    ba.console && ba.console.markTimeline && ba.console.markTimeline("log:" + a.Qc);
    for(b = this;b;) {
      var c = b, d = a;
      if(c.sb) {
        for(var f = 0, h = g;h = c.sb[f];f++) {
          h(d)
        }
      }
      b = b.getParent()
    }
  }
};
q.gd = function(a, b, c) {
  var d = new oh(a, "" + b, this.md);
  if(c) {
    d.ic = c;
    var f;
    var h = arguments.callee.caller;
    try {
      var i;
      var j = da("window.location.href");
      if(ia(c)) {
        i = {message:c, name:"Unknown error", lineNumber:"Not available", fileName:j, stack:"Not available"}
      }else {
        var k, r, x = n;
        try {
          k = c.lineNumber || c.Gd || "Not available"
        }catch(t) {
          k = "Not available", x = l
        }
        try {
          r = c.fileName || c.filename || c.sourceURL || j
        }catch(y) {
          r = "Not available", x = l
        }
        i = x || !c.lineNumber || !c.fileName || !c.stack ? {message:c.message, name:c.name, lineNumber:k, fileName:r, stack:c.stack || "Not available"} : c
      }
      f = "Message: " + Ca(i.message) + '\nUrl: <a href="view-source:' + i.fileName + '" target="_new">' + i.fileName + "</a>\nLine: " + i.lineNumber + "\n\nBrowser stack:\n" + Ca(i.stack + "-> ") + "[end]\n\nJS stack traversal:\n" + Ca(kh(h) + "-> ")
    }catch(G) {
      f = "Exception trying to expose exception! You win, we lose. " + G
    }
    d.hc = f
  }
  return d
};
q.info = function(a, b) {
  this.log(vh, a, b)
};
var yh = {}, zh = m;
function Ah() {
  zh || (zh = new qh(""), yh[""] = zh, zh.Uc(wh))
}
function Bh(a) {
  Ah();
  var b;
  if(!(b = yh[a])) {
    b = new qh(a);
    var c = a.lastIndexOf("."), d = a.substr(c + 1), c = Bh(a.substr(0, c));
    c.Ob || (c.Ob = {});
    c.Ob[d] = b;
    b.Kb = c;
    yh[a] = b
  }
  return b
}
;var Ch = !nb || Ab("9");
!ob && !nb || nb && Ab("9") || ob && Ab("1.9.1");
nb && Ab("9");
function Dh(a) {
  return ia(a) ? document.getElementById(a) : a
}
function Eh(a, b, c) {
  var d = document, c = c || d, a = a && "*" != a ? a.toUpperCase() : "";
  if(c.querySelectorAll && (c.querySelector && (!pb || "CSS1Compat" == document.compatMode || Ab("528"))) && (a || b)) {
    return c.querySelectorAll(a + (b ? "." + b : ""))
  }
  if(b && c.getElementsByClassName) {
    c = c.getElementsByClassName(b);
    if(a) {
      for(var d = {}, f = 0, h = 0, i;i = c[h];h++) {
        a == i.nodeName && (d[f++] = i)
      }
      d.length = f;
      return d
    }
    return c
  }
  c = c.getElementsByTagName(a || "*");
  if(b) {
    d = {};
    for(h = f = 0;i = c[h];h++) {
      a = i.className, "function" == typeof a.split && 0 <= Ta(a.split(/\s+/), b) && (d[f++] = i)
    }
    d.length = f;
    return d
  }
  return c
}
function Fh(a, b) {
  Zb(b, function(b, d) {
    "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : d in Gh ? a.setAttribute(Gh[d], b) : a[d] = b
  })
}
var Gh = {cellpadding:"cellPadding", cellspacing:"cellSpacing", colspan:"colSpan", rowspan:"rowSpan", valign:"vAlign", height:"height", width:"width", usemap:"useMap", frameborder:"frameBorder", maxlength:"maxLength", type:"type"};
function Hh(a, b, c) {
  var d = arguments, f = document, h = d[0], i = d[1];
  if(!Ch && i && (i.name || i.type)) {
    h = ["<", h];
    i.name && h.push(' name="', Ca(i.name), '"');
    if(i.type) {
      h.push(' type="', Ca(i.type), '"');
      var j = {};
      dc(j, i);
      i = j;
      delete i.type
    }
    h.push(">");
    h = h.join("")
  }
  h = f.createElement(h);
  i && (ia(i) ? h.className = i : fa(i) ? bb.apply(m, [h].concat(i)) : Fh(h, i));
  2 < d.length && Ih(f, h, d);
  return h
}
function Ih(a, b, c) {
  function d(c) {
    c && b.appendChild(ia(c) ? a.createTextNode(c) : c)
  }
  for(var f = 2;f < c.length;f++) {
    var h = c[f];
    ga(h) && !(la(h) && 0 < h.nodeType) ? Ua(Jh(h) ? Wa(h) : h, d) : d(h)
  }
}
function Kh(a) {
  var b = document, c = b.createElement("div");
  nb ? (c.innerHTML = "<br>" + a, c.removeChild(c.firstChild)) : c.innerHTML = a;
  if(1 == c.childNodes.length) {
    return c.removeChild(c.firstChild)
  }
  for(a = b.createDocumentFragment();c.firstChild;) {
    a.appendChild(c.firstChild)
  }
  return a
}
function Lh(a) {
  if("outerHTML" in a) {
    return a.outerHTML
  }
  var b = (9 == a.nodeType ? a : a.ownerDocument || a.document).createElement("div");
  b.appendChild(a.cloneNode(l));
  return b.innerHTML
}
function Jh(a) {
  if(a && "number" == typeof a.length) {
    if(la(a)) {
      return"function" == typeof a.item || "string" == typeof a.item
    }
    if(ka(a)) {
      return"function" == typeof a.item
    }
  }
  return n
}
;function Mh(a, b, c, d, f) {
  if(!nb && (!pb || !Ab("525"))) {
    return l
  }
  if(rb && f) {
    return Nh(a)
  }
  if(f && !d || !c && (17 == b || 18 == b) || nb && d && b == a) {
    return n
  }
  switch(a) {
    case 13:
      return l;
    case 27:
      return!pb
  }
  return Nh(a)
}
function Nh(a) {
  if(48 <= a && 57 >= a || 96 <= a && 106 >= a || 65 <= a && 90 >= a || pb && 0 == a) {
    return l
  }
  switch(a) {
    case 32:
    ;
    case 63:
    ;
    case 107:
    ;
    case 109:
    ;
    case 110:
    ;
    case 111:
    ;
    case 186:
    ;
    case 189:
    ;
    case 187:
    ;
    case 188:
    ;
    case 190:
    ;
    case 191:
    ;
    case 192:
    ;
    case 222:
    ;
    case 219:
    ;
    case 220:
    ;
    case 221:
      return l;
    default:
      return n
  }
}
;function Oh(a, b) {
  var c = Array.prototype.slice.call(arguments), d = c.shift();
  "undefined" == typeof d && e(Error("[goog.string.format] Template required"));
  return d.replace(/%([0\-\ \+]*)(\d+)?(\.(\d+))?([%sfdiu])/g, function(a, b, d, j, k, r, x, t) {
    if("%" == r) {
      return"%"
    }
    var y = c.shift();
    "undefined" == typeof y && e(Error("[goog.string.format] Not enough arguments"));
    arguments[0] = y;
    return Ph[r].apply(m, arguments)
  })
}
var Ph = {s:function(a, b, c) {
  return isNaN(c) || a.length >= c ? a : a = -1 < b.indexOf("-", 0) ? a + Array(c - a.length + 1).join(" ") : Array(c - a.length + 1).join(" ") + a
}, f:function(a, b, c, d, f) {
  d = a.toString();
  isNaN(f) || "" == f || (d = a.toFixed(f));
  var h;
  h = 0 > a ? "-" : 0 <= b.indexOf("+") ? "+" : 0 <= b.indexOf(" ") ? " " : "";
  0 <= a && (d = h + d);
  if(isNaN(c) || d.length >= c) {
    return d
  }
  d = isNaN(f) ? Math.abs(a).toString() : Math.abs(a).toFixed(f);
  a = c - d.length - h.length;
  return d = 0 <= b.indexOf("-", 0) ? h + d + Array(a + 1).join(" ") : h + Array(a + 1).join(0 <= b.indexOf("0", 0) ? "0" : " ") + d
}, d:function(a, b, c, d, f, h, i, j) {
  a = parseInt(a, 10);
  return Ph.f(a, b, c, d, 0, h, i, j)
}};
Ph.i = Ph.d;
Ph.u = Ph.d;
var Qh = {}, Rh = document.createElement("div");
Rh.innerHTML = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>";
var Sh = K.a(Rh.firstChild.nodeType, 3), Th = K.a(Rh.getElementsByTagName("tbody").length, 0);
K.a(Rh.getElementsByTagName("link").length, 0);
var $ = {};
function Uh(a) {
  var b = Vh;
  if(Td(b)) {
    return a.replace(RegExp(("" + b).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08"), "g"), "<$1></$2>")
  }
  if(v(b.hasOwnProperty("source"))) {
    return a.replace(RegExp(b.source, "g"), "<$1></$2>")
  }
  e([T("Invalid match arg: "), T(b)].join(""))
}
;function Wh(a) {
  var b = Dh("c-panel");
  ia("opacity") ? Xh(b, a, "opacity") : Zb("opacity", ta(Xh, b))
}
function Xh(a, b, c) {
  a.style[Pa(c)] = b
}
function Yh(a, b) {
  a.style.display = b ? "" : "none"
}
;var Zh = /<|&#?\w+;/, $h = /^\s+/, Vh = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/i, ai = /<([\w:]+)/, bi = /<tbody/i, ci = V([1, "<select multiple='multiple'>", "</select>"]), di = V([1, "<table>", "</table>"]), ei = V([3, "<table><tbody><tr>", "</tr></tbody></table>"]), fi = Hf("col \ufdd0'default tfoot caption optgroup legend area td thead th option tbody tr colgroup".split(" "), {col:V([2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"]), "\ufdd0'default":V([0, 
"", ""]), tfoot:di, caption:di, optgroup:ci, legend:V([1, "<fieldset>", "</fieldset>"]), area:V([1, "<map>", "</map>"]), td:ei, thead:di, th:ei, option:ci, tbody:di, tr:V([2, "<table><tbody>", "</tbody></table>"]), colgroup:di});
function gi(a, b) {
  var c = yd(Mg(bi, b)), d = function() {
    var a = K.a(Qh.Id, "table");
    return a ? c : a
  }() ? function() {
    var b = a.firstChild;
    return v(b) ? a.firstChild.childNodes : b
  }() : function() {
    var a = K.a(Qh.Hd, "<table>");
    return a ? c : a
  }() ? divchildNodes : kf;
  if(d = R(d)) {
    for(var f = I(d);;) {
      if(function() {
        var a = K.a(f.nodeName, "tbody");
        return a ? K.a(f.childNodes.length, 0) : a
      }() && f.parentNode.removeChild(f), d = H(d)) {
        var h = d, f = d = I(h), d = h
      }else {
        break
      }
    }
  }
}
function hi(a) {
  var b = Uh(a), a = ("" + T(wd(Mg(ai, b)))).toLowerCase(), a = D.c(fi, a, (new ke("\ufdd0'default")).call(m, fi)), c = Cd.c(a, 0, m), d = Cd.c(a, 1, m), f = Cd.c(a, 2, m), a = function() {
    var a;
    a = document.createElement("div");
    a.innerHTML = [T(d), T(b), T(f)].join("");
    for(var i = c;;) {
      if(0 < i) {
        i -= 1, a = a.lastChild
      }else {
        return a
      }
    }
  }();
  v(Th) && gi(a, b);
  v(function() {
    var a = yd(Sh);
    return a ? Mg($h, b) : a
  }()) && a.insertBefore(document.createTextNode(I(Mg($h, b))), a.firstChild);
  return a.childNodes
}
g;
function ii(a) {
  if(a ? a.fd : a) {
    a = a.fd(a)
  }else {
    var b;
    var c = ii[u(a)];
    c ? b = c : (c = ii._) ? b = c : e(z("DomContent.single-node", a));
    a = b.call(m, a)
  }
  return a
}
g;
function ji(a) {
  return Dh(Gg(a))
}
g;
g;
var ki = function() {
  function a(a, b) {
    return b < a.length ? new U(m, n, function() {
      return O(a.item(b), c.a(a, b + 1))
    }, m) : m
  }
  function b(a) {
    return c.a(a, 0)
  }
  var c = m, c = function(c, f) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, f)
    }
    e("Invalid arity: " + arguments.length)
  };
  c.b = b;
  c.a = a;
  return c
}(), li = function() {
  function a(a, b) {
    return b < a.length ? new U(m, n, function() {
      return O(a[b], c.a(a, b + 1))
    }, m) : m
  }
  function b(a) {
    return c.a(a, 0)
  }
  var c = m, c = function(c, f) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, f)
    }
    e("Invalid arity: " + arguments.length)
  };
  c.b = b;
  c.a = a;
  return c
}();
function mi(a) {
  return v(a.item) ? ki.b(a) : li.b(a)
}
ii._ = function(a) {
  if(a == m) {
    a = m
  }else {
    var b;
    b = a ? ((b = a.k & 8388608) ? b : a.Tb) ? l : a.k ? n : w(Tc, a) : w(Tc, a);
    a = b ? I(a) : v(v(a) ? a.length : a) ? a.item(0) : a
  }
  return a
};
ii.string = function(a) {
  return ii(v(Mg(Zh, a)) ? hi(a) : document.createTextNode(a))
};
v("undefined" != typeof NodeList) && (q = NodeList.prototype, q.Tb = l, q.z = function(a) {
  return mi(a)
}, q.mb = l, q.R = function(a, b) {
  return a.item(b)
}, q.L = function(a, b, c) {
  return a.length <= b ? c : Cd.a(a, b)
}, q.Rb = l, q.w = function(a) {
  return a.length
});
v("undefined" != typeof StaticNodeList) && (q = StaticNodeList.prototype, q.Tb = l, q.z = function(a) {
  return mi(a)
}, q.mb = l, q.R = function(a, b) {
  return a.item(b)
}, q.L = function(a, b, c) {
  return a.length <= b ? c : Cd.a(a, b)
}, q.Rb = l, q.w = function(a) {
  return a.length
});
v("undefined" != typeof HTMLCollection) && (q = HTMLCollection.prototype, q.Tb = l, q.z = function(a) {
  return mi(a)
}, q.mb = l, q.R = function(a, b) {
  return a.item(b)
}, q.L = function(a, b, c) {
  return a.length <= b ? c : Cd.a(a, b)
}, q.Rb = l, q.w = function(a) {
  return a.length
});
function ni() {
  this.Tc = ua()
}
var oi = new ni;
ni.prototype.set = function(a) {
  this.Tc = a
};
ni.prototype.reset = function() {
  this.set(ua())
};
ni.prototype.get = o("Tc");
function pi(a) {
  this.od = a || "";
  this.ud = oi
}
q = pi.prototype;
q.Vc = l;
q.rd = l;
q.qd = l;
q.Wc = n;
q.sd = n;
function qi(a) {
  return 10 > a ? "0" + a : "" + a
}
function ri(a, b) {
  var c = (a.Xc - b) / 1E3, d = c.toFixed(3), f = 0;
  if(1 > c) {
    f = 2
  }else {
    for(;100 > c;) {
      f++, c *= 10
    }
  }
  for(;0 < f--;) {
    d = " " + d
  }
  return d
}
function si(a) {
  pi.call(this, a)
}
va(si, pi);
function ti() {
  this.pd = sa(this.Yc, this);
  this.kc = new si;
  this.kc.Vc = n;
  this.Lc = this.kc.Wc = n;
  this.Oc = ""
}
ti.prototype.Yc = function(a) {
  var b;
  b = this.kc;
  var c = [];
  c.push(b.od, " ");
  if(b.Vc) {
    var d = new Date(a.Xc);
    c.push("[", qi(d.getFullYear() - 2E3) + qi(d.getMonth() + 1) + qi(d.getDate()) + " " + qi(d.getHours()) + ":" + qi(d.getMinutes()) + ":" + qi(d.getSeconds()) + "." + qi(Math.floor(d.getMilliseconds() / 10)), "] ")
  }
  b.rd && c.push("[", ri(a, b.ud.get()), "s] ");
  b.qd && c.push("[", a.ld, "] ");
  b.sd && c.push("[", a.Pa.name, "] ");
  c.push(a.Qc, "\n");
  b.Wc && a.ic && c.push(a.hc, "\n");
  b = c.join("");
  if(window.console && window.console.firebug) {
    switch(a.Pa) {
      case sh:
        window.console.info(b);
        break;
      case th:
        window.console.error(b);
        break;
      case uh:
        window.console.warn(b);
        break;
      default:
        window.console.debug(b)
    }
  }else {
    window.console ? window.console.log(b) : window.opera ? window.opera.postError(b) : this.Oc += b
  }
};
var ui = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([\\w\\d\\-\\u0100-\\uffff.%]*)(?::([0-9]+))?)?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$");
function vi(a, b) {
  var c;
  a instanceof vi ? (this.jb(b == m ? a.ka : b), wi(this, a.Ia), xi(this, a.Bb), yi(this, a.Ka), zi(this, a.hb), Ai(this, a.gb), Bi(this, a.ua.ab()), Ci(this, a.Ma)) : a && (c = ("" + a).match(ui)) ? (this.jb(!!b), wi(this, c[1] || "", l), xi(this, c[2] || "", l), yi(this, c[3] || "", l), zi(this, c[4]), Ai(this, c[5] || "", l), Bi(this, c[6] || "", l), Ci(this, c[7] || "", l)) : (this.jb(!!b), this.ua = new Di(m, this, this.ka))
}
q = vi.prototype;
q.Ia = "";
q.Bb = "";
q.Ka = "";
q.hb = m;
q.gb = "";
q.Ma = "";
q.kd = n;
q.ka = n;
q.toString = function() {
  if(this.ha) {
    return this.ha
  }
  var a = [];
  this.Ia && a.push(Ei(this.Ia, Fi), ":");
  this.Ka && (a.push("//"), this.Bb && a.push(Ei(this.Bb, Fi), "@"), a.push(ia(this.Ka) ? encodeURIComponent(this.Ka) : m), this.hb != m && a.push(":", "" + this.hb));
  this.gb && (this.Ka && "/" != this.gb.charAt(0) && a.push("/"), a.push(Ei(this.gb, Gi)));
  var b = "" + this.ua;
  b && a.push("?", b);
  this.Ma && a.push("#", Ei(this.Ma, Hi));
  return this.ha = a.join("")
};
q.ab = function() {
  var a = this.Ia, b = this.Bb, c = this.Ka, d = this.hb, f = this.gb, h = this.ua.ab(), i = this.Ma, j = new vi(m, this.ka);
  a && wi(j, a);
  b && xi(j, b);
  c && yi(j, c);
  d && zi(j, d);
  f && Ai(j, f);
  h && Bi(j, h);
  i && Ci(j, i);
  return j
};
function wi(a, b, c) {
  Ii(a);
  delete a.ha;
  a.Ia = c ? b ? decodeURIComponent(b) : "" : b;
  a.Ia && (a.Ia = a.Ia.replace(/:$/, ""))
}
function xi(a, b, c) {
  Ii(a);
  delete a.ha;
  a.Bb = c ? b ? decodeURIComponent(b) : "" : b
}
function yi(a, b, c) {
  Ii(a);
  delete a.ha;
  a.Ka = c ? b ? decodeURIComponent(b) : "" : b
}
function zi(a, b) {
  Ii(a);
  delete a.ha;
  b ? (b = Number(b), (isNaN(b) || 0 > b) && e(Error("Bad port number " + b)), a.hb = b) : a.hb = m
}
function Ai(a, b, c) {
  Ii(a);
  delete a.ha;
  a.gb = c ? b ? decodeURIComponent(b) : "" : b
}
function Bi(a, b, c) {
  Ii(a);
  delete a.ha;
  b instanceof Di ? (a.ua = b, a.ua.sc = a, a.ua.jb(a.ka)) : (c || (b = Ei(b, Ji)), a.ua = new Di(b, a, a.ka))
}
function Ci(a, b, c) {
  Ii(a);
  delete a.ha;
  a.Ma = c ? b ? decodeURIComponent(b) : "" : b
}
function Ii(a) {
  a.kd && e(Error("Tried to modify a read-only Uri"))
}
q.jb = function(a) {
  this.ka = a;
  this.ua && this.ua.jb(a);
  return this
};
function Ki() {
  var a = window.location;
  return a instanceof vi ? a.ab() : new vi(a, g)
}
var Li = /^[a-zA-Z0-9\-_.!~*'():\/;?]*$/;
function Ei(a, b) {
  var c = m;
  ia(a) && (c = a, Li.test(c) || (c = encodeURI(a)), 0 <= c.search(b) && (c = c.replace(b, Mi)));
  return c
}
function Mi(a) {
  a = a.charCodeAt(0);
  return"%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
}
var Fi = /[#\/\?@]/g, Gi = /[\#\?]/g, Ji = /[\#\?@]/g, Hi = /#/g;
function Di(a, b, c) {
  this.sa = a || m;
  this.sc = b || m;
  this.ka = !!c
}
function Ni(a) {
  if(!a.M && (a.M = new hh, a.sa)) {
    for(var b = a.sa.split("&"), c = 0;c < b.length;c++) {
      var d = b[c].indexOf("="), f = m, h = m;
      0 <= d ? (f = b[c].substring(0, d), h = b[c].substring(d + 1)) : f = b[c];
      f = decodeURIComponent(f.replace(/\+/g, " "));
      f = Oi(a, f);
      a.add(f, h ? decodeURIComponent(h.replace(/\+/g, " ")) : "")
    }
  }
}
q = Di.prototype;
q.M = m;
q.G = m;
q.add = function(a, b) {
  Ni(this);
  Pi(this);
  a = Oi(this, a);
  if(this.Ja(a)) {
    var c = this.M.get(a);
    fa(c) ? c.push(b) : this.M.set(a, [c, b])
  }else {
    this.M.set(a, b)
  }
  this.G++;
  return this
};
q.remove = function(a) {
  Ni(this);
  a = Oi(this, a);
  if(this.M.Ja(a)) {
    Pi(this);
    var b = this.M.get(a);
    fa(b) ? this.G -= b.length : this.G--;
    return this.M.remove(a)
  }
  return n
};
q.clear = function() {
  Pi(this);
  this.M && this.M.clear();
  this.G = 0
};
q.Ja = function(a) {
  Ni(this);
  a = Oi(this, a);
  return this.M.Ja(a)
};
q.fb = function() {
  Ni(this);
  for(var a = this.M.Oa(), b = this.M.fb(), c = [], d = 0;d < b.length;d++) {
    var f = a[d];
    if(fa(f)) {
      for(var h = 0;h < f.length;h++) {
        c.push(b[d])
      }
    }else {
      c.push(b[d])
    }
  }
  return c
};
q.Oa = function(a) {
  Ni(this);
  if(a) {
    if(a = Oi(this, a), this.Ja(a)) {
      var b = this.M.get(a);
      if(fa(b)) {
        return b
      }
      a = [];
      a.push(b)
    }else {
      a = []
    }
  }else {
    for(var b = this.M.Oa(), a = [], c = 0;c < b.length;c++) {
      var d = b[c];
      fa(d) ? Ya(a, d) : a.push(d)
    }
  }
  return a
};
q.set = function(a, b) {
  Ni(this);
  Pi(this);
  a = Oi(this, a);
  if(this.Ja(a)) {
    var c = this.M.get(a);
    fa(c) ? this.G -= c.length : this.G--
  }
  this.M.set(a, b);
  this.G++;
  return this
};
q.get = function(a, b) {
  Ni(this);
  a = Oi(this, a);
  if(this.Ja(a)) {
    var c = this.M.get(a);
    return fa(c) ? c[0] : c
  }
  return b
};
q.toString = function() {
  if(this.sa) {
    return this.sa
  }
  if(!this.M) {
    return""
  }
  for(var a = [], b = 0, c = this.M.fb(), d = 0;d < c.length;d++) {
    var f = c[d], h = Ba(f), f = this.M.get(f);
    if(fa(f)) {
      for(var i = 0;i < f.length;i++) {
        0 < b && a.push("&"), a.push(h), "" !== f[i] && a.push("=", Ba(f[i])), b++
      }
    }else {
      0 < b && a.push("&"), a.push(h), "" !== f && a.push("=", Ba(f)), b++
    }
  }
  return this.sa = a.join("")
};
function Pi(a) {
  delete a.gc;
  delete a.sa;
  a.sc && delete a.sc.ha
}
q.ab = function() {
  var a = new Di;
  this.gc && (a.gc = this.gc);
  this.sa && (a.sa = this.sa);
  this.M && (a.M = this.M.ab());
  return a
};
function Oi(a, b) {
  var c = "" + b;
  a.ka && (c = c.toLowerCase());
  return c
}
q.jb = function(a) {
  a && !this.ka && (Ni(this), Pi(this), gh(this.M, function(a, c) {
    var d = c.toLowerCase();
    c != d && (this.remove(c), this.add(d, a))
  }, this));
  this.ka = a
};
function Qi(a, b) {
  a && (this.Ib && this.detach(), this.rb = a, this.Hb = ic(this.rb, "keypress", this, b), this.nc = ic(this.rb, "keydown", this.hd, b, this), this.Ib = ic(this.rb, "keyup", this.jd, b, this))
}
va(Qi, pc);
q = Qi.prototype;
q.rb = m;
q.Hb = m;
q.nc = m;
q.Ib = m;
q.Da = -1;
q.Ca = -1;
var Ri = {3:13, 12:144, 63232:38, 63233:40, 63234:37, 63235:39, 63236:112, 63237:113, 63238:114, 63239:115, 63240:116, 63241:117, 63242:118, 63243:119, 63244:120, 63245:121, 63246:122, 63247:123, 63248:44, 63272:46, 63273:36, 63275:35, 63276:33, 63277:34, 63289:144, 63302:45}, Si = {Up:38, Down:40, Left:37, Right:39, Enter:13, F1:112, F2:113, F3:114, F4:115, F5:116, F6:117, F7:118, F8:119, F9:120, F10:121, F11:122, F12:123, "U+007F":46, Home:36, End:35, PageUp:33, PageDown:34, Insert:45}, Ti = {61:187, 
59:186}, Ui = nb || pb && Ab("525");
q = Qi.prototype;
q.hd = function(a) {
  if(pb && (17 == this.Da && !a.ctrlKey || 18 == this.Da && !a.altKey)) {
    this.Ca = this.Da = -1
  }
  Ui && !Mh(a.keyCode, this.Da, a.shiftKey, a.ctrlKey, a.altKey) ? this.handleEvent(a) : this.Ca = ob && a.keyCode in Ti ? Ti[a.keyCode] : a.keyCode
};
q.jd = function() {
  this.Ca = this.Da = -1
};
q.handleEvent = function(a) {
  var b = a.La, c, d;
  nb && "keypress" == a.type ? (c = this.Ca, d = 13 != c && 27 != c ? b.keyCode : 0) : pb && "keypress" == a.type ? (c = this.Ca, d = 0 <= b.charCode && 63232 > b.charCode && Nh(c) ? b.charCode : 0) : mb ? (c = this.Ca, d = Nh(c) ? b.keyCode : 0) : (c = b.keyCode || this.Ca, d = b.charCode || 0, rb && (63 == d && !c) && (c = 191));
  var f = c, h = b.keyIdentifier;
  c ? 63232 <= c && c in Ri ? f = Ri[c] : 25 == c && a.shiftKey && (f = 9) : h && h in Si && (f = Si[h]);
  a = f == this.Da;
  this.Da = f;
  b = new Vi(f, d, a, b);
  try {
    this.dispatchEvent(b)
  }finally {
    b.qb()
  }
};
q.detach = function() {
  this.Hb && (kc(this.Hb), kc(this.nc), kc(this.Ib), this.Ib = this.nc = this.Hb = m);
  this.rb = m;
  this.Ca = this.Da = -1
};
q.ia = function() {
  Qi.kb.ia.call(this);
  this.detach()
};
function Vi(a, b, c, d) {
  d && this.ub(d, g);
  this.type = "key";
  this.keyCode = a;
  this.charCode = b;
  this.repeat = c
}
va(Vi, Fb);
var Wi = Pg.b(Gf), Xi = function() {
  function a(a, b, c) {
    a = Hf(["\ufdd0'max-count", "\ufdd0'event-pred", "\ufdd0'reactor"], {"\ufdd0'max-count":a, "\ufdd0'event-pred":b, "\ufdd0'reactor":c});
    Rg.p(Wi, Dd, a, 0);
    return a
  }
  function b(a, b) {
    return c.c(m, a, b)
  }
  var c = m, c = function(c, f, h) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, f);
      case 3:
        return a.call(this, c, f, h)
    }
    e("Invalid arity: " + arguments.length)
  };
  c.a = b;
  c.c = a;
  return c
}(), Yi = function() {
  function a(a, b) {
    var c = Te(function(b) {
      var c = Cd.c(b, 0, m), c = Rd(c) ? $.lang.N.create.b ? $.lang.N.create.b(c) : $.lang.N.create.call(m, c) : c, c = D.c(c, "\ufdd0'event-pred", m);
      Cd.c(b, 1, m);
      return c.b ? c.b(a) : c.call(m, a)
    }, E(Wi)), i = R(c);
    if(i) {
      c = I(i);
      Cd.c(c, 0, m);
      Cd.c(c, 1, m);
      for(var j = i;;) {
        var i = c, c = Cd.c(i, 0, m), i = Cd.c(i, 1, m), k = c, k = Rd(k) ? $.lang.N.create.b ? $.lang.N.create.b(k) : $.lang.N.create.call(m, k) : k, r = D.c(k, "\ufdd0'reactor", m), x = D.c(k, "\ufdd0'max-count", m), t = i + 1;
        r.a ? r.a(a, b) : r.call(m, a, b);
        v(function() {
          var a = x;
          return v(a) ? x <= t : a
        }()) ? Rg.c(Wi, Ed, c) : Rg.p(Wi, Dd, c, t);
        if(c = H(j)) {
          i = c, c = I(i), j = i
        }else {
          return m
        }
      }
    }else {
      return m
    }
  }
  function b(a) {
    return c.a(a, m)
  }
  var c = m, c = function(c, f) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, f)
    }
    e("Invalid arity: " + arguments.length)
  };
  c.b = b;
  c.a = a;
  return c
}();
var Zi = {}, $i = Pg.b(Gf), Me = Pg.b(m), aj = Pg.b(n), bj = Pg.b(m), cj = Pg.b(m), dj = function() {
  function a(a) {
    var d = m;
    s(a) && (d = F(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d)
  }
  function b(a) {
    return Bh("org_html_slideshow.main").info(Be.a(Q, a))
  }
  a.o = 0;
  a.n = function(a) {
    a = R(a);
    return b(a)
  };
  a.e = b;
  return a
}(), ej = function() {
  function a(a, b, c) {
    return Xa(Eh(a, b, c))
  }
  function b(a, b) {
    return Xa(Eh(a, b, g))
  }
  function c(a) {
    return Xa(Eh(a, g, g))
  }
  var d = m, d = function(d, h, i) {
    switch(arguments.length) {
      case 1:
        return c.call(this, d);
      case 2:
        return b.call(this, d, h);
      case 3:
        return a.call(this, d, h, i)
    }
    e("Invalid arity: " + arguments.length)
  };
  d.b = c;
  d.a = b;
  d.c = a;
  return d
}(), fj = function() {
  function a(a, b) {
    return I(ej.c("head", m, b)).appendChild(a)
  }
  function b(a) {
    return c.a(a, m)
  }
  var c = m, c = function(c, f) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, f)
    }
    e("Invalid arity: " + arguments.length)
  };
  c.b = b;
  c.a = a;
  return c
}();
function gj(a) {
  var b = Ki();
  Ci(b, a);
  window.location = "" + T(b)
}
function hj(a) {
  return function(b) {
    v(b) && (b.preventDefault(), b.stopPropagation());
    return Yi.a(a, b)
  }
}
function ij(a) {
  v(a) && Yh(ii(a), l)
}
function jj(a) {
  v(a) && Yh(ii(a), n)
}
function kj(a) {
  return Fg(He.a(function(a) {
    return ii(a).getAttribute(Gg("href"))
  }, Te(function(b) {
    var c = K.a("stylesheet", ii(b).getAttribute(Gg("rel")));
    return c ? K.a(a, ii(b).getAttribute(Gg("media"))) : c
  }, ej.b("link"))))
}
function lj(a) {
  var b = R(Te(function(b) {
    var c = K.a("stylesheet", ii(b).getAttribute(Gg("rel")));
    return c ? Wd(a, ii(b).getAttribute(Gg("href"))) : c
  }, ej.b("link")));
  if(b) {
    for(var c = I(b);;) {
      if(c.parentNode.removeChild(c), c = H(b)) {
        b = c, c = I(b)
      }else {
        break
      }
    }
  }
}
var mj = function() {
  function a(a, b) {
    var c = R(a);
    if(c) {
      for(var i = I(c);;) {
        if(fj.a(function() {
          var a = Hh("link");
          a.setAttribute("rel", "stylesheet");
          a.setAttribute("type", "text/css");
          a.setAttribute("href", i);
          return a
        }(), b), c = H(c)) {
          var j = c, i = c = I(j), c = j
        }else {
          return m
        }
      }
    }else {
      return m
    }
  }
  function b(a) {
    return c.a(a, m)
  }
  var c = m, c = function(c, f) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, f)
    }
    e("Invalid arity: " + arguments.length)
  };
  c.b = b;
  c.a = a;
  return c
}();
function nj(a, b) {
  if(v("none" != b.style.display)) {
    return Yh(b, n), cb(a, "unfolded"), bb(a, "folded")
  }
  Yh(b, l);
  cb(a, "folded");
  return bb(a, "unfolded")
}
function oj(a) {
  a.preventDefault();
  var a = a.currentTarget, b = I(ej.c("div", m, pj.b ? pj.b(a) : pj.call(m, a)));
  return nj(a, b)
}
function pj(a) {
  for(;;) {
    if(K.a("DIV", a.nodeName)) {
      return a
    }
    a = a.parentNode
  }
}
var qj = Fg(He.a(function(a) {
  return[T("H"), T(a)].join("")
}, Lg.a(1, 9)));
function rj(a) {
  var a = a.cloneNode(l), b = R(ej.c("div", m, a));
  if(b) {
    for(var c = I(b);;) {
      if(v(Ee(function(a) {
        return function(b) {
          b = [T("outline-"), T(b)].join("");
          return 0 <= Ta(ab(a), b)
        }
      }(c, b), Lg.a(1, 9))) && c.parentNode.removeChild(c), c = H(b)) {
        b = c, c = I(b)
      }else {
        break
      }
    }
  }
  return a
}
function sj(a) {
  a = I(Te(function(a) {
    var c = K.a("DIV", a.nodeName);
    return c ? 0 <= Ta(ab(a), "notes") : c
  }, a.children));
  return v(a) ? Lh(a) : ""
}
function tj(a) {
  return Ee(function(b) {
    return K.a(a, (new ke("\ufdd0'id")).call(m, b)) ? b : m
  }, E(Me))
}
function uj(a) {
  return wd(Le(function(b) {
    return 0 < za(a, (new ke("\ufdd0'id")).call(m, b))
  }))
}
function vj() {
  var a = Ki().Ma, b = tj(a);
  if(v(b)) {
    return b
  }
  a = (b = R(a)) ? uj(a) : b;
  return v(a) ? a : I(E(Me))
}
var wj = Pg.b(kf), xj = Ge.c(Rg, wj, zd);
ca("org_html_slideshow.main.add_new_slide_callback", xj);
function yj(a) {
  var b = Rd(a) ? $.lang.N.create.b ? $.lang.N.create.b(a) : $.lang.N.create.call(m, a) : a, a = D.c(b, "\ufdd0'html", m), b = D.c(b, "\ufdd0'id", m);
  gj(b);
  Dh("current-slide").innerHTML = a;
  zj.P ? zj.P() : zj.call(m);
  if(b = R(E(wj))) {
    for(a = I(b);;) {
      if(a.b ? a.b(Dh("current-slide")) : a.call(m, Dh("current-slide")), a = H(b)) {
        b = a, a = I(b)
      }else {
        return m
      }
    }
  }else {
    return m
  }
}
function Aj() {
  dj.e(F([Fd(M("\ufdd1'toggle-mode"), nd("\ufdd0'line", 319, "\ufdd0'column", 10))], 0));
  return Rg.a(aj, yd)
}
ca("org_html_slideshow.main.toggle_mode", Aj);
ad(aj, "\ufdd0'change-mode", function() {
  return Yi.b("\ufdd0'change-mode")
});
function Bj() {
  var a = vj(), b = wd(Le(function(b) {
    return Ce.a(a, b)
  }));
  v(b) && yj(b);
  return Rg.a(cj, function(a) {
    return a == m ? (new Date).getTime() : a
  })
}
function Cj() {
  var a = vj(), b = xd(Jg(function(b) {
    return Ce.a(a, b)
  }, E(Me)));
  return v(b) ? yj(b) : m
}
var Dj = Pf([84, 36], ["\ufdd0'toggle-mode", "\ufdd0'go-to-top"]), Ej = Pf([32, 84, 35, 80, 37, 34, 13, 33, 78, 40, 38, 39, 3, 36], "\ufdd0'show-next-slide \ufdd0'toggle-mode \ufdd0'show-last-slide \ufdd0'show-prev-slide \ufdd0'show-prev-slide \ufdd0'show-next-slide \ufdd0'show-next-slide \ufdd0'show-prev-slide \ufdd0'show-next-slide \ufdd0'show-next-slide \ufdd0'show-prev-slide \ufdd0'show-next-slide \ufdd0'show-next-slide \ufdd0'show-first-slide".split(" "));
function Fj(a) {
  var b = a.keyCode, c = v(E(aj)) ? Ej : Dj, b = D.c(c, b, m);
  return v(b) ? (Yi.b(b), a.preventDefault(), a.stopPropagation()) : m
}
function Gj() {
  return v(E(bj)) ? v(E(bj).closed) ? Qg(bj, m) : E(bj) : m
}
function Hj(a) {
  var a = a.document.getElementById("presenter-elapsed-time"), b;
  v(E(cj)) ? (b = (new Date).getTime() - E(cj), b = Oh("%d:%02d:%02d", b / 36E5, b / 6E4 % 60, b / 1E3 % 60)) : b = "0:00:00";
  return a.innerHTML = b
}
var Jj = function Ij() {
  var b = Gj();
  if(v(b)) {
    var c = new Date, d = c.getHours();
    b.document.getElementById("presenter-clock-time").innerHTML = Oh('<span>%d:%02d:%02d<span id="presenter-clock-time-ampm"> %s</span></span>', 12 < d ? d - 12 : d, c.getMinutes(), c.getSeconds(), 12 <= d ? "pm" : "am");
    Hj(b);
    return window.setTimeout(Ij, 1E3)
  }
  return m
};
function zj() {
  var a = Gj();
  if(v(a)) {
    var b = vj(), c = Rd(b) ? $.lang.N.create.b ? $.lang.N.create.b(b) : $.lang.N.create.call(m, b) : b, b = D.c(c, "\ufdd0'notes-html", m), c = D.c(c, "\ufdd0'html", m);
    a.document.getElementById("presenter-current-slide").innerHTML = c;
    a.document.getElementById("presenter-notes-container").innerHTML = b;
    return a.document.getElementById("presenter-next-slide").innerHTML = (new ke("\ufdd0'html")).call(m, uj((new ke("\ufdd0'id")).call(m, vj())))
  }
  return m
}
var Kj = new ti;
if(l != Kj.Lc) {
  var Lj;
  Ah();
  Lj = zh;
  var Mj = Kj.pd;
  Lj.sb || (Lj.sb = []);
  Lj.sb.push(Mj);
  Kj.Lc = l
}
dj.e(F(["Application started"], 0));
dj.e(F(["Preparing document"], 0));
Rg.e($i, Dd, "projection", kj("projection"), "screen", F([kj("screen"), "common", kj(m), "presenter", kj("presenter")], 0));
lj(D.c(E($i), "projection", m));
lj(D.c(E($i), "presenter", m));
a: {
  var Nj = R(ej.b("img"));
  if(Nj) {
    for(var Oj = I(Nj), Pj = Nj;;) {
      var Qj = Oj.parentNode;
      K.a("P", Qj.nodeName) && bb(Qj, "image");
      var Rj = H(Pj);
      if(Rj) {
        var Sj = Rj, Tj = I(Sj), Uj = Sj, Oj = Tj, Pj = Uj
      }else {
        break a
      }
    }
  }
}
a: {
  var Vj = R(ej.a("span", "tag"));
  if(Vj) {
    for(var Wj = I(Vj), Xj = Vj;;) {
      var Yj = pj(Wj), Zj = R(ej.c("span", m, Wj));
      if(Zj) {
        for(var $j = I(Zj), ak = Zj;;) {
          bb(Yj, ab($j));
          var bk = H(ak);
          if(bk) {
            var ck = bk, dk = I(ck), ek = ck, $j = dk, ak = ek
          }else {
            break
          }
        }
      }
      var fk = H(Xj);
      if(fk) {
        var gk = fk, hk = I(gk), ik = gk, Wj = hk, Xj = ik
      }else {
        break a
      }
    }
  }
}
a: {
  var jk = R(Lg.a(1, 9));
  if(jk) {
    for(var kk = I(jk), lk = jk;;) {
      var mk = R(ej.a("div", [T("outline-text-"), T(kk)].join("")));
      if(mk) {
        for(var nk = I(mk), ok = mk;;) {
          bb(nk, "outline-text");
          var pk = H(ok);
          if(pk) {
            var qk = pk, rk = I(qk), sk = qk, nk = rk, ok = sk
          }else {
            break
          }
        }
      }
      var tk = H(lk);
      if(tk) {
        var uk = tk, vk = I(uk), wk = uk, kk = vk, lk = wk
      }else {
        break a
      }
    }
  }
}
a: {
  var xk = R(Lg.a(1, 9));
  if(xk) {
    for(var yk = I(xk), zk = xk;;) {
      var Ak = R(ej.b([T("h"), T(yk)].join("")));
      if(Ak) {
        for(var Bk = I(Ak), Ck = Ak;;) {
          Bk.innerHTML = Bk.innerHTML.replace(RegExp("&nbsp;", "g"), "");
          var Dk = H(Ck);
          if(Dk) {
            var Ek = Dk, Fk = I(Ek), Gk = Ek, Bk = Fk, Ck = Gk
          }else {
            break
          }
        }
      }
      var Hk = H(zk);
      if(Hk) {
        var Ik = Hk, Jk = I(Ik), Kk = Ik, yk = Jk, zk = Kk
      }else {
        break a
      }
    }
  }
}
a: {
  var Lk = R(mf(He.a(function(a) {
    return Hf(["\ufdd0'head-elem", "\ufdd0'body-elem"], {"\ufdd0'head-elem":a.parentNode.parentNode, "\ufdd0'body-elem":I(ej.c("div", m, pj.b ? pj.b(a) : pj.call(m, a)))})
  }, ej.a("span", "fold"))));
  if(Lk) {
    var Mk = I(Lk), Nk = Rd(Mk) ? $.lang.N.create.b ? $.lang.N.create.b(Mk) : $.lang.N.create.call(m, Mk) : Mk;
    D.c(Nk, "\ufdd0'body-elem", m);
    D.c(Nk, "\ufdd0'head-elem", m);
    for(var Ok = Mk, Pk = Lk;;) {
      var Qk = Ok, Rk = Rd(Qk) ? $.lang.N.create.b ? $.lang.N.create.b(Qk) : $.lang.N.create.call(m, Qk) : Qk, Sk = D.c(Rk, "\ufdd0'body-elem", m), Tk = D.c(Rk, "\ufdd0'head-elem", m), Uk = Pk;
      nj(Tk, Sk);
      var Vk = Kh(' <a href="#" class="show-hide"><span>show/hide</span></a>');
      Tk.appendChild(Vk);
      ej.c("a", "show-hide", Tk);
      ic(Tk, "click", oj);
      var Wk = H(Uk);
      if(Wk) {
        var Xk = Wk, Yk = I(Xk), Zk = Xk, Ok = Yk, Pk = Zk
      }else {
        break a
      }
    }
  }
}
I(ej.b("body")).appendChild(Kh('<div id="current-slide"></div>'));
jj(ji("current-slide"));
Qg(Me, mf(He.a(function(a) {
  var b;
  a: {
    for(var c = a;;) {
      if(Wd(qj, c.nodeName)) {
        b = c;
        break a
      }
      var d = c.firstChild;
      v(d) ? c = d : (d = c.nextSibling, v(d) ? c = d : (c = c.parentNode, c = v(c) ? c.nextSibling : m))
    }
  }
  return Hf(["\ufdd0'id", "\ufdd0'html", "\ufdd0'notes-html"], {"\ufdd0'id":b.id, "\ufdd0'html":Lh(rj(a)), "\ufdd0'notes-html":sj(a)})
}, ej.a("div", "slide"))));
dj.e(F([Fd(M("\ufdd1'count", "\ufdd1'slides"), nd("\ufdd0'line", 573, "\ufdd0'column", 10)), S(E(Me))], 0));
dj.e(F(["Installing key handler"], 0));
Xi.a(Fg(["\ufdd0'show-next-slide"]), function() {
  return Bj()
});
Xi.a(Fg(["\ufdd0'show-prev-slide"]), function() {
  return Cj()
});
Xi.a(Fg(["\ufdd0'show-first-slide"]), function() {
  return yj(I(E(Me)))
});
Xi.a(Fg(["\ufdd0'show-last-slide"]), function() {
  return yj(xd(E(Me)))
});
Xi.a(Fg(["\ufdd0'toggle-mode"]), function() {
  return Aj()
});
Xi.a(Fg(["\ufdd0'go-to-top"]), function() {
  gj("top");
  return Zi.window.scrollTo(0, 0)
});
Xi.a(Fg(["\ufdd0'show-control-panel"]), function() {
  return Wh(0.75)
});
Xi.a(Fg(["\ufdd0'hide-control-panel"]), function() {
  return Wh(0)
});
Xi.a(Fg(["\ufdd0'change-mode"]), function() {
  var a;
  v(E(aj)) ? (dj.e(F([Fd(M("\ufdd1'enter-slideshow-mode"), nd("\ufdd0'line", 294, "\ufdd0'column", 10))], 0)), jj(ji("preamble")), jj(ji("content")), jj(ji("postamble")), lj(D.c(E($i), "screen", m)), mj.b(D.c(E($i), "projection", m)), ij(ji("current-slide")), a = yj(vj())) : (dj.e(F([Fd(M("\ufdd1'leave-slideshow-mode"), nd("\ufdd0'line", 304, "\ufdd0'column", 10))], 0)), jj(ji("current-slide")), lj(D.c(E($i), "projection", m)), mj.b(D.c(E($i), "screen", m)), ij(ji("preamble")), ij(ji("content")), 
  ij(ji("postamble")), a = Dh(Ki().Ma).scrollIntoView());
  return a
});
Xi.a(Fg(["\ufdd0'show-presenter-window"]), function() {
  var a;
  a = Gj();
  if(v(a)) {
    a = a.focus()
  }else {
    var b = Hf(["\ufdd0'target", "\ufdd0'toolbar", "\ufdd0'location", "\ufdd0'statusbar", "\ufdd0'menubar"], {"\ufdd0'target":"PRESENTERDISPLAY", "\ufdd0'toolbar":n, "\ufdd0'location":n, "\ufdd0'statusbar":n, "\ufdd0'menubar":n}).xa;
    b || (b = {});
    var c = window;
    a = "undefined" != typeof"".href ? "".href : "";
    var d = b.target || "".target, f = [], h;
    for(h in b) {
      switch(h) {
        case "width":
        ;
        case "height":
        ;
        case "top":
        ;
        case "left":
          f.push(h + "=" + b[h]);
          break;
        case "target":
        ;
        case "noreferrer":
          break;
        default:
          f.push(h + "=" + (b[h] ? 1 : 0))
      }
    }
    h = f.join(",");
    if(b.noreferrer) {
      if(b = c.open("", d, h)) {
        nb && -1 != a.indexOf(";") && (a = "'" + a.replace(/'/g, "%27") + "'"), a = Ca(a), b.document.write('<META HTTP-EQUIV="refresh" content="0; url=' + a + '">'), b.document.close()
      }
    }else {
      b = c.open(a, d, h)
    }
    Qg(bj, b);
    a = E(bj).document;
    a.write('\n<html>\n  <head>\n  </head>\n  <body class="presenter-display">\n    <div id="presenter-slide-preview">\n      <div id="presenter-current-slide-container">\n        <span class="presenter-label">Current Slide</span>\n        <div id="presenter-current-slide">\n        </div>\n      </div>\n      <div id="presenter-next-slide-container">\n        <span class="presenter-label">Next Slide</span>\n        <div id="presenter-next-slide">\n        </div>\n      </div>\n     </div>\n     <div id="presenter-notes-container"></div>\n     <div id="presenter-times" class="presenter-label">\n       <div id="presenter-elapsed-time-container">\n          <span id="presenter-elapsed-time">0:00:00</span>\n          <span id="presenter-elapsed-time-reset-container">\n            <a href="#" id="presenter-elapsed-time-reset">reset</a>\n          </span>\n       </div>\n       <div id="presenter-clock-time"><span></span></div>\n     </div>\n  </body>\n</html>\n');
    mj.a(D.c(E($i), "common", m), a);
    mj.a(D.c(E($i), "projection", m), a);
    mj.a(D.c(E($i), "presenter", m), a);
    ic(new Qi(a), "key", Fj);
    ic(a.getElementById("presenter-elapsed-time-reset"), "click", hj("\ufdd0'reset-elapsed-time"));
    zj();
    a = Jj()
  }
  return a
});
Xi.a(Fg(["\ufdd0'reset-elapsed-time"]), function() {
  Qg(cj, m);
  var a = Gj();
  return v(a) ? Hj(a) : m
});
I(ej.b("body")).appendChild(Kh('<div id="c-panel">\n<a id="c-toggle" href="#">\n  <span class="label">Toggle slide-show mode</span>\n  <span class="key">T</span>\n</a>\n<a id="c-first" href="#">\n  <span class="label">First slide</span>\n  <span class="key">Home</span>\n</a>\n<a id="c-prev" href="#">\n  <span class="label">Previous slide</span>\n  <span class="key">P</span>\n</a>\n<a id="c-next" href="#">\n  <span class="label">Next slide</span>\n  <span class="key">N</span>\n</a>\n<a id="c-last" href="#">\n  <span class="label">Last slide</span>\n  <span class="key">End</span>\n</a>\n<a id="c-presenter-window" href="#">\n  <span class="label">Open presenter preview</span>\n</a>\n</div>'));
var $k = Dh("c-panel");
Yi.b("\ufdd0'show-control-panel");
var al = hj("\ufdd0'hide-control-panel");
ka(al) || (al && "function" == typeof al.handleEvent ? al = sa(al.handleEvent, al) : e(Error("Invalid listener argument")));
qc.setTimeout(al, 3E3);
ic($k, "mouseover", hj("\ufdd0'show-control-panel"));
ic($k, "mouseout", hj("\ufdd0'hide-control-panel"));
ic(Dh("c-toggle"), "click", hj("\ufdd0'toggle-mode"));
ic(Dh("c-first"), "click", hj("\ufdd0'show-first-slide"));
ic(Dh("c-prev"), "click", hj("\ufdd0'show-prev-slide"));
ic(Dh("c-next"), "click", hj("\ufdd0'show-next-slide"));
ic(Dh("c-last"), "click", hj("\ufdd0'show-last-slide"));
ic(Dh("c-presenter-window"), "click", hj("\ufdd0'show-presenter-window"));
ic(new Qi(document), "key", Fj);
