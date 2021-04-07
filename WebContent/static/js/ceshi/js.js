(function(e, t) {
    var n, r, i = typeof t,
        o = e.location,
        a = e.document,
        s = a.documentElement,
        l = e.jQuery,
        u = e.$,
        c = {},
        p = [],
        f = "1.10.2",
        d = p.concat,
        h = p.push,
        g = p.slice,
        m = p.indexOf,
        y = c.toString,
        v = c.hasOwnProperty,
        b = f.trim,
        x = function(e, t) { return new x.fn.init(e, t, r) },
        w = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        T = /\S+/g,
        C = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        N = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        k = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        E = /^[\],:{}\s]*$/,
        S = /(?:^|:|,)(?:\s*\[)+/g,
        A = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
        j = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
        D = /^-ms-/,
        L = /-([\da-z])/gi,
        H = function(e, t) { return t.toUpperCase() },
        q = function(e) {
            (a.addEventListener || "load" === e.type || "complete" === a.readyState) && (_(), x.ready())
        },
        _ = function() { a.addEventListener ? (a.removeEventListener("DOMContentLoaded", q, !1), e.removeEventListener("load", q, !1)) : (a.detachEvent("onreadystatechange", q), e.detachEvent("onload", q)) };
    x.fn = x.prototype = {
        jquery: f,
        constructor: x,
        init: function(e, n, r) {
            var i, o;
            if (!e) { return this }
            if ("string" == typeof e) {
                if (i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : N.exec(e), !i || !i[1] && n) { return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e) }
                if (i[1]) { if (n = n instanceof x ? n[0] : n, x.merge(this, x.parseHTML(i[1], n && n.nodeType ? n.ownerDocument || n : a, !0)), k.test(i[1]) && x.isPlainObject(n)) { for (i in n) { x.isFunction(this[i]) ? this[i](n[i]) : this.attr(i, n[i]) } } return this }
                if (o = a.getElementById(i[2]), o && o.parentNode) {
                    if (o.id !== i[2]) { return r.find(e) }
                    this.length = 1, this[0] = o
                }
                return this.context = a, this.selector = e, this
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : x.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), x.makeArray(e, this))
        },
        selector: "",
        length: 0,
        toArray: function() { return g.call(this) },
        get: function(e) { return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e] },
        pushStack: function(e) { var t = x.merge(this.constructor(), e); return t.prevObject = this, t.context = this.context, t },
        each: function(e, t) { return x.each(this, e, t) },
        ready: function(e) { return x.ready.promise().done(e), this },
        slice: function() { return this.pushStack(g.apply(this, arguments)) },
        first: function() { return this.eq(0) },
        last: function() { return this.eq(-1) },
        eq: function(e) {
            var t = this.length,
                n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        },
        map: function(e) { return this.pushStack(x.map(this, function(t, n) { return e.call(t, n, t) })) },
        end: function() { return this.prevObject || this.constructor(null) },
        push: h,
        sort: [].sort,
        splice: [].splice
    }, x.fn.init.prototype = x.fn, x.extend = x.fn.extend = function() {
        var e, n, r, i, o, a, s = arguments[0] || {},
            l = 1,
            u = arguments.length,
            c = !1;
        for ("boolean" == typeof s && (c = s, s = arguments[1] || {}, l = 2), "object" == typeof s || x.isFunction(s) || (s = {}), u === l && (s = this, --l); u > l; l++) { if (null != (o = arguments[l])) { for (i in o) { e = s[i], r = o[i], s !== r && (c && r && (x.isPlainObject(r) || (n = x.isArray(r))) ? (n ? (n = !1, a = e && x.isArray(e) ? e : []) : a = e && x.isPlainObject(e) ? e : {}, s[i] = x.extend(c, a, r)) : r !== t && (s[i] = r)) } } }
        return s
    }, x.extend({
        expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
        noConflict: function(t) { return e.$ === x && (e.$ = u), t && e.jQuery === x && (e.jQuery = l), x },
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) { e ? x.readyWait++ : x.ready(!0) },
        ready: function(e) {
            if (e === !0 ? !--x.readyWait : !x.isReady) {
                if (!a.body) { return setTimeout(x.ready) }
                x.isReady = !0, e !== !0 && --x.readyWait > 0 || (n.resolveWith(a, [x]), x.fn.trigger && x(a).trigger("ready").off("ready"))
            }
        },
        isFunction: function(e) { return "function" === x.type(e) },
        isArray: Array.isArray || function(e) { return "array" === x.type(e) },
        isWindow: function(e) { return null != e && e == e.window },
        isNumeric: function(e) { return !isNaN(parseFloat(e)) && isFinite(e) },
        type: function(e) { return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? c[y.call(e)] || "object" : typeof e },
        isPlainObject: function(e) { var n; if (!e || "object" !== x.type(e) || e.nodeType || x.isWindow(e)) { return !1 } try { if (e.constructor && !v.call(e, "constructor") && !v.call(e.constructor.prototype, "isPrototypeOf")) { return !1 } } catch (r) { return !1 } if (x.support.ownLast) { for (n in e) { return v.call(e, n) } } for (n in e) {} return n === t || v.call(e, n) },
        isEmptyObject: function(e) { var t; for (t in e) { return !1 } return !0 },
        error: function(e) { throw Error(e) },
        parseHTML: function(e, t, n) {
            if (!e || "string" != typeof e) { return null }
            "boolean" == typeof t && (n = t, t = !1), t = t || a;
            var r = k.exec(e),
                i = !n && [];
            return r ? [t.createElement(r[1])] : (r = x.buildFragment([e], t, i), i && x(i).remove(), x.merge([], r.childNodes))
        },
        parseJSON: function(n) { return e.JSON && e.JSON.parse ? e.JSON.parse(n) : null === n ? n : "string" == typeof n && (n = x.trim(n), n && E.test(n.replace(A, "@").replace(j, "]").replace(S, ""))) ? Function("return " + n)() : (x.error("Invalid JSON: " + n), t) },
        parseXML: function(n) { var r, i; if (!n || "string" != typeof n) { return null } try { e.DOMParser ? (i = new DOMParser, r = i.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"), r.async = "false", r.loadXML(n)) } catch (o) { r = t } return r && r.documentElement && !r.getElementsByTagName("parsererror").length || x.error("Invalid XML: " + n), r },
        noop: function() {},
        globalEval: function(t) { t && x.trim(t) && (e.execScript || function(t) { e.eval.call(e, t) })(t) },
        camelCase: function(e) { return e.replace(D, "ms-").replace(L, H) },
        nodeName: function(e, t) { return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase() },
        each: function(e, t, n) {
            var r, i = 0,
                o = e.length,
                a = M(e);
            if (n) { if (a) { for (; o > i; i++) { if (r = t.apply(e[i], n), r === !1) { break } } } else { for (i in e) { if (r = t.apply(e[i], n), r === !1) { break } } } } else { if (a) { for (; o > i; i++) { if (r = t.call(e[i], i, e[i]), r === !1) { break } } } else { for (i in e) { if (r = t.call(e[i], i, e[i]), r === !1) { break } } } }
            return e
        },
        trim: b && !b.call("\ufeff\u00a0") ? function(e) { return null == e ? "" : b.call(e) } : function(e) { return null == e ? "" : (e + "").replace(C, "") },
        makeArray: function(e, t) { var n = t || []; return null != e && (M(Object(e)) ? x.merge(n, "string" == typeof e ? [e] : e) : h.call(n, e)), n },
        inArray: function(e, t, n) { var r; if (t) { if (m) { return m.call(t, e, n) } for (r = t.length, n = n ? 0 > n ? Math.max(0, r + n) : n : 0; r > n; n++) { if (n in t && t[n] === e) { return n } } } return -1 },
        merge: function(e, n) {
            var r = n.length,
                i = e.length,
                o = 0;
            if ("number" == typeof r) { for (; r > o; o++) { e[i++] = n[o] } } else { while (n[o] !== t) { e[i++] = n[o++] } }
            return e.length = i, e
        },
        grep: function(e, t, n) {
            var r, i = [],
                o = 0,
                a = e.length;
            for (n = !!n; a > o; o++) { r = !!t(e[o], o), n !== r && i.push(e[o]) }
            return i
        },
        map: function(e, t, n) {
            var r, i = 0,
                o = e.length,
                a = M(e),
                s = [];
            if (a) { for (; o > i; i++) { r = t(e[i], i, n), null != r && (s[s.length] = r) } } else { for (i in e) { r = t(e[i], i, n), null != r && (s[s.length] = r) } }
            return d.apply([], s)
        },
        guid: 1,
        proxy: function(e, n) { var r, i, o; return "string" == typeof n && (o = e[n], n = e, e = o), x.isFunction(e) ? (r = g.call(arguments, 2), i = function() { return e.apply(n || this, r.concat(g.call(arguments))) }, i.guid = e.guid = e.guid || x.guid++, i) : t },
        access: function(e, n, r, i, o, a, s) {
            var l = 0,
                u = e.length,
                c = null == r;
            if ("object" === x.type(r)) { o = !0; for (l in r) { x.access(e, n, l, r[l], !0, a, s) } } else { if (i !== t && (o = !0, x.isFunction(i) || (s = !0), c && (s ? (n.call(e, i), n = null) : (c = n, n = function(e, t, n) { return c.call(x(e), n) })), n)) { for (; u > l; l++) { n(e[l], r, s ? i : i.call(e[l], l, n(e[l], r))) } } }
            return o ? e : c ? n.call(e) : u ? n(e[0], r) : a
        },
        now: function() { return (new Date).getTime() },
        swap: function(e, t, n, r) {
            var i, o, a = {};
            for (o in t) { a[o] = e.style[o], e.style[o] = t[o] }
            i = n.apply(e, r || []);
            for (o in t) { e.style[o] = a[o] }
            return i
        }
    }), x.ready.promise = function(t) {
        if (!n) {
            if (n = x.Deferred(), "complete" === a.readyState) { setTimeout(x.ready) } else {
                if (a.addEventListener) { a.addEventListener("DOMContentLoaded", q, !1), e.addEventListener("load", q, !1) } else {
                    a.attachEvent("onreadystatechange", q), e.attachEvent("onload", q);
                    var r = !1;
                    try { r = null == e.frameElement && a.documentElement } catch (i) {}
                    r && r.doScroll && function o() {
                        if (!x.isReady) {
                            try { r.doScroll("left") } catch (e) { return setTimeout(o, 50) }
                            _(), x.ready()
                        }
                    }()
                }
            }
        }
        return n.promise(t)
    }, x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) { c["[object " + t + "]"] = t.toLowerCase() });

    function M(e) {
        var t = e.length,
            n = x.type(e);
        return x.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || "function" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }
    r = x(a),
        function(e, t) {
            var n, r, i, o, a, s, l, u, c, p, f, d, h, g, m, y, v, b = "sizzle" + -new Date,
                w = e.document,
                T = 0,
                C = 0,
                N = st(),
                k = st(),
                E = st(),
                S = !1,
                A = function(e, t) { return e === t ? (S = !0, 0) : 0 },
                j = typeof t,
                D = 1 << 31,
                L = {}.hasOwnProperty,
                H = [],
                q = H.pop,
                _ = H.push,
                M = H.push,
                O = H.slice,
                F = H.indexOf || function(e) {
                    var t = 0,
                        n = this.length;
                    for (; n > t; t++) { if (this[t] === e) { return t } }
                    return -1
                },
                B = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                P = "[\\x20\\t\\r\\n\\f]",
                R = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                W = R.replace("w", "w#"),
                $ = "\\[" + P + "*(" + R + ")" + P + "*(?:([*^$|!~]?=)" + P + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + W + ")|)|)" + P + "*\\]",
                I = ":(" + R + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + $.replace(3, 8) + ")*)|.*)\\)|)",
                z = RegExp("^" + P + "+|((?:^|[^\\\\])(?:\\\\.)*)" + P + "+$", "g"),
                X = RegExp("^" + P + "*," + P + "*"),
                U = RegExp("^" + P + "*([>+~]|" + P + ")" + P + "*"),
                V = RegExp(P + "*[+~]"),
                Y = RegExp("=" + P + "*([^\\]'\"]*)" + P + "*\\]", "g"),
                J = RegExp(I),
                G = RegExp("^" + W + "$"),
                Q = { ID: RegExp("^#(" + R + ")"), CLASS: RegExp("^\\.(" + R + ")"), TAG: RegExp("^(" + R.replace("w", "w*") + ")"), ATTR: RegExp("^" + $), PSEUDO: RegExp("^" + I), CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + P + "*(even|odd|(([+-]|)(\\d*)n|)" + P + "*(?:([+-]|)" + P + "*(\\d+)|))" + P + "*\\)|)", "i"), bool: RegExp("^(?:" + B + ")$", "i"), needsContext: RegExp("^" + P + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + P + "*((?:-\\d)?\\d*)" + P + "*\\)|)(?=[^-]|$)", "i") },
                K = /^[^{]+\{\s*\[native \w/,
                Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                et = /^(?:input|select|textarea|button)$/i,
                tt = /^h\d$/i,
                nt = /'|\\/g,
                rt = RegExp("\\\\([\\da-f]{1,6}" + P + "?|(" + P + ")|.)", "ig"),
                it = function(e, t, n) { var r = "0x" + t - 65536; return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(55296 | r >> 10, 56320 | 1023 & r) };
            try { M.apply(H = O.call(w.childNodes), w.childNodes), H[w.childNodes.length].nodeType } catch (ot) {
                M = {
                    apply: H.length ? function(e, t) { _.apply(e, O.call(t)) } : function(e, t) {
                        var n = e.length,
                            r = 0;
                        while (e[n++] = t[r++]) {}
                        e.length = n - 1
                    }
                }
            }

            function at(e, t, n, i) {
                var o, a, s, l, u, c, d, m, y, x;
                if ((t ? t.ownerDocument || t : w) !== f && p(t), t = t || f, n = n || [], !e || "string" != typeof e) { return n }
                if (1 !== (l = t.nodeType) && 9 !== l) { return [] }
                if (h && !i) {
                    if (o = Z.exec(e)) { if (s = o[1]) { if (9 === l) { if (a = t.getElementById(s), !a || !a.parentNode) { return n } if (a.id === s) { return n.push(a), n } } else { if (t.ownerDocument && (a = t.ownerDocument.getElementById(s)) && v(t, a) && a.id === s) { return n.push(a), n } } } else { if (o[2]) { return M.apply(n, t.getElementsByTagName(e)), n } if ((s = o[3]) && r.getElementsByClassName && t.getElementsByClassName) { return M.apply(n, t.getElementsByClassName(s)), n } } }
                    if (r.qsa && (!g || !g.test(e))) {
                        if (m = d = b, y = t, x = 9 === l && e, 1 === l && "object" !== t.nodeName.toLowerCase()) {
                            c = mt(e), (d = t.getAttribute("id")) ? m = d.replace(nt, "\\$&") : t.setAttribute("id", m), m = "[id='" + m + "'] ", u = c.length;
                            while (u--) { c[u] = m + yt(c[u]) }
                            y = V.test(e) && t.parentNode || t, x = c.join(",")
                        }
                        if (x) { try { return M.apply(n, y.querySelectorAll(x)), n } catch (T) {} finally { d || t.removeAttribute("id") } }
                    }
                }
                return kt(e.replace(z, "$1"), t, n, i)
            }

            function st() {
                var e = [];

                function t(n, r) { return e.push(n += " ") > o.cacheLength && delete t[e.shift()], t[n] = r }
                return t
            }

            function lt(e) { return e[b] = !0, e }

            function ut(e) { var t = f.createElement("div"); try { return !!e(t) } catch (n) { return !1 } finally { t.parentNode && t.parentNode.removeChild(t), t = null } }

            function ct(e, t) {
                var n = e.split("|"),
                    r = e.length;
                while (r--) { o.attrHandle[n[r]] = t }
            }

            function pt(e, t) {
                var n = t && e,
                    r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || D) - (~e.sourceIndex || D);
                if (r) { return r }
                if (n) { while (n = n.nextSibling) { if (n === t) { return -1 } } }
                return e ? 1 : -1
            }

            function ft(e) { return function(t) { var n = t.nodeName.toLowerCase(); return "input" === n && t.type === e } }

            function dt(e) { return function(t) { var n = t.nodeName.toLowerCase(); return ("input" === n || "button" === n) && t.type === e } }

            function ht(e) {
                return lt(function(t) {
                    return t = +t, lt(function(n, r) {
                        var i, o = e([], n.length, t),
                            a = o.length;
                        while (a--) { n[i = o[a]] && (n[i] = !(r[i] = n[i])) }
                    })
                })
            }
            s = at.isXML = function(e) { var t = e && (e.ownerDocument || e).documentElement; return t ? "HTML" !== t.nodeName : !1 }, r = at.support = {}, p = at.setDocument = function(e) {
                var n = e ? e.ownerDocument || e : w,
                    i = n.defaultView;
                return n !== f && 9 === n.nodeType && n.documentElement ? (f = n, d = n.documentElement, h = !s(n), i && i.attachEvent && i !== i.top && i.attachEvent("onbeforeunload", function() { p() }), r.attributes = ut(function(e) { return e.className = "i", !e.getAttribute("className") }), r.getElementsByTagName = ut(function(e) { return e.appendChild(n.createComment("")), !e.getElementsByTagName("*").length }), r.getElementsByClassName = ut(function(e) { return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length }), r.getById = ut(function(e) { return d.appendChild(e).id = b, !n.getElementsByName || !n.getElementsByName(b).length }), r.getById ? (o.find.ID = function(e, t) { if (typeof t.getElementById !== j && h) { var n = t.getElementById(e); return n && n.parentNode ? [n] : [] } }, o.filter.ID = function(e) { var t = e.replace(rt, it); return function(e) { return e.getAttribute("id") === t } }) : (delete o.find.ID, o.filter.ID = function(e) { var t = e.replace(rt, it); return function(e) { var n = typeof e.getAttributeNode !== j && e.getAttributeNode("id"); return n && n.value === t } }), o.find.TAG = r.getElementsByTagName ? function(e, n) { return typeof n.getElementsByTagName !== j ? n.getElementsByTagName(e) : t } : function(e, t) {
                    var n, r = [],
                        i = 0,
                        o = t.getElementsByTagName(e);
                    if ("*" === e) { while (n = o[i++]) { 1 === n.nodeType && r.push(n) } return r }
                    return o
                }, o.find.CLASS = r.getElementsByClassName && function(e, n) { return typeof n.getElementsByClassName !== j && h ? n.getElementsByClassName(e) : t }, m = [], g = [], (r.qsa = K.test(n.querySelectorAll)) && (ut(function(e) { e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || g.push("\\[" + P + "*(?:value|" + B + ")"), e.querySelectorAll(":checked").length || g.push(":checked") }), ut(function(e) {
                    var t = n.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("t", ""), e.querySelectorAll("[t^='']").length && g.push("[*^$]=" + P + "*(?:''|\"\")"), e.querySelectorAll(":enabled").length || g.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), g.push(",.*:")
                })), (r.matchesSelector = K.test(y = d.webkitMatchesSelector || d.mozMatchesSelector || d.oMatchesSelector || d.msMatchesSelector)) && ut(function(e) { r.disconnectedMatch = y.call(e, "div"), y.call(e, "[s!='']:x"), m.push("!=", I) }), g = g.length && RegExp(g.join("|")), m = m.length && RegExp(m.join("|")), v = K.test(d.contains) || d.compareDocumentPosition ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        r = t && t.parentNode;
                    return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                } : function(e, t) { if (t) { while (t = t.parentNode) { if (t === e) { return !0 } } } return !1 }, A = d.compareDocumentPosition ? function(e, t) { if (e === t) { return S = !0, 0 } var i = t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(t); return i ? 1 & i || !r.sortDetached && t.compareDocumentPosition(e) === i ? e === n || v(w, e) ? -1 : t === n || v(w, t) ? 1 : c ? F.call(c, e) - F.call(c, t) : 0 : 4 & i ? -1 : 1 : e.compareDocumentPosition ? -1 : 1 } : function(e, t) {
                    var r, i = 0,
                        o = e.parentNode,
                        a = t.parentNode,
                        s = [e],
                        l = [t];
                    if (e === t) { return S = !0, 0 }
                    if (!o || !a) { return e === n ? -1 : t === n ? 1 : o ? -1 : a ? 1 : c ? F.call(c, e) - F.call(c, t) : 0 }
                    if (o === a) { return pt(e, t) }
                    r = e;
                    while (r = r.parentNode) { s.unshift(r) }
                    r = t;
                    while (r = r.parentNode) { l.unshift(r) }
                    while (s[i] === l[i]) { i++ }
                    return i ? pt(s[i], l[i]) : s[i] === w ? -1 : l[i] === w ? 1 : 0
                }, n) : f
            }, at.matches = function(e, t) { return at(e, null, null, t) }, at.matchesSelector = function(e, t) { if ((e.ownerDocument || e) !== f && p(e), t = t.replace(Y, "='$1']"), !(!r.matchesSelector || !h || m && m.test(t) || g && g.test(t))) { try { var n = y.call(e, t); if (n || r.disconnectedMatch || e.document && 11 !== e.document.nodeType) { return n } } catch (i) {} } return at(t, f, null, [e]).length > 0 }, at.contains = function(e, t) { return (e.ownerDocument || e) !== f && p(e), v(e, t) }, at.attr = function(e, n) {
                (e.ownerDocument || e) !== f && p(e);
                var i = o.attrHandle[n.toLowerCase()],
                    a = i && L.call(o.attrHandle, n.toLowerCase()) ? i(e, n, !h) : t;
                return a === t ? r.attributes || !h ? e.getAttribute(n) : (a = e.getAttributeNode(n)) && a.specified ? a.value : null : a
            }, at.error = function(e) { throw Error("Syntax error, unrecognized expression: " + e) }, at.uniqueSort = function(e) {
                var t, n = [],
                    i = 0,
                    o = 0;
                if (S = !r.detectDuplicates, c = !r.sortStable && e.slice(0), e.sort(A), S) { while (t = e[o++]) { t === e[o] && (i = n.push(o)) } while (i--) { e.splice(n[i], 1) } }
                return e
            }, a = at.getText = function(e) {
                var t, n = "",
                    r = 0,
                    i = e.nodeType;
                if (i) { if (1 === i || 9 === i || 11 === i) { if ("string" == typeof e.textContent) { return e.textContent } for (e = e.firstChild; e; e = e.nextSibling) { n += a(e) } } else { if (3 === i || 4 === i) { return e.nodeValue } } } else { for (; t = e[r]; r++) { n += a(t) } }
                return n
            }, o = at.selectors = {
                cacheLength: 50,
                createPseudo: lt,
                match: Q,
                attrHandle: {},
                find: {},
                relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },
                preFilter: { ATTR: function(e) { return e[1] = e[1].replace(rt, it), e[3] = (e[4] || e[5] || "").replace(rt, it), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4) }, CHILD: function(e) { return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || at.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && at.error(e[0]), e }, PSEUDO: function(e) { var n, r = !e[5] && e[2]; return Q.CHILD.test(e[0]) ? null : (e[3] && e[4] !== t ? e[2] = e[4] : r && J.test(r) && (n = mt(r, !0)) && (n = r.indexOf(")", r.length - n) - r.length) && (e[0] = e[0].slice(0, n), e[2] = r.slice(0, n)), e.slice(0, 3)) } },
                filter: {
                    TAG: function(e) { var t = e.replace(rt, it).toLowerCase(); return "*" === e ? function() { return !0 } : function(e) { return e.nodeName && e.nodeName.toLowerCase() === t } },
                    CLASS: function(e) { var t = N[e + " "]; return t || (t = RegExp("(^|" + P + ")" + e + "(" + P + "|$)")) && N(e, function(e) { return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== j && e.getAttribute("class") || "") }) },
                    ATTR: function(e, t, n) { return function(r) { var i = at.attr(r, e); return null == i ? "!=" === t : t ? (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i + " ").indexOf(n) > -1 : "|=" === t ? i === n || i.slice(0, n.length + 1) === n + "-" : !1) : !0 } },
                    CHILD: function(e, t, n, r, i) {
                        var o = "nth" !== e.slice(0, 3),
                            a = "last" !== e.slice(-4),
                            s = "of-type" === t;
                        return 1 === r && 0 === i ? function(e) { return !!e.parentNode } : function(t, n, l) {
                            var u, c, p, f, d, h, g = o !== a ? "nextSibling" : "previousSibling",
                                m = t.parentNode,
                                y = s && t.nodeName.toLowerCase(),
                                v = !l && !s;
                            if (m) {
                                if (o) {
                                    while (g) {
                                        p = t;
                                        while (p = p[g]) { if (s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) { return !1 } }
                                        h = g = "only" === e && !h && "nextSibling"
                                    }
                                    return !0
                                }
                                if (h = [a ? m.firstChild : m.lastChild], a && v) { c = m[b] || (m[b] = {}), u = c[e] || [], d = u[0] === T && u[1], f = u[0] === T && u[2], p = d && m.childNodes[d]; while (p = ++d && p && p[g] || (f = d = 0) || h.pop()) { if (1 === p.nodeType && ++f && p === t) { c[e] = [T, d, f]; break } } } else { if (v && (u = (t[b] || (t[b] = {}))[e]) && u[0] === T) { f = u[1] } else { while (p = ++d && p && p[g] || (f = d = 0) || h.pop()) { if ((s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) && ++f && (v && ((p[b] || (p[b] = {}))[e] = [T, f]), p === t)) { break } } } }
                                return f -= i, f === r || 0 === f % r && f / r >= 0
                            }
                        }
                    },
                    PSEUDO: function(e, t) {
                        var n, r = o.pseudos[e] || o.setFilters[e.toLowerCase()] || at.error("unsupported pseudo: " + e);
                        return r[b] ? r(t) : r.length > 1 ? (n = [e, e, "", t], o.setFilters.hasOwnProperty(e.toLowerCase()) ? lt(function(e, n) {
                            var i, o = r(e, t),
                                a = o.length;
                            while (a--) { i = F.call(e, o[a]), e[i] = !(n[i] = o[a]) }
                        }) : function(e) { return r(e, 0, n) }) : r
                    }
                },
                pseudos: {
                    not: lt(function(e) {
                        var t = [],
                            n = [],
                            r = l(e.replace(z, "$1"));
                        return r[b] ? lt(function(e, t, n, i) {
                            var o, a = r(e, null, i, []),
                                s = e.length;
                            while (s--) {
                                (o = a[s]) && (e[s] = !(t[s] = o))
                            }
                        }) : function(e, i, o) { return t[0] = e, r(t, null, o, n), !n.pop() }
                    }),
                    has: lt(function(e) { return function(t) { return at(e, t).length > 0 } }),
                    contains: lt(function(e) { return function(t) { return (t.textContent || t.innerText || a(t)).indexOf(e) > -1 } }),
                    lang: lt(function(e) {
                        return G.test(e || "") || at.error("unsupported lang: " + e), e = e.replace(rt, it).toLowerCase(),
                            function(t) {
                                var n;
                                do { if (n = h ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) { return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-") } } while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                    }),
                    target: function(t) { var n = e.location && e.location.hash; return n && n.slice(1) === t.id },
                    root: function(e) { return e === d },
                    focus: function(e) { return e === f.activeElement && (!f.hasFocus || f.hasFocus()) && !!(e.type || e.href || ~e.tabIndex) },
                    enabled: function(e) { return e.disabled === !1 },
                    disabled: function(e) { return e.disabled === !0 },
                    checked: function(e) { var t = e.nodeName.toLowerCase(); return "input" === t && !!e.checked || "option" === t && !!e.selected },
                    selected: function(e) { return e.parentNode && e.parentNode.selectedIndex, e.selected === !0 },
                    empty: function(e) { for (e = e.firstChild; e; e = e.nextSibling) { if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType) { return !1 } } return !0 },
                    parent: function(e) { return !o.pseudos.empty(e) },
                    header: function(e) { return tt.test(e.nodeName) },
                    input: function(e) { return et.test(e.nodeName) },
                    button: function(e) { var t = e.nodeName.toLowerCase(); return "input" === t && "button" === e.type || "button" === t },
                    text: function(e) { var t; return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type) },
                    first: ht(function() { return [0] }),
                    last: ht(function(e, t) { return [t - 1] }),
                    eq: ht(function(e, t, n) { return [0 > n ? n + t : n] }),
                    even: ht(function(e, t) { var n = 0; for (; t > n; n += 2) { e.push(n) } return e }),
                    odd: ht(function(e, t) { var n = 1; for (; t > n; n += 2) { e.push(n) } return e }),
                    lt: ht(function(e, t, n) { var r = 0 > n ? n + t : n; for (; --r >= 0;) { e.push(r) } return e }),
                    gt: ht(function(e, t, n) { var r = 0 > n ? n + t : n; for (; t > ++r;) { e.push(r) } return e })
                }
            }, o.pseudos.nth = o.pseudos.eq;
            for (n in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) { o.pseudos[n] = ft(n) }
            for (n in { submit: !0, reset: !0 }) { o.pseudos[n] = dt(n) }

            function gt() {}
            gt.prototype = o.filters = o.pseudos, o.setFilters = new gt;

            function mt(e, t) {
                var n, r, i, a, s, l, u, c = k[e + " "];
                if (c) { return t ? 0 : c.slice(0) }
                s = e, l = [], u = o.preFilter;
                while (s) {
                    (!n || (r = X.exec(s))) && (r && (s = s.slice(r[0].length) || s), l.push(i = [])), n = !1, (r = U.exec(s)) && (n = r.shift(), i.push({ value: n, type: r[0].replace(z, " ") }), s = s.slice(n.length));
                    for (a in o.filter) {!(r = Q[a].exec(s)) || u[a] && !(r = u[a](r)) || (n = r.shift(), i.push({ value: n, type: a, matches: r }), s = s.slice(n.length)) }
                    if (!n) { break }
                }
                return t ? s.length : s ? at.error(e) : k(e, l).slice(0)
            }

            function yt(e) {
                var t = 0,
                    n = e.length,
                    r = "";
                for (; n > t; t++) { r += e[t].value }
                return r
            }

            function vt(e, t, n) {
                var r = t.dir,
                    o = n && "parentNode" === r,
                    a = C++;
                return t.first ? function(t, n, i) { while (t = t[r]) { if (1 === t.nodeType || o) { return e(t, n, i) } } } : function(t, n, s) { var l, u, c, p = T + " " + a; if (s) { while (t = t[r]) { if ((1 === t.nodeType || o) && e(t, n, s)) { return !0 } } } else { while (t = t[r]) { if (1 === t.nodeType || o) { if (c = t[b] || (t[b] = {}), (u = c[r]) && u[0] === p) { if ((l = u[1]) === !0 || l === i) { return l === !0 } } else { if (u = c[r] = [p], u[1] = e(t, n, s) || i, u[1] === !0) { return !0 } } } } } }
            }

            function bt(e) { return e.length > 1 ? function(t, n, r) { var i = e.length; while (i--) { if (!e[i](t, n, r)) { return !1 } } return !0 } : e[0] }

            function xt(e, t, n, r, i) {
                var o, a = [],
                    s = 0,
                    l = e.length,
                    u = null != t;
                for (; l > s; s++) {
                    (o = e[s]) && (!n || n(o, r, i)) && (a.push(o), u && t.push(s))
                }
                return a
            }

            function wt(e, t, n, r, i, o) {
                return r && !r[b] && (r = wt(r)), i && !i[b] && (i = wt(i, o)), lt(function(o, a, s, l) {
                    var u, c, p, f = [],
                        d = [],
                        h = a.length,
                        g = o || Nt(t || "*", s.nodeType ? [s] : s, []),
                        m = !e || !o && t ? g : xt(g, f, e, s, l),
                        y = n ? i || (o ? e : h || r) ? [] : a : m;
                    if (n && n(m, y, s, l), r) {
                        u = xt(y, d), r(u, [], s, l), c = u.length;
                        while (c--) {
                            (p = u[c]) && (y[d[c]] = !(m[d[c]] = p))
                        }
                    }
                    if (o) {
                        if (i || e) {
                            if (i) {
                                u = [], c = y.length;
                                while (c--) {
                                    (p = y[c]) && u.push(m[c] = p)
                                }
                                i(null, y = [], u, l)
                            }
                            c = y.length;
                            while (c--) {
                                (p = y[c]) && (u = i ? F.call(o, p) : f[c]) > -1 && (o[u] = !(a[u] = p))
                            }
                        }
                    } else { y = xt(y === a ? y.splice(h, y.length) : y), i ? i(null, a, y, l) : M.apply(a, y) }
                })
            }

            function Tt(e) {
                var t, n, r, i = e.length,
                    a = o.relative[e[0].type],
                    s = a || o.relative[" "],
                    l = a ? 1 : 0,
                    c = vt(function(e) { return e === t }, s, !0),
                    p = vt(function(e) { return F.call(t, e) > -1 }, s, !0),
                    f = [function(e, n, r) { return !a && (r || n !== u) || ((t = n).nodeType ? c(e, n, r) : p(e, n, r)) }];
                for (; i > l; l++) {
                    if (n = o.relative[e[l].type]) { f = [vt(bt(f), n)] } else {
                        if (n = o.filter[e[l].type].apply(null, e[l].matches), n[b]) { for (r = ++l; i > r; r++) { if (o.relative[e[r].type]) { break } } return wt(l > 1 && bt(f), l > 1 && yt(e.slice(0, l - 1).concat({ value: " " === e[l - 2].type ? "*" : "" })).replace(z, "$1"), n, r > l && Tt(e.slice(l, r)), i > r && Tt(e = e.slice(r)), i > r && yt(e)) }
                        f.push(n)
                    }
                }
                return bt(f)
            }

            function Ct(e, t) {
                var n = 0,
                    r = t.length > 0,
                    a = e.length > 0,
                    s = function(s, l, c, p, d) {
                        var h, g, m, y = [],
                            v = 0,
                            b = "0",
                            x = s && [],
                            w = null != d,
                            C = u,
                            N = s || a && o.find.TAG("*", d && l.parentNode || l),
                            k = T += null == C ? 1 : Math.random() || 0.1;
                        for (w && (u = l !== f && l, i = n); null != (h = N[b]); b++) {
                            if (a && h) {
                                g = 0;
                                while (m = e[g++]) { if (m(h, l, c)) { p.push(h); break } }
                                w && (T = k, i = ++n)
                            }
                            r && ((h = !m && h) && v--, s && x.push(h))
                        }
                        if (v += b, r && b !== v) {
                            g = 0;
                            while (m = t[g++]) { m(x, y, l, c) }
                            if (s) {
                                if (v > 0) { while (b--) { x[b] || y[b] || (y[b] = q.call(p)) } }
                                y = xt(y)
                            }
                            M.apply(p, y), w && !s && y.length > 0 && v + t.length > 1 && at.uniqueSort(p)
                        }
                        return w && (T = k, u = C), x
                    };
                return r ? lt(s) : s
            }
            l = at.compile = function(e, t) {
                var n, r = [],
                    i = [],
                    o = E[e + " "];
                if (!o) {
                    t || (t = mt(e)), n = t.length;
                    while (n--) { o = Tt(t[n]), o[b] ? r.push(o) : i.push(o) }
                    o = E(e, Ct(i, r))
                }
                return o
            };

            function Nt(e, t, n) {
                var r = 0,
                    i = t.length;
                for (; i > r; r++) { at(e, t[r], n) }
                return n
            }

            function kt(e, t, n, i) {
                var a, s, u, c, p, f = mt(e);
                if (!i && 1 === f.length) {
                    if (s = f[0] = f[0].slice(0), s.length > 2 && "ID" === (u = s[0]).type && r.getById && 9 === t.nodeType && h && o.relative[s[1].type]) {
                        if (t = (o.find.ID(u.matches[0].replace(rt, it), t) || [])[0], !t) { return n }
                        e = e.slice(s.shift().value.length)
                    }
                    a = Q.needsContext.test(e) ? 0 : s.length;
                    while (a--) { if (u = s[a], o.relative[c = u.type]) { break } if ((p = o.find[c]) && (i = p(u.matches[0].replace(rt, it), V.test(s[0].type) && t.parentNode || t))) { if (s.splice(a, 1), e = i.length && yt(s), !e) { return M.apply(n, i), n } break } }
                }
                return l(e, f)(i, t, !h, n, V.test(e)), n
            }
            r.sortStable = b.split("").sort(A).join("") === b, r.detectDuplicates = S, p(), r.sortDetached = ut(function(e) { return 1 & e.compareDocumentPosition(f.createElement("div")) }), ut(function(e) { return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href") }) || ct("type|href|height|width", function(e, n, r) { return r ? t : e.getAttribute(n, "type" === n.toLowerCase() ? 1 : 2) }), r.attributes && ut(function(e) { return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value") }) || ct("value", function(e, n, r) { return r || "input" !== e.nodeName.toLowerCase() ? t : e.defaultValue }), ut(function(e) { return null == e.getAttribute("disabled") }) || ct(B, function(e, n, r) { var i; return r ? t : (i = e.getAttributeNode(n)) && i.specified ? i.value : e[n] === !0 ? n.toLowerCase() : null }), x.find = at, x.expr = at.selectors, x.expr[":"] = x.expr.pseudos, x.unique = at.uniqueSort, x.text = at.getText, x.isXMLDoc = at.isXML, x.contains = at.contains
        }(e);
    var O = {};

    function F(e) { var t = O[e] = {}; return x.each(e.match(T) || [], function(e, n) { t[n] = !0 }), t }
    x.Callbacks = function(e) {
        e = "string" == typeof e ? O[e] || F(e) : x.extend({}, e);
        var n, r, i, o, a, s, l = [],
            u = !e.once && [],
            c = function(t) {
                for (r = e.memory && t, i = !0, a = s || 0, s = 0, o = l.length, n = !0; l && o > a; a++) { if (l[a].apply(t[0], t[1]) === !1 && e.stopOnFalse) { r = !1; break } }
                n = !1, l && (u ? u.length && c(u.shift()) : r ? l = [] : p.disable())
            },
            p = {
                add: function() {
                    if (l) {
                        var t = l.length;
                        (function i(t) { x.each(t, function(t, n) { var r = x.type(n); "function" === r ? e.unique && p.has(n) || l.push(n) : n && n.length && "string" !== r && i(n) }) })(arguments), n ? o = l.length : r && (s = t, c(r))
                    }
                    return this
                },
                remove: function() { return l && x.each(arguments, function(e, t) { var r; while ((r = x.inArray(t, l, r)) > -1) { l.splice(r, 1), n && (o >= r && o--, a >= r && a--) } }), this },
                has: function(e) { return e ? x.inArray(e, l) > -1 : !(!l || !l.length) },
                empty: function() { return l = [], o = 0, this },
                disable: function() { return l = u = r = t, this },
                disabled: function() { return !l },
                lock: function() { return u = t, r || p.disable(), this },
                locked: function() { return !u },
                fireWith: function(e, t) { return !l || i && !u || (t = t || [], t = [e, t.slice ? t.slice() : t], n ? u.push(t) : c(t)), this },
                fire: function() { return p.fireWith(this, arguments), this },
                fired: function() { return !!i }
            };
        return p
    }, x.extend({
        Deferred: function(e) {
            var t = [
                    ["resolve", "done", x.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", x.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", x.Callbacks("memory")]
                ],
                n = "pending",
                r = {
                    state: function() { return n },
                    always: function() { return i.done(arguments).fail(arguments), this },
                    then: function() {
                        var e = arguments;
                        return x.Deferred(function(n) {
                            x.each(t, function(t, o) {
                                var a = o[0],
                                    s = x.isFunction(e[t]) && e[t];
                                i[o[1]](function() {
                                    var e = s && s.apply(this, arguments);
                                    e && x.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[a + "With"](this === r ? n.promise() : this, s ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    promise: function(e) { return null != e ? x.extend(e, r) : r }
                },
                i = {};
            return r.pipe = r.then, x.each(t, function(e, o) {
                var a = o[2],
                    s = o[3];
                r[o[1]] = a.add, s && a.add(function() { n = s }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function() { return i[o[0] + "With"](this === i ? r : this, arguments), this }, i[o[0] + "With"] = a.fireWith
            }), r.promise(i), e && e.call(i, i), i
        },
        when: function(e) {
            var t = 0,
                n = g.call(arguments),
                r = n.length,
                i = 1 !== r || e && x.isFunction(e.promise) ? r : 0,
                o = 1 === i ? e : x.Deferred(),
                a = function(e, t, n) { return function(r) { t[e] = this, n[e] = arguments.length > 1 ? g.call(arguments) : r, n === s ? o.notifyWith(t, n) : --i || o.resolveWith(t, n) } },
                s, l, u;
            if (r > 1) { for (s = Array(r), l = Array(r), u = Array(r); r > t; t++) { n[t] && x.isFunction(n[t].promise) ? n[t].promise().done(a(t, u, n)).fail(o.reject).progress(a(t, l, s)) : --i } }
            return i || o.resolveWith(u, n), o.promise()
        }
    }), x.support = function(t) {
        var n, r, o, s, l, u, c, p, f, d = a.createElement("div");
        if (d.setAttribute("className", "t"), d.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = d.getElementsByTagName("*") || [], r = d.getElementsByTagName("a")[0], !r || !r.style || !n.length) { return t }
        s = a.createElement("select"), u = s.appendChild(a.createElement("option")), o = d.getElementsByTagName("input")[0], r.style.cssText = "top:1px;float:left;opacity:.5", t.getSetAttribute = "t" !== d.className, t.leadingWhitespace = 3 === d.firstChild.nodeType, t.tbody = !d.getElementsByTagName("tbody").length, t.htmlSerialize = !!d.getElementsByTagName("link").length, t.style = /top/.test(r.getAttribute("style")), t.hrefNormalized = "/a" === r.getAttribute("href"), t.opacity = /^0.5/.test(r.style.opacity), t.cssFloat = !!r.style.cssFloat, t.checkOn = !!o.value, t.optSelected = u.selected, t.enctype = !!a.createElement("form").enctype, t.html5Clone = "<:nav></:nav>" !== a.createElement("nav").cloneNode(!0).outerHTML, t.inlineBlockNeedsLayout = !1, t.shrinkWrapBlocks = !1, t.pixelPosition = !1, t.deleteExpando = !0, t.noCloneEvent = !0, t.reliableMarginRight = !0, t.boxSizingReliable = !0, o.checked = !0, t.noCloneChecked = o.cloneNode(!0).checked, s.disabled = !0, t.optDisabled = !u.disabled;
        try { delete d.test } catch (h) { t.deleteExpando = !1 }
        o = a.createElement("input"), o.setAttribute("value", ""), t.input = "" === o.getAttribute("value"), o.value = "t", o.setAttribute("type", "radio"), t.radioValue = "t" === o.value, o.setAttribute("checked", "t"), o.setAttribute("name", "t"), l = a.createDocumentFragment(), l.appendChild(o), t.appendChecked = o.checked, t.checkClone = l.cloneNode(!0).cloneNode(!0).lastChild.checked, d.attachEvent && (d.attachEvent("onclick", function() { t.noCloneEvent = !1 }), d.cloneNode(!0).click());
        for (f in { submit: !0, change: !0, focusin: !0 }) { d.setAttribute(c = "on" + f, "t"), t[f + "Bubbles"] = c in e || d.attributes[c].expando === !1 }
        d.style.backgroundClip = "content-box", d.cloneNode(!0).style.backgroundClip = "", t.clearCloneStyle = "content-box" === d.style.backgroundClip;
        for (f in x(t)) { break }
        return t.ownLast = "0" !== f, x(function() {
            var n, r, o, s = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
                l = a.getElementsByTagName("body")[0];
            l && (n = a.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", l.appendChild(n).appendChild(d), d.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", o = d.getElementsByTagName("td"), o[0].style.cssText = "padding:0;margin:0;border:0;display:none", p = 0 === o[0].offsetHeight, o[0].style.display = "", o[1].style.display = "none", t.reliableHiddenOffsets = p && 0 === o[0].offsetHeight, d.innerHTML = "", d.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", x.swap(l, null != l.style.zoom ? { zoom: 1 } : {}, function() { t.boxSizing = 4 === d.offsetWidth }), e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(d, null) || {}).top, t.boxSizingReliable = "4px" === (e.getComputedStyle(d, null) || { width: "4px" }).width, r = d.appendChild(a.createElement("div")), r.style.cssText = d.style.cssText = s, r.style.marginRight = r.style.width = "0", d.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight)), typeof d.style.zoom !== i && (d.innerHTML = "", d.style.cssText = s + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = 3 === d.offsetWidth, d.style.display = "block", d.innerHTML = "<div></div>", d.firstChild.style.width = "5px", t.shrinkWrapBlocks = 3 !== d.offsetWidth, t.inlineBlockNeedsLayout && (l.style.zoom = 1)), l.removeChild(n), n = d = o = r = null)
        }), n = s = l = u = r = o = null, t
    }({});
    var B = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
        P = /([A-Z])/g;

    function R(e, n, r, i) {
        if (x.acceptData(e)) {
            var o, a, s = x.expando,
                l = e.nodeType,
                u = l ? x.cache : e,
                c = l ? e[s] : e[s] && s;
            if (c && u[c] && (i || u[c].data) || r !== t || "string" != typeof n) { return c || (c = l ? e[s] = p.pop() || x.guid++ : s), u[c] || (u[c] = l ? {} : { toJSON: x.noop }), ("object" == typeof n || "function" == typeof n) && (i ? u[c] = x.extend(u[c], n) : u[c].data = x.extend(u[c].data, n)), a = u[c], i || (a.data || (a.data = {}), a = a.data), r !== t && (a[x.camelCase(n)] = r), "string" == typeof n ? (o = a[n], null == o && (o = a[x.camelCase(n)])) : o = a, o }
        }
    }

    function W(e, t, n) {
        if (x.acceptData(e)) {
            var r, i, o = e.nodeType,
                a = o ? x.cache : e,
                s = o ? e[x.expando] : x.expando;
            if (a[s]) { if (t && (r = n ? a[s] : a[s].data)) { x.isArray(t) ? t = t.concat(x.map(t, x.camelCase)) : t in r ? t = [t] : (t = x.camelCase(t), t = t in r ? [t] : t.split(" ")), i = t.length; while (i--) { delete r[t[i]] } if (n ? !I(r) : !x.isEmptyObject(r)) { return } }(n || (delete a[s].data, I(a[s]))) && (o ? x.cleanData([e], !0) : x.support.deleteExpando || a != a.window ? delete a[s] : a[s] = null) }
        }
    }
    x.extend({ cache: {}, noData: { applet: !0, embed: !0, object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" }, hasData: function(e) { return e = e.nodeType ? x.cache[e[x.expando]] : e[x.expando], !!e && !I(e) }, data: function(e, t, n) { return R(e, t, n) }, removeData: function(e, t) { return W(e, t) }, _data: function(e, t, n) { return R(e, t, n, !0) }, _removeData: function(e, t) { return W(e, t, !0) }, acceptData: function(e) { if (e.nodeType && 1 !== e.nodeType && 9 !== e.nodeType) { return !1 } var t = e.nodeName && x.noData[e.nodeName.toLowerCase()]; return !t || t !== !0 && e.getAttribute("classid") === t } }), x.fn.extend({
        data: function(e, n) {
            var r, i, o = null,
                a = 0,
                s = this[0];
            if (e === t) {
                if (this.length && (o = x.data(s), 1 === s.nodeType && !x._data(s, "parsedAttrs"))) {
                    for (r = s.attributes; r.length > a; a++) { i = r[a].name, 0 === i.indexOf("data-") && (i = x.camelCase(i.slice(5)), $(s, i, o[i])) }
                    x._data(s, "parsedAttrs", !0)
                }
                return o
            }
            return "object" == typeof e ? this.each(function() { x.data(this, e) }) : arguments.length > 1 ? this.each(function() { x.data(this, e, n) }) : s ? $(s, e, x.data(s, e)) : null
        },
        removeData: function(e) { return this.each(function() { x.removeData(this, e) }) }
    });

    function $(e, n, r) {
        if (r === t && 1 === e.nodeType) {
            var i = "data-" + n.replace(P, "-$1").toLowerCase();
            if (r = e.getAttribute(i), "string" == typeof r) {
                try { r = "true" === r ? !0 : "false" === r ? !1 : "null" === r ? null : +r + "" === r ? +r : B.test(r) ? x.parseJSON(r) : r } catch (o) {}
                x.data(e, n, r)
            } else { r = t }
        }
        return r
    }

    function I(e) { var t; for (t in e) { if (("data" !== t || !x.isEmptyObject(e[t])) && "toJSON" !== t) { return !1 } } return !0 }
    x.extend({
        queue: function(e, n, r) { var i; return e ? (n = (n || "fx") + "queue", i = x._data(e, n), r && (!i || x.isArray(r) ? i = x._data(e, n, x.makeArray(r)) : i.push(r)), i || []) : t },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = x.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = x._queueHooks(e, t),
                a = function() { x.dequeue(e, t) };
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) { var n = t + "queueHooks"; return x._data(e, n) || x._data(e, n, { empty: x.Callbacks("once memory").add(function() { x._removeData(e, t + "queue"), x._removeData(e, n) }) }) }
    }), x.fn.extend({
        queue: function(e, n) {
            var r = 2;
            return "string" != typeof e && (n = e, e = "fx", r--), r > arguments.length ? x.queue(this[0], e) : n === t ? this : this.each(function() {
                var t = x.queue(this, e, n);
                x._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && x.dequeue(this, e)
            })
        },
        dequeue: function(e) { return this.each(function() { x.dequeue(this, e) }) },
        delay: function(e, t) {
            return e = x.fx ? x.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
                var r = setTimeout(t, e);
                n.stop = function() { clearTimeout(r) }
            })
        },
        clearQueue: function(e) { return this.queue(e || "fx", []) },
        promise: function(e, n) {
            var r, i = 1,
                o = x.Deferred(),
                a = this,
                s = this.length,
                l = function() {--i || o.resolveWith(a, [a]) };
            "string" != typeof e && (n = e, e = t), e = e || "fx";
            while (s--) { r = x._data(a[s], e + "queueHooks"), r && r.empty && (i++, r.empty.add(l)) }
            return l(), o.promise(n)
        }
    });
    var z, X, U = /[\t\r\n\f]/g,
        V = /\r/g,
        Y = /^(?:input|select|textarea|button|object)$/i,
        J = /^(?:a|area)$/i,
        G = /^(?:checked|selected)$/i,
        Q = x.support.getSetAttribute,
        K = x.support.input;
    x.fn.extend({
        attr: function(e, t) { return x.access(this, x.attr, e, t, arguments.length > 1) },
        removeAttr: function(e) { return this.each(function() { x.removeAttr(this, e) }) },
        prop: function(e, t) { return x.access(this, x.prop, e, t, arguments.length > 1) },
        removeProp: function(e) { return e = x.propFix[e] || e, this.each(function() { try { this[e] = t, delete this[e] } catch (n) {} }) },
        addClass: function(e) {
            var t, n, r, i, o, a = 0,
                s = this.length,
                l = "string" == typeof e && e;
            if (x.isFunction(e)) { return this.each(function(t) { x(this).addClass(e.call(this, t, this.className)) }) }
            if (l) {
                for (t = (e || "").match(T) || []; s > a; a++) {
                    if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(U, " ") : " ")) {
                        o = 0;
                        while (i = t[o++]) { 0 > r.indexOf(" " + i + " ") && (r += i + " ") }
                        n.className = x.trim(r)
                    }
                }
            }
            return this
        },
        removeClass: function(e) {
            var t, n, r, i, o, a = 0,
                s = this.length,
                l = 0 === arguments.length || "string" == typeof e && e;
            if (x.isFunction(e)) { return this.each(function(t) { x(this).removeClass(e.call(this, t, this.className)) }) }
            if (l) {
                for (t = (e || "").match(T) || []; s > a; a++) {
                    if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(U, " ") : "")) {
                        o = 0;
                        while (i = t[o++]) { while (r.indexOf(" " + i + " ") >= 0) { r = r.replace(" " + i + " ", " ") } }
                        n.className = e ? x.trim(r) : ""
                    }
                }
            }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : x.isFunction(e) ? this.each(function(n) { x(this).toggleClass(e.call(this, n, this.className, t), t) }) : this.each(function() {
                if ("string" === n) {
                    var t, r = 0,
                        o = x(this),
                        a = e.match(T) || [];
                    while (t = a[r++]) { o.hasClass(t) ? o.removeClass(t) : o.addClass(t) }
                } else {
                    (n === i || "boolean" === n) && (this.className && x._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : x._data(this, "__className__") || "")
                }
            })
        },
        hasClass: function(e) {
            var t = " " + e + " ",
                n = 0,
                r = this.length;
            for (; r > n; n++) { if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(U, " ").indexOf(t) >= 0) { return !0 } }
            return !1
        },
        val: function(e) {
            var n, r, i, o = this[0];
            if (arguments.length) {
                return i = x.isFunction(e), this.each(function(n) {
                    var o;
                    1 === this.nodeType && (o = i ? e.call(this, n, x(this).val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : x.isArray(o) && (o = x.map(o, function(e) { return null == e ? "" : e + "" })), r = x.valHooks[this.type] || x.valHooks[this.nodeName.toLowerCase()], r && "set" in r && r.set(this, o, "value") !== t || (this.value = o))
                })
            }
            if (o) { return r = x.valHooks[o.type] || x.valHooks[o.nodeName.toLowerCase()], r && "get" in r && (n = r.get(o, "value")) !== t ? n : (n = o.value, "string" == typeof n ? n.replace(V, "") : null == n ? "" : n) }
        }
    }), x.extend({
        valHooks: {
            option: { get: function(e) { var t = x.find.attr(e, "value"); return null != t ? t : e.text } },
            select: {
                get: function(e) {
                    var t, n, r = e.options,
                        i = e.selectedIndex,
                        o = "select-one" === e.type || 0 > i,
                        a = o ? null : [],
                        s = o ? i + 1 : r.length,
                        l = 0 > i ? s : o ? i : 0;
                    for (; s > l; l++) {
                        if (n = r[l], !(!n.selected && l !== i || (x.support.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && x.nodeName(n.parentNode, "optgroup"))) {
                            if (t = x(n).val(), o) { return t }
                            a.push(t)
                        }
                    }
                    return a
                },
                set: function(e, t) {
                    var n, r, i = e.options,
                        o = x.makeArray(t),
                        a = i.length;
                    while (a--) { r = i[a], (r.selected = x.inArray(x(r).val(), o) >= 0) && (n = !0) }
                    return n || (e.selectedIndex = -1), o
                }
            }
        },
        attr: function(e, n, r) { var o, a, s = e.nodeType; if (e && 3 !== s && 8 !== s && 2 !== s) { return typeof e.getAttribute === i ? x.prop(e, n, r) : (1 === s && x.isXMLDoc(e) || (n = n.toLowerCase(), o = x.attrHooks[n] || (x.expr.match.bool.test(n) ? X : z)), r === t ? o && "get" in o && null !== (a = o.get(e, n)) ? a : (a = x.find.attr(e, n), null == a ? t : a) : null !== r ? o && "set" in o && (a = o.set(e, r, n)) !== t ? a : (e.setAttribute(n, r + ""), r) : (x.removeAttr(e, n), t)) } },
        removeAttr: function(e, t) {
            var n, r, i = 0,
                o = t && t.match(T);
            if (o && 1 === e.nodeType) { while (n = o[i++]) { r = x.propFix[n] || n, x.expr.match.bool.test(n) ? K && Q || !G.test(n) ? e[r] = !1 : e[x.camelCase("default-" + n)] = e[r] = !1 : x.attr(e, n, ""), e.removeAttribute(Q ? n : r) } }
        },
        attrHooks: { type: { set: function(e, t) { if (!x.support.radioValue && "radio" === t && x.nodeName(e, "input")) { var n = e.value; return e.setAttribute("type", t), n && (e.value = n), t } } } },
        propFix: { "for": "htmlFor", "class": "className" },
        prop: function(e, n, r) { var i, o, a, s = e.nodeType; if (e && 3 !== s && 8 !== s && 2 !== s) { return a = 1 !== s || !x.isXMLDoc(e), a && (n = x.propFix[n] || n, o = x.propHooks[n]), r !== t ? o && "set" in o && (i = o.set(e, r, n)) !== t ? i : e[n] = r : o && "get" in o && null !== (i = o.get(e, n)) ? i : e[n] } },
        propHooks: { tabIndex: { get: function(e) { var t = x.find.attr(e, "tabindex"); return t ? parseInt(t, 10) : Y.test(e.nodeName) || J.test(e.nodeName) && e.href ? 0 : -1 } } }
    }), X = { set: function(e, t, n) { return t === !1 ? x.removeAttr(e, n) : K && Q || !G.test(n) ? e.setAttribute(!Q && x.propFix[n] || n, n) : e[x.camelCase("default-" + n)] = e[n] = !0, n } }, x.each(x.expr.match.bool.source.match(/\w+/g), function(e, n) {
        var r = x.expr.attrHandle[n] || x.find.attr;
        x.expr.attrHandle[n] = K && Q || !G.test(n) ? function(e, n, i) {
            var o = x.expr.attrHandle[n],
                a = i ? t : (x.expr.attrHandle[n] = t) != r(e, n, i) ? n.toLowerCase() : null;
            return x.expr.attrHandle[n] = o, a
        } : function(e, n, r) { return r ? t : e[x.camelCase("default-" + n)] ? n.toLowerCase() : null }
    }), K && Q || (x.attrHooks.value = { set: function(e, n, r) { return x.nodeName(e, "input") ? (e.defaultValue = n, t) : z && z.set(e, n, r) } }), Q || (z = { set: function(e, n, r) { var i = e.getAttributeNode(r); return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(r)), i.value = n += "", "value" === r || n === e.getAttribute(r) ? n : t } }, x.expr.attrHandle.id = x.expr.attrHandle.name = x.expr.attrHandle.coords = function(e, n, r) { var i; return r ? t : (i = e.getAttributeNode(n)) && "" !== i.value ? i.value : null }, x.valHooks.button = { get: function(e, n) { var r = e.getAttributeNode(n); return r && r.specified ? r.value : t }, set: z.set }, x.attrHooks.contenteditable = { set: function(e, t, n) { z.set(e, "" === t ? !1 : t, n) } }, x.each(["width", "height"], function(e, n) { x.attrHooks[n] = { set: function(e, r) { return "" === r ? (e.setAttribute(n, "auto"), r) : t } } })), x.support.hrefNormalized || x.each(["href", "src"], function(e, t) { x.propHooks[t] = { get: function(e) { return e.getAttribute(t, 4) } } }), x.support.style || (x.attrHooks.style = { get: function(e) { return e.style.cssText || t }, set: function(e, t) { return e.style.cssText = t + "" } }), x.support.optSelected || (x.propHooks.selected = { get: function(e) { var t = e.parentNode; return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null } }), x.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() { x.propFix[this.toLowerCase()] = this }), x.support.enctype || (x.propFix.enctype = "encoding"), x.each(["radio", "checkbox"], function() { x.valHooks[this] = { set: function(e, n) { return x.isArray(n) ? e.checked = x.inArray(x(e).val(), n) >= 0 : t } }, x.support.checkOn || (x.valHooks[this].get = function(e) { return null === e.getAttribute("value") ? "on" : e.value }) });
    var Z = /^(?:input|select|textarea)$/i,
        et = /^key/,
        tt = /^(?:mouse|contextmenu)|click/,
        nt = /^(?:focusinfocus|focusoutblur)$/,
        rt = /^([^.]*)(?:\.(.+)|)$/;

    function it() { return !0 }

    function ot() { return !1 }

    function at() { try { return a.activeElement } catch (e) {} }
    x.event = {
        global: {},
        add: function(e, n, r, o, a) {
            var s, l, u, c, p, f, d, h, g, m, y, v = x._data(e);
            if (v) {
                r.handler && (c = r, r = c.handler, a = c.selector), r.guid || (r.guid = x.guid++), (l = v.events) || (l = v.events = {}), (f = v.handle) || (f = v.handle = function(e) { return typeof x === i || e && x.event.triggered === e.type ? t : x.event.dispatch.apply(f.elem, arguments) }, f.elem = e), n = (n || "").match(T) || [""], u = n.length;
                while (u--) { s = rt.exec(n[u]) || [], g = y = s[1], m = (s[2] || "").split(".").sort(), g && (p = x.event.special[g] || {}, g = (a ? p.delegateType : p.bindType) || g, p = x.event.special[g] || {}, d = x.extend({ type: g, origType: y, data: o, handler: r, guid: r.guid, selector: a, needsContext: a && x.expr.match.needsContext.test(a), namespace: m.join(".") }, c), (h = l[g]) || (h = l[g] = [], h.delegateCount = 0, p.setup && p.setup.call(e, o, m, f) !== !1 || (e.addEventListener ? e.addEventListener(g, f, !1) : e.attachEvent && e.attachEvent("on" + g, f))), p.add && (p.add.call(e, d), d.handler.guid || (d.handler.guid = r.guid)), a ? h.splice(h.delegateCount++, 0, d) : h.push(d), x.event.global[g] = !0) }
                e = null
            }
        },
        remove: function(e, t, n, r, i) {
            var o, a, s, l, u, c, p, f, d, h, g, m = x.hasData(e) && x._data(e);
            if (m && (c = m.events)) {
                t = (t || "").match(T) || [""], u = t.length;
                while (u--) {
                    if (s = rt.exec(t[u]) || [], d = g = s[1], h = (s[2] || "").split(".").sort(), d) {
                        p = x.event.special[d] || {}, d = (r ? p.delegateType : p.bindType) || d, f = c[d] || [], s = s[2] && RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = o = f.length;
                        while (o--) { a = f[o], !i && g !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && ("**" !== r || !a.selector) || (f.splice(o, 1), a.selector && f.delegateCount--, p.remove && p.remove.call(e, a)) }
                        l && !f.length && (p.teardown && p.teardown.call(e, h, m.handle) !== !1 || x.removeEvent(e, d, m.handle), delete c[d])
                    } else { for (d in c) { x.event.remove(e, d + t[u], n, r, !0) } }
                }
                x.isEmptyObject(c) && (delete m.handle, x._removeData(e, "events"))
            }
        },
        trigger: function(n, r, i, o) {
            var s, l, u, c, p, f, d, h = [i || a],
                g = v.call(n, "type") ? n.type : n,
                m = v.call(n, "namespace") ? n.namespace.split(".") : [];
            if (u = f = i = i || a, 3 !== i.nodeType && 8 !== i.nodeType && !nt.test(g + x.event.triggered) && (g.indexOf(".") >= 0 && (m = g.split("."), g = m.shift(), m.sort()), l = 0 > g.indexOf(":") && "on" + g, n = n[x.expando] ? n : new x.Event(g, "object" == typeof n && n), n.isTrigger = o ? 2 : 3, n.namespace = m.join("."), n.namespace_re = n.namespace ? RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n.result = t, n.target || (n.target = i), r = null == r ? [n] : x.makeArray(r, [n]), p = x.event.special[g] || {}, o || !p.trigger || p.trigger.apply(i, r) !== !1)) {
                if (!o && !p.noBubble && !x.isWindow(i)) {
                    for (c = p.delegateType || g, nt.test(c + g) || (u = u.parentNode); u; u = u.parentNode) { h.push(u), f = u }
                    f === (i.ownerDocument || a) && h.push(f.defaultView || f.parentWindow || e)
                }
                d = 0;
                while ((u = h[d++]) && !n.isPropagationStopped()) { n.type = d > 1 ? c : p.bindType || g, s = (x._data(u, "events") || {})[n.type] && x._data(u, "handle"), s && s.apply(u, r), s = l && u[l], s && x.acceptData(u) && s.apply && s.apply(u, r) === !1 && n.preventDefault() }
                if (n.type = g, !o && !n.isDefaultPrevented() && (!p._default || p._default.apply(h.pop(), r) === !1) && x.acceptData(i) && l && i[g] && !x.isWindow(i)) {
                    f = i[l], f && (i[l] = null), x.event.triggered = g;
                    try { i[g]() } catch (y) {}
                    x.event.triggered = t, f && (i[l] = f)
                }
                return n.result
            }
        },
        dispatch: function(e) {
            e = x.event.fix(e);
            var n, r, i, o, a, s = [],
                l = g.call(arguments),
                u = (x._data(this, "events") || {})[e.type] || [],
                c = x.event.special[e.type] || {};
            if (l[0] = e, e.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, e) !== !1) {
                s = x.event.handlers.call(this, e, u), n = 0;
                while ((o = s[n++]) && !e.isPropagationStopped()) {
                    e.currentTarget = o.elem, a = 0;
                    while ((i = o.handlers[a++]) && !e.isImmediatePropagationStopped()) {
                        (!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i, e.data = i.data, r = ((x.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, l), r !== t && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()))
                    }
                }
                return c.postDispatch && c.postDispatch.call(this, e), e.result
            }
        },
        handlers: function(e, n) {
            var r, i, o, a, s = [],
                l = n.delegateCount,
                u = e.target;
            if (l && u.nodeType && (!e.button || "click" !== e.type)) {
                for (; u != this; u = u.parentNode || this) {
                    if (1 === u.nodeType && (u.disabled !== !0 || "click" !== e.type)) {
                        for (o = [], a = 0; l > a; a++) { i = n[a], r = i.selector + " ", o[r] === t && (o[r] = i.needsContext ? x(r, this).index(u) >= 0 : x.find(r, this, null, [u]).length), o[r] && o.push(i) }
                        o.length && s.push({ elem: u, handlers: o })
                    }
                }
            }
            return n.length > l && s.push({ elem: this, handlers: n.slice(l) }), s
        },
        fix: function(e) {
            if (e[x.expando]) { return e }
            var t, n, r, i = e.type,
                o = e,
                s = this.fixHooks[i];
            s || (this.fixHooks[i] = s = tt.test(i) ? this.mouseHooks : et.test(i) ? this.keyHooks : {}), r = s.props ? this.props.concat(s.props) : this.props, e = new x.Event(o), t = r.length;
            while (t--) { n = r[t], e[n] = o[n] }
            return e.target || (e.target = o.srcElement || a), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, s.filter ? s.filter(e, o) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: { props: "char charCode key keyCode".split(" "), filter: function(e, t) { return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e } },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, n) {
                var r, i, o, s = n.button,
                    l = n.fromElement;
                return null == e.pageX && null != n.clientX && (i = e.target.ownerDocument || a, o = i.documentElement, r = i.body, e.pageX = n.clientX + (o && o.scrollLeft || r && r.scrollLeft || 0) - (o && o.clientLeft || r && r.clientLeft || 0), e.pageY = n.clientY + (o && o.scrollTop || r && r.scrollTop || 0) - (o && o.clientTop || r && r.clientTop || 0)), !e.relatedTarget && l && (e.relatedTarget = l === e.target ? n.toElement : l), e.which || s === t || (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), e
            }
        },
        special: { load: { noBubble: !0 }, focus: { trigger: function() { if (this !== at() && this.focus) { try { return this.focus(), !1 } catch (e) {} } }, delegateType: "focusin" }, blur: { trigger: function() { return this === at() && this.blur ? (this.blur(), !1) : t }, delegateType: "focusout" }, click: { trigger: function() { return x.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : t }, _default: function(e) { return x.nodeName(e.target, "a") } }, beforeunload: { postDispatch: function(e) { e.result !== t && (e.originalEvent.returnValue = e.result) } } },
        simulate: function(e, t, n, r) {
            var i = x.extend(new x.Event, n, { type: e, isSimulated: !0, originalEvent: {} });
            r ? x.event.trigger(i, null, t) : x.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
        }
    }, x.removeEvent = a.removeEventListener ? function(e, t, n) { e.removeEventListener && e.removeEventListener(t, n, !1) } : function(e, t, n) {
        var r = "on" + t;
        e.detachEvent && (typeof e[r] === i && (e[r] = null), e.detachEvent(r, n))
    }, x.Event = function(e, n) { return this instanceof x.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? it : ot) : this.type = e, n && x.extend(this, n), this.timeStamp = e && e.timeStamp || x.now(), this[x.expando] = !0, t) : new x.Event(e, n) }, x.Event.prototype = {
        isDefaultPrevented: ot,
        isPropagationStopped: ot,
        isImmediatePropagationStopped: ot,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = it, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = it, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
        },
        stopImmediatePropagation: function() { this.isImmediatePropagationStopped = it, this.stopPropagation() }
    }, x.each({ mouseenter: "mouseover", mouseleave: "mouseout" }, function(e, t) {
        x.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, r = this,
                    i = e.relatedTarget,
                    o = e.handleObj;
                return (!i || i !== r && !x.contains(r, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), x.support.submitBubbles || (x.event.special.submit = {
        setup: function() {
            return x.nodeName(this, "form") ? !1 : (x.event.add(this, "click._submit keypress._submit", function(e) {
                var n = e.target,
                    r = x.nodeName(n, "input") || x.nodeName(n, "button") ? n.form : t;
                r && !x._data(r, "submitBubbles") && (x.event.add(r, "submit._submit", function(e) { e._submit_bubble = !0 }), x._data(r, "submitBubbles", !0))
            }), t)
        },
        postDispatch: function(e) { e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && x.event.simulate("submit", this.parentNode, e, !0)) },
        teardown: function() { return x.nodeName(this, "form") ? !1 : (x.event.remove(this, "._submit"), t) }
    }), x.support.changeBubbles || (x.event.special.change = {
        setup: function() {
            return Z.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (x.event.add(this, "propertychange._change", function(e) { "checked" === e.originalEvent.propertyName && (this._just_changed = !0) }), x.event.add(this, "click._change", function(e) { this._just_changed && !e.isTrigger && (this._just_changed = !1), x.event.simulate("change", this, e, !0) })), !1) : (x.event.add(this, "beforeactivate._change", function(e) {
                var t = e.target;
                Z.test(t.nodeName) && !x._data(t, "changeBubbles") && (x.event.add(t, "change._change", function(e) {!this.parentNode || e.isSimulated || e.isTrigger || x.event.simulate("change", this.parentNode, e, !0) }), x._data(t, "changeBubbles", !0))
            }), t)
        },
        handle: function(e) { var n = e.target; return this !== n || e.isSimulated || e.isTrigger || "radio" !== n.type && "checkbox" !== n.type ? e.handleObj.handler.apply(this, arguments) : t },
        teardown: function() { return x.event.remove(this, "._change"), !Z.test(this.nodeName) }
    }), x.support.focusinBubbles || x.each({ focus: "focusin", blur: "focusout" }, function(e, t) {
        var n = 0,
            r = function(e) { x.event.simulate(t, e.target, x.event.fix(e), !0) };
        x.event.special[t] = { setup: function() { 0 === n++ && a.addEventListener(e, r, !0) }, teardown: function() { 0 === --n && a.removeEventListener(e, r, !0) } }
    }), x.fn.extend({ on: function(e, n, r, i, o) { var a, s; if ("object" == typeof e) { "string" != typeof n && (r = r || n, n = t); for (a in e) { this.on(a, n, r, e[a], o) } return this } if (null == r && null == i ? (i = n, r = n = t) : null == i && ("string" == typeof n ? (i = r, r = t) : (i = r, r = n, n = t)), i === !1) { i = ot } else { if (!i) { return this } } return 1 === o && (s = i, i = function(e) { return x().off(e), s.apply(this, arguments) }, i.guid = s.guid || (s.guid = x.guid++)), this.each(function() { x.event.add(this, e, i, r, n) }) }, one: function(e, t, n, r) { return this.on(e, t, n, r, 1) }, off: function(e, n, r) { var i, o; if (e && e.preventDefault && e.handleObj) { return i = e.handleObj, x(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this } if ("object" == typeof e) { for (o in e) { this.off(o, n, e[o]) } return this } return (n === !1 || "function" == typeof n) && (r = n, n = t), r === !1 && (r = ot), this.each(function() { x.event.remove(this, e, r, n) }) }, trigger: function(e, t) { return this.each(function() { x.event.trigger(e, t, this) }) }, triggerHandler: function(e, n) { var r = this[0]; return r ? x.event.trigger(e, n, r, !0) : t } });
    var st = /^.[^:#\[\.,]*$/,
        lt = /^(?:parents|prev(?:Until|All))/,
        ut = x.expr.match.needsContext,
        ct = { children: !0, contents: !0, next: !0, prev: !0 };
    x.fn.extend({
        find: function(e) {
            var t, n = [],
                r = this,
                i = r.length;
            if ("string" != typeof e) { return this.pushStack(x(e).filter(function() { for (t = 0; i > t; t++) { if (x.contains(r[t], this)) { return !0 } } })) }
            for (t = 0; i > t; t++) { x.find(e, r[t], n) }
            return n = this.pushStack(i > 1 ? x.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
        },
        has: function(e) {
            var t, n = x(e, this),
                r = n.length;
            return this.filter(function() { for (t = 0; r > t; t++) { if (x.contains(this, n[t])) { return !0 } } })
        },
        not: function(e) { return this.pushStack(ft(this, e || [], !0)) },
        filter: function(e) { return this.pushStack(ft(this, e || [], !1)) },
        is: function(e) { return !!ft(this, "string" == typeof e && ut.test(e) ? x(e) : e || [], !1).length },
        closest: function(e, t) {
            var n, r = 0,
                i = this.length,
                o = [],
                a = ut.test(e) || "string" != typeof e ? x(e, t || this.context) : 0;
            for (; i > r; r++) { for (n = this[r]; n && n !== t; n = n.parentNode) { if (11 > n.nodeType && (a ? a.index(n) > -1 : 1 === n.nodeType && x.find.matchesSelector(n, e))) { n = o.push(n); break } } }
            return this.pushStack(o.length > 1 ? x.unique(o) : o)
        },
        index: function(e) { return e ? "string" == typeof e ? x.inArray(this[0], x(e)) : x.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1 },
        add: function(e, t) {
            var n = "string" == typeof e ? x(e, t) : x.makeArray(e && e.nodeType ? [e] : e),
                r = x.merge(this.get(), n);
            return this.pushStack(x.unique(r))
        },
        addBack: function(e) { return this.add(null == e ? this.prevObject : this.prevObject.filter(e)) }
    });

    function pt(e, t) { do { e = e[t] } while (e && 1 !== e.nodeType); return e }
    x.each({ parent: function(e) { var t = e.parentNode; return t && 11 !== t.nodeType ? t : null }, parents: function(e) { return x.dir(e, "parentNode") }, parentsUntil: function(e, t, n) { return x.dir(e, "parentNode", n) }, next: function(e) { return pt(e, "nextSibling") }, prev: function(e) { return pt(e, "previousSibling") }, nextAll: function(e) { return x.dir(e, "nextSibling") }, prevAll: function(e) { return x.dir(e, "previousSibling") }, nextUntil: function(e, t, n) { return x.dir(e, "nextSibling", n) }, prevUntil: function(e, t, n) { return x.dir(e, "previousSibling", n) }, siblings: function(e) { return x.sibling((e.parentNode || {}).firstChild, e) }, children: function(e) { return x.sibling(e.firstChild) }, contents: function(e) { return x.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : x.merge([], e.childNodes) } }, function(e, t) { x.fn[e] = function(n, r) { var i = x.map(this, t, n); return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = x.filter(r, i)), this.length > 1 && (ct[e] || (i = x.unique(i)), lt.test(e) && (i = i.reverse())), this.pushStack(i) } }), x.extend({
        filter: function(e, t, n) { var r = t[0]; return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? x.find.matchesSelector(r, e) ? [r] : [] : x.find.matches(e, x.grep(t, function(e) { return 1 === e.nodeType })) },
        dir: function(e, n, r) {
            var i = [],
                o = e[n];
            while (o && 9 !== o.nodeType && (r === t || 1 !== o.nodeType || !x(o).is(r))) { 1 === o.nodeType && i.push(o), o = o[n] }
            return i
        },
        sibling: function(e, t) { var n = []; for (; e; e = e.nextSibling) { 1 === e.nodeType && e !== t && n.push(e) } return n }
    });

    function ft(e, t, n) {
        if (x.isFunction(t)) { return x.grep(e, function(e, r) { return !!t.call(e, r, e) !== n }) }
        if (t.nodeType) { return x.grep(e, function(e) { return e === t !== n }) }
        if ("string" == typeof t) {
            if (st.test(t)) { return x.filter(t, e, n) }
            t = x.filter(t, e)
        }
        return x.grep(e, function(e) { return x.inArray(e, t) >= 0 !== n })
    }

    function dt(e) {
        var t = ht.split("|"),
            n = e.createDocumentFragment();
        if (n.createElement) { while (t.length) { n.createElement(t.pop()) } }
        return n
    }
    var ht = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        gt = / jQuery\d+="(?:null|\d+)"/g,
        mt = RegExp("<(?:" + ht + ")[\\s/>]", "i"),
        yt = /^\s+/,
        vt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        bt = /<([\w:]+)/,
        xt = /<tbody/i,
        wt = /<|&#?\w+;/,
        Tt = /<(?:script|style|link)/i,
        Ct = /^(?:checkbox|radio)$/i,
        Nt = /checked\s*(?:[^=]|=\s*.checked.)/i,
        kt = /^$|\/(?:java|ecma)script/i,
        Et = /^true\/(.*)/,
        St = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        At = { option: [1, "<select multiple='multiple'>", "</select>"], legend: [1, "<fieldset>", "</fieldset>"], area: [1, "<map>", "</map>"], param: [1, "<object>", "</object>"], thead: [1, "<table>", "</table>"], tr: [2, "<table><tbody>", "</tbody></table>"], col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: x.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"] },
        jt = dt(a),
        Dt = jt.appendChild(a.createElement("div"));
    At.optgroup = At.option, At.tbody = At.tfoot = At.colgroup = At.caption = At.thead, At.th = At.td, x.fn.extend({
        text: function(e) { return x.access(this, function(e) { return e === t ? x.text(this) : this.empty().append((this[0] && this[0].ownerDocument || a).createTextNode(e)) }, null, e, arguments.length) },
        append: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Lt(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Lt(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() { return this.domManip(arguments, function(e) { this.parentNode && this.parentNode.insertBefore(e, this) }) },
        after: function() { return this.domManip(arguments, function(e) { this.parentNode && this.parentNode.insertBefore(e, this.nextSibling) }) },
        remove: function(e, t) {
            var n, r = e ? x.filter(e, this) : this,
                i = 0;
            for (; null != (n = r[i]); i++) { t || 1 !== n.nodeType || x.cleanData(Ft(n)), n.parentNode && (t && x.contains(n.ownerDocument, n) && _t(Ft(n, "script")), n.parentNode.removeChild(n)) }
            return this
        },
        empty: function() {
            var e, t = 0;
            for (; null != (e = this[t]); t++) {
                1 === e.nodeType && x.cleanData(Ft(e, !1));
                while (e.firstChild) { e.removeChild(e.firstChild) }
                e.options && x.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        },
        clone: function(e, t) { return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() { return x.clone(this, e, t) }) },
        html: function(e) {
            return x.access(this, function(e) {
                var n = this[0] || {},
                    r = 0,
                    i = this.length;
                if (e === t) { return 1 === n.nodeType ? n.innerHTML.replace(gt, "") : t }
                if (!("string" != typeof e || Tt.test(e) || !x.support.htmlSerialize && mt.test(e) || !x.support.leadingWhitespace && yt.test(e) || At[(bt.exec(e) || ["", ""])[1].toLowerCase()])) {
                    e = e.replace(vt, "<$1></$2>");
                    try {
                        for (; i > r; r++) { n = this[r] || {}, 1 === n.nodeType && (x.cleanData(Ft(n, !1)), n.innerHTML = e) }
                        n = 0
                    } catch (o) {}
                }
                n && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = x.map(this, function(e) { return [e.nextSibling, e.parentNode] }),
                t = 0;
            return this.domManip(arguments, function(n) {
                var r = e[t++],
                    i = e[t++];
                i && (r && r.parentNode !== i && (r = this.nextSibling), x(this).remove(), i.insertBefore(n, r))
            }, !0), t ? this : this.remove()
        },
        detach: function(e) { return this.remove(e, !0) },
        domManip: function(e, t, n) {
            e = d.apply([], e);
            var r, i, o, a, s, l, u = 0,
                c = this.length,
                p = this,
                f = c - 1,
                h = e[0],
                g = x.isFunction(h);
            if (g || !(1 >= c || "string" != typeof h || x.support.checkClone) && Nt.test(h)) {
                return this.each(function(r) {
                    var i = p.eq(r);
                    g && (e[0] = h.call(this, r, i.html())), i.domManip(e, t, n)
                })
            }
            if (c && (l = x.buildFragment(e, this[0].ownerDocument, !1, !n && this), r = l.firstChild, 1 === l.childNodes.length && (l = r), r)) {
                for (a = x.map(Ft(l, "script"), Ht), o = a.length; c > u; u++) { i = l, u !== f && (i = x.clone(i, !0, !0), o && x.merge(a, Ft(i, "script"))), t.call(this[u], i, u) }
                if (o) { for (s = a[a.length - 1].ownerDocument, x.map(a, qt), u = 0; o > u; u++) { i = a[u], kt.test(i.type || "") && !x._data(i, "globalEval") && x.contains(s, i) && (i.src ? x._evalUrl(i.src) : x.globalEval((i.text || i.textContent || i.innerHTML || "").replace(St, ""))) } }
                l = r = null
            }
            return this
        }
    });

    function Lt(e, t) { return x.nodeName(e, "table") && x.nodeName(1 === t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e }

    function Ht(e) { return e.type = (null !== x.find.attr(e, "type")) + "/" + e.type, e }

    function qt(e) { var t = Et.exec(e.type); return t ? e.type = t[1] : e.removeAttribute("type"), e }

    function _t(e, t) { var n, r = 0; for (; null != (n = e[r]); r++) { x._data(n, "globalEval", !t || x._data(t[r], "globalEval")) } }

    function Mt(e, t) {
        if (1 === t.nodeType && x.hasData(e)) {
            var n, r, i, o = x._data(e),
                a = x._data(t, o),
                s = o.events;
            if (s) { delete a.handle, a.events = {}; for (n in s) { for (r = 0, i = s[n].length; i > r; r++) { x.event.add(t, n, s[n][r]) } } }
            a.data && (a.data = x.extend({}, a.data))
        }
    }

    function Ot(e, t) {
        var n, r, i;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(), !x.support.noCloneEvent && t[x.expando]) {
                i = x._data(t);
                for (r in i.events) { x.removeEvent(t, r, i.handle) }
                t.removeAttribute(x.expando)
            }
            "script" === n && t.text !== e.text ? (Ht(t).text = e.text, qt(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), x.support.html5Clone && e.innerHTML && !x.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Ct.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
        }
    }
    x.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function(e, t) {
        x.fn[e] = function(e) {
            var n, r = 0,
                i = [],
                o = x(e),
                a = o.length - 1;
            for (; a >= r; r++) { n = r === a ? this : this.clone(!0), x(o[r])[t](n), h.apply(i, n.get()) }
            return this.pushStack(i)
        }
    });

    function Ft(e, n) {
        var r, o, a = 0,
            s = typeof e.getElementsByTagName !== i ? e.getElementsByTagName(n || "*") : typeof e.querySelectorAll !== i ? e.querySelectorAll(n || "*") : t;
        if (!s) { for (s = [], r = e.childNodes || e; null != (o = r[a]); a++) {!n || x.nodeName(o, n) ? s.push(o) : x.merge(s, Ft(o, n)) } }
        return n === t || n && x.nodeName(e, n) ? x.merge([e], s) : s
    }

    function Bt(e) { Ct.test(e.type) && (e.defaultChecked = e.checked) }
    x.extend({
        clone: function(e, t, n) { var r, i, o, a, s, l = x.contains(e.ownerDocument, e); if (x.support.html5Clone || x.isXMLDoc(e) || !mt.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (Dt.innerHTML = e.outerHTML, Dt.removeChild(o = Dt.firstChild)), !(x.support.noCloneEvent && x.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || x.isXMLDoc(e))) { for (r = Ft(o), s = Ft(e), a = 0; null != (i = s[a]); ++a) { r[a] && Ot(i, r[a]) } } if (t) { if (n) { for (s = s || Ft(e), r = r || Ft(o), a = 0; null != (i = s[a]); a++) { Mt(i, r[a]) } } else { Mt(e, o) } } return r = Ft(o, "script"), r.length > 0 && _t(r, !l && Ft(e, "script")), r = s = i = null, o },
        buildFragment: function(e, t, n, r) {
            var i, o, a, s, l, u, c, p = e.length,
                f = dt(t),
                d = [],
                h = 0;
            for (; p > h; h++) {
                if (o = e[h], o || 0 === o) {
                    if ("object" === x.type(o)) { x.merge(d, o.nodeType ? [o] : o) } else {
                        if (wt.test(o)) {
                            s = s || f.appendChild(t.createElement("div")), l = (bt.exec(o) || ["", ""])[1].toLowerCase(), c = At[l] || At._default, s.innerHTML = c[1] + o.replace(vt, "<$1></$2>") + c[2], i = c[0];
                            while (i--) { s = s.lastChild }
                            if (!x.support.leadingWhitespace && yt.test(o) && d.push(t.createTextNode(yt.exec(o)[0])), !x.support.tbody) { o = "table" !== l || xt.test(o) ? "<table>" !== c[1] || xt.test(o) ? 0 : s : s.firstChild, i = o && o.childNodes.length; while (i--) { x.nodeName(u = o.childNodes[i], "tbody") && !u.childNodes.length && o.removeChild(u) } }
                            x.merge(d, s.childNodes), s.textContent = "";
                            while (s.firstChild) { s.removeChild(s.firstChild) }
                            s = f.lastChild
                        } else { d.push(t.createTextNode(o)) }
                    }
                }
            }
            s && f.removeChild(s), x.support.appendChecked || x.grep(Ft(d, "input"), Bt), h = 0;
            while (o = d[h++]) { if ((!r || -1 === x.inArray(o, r)) && (a = x.contains(o.ownerDocument, o), s = Ft(f.appendChild(o), "script"), a && _t(s), n)) { i = 0; while (o = s[i++]) { kt.test(o.type || "") && n.push(o) } } }
            return s = null, f
        },
        cleanData: function(e, t) {
            var n, r, o, a, s = 0,
                l = x.expando,
                u = x.cache,
                c = x.support.deleteExpando,
                f = x.event.special;
            for (; null != (n = e[s]); s++) {
                if ((t || x.acceptData(n)) && (o = n[l], a = o && u[o])) {
                    if (a.events) { for (r in a.events) { f[r] ? x.event.remove(n, r) : x.removeEvent(n, r, a.handle) } }
                    u[o] && (delete u[o], c ? delete n[l] : typeof n.removeAttribute !== i ? n.removeAttribute(l) : n[l] = null, p.push(o))
                }
            }
        },
        _evalUrl: function(e) { return x.ajax({ url: e, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0 }) }
    }), x.fn.extend({
        wrapAll: function(e) {
            if (x.isFunction(e)) { return this.each(function(t) { x(this).wrapAll(e.call(this, t)) }) }
            if (this[0]) {
                var t = x(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function() { var e = this; while (e.firstChild && 1 === e.firstChild.nodeType) { e = e.firstChild } return e }).append(this)
            }
            return this
        },
        wrapInner: function(e) {
            return x.isFunction(e) ? this.each(function(t) { x(this).wrapInner(e.call(this, t)) }) : this.each(function() {
                var t = x(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) { var t = x.isFunction(e); return this.each(function(n) { x(this).wrapAll(t ? e.call(this, n) : e) }) },
        unwrap: function() { return this.parent().each(function() { x.nodeName(this, "body") || x(this).replaceWith(this.childNodes) }).end() }
    });
    var Pt, Rt, Wt, $t = /alpha\([^)]*\)/i,
        It = /opacity\s*=\s*([^)]*)/,
        zt = /^(top|right|bottom|left)$/,
        Xt = /^(none|table(?!-c[ea]).+)/,
        Ut = /^margin/,
        Vt = RegExp("^(" + w + ")(.*)$", "i"),
        Yt = RegExp("^(" + w + ")(?!px)[a-z%]+$", "i"),
        Jt = RegExp("^([+-])=(" + w + ")", "i"),
        Gt = { BODY: "block" },
        Qt = { position: "absolute", visibility: "hidden", display: "block" },
        Kt = { letterSpacing: 0, fontWeight: 400 },
        Zt = ["Top", "Right", "Bottom", "Left"],
        en = ["Webkit", "O", "Moz", "ms"];

    function tn(e, t) {
        if (t in e) { return t }
        var n = t.charAt(0).toUpperCase() + t.slice(1),
            r = t,
            i = en.length;
        while (i--) { if (t = en[i] + n, t in e) { return t } }
        return r
    }

    function nn(e, t) { return e = t || e, "none" === x.css(e, "display") || !x.contains(e.ownerDocument, e) }

    function rn(e, t) {
        var n, r, i, o = [],
            a = 0,
            s = e.length;
        for (; s > a; a++) { r = e[a], r.style && (o[a] = x._data(r, "olddisplay"), n = r.style.display, t ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && nn(r) && (o[a] = x._data(r, "olddisplay", ln(r.nodeName)))) : o[a] || (i = nn(r), (n && "none" !== n || !i) && x._data(r, "olddisplay", i ? n : x.css(r, "display")))) }
        for (a = 0; s > a; a++) { r = e[a], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "" : "none")) }
        return e
    }
    x.fn.extend({
        css: function(e, n) {
            return x.access(this, function(e, n, r) {
                var i, o, a = {},
                    s = 0;
                if (x.isArray(n)) { for (o = Rt(e), i = n.length; i > s; s++) { a[n[s]] = x.css(e, n[s], !1, o) } return a }
                return r !== t ? x.style(e, n, r) : x.css(e, n)
            }, e, n, arguments.length > 1)
        },
        show: function() { return rn(this, !0) },
        hide: function() { return rn(this) },
        toggle: function(e) { return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() { nn(this) ? x(this).show() : x(this).hide() }) }
    }), x.extend({
        cssHooks: { opacity: { get: function(e, t) { if (t) { var n = Wt(e, "opacity"); return "" === n ? "1" : n } } } },
        cssNumber: { columnCount: !0, fillOpacity: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 },
        cssProps: { "float": x.support.cssFloat ? "cssFloat" : "styleFloat" },
        style: function(e, n, r, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, a, s, l = x.camelCase(n),
                    u = e.style;
                if (n = x.cssProps[l] || (x.cssProps[l] = tn(u, l)), s = x.cssHooks[n] || x.cssHooks[l], r === t) { return s && "get" in s && (o = s.get(e, !1, i)) !== t ? o : u[n] }
                if (a = typeof r, "string" === a && (o = Jt.exec(r)) && (r = (o[1] + 1) * o[2] + parseFloat(x.css(e, n)), a = "number"), !(null == r || "number" === a && isNaN(r) || ("number" !== a || x.cssNumber[l] || (r += "px"), x.support.clearCloneStyle || "" !== r || 0 !== n.indexOf("background") || (u[n] = "inherit"), s && "set" in s && (r = s.set(e, r, i)) === t))) { try { u[n] = r } catch (c) {} }
            }
        },
        css: function(e, n, r, i) { var o, a, s, l = x.camelCase(n); return n = x.cssProps[l] || (x.cssProps[l] = tn(e.style, l)), s = x.cssHooks[n] || x.cssHooks[l], s && "get" in s && (a = s.get(e, !0, r)), a === t && (a = Wt(e, n, i)), "normal" === a && n in Kt && (a = Kt[n]), "" === r || r ? (o = parseFloat(a), r === !0 || x.isNumeric(o) ? o || 0 : a) : a }
    }), e.getComputedStyle ? (Rt = function(t) { return e.getComputedStyle(t, null) }, Wt = function(e, n, r) {
        var i, o, a, s = r || Rt(e),
            l = s ? s.getPropertyValue(n) || s[n] : t,
            u = e.style;
        return s && ("" !== l || x.contains(e.ownerDocument, e) || (l = x.style(e, n)), Yt.test(l) && Ut.test(n) && (i = u.width, o = u.minWidth, a = u.maxWidth, u.minWidth = u.maxWidth = u.width = l, l = s.width, u.width = i, u.minWidth = o, u.maxWidth = a)), l
    }) : a.documentElement.currentStyle && (Rt = function(e) { return e.currentStyle }, Wt = function(e, n, r) {
        var i, o, a, s = r || Rt(e),
            l = s ? s[n] : t,
            u = e.style;
        return null == l && u && u[n] && (l = u[n]), Yt.test(l) && !zt.test(n) && (i = u.left, o = e.runtimeStyle, a = o && o.left, a && (o.left = e.currentStyle.left), u.left = "fontSize" === n ? "1em" : l, l = u.pixelLeft + "px", u.left = i, a && (o.left = a)), "" === l ? "auto" : l
    });

    function on(e, t, n) { var r = Vt.exec(t); return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t }

    function an(e, t, n, r, i) {
        var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0,
            a = 0;
        for (; 4 > o; o += 2) { "margin" === n && (a += x.css(e, n + Zt[o], !0, i)), r ? ("content" === n && (a -= x.css(e, "padding" + Zt[o], !0, i)), "margin" !== n && (a -= x.css(e, "border" + Zt[o] + "Width", !0, i))) : (a += x.css(e, "padding" + Zt[o], !0, i), "padding" !== n && (a += x.css(e, "border" + Zt[o] + "Width", !0, i))) }
        return a
    }

    function sn(e, t, n) {
        var r = !0,
            i = "width" === t ? e.offsetWidth : e.offsetHeight,
            o = Rt(e),
            a = x.support.boxSizing && "border-box" === x.css(e, "boxSizing", !1, o);
        if (0 >= i || null == i) {
            if (i = Wt(e, t, o), (0 > i || null == i) && (i = e.style[t]), Yt.test(i)) { return i }
            r = a && (x.support.boxSizingReliable || i === e.style[t]), i = parseFloat(i) || 0
        }
        return i + an(e, t, n || (a ? "border" : "content"), r, o) + "px"
    }

    function ln(e) {
        var t = a,
            n = Gt[e];
        return n || (n = un(e, t), "none" !== n && n || (Pt = (Pt || x("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), t = (Pt[0].contentWindow || Pt[0].contentDocument).document, t.write("<!doctype html><html><body>"), t.close(), n = un(e, t), Pt.detach()), Gt[e] = n), n
    }

    function un(e, t) {
        var n = x(t.createElement(e)).appendTo(t.body),
            r = x.css(n[0], "display");
        return n.remove(), r
    }
    x.each(["height", "width"], function(e, n) { x.cssHooks[n] = { get: function(e, r, i) { return r ? 0 === e.offsetWidth && Xt.test(x.css(e, "display")) ? x.swap(e, Qt, function() { return sn(e, n, i) }) : sn(e, n, i) : t }, set: function(e, t, r) { var i = r && Rt(e); return on(e, t, r ? an(e, n, r, x.support.boxSizing && "border-box" === x.css(e, "boxSizing", !1, i), i) : 0) } } }), x.support.opacity || (x.cssHooks.opacity = {
        get: function(e, t) { return It.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? 0.01 * parseFloat(RegExp.$1) + "" : t ? "1" : "" },
        set: function(e, t) {
            var n = e.style,
                r = e.currentStyle,
                i = x.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                o = r && r.filter || n.filter || "";
            n.zoom = 1, (t >= 1 || "" === t) && "" === x.trim(o.replace($t, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter) || (n.filter = $t.test(o) ? o.replace($t, i) : o + " " + i)
        }
    }), x(function() { x.support.reliableMarginRight || (x.cssHooks.marginRight = { get: function(e, n) { return n ? x.swap(e, { display: "inline-block" }, Wt, [e, "marginRight"]) : t } }), !x.support.pixelPosition && x.fn.position && x.each(["top", "left"], function(e, n) { x.cssHooks[n] = { get: function(e, r) { return r ? (r = Wt(e, n), Yt.test(r) ? x(e).position()[n] + "px" : r) : t } } }) }), x.expr && x.expr.filters && (x.expr.filters.hidden = function(e) { return 0 >= e.offsetWidth && 0 >= e.offsetHeight || !x.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || x.css(e, "display")) }, x.expr.filters.visible = function(e) { return !x.expr.filters.hidden(e) }), x.each({ margin: "", padding: "", border: "Width" }, function(e, t) {
        x.cssHooks[e + t] = {
            expand: function(n) {
                var r = 0,
                    i = {},
                    o = "string" == typeof n ? n.split(" ") : [n];
                for (; 4 > r; r++) { i[e + Zt[r] + t] = o[r] || o[r - 2] || o[0] }
                return i
            }
        }, Ut.test(e) || (x.cssHooks[e + t].set = on)
    });
    var cn = /%20/g,
        pn = /\[\]$/,
        fn = /\r?\n/g,
        dn = /^(?:submit|button|image|reset|file)$/i,
        hn = /^(?:input|select|textarea|keygen)/i;
    x.fn.extend({ serialize: function() { return x.param(this.serializeArray()) }, serializeArray: function() { return this.map(function() { var e = x.prop(this, "elements"); return e ? x.makeArray(e) : this }).filter(function() { var e = this.type; return this.name && !x(this).is(":disabled") && hn.test(this.nodeName) && !dn.test(e) && (this.checked || !Ct.test(e)) }).map(function(e, t) { var n = x(this).val(); return null == n ? null : x.isArray(n) ? x.map(n, function(e) { return { name: t.name, value: e.replace(fn, "\r\n") } }) : { name: t.name, value: n.replace(fn, "\r\n") } }).get() } }), x.param = function(e, n) {
        var r, i = [],
            o = function(e, t) { t = x.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t) };
        if (n === t && (n = x.ajaxSettings && x.ajaxSettings.traditional), x.isArray(e) || e.jquery && !x.isPlainObject(e)) { x.each(e, function() { o(this.name, this.value) }) } else { for (r in e) { gn(r, e[r], n, o) } }
        return i.join("&").replace(cn, "+")
    };

    function gn(e, t, n, r) { var i; if (x.isArray(t)) { x.each(t, function(t, i) { n || pn.test(e) ? r(e, i) : gn(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r) }) } else { if (n || "object" !== x.type(t)) { r(e, t) } else { for (i in t) { gn(e + "[" + i + "]", t[i], n, r) } } } }
    x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) { x.fn[t] = function(e, n) { return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t) } }), x.fn.extend({ hover: function(e, t) { return this.mouseenter(e).mouseleave(t || e) }, bind: function(e, t, n) { return this.on(e, null, t, n) }, unbind: function(e, t) { return this.off(e, null, t) }, delegate: function(e, t, n, r) { return this.on(t, e, n, r) }, undelegate: function(e, t, n) { return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n) } });
    var mn, yn, vn = x.now(),
        bn = /\?/,
        xn = /#.*$/,
        wn = /([?&])_=[^&]*/,
        Tn = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Cn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Nn = /^(?:GET|HEAD)$/,
        kn = /^\/\//,
        En = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
        Sn = x.fn.load,
        An = {},
        jn = {},
        Dn = "*/".concat("*");
    try { yn = o.href } catch (Ln) { yn = a.createElement("a"), yn.href = "", yn = yn.href }
    mn = En.exec(yn.toLowerCase()) || [];

    function Hn(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0,
                o = t.toLowerCase().match(T) || [];
            if (x.isFunction(n)) { while (r = o[i++]) { "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n) } }
        }
    }

    function qn(e, n, r, i) {
        var o = {},
            a = e === jn;

        function s(l) { var u; return o[l] = !0, x.each(e[l] || [], function(e, l) { var c = l(n, r, i); return "string" != typeof c || a || o[c] ? a ? !(u = c) : t : (n.dataTypes.unshift(c), s(c), !1) }), u }
        return s(n.dataTypes[0]) || !o["*"] && s("*")
    }

    function _n(e, n) { var r, i, o = x.ajaxSettings.flatOptions || {}; for (i in n) { n[i] !== t && ((o[i] ? e : r || (r = {}))[i] = n[i]) } return r && x.extend(!0, e, r), e }
    x.fn.load = function(e, n, r) {
        if ("string" != typeof e && Sn) { return Sn.apply(this, arguments) }
        var i, o, a, s = this,
            l = e.indexOf(" ");
        return l >= 0 && (i = e.slice(l, e.length), e = e.slice(0, l)), x.isFunction(n) ? (r = n, n = t) : n && "object" == typeof n && (a = "POST"), s.length > 0 && x.ajax({ url: e, type: a, dataType: "html", data: n }).done(function(e) { o = arguments, s.html(i ? x("<div>").append(x.parseHTML(e)).find(i) : e) }).complete(r && function(e, t) { s.each(r, o || [e.responseText, t, e]) }), this
    }, x.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) { x.fn[t] = function(e) { return this.on(t, e) } }), x.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: { url: yn, type: "GET", isLocal: Cn.test(mn[1]), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": Dn, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /xml/, html: /html/, json: /json/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": x.parseJSON, "text xml": x.parseXML }, flatOptions: { url: !0, context: !0 } },
        ajaxSetup: function(e, t) { return t ? _n(_n(e, x.ajaxSettings), t) : _n(x.ajaxSettings, e) },
        ajaxPrefilter: Hn(An),
        ajaxTransport: Hn(jn),
        ajax: function(e, n) {
            "object" == typeof e && (n = e, e = t), n = n || {};
            var r, i, o, a, s, l, u, c, p = x.ajaxSetup({}, n),
                f = p.context || p,
                d = p.context && (f.nodeType || f.jquery) ? x(f) : x.event,
                h = x.Deferred(),
                g = x.Callbacks("once memory"),
                m = p.statusCode || {},
                y = {},
                v = {},
                b = 0,
                w = "canceled",
                C = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (2 === b) {
                            if (!c) { c = {}; while (t = Tn.exec(a)) { c[t[1].toLowerCase()] = t[2] } }
                            t = c[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() { return 2 === b ? a : null },
                    setRequestHeader: function(e, t) { var n = e.toLowerCase(); return b || (e = v[n] = v[n] || e, y[e] = t), this },
                    overrideMimeType: function(e) { return b || (p.mimeType = e), this },
                    statusCode: function(e) { var t; if (e) { if (2 > b) { for (t in e) { m[t] = [m[t], e[t]] } } else { C.always(e[C.status]) } } return this },
                    abort: function(e) { var t = e || w; return u && u.abort(t), k(0, t), this }
                };
            if (h.promise(C).complete = g.add, C.success = C.done, C.error = C.fail, p.url = ((e || p.url || yn) + "").replace(xn, "").replace(kn, mn[1] + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = x.trim(p.dataType || "*").toLowerCase().match(T) || [""], null == p.crossDomain && (r = En.exec(p.url.toLowerCase()), p.crossDomain = !(!r || r[1] === mn[1] && r[2] === mn[2] && (r[3] || ("http:" === r[1] ? "80" : "443")) === (mn[3] || ("http:" === mn[1] ? "80" : "443")))), p.data && p.processData && "string" != typeof p.data && (p.data = x.param(p.data, p.traditional)), qn(An, p, n, C), 2 === b) { return C }
            l = p.global, l && 0 === x.active++ && x.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !Nn.test(p.type), o = p.url, p.hasContent || (p.data && (o = p.url += (bn.test(o) ? "&" : "?") + p.data, delete p.data), p.cache === !1 && (p.url = wn.test(o) ? o.replace(wn, "$1_=" + vn++) : o + (bn.test(o) ? "&" : "?") + "_=" + vn++)), p.ifModified && (x.lastModified[o] && C.setRequestHeader("If-Modified-Since", x.lastModified[o]), x.etag[o] && C.setRequestHeader("If-None-Match", x.etag[o])), (p.data && p.hasContent && p.contentType !== !1 || n.contentType) && C.setRequestHeader("Content-Type", p.contentType), C.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Dn + "; q=0.01" : "") : p.accepts["*"]);
            for (i in p.headers) { C.setRequestHeader(i, p.headers[i]) }
            if (p.beforeSend && (p.beforeSend.call(f, C, p) === !1 || 2 === b)) { return C.abort() }
            w = "abort";
            for (i in { success: 1, error: 1, complete: 1 }) { C[i](p[i]) }
            if (u = qn(jn, p, n, C)) {
                C.readyState = 1, l && d.trigger("ajaxSend", [C, p]), p.async && p.timeout > 0 && (s = setTimeout(function() { C.abort("timeout") }, p.timeout));
                try { b = 1, u.send(y, k) } catch (N) {
                    if (!(2 > b)) { throw N }
                    k(-1, N)
                }
            } else { k(-1, "No Transport") }

            function k(e, n, r, i) {
                var c, y, v, w, T, N = n;
                2 !== b && (b = 2, s && clearTimeout(s), u = t, a = i || "", C.readyState = e > 0 ? 4 : 0, c = e >= 200 && 300 > e || 304 === e, r && (w = Mn(p, C, r)), w = On(p, w, C, c), c ? (p.ifModified && (T = C.getResponseHeader("Last-Modified"), T && (x.lastModified[o] = T), T = C.getResponseHeader("etag"), T && (x.etag[o] = T)), 204 === e || "HEAD" === p.type ? N = "nocontent" : 304 === e ? N = "notmodified" : (N = w.state, y = w.data, v = w.error, c = !v)) : (v = N, (e || !N) && (N = "error", 0 > e && (e = 0))), C.status = e, C.statusText = (n || N) + "", c ? h.resolveWith(f, [y, N, C]) : h.rejectWith(f, [C, N, v]), C.statusCode(m), m = t, l && d.trigger(c ? "ajaxSuccess" : "ajaxError", [C, p, c ? y : v]), g.fireWith(f, [C, N]), l && (d.trigger("ajaxComplete", [C, p]), --x.active || x.event.trigger("ajaxStop")))
            }
            return C
        },
        getJSON: function(e, t, n) { return x.get(e, t, n, "json") },
        getScript: function(e, n) { return x.get(e, t, n, "script") }
    }), x.each(["get", "post"], function(e, n) { x[n] = function(e, r, i, o) { return x.isFunction(r) && (o = o || i, i = r, r = t), x.ajax({ url: e, type: n, dataType: o, data: r, success: i }) } });

    function Mn(e, n, r) {
        var i, o, a, s, l = e.contents,
            u = e.dataTypes;
        while ("*" === u[0]) { u.shift(), o === t && (o = e.mimeType || n.getResponseHeader("Content-Type")) }
        if (o) { for (s in l) { if (l[s] && l[s].test(o)) { u.unshift(s); break } } }
        if (u[0] in r) { a = u[0] } else {
            for (s in r) {
                if (!u[0] || e.converters[s + " " + u[0]]) { a = s; break }
                i || (i = s)
            }
            a = a || i
        }
        return a ? (a !== u[0] && u.unshift(a), r[a]) : t
    }

    function On(e, t, n, r) {
        var i, o, a, s, l, u = {},
            c = e.dataTypes.slice();
        if (c[1]) { for (a in e.converters) { u[a.toLowerCase()] = e.converters[a] } }
        o = c.shift();
        while (o) { if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = c.shift()) { if ("*" === o) { o = l } else { if ("*" !== l && l !== o) { if (a = u[l + " " + o] || u["* " + o], !a) { for (i in u) { if (s = i.split(" "), s[1] === o && (a = u[l + " " + s[0]] || u["* " + s[0]])) { a === !0 ? a = u[i] : u[i] !== !0 && (o = s[0], c.unshift(s[1])); break } } } if (a !== !0) { if (a && e["throws"]) { t = a(t) } else { try { t = a(t) } catch (p) { return { state: "parsererror", error: a ? p : "No conversion from " + l + " to " + o } } } } } } } }
        return { state: "success", data: t }
    }
    x.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /(?:java|ecma)script/ }, converters: { "text script": function(e) { return x.globalEval(e), e } } }), x.ajaxPrefilter("script", function(e) { e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1) }), x.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var n, r = a.head || x("head")[0] || a.documentElement;
            return {
                send: function(t, i) {
                    n = a.createElement("script"), n.async = !0, e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function(e, t) {
                        (t || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, t || i(200, "success"))
                    }, r.insertBefore(n, r.firstChild)
                },
                abort: function() { n && n.onload(t, !0) }
            }
        }
    });
    var Fn = [],
        Bn = /(=)\?(?=&|$)|\?\?/;
    x.ajaxSetup({ jsonp: "callback", jsonpCallback: function() { var e = Fn.pop() || x.expando + "_" + vn++; return this[e] = !0, e } }), x.ajaxPrefilter("json jsonp", function(n, r, i) { var o, a, s, l = n.jsonp !== !1 && (Bn.test(n.url) ? "url" : "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Bn.test(n.data) && "data"); return l || "jsonp" === n.dataTypes[0] ? (o = n.jsonpCallback = x.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, l ? n[l] = n[l].replace(Bn, "$1" + o) : n.jsonp !== !1 && (n.url += (bn.test(n.url) ? "&" : "?") + n.jsonp + "=" + o), n.converters["script json"] = function() { return s || x.error(o + " was not called"), s[0] }, n.dataTypes[0] = "json", a = e[o], e[o] = function() { s = arguments }, i.always(function() { e[o] = a, n[o] && (n.jsonpCallback = r.jsonpCallback, Fn.push(o)), s && x.isFunction(a) && a(s[0]), s = a = t }), "script") : t });
    var Pn, Rn, Wn = 0,
        $n = e.ActiveXObject && function() { var e; for (e in Pn) { Pn[e](t, !0) } };

    function In() { try { return new e.XMLHttpRequest } catch (t) {} }

    function zn() { try { return new e.ActiveXObject("Microsoft.XMLHTTP") } catch (t) {} }
    x.ajaxSettings.xhr = e.ActiveXObject ? function() { return !this.isLocal && In() || zn() } : In, Rn = x.ajaxSettings.xhr(), x.support.cors = !!Rn && "withCredentials" in Rn, Rn = x.support.ajax = !!Rn, Rn && x.ajaxTransport(function(n) {
        if (!n.crossDomain || x.support.cors) {
            var r;
            return {
                send: function(i, o) {
                    var a, s, l = n.xhr();
                    if (n.username ? l.open(n.type, n.url, n.async, n.username, n.password) : l.open(n.type, n.url, n.async), n.xhrFields) { for (s in n.xhrFields) { l[s] = n.xhrFields[s] } }
                    n.mimeType && l.overrideMimeType && l.overrideMimeType(n.mimeType), n.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                    try { for (s in i) { l.setRequestHeader(s, i[s]) } } catch (u) {}
                    l.send(n.hasContent && n.data || null), r = function(e, i) {
                        var s, u, c, p;
                        try {
                            if (r && (i || 4 === l.readyState)) {
                                if (r = t, a && (l.onreadystatechange = x.noop, $n && delete Pn[a]), i) { 4 !== l.readyState && l.abort() } else {
                                    p = {}, s = l.status, u = l.getAllResponseHeaders(), "string" == typeof l.responseText && (p.text = l.responseText);
                                    try { c = l.statusText } catch (f) { c = "" }
                                    s || !n.isLocal || n.crossDomain ? 1223 === s && (s = 204) : s = p.text ? 200 : 404
                                }
                            }
                        } catch (d) { i || o(-1, d) }
                        p && o(s, c, p, u)
                    }, n.async ? 4 === l.readyState ? setTimeout(r) : (a = ++Wn, $n && (Pn || (Pn = {}, x(e).unload($n)), Pn[a] = r), l.onreadystatechange = r) : r()
                },
                abort: function() { r && r(t, !0) }
            }
        }
    });
    var Xn, Un, Vn = /^(?:toggle|show|hide)$/,
        Yn = RegExp("^(?:([+-])=|)(" + w + ")([a-z%]*)$", "i"),
        Jn = /queueHooks$/,
        Gn = [nr],
        Qn = {
            "*": [function(e, t) {
                var n = this.createTween(e, t),
                    r = n.cur(),
                    i = Yn.exec(t),
                    o = i && i[3] || (x.cssNumber[e] ? "" : "px"),
                    a = (x.cssNumber[e] || "px" !== o && +r) && Yn.exec(x.css(n.elem, e)),
                    s = 1,
                    l = 20;
                if (a && a[3] !== o) {
                    o = o || a[3], i = i || [], a = +r || 1;
                    do { s = s || ".5", a /= s, x.style(n.elem, e, a + o) } while (s !== (s = n.cur() / r) && 1 !== s && --l)
                }
                return i && (a = n.start = +a || +r || 0, n.unit = o, n.end = i[1] ? a + (i[1] + 1) * i[2] : +i[2]), n
            }]
        };

    function Kn() { return setTimeout(function() { Xn = t }), Xn = x.now() }

    function Zn(e, t, n) {
        var r, i = (Qn[t] || []).concat(Qn["*"]),
            o = 0,
            a = i.length;
        for (; a > o; o++) { if (r = i[o].call(n, t, e)) { return r } }
    }

    function er(e, t, n) {
        var r, i, o = 0,
            a = Gn.length,
            s = x.Deferred().always(function() { delete l.elem }),
            l = function() {
                if (i) { return !1 }
                var t = Xn || Kn(),
                    n = Math.max(0, u.startTime + u.duration - t),
                    r = n / u.duration || 0,
                    o = 1 - r,
                    a = 0,
                    l = u.tweens.length;
                for (; l > a; a++) { u.tweens[a].run(o) }
                return s.notifyWith(e, [u, o, n]), 1 > o && l ? n : (s.resolveWith(e, [u]), !1)
            },
            u = s.promise({
                elem: e,
                props: x.extend({}, t),
                opts: x.extend(!0, { specialEasing: {} }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: Xn || Kn(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) { var r = x.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing); return u.tweens.push(r), r },
                stop: function(t) {
                    var n = 0,
                        r = t ? u.tweens.length : 0;
                    if (i) { return this }
                    for (i = !0; r > n; n++) { u.tweens[n].run(1) }
                    return t ? s.resolveWith(e, [u, t]) : s.rejectWith(e, [u, t]), this
                }
            }),
            c = u.props;
        for (tr(c, u.opts.specialEasing); a > o; o++) { if (r = Gn[o].call(u, e, c, u.opts)) { return r } }
        return x.map(c, Zn, u), x.isFunction(u.opts.start) && u.opts.start.call(e, u), x.fx.timer(x.extend(l, { elem: e, anim: u, queue: u.opts.queue })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }

    function tr(e, t) { var n, r, i, o, a; for (n in e) { if (r = x.camelCase(n), i = t[r], o = e[n], x.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), a = x.cssHooks[r], a && "expand" in a) { o = a.expand(o), delete e[r]; for (n in o) { n in e || (e[n] = o[n], t[n] = i) } } else { t[r] = i } } }
    x.Animation = x.extend(er, {
        tweener: function(e, t) {
            x.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
            var n, r = 0,
                i = e.length;
            for (; i > r; r++) { n = e[r], Qn[n] = Qn[n] || [], Qn[n].unshift(t) }
        },
        prefilter: function(e, t) { t ? Gn.unshift(e) : Gn.push(e) }
    });

    function nr(e, t, n) {
        var r, i, o, a, s, l, u = this,
            c = {},
            p = e.style,
            f = e.nodeType && nn(e),
            d = x._data(e, "fxshow");
        n.queue || (s = x._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function() { s.unqueued || l() }), s.unqueued++, u.always(function() { u.always(function() { s.unqueued--, x.queue(e, "fx").length || s.empty.fire() }) })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], "inline" === x.css(e, "display") && "none" === x.css(e, "float") && (x.support.inlineBlockNeedsLayout && "inline" !== ln(e.nodeName) ? p.zoom = 1 : p.display = "inline-block")), n.overflow && (p.overflow = "hidden", x.support.shrinkWrapBlocks || u.always(function() { p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2] }));
        for (r in t) {
            if (i = t[r], Vn.exec(i)) {
                if (delete t[r], o = o || "toggle" === i, i === (f ? "hide" : "show")) { continue }
                c[r] = d && d[r] || x.style(e, r)
            }
        }
        if (!x.isEmptyObject(c)) {
            d ? "hidden" in d && (f = d.hidden) : d = x._data(e, "fxshow", {}), o && (d.hidden = !f), f ? x(e).show() : u.done(function() { x(e).hide() }), u.done(function() {
                var t;
                x._removeData(e, "fxshow");
                for (t in c) { x.style(e, t, c[t]) }
            });
            for (r in c) { a = Zn(f ? d[r] : 0, r, u), r in d || (d[r] = a.start, f && (a.end = a.start, a.start = "width" === r || "height" === r ? 1 : 0)) }
        }
    }

    function rr(e, t, n, r, i) { return new rr.prototype.init(e, t, n, r, i) }
    x.Tween = rr, rr.prototype = { constructor: rr, init: function(e, t, n, r, i, o) { this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (x.cssNumber[n] ? "" : "px") }, cur: function() { var e = rr.propHooks[this.prop]; return e && e.get ? e.get(this) : rr.propHooks._default.get(this) }, run: function(e) { var t, n = rr.propHooks[this.prop]; return this.pos = t = this.options.duration ? x.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : rr.propHooks._default.set(this), this } }, rr.prototype.init.prototype = rr.prototype, rr.propHooks = { _default: { get: function(e) { var t; return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = x.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop] }, set: function(e) { x.fx.step[e.prop] ? x.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[x.cssProps[e.prop]] || x.cssHooks[e.prop]) ? x.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now } } }, rr.propHooks.scrollTop = rr.propHooks.scrollLeft = { set: function(e) { e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now) } }, x.each(["toggle", "show", "hide"], function(e, t) {
        var n = x.fn[t];
        x.fn[t] = function(e, r, i) { return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ir(t, !0), e, r, i) }
    }), x.fn.extend({
        fadeTo: function(e, t, n, r) { return this.filter(nn).css("opacity", 0).show().end().animate({ opacity: t }, e, n, r) },
        animate: function(e, t, n, r) {
            var i = x.isEmptyObject(e),
                o = x.speed(t, n, r),
                a = function() {
                    var t = er(this, x.extend({}, e), o);
                    (i || x._data(this, "finish")) && t.stop(!0)
                };
            return a.finish = a, i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
        },
        stop: function(e, n, r) {
            var i = function(e) {
                var t = e.stop;
                delete e.stop, t(r)
            };
            return "string" != typeof e && (r = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                var t = !0,
                    n = null != e && e + "queueHooks",
                    o = x.timers,
                    a = x._data(this);
                if (n) { a[n] && a[n].stop && i(a[n]) } else { for (n in a) { a[n] && a[n].stop && Jn.test(n) && i(a[n]) } }
                for (n = o.length; n--;) { o[n].elem !== this || null != e && o[n].queue !== e || (o[n].anim.stop(r), t = !1, o.splice(n, 1)) }(t || !r) && x.dequeue(this, e)
            })
        },
        finish: function(e) {
            return e !== !1 && (e = e || "fx"), this.each(function() {
                var t, n = x._data(this),
                    r = n[e + "queue"],
                    i = n[e + "queueHooks"],
                    o = x.timers,
                    a = r ? r.length : 0;
                for (n.finish = !0, x.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) { o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1)) }
                for (t = 0; a > t; t++) { r[t] && r[t].finish && r[t].finish.call(this) }
                delete n.finish
            })
        }
    });

    function ir(e, t) {
        var n, r = { height: e },
            i = 0;
        for (t = t ? 1 : 0; 4 > i; i += 2 - t) { n = Zt[i], r["margin" + n] = r["padding" + n] = e }
        return t && (r.opacity = r.width = e), r
    }
    x.each({ slideDown: ir("show"), slideUp: ir("hide"), slideToggle: ir("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function(e, t) { x.fn[e] = function(e, n, r) { return this.animate(t, e, n, r) } }), x.speed = function(e, t, n) { var r = e && "object" == typeof e ? x.extend({}, e) : { complete: n || !n && t || x.isFunction(e) && e, duration: e, easing: n && t || t && !x.isFunction(t) && t }; return r.duration = x.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in x.fx.speeds ? x.fx.speeds[r.duration] : x.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function() { x.isFunction(r.old) && r.old.call(this), r.queue && x.dequeue(this, r.queue) }, r }, x.easing = { linear: function(e) { return e }, swing: function(e) { return 0.5 - Math.cos(e * Math.PI) / 2 } }, x.timers = [], x.fx = rr.prototype.init, x.fx.tick = function() {
        var e, n = x.timers,
            r = 0;
        for (Xn = x.now(); n.length > r; r++) { e = n[r], e() || n[r] !== e || n.splice(r--, 1) }
        n.length || x.fx.stop(), Xn = t
    }, x.fx.timer = function(e) { e() && x.timers.push(e) && x.fx.start() }, x.fx.interval = 13, x.fx.start = function() { Un || (Un = setInterval(x.fx.tick, x.fx.interval)) }, x.fx.stop = function() { clearInterval(Un), Un = null }, x.fx.speeds = { slow: 600, fast: 200, _default: 400 }, x.fx.step = {}, x.expr && x.expr.filters && (x.expr.filters.animated = function(e) { return x.grep(x.timers, function(t) { return e === t.elem }).length }), x.fn.offset = function(e) {
        if (arguments.length) { return e === t ? this : this.each(function(t) { x.offset.setOffset(this, e, t) }) }
        var n, r, o = { top: 0, left: 0 },
            a = this[0],
            s = a && a.ownerDocument;
        if (s) { return n = s.documentElement, x.contains(n, a) ? (typeof a.getBoundingClientRect !== i && (o = a.getBoundingClientRect()), r = or(s), { top: o.top + (r.pageYOffset || n.scrollTop) - (n.clientTop || 0), left: o.left + (r.pageXOffset || n.scrollLeft) - (n.clientLeft || 0) }) : o }
    }, x.offset = {
        setOffset: function(e, t, n) {
            var r = x.css(e, "position");
            "static" === r && (e.style.position = "relative");
            var i = x(e),
                o = i.offset(),
                a = x.css(e, "top"),
                s = x.css(e, "left"),
                l = ("absolute" === r || "fixed" === r) && x.inArray("auto", [a, s]) > -1,
                u = {},
                c = {},
                p, f;
            l ? (c = i.position(), p = c.top, f = c.left) : (p = parseFloat(a) || 0, f = parseFloat(s) || 0), x.isFunction(t) && (t = t.call(e, n, o)), null != t.top && (u.top = t.top - o.top + p), null != t.left && (u.left = t.left - o.left + f), "using" in t ? t.using.call(e, u) : i.css(u)
        }
    }, x.fn.extend({
        position: function() {
            if (this[0]) {
                var e, t, n = { top: 0, left: 0 },
                    r = this[0];
                return "fixed" === x.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), x.nodeName(e[0], "html") || (n = e.offset()), n.top += x.css(e[0], "borderTopWidth", !0), n.left += x.css(e[0], "borderLeftWidth", !0)), { top: t.top - n.top - x.css(r, "marginTop", !0), left: t.left - n.left - x.css(r, "marginLeft", !0) }
            }
        },
        offsetParent: function() { return this.map(function() { var e = this.offsetParent || s; while (e && !x.nodeName(e, "html") && "static" === x.css(e, "position")) { e = e.offsetParent } return e || s }) }
    }), x.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(e, n) {
        var r = /Y/.test(n);
        x.fn[e] = function(i) { return x.access(this, function(e, i, o) { var a = or(e); return o === t ? a ? n in a ? a[n] : a.document.documentElement[i] : e[i] : (a ? a.scrollTo(r ? x(a).scrollLeft() : o, r ? o : x(a).scrollTop()) : e[i] = o, t) }, e, i, arguments.length, null) }
    });

    function or(e) { return x.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1 }
    x.each({ Height: "height", Width: "width" }, function(e, n) {
        x.each({ padding: "inner" + e, content: n, "": "outer" + e }, function(r, i) {
            x.fn[i] = function(i, o) {
                var a = arguments.length && (r || "boolean" != typeof i),
                    s = r || (i === !0 || o === !0 ? "margin" : "border");
                return x.access(this, function(n, r, i) { var o; return x.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (o = n.documentElement, Math.max(n.body["scroll" + e], o["scroll" + e], n.body["offset" + e], o["offset" + e], o["client" + e])) : i === t ? x.css(n, r, s) : x.style(n, r, i, s) }, n, a ? i : t, a, null)
            }
        })
    }), x.fn.size = function() { return this.length }, x.fn.andSelf = x.fn.addBack, "object" == typeof module && module && "object" == typeof module.exports ? module.exports = x : (e.jQuery = e.$ = x, "function" == typeof define && define.amd && define("jquery", [], function() { return x }))
})(window);
(function(f, d) {
    function g(k, l) { var j, m, e, p = k.nodeName.toLowerCase(); return "area" === p ? (j = k.parentNode, m = j.name, k.href && m && "map" === j.nodeName.toLowerCase() ? (e = f("img[usemap=#" + m + "]")[0], !!e && b(e)) : !1) : (/input|select|textarea|button|object/.test(p) ? !k.disabled : "a" === p ? k.href || l : l) && b(k) }

    function b(a) { return f.expr.filters.visible(a) && !f(a).parents().addBack().filter(function() { return "hidden" === f.css(this, "visibility") }).length }
    var c = 0,
        h = /^ui-id-\d+$/;
    f.ui = f.ui || {}, f.extend(f.ui, { version: "1.10.2", keyCode: { BACKSPACE: 8, COMMA: 188, DELETE: 46, DOWN: 40, END: 35, ENTER: 13, ESCAPE: 27, HOME: 36, LEFT: 37, NUMPAD_ADD: 107, NUMPAD_DECIMAL: 110, NUMPAD_DIVIDE: 111, NUMPAD_ENTER: 108, NUMPAD_MULTIPLY: 106, NUMPAD_SUBTRACT: 109, PAGE_DOWN: 34, PAGE_UP: 33, PERIOD: 190, RIGHT: 39, SPACE: 32, TAB: 9, UP: 38 } }), f.fn.extend({
        focus: function(a) {
            return function(e, j) {
                return "number" == typeof e ? this.each(function() {
                    var i = this;
                    setTimeout(function() { f(i).focus(), j && j.call(i) }, e)
                }) : a.apply(this, arguments)
            }
        }(f.fn.focus),
        scrollParent: function() { var a; return a = f.ui.ie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function() { return /(relative|absolute|fixed)/.test(f.css(this, "position")) && /(auto|scroll)/.test(f.css(this, "overflow") + f.css(this, "overflow-y") + f.css(this, "overflow-x")) }).eq(0) : this.parents().filter(function() { return /(auto|scroll)/.test(f.css(this, "overflow") + f.css(this, "overflow-y") + f.css(this, "overflow-x")) }).eq(0), /fixed/.test(this.css("position")) || !a.length ? f(document) : a },
        zIndex: function(k) {
            if (k !== d) { return this.css("zIndex", k) }
            if (this.length) {
                for (var e, l, j = f(this[0]); j.length && j[0] !== document;) {
                    if (e = j.css("position"), ("absolute" === e || "relative" === e || "fixed" === e) && (l = parseInt(j.css("zIndex"), 10), !isNaN(l) && 0 !== l)) { return l }
                    j = j.parent()
                }
            }
            return 0
        },
        uniqueId: function() { return this.each(function() { this.id || (this.id = "ui-id-" + ++c) }) },
        removeUniqueId: function() { return this.each(function() { h.test(this.id) && f(this).removeAttr("id") }) }
    }), f.extend(f.expr[":"], {
        data: f.expr.createPseudo ? f.expr.createPseudo(function(a) { return function(e) { return !!f.data(e, a) } }) : function(j, e, a) { return !!f.data(j, a[3]) },
        focusable: function(a) { return g(a, !isNaN(f.attr(a, "tabindex"))) },
        tabbable: function(j) {
            var e = f.attr(j, "tabindex"),
                i = isNaN(e);
            return (i || e >= 0) && g(j, !i)
        }
    }), f("<a>").outerWidth(1).jquery || f.each(["Width", "Height"], function(l, j) {
        function k(r, o, n, q) { return f.each(m, function() { o -= parseFloat(f.css(r, "padding" + this)) || 0, n && (o -= parseFloat(f.css(r, "border" + this + "Width")) || 0), q && (o -= parseFloat(f.css(r, "margin" + this)) || 0) }), o }
        var m = "Width" === j ? ["Left", "Right"] : ["Top", "Bottom"],
            e = j.toLowerCase(),
            p = { innerWidth: f.fn.innerWidth, innerHeight: f.fn.innerHeight, outerWidth: f.fn.outerWidth, outerHeight: f.fn.outerHeight };
        f.fn["inner" + j] = function(a) { return a === d ? p["inner" + j].call(this) : this.each(function() { f(this).css(e, k(this, a) + "px") }) }, f.fn["outer" + j] = function(n, a) { return "number" != typeof n ? p["outer" + j].call(this, n) : this.each(function() { f(this).css(e, k(this, n, !0, a) + "px") }) }
    }), f.fn.addBack || (f.fn.addBack = function(a) { return this.add(null == a ? this.prevObject : this.prevObject.filter(a)) }), f("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (f.fn.removeData = function(a) { return function(e) { return arguments.length ? a.call(this, f.camelCase(e)) : a.call(this) } }(f.fn.removeData)), f.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), f.support.selectstart = "onselectstart" in document.createElement("div"), f.fn.extend({ disableSelection: function() { return this.bind((f.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function(a) { a.preventDefault() }) }, enableSelection: function() { return this.unbind(".ui-disableSelection") } }), f.extend(f.ui, {
        plugin: { add: function(m, k, e) { var l, j = f.ui[m].prototype; for (l in e) { j.plugins[l] = j.plugins[l] || [], j.plugins[l].push([k, e[l]]) } }, call: function(k, n, l) { var j, m = k.plugins[n]; if (m && k.element[0].parentNode && 11 !== k.element[0].parentNode.nodeType) { for (j = 0; m.length > j; j++) { k.options[m[j][0]] && m[j][1].apply(k.element, l) } } } },
        hasScroll: function(l, j) {
            if ("hidden" === f(l).css("overflow")) { return !1 }
            var e = j && "left" === j ? "scrollLeft" : "scrollTop",
                k = !1;
            return l[e] > 0 ? !0 : (l[e] = 1, k = l[e] > 0, l[e] = 0, k)
        }
    })
})(jQuery);
(function(b, f) {
    var c = 0,
        a = Array.prototype.slice,
        d = b.cleanData;
    b.cleanData = function(j) {
        for (var g, e = 0; null != (g = j[e]); e++) { try { b(g).triggerHandler("remove") } catch (h) {} }
        d(j)
    }, b.widget = function(p, g, q) {
        var j, e, t, m, v = {},
            k = p.split(".")[0];
        p = p.split(".")[1], j = k + "-" + p, q || (q = g, g = b.Widget), b.expr[":"][j.toLowerCase()] = function(h) { return !!b.data(h, j) }, b[k] = b[k] || {}, e = b[k][p], t = b[k][p] = function(h, l) { return this._createWidget ? (arguments.length && this._createWidget(h, l), f) : new t(h, l) }, b.extend(t, e, { version: q.version, _proto: b.extend({}, q), _childConstructors: [] }), m = new g, m.options = b.widget.extend({}, m.options), b.each(q, function(h, l) {
            return b.isFunction(l) ? (v[h] = function() {
                var i = function() { return g.prototype[h].apply(this, arguments) },
                    n = function(o) { return g.prototype[h].apply(this, o) };
                return function() {
                    var r, o = this._super,
                        u = this._superApply;
                    return this._super = i, this._superApply = n, r = l.apply(this, arguments), this._super = o, this._superApply = u, r
                }
            }(), f) : (v[h] = l, f)
        }), t.prototype = b.widget.extend(m, { widgetEventPrefix: e ? m.widgetEventPrefix : p }, v, { constructor: t, namespace: k, widgetName: p, widgetFullName: j }), e ? (b.each(e._childConstructors, function(n, l) {
            var h = l.prototype;
            b.widget(h.namespace + "." + h.widgetName, t, l._proto)
        }), delete e._childConstructors) : g._childConstructors.push(t), b.widget.bridge(p, t)
    }, b.widget.extend = function(k) { for (var l, g, e = a.call(arguments, 1), m = 0, j = e.length; j > m; m++) { for (l in e[m]) { g = e[m][l], e[m].hasOwnProperty(l) && g !== f && (k[l] = b.isPlainObject(g) ? b.isPlainObject(k[l]) ? b.widget.extend({}, k[l], g) : b.widget.extend({}, g) : g) } } return k }, b.widget.bridge = function(g, h) {
        var e = h.prototype.widgetFullName || g;
        b.fn[g] = function(m) {
            var k = "string" == typeof m,
                i = a.call(arguments, 1),
                j = this;
            return m = !k && i.length ? b.widget.extend.apply(null, [m].concat(i)) : m, k ? this.each(function() { var o, l = b.data(this, e); return l ? b.isFunction(l[m]) && "_" !== m.charAt(0) ? (o = l[m].apply(l, i), o !== l && o !== f ? (j = o && o.jquery ? j.pushStack(o.get()) : o, !1) : f) : b.error("no such method '" + m + "' for " + g + " widget instance") : b.error("cannot call methods on " + g + " prior to initialization; attempted to call method '" + m + "'") }) : this.each(function() {
                var l = b.data(this, e);
                l ? l.option(m || {})._init() : b.data(this, e, new h(m, this))
            }), j
        }
    }, b.Widget = function() {}, b.Widget._childConstructors = [], b.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: { disabled: !1, create: null },
        _createWidget: function(e, g) { g = b(g || this.defaultElement || this)[0], this.element = b(g), this.uuid = c++, this.eventNamespace = "." + this.widgetName + this.uuid, this.options = b.widget.extend({}, this.options, this._getCreateOptions(), e), this.bindings = b(), this.hoverable = b(), this.focusable = b(), g !== this && (b.data(g, this.widgetFullName, this), this._on(!0, this.element, { remove: function(h) { h.target === g && this.destroy() } }), this.document = b(g.style ? g.ownerDocument : g.document || g), this.window = b(this.document[0].defaultView || this.document[0].parentWindow)), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init() },
        _getCreateOptions: b.noop,
        _getCreateEventData: b.noop,
        _create: b.noop,
        _init: b.noop,
        destroy: function() { this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(b.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus") },
        _destroy: b.noop,
        widget: function() { return this.element },
        option: function(j, g) {
            var k, h, e, l = j;
            if (0 === arguments.length) { return b.widget.extend({}, this.options) }
            if ("string" == typeof j) {
                if (l = {}, k = j.split("."), j = k.shift(), k.length) {
                    for (h = l[j] = b.widget.extend({}, this.options[j]), e = 0; k.length - 1 > e; e++) { h[k[e]] = h[k[e]] || {}, h = h[k[e]] }
                    if (j = k.pop(), g === f) { return h[j] === f ? null : h[j] }
                    h[j] = g
                } else {
                    if (g === f) { return this.options[j] === f ? null : this.options[j] }
                    l[j] = g
                }
            }
            return this._setOptions(l), this
        },
        _setOptions: function(g) { var h; for (h in g) { this._setOption(h, g[h]) } return this },
        _setOption: function(g, h) { return this.options[g] = h, "disabled" === g && (this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !!h).attr("aria-disabled", h), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")), this },
        enable: function() { return this._setOption("disabled", !1) },
        disable: function() { return this._setOption("disabled", !0) },
        _on: function(h, e, j) {
            var g, k = this;
            "boolean" != typeof h && (j = e, e = h, h = !1), j ? (e = g = b(e), this.bindings = this.bindings.add(e)) : (j = e, e = this.element, g = this.widget()), b.each(j, function(q, r) {
                function p() { return h || k.options.disabled !== !0 && !b(this).hasClass("ui-state-disabled") ? ("string" == typeof r ? k[r] : r).apply(k, arguments) : f }
                "string" != typeof r && (p.guid = r.guid = r.guid || p.guid || b.guid++);
                var s = q.match(/^(\w+)\s*(.*)$/),
                    m = s[1] + k.eventNamespace,
                    i = s[2];
                i ? g.delegate(i, m, p) : e.bind(m, p)
            })
        },
        _off: function(g, h) { h = (h || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, g.unbind(h).undelegate(h) },
        _delay: function(h, k) {
            function j() { return ("string" == typeof h ? g[h] : h).apply(g, arguments) }
            var g = this;
            return setTimeout(j, k || 0)
        },
        _hoverable: function(e) { this.hoverable = this.hoverable.add(e), this._on(e, { mouseenter: function(g) { b(g.currentTarget).addClass("ui-state-hover") }, mouseleave: function(g) { b(g.currentTarget).removeClass("ui-state-hover") } }) },
        _focusable: function(e) { this.focusable = this.focusable.add(e), this._on(e, { focusin: function(g) { b(g.currentTarget).addClass("ui-state-focus") }, focusout: function(g) { b(g.currentTarget).removeClass("ui-state-focus") } }) },
        _trigger: function(j, k, g) { var l, h, e = this.options[j]; if (g = g || {}, k = b.Event(k), k.type = (j === this.widgetEventPrefix ? j : this.widgetEventPrefix + j).toLowerCase(), k.target = this.element[0], h = k.originalEvent) { for (l in h) { l in k || (k[l] = h[l]) } } return this.element.trigger(k, g), !(b.isFunction(e) && e.apply(this.element[0], [k].concat(g)) === !1 || k.isDefaultPrevented()) }
    }, b.each({ show: "fadeIn", hide: "fadeOut" }, function(g, e) {
        b.Widget.prototype["_" + g] = function(h, j, i) {
            "string" == typeof j && (j = { effect: j });
            var l, k = j ? j === !0 || "number" == typeof j ? e : j.effect || e : g;
            j = j || {}, "number" == typeof j && (j = { duration: j }), l = !b.isEmptyObject(j), j.complete = i, j.delay && h.delay(j.delay), l && b.effects && b.effects.effect[k] ? h[g](j) : k !== g && h[k] ? h[k](j.duration, j.easing, i) : h.queue(function(m) { b(this)[g](), i && i.call(h[0]), m() })
        }
    })
})(jQuery);
(function(f) {
    var g, k, c, m, d = "ui-button ui-widget ui-state-default ui-corner-all",
        p = "ui-state-hover ui-state-active ",
        b = "ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",
        j = function() {
            var a = f(this).find(":ui-button");
            setTimeout(function() { a.button("refresh") }, 1)
        },
        q = function(h) {
            var l = h.name,
                a = h.form,
                o = f([]);
            return l && (l = l.replace(/'/g, "\\'"), o = a ? f(a).find("[name='" + l + "']") : f("[name='" + l + "']", h.ownerDocument).filter(function() { return !this.form })), o
        };
    f.widget("ui.button", {
        version: "1.10.2",
        defaultElement: "<button>",
        options: { disabled: null, text: !0, label: null, icons: { primary: null, secondary: null } },
        _create: function() {
            this.element.closest("form").unbind("reset" + this.eventNamespace).bind("reset" + this.eventNamespace, j), "boolean" != typeof this.options.disabled ? this.options.disabled = !!this.element.prop("disabled") : this.element.prop("disabled", this.options.disabled), this._determineButtonType(), this.hasTitle = !!this.buttonElement.attr("title");
            var i = this,
                l = this.options,
                e = "checkbox" === this.type || "radio" === this.type,
                h = e ? "" : "ui-state-active",
                a = "ui-state-focus";
            null === l.label && (l.label = "input" === this.type ? this.buttonElement.val() : this.buttonElement.html()), this._hoverable(this.buttonElement), this.buttonElement.addClass(d).attr("role", "button").bind("mouseenter" + this.eventNamespace, function() { l.disabled || this === g && f(this).addClass("ui-state-active") }).bind("mouseleave" + this.eventNamespace, function() { l.disabled || f(this).removeClass(h) }).bind("click" + this.eventNamespace, function(n) { l.disabled && (n.preventDefault(), n.stopImmediatePropagation()) }), this.element.bind("focus" + this.eventNamespace, function() { i.buttonElement.addClass(a) }).bind("blur" + this.eventNamespace, function() { i.buttonElement.removeClass(a) }), e && (this.element.bind("change" + this.eventNamespace, function() { m || i.refresh() }), this.buttonElement.bind("mousedown" + this.eventNamespace, function(n) { l.disabled || (m = !1, k = n.pageX, c = n.pageY) }).bind("mouseup" + this.eventNamespace, function(n) { l.disabled || (k !== n.pageX || c !== n.pageY) && (m = !0) })), "checkbox" === this.type ? this.buttonElement.bind("click" + this.eventNamespace, function() { return l.disabled || m ? !1 : undefined }) : "radio" === this.type ? this.buttonElement.bind("click" + this.eventNamespace, function() {
                if (l.disabled || m) { return !1 }
                f(this).addClass("ui-state-active"), i.buttonElement.attr("aria-pressed", "true");
                var n = i.element[0];
                q(n).not(n).map(function() { return f(this).button("widget")[0] }).removeClass("ui-state-active").attr("aria-pressed", "false")
            }) : (this.buttonElement.bind("mousedown" + this.eventNamespace, function() { return l.disabled ? !1 : (f(this).addClass("ui-state-active"), g = this, i.document.one("mouseup", function() { g = null }), undefined) }).bind("mouseup" + this.eventNamespace, function() { return l.disabled ? !1 : (f(this).removeClass("ui-state-active"), undefined) }).bind("keydown" + this.eventNamespace, function(n) { return l.disabled ? !1 : ((n.keyCode === f.ui.keyCode.SPACE || n.keyCode === f.ui.keyCode.ENTER) && f(this).addClass("ui-state-active"), undefined) }).bind("keyup" + this.eventNamespace + " blur" + this.eventNamespace, function() { f(this).removeClass("ui-state-active") }), this.buttonElement.is("a") && this.buttonElement.keyup(function(n) { n.keyCode === f.ui.keyCode.SPACE && f(this).click() })), this._setOption("disabled", l.disabled), this._resetButton()
        },
        _determineButtonType: function() {
            var l, a, h;
            this.type = this.element.is("[type=checkbox]") ? "checkbox" : this.element.is("[type=radio]") ? "radio" : this.element.is("input") ? "input" : "button", "checkbox" === this.type || "radio" === this.type ? (l = this.element.parents().last(), a = "label[for='" + this.element.attr("id") + "']", this.buttonElement = l.find(a), this.buttonElement.length || (l = l.length ? l.siblings() : this.element.siblings(), this.buttonElement = l.filter(a), this.buttonElement.length || (this.buttonElement = l.find(a))), this.element.addClass("ui-helper-hidden-accessible"), h = this.element.is(":checked"), h && this.buttonElement.addClass("ui-state-active"), this.buttonElement.prop("aria-pressed", h)) : this.buttonElement = this.element
        },
        widget: function() { return this.buttonElement },
        _destroy: function() { this.element.removeClass("ui-helper-hidden-accessible"), this.buttonElement.removeClass(d + " " + p + " " + b).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()), this.hasTitle || this.buttonElement.removeAttr("title") },
        _setOption: function(h, a) { return this._super(h, a), "disabled" === h ? (a ? this.element.prop("disabled", !0) : this.element.prop("disabled", !1), undefined) : (this._resetButton(), undefined) },
        refresh: function() {
            var a = this.element.is("input, button") ? this.element.is(":disabled") : this.element.hasClass("ui-button-disabled");
            a !== this.options.disabled && this._setOption("disabled", a), "radio" === this.type ? q(this.element[0]).each(function() { f(this).is(":checked") ? f(this).button("widget").addClass("ui-state-active").attr("aria-pressed", "true") : f(this).button("widget").removeClass("ui-state-active").attr("aria-pressed", "false") }) : "checkbox" === this.type && (this.element.is(":checked") ? this.buttonElement.addClass("ui-state-active").attr("aria-pressed", "true") : this.buttonElement.removeClass("ui-state-active").attr("aria-pressed", "false"))
        },
        _resetButton: function() {
            if ("input" === this.type) { return this.options.label && this.element.val(this.options.label), undefined }
            var l = this.buttonElement.removeClass(b),
                r = f("<span></span>", this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(l.empty()).text(),
                h = this.options.icons,
                t = h.primary && h.secondary,
                o = [];
            h.primary || h.secondary ? (this.options.text && o.push("ui-button-text-icon" + (t ? "s" : h.primary ? "-primary" : "-secondary")), h.primary && l.prepend("<span class='ui-button-icon-primary ui-icon " + h.primary + "'></span>"), h.secondary && l.append("<span class='ui-button-icon-secondary ui-icon " + h.secondary + "'></span>"), this.options.text || (o.push(t ? "ui-button-icons-only" : "ui-button-icon-only"), this.hasTitle || l.attr("title", f.trim(r)))) : o.push("ui-button-text-only"), l.addClass(o.join(" "))
        }
    }), f.widget("ui.buttonset", {
        version: "1.10.2",
        options: { items: "button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)" },
        _create: function() { this.element.addClass("ui-buttonset") },
        _init: function() { this.refresh() },
        _setOption: function(h, a) { "disabled" === h && this.buttons.button("option", h, a), this._super(h, a) },
        refresh: function() {
            var a = "rtl" === this.element.css("direction");
            this.buttons = this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function() { return f(this).button("widget")[0] }).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(a ? "ui-corner-right" : "ui-corner-left").end().filter(":last").addClass(a ? "ui-corner-left" : "ui-corner-right").end().end()
        },
        _destroy: function() { this.element.removeClass("ui-buttonset"), this.buttons.map(function() { return f(this).button("widget")[0] }).removeClass("ui-corner-left ui-corner-right").end().button("destroy") }
    })
})(jQuery);
(function(a) {
    var b = !1;
    a(document).mouseup(function() { b = !1 }), a.widget("ui.mouse", {
        version: "1.10.2",
        options: { cancel: "input,textarea,button,select,option", distance: 1, delay: 0 },
        _mouseInit: function() {
            var c = this;
            this.element.bind("mousedown." + this.widgetName, function(d) { return c._mouseDown(d) }).bind("click." + this.widgetName, function(d) { return !0 === a.data(d.target, c.widgetName + ".preventClickEvent") ? (a.removeData(d.target, c.widgetName + ".preventClickEvent"), d.stopImmediatePropagation(), !1) : undefined }), this.started = !1
        },
        _mouseDestroy: function() { this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && a(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate) },
        _mouseDown: function(e) {
            if (!b) {
                this._mouseStarted && this._mouseUp(e), this._mouseDownEvent = e;
                var c = this,
                    f = 1 === e.which,
                    d = "string" == typeof this.options.cancel && e.target.nodeName ? a(e.target).closest(this.options.cancel).length : !1;
                return f && !d && this._mouseCapture(e) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() { c.mouseDelayMet = !0 }, this.options.delay)), this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = this._mouseStart(e) !== !1, !this._mouseStarted) ? (e.preventDefault(), !0) : (!0 === a.data(e.target, this.widgetName + ".preventClickEvent") && a.removeData(e.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(g) { return c._mouseMove(g) }, this._mouseUpDelegate = function(g) { return c._mouseUp(g) }, a(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), e.preventDefault(), b = !0, !0)) : !0
            }
        },
        _mouseMove: function(c) { return a.ui.ie && (!document.documentMode || 9 > document.documentMode) && !c.button ? this._mouseUp(c) : this._mouseStarted ? (this._mouseDrag(c), c.preventDefault()) : (this._mouseDistanceMet(c) && this._mouseDelayMet(c) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, c) !== !1, this._mouseStarted ? this._mouseDrag(c) : this._mouseUp(c)), !this._mouseStarted) },
        _mouseUp: function(c) { return a(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, c.target === this._mouseDownEvent.target && a.data(c.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(c)), !1 },
        _mouseDistanceMet: function(c) { return Math.max(Math.abs(this._mouseDownEvent.pageX - c.pageX), Math.abs(this._mouseDownEvent.pageY - c.pageY)) >= this.options.distance },
        _mouseDelayMet: function() { return this.mouseDelayMet },
        _mouseStart: function() {},
        _mouseDrag: function() {},
        _mouseStop: function() {},
        _mouseCapture: function() { return !0 }
    })
})(jQuery);
(function(a) {
    a.widget("ui.draggable", a.ui.mouse, {
        version: "1.10.2",
        widgetEventPrefix: "drag",
        options: { addClasses: !0, appendTo: "parent", axis: !1, connectToSortable: !1, containment: !1, cursor: "auto", cursorAt: !1, grid: !1, handle: !1, helper: "original", iframeFix: !1, opacity: !1, refreshPositions: !1, revert: !1, revertDuration: 500, scope: "default", scroll: !0, scrollSensitivity: 20, scrollSpeed: 20, snap: !1, snapMode: "both", snapTolerance: 20, stack: !1, zIndex: !1, drag: null, start: null, stop: null },
        _create: function() { "original" !== this.options.helper || /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative"), this.options.addClasses && this.element.addClass("ui-draggable"), this.options.disabled && this.element.addClass("ui-draggable-disabled"), this._mouseInit() },
        _destroy: function() { this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"), this._mouseDestroy() },
        _mouseCapture: function(c) { var b = this.options; return this.helper || b.disabled || a(c.target).closest(".ui-resizable-handle").length > 0 ? !1 : (this.handle = this._getHandle(c), this.handle ? (a(b.iframeFix === !0 ? "iframe" : b.iframeFix).each(function() { a("<div class='ui-draggable-iframeFix' style='background: #fff;'></div>").css({ width: this.offsetWidth + "px", height: this.offsetHeight + "px", position: "absolute", opacity: "0.001", zIndex: 1000 }).css(a(this).offset()).appendTo("body") }), !0) : !1) },
        _mouseStart: function(c) { var b = this.options; return this.helper = this._createHelper(c), this.helper.addClass("ui-draggable-dragging"), this._cacheHelperProportions(), a.ui.ddmanager && (a.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(), this.offset = this.positionAbs = this.element.offset(), this.offset = { top: this.offset.top - this.margins.top, left: this.offset.left - this.margins.left }, a.extend(this.offset, { click: { left: c.pageX - this.offset.left, top: c.pageY - this.offset.top }, parent: this._getParentOffset(), relative: this._getRelativeOffset() }), this.originalPosition = this.position = this._generatePosition(c), this.originalPageX = c.pageX, this.originalPageY = c.pageY, b.cursorAt && this._adjustOffsetFromHelper(b.cursorAt), b.containment && this._setContainment(), this._trigger("start", c) === !1 ? (this._clear(), !1) : (this._cacheHelperProportions(), a.ui.ddmanager && !b.dropBehaviour && a.ui.ddmanager.prepareOffsets(this, c), this._mouseDrag(c, !0), a.ui.ddmanager && a.ui.ddmanager.dragStart(this, c), !0) },
        _mouseDrag: function(d, c) {
            if (this.position = this._generatePosition(d), this.positionAbs = this._convertPositionTo("absolute"), !c) {
                var b = this._uiHash();
                if (this._trigger("drag", d, b) === !1) { return this._mouseUp({}), !1 }
                this.position = b.position
            }
            return this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), a.ui.ddmanager && a.ui.ddmanager.drag(this, d), !1
        },
        _mouseStop: function(f) {
            var d, b = this,
                e = !1,
                c = !1;
            for (a.ui.ddmanager && !this.options.dropBehaviour && (c = a.ui.ddmanager.drop(this, f)), this.dropped && (c = this.dropped, this.dropped = !1), d = this.element[0]; d && (d = d.parentNode);) { d === document && (e = !0) }
            return e || "original" !== this.options.helper ? ("invalid" === this.options.revert && !c || "valid" === this.options.revert && c || this.options.revert === !0 || a.isFunction(this.options.revert) && this.options.revert.call(this.element, c) ? a(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() { b._trigger("stop", f) !== !1 && b._clear() }) : this._trigger("stop", f) !== !1 && this._clear(), !1) : !1
        },
        _mouseUp: function(b) { return a("div.ui-draggable-iframeFix").each(function() { this.parentNode.removeChild(this) }), a.ui.ddmanager && a.ui.ddmanager.dragStop(this, b), a.ui.mouse.prototype._mouseUp.call(this, b) },
        cancel: function() { return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(), this },
        _getHandle: function(b) { return this.options.handle ? !!a(b.target).closest(this.element.find(this.options.handle)).length : !0 },
        _createHelper: function(d) {
            var c = this.options,
                b = a.isFunction(c.helper) ? a(c.helper.apply(this.element[0], [d])) : "clone" === c.helper ? this.element.clone().removeAttr("id") : this.element;
            return b.parents("body").length || b.appendTo("parent" === c.appendTo ? this.element[0].parentNode : c.appendTo), b[0] === this.element[0] || /(fixed|absolute)/.test(b.css("position")) || b.css("position", "absolute"), b
        },
        _adjustOffsetFromHelper: function(b) { "string" == typeof b && (b = b.split(" ")), a.isArray(b) && (b = { left: +b[0], top: +b[1] || 0 }), "left" in b && (this.offset.click.left = b.left + this.margins.left), "right" in b && (this.offset.click.left = this.helperProportions.width - b.right + this.margins.left), "top" in b && (this.offset.click.top = b.top + this.margins.top), "bottom" in b && (this.offset.click.top = this.helperProportions.height - b.bottom + this.margins.top) },
        _getParentOffset: function() { this.offsetParent = this.helper.offsetParent(); var b = this.offsetParent.offset(); return "absolute" === this.cssPosition && this.scrollParent[0] !== document && a.contains(this.scrollParent[0], this.offsetParent[0]) && (b.left += this.scrollParent.scrollLeft(), b.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === document.body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && a.ui.ie) && (b = { top: 0, left: 0 }), { top: b.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0), left: b.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0) } },
        _getRelativeOffset: function() { if ("relative" === this.cssPosition) { var b = this.element.position(); return { top: b.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(), left: b.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft() } } return { top: 0, left: 0 } },
        _cacheMargins: function() { this.margins = { left: parseInt(this.element.css("marginLeft"), 10) || 0, top: parseInt(this.element.css("marginTop"), 10) || 0, right: parseInt(this.element.css("marginRight"), 10) || 0, bottom: parseInt(this.element.css("marginBottom"), 10) || 0 } },
        _cacheHelperProportions: function() { this.helperProportions = { width: this.helper.outerWidth(), height: this.helper.outerHeight() } },
        _setContainment: function() {
            var e, c, b, d = this.options;
            if ("parent" === d.containment && (d.containment = this.helper[0].parentNode), ("document" === d.containment || "window" === d.containment) && (this.containment = ["document" === d.containment ? 0 : a(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, "document" === d.containment ? 0 : a(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, ("document" === d.containment ? 0 : a(window).scrollLeft()) + a("document" === d.containment ? document : window).width() - this.helperProportions.width - this.margins.left, ("document" === d.containment ? 0 : a(window).scrollTop()) + (a("document" === d.containment ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), /^(document|window|parent)$/.test(d.containment) || d.containment.constructor === Array) { d.containment.constructor === Array && (this.containment = d.containment) } else {
                if (c = a(d.containment), b = c[0], !b) { return }
                e = "hidden" !== a(b).css("overflow"), this.containment = [(parseInt(a(b).css("borderLeftWidth"), 10) || 0) + (parseInt(a(b).css("paddingLeft"), 10) || 0), (parseInt(a(b).css("borderTopWidth"), 10) || 0) + (parseInt(a(b).css("paddingTop"), 10) || 0), (e ? Math.max(b.scrollWidth, b.offsetWidth) : b.offsetWidth) - (parseInt(a(b).css("borderRightWidth"), 10) || 0) - (parseInt(a(b).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (e ? Math.max(b.scrollHeight, b.offsetHeight) : b.offsetHeight) - (parseInt(a(b).css("borderBottomWidth"), 10) || 0) - (parseInt(a(b).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relative_container = c
            }
        },
        _convertPositionTo: function(f, d) {
            d || (d = this.position);
            var b = "absolute" === f ? 1 : -1,
                e = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && a.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                c = /(html|body)/i.test(e[0].tagName);
            return { top: d.top + this.offset.relative.top * b + this.offset.parent.top * b - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : c ? 0 : e.scrollTop()) * b, left: d.left + this.offset.relative.left * b + this.offset.parent.left * b - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : c ? 0 : e.scrollLeft()) * b }
        },
        _generatePosition: function(e) {
            var j, c, k, d, m = this.options,
                b = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && a.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                g = /(html|body)/i.test(b[0].tagName),
                p = e.pageX,
                f = e.pageY;
            return this.originalPosition && (this.containment && (this.relative_container ? (c = this.relative_container.offset(), j = [this.containment[0] + c.left, this.containment[1] + c.top, this.containment[2] + c.left, this.containment[3] + c.top]) : j = this.containment, e.pageX - this.offset.click.left < j[0] && (p = j[0] + this.offset.click.left), e.pageY - this.offset.click.top < j[1] && (f = j[1] + this.offset.click.top), e.pageX - this.offset.click.left > j[2] && (p = j[2] + this.offset.click.left), e.pageY - this.offset.click.top > j[3] && (f = j[3] + this.offset.click.top)), m.grid && (k = m.grid[1] ? this.originalPageY + Math.round((f - this.originalPageY) / m.grid[1]) * m.grid[1] : this.originalPageY, f = j ? k - this.offset.click.top >= j[1] || k - this.offset.click.top > j[3] ? k : k - this.offset.click.top >= j[1] ? k - m.grid[1] : k + m.grid[1] : k, d = m.grid[0] ? this.originalPageX + Math.round((p - this.originalPageX) / m.grid[0]) * m.grid[0] : this.originalPageX, p = j ? d - this.offset.click.left >= j[0] || d - this.offset.click.left > j[2] ? d : d - this.offset.click.left >= j[0] ? d - m.grid[0] : d + m.grid[0] : d)), { top: f - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : g ? 0 : b.scrollTop()), left: p - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : g ? 0 : b.scrollLeft()) }
        },
        _clear: function() { this.helper.removeClass("ui-draggable-dragging"), this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1 },
        _trigger: function(d, c, b) { return b = b || this._uiHash(), a.ui.plugin.call(this, d, [c, b]), "drag" === d && (this.positionAbs = this._convertPositionTo("absolute")), a.Widget.prototype._trigger.call(this, d, c, b) },
        plugins: {},
        _uiHash: function() { return { helper: this.helper, position: this.position, originalPosition: this.originalPosition, offset: this.positionAbs } }
    }), a.ui.plugin.add("draggable", "connectToSortable", {
        start: function(f, d) {
            var b = a(this).data("ui-draggable"),
                e = b.options,
                c = a.extend({}, d, { item: b.element });
            b.sortables = [], a(e.connectToSortable).each(function() {
                var g = a.data(this, "ui-sortable");
                g && !g.options.disabled && (b.sortables.push({ instance: g, shouldRevert: g.options.revert }), g.refreshPositions(), g._trigger("activate", f, c))
            })
        },
        stop: function(e, c) {
            var b = a(this).data("ui-draggable"),
                d = a.extend({}, c, { item: b.element });
            a.each(b.sortables, function() { this.instance.isOver ? (this.instance.isOver = 0, b.cancelHelperRemoval = !0, this.instance.cancelHelperRemoval = !1, this.shouldRevert && (this.instance.options.revert = this.shouldRevert), this.instance._mouseStop(e), this.instance.options.helper = this.instance.options._helper, "original" === b.options.helper && this.instance.currentItem.css({ top: "auto", left: "auto" })) : (this.instance.cancelHelperRemoval = !1, this.instance._trigger("deactivate", e, d)) })
        },
        drag: function(e, c) {
            var b = a(this).data("ui-draggable"),
                d = this;
            a.each(b.sortables, function() {
                var g = !1,
                    f = this;
                this.instance.positionAbs = b.positionAbs, this.instance.helperProportions = b.helperProportions, this.instance.offset.click = b.offset.click, this.instance._intersectsWith(this.instance.containerCache) && (g = !0, a.each(b.sortables, function() { return this.instance.positionAbs = b.positionAbs, this.instance.helperProportions = b.helperProportions, this.instance.offset.click = b.offset.click, this !== f && this.instance._intersectsWith(this.instance.containerCache) && a.contains(f.instance.element[0], this.instance.element[0]) && (g = !1), g })), g ? (this.instance.isOver || (this.instance.isOver = 1, this.instance.currentItem = a(d).clone().removeAttr("id").appendTo(this.instance.element).data("ui-sortable-item", !0), this.instance.options._helper = this.instance.options.helper, this.instance.options.helper = function() { return c.helper[0] }, e.target = this.instance.currentItem[0], this.instance._mouseCapture(e, !0), this.instance._mouseStart(e, !0, !0), this.instance.offset.click.top = b.offset.click.top, this.instance.offset.click.left = b.offset.click.left, this.instance.offset.parent.left -= b.offset.parent.left - this.instance.offset.parent.left, this.instance.offset.parent.top -= b.offset.parent.top - this.instance.offset.parent.top, b._trigger("toSortable", e), b.dropped = this.instance.element, b.currentItem = b.element, this.instance.fromOutside = b), this.instance.currentItem && this.instance._mouseDrag(e)) : this.instance.isOver && (this.instance.isOver = 0, this.instance.cancelHelperRemoval = !0, this.instance.options.revert = !1, this.instance._trigger("out", e, this.instance._uiHash(this.instance)), this.instance._mouseStop(e, !0), this.instance.options.helper = this.instance.options._helper, this.instance.currentItem.remove(), this.instance.placeholder && this.instance.placeholder.remove(), b._trigger("fromSortable", e), b.dropped = !1)
            })
        }
    }), a.ui.plugin.add("draggable", "cursor", {
        start: function() {
            var c = a("body"),
                b = a(this).data("ui-draggable").options;
            c.css("cursor") && (b._cursor = c.css("cursor")), c.css("cursor", b.cursor)
        },
        stop: function() {
            var b = a(this).data("ui-draggable").options;
            b._cursor && a("body").css("cursor", b._cursor)
        }
    }), a.ui.plugin.add("draggable", "opacity", {
        start: function(e, c) {
            var b = a(c.helper),
                d = a(this).data("ui-draggable").options;
            b.css("opacity") && (d._opacity = b.css("opacity")), b.css("opacity", d.opacity)
        },
        stop: function(d, c) {
            var b = a(this).data("ui-draggable").options;
            b._opacity && a(c.helper).css("opacity", b._opacity)
        }
    }), a.ui.plugin.add("draggable", "scroll", {
        start: function() {
            var b = a(this).data("ui-draggable");
            b.scrollParent[0] !== document && "HTML" !== b.scrollParent[0].tagName && (b.overflowOffset = b.scrollParent.offset())
        },
        drag: function(e) {
            var c = a(this).data("ui-draggable"),
                b = c.options,
                d = !1;
            c.scrollParent[0] !== document && "HTML" !== c.scrollParent[0].tagName ? (b.axis && "x" === b.axis || (c.overflowOffset.top + c.scrollParent[0].offsetHeight - e.pageY < b.scrollSensitivity ? c.scrollParent[0].scrollTop = d = c.scrollParent[0].scrollTop + b.scrollSpeed : e.pageY - c.overflowOffset.top < b.scrollSensitivity && (c.scrollParent[0].scrollTop = d = c.scrollParent[0].scrollTop - b.scrollSpeed)), b.axis && "y" === b.axis || (c.overflowOffset.left + c.scrollParent[0].offsetWidth - e.pageX < b.scrollSensitivity ? c.scrollParent[0].scrollLeft = d = c.scrollParent[0].scrollLeft + b.scrollSpeed : e.pageX - c.overflowOffset.left < b.scrollSensitivity && (c.scrollParent[0].scrollLeft = d = c.scrollParent[0].scrollLeft - b.scrollSpeed))) : (b.axis && "x" === b.axis || (e.pageY - a(document).scrollTop() < b.scrollSensitivity ? d = a(document).scrollTop(a(document).scrollTop() - b.scrollSpeed) : a(window).height() - (e.pageY - a(document).scrollTop()) < b.scrollSensitivity && (d = a(document).scrollTop(a(document).scrollTop() + b.scrollSpeed))), b.axis && "y" === b.axis || (e.pageX - a(document).scrollLeft() < b.scrollSensitivity ? d = a(document).scrollLeft(a(document).scrollLeft() - b.scrollSpeed) : a(window).width() - (e.pageX - a(document).scrollLeft()) < b.scrollSensitivity && (d = a(document).scrollLeft(a(document).scrollLeft() + b.scrollSpeed)))), d !== !1 && a.ui.ddmanager && !b.dropBehaviour && a.ui.ddmanager.prepareOffsets(c, e)
        }
    }), a.ui.plugin.add("draggable", "snap", {
        start: function() {
            var c = a(this).data("ui-draggable"),
                b = c.options;
            c.snapElements = [], a(b.snap.constructor !== String ? b.snap.items || ":data(ui-draggable)" : b.snap).each(function() {
                var d = a(this),
                    e = d.offset();
                this !== c.element[0] && c.snapElements.push({ item: this, width: d.outerWidth(), height: d.outerHeight(), top: e.top, left: e.left })
            })
        },
        drag: function(D, G) {
            var A, H, j, I, z, F, J, E, e, w, B = a(this).data("ui-draggable"),
                k = B.options,
                K = k.snapTolerance,
                q = G.offset.left,
                C = q + B.helperProportions.width,
                x = G.offset.top,
                L = x + B.helperProportions.height;
            for (e = B.snapElements.length - 1; e >= 0; e--) { z = B.snapElements[e].left, F = z + B.snapElements[e].width, J = B.snapElements[e].top, E = J + B.snapElements[e].height, q > z - K && F + K > q && x > J - K && E + K > x || q > z - K && F + K > q && L > J - K && E + K > L || C > z - K && F + K > C && x > J - K && E + K > x || C > z - K && F + K > C && L > J - K && E + K > L ? ("inner" !== k.snapMode && (A = K >= Math.abs(J - L), H = K >= Math.abs(E - x), j = K >= Math.abs(z - C), I = K >= Math.abs(F - q), A && (G.position.top = B._convertPositionTo("relative", { top: J - B.helperProportions.height, left: 0 }).top - B.margins.top), H && (G.position.top = B._convertPositionTo("relative", { top: E, left: 0 }).top - B.margins.top), j && (G.position.left = B._convertPositionTo("relative", { top: 0, left: z - B.helperProportions.width }).left - B.margins.left), I && (G.position.left = B._convertPositionTo("relative", { top: 0, left: F }).left - B.margins.left)), w = A || H || j || I, "outer" !== k.snapMode && (A = K >= Math.abs(J - x), H = K >= Math.abs(E - L), j = K >= Math.abs(z - q), I = K >= Math.abs(F - C), A && (G.position.top = B._convertPositionTo("relative", { top: J, left: 0 }).top - B.margins.top), H && (G.position.top = B._convertPositionTo("relative", { top: E - B.helperProportions.height, left: 0 }).top - B.margins.top), j && (G.position.left = B._convertPositionTo("relative", { top: 0, left: z }).left - B.margins.left), I && (G.position.left = B._convertPositionTo("relative", { top: 0, left: F - B.helperProportions.width }).left - B.margins.left)), !B.snapElements[e].snapping && (A || H || j || I || w) && B.options.snap.snap && B.options.snap.snap.call(B.element, D, a.extend(B._uiHash(), { snapItem: B.snapElements[e].item })), B.snapElements[e].snapping = A || H || j || I || w) : (B.snapElements[e].snapping && B.options.snap.release && B.options.snap.release.call(B.element, D, a.extend(B._uiHash(), { snapItem: B.snapElements[e].item })), B.snapElements[e].snapping = !1) }
        }
    }), a.ui.plugin.add("draggable", "stack", {
        start: function() {
            var d, c = this.data("ui-draggable").options,
                b = a.makeArray(a(c.stack)).sort(function(f, e) { return (parseInt(a(f).css("zIndex"), 10) || 0) - (parseInt(a(e).css("zIndex"), 10) || 0) });
            b.length && (d = parseInt(a(b[0]).css("zIndex"), 10) || 0, a(b).each(function(e) { a(this).css("zIndex", d + e) }), this.css("zIndex", d + b.length))
        }
    }), a.ui.plugin.add("draggable", "zIndex", {
        start: function(e, c) {
            var b = a(c.helper),
                d = a(this).data("ui-draggable").options;
            b.css("zIndex") && (d._zIndex = b.css("zIndex")), b.css("zIndex", d.zIndex)
        },
        stop: function(d, c) {
            var b = a(this).data("ui-draggable").options;
            b._zIndex && a(c.helper).css("zIndex", b._zIndex)
        }
    })
})(jQuery);
(function(x, m) {
    function A(d, a, c) { return [parseFloat(d[0]) * (w.test(d[0]) ? a / 100 : 1), parseFloat(d[1]) * (w.test(d[1]) ? c / 100 : 1)] }

    function v(a, c) { return parseInt(x.css(a, c), 10) || 0 }

    function B(a) { var c = a[0]; return 9 === c.nodeType ? { width: a.width(), height: a.height(), offset: { top: 0, left: 0 } } : x.isWindow(c) ? { width: a.width(), height: a.height(), offset: { top: a.scrollTop(), left: a.scrollLeft() } } : c.preventDefault ? { width: 0, height: 0, offset: { top: c.pageY, left: c.pageX } } : { width: a.outerWidth(), height: a.outerHeight(), offset: a.offset() } }
    x.ui = x.ui || {};
    var g, C = Math.max,
        q = Math.abs,
        z = Math.round,
        D = /left|center|right/,
        b = /top|center|bottom/,
        y = /[\+\-]\d+(\.[\d]+)?%?/,
        k = /^\w+/,
        w = /%$/,
        j = x.fn.position;
    x.position = {
            scrollbarWidth: function() {
                if (g !== m) { return g }
                var c, a, d = x("<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
                    e = d.children()[0];
                return x("body").append(d), c = e.offsetWidth, d.css("overflow", "scroll"), a = e.offsetWidth, c === a && (a = d[0].clientWidth), d.remove(), g = c - a
            },
            getScrollInfo: function(d) {
                var h = d.isWindow ? "" : d.element.css("overflow-x"),
                    c = d.isWindow ? "" : d.element.css("overflow-y"),
                    l = "scroll" === h || "auto" === h && d.width < d.element[0].scrollWidth,
                    f = "scroll" === c || "auto" === c && d.height < d.element[0].scrollHeight;
                return { width: f ? x.position.scrollbarWidth() : 0, height: l ? x.position.scrollbarWidth() : 0 }
            },
            getWithinInfo: function(c) {
                var d = x(c || window),
                    a = x.isWindow(d[0]);
                return { element: d, isWindow: a, offset: d.offset() || { left: 0, top: 0 }, scrollLeft: d.scrollLeft(), scrollTop: d.scrollTop(), width: a ? d.width() : d.outerWidth(), height: a ? d.height() : d.outerHeight() }
            }
        }, x.fn.position = function(l) {
            if (!l || !l.of) { return j.apply(this, arguments) }
            l = x.extend({}, l);
            var d, f, u, h, n, c, t = x(l.of),
                s = x.position.getWithinInfo(l.within),
                i = x.position.getScrollInfo(s),
                r = (l.collision || "flip").split(" "),
                o = {};
            return c = B(t), t[0].preventDefault && (l.at = "left top"), f = c.width, u = c.height, h = c.offset, n = x.extend({}, h), x.each(["my", "at"], function() {
                var p, e, a = (l[this] || "").split(" ");
                1 === a.length && (a = D.test(a[0]) ? a.concat(["center"]) : b.test(a[0]) ? ["center"].concat(a) : ["center", "center"]), a[0] = D.test(a[0]) ? a[0] : "center", a[1] = b.test(a[1]) ? a[1] : "center", p = y.exec(a[0]), e = y.exec(a[1]), o[this] = [p ? p[0] : 0, e ? e[0] : 0], l[this] = [k.exec(a[0])[0], k.exec(a[1])[0]]
            }), 1 === r.length && (r[1] = r[0]), "right" === l.at[0] ? n.left += f : "center" === l.at[0] && (n.left += f / 2), "bottom" === l.at[1] ? n.top += u : "center" === l.at[1] && (n.top += u / 2), d = A(o.at, f, u), n.left += d[0], n.top += d[1], this.each(function() {
                var K, L, e = x(this),
                    H = e.outerWidth(),
                    G = e.outerHeight(),
                    E = v(this, "marginLeft"),
                    a = v(this, "marginTop"),
                    F = H + E + v(this, "marginRight") + i.width,
                    I = G + a + v(this, "marginBottom") + i.height,
                    p = x.extend({}, n),
                    J = A(o.my, e.outerWidth(), e.outerHeight());
                "right" === l.my[0] ? p.left -= H : "center" === l.my[0] && (p.left -= H / 2), "bottom" === l.my[1] ? p.top -= G : "center" === l.my[1] && (p.top -= G / 2), p.left += J[0], p.top += J[1], x.support.offsetFractions || (p.left = z(p.left), p.top = z(p.top)), K = { marginLeft: E, marginTop: a }, x.each(["left", "top"], function(M, N) { x.ui.position[r[M]] && x.ui.position[r[M]][N](p, { targetWidth: f, targetHeight: u, elemWidth: H, elemHeight: G, collisionPosition: K, collisionWidth: F, collisionHeight: I, offset: [d[0] + J[0], d[1] + J[1]], my: l.my, at: l.at, within: s, elem: e }) }), l.using && (L = function(O) {
                    var Q = h.left - p.left,
                        M = Q + f - H,
                        R = h.top - p.top,
                        N = R + u - G,
                        P = { target: { element: t, left: h.left, top: h.top, width: f, height: u }, element: { element: e, left: p.left, top: p.top, width: H, height: G }, horizontal: 0 > M ? "left" : Q > 0 ? "right" : "center", vertical: 0 > N ? "top" : R > 0 ? "bottom" : "middle" };
                    H > f && f > q(Q + M) && (P.horizontal = "center"), G > u && u > q(R + N) && (P.vertical = "middle"), P.important = C(q(Q), q(M)) > C(q(R), q(N)) ? "horizontal" : "vertical", l.using.call(this, O, P)
                }), e.offset(x.extend(p, { using: L }))
            })
        }, x.ui.position = {
            fit: {
                left: function(o, p) {
                    var E, d = p.within,
                        F = d.isWindow ? d.scrollLeft : d.offset.left,
                        f = d.width,
                        c = o.left - p.collisionPosition.marginLeft,
                        u = F - c,
                        G = c + p.collisionWidth - f - F;
                    p.collisionWidth > f ? u > 0 && 0 >= G ? (E = o.left + u + p.collisionWidth - f - F, o.left += u - E) : o.left = G > 0 && 0 >= u ? F : u > G ? F + f - p.collisionWidth : F : u > 0 ? o.left += u : G > 0 ? o.left -= G : o.left = C(o.left - c, o.left)
                },
                top: function(o, p) {
                    var E, d = p.within,
                        F = d.isWindow ? d.scrollTop : d.offset.top,
                        f = p.within.height,
                        c = o.top - p.collisionPosition.marginTop,
                        u = F - c,
                        G = c + p.collisionHeight - f - F;
                    p.collisionHeight > f ? u > 0 && 0 >= G ? (E = o.top + u + p.collisionHeight - f - F, o.top += u - E) : o.top = G > 0 && 0 >= u ? F : u > G ? F + f - p.collisionHeight : F : u > 0 ? o.top += u : G > 0 ? o.top -= G : o.top = C(o.top - c, o.top)
                }
            },
            flip: {
                left: function(K, H) {
                    var N, I, O = H.within,
                        E = O.offset.left + O.scrollLeft,
                        P = O.width,
                        M = O.isWindow ? O.scrollLeft : O.offset.left,
                        Q = K.left - H.collisionPosition.marginLeft,
                        r = Q - M,
                        L = Q + H.collisionWidth - P - M,
                        G = "left" === H.my[0] ? -H.elemWidth : "right" === H.my[0] ? H.elemWidth : 0,
                        J = "left" === H.at[0] ? H.targetWidth : "right" === H.at[0] ? -H.targetWidth : 0,
                        F = -2 * H.offset[0];
                    0 > r ? (N = K.left + G + J + F + H.collisionWidth - P - E, (0 > N || q(r) > N) && (K.left += G + J + F)) : L > 0 && (I = K.left - H.collisionPosition.marginLeft + G + J + F - M, (I > 0 || L > q(I)) && (K.left += G + J + F))
                },
                top: function(K, H) {
                    var N, I, O = H.within,
                        E = O.offset.top + O.scrollTop,
                        P = O.height,
                        M = O.isWindow ? O.scrollTop : O.offset.top,
                        Q = K.top - H.collisionPosition.marginTop,
                        r = Q - M,
                        L = Q + H.collisionHeight - P - M,
                        G = "top" === H.my[1],
                        J = G ? -H.elemHeight : "bottom" === H.my[1] ? H.elemHeight : 0,
                        F = "top" === H.at[1] ? H.targetHeight : "bottom" === H.at[1] ? -H.targetHeight : 0,
                        R = -2 * H.offset[1];
                    0 > r ? (I = K.top + J + F + R + H.collisionHeight - P - E, K.top + J + F + R > r && (0 > I || q(r) > I) && (K.top += J + F + R)) : L > 0 && (N = K.top - H.collisionPosition.marginTop + J + F + R - M, K.top + J + F + R > L && (N > 0 || L > q(N)) && (K.top += J + F + R))
                }
            },
            flipfit: { left: function() { x.ui.position.flip.left.apply(this, arguments), x.ui.position.fit.left.apply(this, arguments) }, top: function() { x.ui.position.flip.top.apply(this, arguments), x.ui.position.fit.top.apply(this, arguments) } }
        },
        function() {
            var h, l, d, p, f, t = document.getElementsByTagName("body")[0],
                c = document.createElement("div");
            h = document.createElement(t ? "div" : "body"), d = { visibility: "hidden", width: 0, height: 0, border: 0, margin: 0, background: "none" }, t && x.extend(d, { position: "absolute", left: "-1000px", top: "-1000px" });
            for (f in d) { h.style[f] = d[f] }
            h.appendChild(c), l = t || document.documentElement, l.insertBefore(h, l.firstChild), c.style.cssText = "position: absolute; left: 10.7432222px;", p = x(c).offset().left, x.support.offsetFractions = p > 10 && 11 > p, h.innerHTML = "", l.removeChild(h)
        }()
})(jQuery);
jQuery.effects || function(a, c) {
    var b = "ui-effects-";
    a.effects = { effect: {} },
        function(q, y) {
            function A(d, h, f) { var i = z[h.type] || {}; return d == null ? f || !h.def ? null : h.def : (d = i.floor ? ~~d : parseFloat(d), isNaN(d) ? h.def : i.mod ? (d + i.mod) % i.mod : 0 > d ? 0 : i.max < d ? i.max : d) }

            function x(e) {
                var d = w(),
                    f = d._rgba = [];
                return e = e.toLowerCase(), g(B, function(o, r) {
                    var h, p = r.re.exec(e),
                        l = p && r.parse(p),
                        n = r.space || "rgba";
                    if (l) { return h = d[n](l), d[D[n].cache] = h[D[n].cache], f = d._rgba = h._rgba, !1 }
                }), f.length ? (f.join() === "0,0,0,0" && q.extend(f, E.transparent), d) : E[e]
            }

            function m(d, h, f) { return f = (f + 1) % 1, f * 6 < 1 ? d + (h - d) * f * 6 : f * 2 < 1 ? h : f * 3 < 2 ? d + (h - d) * (2 / 3 - f) * 6 : d }
            var C = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",
                v = /^([\-+])=\s*(\d+\.?\d*)/,
                B = [{ re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/, parse: function(d) { return [d[1], d[2], d[3], d[4]] } }, { re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/, parse: function(d) { return [d[1] * 2.55, d[2] * 2.55, d[3] * 2.55, d[4]] } }, { re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/, parse: function(d) { return [parseInt(d[1], 16), parseInt(d[2], 16), parseInt(d[3], 16)] } }, { re: /#([a-f0-9])([a-f0-9])([a-f0-9])/, parse: function(d) { return [parseInt(d[1] + d[1], 16), parseInt(d[2] + d[2], 16), parseInt(d[3] + d[3], 16)] } }, { re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/, space: "hsla", parse: function(d) { return [d[1], d[2] / 100, d[3] / 100, d[4]] } }],
                w = q.Color = function(f, e, h, d) { return new q.Color.fn.parse(f, e, h, d) },
                D = { rgba: { props: { red: { idx: 0, type: "byte" }, green: { idx: 1, type: "byte" }, blue: { idx: 2, type: "byte" } } }, hsla: { props: { hue: { idx: 0, type: "degrees" }, saturation: { idx: 1, type: "percent" }, lightness: { idx: 2, type: "percent" } } } },
                z = { "byte": { floor: !0, max: 255 }, percent: { max: 1 }, degrees: { mod: 360, floor: !0 } },
                j = w.support = {},
                k = q("<p>")[0],
                E, g = q.each;
            k.style.cssText = "background-color:rgba(1,1,1,.5)", j.rgba = k.style.backgroundColor.indexOf("rgba") > -1, g(D, function(d, f) { f.cache = "_" + d, f.props.alpha = { idx: 3, type: "percent", def: 1 } }), w.fn = q.extend(w.prototype, {
                parse: function(t, e, s, p) {
                    if (t === y) { return this._rgba = [null, null, null, null], this }
                    if (t.jquery || t.nodeType) { t = q(t).css(e), e = y }
                    var h = this,
                        l = q.type(t),
                        o = this._rgba = [];
                    e !== y && (t = [t, e, s, p], l = "array");
                    if (l === "string") { return this.parse(x(t) || E._default) }
                    if (l === "array") { return g(D.rgba.props, function(d, f) { o[f.idx] = A(t[f.idx], f) }), this }
                    if (l === "object") {
                        return t instanceof w ? g(D, function(d, f) { t[f.cache] && (h[f.cache] = t[f.cache].slice()) }) : g(D, function(f, n) {
                            var d = n.cache;
                            g(n.props, function(i, r) {
                                if (!h[d] && n.to) {
                                    if (i === "alpha" || t[i] == null) { return }
                                    h[d] = n.to(h._rgba)
                                }
                                h[d][r.idx] = A(t[i], r, !0)
                            }), h[d] && q.inArray(null, h[d].slice(0, 3)) < 0 && (h[d][3] = 1, n.from && (h._rgba = n.from(h[d])))
                        }), this
                    }
                },
                is: function(d) {
                    var h = w(d),
                        f = !0,
                        i = this;
                    return g(D, function(n, p) { var l, r = h[p.cache]; return r && (l = i[p.cache] || p.to && p.to(i._rgba) || [], g(p.props, function(o, s) { if (r[s.idx] != null) { return f = r[s.idx] === l[s.idx], f } })), f }), f
                },
                _space: function() {
                    var d = [],
                        f = this;
                    return g(D, function(h, e) { f[e.cache] && d.push(h) }), d.pop()
                },
                transition: function(s, p) {
                    var F = w(s),
                        d = F._space(),
                        u = D[d],
                        h = this.alpha() === 0 ? w("transparent") : this,
                        o = h[u.cache] || u.to(h._rgba),
                        G = o.slice();
                    return F = F[u.cache], g(u.props, function(t, f) {
                        var H = f.idx,
                            l = o[H],
                            I = F[H],
                            n = z[f.type] || {};
                        if (I === null) { return }
                        l === null ? G[H] = I : (n.mod && (I - l > n.mod / 2 ? l += n.mod : l - I > n.mod / 2 && (l -= n.mod)), G[H] = A((I - l) * p + l, f))
                    }), this[d](G)
                },
                blend: function(f) {
                    if (this._rgba[3] === 1) { return this }
                    var e = this._rgba.slice(),
                        h = e.pop(),
                        d = w(f)._rgba;
                    return w(q.map(e, function(i, l) { return (1 - h) * d[l] + h * i }))
                },
                toRgbaString: function() {
                    var e = "rgba(",
                        d = q.map(this._rgba, function(f, h) { return f == null ? h > 2 ? 1 : 0 : f });
                    return d[3] === 1 && (d.pop(), e = "rgb("), e + d.join() + ")"
                },
                toHslaString: function() {
                    var e = "hsla(",
                        d = q.map(this.hsla(), function(f, h) { return f == null && (f = h > 2 ? 1 : 0), h && h < 3 && (f = Math.round(f * 100) + "%"), f });
                    return d[3] === 1 && (d.pop(), e = "hsl("), e + d.join() + ")"
                },
                toHexString: function(e) {
                    var d = this._rgba.slice(),
                        f = d.pop();
                    return e && d.push(~~(f * 255)), "#" + q.map(d, function(h) { return h = (h || 0).toString(16), h.length === 1 ? "0" + h : h }).join("")
                },
                toString: function() { return this._rgba[3] === 0 ? "transparent" : this.toRgbaString() }
            }), w.fn.parse.prototype = w.fn, D.hsla.to = function(J) {
                if (J[0] == null || J[1] == null || J[2] == null) { return [null, null, null, J[3]] }
                var H = J[0] / 255,
                    L = J[1] / 255,
                    d = J[2] / 255,
                    K = J[3],
                    h = Math.max(H, L, d),
                    M = Math.min(H, L, d),
                    I = h - M,
                    p = h + M,
                    F = p * 0.5,
                    N, G;
                return M === h ? N = 0 : H === h ? N = 60 * (L - d) / I + 360 : L === h ? N = 60 * (d - H) / I + 120 : N = 60 * (H - L) / I + 240, I === 0 ? G = 0 : F <= 0.5 ? G = I / p : G = I / (2 - p), [Math.round(N) % 360, G, F, K == null ? 1 : K]
            }, D.hsla.from = function(l) {
                if (l[0] == null || l[1] == null || l[2] == null) { return [null, null, null, l[3]] }
                var h = l[0] / 360,
                    u = l[1],
                    d = l[2],
                    p = l[3],
                    f = d <= 0.5 ? d * (1 + u) : d + u - d * u,
                    F = 2 * d - f;
                return [Math.round(m(F, f, h + 1 / 3) * 255), Math.round(m(F, f, h) * 255), Math.round(m(F, f, h - 1 / 3) * 255), p]
            }, g(D, function(p, l) {
                var r = l.props,
                    h = l.cache,
                    d = l.to,
                    e = l.from;
                w.fn[p] = function(t) {
                    d && !this[h] && (this[h] = d(this._rgba));
                    if (t === y) { return this[h].slice() }
                    var u, s = q.type(t),
                        f = s === "array" || s === "object" ? t : arguments,
                        o = this[h].slice();
                    return g(r, function(i, G) {
                        var F = f[s === "object" ? i : G.idx];
                        F == null && (F = o[G.idx]), o[G.idx] = A(F, G)
                    }), e ? (u = w(e(o)), u[h] = o, u) : w(o)
                }, g(r, function(n, f) {
                    if (w.fn[n]) { return }
                    w.fn[n] = function(i) {
                        var H = q.type(i),
                            G = n === "alpha" ? this._hsla ? "hsla" : "rgba" : p,
                            t = this[G](),
                            F = t[f.idx],
                            I;
                        return H === "undefined" ? F : (H === "function" && (i = i.call(this, F), H = q.type(i)), i == null && f.empty ? this : (H === "string" && (I = v.exec(i), I && (i = F + parseFloat(I[2]) * (I[1] === "+" ? 1 : -1))), t[f.idx] = i, this[G](t)))
                    }
                })
            }), w.hook = function(e) {
                var d = e.split(" ");
                g(d, function(h, f) {
                    q.cssHooks[f] = {
                        set: function(p, l) {
                            var F, G, s = "";
                            if (l !== "transparent" && (q.type(l) !== "string" || (F = x(l)))) {
                                l = w(F || l);
                                if (!j.rgba && l._rgba[3] !== 1) {
                                    G = f === "backgroundColor" ? p.parentNode : p;
                                    while ((s === "" || s === "transparent") && G && G.style) { try { s = q.css(G, "backgroundColor"), G = G.parentNode } catch (n) {} }
                                    l = l.blend(s && s !== "transparent" ? s : "_default")
                                }
                                l = l.toRgbaString()
                            }
                            try { p.style[f] = l } catch (n) {}
                        }
                    }, q.fx.step[f] = function(i) { i.colorInit || (i.start = w(i.elem, f), i.end = w(i.end), i.colorInit = !0), q.cssHooks[f].set(i.elem, i.start.transition(i.end, i.pos)) }
                })
            }, w.hook(C), q.cssHooks.borderColor = { expand: function(d) { var f = {}; return g(["Top", "Right", "Bottom", "Left"], function(h, e) { f["border" + e + "Color"] = d }), f } }, E = q.Color.names = { aqua: "#00ffff", black: "#000000", blue: "#0000ff", fuchsia: "#ff00ff", gray: "#808080", green: "#008000", lime: "#00ff00", maroon: "#800000", navy: "#000080", olive: "#808000", purple: "#800080", red: "#ff0000", silver: "#c0c0c0", teal: "#008080", white: "#ffffff", yellow: "#ffff00", transparent: [null, null, null, 0], _default: "#ffffff" }
        }(jQuery),
        function() {
            function e(l) {
                var k, m, j = l.ownerDocument.defaultView ? l.ownerDocument.defaultView.getComputedStyle(l, null) : l.currentStyle,
                    h = {};
                if (j && j.length && j[0] && j[j[0]]) { m = j.length; while (m--) { k = j[m], typeof j[k] == "string" && (h[a.camelCase(k)] = j[k]) } } else { for (k in j) { typeof j[k] == "string" && (h[k] = j[k]) } }
                return h
            }

            function d(m, l) {
                var k = {},
                    h, j;
                for (h in l) { j = l[h], m[h] !== j && !g[h] && (a.fx.step[h] || !isNaN(parseFloat(j))) && (k[h] = j) }
                return k
            }
            var f = ["add", "remove", "toggle"],
                g = { border: 1, borderBottom: 1, borderColor: 1, borderLeft: 1, borderRight: 1, borderTop: 1, borderWidth: 1, margin: 1, padding: 1 };
            a.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function(i, h) { a.fx.step[h] = function(j) { if (j.end !== "none" && !j.setAttr || j.pos === 1 && !j.setAttr) { jQuery.style(j.elem, h, j.end), j.setAttr = !0 } } }), a.fn.addBack || (a.fn.addBack = function(h) { return this.add(h == null ? this.prevObject : this.prevObject.filter(h)) }), a.effects.animateClass = function(k, l, i, j) {
                var h = a.speed(l, i, j);
                return this.queue(function() {
                    var q = a(this),
                        p = q.attr("class") || "",
                        n, m = h.children ? q.find("*").addBack() : q;
                    m = m.map(function() { var o = a(this); return { el: o, start: e(this) } }), n = function() { a.each(f, function(o, r) { k[r] && q[r + "Class"](k[r]) }) }, n(), m = m.map(function() { return this.end = e(this.el[0]), this.diff = d(this.start, this.end), this }), q.attr("class", p), m = m.map(function() {
                        var s = this,
                            o = a.Deferred(),
                            u = a.extend({}, h, { queue: !1, complete: function() { o.resolve(s) } });
                        return this.el.animate(this.diff, u), o.promise()
                    }), a.when.apply(a, m.get()).done(function() {
                        n(), a.each(arguments, function() {
                            var o = this.el;
                            a.each(this.diff, function(r) { o.css(r, "") })
                        }), h.complete.call(q[0])
                    })
                })
            }, a.fn.extend({ _addClass: a.fn.addClass, addClass: function(k, j, l, h) { return j ? a.effects.animateClass.call(this, { add: k }, j, l, h) : this._addClass(k) }, _removeClass: a.fn.removeClass, removeClass: function(k, j, l, h) { return arguments.length > 1 ? a.effects.animateClass.call(this, { remove: k }, j, l, h) : this._removeClass.apply(this, arguments) }, _toggleClass: a.fn.toggleClass, toggleClass: function(k, m, j, h, l) { return typeof m == "boolean" || m === c ? j ? a.effects.animateClass.call(this, m ? { add: k } : { remove: k }, j, h, l) : this._toggleClass(k, m) : a.effects.animateClass.call(this, { toggle: k }, m, j, h) }, switchClass: function(l, k, m, j, h) { return a.effects.animateClass.call(this, { add: k, remove: l }, m, j, h) } })
        }(),
        function() {
            function e(h, g, j, f) { a.isPlainObject(h) && (g = h, h = h.effect), h = { effect: h }, g == null && (g = {}), a.isFunction(g) && (f = g, j = null, g = {}); if (typeof g == "number" || a.fx.speeds[g]) { f = j, j = g, g = {} } return a.isFunction(j) && (f = j, j = null), g && a.extend(h, g), j = j || g.duration, h.duration = a.fx.off ? 0 : typeof j == "number" ? j : j in a.fx.speeds ? a.fx.speeds[j] : a.fx.speeds._default, h.complete = f || g.complete, h }

            function d(f) { return !f || typeof f == "number" || a.fx.speeds[f] ? !0 : typeof f == "string" && !a.effects.effect[f] }
            a.extend(a.effects, {
                version: "1.10.1",
                save: function(f, g) { for (var h = 0; h < g.length; h++) { g[h] !== null && f.data(b + g[h], f[0].style[g[h]]) } },
                restore: function(g, j) { var h, f; for (f = 0; f < j.length; f++) { j[f] !== null && (h = g.data(b + j[f]), h === c && (h = ""), g.css(j[f], h)) } },
                setMode: function(f, g) { return g === "toggle" && (g = f.is(":hidden") ? "show" : "hide"), g },
                getBaseline: function(f, h) {
                    var g, i;
                    switch (f[0]) {
                        case "top":
                            g = 0;
                            break;
                        case "middle":
                            g = 0.5;
                            break;
                        case "bottom":
                            g = 1;
                            break;
                        default:
                            g = f[0] / h.height
                    }
                    switch (f[1]) {
                        case "left":
                            i = 0;
                            break;
                        case "center":
                            i = 0.5;
                            break;
                        case "right":
                            i = 1;
                            break;
                        default:
                            i = f[1] / h.width
                    }
                    return { x: i, y: g }
                },
                createWrapper: function(h) {
                    if (h.parent().is(".ui-effects-wrapper")) { return h.parent() }
                    var k = { width: h.outerWidth(!0), height: h.outerHeight(!0), "float": h.css("float") },
                        f = a("<div></div>").addClass("ui-effects-wrapper").css({ fontSize: "100%", background: "transparent", border: "none", margin: 0, padding: 0 }),
                        j = { width: h.width(), height: h.height() },
                        g = document.activeElement;
                    try { g.id } catch (l) { g = document.body }
                    return h.wrap(f), (h[0] === g || a.contains(h[0], g)) && a(g).focus(), f = h.parent(), h.css("position") === "static" ? (f.css({ position: "relative" }), h.css({ position: "relative" })) : (a.extend(k, { position: h.css("position"), zIndex: h.css("z-index") }), a.each(["top", "left", "bottom", "right"], function(i, m) { k[m] = h.css(m), isNaN(parseInt(k[m], 10)) && (k[m] = "auto") }), h.css({ position: "relative", top: 0, left: 0, right: "auto", bottom: "auto" })), h.css(j), f.css(k).show()
                },
                removeWrapper: function(g) { var f = document.activeElement; return g.parent().is(".ui-effects-wrapper") && (g.parent().replaceWith(g), (g[0] === f || a.contains(g[0], f)) && a(f).focus()), g },
                setTransition: function(h, g, j, f) {
                    return f = f || {}, a.each(g, function(k, l) {
                        var i = h.cssUnit(l);
                        i[0] > 0 && (f[l] = i[0] * j + i[1])
                    }), f
                }
            }), a.fn.extend({
                effect: function() {
                    function j(p) {
                        function s() { a.isFunction(m) && m.call(q[0]), a.isFunction(p) && p() }
                        var q = a(this),
                            m = h.complete,
                            l = h.mode;
                        (q.is(":hidden") ? l === "hide" : l === "show") ? s(): f.call(q[0], h, s)
                    }
                    var h = e.apply(this, arguments),
                        g = h.mode,
                        k = h.queue,
                        f = a.effects.effect[h.effect];
                    return a.fx.off || !f ? g ? this[g](h.duration, h.complete) : this.each(function() { h.complete && h.complete.call(this) }) : k === !1 ? this.each(j) : this.queue(k || "fx", j)
                },
                _show: a.fn.show,
                show: function(f) { if (d(f)) { return this._show.apply(this, arguments) } var g = e.apply(this, arguments); return g.mode = "show", this.effect.call(this, g) },
                _hide: a.fn.hide,
                hide: function(f) { if (d(f)) { return this._hide.apply(this, arguments) } var g = e.apply(this, arguments); return g.mode = "hide", this.effect.call(this, g) },
                __toggle: a.fn.toggle,
                toggle: function(g) { if (d(g) || typeof g == "boolean" || a.isFunction(g)) { return this.__toggle.apply(this, arguments) } var f = e.apply(this, arguments); return f.mode = "toggle", this.effect.call(this, f) },
                cssUnit: function(g) {
                    var f = this.css(g),
                        h = [];
                    return a.each(["em", "px", "%", "pt"], function(i, j) { f.indexOf(j) > 0 && (h = [parseFloat(f), j]) }), h
                }
            })
        }(),
        function() {
            var d = {};
            a.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function(f, g) { d[g] = function(e) { return Math.pow(e, f + 2) } }), a.extend(d, { Sine: function(f) { return 1 - Math.cos(f * Math.PI / 2) }, Circ: function(f) { return 1 - Math.sqrt(1 - f * f) }, Elastic: function(f) { return f === 0 || f === 1 ? f : -Math.pow(2, 8 * (f - 1)) * Math.sin(((f - 1) * 80 - 7.5) * Math.PI / 15) }, Back: function(f) { return f * f * (3 * f - 2) }, Bounce: function(f) { var h, g = 4; while (f < ((h = Math.pow(2, --g)) - 1) / 11) {} return 1 / Math.pow(4, 3 - g) - 7.5625 * Math.pow((h * 3 - 2) / 22 - f, 2) } }), a.each(d, function(f, e) { a.easing["easeIn" + f] = e, a.easing["easeOut" + f] = function(g) { return 1 - e(1 - g) }, a.easing["easeInOut" + f] = function(g) { return g < 0.5 ? e(g * 2) / 2 : 1 - e(g * -2 + 2) / 2 } })
        }()
}(jQuery);
(function(a) {
    a.effects.effect.fade = function(c, d) {
        var b = a(this),
            f = a.effects.setMode(b, c.mode || "toggle");
        b.animate({ opacity: f }, { queue: !1, duration: c.duration, easing: c.easing, complete: d })
    }
})(jQuery);
(function(c) {
    var a = { buttons: !0, height: !0, maxHeight: !0, maxWidth: !0, minHeight: !0, minWidth: !0, width: !0 },
        b = { maxHeight: !0, maxWidth: !0, minHeight: !0, minWidth: !0 };
    c.widget("ui.dialog", {
        version: "1.10.2",
        options: {
            appendTo: "body",
            autoOpen: !0,
            buttons: [],
            closeOnEscape: !0,
            closeText: "close",
            dialogClass: "",
            draggable: !0,
            hide: null,
            height: "auto",
            maxHeight: null,
            maxWidth: null,
            minHeight: 150,
            minWidth: 150,
            modal: !1,
            position: {
                my: "center",
                at: "center",
                of: window,
                collision: "fit",
                using: function(d) {
                    var f = c(this).css(d).offset().top;
                    0 > f && c(this).css("top", d.top - f)
                }
            },
            resizable: !0,
            show: null,
            title: null,
            width: 300,
            beforeClose: null,
            close: null,
            drag: null,
            dragStart: null,
            dragStop: null,
            focus: null,
            open: null,
            resize: null,
            resizeStart: null,
            resizeStop: null
        },
        _create: function() { this.originalCss = { display: this.element[0].style.display, width: this.element[0].style.width, minHeight: this.element[0].style.minHeight, maxHeight: this.element[0].style.maxHeight, height: this.element[0].style.height }, this.originalPosition = { parent: this.element.parent(), index: this.element.parent().children().index(this.element) }, this.originalTitle = this.element.attr("title"), this.options.title = this.options.title || this.originalTitle, this._createWrapper(), this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(this.uiDialog), this._createTitlebar(), this._createButtonPane(), this.options.draggable && c.fn.draggable && this._makeDraggable(), this.options.resizable && c.fn.resizable && this._makeResizable(), this._isOpen = !1 },
        _init: function() { this.options.autoOpen && this.open() },
        _appendTo: function() { var d = this.options.appendTo; return d && (d.jquery || d.nodeType) ? c(d) : this.document.find(d || "body").eq(0) },
        _destroy: function() {
            var f, d = this.originalPosition;
            this._destroyOverlay(), this.element.removeUniqueId().removeClass("ui-dialog-content ui-widget-content").css(this.originalCss).detach(), this.uiDialog.stop(!0, !0).remove(), this.originalTitle && this.element.attr("title", this.originalTitle), f = d.parent.children().eq(d.index), f.length && f[0] !== this.element[0] ? f.before(this.element) : d.parent.append(this.element)
        },
        widget: function() { return this.uiDialog },
        disable: c.noop,
        enable: c.noop,
        close: function(d) {
            var f = this;
            this._isOpen && this._trigger("beforeClose", d) !== !1 && (this._isOpen = !1, this._destroyOverlay(), this.opener.filter(":focusable").focus().length || c(this.document[0].activeElement).blur(), this._hide(this.uiDialog, this.options.hide, function() { f._trigger("close", d) }))
        },
        isOpen: function() { return this._isOpen },
        moveToTop: function() { this._moveToTop() },
        _moveToTop: function(g, d) { var f = !!this.uiDialog.nextAll(":visible").insertBefore(this.uiDialog).length; return f && !d && this._trigger("focus", g), f },
        open: function() { var d = this; return this._isOpen ? (this._moveToTop() && this._focusTabbable(), undefined) : (this._isOpen = !0, this.opener = c(this.document[0].activeElement), this._size(), this._position(), this._createOverlay(), this._moveToTop(null, !0), this._show(this.uiDialog, this.options.show, function() { d._focusTabbable(), d._trigger("focus") }), this._trigger("open"), undefined) },
        _focusTabbable: function() {
            var d = this.element.find("[autofocus]");
            d.length || (d = this.element.find(":tabbable")), d.length || (d = this.uiDialogButtonPane.find(":tabbable")), d.length || (d = this.uiDialogTitlebarClose.filter(":tabbable")), d.length || (d = this.uiDialog), d.eq(0).focus()
        },
        _keepFocus: function(d) {
            function f() {
                var g = this.document[0].activeElement,
                    h = this.uiDialog[0] === g || c.contains(this.uiDialog[0], g);
                h || this._focusTabbable()
            }
            d.preventDefault(), f.call(this), this._delay(f)
        },
        _createWrapper: function() {
            this.uiDialog = c("<div>").addClass("ui-dialog ui-widget ui-widget-content ui-corner-all ui-front dialog-shadow" + this.options.dialogClass).hide().attr({ tabIndex: -1, role: "dialog" }).appendTo(this._appendTo()), this._on(this.uiDialog, {
                keydown: function(f) {
                    if (this.options.closeOnEscape && !f.isDefaultPrevented() && f.keyCode && f.keyCode === c.ui.keyCode.ESCAPE) { return f.preventDefault(), this.close(f), undefined }
                    if (f.keyCode === c.ui.keyCode.TAB) {
                        var g = this.uiDialog.find(":tabbable"),
                            d = g.filter(":first"),
                            h = g.filter(":last");
                        f.target !== h[0] && f.target !== this.uiDialog[0] || f.shiftKey ? f.target !== d[0] && f.target !== this.uiDialog[0] || !f.shiftKey || (h.focus(1), f.preventDefault()) : (d.focus(1), f.preventDefault())
                    }
                },
                mousedown: function(d) { this._moveToTop(d) && this._focusTabbable() }
            }), this.element.find("[aria-describedby]").length || this.uiDialog.attr({ "aria-describedby": this.element.uniqueId().attr("id") })
        },
        _createTitlebar: function() {
            var d;
            this.uiDialogTitlebar = c("<div>").addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(this.uiDialog), this._on(this.uiDialogTitlebar, { mousedown: function(f) { c(f.target).closest(".ui-dialog-titlebar-close") || this.uiDialog.focus() } }), this.uiDialogTitlebarClose = c("<button></button>").button({ label: this.options.closeText, icons: { primary: "ui-icon-closethick" }, text: !1 }).addClass("ui-dialog-titlebar-close").appendTo(this.uiDialogTitlebar), this._on(this.uiDialogTitlebarClose, { click: function(e) { e.preventDefault(), this.close(e) } }), d = c("<span>").uniqueId().addClass("ui-dialog-title").prependTo(this.uiDialogTitlebar), this._title(d), this.uiDialog.attr({ "aria-labelledby": d.attr("id") })
        },
        _title: function(d) { this.options.title || d.html("&#160;"), d.text(this.options.title) },
        _createButtonPane: function() { this.uiDialogButtonPane = c("<div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"), this.uiButtonSet = c("<div>").addClass("ui-dialog-buttonset").appendTo(this.uiDialogButtonPane), this._createButtons() },
        _createButtons: function() {
            var d = this,
                f = this.options.buttons;
            return this.uiDialogButtonPane.remove(), this.uiButtonSet.empty(), c.isEmptyObject(f) || c.isArray(f) && !f.length ? (this.uiDialog.removeClass("ui-dialog-buttons"), undefined) : (c.each(f, function(h, e) {
                var j, g;
                e = c.isFunction(e) ? { click: e, text: h } : e, e = c.extend({ type: "button" }, e), j = e.click, e.click = function() { j.apply(d.element[0], arguments) }, g = { icons: e.icons, text: e.showText }, delete e.icons, delete e.showText, c("<button></button>", e).button(g).appendTo(d.uiButtonSet)
            }), this.uiDialog.addClass("ui-dialog-buttons"), this.uiDialogButtonPane.appendTo(this.uiDialog), undefined)
        },
        _makeDraggable: function() {
            function f(e) { return { position: e.position, offset: e.offset } }
            var g = this,
                d = this.options;
            this.uiDialog.draggable({ cancel: ".ui-dialog-content, .ui-dialog-titlebar-close", handle: ".ui-dialog-titlebar", containment: "document", start: function(h, e) { c(this).addClass("ui-dialog-dragging"), g._blockFrames(), g._trigger("dragStart", h, f(e)) }, drag: function(e, h) { g._trigger("drag", e, f(h)) }, stop: function(e, h) { d.position = [h.position.left - g.document.scrollLeft(), h.position.top - g.document.scrollTop()], c(this).removeClass("ui-dialog-dragging"), g._unblockFrames(), g._trigger("dragStop", e, f(h)) } })
        },
        _makeResizable: function() {
            function g(e) { return { originalPosition: e.originalPosition, originalSize: e.originalSize, position: e.position, size: e.size } }
            var h = this,
                d = this.options,
                j = d.resizable,
                f = this.uiDialog.css("position"),
                k = "string" == typeof j ? j : "n,e,s,w,se,sw,ne,nw";
            this.uiDialog.resizable({ cancel: ".ui-dialog-content", containment: "document", alsoResize: this.element, maxWidth: d.maxWidth, maxHeight: d.maxHeight, minWidth: d.minWidth, minHeight: this._minHeight(), handles: k, start: function(i, e) { c(this).addClass("ui-dialog-resizing"), h._blockFrames(), h._trigger("resizeStart", i, g(e)) }, resize: function(e, i) { h._trigger("resize", e, g(i)) }, stop: function(e, i) { d.height = c(this).height(), d.width = c(this).width(), c(this).removeClass("ui-dialog-resizing"), h._unblockFrames(), h._trigger("resizeStop", e, g(i)) } }).css("position", f)
        },
        _minHeight: function() { var d = this.options; return "auto" === d.height ? d.minHeight : Math.min(d.minHeight, d.height) },
        _position: function() {
            var d = this.uiDialog.is(":visible");
            d || this.uiDialog.show(), this.uiDialog.position(this.options.position), d || this.uiDialog.hide()
        },
        _setOptions: function(d) {
            var f = this,
                e = !1,
                g = {};
            c.each(d, function(h, i) { f._setOption(h, i), h in a && (e = !0), h in b && (g[h] = i) }), e && (this._size(), this._position()), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", g)
        },
        _setOption: function(j, f) { var g, d, h = this.uiDialog; "dialogClass" === j && h.removeClass(this.options.dialogClass).addClass(f), "disabled" !== j && (this._super(j, f), "appendTo" === j && this.uiDialog.appendTo(this._appendTo()), "buttons" === j && this._createButtons(), "closeText" === j && this.uiDialogTitlebarClose.button({ label: "" + f }), "draggable" === j && (g = h.is(":data(ui-draggable)"), g && !f && h.draggable("destroy"), !g && f && this._makeDraggable()), "position" === j && this._position(), "resizable" === j && (d = h.is(":data(ui-resizable)"), d && !f && h.resizable("destroy"), d && "string" == typeof f && h.resizable("option", "handles", f), d || f === !1 || this._makeResizable()), "title" === j && this._title(this.uiDialogTitlebar.find(".ui-dialog-title"))) },
        _size: function() {
            var h, f, g, d = this.options;
            this.element.show().css({ width: "auto", minHeight: 0, maxHeight: "none", height: 0 }), d.minWidth > d.width && (d.width = d.minWidth), h = this.uiDialog.css({ height: "auto", width: d.width }).outerHeight(), f = Math.max(0, d.minHeight - h), g = "number" == typeof d.maxHeight ? Math.max(0, d.maxHeight - h) : "none", "auto" === d.height ? this.element.css({ minHeight: f, maxHeight: g, height: "auto" }) : this.element.height(Math.max(0, d.height - h)), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight())
        },
        _blockFrames: function() { this.iframeBlocks = this.document.find("iframe").map(function() { var d = c(this); return c("<div>").css({ position: "absolute", width: d.outerWidth(), height: d.outerHeight() }).appendTo(d.parent()).offset(d.offset())[0] }) },
        _unblockFrames: function() { this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks) },
        _allowInteraction: function(d) { return c(d.target).closest(".ui-dialog").length ? !0 : !!c(d.target).closest(".ui-datepicker").length },
        _createOverlay: function() {
            if (this.options.modal) {
                var d = this,
                    f = this.widgetFullName;
                c.ui.dialog.overlayInstances || this._delay(function() { c.ui.dialog.overlayInstances && this.document.bind("focusin.dialog", function(e) { d._allowInteraction(e) || (e.preventDefault(), c(".ui-dialog:visible:last .ui-dialog-content").data(f)._focusTabbable()) }) }), this.overlay = c("<div>").addClass("ui-widget-overlay ui-front").appendTo(this._appendTo()), this._on(this.overlay, { mousedown: "_keepFocus" }), c.ui.dialog.overlayInstances++
            }
        },
        _destroyOverlay: function() { this.options.modal && this.overlay && (c.ui.dialog.overlayInstances--, c.ui.dialog.overlayInstances || this.document.unbind("focusin.dialog"), this.overlay.remove(), this.overlay = null) }
    }), c.ui.dialog.overlayInstances = 0, c.uiBackCompat !== !1 && c.widget("ui.dialog", c.ui.dialog, {
        _position: function() {
            var f, g = this.options.position,
                d = [],
                h = [0, 0];
            g ? (("string" == typeof g || "object" == typeof g && "0" in g) && (d = g.split ? g.split(" ") : [g[0], g[1]], 1 === d.length && (d[1] = d[0]), c.each(["left", "top"], function(j, i) {+d[j] === d[j] && (h[j] = d[j], d[j] = i) }), g = { my: d[0] + (0 > h[0] ? h[0] : "+" + h[0]) + " " + d[1] + (0 > h[1] ? h[1] : "+" + h[1]), at: d.join(" ") }), g = c.extend({}, c.ui.dialog.prototype.options.position, g)) : g = c.ui.dialog.prototype.options.position, f = this.uiDialog.is(":visible"), f || this.uiDialog.show(), this.uiDialog.position(g), f || this.uiDialog.hide()
        }
    })
})(jQuery);
jQuery.extend(jQuery, {
    jfnclose: function() {
        $(".dialog").remove();
        $("#dialog-form").dialog("close")
    },
    jfn: function(c, b, a, f, e) {
        var d = '<div class="dialog" id="dialog-form">' + b + "</div>";
        return $(d).dialog({
            resizable: false,
            width: f || 400,
            modal: true,
            show: { effect: "fade", duration: 300 },
            title: c || "ç”¨æˆ·æ“ä½œ",
            buttons: { "ç¡®å®š": function() { e.call() }, "å–æ¶ˆ": function() { var g = $(this).dialog("close") } },
            close: function(g, h) {
                $(this).remove();
                $(this).dialog("close");
                $("#dialog").dialog("destroy")
            },
            open: function(g, h) {
                $(".ui-dialog-titlebar-close", $(this).parent()).hide();
                $(this).parent().find(".ui-button-text:eq(1)").text(a)
            }
        })
    },
    jinfo: function(b, d, c) {
        var a = '<div class="dialog" id="dialog-form"> ' + d + "</div>";
        return $(a).dialog({
            resizable: false,
            width: c || 400,
            modal: true,
            show: { effect: "fade", duration: 300 },
            title: b || "ç”¨æˆ·æ“ä½œ",
            buttons: { "å…³é—­": function() { var e = $(this).dialog("close") } },
            close: function(f, g) {
                $(this).remove();
                $(this).dialog("close");
                $("#dialog").dialog("destroy")
            }
        })
    },
    jconfirm: function(b, d, e, c) {
        var a = '<div class="dialog" id="dialog-message"> <p style="font-size:16px;font-weight:bold;padding-top:10px;padding-bottom:20px;float:left"> <span class="ui-icon ui-icon-alert" style="float:left;margin-right:10px"></span>' + d + " </p></div>";
        return $(a).dialog({
            resizable: false,
            width: e || 400,
            modal: true,
            show: { effect: "fade", duration: 300 },
            title: b || "æ¸©é¦¨æç¤º",
            buttons: {
                "ç¡®å®š": function() {
                    var f = $(this).dialog("close");
                    c && c.call(f)
                },
                "å–æ¶ˆ": function() { var f = $(this).dialog("close") }
            },
            close: function(f, g) { $("#dialog").dialog("destroy") },
            open: function(f, g) { $(".ui-dialog-titlebar-close", $(this).parent()).hide() }
        })
    },
    jalert: function(b, d, e, c) {
        var a = '<div class="dialog" id="dialog-message"> <p style="font-size:16px;font-weight:bold;padding-top:10px;padding-bottom:20px;float:left"> <span class="ui-icon ui-icon-alert" style="float:left;margin-right:10px"></span>' + d + " </p></div>";
        return $(a).dialog({
            resizable: false,
            width: e || 400,
            modal: true,
            show: { effect: "fade", duration: 300 },
            title: b || "æ¸©é¦¨æç¤º",
            buttons: {
                "ç¡®å®š": function() {
                    var f = $("#dialog").dialog("close");
                    c && c.call(f)
                }
            },
            close: function(f, g) { $("#dialog").dialog("destroy") },
            open: function(f, g) { $(".ui-dialog-titlebar-close", $(this).parent()).hide() }
        })
    },
    jinfotimer: function(a, c, e, d, b) {
        var f = $('<div class="dialog" id="dialog-form"> ' + c + "</div>");
        f[0].timerMax = b || 5;
        return f.dialog({
            resizable: false,
            width: e || 400,
            modal: true,
            closeOnEscape: false,
            show: { effect: "fade", duration: 300 },
            open: function(g, h) {
                $(".ui-dialog-titlebar-close", $(this).parent()).hide();
                var j = this,
                    i = $(this),
                    k = i.parent().find(".ui-button-text").text("ç¡®å®š (" + j.timerMax + ")");
                --j.timerMax;
                j.timer = window.setInterval(function() {
                    k.text("ç¡®å®š (" + j.timerMax + ")");
                    if (j.timerMax-- <= 0) {
                        i.dialog("close");
                        d && d.call(i);
                        window.clearInterval(j.timer)
                    }
                }, 1000)
            },
            title: a || "æ¸©é¦¨æç¤º",
            buttons: {
                "ç¡®å®š": function() {
                    var g = $("#dialog").dialog("close");
                    d && d.call(g);
                    window.clearInterval(this.timer)
                }
            },
            close: function(g, h) {
                window.clearInterval(this.timer);
                $("#dialog").dialog("destroy")
            }
        })
    },
    jalerttimer: function(a, c, e, d, b) {
        var f = $('<div class="dialog" id="dialog-message"> <p style="font-size:16px;font-weight:bold;padding-top:10px;padding-bottom:20px;float:left"> <span class="ui-icon ui-icon-alert" style="float:left;margin-right:10px"></span>' + c + " </p></div>");
        f[0].timerMax = b || 5;
        return f.dialog({
            resizable: false,
            width: e || 400,
            modal: true,
            show: { effect: "fade", duration: 300 },
            open: function(g, h) {
                $(".ui-dialog-titlebar-close", $(this).parent()).hide();
                var j = this,
                    i = $(this),
                    k = i.parent().find(".ui-button-text").text("ç¡®å®š (" + j.timerMax + ")");
                --j.timerMax;
                j.timer = window.setInterval(function() {
                    k.text("ç¡®å®š (" + j.timerMax + ")");
                    if (j.timerMax-- <= 0) {
                        i.dialog("close");
                        d && d.call(i);
                        window.clearInterval(j.timer)
                    }
                }, 1000)
            },
            title: a || "æ¸©é¦¨æç¤º",
            buttons: {
                "ç¡®å®š": function() {
                    var g = $(this).dialog("close");
                    d && d.call(g);
                    window.clearInterval(this.timer)
                }
            },
            close: function(g, h) {
                window.clearInterval(this.timer);
                $("#dialog").dialog("destroy")
            }
        })
    },
    jsuccess: function(a, e, b, d) {
        var c = $('<div class="dialog ui-state-default" id="dialog-message"> <p style="font-size:19px;padding-top:20px;color:#05B014;font-weight:bold"> <img src="/res/css/lib/images/true.png" alt="" style="vertical-align:middle;padding-right:10px;width:32px;height:32px" />' + a + " </p></div>");
        c[0].timerMax = d || 3;
        return c.dialog({
            height: 100,
            width: e || 200,
            resizable: false,
            modal: false,
            show: { effect: "fade", duration: 300 },
            create: function(f, g) { $(".ui-dialog-titlebar-close,.ui-dialog-titlebar", $(this).parent()).hide() },
            open: function(f, g) {
                var i = this,
                    h = $(this);
                --i.timerMax;
                i.timer = window.setInterval(function() {
                    if (i.timerMax-- <= 0) {
                        h.dialog("close");
                        b && b.call(h);
                        window.clearInterval(i.timer)
                    }
                }, 1000)
            },
            close: function() {
                window.clearInterval(this.timer);
                $("#dialog").dialog("destroy")
            }
        })
    }
});
(function(b) {
    b.fn.hoverClass = function(d) {
        var c = this;
        c.each(function(a) { c.eq(a).hover(function() { $(this).addClass(d) }, function() { $(this).removeClass(d) }) });
        return c
    }
})(jQuery);

function globals() {
    var a = this;
    this.ajaxUrl = "/sys/ajax.ashx?t=";
    this.ajaxUcUrl = "/sys/ajaxuc.ashx?t=";
    this.isShowNav = 0;
    this.isShowDropBox = 0;
    this.isShowDropBoxClose = 0;
    this.defaultPageTitle = window.document.title;
    this.intervalMsg = null;
    this.init = function() {
        a.cookieEnabled();
        a.backToTop();
        a.topDrop();
        a.nav();
        a.weixinCodeTop();
        new message().init(a);
        new askFloatWin().init(a);
        a.haoPing();
        return a
    };
    this.cookieEnabled = function() { if (top.location != self.location) { top.location = self.location } if (!navigator.cookieEnabled) { $("body").append("<div class='bar cookie'><p class='wrap'>æ‚¨çš„æµè§ˆå™¨æ²¡æœ‰å¼€å¯CookieåŠŸèƒ½ ã€ä¸ºäº†æ‚¨çš„æ­£å¸¸æµè§ˆè¯·æ¢å¤é»˜è®¤è®¾ç½®ã€‘ï¼Œæ“ä½œï¼šç‚¹å‡»æµè§ˆå™¨èœå•â€œå·¥å…·â€ã€‹æ‰“å¼€â€œInternet é€‰é¡¹â€ã€‹â€œé«˜çº§â€ã€‹â€œè¿˜åŽŸé«˜çº§è®¾ç½®â€ã€‹â€œç¡®å®šâ€å®Œæˆ</p></div>") } };
    this.topDrop = function() {
        $("#homefun,#myfw,#msg").hoverClass("current");
        $("#myfw,#homefun,#navlist").mouseover(function() {
            $("#showmsg").fadeOut();
            a.isShowDropBox = 1
        }).mouseout(function() { a.isShowDropBox = 0 });
        var b = $("#homefun");
        if (b.find("li>.baravatar").length > 0) {
            b.mouseover(function() {
                $("#showmsg").fadeOut();
                a.isShowDropBox = 1
            }).mouseout(function() { a.isShowDropBox = 0 })
        }
        $("#myfw>li>ul>.row").click(function() { location.href = $(this).attr("id").replace("MyFwUrl_", "") }).mouseover(function() { $(this).css("background", "#26A027") }).mouseout(function() { $(this).css("background", "none") })
    };
    this.weixinCodeTop = function() {
        var c = $("#mge>.vm>a");
        var b = $(".weixin-code-top");
        c.hover(function() { b.show() }, function() { b.hide() });
        b.hover(function() { b.show() }, function() { b.hide() })
    };
    this.nav = function() {
        var c = $("#mge>.nav>a");
        var b = $("#navlist");
        c.click(function() {
            c.css("color", "#fff").find(".arrow").removeClass("arrow").addClass("arrowon");
            b.show();
            a.isShowNav = 1
        });
        b.bind({
            mouseenter: function() {
                b.show();
                a.isShowNav = 1;
                c.css("color", "#fff").find(".arrow").removeClass("arrow").addClass("arrowon");
                c.find(".chanel").removeClass("chanel").addClass("chanelon")
            },
            mouseleave: function() {
                a.isShowNav = 0;
                setTimeout(function() {
                    if (a.isShowNav == 0) {
                        b.slideUp();
                        c.css("color", "#E5FFE5").find(".arrowon").removeClass("arrowon").addClass("arrow");
                        c.find(".chanelon").removeClass("chanelon").addClass("chanel")
                    }
                }, 500)
            }
        })
    };
    this.backToTop = function() {
        var c = $('<div class="backToTop"><a href="javascript:void(0);" class="bg"></a></div>').appendTo($("body")).click(function() { $("html, body").animate({ scrollTop: 0 }, 320) }),
            b = function() {
                var h = $(document).scrollTop(),
                    g = $(window).height();
                (h > 0) ? c.slideDown(): c.slideUp();
                if ($("#logo").length > 0) {
                    var f = $("#mge");
                    var e = f.find(".logo");
                    var d = '<li class="logo"></li>';
                    h >= 70 ? (e.length <= 0 ? f.prepend(d) : e.show()) : e.hide()
                }
            };
        $(window).bind("scroll", b);
        b()
    };
    this.haoPing = function() {
        var b = $("li>.txt>.haoping");
        if (b.length > 0) {
            var c = $(".drOnlineLevelInfo");
            b.mouseover(function() {
                var d = $(this);
                c.css("top", (d.andSelf().offset().top + 15 + "px")).css("left", (d.andSelf().offset().left + "px"));
                c.slideDown()
            }).mouseout(function() { c.slideUp() });
            c.mouseout(function() { c.slideUp() })
        }
    };
    this.m_close = function() {
        $("#showmsg").fadeOut();
        a.isShowDropBoxClose = 1
    };
    this.getQueryString = function(b) { var c = new RegExp("(^|&)" + b + "=([^&]*)(&|$)", "i"); var d = window.location.search.substr(1).match(c); if (d != null) { return unescape(d[2]) } return null };
    this.own = function(d, b, e) {
        var c = "/reg/login.html";
        if (b != -1) {
            switch (d) {
                case 1:
                    c = "/uc/index.html";
                    break;
                case 2:
                    c = e != -1 ? ("/d" + e + ".html") : ("/u" + b + ".html");
                    break;
                case 3:
                    c = "/uc/free/caselist.html";
                    break
            }
        }
        location.href = c
    };
    this.ajaxLoad = function(d, e, c, f, b) { $.ajax({ url: d, type: "POST", dataType: e, timeout: 20000, beforeSend: function(g) { if (c != null) { c() } }, success: function(g) { f(g) }, error: function() { if (b != null) { b() } } }) };
    this.ajax = function(b, e, c, f, d, g) { $.ajax({ url: b, type: "POST", dataType: e, data: c, timeout: 20000, beforeSend: function() { if (f != null) { f() } }, success: function(h) { d(h) }, error: function(j, i, h) { if (g != null) { g() } } }) }
}

function askFloatWin() {
    this.init = function(a) {
        var c = $("#ask-box");
        var b = $("#ask-box-close");
        if (c.length > 0 && b.length > 0) {
            c.find("p>.close").click(function() {
                c.hide();
                b.show();
                var d = 30;
                var e = new Date();
                e.setTime(e.getTime() + d * 24 * 60 * 60 * 1000);
                document.cookie = "psyCloseWin=1;path=/;expires=" + e.toGMTString()
            });
            b.find("a").click(function() {
                c.show();
                b.hide()
            });
            a.ajaxLoad(a.ajaxUrl + "loadrighttel", "html", null, function(d) {
                if (document.cookie.indexOf("psyCloseWin=1") == -1) { c.fadeIn() } else { b.show() }
                c.append(d)
            }, function() { c.fadeIn() })
        }
    }
}

function message() {
    var o = this;
    this.msgInterval = null;
    this.isUpdateMsg = 0;
    this.initNum = 0;
    this.init = function(glb) {
        var _showmsg = $("#showmsg");
        if (_showmsg.length > 0) {
            o.load(glb, 0);
            o.msgInterval = setInterval(function() { o.load(glb, 1) }, 1000 * 8)
        }
        return o
    };
    this.load = function(glb, isSyn) {
        if (o.isUpdateMsg == 0) {
            glb.ajaxLoad(glb.ajaxUcUrl + "newmsg", "json", function() { o.isUpdateMsg = 1 }, function(data) {
                var m = eval(data);
                o.isUpdateMsg = 0;
                var _AvatarDropMsg = $("#homefun>li>ul>li>.m_new>label");
                if (m.MsgNum > 0) {
                    var _msgnum = m.MsgNum >= 100 ? "99+" : (m.MsgNum < 10 ? "&nbsp;" + m.MsgNum + "&nbsp;" : m.MsgNum);
                    if (glb.isShowDropBox == 0 && glb.isShowDropBoxClose == 0) {
                        var strHtml = '<li><a href="javascript:glb.m_close();" title="å…³é—­" class="bg close"></a><br class="clear" /></li>';
                        strHtml += '<li><a href="/uc/msg/index.html" class="msgrow">æ‚¨æœ‰æœªè¯»æ¶ˆæ¯<i>' + _msgnum + "</i></a></li>";
                        $("#showmsglist").html(strHtml);
                        $("#showmsg").fadeIn()
                    }
                    if (o.initNum != m.MsgNum) {
                        o.soundDyn(m.IsSound, m.IsRemind);
                        o.newsStat(_AvatarDropMsg, m.MsgNum);
                        if ($("#u-msg>a>b").length > 0) { $("#u-msg>a>b").text(m.MsgNum) }
                        var _ucmenulist = $(".menulist>.item>a>span");
                        if (_ucmenulist.length > 0) { o.newsStat(_ucmenulist, m.MsgNum) }
                    }
                    if (isSyn == 0) { o.initNum = m.MsgNum }
                    if ($("#msg_list").length > 0 && isSyn == 1 && o.initNum != m.MsgNum) { o.initNum = m.MsgNum; if (_home != null) { _home.initMsg(1) } }
                } else { $("#showmsg").hide(); if ($("#u-msg>a>b").length > 0) { $("#u-msg>a>b").text(m.MsgNum) } }
            }, function() {
                o.isUpdateMsg = 0;
                clearInterval(o.msgInterval)
            })
        }
    };
    this.newsStat = function(obj, num) {
        var _newObj = obj.find(".newstat");
        if (_newObj.length > 0) { _newObj.remove() }
        if (num > 0) {
            var n = num >= 100 ? "99+" : (num < 10 ? "&nbsp;" + num + "&nbsp;" : num);
            obj.append('<i class="newstat"><i>' + n + "</i></i>")
        }
    };
    this.news = function(obj, num) { var _newObj = obj.find(".new"); if (_newObj.length > 0) { _newObj.remove() } if (num > 0) { obj.append('<i class="new"><i class="bg"></i></i>') } };
    this.soundDyn = function(issound, isdyn) {
        o.PaySound(issound);
        o.PayDynTit(isdyn)
    };
    this.PaySound = function(issound) {
        var _headeline = $("#headeline");
        if (issound == 1) {
            var sound = "",
                src = "/res/sound/newmsg.mp3";
            _headeline.html("");
            if (navigator.appName == "Microsoft Internet Explorer") { sound = '<bgsound src="' + src + '" />' } else { sound = '<embed src="' + src + '" hidden="true" autostart="true" loop="false" />' }
            _headeline.html(sound);
            setTimeout(function() { _headeline.html("") }, 3000)
        } else { _headeline.html("") }
    };
    this.PayDynTit = function(isdyn) {
        var defaultMsg = glb.defaultPageTitle,
            showMsg = "ã€æ–°æ¶ˆæ¯ã€‘",
            hiddenMsg = "ã€ \u2005\u2005\u2005\u2005\u2005\u2005\u2005\u2005ã€‘",
            isShow = true;
        if (isdyn == 1) {
            glb.intervalMsg = setInterval(function() {
                if (isShow) {
                    window.document.title = showMsg + " - " + defaultMsg;
                    isShow = false
                } else {
                    window.document.title = hiddenMsg + " - " + defaultMsg;
                    isShow = true
                }
            }, 500)
        } else { window.document.title = glb.defaultPageTitle; if (glb.intervalMsg != null) { clearInterval(glb.intervalMsg) } }
    }
}
var glb = null;
$(function() { glb = new globals().init() });

function soform() {
    this.init = function() {
        if ($("#soform>#keyword").length > 0) {
            var b = "æœç´¢";
            var a = $("#keyword");
            $("#keyword").keydown(function(c) { if (c.keyCode == 13 && $("#keyword").val() != "") { window.open("http://zhannei.baidu.com/cse/search?q=" + a.val() + "&s=11721263590434428256&nsid=0"); return false } else { $("#keyword").focus(); return true } });
            a.val(b).focus(function() {
                if ($(this).val() == b) { $(this).val("") }
                $(this).css("background", "#54BF3C").css("color", "#f8f8f8")
            }).blur(function() {
                if ($(this).val() == "") { $(this).val(b) }
                $(this).css("background", "#53B13D").css("color", "#3B8C28")
            });
            $("#btn_search").click(function() { var c = $("#keyword").val(); if (c != "" && c != b) { window.open("http://zhannei.baidu.com/cse/search?q=" + c + "&s=11721263590434428256&nsid=0"); return false } else { $("#keyword").focus(); return true } })
        }
    }
}

function menu() {
    this.init = function() {
        var a = $("#menu>.item");
        var b = a.find("ul");
        if (a.length > 0 && b.length > 0) { a.hover(function() { $(this).find("ul").show() }, function() { $(this).find("ul").hide() }) }
        new soform().init()
    }
}
$(function() { new menu().init() });