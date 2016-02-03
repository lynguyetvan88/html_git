(function(n) {
    function l(d, l) {
        var n = /^\w+\:\/\//;
        /^\/\/\/?/.test(d) ? d = location.protocol + d : n.test(d) || "/" == d.charAt(0) || (d = (l || "") + d);
        return n.test(d) ? d : ("/" == d.charAt(0) ? S : Z) + d
    }

    function D(d, l) {
        for (var n in d) d.hasOwnProperty(n) && (l[n] = d[n]);
        return l
    }

    function p(d, l, n, p) {
        d.onload = d.onreadystatechange = function() {
            d.readyState && "complete" != d.readyState && "loaded" != d.readyState || l[n] || (d.onload = d.onreadystatechange = null, p())
        }
    }

    function u(d) {
        d.ready = d.finished = !0;
        for (var l = 0; l < d.finished_listeners.length; l++) d.finished_listeners[l]();
        d.ready_listeners = [];
        d.finished_listeners = []
    }

    function v(d, l, n, r, u) {
        setTimeout(function() {
            var v, q = l.real_src,
                B;
            if ("item" in K) {
                if (!K[0]) {
                    setTimeout(arguments.callee, 25);
                    return
                }
                K = K[0]
            }
            v = document.createElement("script");
            l.type && (v.type = l.type);
            l.charset && (v.charset = l.charset);
            u ? P ? (n.elem = v, aa ? (v.preload = !0, v.onpreload = r) : v.onreadystatechange = function() {
                "loaded" == v.readyState && r()
            }, v.src = q) : u && 0 == q.indexOf(S) && d[E] ? (B = new XMLHttpRequest, B.onreadystatechange = function() {
                4 == B.readyState && (B.onreadystatechange =
                    function() {}, n.text = B.responseText + "\n//@ sourceURL\x3d" + q, r())
            }, B.open("GET", q), B.send()) : (v.type = "text/cache-script", p(v, n, "ready", function() {
                K.removeChild(v);
                r()
            }), v.src = q, K.insertBefore(v, K.firstChild)) : (Y && (v.async = !1), p(v, n, "finished", r), v.src = q, K.insertBefore(v, K.firstChild))
        }, 0)
    }

    function r() {
        function y(d, b, l) {
            function n() {
                null != r && (r = null, u(l))
            }
            var r;
            q[b.src].finished || (d[A] || (q[b.src].finished = !0), r = l.elem || document.createElement("script"), b.type && (r.type = b.type), b.charset && (r.charset = b.charset),
                p(r, l, "finished", n), l.elem ? l.elem = null : l.text ? (r.onload = r.onreadystatechange = null, r.text = l.text) : r.src = b.real_src, K.insertBefore(r, K.firstChild), l.text && n())
        }

        function Q(d, b, n, r) {
            var p, e, k = function() {
                    b.ready_cb(b, function() {
                        y(d, b, p)
                    })
                },
                h = function() {
                    b.finished_cb(b, n)
                };
            b.src = l(b.src, d[ba]);
            b.real_src = b.src + (d[N] ? (/\?.*$/.test(b.src) ? "\x26_" : "?_") + ~~(1E9 * Math.random()) + "\x3d" : "");
            q[b.src] || (q[b.src] = {
                items: [],
                finished: !1
            });
            e = q[b.src].items;
            d[A] || 0 == e.length ? (p = e[e.length] = {
                ready: !1,
                finished: !1,
                ready_listeners: [k],
                finished_listeners: [h]
            }, v(d, b, p, r ? function() {
                p.ready = !0;
                for (var b = 0; b < p.ready_listeners.length; b++) p.ready_listeners[b]();
                p.ready_listeners = []
            } : function() {
                u(p)
            }, r)) : (p = e[0], p.finished ? h() : p.finished_listeners.push(h))
        }

        function X() {
            function d(b, e) {
                b.ready = !0;
                b.exec_trigger = e;
                l()
            }

            function b(b, e) {
                b.ready = b.finished = !0;
                b.exec_trigger = null;
                for (var k = 0; k < e.scripts.length; k++)
                    if (!e.scripts[k].finished) return;
                e.finished = !0;
                l()
            }

            function l() {
                for (; k < e.length;)
                    if ("[object Function]" == Object.prototype.toString.call(e[k])) try {
                        e[k++]()
                    } catch (b) {} else {
                        if (!e[k].finished) {
                            for (var d =
                                    e[k], n = !1, q = 0; q < d.scripts.length; q++) d.scripts[q].ready && d.scripts[q].exec_trigger && (n = !0, d.scripts[q].exec_trigger(), d.scripts[q].exec_trigger = null);
                            if (n) continue;
                            break
                        }
                        k++
                    }
                    k == e.length && (m = h = !1)
            }
            var n, q = D(I, {}),
                e = [],
                k = 0,
                h = !1,
                m;
            n = {
                script: function() {
                    for (var k = 0; k < arguments.length; k++) {
                        var l = arguments[k],
                            r = arguments[k],
                            p = void 0;
                        "[object Array]" == Object.prototype.toString.call(l) || (r = [l]);
                        for (var v = 0; v < r.length; v++) m && m.scripts || e.push(m = {
                                scripts: [],
                                finished: !0
                            }), l = r[v], "[object Function]" == Object.prototype.toString.call(l) &&
                            (l = l()), l && ("[object Array]" == Object.prototype.toString.call(l) ? (p = [].slice.call(l), p.unshift(v, 1), [].splice.apply(r, p), v--) : ("string" == typeof l && (l = {
                                src: l
                            }), l = D(l, {
                                ready: !1,
                                ready_cb: d,
                                finished: !1,
                                finished_cb: b
                            }), m.finished = !1, m.scripts.push(l), Q(q, l, m, S && h), h = !0, q[M] && n.wait()))
                    }
                    return n
                },
                wait: function() {
                    if (0 < arguments.length) {
                        for (var b = 0; b < arguments.length; b++) e.push(arguments[b]);
                        m = e[e.length - 1]
                    } else m = !1;
                    l();
                    return n
                }
            };
            return {
                script: n.script,
                wait: n.wait,
                setOptions: function(b) {
                    D(b, q);
                    return n
                }
            }
        }
        var I = {},
            S = P || d,
            J = [],
            q = {},
            R;
        I[E] = !0;
        I[M] = !1;
        I[A] = !1;
        I[N] = !1;
        I[ba] = "";
        return R = {
            setGlobalDefaults: function(d) {
                D(d, I);
                return R
            },
            setOptions: function() {
                return X().setOptions.apply(null, arguments)
            },
            script: function() {
                return X().script.apply(null, arguments)
            },
            wait: function() {
                return X().wait.apply(null, arguments)
            },
            queueScript: function() {
                J[J.length] = {
                    type: "script",
                    args: [].slice.call(arguments)
                };
                return R
            },
            queueWait: function() {
                J[J.length] = {
                    type: "wait",
                    args: [].slice.call(arguments)
                };
                return R
            },
            runQueue: function() {
                for (var d =
                        R, b = J.length, l; 0 <= --b;) l = J.shift(), d = d[l.type].apply(null, l.args);
                return d
            },
            noConflict: function() {
                n.$LAB = B;
                return R
            },
            sandbox: function() {
                return r()
            }
        }
    }
    var B = n.$LAB,
        E = "UseLocalXHR",
        M = "AlwaysPreserveOrder",
        A = "AllowDuplicates",
        N = "CacheBust",
        ba = "BasePath",
        Z = /^[^?#]*\//.exec(location.href)[0],
        S = /^\w+\:\/\/\/?[^\/]+/.exec(Z)[0],
        K = document.head || document.getElementsByTagName("head"),
        da = n.opera && "[object Opera]" == Object.prototype.toString.call(n.opera) || "MozAppearance" in document.documentElement.style,
        Q = document.createElement("script"),
        aa = "boolean" == typeof Q.preload,
        P = aa || Q.readyState && "uninitialized" == Q.readyState,
        Y = !P && !0 === Q.async,
        d = !P && !Y && !da;
    n.$LAB = r();
    (function(d, l, n) {
        null == document.readyState && document[d] && (document.readyState = "loading", document[d](l, n = function() {
            document.removeEventListener(l, n, !1);
            document.readyState = "complete"
        }, !1))
    })("addEventListener", "DOMContentLoaded")
})(this);
(function(n, l) {
    function D(a) {
        var c = ra[a] = {},
            b, f;
        a = a.split(/\s+/);
        b = 0;
        for (f = a.length; b < f; b++) c[a[b]] = !0;
        return c
    }

    function p(a, c, g) {
        if (g === l && 1 === a.nodeType)
            if (g = "data-" + c.replace(e, "-$1").toLowerCase(), g = a.getAttribute(g), "string" === typeof g) {
                try {
                    g = "true" === g ? !0 : "false" === g ? !1 : "null" === g ? null : b.isNumeric(g) ? +g : pa.test(g) ? b.parseJSON(g) : g
                } catch (f) {}
                b.data(a, c, g)
            } else g = l;
        return g
    }

    function u(a) {
        for (var c in a)
            if (("data" !== c || !b.isEmptyObject(a[c])) && "toJSON" !== c) return !1;
        return !0
    }

    function v(a, c, g) {
        var f =
            c + "defer",
            s = c + "queue",
            e = c + "mark",
            C = b._data(a, f);
        !C || "queue" !== g && b._data(a, s) || "mark" !== g && b._data(a, e) || setTimeout(function() {
            b._data(a, s) || b._data(a, e) || (b.removeData(a, f, !0), C.fire())
        }, 0)
    }

    function r() {
        return !1
    }

    function B() {
        return !0
    }

    function E(a) {
        return !a || !a.parentNode || 11 === a.parentNode.nodeType
    }

    function M(a, c, g) {
        c = c || 0;
        if (b.isFunction(c)) return b.grep(a, function(a, b) {
            return !!c.call(a, b, a) === g
        });
        if (c.nodeType) return b.grep(a, function(a, b) {
            return a === c === g
        });
        if ("string" === typeof c) {
            var f = b.grep(a,
                function(a) {
                    return 1 === a.nodeType
                });
            if (gb.test(c)) return b.filter(c, f, !g);
            c = b.filter(c, f)
        }
        return b.grep(a, function(a, f) {
            return 0 <= b.inArray(a, c) === g
        })
    }

    function A(a) {
        var c = Ha.split("|");
        a = a.createDocumentFragment();
        if (a.createElement)
            for (; c.length;) a.createElement(c.pop());
        return a
    }

    function N(a, c) {
        return b.nodeName(a, "table") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }

    function ba(a, c) {
        if (1 === c.nodeType && b.hasData(a)) {
            var g, f, s;
            f = b._data(a);
            var e = b._data(c,
                    f),
                C = f.events;
            if (C)
                for (g in delete e.handle, e.events = {}, C)
                    for (f = 0, s = C[g].length; f < s; f++) b.event.add(c, g, C[g][f]);
            e.data && (e.data = b.extend({}, e.data))
        }
    }

    function Z(a, c) {
        var g;
        1 === c.nodeType && (c.clearAttributes && c.clearAttributes(), c.mergeAttributes && c.mergeAttributes(a), g = c.nodeName.toLowerCase(), "object" === g ? c.outerHTML = a.outerHTML : "input" !== g || "checkbox" !== a.type && "radio" !== a.type ? "option" === g ? c.selected = a.defaultSelected : "input" === g || "textarea" === g ? c.defaultValue = a.defaultValue : "script" === g && c.text !==
            a.text && (c.text = a.text) : (a.checked && (c.defaultChecked = c.checked = a.checked), c.value !== a.value && (c.value = a.value)), c.removeAttribute(b.expando), c.removeAttribute("_submit_attached"), c.removeAttribute("_change_attached"))
    }

    function S(a) {
        return "undefined" !== typeof a.getElementsByTagName ? a.getElementsByTagName("*") : "undefined" !== typeof a.querySelectorAll ? a.querySelectorAll("*") : []
    }

    function K(a) {
        if ("checkbox" === a.type || "radio" === a.type) a.defaultChecked = a.checked
    }

    function da(a) {
        var c = (a.nodeName || "").toLowerCase();
        "input" === c ? K(a) : "script" !== c && "undefined" !== typeof a.getElementsByTagName && b.grep(a.getElementsByTagName("input"), K)
    }

    function Q(a, c, g) {
        var f = "width" === c ? a.offsetWidth : a.offsetHeight,
            s = "width" === c ? 1 : 0;
        if (0 < f) {
            if ("border" !== g)
                for (; 4 > s; s += 2) g || (f -= parseFloat(b.css(a, "padding" + ea[s])) || 0), f = "margin" === g ? f + (parseFloat(b.css(a, g + ea[s])) || 0) : f - (parseFloat(b.css(a, "border" + ea[s] + "Width")) || 0);
            return f + "px"
        }
        f = ia(a, c);
        if (0 > f || null == f) f = a.style[c];
        if (xa.test(f)) return f;
        f = parseFloat(f) || 0;
        if (g)
            for (; 4 > s; s +=
                2) f += parseFloat(b.css(a, "padding" + ea[s])) || 0, "padding" !== g && (f += parseFloat(b.css(a, "border" + ea[s] + "Width")) || 0), "margin" === g && (f += parseFloat(b.css(a, g + ea[s])) || 0);
        return f + "px"
    }

    function aa(a) {
        return function(c, g) {
            "string" !== typeof c && (g = c, c = "*");
            if (b.isFunction(g))
                for (var f = c.toLowerCase().split(Ia), s = 0, e = f.length, C, k; s < e; s++) C = f[s], (k = /^\+/.test(C)) && (C = C.substr(1) || "*"), C = a[C] = a[C] || [], C[k ? "unshift" : "push"](g)
        }
    }

    function P(a, c, b, f, s, e) {
        s = s || c.dataTypes[0];
        e = e || {};
        e[s] = !0;
        s = a[s];
        for (var C = 0, k = s ? s.length :
                0, d = a === ya, h; C < k && (d || !h); C++) h = s[C](c, b, f), "string" === typeof h && (!d || e[h] ? h = l : (c.dataTypes.unshift(h), h = P(a, c, b, f, h, e)));
        !d && h || e["*"] || (h = P(a, c, b, f, "*", e));
        return h
    }

    function Y(a, c) {
        var g, f, e = b.ajaxSettings.flatOptions || {};
        for (g in c) c[g] !== l && ((e[g] ? a : f || (f = {}))[g] = c[g]);
        f && b.extend(!0, a, f)
    }

    function d(a, c, g, f) {
        if (b.isArray(c)) b.each(c, function(c, b) {
            g || hb.test(a) ? f(a, b) : d(a + "[" + ("object" === typeof b ? c : "") + "]", b, g, f)
        });
        else if (g || "object" !== b.type(c)) f(a, c);
        else
            for (var e in c) d(a + "[" + e + "]", c[e], g,
                f)
    }

    function y() {
        try {
            return new n.XMLHttpRequest
        } catch (a) {}
    }

    function ma() {
        setTimeout(X, 0);
        return sa = b.now()
    }

    function X() {
        sa = l
    }

    function I(a, c) {
        var g = {};
        b.each(ta.concat.apply([], ta.slice(0, c)), function() {
            g[this] = a
        });
        return g
    }

    function na(a) {
        if (!za[a]) {
            var c = q.body,
                g = b("\x3c" + a + "\x3e").appendTo(c),
                f = g.css("display");
            g.remove();
            if ("none" === f || "" === f) U || (U = q.createElement("iframe"), U.frameBorder = U.width = U.height = 0), c.appendChild(U), ja && U.createElement || (ja = (U.contentWindow || U.contentDocument).document,
                ja.write((b.support.boxModel ? "\x3c!doctype html\x3e" : "") + "\x3chtml\x3e\x3cbody\x3e"), ja.close()), g = ja.createElement(a), ja.body.appendChild(g), f = b.css(g, "display"), c.removeChild(U);
            za[a] = f
        }
        return za[a]
    }

    function J(a) {
        return b.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1
    }
    var q = n.document,
        R = n.navigator,
        wa = n.location,
        b = function() {
            function a() {
                if (!c.isReady) {
                    try {
                        q.documentElement.doScroll("left")
                    } catch (b) {
                        setTimeout(a, 1);
                        return
                    }
                    c.ready()
                }
            }
            var c = function(a, b) {
                    return new c.fn.init(a, b, e)
                },
                b = n.jQuery,
                f = n.$,
                e, x = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
                k = /\S/,
                d = /^\s+/,
                h = /\s+$/,
                m = /^<(\w+)\s*\/?>(?:<\/\1>)?$/,
                V = /^[\],:{}\s]*$/,
                w = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
                t = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
                F = /(?:^|:|,)(?:\s*\[)+/g,
                r = /(webkit)[ \/]([\w.]+)/,
                p = /(opera)(?:.*version)?[ \/]([\w.]+)/,
                T = /(msie) ([\w.]+)/,
                G = /(mozilla)(?:.*? rv:([\w.]+))?/,
                v = /-([a-z]|[0-9])/ig,
                B = /^-ms-/,
                z = function(a, c) {
                    return (c + "").toUpperCase()
                },
                u = R.userAgent,
                H, ka, ib = Object.prototype.toString,
                Aa = Object.prototype.hasOwnProperty,
                Ba = Array.prototype.push,
                qa = Array.prototype.slice,
                Ja = String.prototype.trim,
                Ka = Array.prototype.indexOf,
                La = {};
            c.fn = c.prototype = {
                constructor: c,
                init: function(a, b, g) {
                    var f;
                    if (!a) return this;
                    if (a.nodeType) return this.context = this[0] = a, this.length = 1, this;
                    if ("body" === a && !b && q.body) return this.context = q, this[0] = q.body, this.selector = a, this.length = 1, this;
                    if ("string" === typeof a) {
                        f = "\x3c" === a.charAt(0) && "\x3e" === a.charAt(a.length - 1) && 3 <= a.length ? [null, a, null] : x.exec(a);
                        if (!f ||
                            !f[1] && b) return !b || b.jquery ? (b || g).find(a) : this.constructor(b).find(a);
                        if (f[1]) return g = (b = b instanceof c ? b[0] : b) ? b.ownerDocument || b : q, (a = m.exec(a)) ? c.isPlainObject(b) ? (a = [q.createElement(a[1])], c.fn.attr.call(a, b, !0)) : a = [g.createElement(a[1])] : (a = c.buildFragment([f[1]], [g]), a = (a.cacheable ? c.clone(a.fragment) : a.fragment).childNodes), c.merge(this, a);
                        if ((b = q.getElementById(f[2])) && b.parentNode) {
                            if (b.id !== f[2]) return g.find(a);
                            this.length = 1;
                            this[0] = b
                        }
                        this.context = q;
                        this.selector = a;
                        return this
                    }
                    if (c.isFunction(a)) return g.ready(a);
                    a.selector !== l && (this.selector = a.selector, this.context = a.context);
                    return c.makeArray(a, this)
                },
                selector: "",
                jquery: "1.7.2",
                length: 0,
                size: function() {
                    return this.length
                },
                toArray: function() {
                    return qa.call(this, 0)
                },
                get: function(a) {
                    return null == a ? this.toArray() : 0 > a ? this[this.length + a] : this[a]
                },
                pushStack: function(a, b, g) {
                    var f = this.constructor();
                    c.isArray(a) ? Ba.apply(f, a) : c.merge(f, a);
                    f.prevObject = this;
                    f.context = this.context;
                    "find" === b ? f.selector = this.selector + (this.selector ? " " : "") + g : b && (f.selector = this.selector +
                        "." + b + "(" + g + ")");
                    return f
                },
                each: function(a, b) {
                    return c.each(this, a, b)
                },
                ready: function(a) {
                    c.bindReady();
                    H.add(a);
                    return this
                },
                eq: function(a) {
                    a = +a;
                    return -1 === a ? this.slice(a) : this.slice(a, a + 1)
                },
                first: function() {
                    return this.eq(0)
                },
                last: function() {
                    return this.eq(-1)
                },
                slice: function() {
                    return this.pushStack(qa.apply(this, arguments), "slice", qa.call(arguments).join(","))
                },
                map: function(a) {
                    return this.pushStack(c.map(this, function(c, b) {
                        return a.call(c, b, c)
                    }))
                },
                end: function() {
                    return this.prevObject || this.constructor(null)
                },
                push: Ba,
                sort: [].sort,
                splice: [].splice
            };
            c.fn.init.prototype = c.fn;
            c.extend = c.fn.extend = function() {
                var a, b, g, f, e, s = arguments[0] || {},
                    H = 1,
                    x = arguments.length,
                    k = !1;
                "boolean" === typeof s && (k = s, s = arguments[1] || {}, H = 2);
                "object" === typeof s || c.isFunction(s) || (s = {});
                x === H && (s = this, --H);
                for (; H < x; H++)
                    if (null != (a = arguments[H]))
                        for (b in a) g = s[b], f = a[b], s !== f && (k && f && (c.isPlainObject(f) || (e = c.isArray(f))) ? (e ? (e = !1, g = g && c.isArray(g) ? g : []) : g = g && c.isPlainObject(g) ? g : {}, s[b] = c.extend(k, g, f)) : f !== l && (s[b] = f));
                return s
            };
            c.extend({
                noConflict: function(a) {
                    n.$ === c && (n.$ = f);
                    a && n.jQuery === c && (n.jQuery = b);
                    return c
                },
                isReady: !1,
                readyWait: 1,
                holdReady: function(a) {
                    a ? c.readyWait++ : c.ready(!0)
                },
                ready: function(a) {
                    if (!0 === a && !--c.readyWait || !0 !== a && !c.isReady) {
                        if (!q.body) return setTimeout(c.ready, 1);
                        c.isReady = !0;
                        !0 !== a && 0 < --c.readyWait || (H.fireWith(q, [c]), c.fn.trigger && c(q).trigger("ready").off("ready"))
                    }
                },
                bindReady: function() {
                    if (!H) {
                        H = c.Callbacks("once memory");
                        if ("complete" === q.readyState) return setTimeout(c.ready, 1);
                        if (q.addEventListener) q.addEventListener("DOMContentLoaded",
                            ka, !1), n.addEventListener("load", c.ready, !1);
                        else if (q.attachEvent) {
                            q.attachEvent("onreadystatechange", ka);
                            n.attachEvent("onload", c.ready);
                            var b = !1;
                            try {
                                b = null == n.frameElement
                            } catch (g) {}
                            q.documentElement.doScroll && b && a()
                        }
                    }
                },
                isFunction: function(a) {
                    return "function" === c.type(a)
                },
                isArray: Array.isArray || function(a) {
                    return "array" === c.type(a)
                },
                isWindow: function(a) {
                    return null != a && a == a.window
                },
                isNumeric: function(a) {
                    return !isNaN(parseFloat(a)) && isFinite(a)
                },
                type: function(a) {
                    return null == a ? String(a) : La[ib.call(a)] ||
                        "object"
                },
                isPlainObject: function(a) {
                    if (!a || "object" !== c.type(a) || a.nodeType || c.isWindow(a)) return !1;
                    try {
                        if (a.constructor && !Aa.call(a, "constructor") && !Aa.call(a.constructor.prototype, "isPrototypeOf")) return !1
                    } catch (b) {
                        return !1
                    }
                    for (var g in a);
                    return g === l || Aa.call(a, g)
                },
                isEmptyObject: function(a) {
                    for (var c in a) return !1;
                    return !0
                },
                error: function(a) {
                    throw Error(a);
                },
                parseJSON: function(a) {
                    if ("string" !== typeof a || !a) return null;
                    a = c.trim(a);
                    if (n.JSON && n.JSON.parse) return n.JSON.parse(a);
                    if (V.test(a.replace(w,
                            "@").replace(t, "]").replace(F, ""))) return (new Function("return " + a))();
                    c.error("Invalid JSON: " + a)
                },
                parseXML: function(a) {
                    if ("string" !== typeof a || !a) return null;
                    var b, g;
                    try {
                        n.DOMParser ? (g = new DOMParser, b = g.parseFromString(a, "text/xml")) : (b = new ActiveXObject("Microsoft.XMLDOM"), b.async = "false", b.loadXML(a))
                    } catch (f) {
                        b = l
                    }
                    b && b.documentElement && !b.getElementsByTagName("parsererror").length || c.error("Invalid XML: " + a);
                    return b
                },
                noop: function() {},
                globalEval: function(a) {
                    a && k.test(a) && (n.execScript || function(a) {
                        n.eval.call(n,
                            a)
                    })(a)
                },
                camelCase: function(a) {
                    return a.replace(B, "ms-").replace(v, z)
                },
                nodeName: function(a, c) {
                    return a.nodeName && a.nodeName.toUpperCase() === c.toUpperCase()
                },
                each: function(a, b, g) {
                    var f, e = 0,
                        s = a.length,
                        H = s === l || c.isFunction(a);
                    if (g)
                        if (H)
                            for (f in a) {
                                if (!1 === b.apply(a[f], g)) break
                            } else
                                for (; e < s && !1 !== b.apply(a[e++], g););
                        else if (H)
                        for (f in a) {
                            if (!1 === b.call(a[f], f, a[f])) break
                        } else
                            for (; e < s && !1 !== b.call(a[e], e, a[e++]););
                    return a
                },
                trim: Ja ? function(a) {
                    return null == a ? "" : Ja.call(a)
                } : function(a) {
                    return null ==
                        a ? "" : a.toString().replace(d, "").replace(h, "")
                },
                makeArray: function(a, b) {
                    var g = b || [];
                    if (null != a) {
                        var f = c.type(a);
                        null == a.length || "string" === f || "function" === f || "regexp" === f || c.isWindow(a) ? Ba.call(g, a) : c.merge(g, a)
                    }
                    return g
                },
                inArray: function(a, c, b) {
                    var g;
                    if (c) {
                        if (Ka) return Ka.call(c, a, b);
                        g = c.length;
                        for (b = b ? 0 > b ? Math.max(0, g + b) : b : 0; b < g; b++)
                            if (b in c && c[b] === a) return b
                    }
                    return -1
                },
                merge: function(a, c) {
                    var b = a.length,
                        g = 0;
                    if ("number" === typeof c.length)
                        for (var f = c.length; g < f; g++) a[b++] = c[g];
                    else
                        for (; c[g] !== l;) a[b++] =
                            c[g++];
                    a.length = b;
                    return a
                },
                grep: function(a, c, b) {
                    var g = [],
                        f;
                    b = !!b;
                    for (var e = 0, s = a.length; e < s; e++) f = !!c(a[e], e), b !== f && g.push(a[e]);
                    return g
                },
                map: function(a, b, g) {
                    var f, e, s = [],
                        H = 0,
                        x = a.length;
                    if (a instanceof c || x !== l && "number" === typeof x && (0 < x && a[0] && a[x - 1] || 0 === x || c.isArray(a)))
                        for (; H < x; H++) f = b(a[H], H, g), null != f && (s[s.length] = f);
                    else
                        for (e in a) f = b(a[e], e, g), null != f && (s[s.length] = f);
                    return s.concat.apply([], s)
                },
                guid: 1,
                proxy: function(a, b) {
                    if ("string" === typeof b) {
                        var g = a[b];
                        b = a;
                        a = g
                    }
                    if (!c.isFunction(a)) return l;
                    var f = qa.call(arguments, 2),
                        g = function() {
                            return a.apply(b, f.concat(qa.call(arguments)))
                        };
                    g.guid = a.guid = a.guid || g.guid || c.guid++;
                    return g
                },
                access: function(a, b, g, f, e, s, H) {
                    var x, k = null == g,
                        d = 0,
                        C = a.length;
                    if (g && "object" === typeof g) {
                        for (d in g) c.access(a, b, d, g[d], 1, s, f);
                        e = 1
                    } else if (f !== l) {
                        x = H === l && c.isFunction(f);
                        k && (x ? (x = b, b = function(a, b, g) {
                            return x.call(c(a), g)
                        }) : (b.call(a, f), b = null));
                        if (b)
                            for (; d < C; d++) b(a[d], g, x ? f.call(a[d], d, b(a[d], g)) : f, H);
                        e = 1
                    }
                    return e ? a : k ? b.call(a) : C ? b(a[0], g) : s
                },
                now: function() {
                    return (new Date).getTime()
                },
                uaMatch: function(a) {
                    a = a.toLowerCase();
                    a = r.exec(a) || p.exec(a) || T.exec(a) || 0 > a.indexOf("compatible") && G.exec(a) || [];
                    return {
                        browser: a[1] || "",
                        version: a[2] || "0"
                    }
                },
                sub: function() {
                    function a(c, b) {
                        return new a.fn.init(c, b)
                    }
                    c.extend(!0, a, this);
                    a.superclass = this;
                    a.fn = a.prototype = this();
                    a.fn.constructor = a;
                    a.sub = this.sub;
                    a.fn.init = function(g, f) {
                        f && f instanceof c && !(f instanceof a) && (f = a(f));
                        return c.fn.init.call(this, g, f, b)
                    };
                    a.fn.init.prototype = a.fn;
                    var b = a(q);
                    return a
                },
                browser: {}
            });
            c.each("Boolean Number String Function Array Date RegExp Object".split(" "),
                function(a, c) {
                    La["[object " + c + "]"] = c.toLowerCase()
                });
            u = c.uaMatch(u);
            u.browser && (c.browser[u.browser] = !0, c.browser.version = u.version);
            c.browser.webkit && (c.browser.safari = !0);
            k.test("\u00a0") && (d = /^[\s\xA0]+/, h = /[\s\xA0]+$/);
            e = c(q);
            q.addEventListener ? ka = function() {
                q.removeEventListener("DOMContentLoaded", ka, !1);
                c.ready()
            } : q.attachEvent && (ka = function() {
                "complete" === q.readyState && (q.detachEvent("onreadystatechange", ka), c.ready())
            });
            return c
        }(),
        ra = {};
    b.Callbacks = function(a) {
        a = a ? ra[a] || D(a) : {};
        var c = [],
            g = [],
            f, e, x, d, k, h, m = function(g) {
                var f, e, s, x;
                f = 0;
                for (e = g.length; f < e; f++) s = g[f], x = b.type(s), "array" === x ? m(s) : "function" === x && (a.unique && w.has(s) || c.push(s))
            },
            n = function(b, l) {
                l = l || [];
                f = !a.memory || [b, l];
                x = e = !0;
                h = d || 0;
                d = 0;
                for (k = c.length; c && h < k; h++)
                    if (!1 === c[h].apply(b, l) && a.stopOnFalse) {
                        f = !0;
                        break
                    }
                x = !1;
                c && (a.once ? !0 === f ? w.disable() : c = [] : g && g.length && (f = g.shift(), w.fireWith(f[0], f[1])))
            },
            w = {
                add: function() {
                    if (c) {
                        var a = c.length;
                        m(arguments);
                        x ? k = c.length : f && !0 !== f && (d = a, n(f[0], f[1]))
                    }
                    return this
                },
                remove: function() {
                    if (c)
                        for (var b =
                                arguments, g = 0, f = b.length; g < f; g++)
                            for (var e = 0; e < c.length && (b[g] !== c[e] || (x && e <= k && (k--, e <= h && h--), c.splice(e--, 1), !a.unique)); e++);
                    return this
                },
                has: function(a) {
                    if (c)
                        for (var b = 0, g = c.length; b < g; b++)
                            if (a === c[b]) return !0;
                    return !1
                },
                empty: function() {
                    c = [];
                    return this
                },
                disable: function() {
                    c = g = f = l;
                    return this
                },
                disabled: function() {
                    return !c
                },
                lock: function() {
                    g = l;
                    f && !0 !== f || w.disable();
                    return this
                },
                locked: function() {
                    return !g
                },
                fireWith: function(c, b) {
                    g && (x ? a.once || g.push([c, b]) : a.once && f || n(c, b));
                    return this
                },
                fire: function() {
                    w.fireWith(this,
                        arguments);
                    return this
                },
                fired: function() {
                    return !!e
                }
            };
        return w
    };
    var oa = [].slice;
    b.extend({
        Deferred: function(a) {
            var c = b.Callbacks("once memory"),
                g = b.Callbacks("once memory"),
                f = b.Callbacks("memory"),
                e = "pending",
                x = {
                    resolve: c,
                    reject: g,
                    notify: f
                },
                k = {
                    done: c.add,
                    fail: g.add,
                    progress: f.add,
                    state: function() {
                        return e
                    },
                    isResolved: c.fired,
                    isRejected: g.fired,
                    then: function(a, c, b) {
                        d.done(a).fail(c).progress(b);
                        return this
                    },
                    always: function() {
                        d.done.apply(d, arguments).fail.apply(d, arguments);
                        return this
                    },
                    pipe: function(a,
                        c, g) {
                        return b.Deferred(function(f) {
                            b.each({
                                done: [a, "resolve"],
                                fail: [c, "reject"],
                                progress: [g, "notify"]
                            }, function(a, c) {
                                var g = c[0],
                                    e = c[1],
                                    s;
                                if (b.isFunction(g)) d[a](function() {
                                    if ((s = g.apply(this, arguments)) && b.isFunction(s.promise)) s.promise().then(f.resolve, f.reject, f.notify);
                                    else f[e + "With"](this === d ? f : this, [s])
                                });
                                else d[a](f[e])
                            })
                        }).promise()
                    },
                    promise: function(a) {
                        if (null == a) a = k;
                        else
                            for (var c in k) a[c] = k[c];
                        return a
                    }
                },
                d = k.promise({}),
                h;
            for (h in x) d[h] = x[h].fire, d[h + "With"] = x[h].fireWith;
            d.done(function() {
                e =
                    "resolved"
            }, g.disable, f.lock).fail(function() {
                e = "rejected"
            }, c.disable, f.lock);
            a && a.call(d, d);
            return d
        },
        when: function(a) {
            function c(a) {
                return function(c) {
                    f[a] = 1 < arguments.length ? oa.call(arguments, 0) : c;
                    --k || h.resolveWith(h, f)
                }
            }

            function g(a) {
                return function(c) {
                    d[a] = 1 < arguments.length ? oa.call(arguments, 0) : c;
                    h.notifyWith(l, d)
                }
            }
            var f = oa.call(arguments, 0),
                e = 0,
                x = f.length,
                d = Array(x),
                k = x,
                h = 1 >= x && a && b.isFunction(a.promise) ? a : b.Deferred(),
                l = h.promise();
            if (1 < x) {
                for (; e < x; e++) f[e] && f[e].promise && b.isFunction(f[e].promise) ?
                    f[e].promise().then(c(e), h.reject, g(e)) : --k;
                k || h.resolveWith(h, f)
            } else h !== a && h.resolveWith(h, x ? [a] : []);
            return l
        }
    });
    b.support = function() {
        var a, c, g, f, e, x, d, k, h = q.createElement("div");
        h.setAttribute("className", "t");
        h.innerHTML = "   \x3clink/\x3e\x3ctable\x3e\x3c/table\x3e\x3ca href\x3d'/a' style\x3d'top:1px;float:left;opacity:.55;'\x3ea\x3c/a\x3e\x3cinput type\x3d'checkbox'/\x3e";
        c = h.getElementsByTagName("*");
        g = h.getElementsByTagName("a")[0];
        if (!c || !c.length || !g) return {};
        f = q.createElement("select");
        e = f.appendChild(q.createElement("option"));
        c = h.getElementsByTagName("input")[0];
        a = {
            leadingWhitespace: 3 === h.firstChild.nodeType,
            tbody: !h.getElementsByTagName("tbody").length,
            htmlSerialize: !!h.getElementsByTagName("link").length,
            style: /top/.test(g.getAttribute("style")),
            hrefNormalized: "/a" === g.getAttribute("href"),
            opacity: /^0.55/.test(g.style.opacity),
            cssFloat: !!g.style.cssFloat,
            checkOn: "on" === c.value,
            optSelected: e.selected,
            getSetAttribute: "t" !== h.className,
            enctype: !!q.createElement("form").enctype,
            html5Clone: "\x3c:nav\x3e\x3c/:nav\x3e" !== q.createElement("nav").cloneNode(!0).outerHTML,
            submitBubbles: !0,
            changeBubbles: !0,
            focusinBubbles: !1,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0,
            pixelMargin: !0
        };
        b.boxModel = a.boxModel = "CSS1Compat" === q.compatMode;
        c.checked = !0;
        a.noCloneChecked = c.cloneNode(!0).checked;
        f.disabled = !0;
        a.optDisabled = !e.disabled;
        try {
            delete h.test
        } catch (l) {
            a.deleteExpando = !1
        }!h.addEventListener && h.attachEvent && h.fireEvent && (h.attachEvent("onclick",
            function() {
                a.noCloneEvent = !1
            }), h.cloneNode(!0).fireEvent("onclick"));
        c = q.createElement("input");
        c.value = "t";
        c.setAttribute("type", "radio");
        a.radioValue = "t" === c.value;
        c.setAttribute("checked", "checked");
        c.setAttribute("name", "t");
        h.appendChild(c);
        g = q.createDocumentFragment();
        g.appendChild(h.lastChild);
        a.checkClone = g.cloneNode(!0).cloneNode(!0).lastChild.checked;
        a.appendChecked = c.checked;
        g.removeChild(c);
        g.appendChild(h);
        if (h.attachEvent)
            for (d in {
                    submit: 1,
                    change: 1,
                    focusin: 1
                }) c = "on" + d, k = c in h, k || (h.setAttribute(c,
                "return;"), k = "function" === typeof h[c]), a[d + "Bubbles"] = k;
        g.removeChild(h);
        g = f = e = h = c = null;
        b(function() {
            var c, g, f, e, s = q.getElementsByTagName("body")[0];
            s && (c = q.createElement("div"), c.style.cssText = "padding:0;margin:0;border:0;visibility:hidden;width:0;height:0;position:static;top:0;margin-top:1px", s.insertBefore(c, s.firstChild), h = q.createElement("div"), c.appendChild(h), h.innerHTML = "\x3ctable\x3e\x3ctr\x3e\x3ctd style\x3d'padding:0;margin:0;border:0;display:none'\x3e\x3c/td\x3e\x3ctd\x3et\x3c/td\x3e\x3c/tr\x3e\x3c/table\x3e",
                x = h.getElementsByTagName("td"), k = 0 === x[0].offsetHeight, x[0].style.display = "", x[1].style.display = "none", a.reliableHiddenOffsets = k && 0 === x[0].offsetHeight, n.getComputedStyle && (h.innerHTML = "", g = q.createElement("div"), g.style.width = "0", g.style.marginRight = "0", h.style.width = "2px", h.appendChild(g), a.reliableMarginRight = 0 === (parseInt((n.getComputedStyle(g, null) || {
                    marginRight: 0
                }).marginRight, 10) || 0)), "undefined" !== typeof h.style.zoom && (h.innerHTML = "", h.style.width = h.style.padding = "1px", h.style.border = 0, h.style.overflow =
                    "hidden", h.style.display = "inline", h.style.zoom = 1, a.inlineBlockNeedsLayout = 3 === h.offsetWidth, h.style.display = "block", h.style.overflow = "visible", h.innerHTML = "\x3cdiv style\x3d'width:5px;'\x3e\x3c/div\x3e", a.shrinkWrapBlocks = 3 !== h.offsetWidth), h.style.cssText = "position:absolute;top:0;left:0;width:1px;height:1px;padding:0;margin:0;border:0;visibility:hidden;", h.innerHTML = "\x3cdiv style\x3d'position:absolute;top:0;left:0;width:1px;height:1px;padding:0;margin:0;border:5px solid #000;display:block;'\x3e\x3cdiv style\x3d'padding:0;margin:0;border:0;display:block;overflow:hidden;'\x3e\x3c/div\x3e\x3c/div\x3e\x3ctable style\x3d'position:absolute;top:0;left:0;width:1px;height:1px;padding:0;margin:0;border:5px solid #000;' cellpadding\x3d'0' cellspacing\x3d'0'\x3e\x3ctr\x3e\x3ctd\x3e\x3c/td\x3e\x3c/tr\x3e\x3c/table\x3e",
                g = h.firstChild, f = g.firstChild, e = g.nextSibling.firstChild.firstChild, e = {
                    doesNotAddBorder: 5 !== f.offsetTop,
                    doesAddBorderForTableAndCells: 5 === e.offsetTop
                }, f.style.position = "fixed", f.style.top = "20px", e.fixedPosition = 20 === f.offsetTop || 15 === f.offsetTop, f.style.position = f.style.top = "", g.style.overflow = "hidden", g.style.position = "relative", e.subtractsBorderForOverflowNotVisible = -5 === f.offsetTop, e.doesNotIncludeMarginInBodyOffset = 1 !== s.offsetTop, n.getComputedStyle && (h.style.marginTop = "1%", a.pixelMargin = "1%" !==
                    (n.getComputedStyle(h, null) || {
                        marginTop: 0
                    }).marginTop), "undefined" !== typeof c.style.zoom && (c.style.zoom = 1), s.removeChild(c), h = null, b.extend(a, e))
        });
        return a
    }();
    var pa = /^(?:\{.*\}|\[.*\])$/,
        e = /([A-Z])/g;
    b.extend({
        cache: {},
        uuid: 0,
        expando: "jQuery" + (b.fn.jquery + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        hasData: function(a) {
            a = a.nodeType ? b.cache[a[b.expando]] : a[b.expando];
            return !!a && !u(a)
        },
        data: function(a, c, g, f) {
            if (b.acceptData(a)) {
                var e;
                e = b.expando;
                var x = "string" === typeof c,
                    d = a.nodeType,
                    k = d ? b.cache : a,
                    h = d ? a[e] : a[e] && e,
                    m = "events" === c;
                if (h && k[h] && (m || f || k[h].data) || !x || g !== l) {
                    h || (d ? a[e] = h = ++b.uuid : h = e);
                    k[h] || (k[h] = {}, d || (k[h].toJSON = b.noop));
                    if ("object" === typeof c || "function" === typeof c) f ? k[h] = b.extend(k[h], c) : k[h].data = b.extend(k[h].data, c);
                    e = a = k[h];
                    f || (a.data || (a.data = {}), a = a.data);
                    g !== l && (a[b.camelCase(c)] = g);
                    if (m && !a[c]) return e.events;
                    x ? (g = a[c], null == g && (g = a[b.camelCase(c)])) : g = a;
                    return g
                }
            }
        },
        removeData: function(a, c, g) {
            if (b.acceptData(a)) {
                var f,
                    e, x, h = b.expando,
                    k = a.nodeType,
                    d = k ? b.cache : a,
                    l = k ? a[h] : h;
                if (d[l]) {
                    if (c && (f = g ? d[l] : d[l].data)) {
                        b.isArray(c) || (c in f ? c = [c] : (c = b.camelCase(c), c = c in f ? [c] : c.split(" ")));
                        e = 0;
                        for (x = c.length; e < x; e++) delete f[c[e]];
                        if (!(g ? u : b.isEmptyObject)(f)) return
                    }
                    if (!g && (delete d[l].data, !u(d[l]))) return;
                    b.support.deleteExpando || !d.setInterval ? delete d[l] : d[l] = null;
                    k && (b.support.deleteExpando ? delete a[h] : a.removeAttribute ? a.removeAttribute(h) : a[h] = null)
                }
            }
        },
        _data: function(a, c, g) {
            return b.data(a, c, g, !0)
        },
        acceptData: function(a) {
            if (a.nodeName) {
                var c =
                    b.noData[a.nodeName.toLowerCase()];
                if (c) return !(!0 === c || a.getAttribute("classid") !== c)
            }
            return !0
        }
    });
    b.fn.extend({
        data: function(a, c) {
            var g, f, e, x, h, d = this[0],
                k = 0,
                m = null;
            if (a === l) {
                if (this.length && (m = b.data(d), 1 === d.nodeType && !b._data(d, "parsedAttrs"))) {
                    e = d.attributes;
                    for (h = e.length; k < h; k++) x = e[k].name, 0 === x.indexOf("data-") && (x = b.camelCase(x.substring(5)), p(d, x, m[x]));
                    b._data(d, "parsedAttrs", !0)
                }
                return m
            }
            if ("object" === typeof a) return this.each(function() {
                b.data(this, a)
            });
            g = a.split(".", 2);
            g[1] = g[1] ? "." +
                g[1] : "";
            f = g[1] + "!";
            return b.access(this, function(c) {
                if (c === l) return m = this.triggerHandler("getData" + f, [g[0]]), m === l && d && (m = b.data(d, a), m = p(d, a, m)), m === l && g[1] ? this.data(g[0]) : m;
                g[1] = c;
                this.each(function() {
                    var e = b(this);
                    e.triggerHandler("setData" + f, g);
                    b.data(this, a, c);
                    e.triggerHandler("changeData" + f, g)
                })
            }, null, c, 1 < arguments.length, null, !1)
        },
        removeData: function(a) {
            return this.each(function() {
                b.removeData(this, a)
            })
        }
    });
    b.extend({
        _mark: function(a, c) {
            a && (c = (c || "fx") + "mark", b._data(a, c, (b._data(a, c) || 0) +
                1))
        },
        _unmark: function(a, c, g) {
            !0 !== a && (g = c, c = a, a = !1);
            if (c) {
                g = g || "fx";
                var f = g + "mark";
                (a = a ? 0 : (b._data(c, f) || 1) - 1) ? b._data(c, f, a): (b.removeData(c, f, !0), v(c, g, "mark"))
            }
        },
        queue: function(a, c, g) {
            var f;
            if (a) return c = (c || "fx") + "queue", f = b._data(a, c), g && (!f || b.isArray(g) ? f = b._data(a, c, b.makeArray(g)) : f.push(g)), f || []
        },
        dequeue: function(a, c) {
            c = c || "fx";
            var g = b.queue(a, c),
                f = g.shift(),
                e = {};
            "inprogress" === f && (f = g.shift());
            f && ("fx" === c && g.unshift("inprogress"), b._data(a, c + ".run", e), f.call(a, function() {
                b.dequeue(a,
                    c)
            }, e));
            g.length || (b.removeData(a, c + "queue " + c + ".run", !0), v(a, c, "queue"))
        }
    });
    b.fn.extend({
        queue: function(a, c) {
            var g = 2;
            "string" !== typeof a && (c = a, a = "fx", g--);
            return arguments.length < g ? b.queue(this[0], a) : c === l ? this : this.each(function() {
                var g = b.queue(this, a, c);
                "fx" === a && "inprogress" !== g[0] && b.dequeue(this, a)
            })
        },
        dequeue: function(a) {
            return this.each(function() {
                b.dequeue(this, a)
            })
        },
        delay: function(a, c) {
            a = b.fx ? b.fx.speeds[a] || a : a;
            return this.queue(c || "fx", function(c, b) {
                var e = setTimeout(c, a);
                b.stop = function() {
                    clearTimeout(e)
                }
            })
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", [])
        },
        promise: function(a, c) {
            function g() {
                --h || f.resolveWith(e, [e])
            }
            "string" !== typeof a && (c = a, a = l);
            a = a || "fx";
            for (var f = b.Deferred(), e = this, d = e.length, h = 1, k = a + "defer", m = a + "queue", n = a + "mark", q; d--;)
                if (q = b.data(e[d], k, l, !0) || (b.data(e[d], m, l, !0) || b.data(e[d], n, l, !0)) && b.data(e[d], k, b.Callbacks("once memory"), !0)) h++, q.add(g);
            g();
            return f.promise(c)
        }
    });
    var k = /[\n\t\r]/g,
        h = /\s+/,
        m = /\r/g,
        t = /^(?:button|input)$/i,
        T = /^(?:button|input|object|select|textarea)$/i,
        G = /^a(?:rea)?$/i,
        ca = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
        L = b.support.getSetAttribute,
        W, Ma, Na;
    b.fn.extend({
        attr: function(a, c) {
            return b.access(this, b.attr, a, c, 1 < arguments.length)
        },
        removeAttr: function(a) {
            return this.each(function() {
                b.removeAttr(this, a)
            })
        },
        prop: function(a, c) {
            return b.access(this, b.prop, a, c, 1 < arguments.length)
        },
        removeProp: function(a) {
            a = b.propFix[a] || a;
            return this.each(function() {
                try {
                    this[a] = l, delete this[a]
                } catch (c) {}
            })
        },
        addClass: function(a) {
            var c, g, f, e, d, k, l;
            if (b.isFunction(a)) return this.each(function(c) {
                b(this).addClass(a.call(this, c, this.className))
            });
            if (a && "string" === typeof a)
                for (c = a.split(h), g = 0, f = this.length; g < f; g++)
                    if (e = this[g], 1 === e.nodeType)
                        if (e.className || 1 !== c.length) {
                            d = " " + e.className + " ";
                            k = 0;
                            for (l = c.length; k < l; k++) ~d.indexOf(" " + c[k] + " ") || (d += c[k] + " ");
                            e.className = b.trim(d)
                        } else e.className = a;
            return this
        },
        removeClass: function(a) {
            var c, g, f, e, d, C, fa;
            if (b.isFunction(a)) return this.each(function(c) {
                b(this).removeClass(a.call(this,
                    c, this.className))
            });
            if (a && "string" === typeof a || a === l)
                for (c = (a || "").split(h), g = 0, f = this.length; g < f; g++)
                    if (e = this[g], 1 === e.nodeType && e.className)
                        if (a) {
                            d = (" " + e.className + " ").replace(k, " ");
                            C = 0;
                            for (fa = c.length; C < fa; C++) d = d.replace(" " + c[C] + " ", " ");
                            e.className = b.trim(d)
                        } else e.className = "";
            return this
        },
        toggleClass: function(a, c) {
            var g = typeof a,
                f = "boolean" === typeof c;
            return b.isFunction(a) ? this.each(function(g) {
                b(this).toggleClass(a.call(this, g, this.className, c), c)
            }) : this.each(function() {
                if ("string" ===
                    g)
                    for (var e, d = 0, k = b(this), l = c, m = a.split(h); e = m[d++];) l = f ? l : !k.hasClass(e), k[l ? "addClass" : "removeClass"](e);
                else if ("undefined" === g || "boolean" === g) this.className && b._data(this, "__className__", this.className), this.className = this.className || !1 === a ? "" : b._data(this, "__className__") || ""
            })
        },
        hasClass: function(a) {
            a = " " + a + " ";
            for (var c = 0, b = this.length; c < b; c++)
                if (1 === this[c].nodeType && -1 < (" " + this[c].className + " ").replace(k, " ").indexOf(a)) return !0;
            return !1
        },
        val: function(a) {
            var c, g, f, e = this[0];
            if (arguments.length) return f =
                b.isFunction(a), this.each(function(g) {
                    var e = b(this);
                    1 === this.nodeType && (g = f ? a.call(this, g, e.val()) : a, null == g ? g = "" : "number" === typeof g ? g += "" : b.isArray(g) && (g = b.map(g, function(a) {
                        return null == a ? "" : a + ""
                    })), c = b.valHooks[this.type] || b.valHooks[this.nodeName.toLowerCase()], c && "set" in c && c.set(this, g, "value") !== l || (this.value = g))
                });
            if (e) {
                if ((c = b.valHooks[e.type] || b.valHooks[e.nodeName.toLowerCase()]) && "get" in c && (g = c.get(e, "value")) !== l) return g;
                g = e.value;
                return "string" === typeof g ? g.replace(m, "") : null ==
                    g ? "" : g
            }
        }
    });
    b.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var c = a.attributes.value;
                    return !c || c.specified ? a.value : a.text
                }
            },
            select: {
                get: function(a) {
                    var c, g, f = a.selectedIndex,
                        e = [],
                        d = a.options,
                        k = "select-one" === a.type;
                    if (0 > f) return null;
                    a = k ? f : 0;
                    for (g = k ? f + 1 : d.length; a < g; a++)
                        if (c = d[a], c.selected && !((b.support.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && b.nodeName(c.parentNode, "optgroup"))) {
                            c = b(c).val();
                            if (k) return c;
                            e.push(c)
                        }
                    return k && !e.length && d.length ? b(d[f]).val() :
                        e
                },
                set: function(a, c) {
                    var g = b.makeArray(c);
                    b(a).find("option").each(function() {
                        this.selected = 0 <= b.inArray(b(this).val(), g)
                    });
                    g.length || (a.selectedIndex = -1);
                    return g
                }
            }
        },
        attrFn: {
            val: !0,
            css: !0,
            html: !0,
            text: !0,
            data: !0,
            width: !0,
            height: !0,
            offset: !0
        },
        attr: function(a, c, g, f) {
            var e, d, k = a.nodeType;
            if (a && 3 !== k && 8 !== k && 2 !== k) {
                if (f && c in b.attrFn) return b(a)[c](g);
                if ("undefined" === typeof a.getAttribute) return b.prop(a, c, g);
                if (f = 1 !== k || !b.isXMLDoc(a)) c = c.toLowerCase(), d = b.attrHooks[c] || (ca.test(c) ? Ma : W);
                if (g !== l)
                    if (null ===
                        g) b.removeAttr(a, c);
                    else {
                        if (d && "set" in d && f && (e = d.set(a, g, c)) !== l) return e;
                        a.setAttribute(c, "" + g);
                        return g
                    } else {
                    if (d && "get" in d && f && null !== (e = d.get(a, c))) return e;
                    e = a.getAttribute(c);
                    return null === e ? l : e
                }
            }
        },
        removeAttr: function(a, c) {
            var g, f, e, d, k, l = 0;
            if (c && 1 === a.nodeType)
                for (f = c.toLowerCase().split(h), d = f.length; l < d; l++)
                    if (e = f[l]) g = b.propFix[e] || e, (k = ca.test(e)) || b.attr(a, e, ""), a.removeAttribute(L ? e : g), k && g in a && (a[g] = !1)
        },
        attrHooks: {
            type: {
                set: function(a, c) {
                    if (t.test(a.nodeName) && a.parentNode) b.error("type property can't be changed");
                    else if (!b.support.radioValue && "radio" === c && b.nodeName(a, "input")) {
                        var g = a.value;
                        a.setAttribute("type", c);
                        g && (a.value = g);
                        return c
                    }
                }
            },
            value: {
                get: function(a, c) {
                    return W && b.nodeName(a, "button") ? W.get(a, c) : c in a ? a.value : null
                },
                set: function(a, c, g) {
                    if (W && b.nodeName(a, "button")) return W.set(a, c, g);
                    a.value = c
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function(a, c, g) {
            var f, e, d;
            d = a.nodeType;
            if (a && 3 !== d && 8 !== d && 2 !== d) {
                if (d = 1 !== d || !b.isXMLDoc(a)) c = b.propFix[c] || c, e = b.propHooks[c];
                return g !== l ? e && "set" in e && (f = e.set(a, g, c)) !== l ? f : a[c] = g : e && "get" in e && null !== (f = e.get(a, c)) ? f : a[c]
            }
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    var c = a.getAttributeNode("tabindex");
                    return c && c.specified ? parseInt(c.value, 10) : T.test(a.nodeName) || G.test(a.nodeName) && a.href ? 0 : l
                }
            }
        }
    });
    b.attrHooks.tabindex = b.propHooks.tabIndex;
    Ma = {
        get: function(a, c) {
            var g, f = b.prop(a, c);
            return !0 === f || "boolean" !== typeof f && (g = a.getAttributeNode(c)) && !1 !== g.nodeValue ? c.toLowerCase() : l
        },
        set: function(a, c, g) {
            !1 === c ? b.removeAttr(a, g) : (c = b.propFix[g] || g, c in a && (a[c] = !0), a.setAttribute(g, g.toLowerCase()));
            return g
        }
    };
    L || (Na = {
        name: !0,
        id: !0,
        coords: !0
    }, W = b.valHooks.button = {
        get: function(a, c) {
            var b;
            return (b = a.getAttributeNode(c)) && (Na[c] ? "" !== b.nodeValue : b.specified) ? b.nodeValue : l
        },
        set: function(a, c, b) {
            var f = a.getAttributeNode(b);
            f || (f = q.createAttribute(b),
                a.setAttributeNode(f));
            return f.nodeValue = c + ""
        }
    }, b.attrHooks.tabindex.set = W.set, b.each(["width", "height"], function(a, c) {
        b.attrHooks[c] = b.extend(b.attrHooks[c], {
            set: function(a, b) {
                if ("" === b) return a.setAttribute(c, "auto"), b
            }
        })
    }), b.attrHooks.contenteditable = {
        get: W.get,
        set: function(a, c, b) {
            "" === c && (c = "false");
            W.set(a, c, b)
        }
    });
    b.support.hrefNormalized || b.each(["href", "src", "width", "height"], function(a, c) {
        b.attrHooks[c] = b.extend(b.attrHooks[c], {
            get: function(a) {
                a = a.getAttribute(c, 2);
                return null === a ? l : a
            }
        })
    });
    b.support.style || (b.attrHooks.style = {
        get: function(a) {
            return a.style.cssText.toLowerCase() || l
        },
        set: function(a, c) {
            return a.style.cssText = "" + c
        }
    });
    b.support.optSelected || (b.propHooks.selected = b.extend(b.propHooks.selected, {
        get: function(a) {
            if (a = a.parentNode) a.selectedIndex, a.parentNode && a.parentNode.selectedIndex;
            return null
        }
    }));
    b.support.enctype || (b.propFix.enctype = "encoding");
    b.support.checkOn || b.each(["radio", "checkbox"], function() {
        b.valHooks[this] = {
            get: function(a) {
                return null === a.getAttribute("value") ?
                    "on" : a.value
            }
        }
    });
    b.each(["radio", "checkbox"], function() {
        b.valHooks[this] = b.extend(b.valHooks[this], {
            set: function(a, c) {
                if (b.isArray(c)) return a.checked = 0 <= b.inArray(b(a).val(), c)
            }
        })
    });
    var Ca = /^(?:textarea|input|select)$/i,
        Oa = /^([^\.]*)?(?:\.(.+))?$/,
        jb = /(?:^|\s)hover(\.\S+)?\b/,
        kb = /^key/,
        lb = /^(?:mouse|contextmenu)|click/,
        Pa = /^(?:focusinfocus|focusoutblur)$/,
        mb = /^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,
        nb = function(a) {
            if (a = mb.exec(a)) a[1] = (a[1] || "").toLowerCase(), a[3] = a[3] && RegExp("(?:^|\\s)" + a[3] + "(?:\\s|$)");
            return a
        },
        Qa = function(a) {
            return b.event.special.hover ? a : a.replace(jb, "mouseenter$1 mouseleave$1")
        };
    b.event = {
        add: function(a, c, g, f, e) {
            var d, k, h, m, n, q, w, t, F;
            if (3 !== a.nodeType && 8 !== a.nodeType && c && g && (d = b._data(a))) {
                g.handler && (w = g, g = w.handler, e = w.selector);
                g.guid || (g.guid = b.guid++);
                h = d.events;
                h || (d.events = h = {});
                k = d.handle;
                k || (d.handle = k = function(a) {
                    return "undefined" === typeof b || a && b.event.triggered === a.type ? l : b.event.dispatch.apply(k.elem, arguments)
                }, k.elem = a);
                c = b.trim(Qa(c)).split(" ");
                for (d = 0; d < c.length; d++) m =
                    Oa.exec(c[d]) || [], n = m[1], q = (m[2] || "").split(".").sort(), F = b.event.special[n] || {}, n = (e ? F.delegateType : F.bindType) || n, F = b.event.special[n] || {}, m = b.extend({
                        type: n,
                        origType: m[1],
                        data: f,
                        handler: g,
                        guid: g.guid,
                        selector: e,
                        quick: e && nb(e),
                        namespace: q.join(".")
                    }, w), t = h[n], t || (t = h[n] = [], t.delegateCount = 0, F.setup && !1 !== F.setup.call(a, f, q, k) || (a.addEventListener ? a.addEventListener(n, k, !1) : a.attachEvent && a.attachEvent("on" + n, k))), F.add && (F.add.call(a, m), m.handler.guid || (m.handler.guid = g.guid)), e ? t.splice(t.delegateCount++,
                        0, m) : t.push(m), b.event.global[n] = !0;
                a = null
            }
        },
        global: {},
        remove: function(a, c, g, f, e) {
            var d = b.hasData(a) && b._data(a),
                k, h, l, m, n, q, t, F, r, p;
            if (d && (t = d.events)) {
                c = b.trim(Qa(c || "")).split(" ");
                for (k = 0; k < c.length; k++)
                    if (h = Oa.exec(c[k]) || [], l = m = h[1], h = h[2], l) {
                        F = b.event.special[l] || {};
                        l = (f ? F.delegateType : F.bindType) || l;
                        r = t[l] || [];
                        n = r.length;
                        h = h ? RegExp("(^|\\.)" + h.split(".").sort().join("\\.(?:.*\\.)?") + "(\\.|$)") : null;
                        for (q = 0; q < r.length; q++) p = r[q], !e && m !== p.origType || g && g.guid !== p.guid || h && !h.test(p.namespace) ||
                            f && !(f === p.selector || "**" === f && p.selector) || (r.splice(q--, 1), p.selector && r.delegateCount--, F.remove && F.remove.call(a, p));
                        0 === r.length && n !== r.length && (F.teardown && !1 !== F.teardown.call(a, h) || b.removeEvent(a, l, d.handle), delete t[l])
                    } else
                        for (l in t) b.event.remove(a, l + c[k], g, f, !0);
                if (b.isEmptyObject(t)) {
                    if (c = d.handle) c.elem = null;
                    b.removeData(a, ["events", "handle"], !0)
                }
            }
        },
        customEvent: {
            getData: !0,
            setData: !0,
            changeData: !0
        },
        trigger: function(a, c, g, f) {
            if (!g || 3 !== g.nodeType && 8 !== g.nodeType) {
                var e = a.type || a,
                    d = [],
                    k, h, m, q, t;
                if (!Pa.test(e + b.event.triggered) && (0 <= e.indexOf("!") && (e = e.slice(0, -1), k = !0), 0 <= e.indexOf(".") && (d = e.split("."), e = d.shift(), d.sort()), g && !b.event.customEvent[e] || b.event.global[e]))
                    if (a = "object" === typeof a ? a[b.expando] ? a : new b.Event(e, a) : new b.Event(e), a.type = e, a.isTrigger = !0, a.exclusive = k, a.namespace = d.join("."), a.namespace_re = a.namespace ? RegExp("(^|\\.)" + d.join("\\.(?:.*\\.)?") + "(\\.|$)") : null, k = 0 > e.indexOf(":") ? "on" + e : "", g) {
                        if (a.result = l, a.target || (a.target = g), c = null != c ? b.makeArray(c) : [], c.unshift(a), m = b.event.special[e] || {}, !m.trigger || !1 !== m.trigger.apply(g, c)) {
                            t = [
                                [g, m.bindType || e]
                            ];
                            if (!f && !m.noBubble && !b.isWindow(g)) {
                                q = m.delegateType || e;
                                d = Pa.test(q + e) ? g : g.parentNode;
                                for (h = null; d; d = d.parentNode) t.push([d, q]), h = d;
                                h && h === g.ownerDocument && t.push([h.defaultView || h.parentWindow || n, q])
                            }
                            for (h = 0; h < t.length && !a.isPropagationStopped(); h++) d = t[h][0], a.type = t[h][1], (q = (b._data(d, "events") || {})[a.type] && b._data(d, "handle")) && q.apply(d, c), (q = k && d[k]) && b.acceptData(d) && !1 === q.apply(d, c) && a.preventDefault();
                            a.type = e;
                            f || a.isDefaultPrevented() || m._default && !1 !== m._default.apply(g.ownerDocument, c) || "click" === e && b.nodeName(g, "a") || !b.acceptData(g) || !k || !g[e] || ("focus" === e || "blur" === e) && 0 === a.target.offsetWidth || b.isWindow(g) || ((h = g[k]) && (g[k] = null), b.event.triggered = e, g[e](), b.event.triggered = l, h && (g[k] = h));
                            return a.result
                        }
                    } else
                        for (h in g = b.cache, g) g[h].events && g[h].events[e] && b.event.trigger(a, c, g[h].handle.elem, !0)
            }
        },
        dispatch: function(a) {
            a = b.event.fix(a || n.event);
            var c = (b._data(this, "events") || {})[a.type] || [],
                g = c.delegateCount,
                f = [].slice.call(arguments, 0),
                e = !a.exclusive && !a.namespace,
                d = b.event.special[a.type] || {},
                k = [],
                h, m, q, t, w, r, F;
            f[0] = a;
            a.delegateTarget = this;
            if (!d.preDispatch || !1 !== d.preDispatch.call(this, a)) {
                if (g && (!a.button || "click" !== a.type))
                    for (q = b(this), q.context = this.ownerDocument || this, m = a.target; m != this; m = m.parentNode || this)
                        if (!0 !== m.disabled) {
                            w = {};
                            r = [];
                            q[0] = m;
                            for (h = 0; h < g; h++) {
                                t = c[h];
                                F = t.selector;
                                if (w[F] === l) {
                                    var p = w,
                                        T = F,
                                        G;
                                    if (t.quick) {
                                        G = t.quick;
                                        var v = m.attributes || {};
                                        G = (!G[1] || m.nodeName.toLowerCase() ===
                                            G[1]) && (!G[2] || (v.id || {}).value === G[2]) && (!G[3] || G[3].test((v["class"] || {}).value))
                                    } else G = q.is(F);
                                    p[T] = G
                                }
                                w[F] && r.push(t)
                            }
                            r.length && k.push({
                                elem: m,
                                matches: r
                            })
                        }
                c.length > g && k.push({
                    elem: this,
                    matches: c.slice(g)
                });
                for (h = 0; h < k.length && !a.isPropagationStopped(); h++)
                    for (g = k[h], a.currentTarget = g.elem, c = 0; c < g.matches.length && !a.isImmediatePropagationStopped(); c++)
                        if (t = g.matches[c], e || !a.namespace && !t.namespace || a.namespace_re && a.namespace_re.test(t.namespace)) a.data = t.data, a.handleObj = t, t = ((b.event.special[t.origType] || {}).handle || t.handler).apply(g.elem, f), t !== l && (a.result = t, !1 === t && (a.preventDefault(), a.stopPropagation()));
                d.postDispatch && d.postDispatch.call(this, a);
                return a.result
            }
        },
        props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: ["char", "charCode", "key", "keyCode"],
            filter: function(a, c) {
                null == a.which && (a.which = null != c.charCode ? c.charCode : c.keyCode);
                return a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, c) {
                var b, f, e = c.button,
                    d = c.fromElement;
                null == a.pageX && null != c.clientX && (b = a.target.ownerDocument || q, f = b.documentElement, b = b.body, a.pageX = c.clientX + (f && f.scrollLeft || b && b.scrollLeft || 0) - (f && f.clientLeft || b && b.clientLeft || 0), a.pageY = c.clientY + (f && f.scrollTop || b && b.scrollTop || 0) - (f && f.clientTop || b && b.clientTop || 0));
                !a.relatedTarget && d && (a.relatedTarget = d ===
                    a.target ? c.toElement : d);
                a.which || e === l || (a.which = e & 1 ? 1 : e & 2 ? 3 : e & 4 ? 2 : 0);
                return a
            }
        },
        fix: function(a) {
            if (a[b.expando]) return a;
            var c, g, f = a,
                e = b.event.fixHooks[a.type] || {},
                d = e.props ? this.props.concat(e.props) : this.props;
            a = b.Event(f);
            for (c = d.length; c;) g = d[--c], a[g] = f[g];
            a.target || (a.target = f.srcElement || q);
            3 === a.target.nodeType && (a.target = a.target.parentNode);
            a.metaKey === l && (a.metaKey = a.ctrlKey);
            return e.filter ? e.filter(a, f) : a
        },
        special: {
            ready: {
                setup: b.bindReady
            },
            load: {
                noBubble: !0
            },
            focus: {
                delegateType: "focusin"
            },
            blur: {
                delegateType: "focusout"
            },
            beforeunload: {
                setup: function(a, c, g) {
                    b.isWindow(this) && (this.onbeforeunload = g)
                },
                teardown: function(a, c) {
                    this.onbeforeunload === c && (this.onbeforeunload = null)
                }
            }
        },
        simulate: function(a, c, g, f) {
            a = b.extend(new b.Event, g, {
                type: a,
                isSimulated: !0,
                originalEvent: {}
            });
            f ? b.event.trigger(a, null, c) : b.event.dispatch.call(c, a);
            a.isDefaultPrevented() && g.preventDefault()
        }
    };
    b.event.handle = b.event.dispatch;
    b.removeEvent = q.removeEventListener ? function(a, c, b) {
        a.removeEventListener && a.removeEventListener(c,
            b, !1)
    } : function(a, c, b) {
        a.detachEvent && a.detachEvent("on" + c, b)
    };
    b.Event = function(a, c) {
        if (!(this instanceof b.Event)) return new b.Event(a, c);
        a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || !1 === a.returnValue || a.getPreventDefault && a.getPreventDefault() ? B : r) : this.type = a;
        c && b.extend(this, c);
        this.timeStamp = a && a.timeStamp || b.now();
        this[b.expando] = !0
    };
    b.Event.prototype = {
        preventDefault: function() {
            this.isDefaultPrevented = B;
            var a = this.originalEvent;
            a && (a.preventDefault ?
                a.preventDefault() : a.returnValue = !1)
        },
        stopPropagation: function() {
            this.isPropagationStopped = B;
            var a = this.originalEvent;
            a && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = B;
            this.stopPropagation()
        },
        isDefaultPrevented: r,
        isPropagationStopped: r,
        isImmediatePropagationStopped: r
    };
    b.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(a, c) {
        b.event.special[a] = {
            delegateType: c,
            bindType: c,
            handle: function(a) {
                var f = a.relatedTarget,
                    e = a.handleObj,
                    d;
                if (!f || f !== this && !b.contains(this, f)) a.type = e.origType, d = e.handler.apply(this, arguments), a.type = c;
                return d
            }
        }
    });
    b.support.submitBubbles || (b.event.special.submit = {
        setup: function() {
            if (b.nodeName(this, "form")) return !1;
            b.event.add(this, "click._submit keypress._submit", function(a) {
                a = a.target;
                (a = b.nodeName(a, "input") || b.nodeName(a, "button") ? a.form : l) && !a._submit_attached && (b.event.add(a, "submit._submit", function(a) {
                    a._submit_bubble = !0
                }), a._submit_attached = !0)
            })
        },
        postDispatch: function(a) {
            a._submit_bubble &&
                (delete a._submit_bubble, this.parentNode && !a.isTrigger && b.event.simulate("submit", this.parentNode, a, !0))
        },
        teardown: function() {
            if (b.nodeName(this, "form")) return !1;
            b.event.remove(this, "._submit")
        }
    });
    b.support.changeBubbles || (b.event.special.change = {
        setup: function() {
            if (Ca.test(this.nodeName)) {
                if ("checkbox" === this.type || "radio" === this.type) b.event.add(this, "propertychange._change", function(a) {
                    "checked" === a.originalEvent.propertyName && (this._just_changed = !0)
                }), b.event.add(this, "click._change", function(a) {
                    this._just_changed &&
                        !a.isTrigger && (this._just_changed = !1, b.event.simulate("change", this, a, !0))
                });
                return !1
            }
            b.event.add(this, "beforeactivate._change", function(a) {
                a = a.target;
                Ca.test(a.nodeName) && !a._change_attached && (b.event.add(a, "change._change", function(a) {
                    !this.parentNode || a.isSimulated || a.isTrigger || b.event.simulate("change", this.parentNode, a, !0)
                }), a._change_attached = !0)
            })
        },
        handle: function(a) {
            var c = a.target;
            if (this !== c || a.isSimulated || a.isTrigger || "radio" !== c.type && "checkbox" !== c.type) return a.handleObj.handler.apply(this,
                arguments)
        },
        teardown: function() {
            b.event.remove(this, "._change");
            return Ca.test(this.nodeName)
        }
    });
    b.support.focusinBubbles || b.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, c) {
        var g = 0,
            f = function(a) {
                b.event.simulate(c, a.target, b.event.fix(a), !0)
            };
        b.event.special[c] = {
            setup: function() {
                0 === g++ && q.addEventListener(a, f, !0)
            },
            teardown: function() {
                0 === --g && q.removeEventListener(a, f, !0)
            }
        }
    });
    b.fn.extend({
        on: function(a, c, g, f, e) {
            var d, k;
            if ("object" === typeof a) {
                "string" !== typeof c && (g = g || c, c = l);
                for (k in a) this.on(k,
                    c, g, a[k], e);
                return this
            }
            null == g && null == f ? (f = c, g = c = l) : null == f && ("string" === typeof c ? (f = g, g = l) : (f = g, g = c, c = l));
            if (!1 === f) f = r;
            else if (!f) return this;
            1 === e && (d = f, f = function(a) {
                b().off(a);
                return d.apply(this, arguments)
            }, f.guid = d.guid || (d.guid = b.guid++));
            return this.each(function() {
                b.event.add(this, a, f, g, c)
            })
        },
        one: function(a, c, b, f) {
            return this.on(a, c, b, f, 1)
        },
        off: function(a, c, g) {
            if (a && a.preventDefault && a.handleObj) {
                var f = a.handleObj;
                b(a.delegateTarget).off(f.namespace ? f.origType + "." + f.namespace : f.origType,
                    f.selector, f.handler);
                return this
            }
            if ("object" === typeof a) {
                for (f in a) this.off(f, c, a[f]);
                return this
            }
            if (!1 === c || "function" === typeof c) g = c, c = l;
            !1 === g && (g = r);
            return this.each(function() {
                b.event.remove(this, a, g, c)
            })
        },
        bind: function(a, c, b) {
            return this.on(a, null, c, b)
        },
        unbind: function(a, c) {
            return this.off(a, null, c)
        },
        live: function(a, c, g) {
            b(this.context).on(a, this.selector, c, g);
            return this
        },
        die: function(a, c) {
            b(this.context).off(a, this.selector || "**", c);
            return this
        },
        delegate: function(a, c, b, f) {
            return this.on(c,
                a, b, f)
        },
        undelegate: function(a, c, b) {
            return 1 == arguments.length ? this.off(a, "**") : this.off(c, a, b)
        },
        trigger: function(a, c) {
            return this.each(function() {
                b.event.trigger(a, c, this)
            })
        },
        triggerHandler: function(a, c) {
            if (this[0]) return b.event.trigger(a, c, this[0], !0)
        },
        toggle: function(a) {
            var c = arguments,
                g = a.guid || b.guid++,
                f = 0,
                e = function(g) {
                    var e = (b._data(this, "lastToggle" + a.guid) || 0) % f;
                    b._data(this, "lastToggle" + a.guid, e + 1);
                    g.preventDefault();
                    return c[e].apply(this, arguments) || !1
                };
            for (e.guid = g; f < c.length;) c[f++].guid =
                g;
            return this.click(e)
        },
        hover: function(a, c) {
            return this.mouseenter(a).mouseleave(c || a)
        }
    });
    b.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, c) {
        b.fn[c] = function(a, b) {
            null == b && (b = a, a = null);
            return 0 < arguments.length ? this.on(c, null, a, b) : this.trigger(c)
        };
        b.attrFn && (b.attrFn[c] = !0);
        kb.test(c) && (b.event.fixHooks[c] = b.event.keyHooks);
        lb.test(c) && (b.event.fixHooks[c] = b.event.mouseHooks)
    });
    (function() {
        function a(a, c, b, g, e, d) {
            e = 0;
            for (var k = g.length; e < k; e++) {
                var h = g[e];
                if (h) {
                    for (var s = !1, h = h[a]; h;) {
                        if (h[f] === b) {
                            s = g[h.sizset];
                            break
                        }
                        1 !== h.nodeType || d || (h[f] = b, h.sizset = e);
                        if (h.nodeName.toLowerCase() === c) {
                            s = h;
                            break
                        }
                        h = h[a]
                    }
                    g[e] = s
                }
            }
        }

        function c(a, c, b, g, e, d) {
            e = 0;
            for (var h = g.length; e < h; e++) {
                var k = g[e];
                if (k) {
                    for (var s = !1, k = k[a]; k;) {
                        if (k[f] === b) {
                            s = g[k.sizset];
                            break
                        }
                        if (1 === k.nodeType)
                            if (d || (k[f] = b, k.sizset = e), "string" !== typeof c) {
                                if (k === c) {
                                    s = !0;
                                    break
                                }
                            } else if (0 < w.filter(c, [k]).length) {
                            s = k;
                            break
                        }
                        k = k[a]
                    }
                    g[e] = s
                }
            }
        }
        var g = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
            f = "sizcache" + (Math.random() + "").replace(".", ""),
            e = 0,
            d = Object.prototype.toString,
            k = !1,
            h = !0,
            m = /\\/g,
            n = /\r\n/g,
            t = /\W/;
        [0, 0].sort(function() {
            h = !1;
            return 0
        });
        var w = function(a, c, b, f) {
            b = b || [];
            var e = c = c || q;
            if (1 !== c.nodeType && 9 !== c.nodeType) return [];
            if (!a || "string" !== typeof a) return b;
            var k, h, s, l, m,
                C = !0,
                n = w.isXML(c),
                t = [],
                fa = a;
            do
                if (g.exec(""), k = g.exec(fa))
                    if (fa = k[3], t.push(k[1]), k[2]) {
                        l = k[3];
                        break
                    }
            while (k);
            if (1 < t.length && G.exec(a))
                if (2 === t.length && p.relative[t[0]]) h = A(t[0] + t[1], c, f);
                else
                    for (h = p.relative[t[0]] ? [c] : w(t.shift(), c); t.length;) a = t.shift(), p.relative[a] && (a += t.shift()), h = A(a, h, f);
            else if (!f && 1 < t.length && 9 === c.nodeType && !n && p.match.ID.test(t[0]) && !p.match.ID.test(t[t.length - 1]) && (k = w.find(t.shift(), c, n), c = k.expr ? w.filter(k.expr, k.set)[0] : k.set[0]), c)
                for (k = f ? {
                        expr: t.pop(),
                        set: u(f)
                    } :
                    w.find(t.pop(), 1 !== t.length || "~" !== t[0] && "+" !== t[0] || !c.parentNode ? c : c.parentNode, n), h = k.expr ? w.filter(k.expr, k.set) : k.set, 0 < t.length ? s = u(h) : C = !1; t.length;) k = m = t.pop(), p.relative[m] ? k = t.pop() : m = "", null == k && (k = c), p.relative[m](s, k, n);
            else s = [];
            s || (s = h);
            s || w.error(m || a);
            if ("[object Array]" === d.call(s))
                if (C)
                    if (c && 1 === c.nodeType)
                        for (a = 0; null != s[a]; a++) s[a] && (!0 === s[a] || 1 === s[a].nodeType && w.contains(c, s[a])) && b.push(h[a]);
                    else
                        for (a = 0; null != s[a]; a++) s[a] && 1 === s[a].nodeType && b.push(h[a]);
            else b.push.apply(b,
                s);
            else u(s, b);
            l && (w(l, e, b, f), w.uniqueSort(b));
            return b
        };
        w.uniqueSort = function(a) {
            if (D && (k = h, a.sort(D), k))
                for (var c = 1; c < a.length; c++) a[c] === a[c - 1] && a.splice(c--, 1);
            return a
        };
        w.matches = function(a, c) {
            return w(a, null, null, c)
        };
        w.matchesSelector = function(a, c) {
            return 0 < w(c, null, null, [a]).length
        };
        w.find = function(a, c, b) {
            var g, f, e, d, k, h;
            if (!a) return [];
            f = 0;
            for (e = p.order.length; f < e; f++)
                if (k = p.order[f], d = p.leftMatch[k].exec(a))
                    if (h = d[1], d.splice(1, 1), "\\" !== h.substr(h.length - 1) && (d[1] = (d[1] || "").replace(m, ""),
                            g = p.find[k](d, c, b), null != g)) {
                        a = a.replace(p.match[k], "");
                        break
                    }
            g || (g = "undefined" !== typeof c.getElementsByTagName ? c.getElementsByTagName("*") : []);
            return {
                set: g,
                expr: a
            }
        };
        w.filter = function(a, c, b, g) {
            for (var f, e, d, k, h, s, m, x, C = a, t = [], n = c, fa = c && c[0] && w.isXML(c[0]); a && c.length;) {
                for (d in p.filter)
                    if (null != (f = p.leftMatch[d].exec(a)) && f[2] && (s = p.filter[d], h = f[1], e = !1, f.splice(1, 1), "\\" !== h.substr(h.length - 1))) {
                        n === t && (t = []);
                        if (p.preFilter[d])
                            if (f = p.preFilter[d](f, n, b, t, g, fa), !f) e = k = !0;
                            else if (!0 === f) continue;
                        if (f)
                            for (m = 0; null != (h = n[m]); m++) h && (k = s(h, f, m, n), x = g ^ k, b && null != k ? x ? e = !0 : n[m] = !1 : x && (t.push(h), e = !0));
                        if (k !== l) {
                            b || (n = t);
                            a = a.replace(p.match[d], "");
                            if (!e) return [];
                            break
                        }
                    }
                if (a === C)
                    if (null == e) w.error(a);
                    else break;
                C = a
            }
            return n
        };
        w.error = function(a) {
            throw Error("Syntax error, unrecognized expression: " + a);
        };
        var r = w.getText = function(a) {
                var c, b;
                c = a.nodeType;
                var g = "";
                if (c)
                    if (1 === c || 9 === c || 11 === c) {
                        if ("string" === typeof a.textContent) return a.textContent;
                        if ("string" === typeof a.innerText) return a.innerText.replace(n,
                            "");
                        for (a = a.firstChild; a; a = a.nextSibling) g += r(a)
                    } else {
                        if (3 === c || 4 === c) return a.nodeValue
                    } else
                    for (c = 0; b = a[c]; c++) 8 !== b.nodeType && (g += r(b));
                return g
            },
            p = w.selectors = {
                order: ["ID", "NAME", "TAG"],
                match: {
                    ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                    CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                    NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
                    ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
                    TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
                    CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
                    POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
                    PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
                },
                leftMatch: {},
                attrMap: {
                    "class": "className",
                    "for": "htmlFor"
                },
                attrHandle: {
                    href: function(a) {
                        return a.getAttribute("href")
                    },
                    type: function(a) {
                        return a.getAttribute("type")
                    }
                },
                relative: {
                    "+": function(a, c) {
                        var b = "string" === typeof c,
                            g = b && !t.test(c),
                            b = b && !g;
                        g && (c = c.toLowerCase());
                        for (var g = 0, f = a.length, e; g < f; g++)
                            if (e = a[g]) {
                                for (;
                                    (e = e.previousSibling) && 1 !== e.nodeType;);
                                a[g] = b || e && e.nodeName.toLowerCase() === c ? e || !1 : e === c
                            }
                        b && w.filter(c, a, !0)
                    },
                    "\x3e": function(a, c) {
                        var b, g = "string" === typeof c,
                            f = 0,
                            e = a.length;
                        if (g && !t.test(c))
                            for (c = c.toLowerCase(); f < e; f++) {
                                if (b = a[f]) b = b.parentNode, a[f] = b.nodeName.toLowerCase() === c ? b : !1
                            } else {
                                for (; f < e; f++)(b = a[f]) && (a[f] = g ? b.parentNode : b.parentNode === c);
                                g && w.filter(c, a, !0)
                            }
                    },
                    "": function(b, g, f) {
                        var d, k = e++,
                            h = c;
                        "string" !== typeof g || t.test(g) || (d = g = g.toLowerCase(), h = a);
                        h("parentNode", g, k, b, d, f)
                    },
                    "~": function(b, g, f) {
                        var d, k = e++,
                            h = c;
                        "string" !==
                        typeof g || t.test(g) || (d = g = g.toLowerCase(), h = a);
                        h("previousSibling", g, k, b, d, f)
                    }
                },
                find: {
                    ID: function(a, c, b) {
                        if ("undefined" !== typeof c.getElementById && !b) return (a = c.getElementById(a[1])) && a.parentNode ? [a] : []
                    },
                    NAME: function(a, c) {
                        if ("undefined" !== typeof c.getElementsByName) {
                            for (var b = [], g = c.getElementsByName(a[1]), f = 0, e = g.length; f < e; f++) g[f].getAttribute("name") === a[1] && b.push(g[f]);
                            return 0 === b.length ? null : b
                        }
                    },
                    TAG: function(a, c) {
                        if ("undefined" !== typeof c.getElementsByTagName) return c.getElementsByTagName(a[1])
                    }
                },
                preFilter: {
                    CLASS: function(a, c, b, g, f, e) {
                        a = " " + a[1].replace(m, "") + " ";
                        if (e) return a;
                        e = 0;
                        for (var d; null != (d = c[e]); e++) d && (f ^ (d.className && 0 <= (" " + d.className + " ").replace(/[\t\n\r]/g, " ").indexOf(a)) ? b || g.push(d) : b && (c[e] = !1));
                        return !1
                    },
                    ID: function(a) {
                        return a[1].replace(m, "")
                    },
                    TAG: function(a, c) {
                        return a[1].replace(m, "").toLowerCase()
                    },
                    CHILD: function(a) {
                        if ("nth" === a[1]) {
                            a[2] || w.error(a[0]);
                            a[2] = a[2].replace(/^\+|\s*/g, "");
                            var c = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec("even" === a[2] && "2n" || "odd" === a[2] && "2n+1" ||
                                !/\D/.test(a[2]) && "0n+" + a[2] || a[2]);
                            a[2] = c[1] + (c[2] || 1) - 0;
                            a[3] = c[3] - 0
                        } else a[2] && w.error(a[0]);
                        a[0] = e++;
                        return a
                    },
                    ATTR: function(a, c, b, g, f, e) {
                        c = a[1] = a[1].replace(m, "");
                        !e && p.attrMap[c] && (a[1] = p.attrMap[c]);
                        a[4] = (a[4] || a[5] || "").replace(m, "");
                        "~\x3d" === a[2] && (a[4] = " " + a[4] + " ");
                        return a
                    },
                    PSEUDO: function(a, c, b, f, e) {
                        if ("not" === a[1])
                            if (1 < (g.exec(a[3]) || "").length || /^\w/.test(a[3])) a[3] = w(a[3], null, null, c);
                            else return a = w.filter(a[3], c, b, 1 ^ e), b || f.push.apply(f, a), !1;
                        else if (p.match.POS.test(a[0]) || p.match.CHILD.test(a[0])) return !0;
                        return a
                    },
                    POS: function(a) {
                        a.unshift(!0);
                        return a
                    }
                },
                filters: {
                    enabled: function(a) {
                        return !1 === a.disabled && "hidden" !== a.type
                    },
                    disabled: function(a) {
                        return !0 === a.disabled
                    },
                    checked: function(a) {
                        return !0 === a.checked
                    },
                    selected: function(a) {
                        a.parentNode && a.parentNode.selectedIndex;
                        return !0 === a.selected
                    },
                    parent: function(a) {
                        return !!a.firstChild
                    },
                    empty: function(a) {
                        return !a.firstChild
                    },
                    has: function(a, c, b) {
                        return !!w(b[3], a).length
                    },
                    header: function(a) {
                        return /h\d/i.test(a.nodeName)
                    },
                    text: function(a) {
                        var c = a.getAttribute("type"),
                            b = a.type;
                        return "input" === a.nodeName.toLowerCase() && "text" === b && (c === b || null === c)
                    },
                    radio: function(a) {
                        return "input" === a.nodeName.toLowerCase() && "radio" === a.type
                    },
                    checkbox: function(a) {
                        return "input" === a.nodeName.toLowerCase() && "checkbox" === a.type
                    },
                    file: function(a) {
                        return "input" === a.nodeName.toLowerCase() && "file" === a.type
                    },
                    password: function(a) {
                        return "input" === a.nodeName.toLowerCase() && "password" === a.type
                    },
                    submit: function(a) {
                        var c = a.nodeName.toLowerCase();
                        return ("input" === c || "button" === c) && "submit" === a.type
                    },
                    image: function(a) {
                        return "input" === a.nodeName.toLowerCase() && "image" === a.type
                    },
                    reset: function(a) {
                        var c = a.nodeName.toLowerCase();
                        return ("input" === c || "button" === c) && "reset" === a.type
                    },
                    button: function(a) {
                        var c = a.nodeName.toLowerCase();
                        return "input" === c && "button" === a.type || "button" === c
                    },
                    input: function(a) {
                        return /input|select|textarea|button/i.test(a.nodeName)
                    },
                    focus: function(a) {
                        return a === a.ownerDocument.activeElement
                    }
                },
                setFilters: {
                    first: function(a, c) {
                        return 0 === c
                    },
                    last: function(a, c, b, g) {
                        return c === g.length -
                            1
                    },
                    even: function(a, c) {
                        return 0 === c % 2
                    },
                    odd: function(a, c) {
                        return 1 === c % 2
                    },
                    lt: function(a, c, b) {
                        return c < b[3] - 0
                    },
                    gt: function(a, c, b) {
                        return c > b[3] - 0
                    },
                    nth: function(a, c, b) {
                        return b[3] - 0 === c
                    },
                    eq: function(a, c, b) {
                        return b[3] - 0 === c
                    }
                },
                filter: {
                    PSEUDO: function(a, c, b, g) {
                        var f = c[1],
                            e = p.filters[f];
                        if (e) return e(a, b, c, g);
                        if ("contains" === f) return 0 <= (a.textContent || a.innerText || r([a]) || "").indexOf(c[3]);
                        if ("not" === f) {
                            c = c[3];
                            b = 0;
                            for (g = c.length; b < g; b++)
                                if (c[b] === a) return !1;
                            return !0
                        }
                        w.error(f)
                    },
                    CHILD: function(a, c) {
                        var b,
                            g, e, d, k, h;
                        b = c[1];
                        h = a;
                        switch (b) {
                            case "only":
                            case "first":
                                for (; h = h.previousSibling;)
                                    if (1 === h.nodeType) return !1;
                                if ("first" === b) return !0;
                                h = a;
                            case "last":
                                for (; h = h.nextSibling;)
                                    if (1 === h.nodeType) return !1;
                                return !0;
                            case "nth":
                                b = c[2];
                                g = c[3];
                                if (1 === b && 0 === g) return !0;
                                e = c[0];
                                if ((d = a.parentNode) && (d[f] !== e || !a.nodeIndex)) {
                                    k = 0;
                                    for (h = d.firstChild; h; h = h.nextSibling) 1 === h.nodeType && (h.nodeIndex = ++k);
                                    d[f] = e
                                }
                                h = a.nodeIndex - g;
                                return 0 === b ? 0 === h : 0 === h % b && 0 <= h / b
                        }
                    },
                    ID: function(a, c) {
                        return 1 === a.nodeType && a.getAttribute("id") ===
                            c
                    },
                    TAG: function(a, c) {
                        return "*" === c && 1 === a.nodeType || !!a.nodeName && a.nodeName.toLowerCase() === c
                    },
                    CLASS: function(a, c) {
                        return -1 < (" " + (a.className || a.getAttribute("class")) + " ").indexOf(c)
                    },
                    ATTR: function(a, c) {
                        var b = c[1],
                            b = w.attr ? w.attr(a, b) : p.attrHandle[b] ? p.attrHandle[b](a) : null != a[b] ? a[b] : a.getAttribute(b),
                            g = b + "",
                            f = c[2],
                            e = c[4];
                        return null == b ? "!\x3d" === f : !f && w.attr ? null != b : "\x3d" === f ? g === e : "*\x3d" === f ? 0 <= g.indexOf(e) : "~\x3d" === f ? 0 <= (" " + g + " ").indexOf(e) : e ? "!\x3d" === f ? g !== e : "^\x3d" === f ? 0 === g.indexOf(e) :
                            "$\x3d" === f ? g.substr(g.length - e.length) === e : "|\x3d" === f ? g === e || g.substr(0, e.length + 1) === e + "-" : !1 : g && !1 !== b
                    },
                    POS: function(a, c, b, g) {
                        var f = p.setFilters[c[2]];
                        if (f) return f(a, b, c, g)
                    }
                }
            },
            G = p.match.POS,
            T = function(a, c) {
                return "\\" + (c - 0 + 1)
            },
            v;
        for (v in p.match) p.match[v] = RegExp(p.match[v].source + /(?![^\[]*\])(?![^\(]*\))/.source), p.leftMatch[v] = RegExp(/(^(?:.|\r|\n)*?)/.source + p.match[v].source.replace(/\\(\d+)/g, T));
        p.match.globalPOS = G;
        var u = function(a, c) {
            a = Array.prototype.slice.call(a, 0);
            return c ? (c.push.apply(c,
                a), c) : a
        };
        try {
            Array.prototype.slice.call(q.documentElement.childNodes, 0)[0].nodeType
        } catch (B) {
            u = function(a, c) {
                var b = 0,
                    g = c || [];
                if ("[object Array]" === d.call(a)) Array.prototype.push.apply(g, a);
                else if ("number" === typeof a.length)
                    for (var f = a.length; b < f; b++) g.push(a[b]);
                else
                    for (; a[b]; b++) g.push(a[b]);
                return g
            }
        }
        var D, z;
        q.documentElement.compareDocumentPosition ? D = function(a, c) {
            return a === c ? (k = !0, 0) : a.compareDocumentPosition && c.compareDocumentPosition ? a.compareDocumentPosition(c) & 4 ? -1 : 1 : a.compareDocumentPosition ?
                -1 : 1
        } : (D = function(a, c) {
            if (a === c) return k = !0, 0;
            if (a.sourceIndex && c.sourceIndex) return a.sourceIndex - c.sourceIndex;
            var b, g, f = [],
                e = [];
            b = a.parentNode;
            g = c.parentNode;
            var d = b;
            if (b === g) return z(a, c);
            if (!b) return -1;
            if (!g) return 1;
            for (; d;) f.unshift(d), d = d.parentNode;
            for (d = g; d;) e.unshift(d), d = d.parentNode;
            b = f.length;
            g = e.length;
            for (d = 0; d < b && d < g; d++)
                if (f[d] !== e[d]) return z(f[d], e[d]);
            return d === b ? z(a, e[d], -1) : z(f[d], c, 1)
        }, z = function(a, c, b) {
            if (a === c) return b;
            for (a = a.nextSibling; a;) {
                if (a === c) return -1;
                a = a.nextSibling
            }
            return 1
        });
        (function() {
            var a = q.createElement("div"),
                c = "script" + (new Date).getTime(),
                b = q.documentElement;
            a.innerHTML = "\x3ca name\x3d'" + c + "'/\x3e";
            b.insertBefore(a, b.firstChild);
            q.getElementById(c) && (p.find.ID = function(a, c, b) {
                if ("undefined" !== typeof c.getElementById && !b) return (c = c.getElementById(a[1])) ? c.id === a[1] || "undefined" !== typeof c.getAttributeNode && c.getAttributeNode("id").nodeValue === a[1] ? [c] : l : []
            }, p.filter.ID = function(a, c) {
                var b = "undefined" !== typeof a.getAttributeNode && a.getAttributeNode("id");
                return 1 ===
                    a.nodeType && b && b.nodeValue === c
            });
            b.removeChild(a);
            b = a = null
        })();
        (function() {
            var a = q.createElement("div");
            a.appendChild(q.createComment(""));
            0 < a.getElementsByTagName("*").length && (p.find.TAG = function(a, c) {
                var b = c.getElementsByTagName(a[1]);
                if ("*" === a[1]) {
                    for (var g = [], f = 0; b[f]; f++) 1 === b[f].nodeType && g.push(b[f]);
                    b = g
                }
                return b
            });
            a.innerHTML = "\x3ca href\x3d'#'\x3e\x3c/a\x3e";
            a.firstChild && "undefined" !== typeof a.firstChild.getAttribute && "#" !== a.firstChild.getAttribute("href") && (p.attrHandle.href = function(a) {
                return a.getAttribute("href",
                    2)
            });
            a = null
        })();
        q.querySelectorAll && function() {
            var a = w,
                c = q.createElement("div");
            c.innerHTML = "\x3cp class\x3d'TEST'\x3e\x3c/p\x3e";
            if (!c.querySelectorAll || 0 !== c.querySelectorAll(".TEST").length) {
                w = function(c, b, g, f) {
                    b = b || q;
                    if (!f && !w.isXML(b)) {
                        var e = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(c);
                        if (e && (1 === b.nodeType || 9 === b.nodeType)) {
                            if (e[1]) return u(b.getElementsByTagName(c), g);
                            if (e[2] && p.find.CLASS && b.getElementsByClassName) return u(b.getElementsByClassName(e[2]), g)
                        }
                        if (9 === b.nodeType) {
                            if ("body" === c &&
                                b.body) return u([b.body], g);
                            if (e && e[3]) {
                                var d = b.getElementById(e[3]);
                                if (d && d.parentNode) {
                                    if (d.id === e[3]) return u([d], g)
                                } else return u([], g)
                            }
                            try {
                                return u(b.querySelectorAll(c), g)
                            } catch (k) {}
                        } else if (1 === b.nodeType && "object" !== b.nodeName.toLowerCase()) {
                            var e = b,
                                h = (d = b.getAttribute("id")) || "__sizzle__",
                                s = b.parentNode,
                                m = /^\s*[+~]/.test(c);
                            d ? h = h.replace(/'/g, "\\$\x26") : b.setAttribute("id", h);
                            m && s && (b = b.parentNode);
                            try {
                                if (!m || s) return u(b.querySelectorAll("[id\x3d'" + h + "'] " + c), g)
                            } catch (l) {} finally {
                                d || e.removeAttribute("id")
                            }
                        }
                    }
                    return a(c,
                        b, g, f)
                };
                for (var b in a) w[b] = a[b];
                c = null
            }
        }();
        (function() {
            var a = q.documentElement,
                c = a.matchesSelector || a.mozMatchesSelector || a.webkitMatchesSelector || a.msMatchesSelector;
            if (c) {
                var b = !c.call(q.createElement("div"), "div"),
                    g = !1;
                try {
                    c.call(q.documentElement, "[test!\x3d'']:sizzle")
                } catch (f) {
                    g = !0
                }
                w.matchesSelector = function(a, f) {
                    f = f.replace(/\=\s*([^'"\]]*)\s*\]/g, "\x3d'$1']");
                    if (!w.isXML(a)) try {
                        if (g || !p.match.PSEUDO.test(f) && !/!=/.test(f)) {
                            var e = c.call(a, f);
                            if (e || !b || a.document && 11 !== a.document.nodeType) return e
                        }
                    } catch (d) {}
                    return 0 <
                        w(f, null, null, [a]).length
                }
            }
        })();
        (function() {
            var a = q.createElement("div");
            a.innerHTML = "\x3cdiv class\x3d'test e'\x3e\x3c/div\x3e\x3cdiv class\x3d'test'\x3e\x3c/div\x3e";
            a.getElementsByClassName && 0 !== a.getElementsByClassName("e").length && (a.lastChild.className = "e", 1 !== a.getElementsByClassName("e").length && (p.order.splice(1, 0, "CLASS"), p.find.CLASS = function(a, c, b) {
                if ("undefined" !== typeof c.getElementsByClassName && !b) return c.getElementsByClassName(a[1])
            }, a = null))
        })();
        w.contains = q.documentElement.contains ?
            function(a, c) {
                return a !== c && (a.contains ? a.contains(c) : !0)
            } : q.documentElement.compareDocumentPosition ? function(a, c) {
                return !!(a.compareDocumentPosition(c) & 16)
            } : function() {
                return !1
            };
        w.isXML = function(a) {
            return (a = (a ? a.ownerDocument || a : 0).documentElement) ? "HTML" !== a.nodeName : !1
        };
        var A = function(a, c, b) {
            var g, f = [],
                e = "";
            for (c = c.nodeType ? [c] : c; g = p.match.PSEUDO.exec(a);) e += g[0], a = a.replace(p.match.PSEUDO, "");
            a = p.relative[a] ? a + "*" : a;
            g = 0;
            for (var d = c.length; g < d; g++) w(a, c[g], f, b);
            return w.filter(e, f)
        };
        w.attr = b.attr;
        w.selectors.attrMap = {};
        b.find = w;
        b.expr = w.selectors;
        b.expr[":"] = b.expr.filters;
        b.unique = w.uniqueSort;
        b.text = w.getText;
        b.isXMLDoc = w.isXML;
        b.contains = w.contains
    })();
    var ob = /Until$/,
        pb = /^(?:parents|prevUntil|prevAll)/,
        qb = /,/,
        gb = /^.[^:#\[\.,]*$/,
        rb = Array.prototype.slice,
        Ra = b.expr.match.globalPOS,
        sb = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    b.fn.extend({
        find: function(a) {
            var c = this,
                g, f;
            if ("string" !== typeof a) return b(a).filter(function() {
                g = 0;
                for (f = c.length; g < f; g++)
                    if (b.contains(c[g], this)) return !0
            });
            var e =
                this.pushStack("", "find", a),
                d, k, h;
            g = 0;
            for (f = this.length; g < f; g++)
                if (d = e.length, b.find(a, this[g], e), 0 < g)
                    for (k = d; k < e.length; k++)
                        for (h = 0; h < d; h++)
                            if (e[h] === e[k]) {
                                e.splice(k--, 1);
                                break
                            }
            return e
        },
        has: function(a) {
            var c = b(a);
            return this.filter(function() {
                for (var a = 0, f = c.length; a < f; a++)
                    if (b.contains(this, c[a])) return !0
            })
        },
        not: function(a) {
            return this.pushStack(M(this, a, !1), "not", a)
        },
        filter: function(a) {
            return this.pushStack(M(this, a, !0), "filter", a)
        },
        is: function(a) {
            return !!a && ("string" === typeof a ? Ra.test(a) ? 0 <=
                b(a, this.context).index(this[0]) : 0 < b.filter(a, this).length : 0 < this.filter(a).length)
        },
        closest: function(a, c) {
            var g = [],
                f, e, d = this[0];
            if (b.isArray(a)) {
                for (e = 1; d && d.ownerDocument && d !== c;) {
                    for (f = 0; f < a.length; f++) b(d).is(a[f]) && g.push({
                        selector: a[f],
                        elem: d,
                        level: e
                    });
                    d = d.parentNode;
                    e++
                }
                return g
            }
            var k = Ra.test(a) || "string" !== typeof a ? b(a, c || this.context) : 0;
            f = 0;
            for (e = this.length; f < e; f++)
                for (d = this[f]; d;)
                    if (k ? -1 < k.index(d) : b.find.matchesSelector(d, a)) {
                        g.push(d);
                        break
                    } else if (d = d.parentNode, !d || !d.ownerDocument ||
                d === c || 11 === d.nodeType) break;
            g = 1 < g.length ? b.unique(g) : g;
            return this.pushStack(g, "closest", a)
        },
        index: function(a) {
            return a ? "string" === typeof a ? b.inArray(this[0], b(a)) : b.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.prevAll().length : -1
        },
        add: function(a, c) {
            var g = "string" === typeof a ? b(a, c) : b.makeArray(a && a.nodeType ? [a] : a),
                f = b.merge(this.get(), g);
            return this.pushStack(E(g[0]) || E(f[0]) ? f : b.unique(f))
        },
        andSelf: function() {
            return this.add(this.prevObject)
        }
    });
    b.each({
        parent: function(a) {
            return (a =
                a.parentNode) && 11 !== a.nodeType ? a : null
        },
        parents: function(a) {
            return b.dir(a, "parentNode")
        },
        parentsUntil: function(a, c, g) {
            return b.dir(a, "parentNode", g)
        },
        next: function(a) {
            return b.nth(a, 2, "nextSibling")
        },
        prev: function(a) {
            return b.nth(a, 2, "previousSibling")
        },
        nextAll: function(a) {
            return b.dir(a, "nextSibling")
        },
        prevAll: function(a) {
            return b.dir(a, "previousSibling")
        },
        nextUntil: function(a, c, g) {
            return b.dir(a, "nextSibling", g)
        },
        prevUntil: function(a, c, g) {
            return b.dir(a, "previousSibling", g)
        },
        siblings: function(a) {
            return b.sibling((a.parentNode || {}).firstChild, a)
        },
        children: function(a) {
            return b.sibling(a.firstChild)
        },
        contents: function(a) {
            return b.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : b.makeArray(a.childNodes)
        }
    }, function(a, c) {
        b.fn[a] = function(g, f) {
            var e = b.map(this, c, g);
            ob.test(a) || (f = g);
            f && "string" === typeof f && (e = b.filter(f, e));
            e = 1 < this.length && !sb[a] ? b.unique(e) : e;
            (1 < this.length || qb.test(f)) && pb.test(a) && (e = e.reverse());
            return this.pushStack(e, a, rb.call(arguments).join(","))
        }
    });
    b.extend({
        filter: function(a, c, g) {
            g &&
                (a = ":not(" + a + ")");
            return 1 === c.length ? b.find.matchesSelector(c[0], a) ? [c[0]] : [] : b.find.matches(a, c)
        },
        dir: function(a, c, g) {
            var e = [];
            for (a = a[c]; a && 9 !== a.nodeType && (g === l || 1 !== a.nodeType || !b(a).is(g));) 1 === a.nodeType && e.push(a), a = a[c];
            return e
        },
        nth: function(a, c, b, e) {
            c = c || 1;
            for (e = 0; a && (1 !== a.nodeType || ++e !== c); a = a[b]);
            return a
        },
        sibling: function(a, c) {
            for (var b = []; a; a = a.nextSibling) 1 === a.nodeType && a !== c && b.push(a);
            return b
        }
    });
    var Ha = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        tb = / jQuery\d+="(?:\d+|null)"/g,
        Da = /^\s+/,
        Sa = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,
        Ta = /<([\w:]+)/,
        ub = /<tbody/i,
        vb = /<|&#?\w+;/,
        wb = /<(?:script|style)/i,
        xb = /<(?:script|object|embed|option|style)/i,
        Ua = RegExp("\x3c(?:" + Ha + ")[\\s/\x3e]", "i"),
        Va = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Wa = /\/(java|ecma)script/i,
        yb = /^\s*<!(?:\[CDATA\[|\-\-)/,
        O = {
            option: [1, "\x3cselect multiple\x3d'multiple'\x3e", "\x3c/select\x3e"],
            legend: [1, "\x3cfieldset\x3e", "\x3c/fieldset\x3e"],
            thead: [1, "\x3ctable\x3e",
                "\x3c/table\x3e"
            ],
            tr: [2, "\x3ctable\x3e\x3ctbody\x3e", "\x3c/tbody\x3e\x3c/table\x3e"],
            td: [3, "\x3ctable\x3e\x3ctbody\x3e\x3ctr\x3e", "\x3c/tr\x3e\x3c/tbody\x3e\x3c/table\x3e"],
            col: [2, "\x3ctable\x3e\x3ctbody\x3e\x3c/tbody\x3e\x3ccolgroup\x3e", "\x3c/colgroup\x3e\x3c/table\x3e"],
            area: [1, "\x3cmap\x3e", "\x3c/map\x3e"],
            _default: [0, "", ""]
        },
        Ea = A(q);
    O.optgroup = O.option;
    O.tbody = O.tfoot = O.colgroup = O.caption = O.thead;
    O.th = O.td;
    b.support.htmlSerialize || (O._default = [1, "div\x3cdiv\x3e", "\x3c/div\x3e"]);
    b.fn.extend({
        text: function(a) {
            return b.access(this,
                function(a) {
                    return a === l ? b.text(this) : this.empty().append((this[0] && this[0].ownerDocument || q).createTextNode(a))
                }, null, a, arguments.length)
        },
        wrapAll: function(a) {
            if (b.isFunction(a)) return this.each(function(c) {
                b(this).wrapAll(a.call(this, c))
            });
            if (this[0]) {
                var c = b(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && c.insertBefore(this[0]);
                c.map(function() {
                    for (var a = this; a.firstChild && 1 === a.firstChild.nodeType;) a = a.firstChild;
                    return a
                }).append(this)
            }
            return this
        },
        wrapInner: function(a) {
            return b.isFunction(a) ?
                this.each(function(c) {
                    b(this).wrapInner(a.call(this, c))
                }) : this.each(function() {
                    var c = b(this),
                        g = c.contents();
                    g.length ? g.wrapAll(a) : c.append(a)
                })
        },
        wrap: function(a) {
            var c = b.isFunction(a);
            return this.each(function(g) {
                b(this).wrapAll(c ? a.call(this, g) : a)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                b.nodeName(this, "body") || b(this).replaceWith(this.childNodes)
            }).end()
        },
        append: function() {
            return this.domManip(arguments, !0, function(a) {
                1 === this.nodeType && this.appendChild(a)
            })
        },
        prepend: function() {
            return this.domManip(arguments, !0, function(a) {
                1 === this.nodeType && this.insertBefore(a, this.firstChild)
            })
        },
        before: function() {
            if (this[0] && this[0].parentNode) return this.domManip(arguments, !1, function(a) {
                this.parentNode.insertBefore(a, this)
            });
            if (arguments.length) {
                var a = b.clean(arguments);
                a.push.apply(a, this.toArray());
                return this.pushStack(a, "before", arguments)
            }
        },
        after: function() {
            if (this[0] && this[0].parentNode) return this.domManip(arguments, !1, function(a) {
                this.parentNode.insertBefore(a, this.nextSibling)
            });
            if (arguments.length) {
                var a =
                    this.pushStack(this, "after", arguments);
                a.push.apply(a, b.clean(arguments));
                return a
            }
        },
        remove: function(a, c) {
            for (var g = 0, e; null != (e = this[g]); g++)
                if (!a || b.filter(a, [e]).length) c || 1 !== e.nodeType || (b.cleanData(e.getElementsByTagName("*")), b.cleanData([e])), e.parentNode && e.parentNode.removeChild(e);
            return this
        },
        empty: function() {
            for (var a = 0, c; null != (c = this[a]); a++)
                for (1 === c.nodeType && b.cleanData(c.getElementsByTagName("*")); c.firstChild;) c.removeChild(c.firstChild);
            return this
        },
        clone: function(a, c) {
            a = null ==
                a ? !1 : a;
            c = null == c ? a : c;
            return this.map(function() {
                return b.clone(this, a, c)
            })
        },
        html: function(a) {
            return b.access(this, function(a) {
                var g = this[0] || {},
                    e = 0,
                    d = this.length;
                if (a === l) return 1 === g.nodeType ? g.innerHTML.replace(tb, "") : null;
                if ("string" === typeof a && !(wb.test(a) || !b.support.leadingWhitespace && Da.test(a) || O[(Ta.exec(a) || ["", ""])[1].toLowerCase()])) {
                    a = a.replace(Sa, "\x3c$1\x3e\x3c/$2\x3e");
                    try {
                        for (; e < d; e++) g = this[e] || {}, 1 === g.nodeType && (b.cleanData(g.getElementsByTagName("*")), g.innerHTML = a);
                        g = 0
                    } catch (k) {}
                }
                g &&
                    this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function(a) {
            if (this[0] && this[0].parentNode) {
                if (b.isFunction(a)) return this.each(function(c) {
                    var g = b(this),
                        e = g.html();
                    g.replaceWith(a.call(this, c, e))
                });
                "string" !== typeof a && (a = b(a).detach());
                return this.each(function() {
                    var c = this.nextSibling,
                        g = this.parentNode;
                    b(this).remove();
                    c ? b(c).before(a) : b(g).append(a)
                })
            }
            return this.length ? this.pushStack(b(b.isFunction(a) ? a() : a), "replaceWith", a) : this
        },
        detach: function(a) {
            return this.remove(a, !0)
        },
        domManip: function(a,
            c, g) {
            var e, d, k, h = a[0],
                m = [];
            if (!b.support.checkClone && 3 === arguments.length && "string" === typeof h && Va.test(h)) return this.each(function() {
                b(this).domManip(a, c, g, !0)
            });
            if (b.isFunction(h)) return this.each(function(e) {
                var f = b(this);
                a[0] = h.call(this, e, c ? f.html() : l);
                f.domManip(a, c, g)
            });
            if (this[0]) {
                e = h && h.parentNode;
                e = b.support.parentNode && e && 11 === e.nodeType && e.childNodes.length === this.length ? {
                    fragment: e
                } : b.buildFragment(a, this, m);
                k = e.fragment;
                if (d = 1 === k.childNodes.length ? k = k.firstChild : k.firstChild) {
                    c = c &&
                        b.nodeName(d, "tr");
                    for (var t = 0, n = this.length, p = n - 1; t < n; t++) g.call(c ? N(this[t], d) : this[t], e.cacheable || 1 < n && t < p ? b.clone(k, !0, !0) : k)
                }
                m.length && b.each(m, function(a, c) {
                    c.src ? b.ajax({
                        type: "GET",
                        global: !1,
                        url: c.src,
                        async: !1,
                        dataType: "script"
                    }) : b.globalEval((c.text || c.textContent || c.innerHTML || "").replace(yb, "/*$0*/"));
                    c.parentNode && c.parentNode.removeChild(c)
                })
            }
            return this
        }
    });
    b.buildFragment = function(a, c, g) {
        var e, d, k, h, m = a[0];
        c && c[0] && (h = c[0].ownerDocument || c[0]);
        h.createDocumentFragment || (h = q);
        1 === a.length &&
            "string" === typeof m && 512 > m.length && h === q && "\x3c" === m.charAt(0) && !(xb.test(m) || !b.support.checkClone && Va.test(m) || !b.support.html5Clone && Ua.test(m)) && (d = !0, (k = b.fragments[m]) && 1 !== k && (e = k));
        e || (e = h.createDocumentFragment(), b.clean(a, h, e, g));
        d && (b.fragments[m] = k ? e : 1);
        return {
            fragment: e,
            cacheable: d
        }
    };
    b.fragments = {};
    b.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, c) {
        b.fn[a] = function(e) {
            var f = [];
            e = b(e);
            var d = 1 === this.length && this[0].parentNode;
            if (d && 11 === d.nodeType && 1 === d.childNodes.length && 1 === e.length) return e[c](this[0]), this;
            for (var d = 0, k = e.length; d < k; d++) {
                var h = (0 < d ? this.clone(!0) : this).get();
                b(e[d])[c](h);
                f = f.concat(h)
            }
            return this.pushStack(f, a, e.selector)
        }
    });
    b.extend({
        clone: function(a, c, e) {
            var f, d, k;
            b.support.html5Clone || b.isXMLDoc(a) || !Ua.test("\x3c" + a.nodeName + "\x3e") ? f = a.cloneNode(!0) : (f = q.createElement("div"), Ea.appendChild(f), f.innerHTML = a.outerHTML, f = f.firstChild);
            var h = f;
            if (!(b.support.noCloneEvent && b.support.noCloneChecked ||
                    1 !== a.nodeType && 11 !== a.nodeType || b.isXMLDoc(a)))
                for (Z(a, h), f = S(a), d = S(h), k = 0; f[k]; ++k) d[k] && Z(f[k], d[k]);
            if (c && (ba(a, h), e))
                for (f = S(a), d = S(h), k = 0; f[k]; ++k) ba(f[k], d[k]);
            return h
        },
        clean: function(a, c, e, f) {
            var d, k = [];
            c = c || q;
            "undefined" === typeof c.createElement && (c = c.ownerDocument || c[0] && c[0].ownerDocument || q);
            for (var h = 0, m; null != (m = a[h]); h++)
                if ("number" === typeof m && (m += ""), m) {
                    if ("string" === typeof m)
                        if (vb.test(m)) {
                            m = m.replace(Sa, "\x3c$1\x3e\x3c/$2\x3e");
                            d = (Ta.exec(m) || ["", ""])[1].toLowerCase();
                            var l = O[d] ||
                                O._default,
                                t = l[0],
                                n = c.createElement("div"),
                                p = Ea.childNodes;
                            c === q ? Ea.appendChild(n) : A(c).appendChild(n);
                            for (n.innerHTML = l[1] + m + l[2]; t--;) n = n.lastChild;
                            if (!b.support.tbody)
                                for (t = ub.test(m), l = "table" !== d || t ? "\x3ctable\x3e" !== l[1] || t ? [] : n.childNodes : n.firstChild && n.firstChild.childNodes, d = l.length - 1; 0 <= d; --d) b.nodeName(l[d], "tbody") && !l[d].childNodes.length && l[d].parentNode.removeChild(l[d]);
                            !b.support.leadingWhitespace && Da.test(m) && n.insertBefore(c.createTextNode(Da.exec(m)[0]), n.firstChild);
                            m = n.childNodes;
                            n && (n.parentNode.removeChild(n), 0 < p.length && (n = p[p.length - 1]) && n.parentNode && n.parentNode.removeChild(n))
                        } else m = c.createTextNode(m);
                    var r;
                    if (!b.support.appendChecked)
                        if (m[0] && "number" === typeof(r = m.length))
                            for (d = 0; d < r; d++) da(m[d]);
                        else da(m);
                    m.nodeType ? k.push(m) : k = b.merge(k, m)
                }
            if (e)
                for (a = function(a) {
                        return !a.type || Wa.test(a.type)
                    }, h = 0; k[h]; h++) c = k[h], f && b.nodeName(c, "script") && (!c.type || Wa.test(c.type)) ? f.push(c.parentNode ? c.parentNode.removeChild(c) : c) : (1 === c.nodeType && (m = b.grep(c.getElementsByTagName("script"),
                    a), k.splice.apply(k, [h + 1, 0].concat(m))), e.appendChild(c));
            return k
        },
        cleanData: function(a) {
            for (var c, e, f = b.cache, d = b.event.special, k = b.support.deleteExpando, h = 0, m; null != (m = a[h]); h++)
                if (!m.nodeName || !b.noData[m.nodeName.toLowerCase()])
                    if (e = m[b.expando]) {
                        if ((c = f[e]) && c.events) {
                            for (var l in c.events) d[l] ? b.event.remove(m, l) : b.removeEvent(m, l, c.handle);
                            c.handle && (c.handle.elem = null)
                        }
                        k ? delete m[b.expando] : m.removeAttribute && m.removeAttribute(b.expando);
                        delete f[e]
                    }
        }
    });
    var Fa = /alpha\([^)]*\)/i,
        zb = /opacity=([^)]*)/,
        Ab = /([A-Z]|^ms)/g,
        Bb = /^[\-+]?(?:\d*\.)?\d+$/i,
        xa = /^-?(?:\d*\.)?\d+(?!px)[^\d\s]+$/i,
        Cb = /^([\-+])=([\-+.\de]+)/,
        Db = /^margin/,
        Eb = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        ea = ["Top", "Right", "Bottom", "Left"],
        ia, Xa, Ya;
    b.fn.css = function(a, c) {
        return b.access(this, function(a, c, e) {
            return e !== l ? b.style(a, c, e) : b.css(a, c)
        }, a, c, 1 < arguments.length)
    };
    b.extend({
        cssHooks: {
            opacity: {
                get: function(a, c) {
                    if (c) {
                        var b = ia(a, "opacity");
                        return "" === b ? "1" : b
                    }
                    return a.style.opacity
                }
            }
        },
        cssNumber: {
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": b.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(a, c, e, f) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var d, k = b.camelCase(c),
                    h = a.style,
                    m = b.cssHooks[k];
                c = b.cssProps[k] || k;
                if (e !== l) {
                    if (f = typeof e, "string" === f && (d = Cb.exec(e)) && (e = +(d[1] + 1) * +d[2] + parseFloat(b.css(a, c)), f = "number"), !(null == e || "number" === f && isNaN(e) || ("number" !== f || b.cssNumber[k] || (e += "px"), m && "set" in m && (e = m.set(a, e)) === l))) try {
                        h[c] = e
                    } catch (t) {}
                } else return m &&
                    "get" in m && (d = m.get(a, !1, f)) !== l ? d : h[c]
            }
        },
        css: function(a, c, e) {
            var f, d;
            c = b.camelCase(c);
            d = b.cssHooks[c];
            c = b.cssProps[c] || c;
            "cssFloat" === c && (c = "float");
            if (d && "get" in d && (f = d.get(a, !0, e)) !== l) return f;
            if (ia) return ia(a, c)
        },
        swap: function(a, c, b) {
            var e = {},
                d;
            for (d in c) e[d] = a.style[d], a.style[d] = c[d];
            b = b.call(a);
            for (d in c) a.style[d] = e[d];
            return b
        }
    });
    b.curCSS = b.css;
    q.defaultView && q.defaultView.getComputedStyle && (Xa = function(a, c) {
        var e, f, d, k = a.style;
        c = c.replace(Ab, "-$1").toLowerCase();
        (f = a.ownerDocument.defaultView) &&
        (d = f.getComputedStyle(a, null)) && (e = d.getPropertyValue(c), "" !== e || b.contains(a.ownerDocument.documentElement, a) || (e = b.style(a, c)));
        !b.support.pixelMargin && d && Db.test(c) && xa.test(e) && (f = k.width, k.width = e, e = d.width, k.width = f);
        return e
    });
    q.documentElement.currentStyle && (Ya = function(a, c) {
        var b, e, d = a.currentStyle && a.currentStyle[c],
            k = a.style;
        null == d && k && (b = k[c]) && (d = b);
        if (xa.test(d)) {
            b = k.left;
            if (e = a.runtimeStyle && a.runtimeStyle.left) a.runtimeStyle.left = a.currentStyle.left;
            k.left = "fontSize" === c ? "1em" : d;
            d = k.pixelLeft + "px";
            k.left = b;
            e && (a.runtimeStyle.left = e)
        }
        return "" === d ? "auto" : d
    });
    ia = Xa || Ya;
    b.each(["height", "width"], function(a, c) {
        b.cssHooks[c] = {
            get: function(a, e, d) {
                if (e) return 0 !== a.offsetWidth ? Q(a, c, d) : b.swap(a, Eb, function() {
                    return Q(a, c, d)
                })
            },
            set: function(a, c) {
                return Bb.test(c) ? c + "px" : c
            }
        }
    });
    b.support.opacity || (b.cssHooks.opacity = {
        get: function(a, c) {
            return zb.test((c && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? parseFloat(RegExp.$1) / 100 + "" : c ? "1" : ""
        },
        set: function(a, c) {
            var e = a.style,
                f =
                a.currentStyle,
                d = b.isNumeric(c) ? "alpha(opacity\x3d" + 100 * c + ")" : "",
                k = f && f.filter || e.filter || "";
            e.zoom = 1;
            if (1 <= c && "" === b.trim(k.replace(Fa, "")) && (e.removeAttribute("filter"), f && !f.filter)) return;
            e.filter = Fa.test(k) ? k.replace(Fa, d) : k + " " + d
        }
    });
    b(function() {
        b.support.reliableMarginRight || (b.cssHooks.marginRight = {
            get: function(a, c) {
                return b.swap(a, {
                    display: "inline-block"
                }, function() {
                    return c ? ia(a, "margin-right") : a.style.marginRight
                })
            }
        })
    });
    b.expr && b.expr.filters && (b.expr.filters.hidden = function(a) {
        var c = a.offsetHeight;
        return 0 === a.offsetWidth && 0 === c || !b.support.reliableHiddenOffsets && "none" === (a.style && a.style.display || b.css(a, "display"))
    }, b.expr.filters.visible = function(a) {
        return !b.expr.filters.hidden(a)
    });
    b.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, c) {
        b.cssHooks[a + c] = {
            expand: function(b) {
                var e = "string" === typeof b ? b.split(" ") : [b],
                    d = {};
                for (b = 0; 4 > b; b++) d[a + ea[b] + c] = e[b] || e[b - 2] || e[0];
                return d
            }
        }
    });
    var Fb = /%20/g,
        hb = /\[\]$/,
        Za = /\r?\n/g,
        Gb = /#.*$/,
        Hb = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
        Ib = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
        Jb = /^(?:GET|HEAD)$/,
        Kb = /^\/\//,
        $a = /\?/,
        Lb = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
        Mb = /^(?:select|textarea)/i,
        Ia = /\s+/,
        Nb = /([?&])_=[^&]*/,
        ab = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,
        bb = b.fn.load,
        ya = {},
        cb = {},
        ga, ha, db = ["*/"] + ["*"];
    try {
        ga = wa.href
    } catch (Tb) {
        ga = q.createElement("a"), ga.href = "", ga = ga.href
    }
    ha = ab.exec(ga.toLowerCase()) || [];
    b.fn.extend({
        load: function(a, c, e) {
            if ("string" !== typeof a && bb) return bb.apply(this, arguments);
            if (!this.length) return this;
            var f = a.indexOf(" ");
            if (0 <=
                f) {
                var d = a.slice(f, a.length);
                a = a.slice(0, f)
            }
            f = "GET";
            c && (b.isFunction(c) ? (e = c, c = l) : "object" === typeof c && (c = b.param(c, b.ajaxSettings.traditional), f = "POST"));
            var k = this;
            b.ajax({
                url: a,
                type: f,
                dataType: "html",
                data: c,
                complete: function(a, c, f) {
                    f = a.responseText;
                    a.isResolved() && (a.done(function(a) {
                        f = a
                    }), k.html(d ? b("\x3cdiv\x3e").append(f.replace(Lb, "")).find(d) : f));
                    e && k.each(e, [f, c, a])
                }
            });
            return this
        },
        serialize: function() {
            return b.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                return this.elements ?
                    b.makeArray(this.elements) : this
            }).filter(function() {
                return this.name && !this.disabled && (this.checked || Mb.test(this.nodeName) || Ib.test(this.type))
            }).map(function(a, c) {
                var e = b(this).val();
                return null == e ? null : b.isArray(e) ? b.map(e, function(a, b) {
                    return {
                        name: c.name,
                        value: a.replace(Za, "\r\n")
                    }
                }) : {
                    name: c.name,
                    value: e.replace(Za, "\r\n")
                }
            }).get()
        }
    });
    b.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(a, c) {
        b.fn[c] = function(a) {
            return this.on(c, a)
        }
    });
    b.each(["get", "post"],
        function(a, c) {
            b[c] = function(a, e, d, k) {
                b.isFunction(e) && (k = k || d, d = e, e = l);
                return b.ajax({
                    type: c,
                    url: a,
                    data: e,
                    success: d,
                    dataType: k
                })
            }
        });
    b.extend({
        getScript: function(a, c) {
            return b.get(a, l, c, "script")
        },
        getJSON: function(a, c, e) {
            return b.get(a, c, e, "json")
        },
        ajaxSetup: function(a, c) {
            c ? Y(a, b.ajaxSettings) : (c = a, a = b.ajaxSettings);
            Y(a, c);
            return a
        },
        ajaxSettings: {
            url: ga,
            isLocal: /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/.test(ha[1]),
            global: !0,
            type: "GET",
            contentType: "application/x-www-form-urlencoded; charset\x3dUTF-8",
            processData: !0,
            async: !0,
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                text: "text/plain",
                json: "application/json, text/javascript",
                "*": db
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText"
            },
            converters: {
                "* text": n.String,
                "text html": !0,
                "text json": b.parseJSON,
                "text xml": b.parseXML
            },
            flatOptions: {
                context: !0,
                url: !0
            }
        },
        ajaxPrefilter: aa(ya),
        ajaxTransport: aa(cb),
        ajax: function(a, c) {
            function e(a, c, g, p) {
                if (2 !== B) {
                    B = 2;
                    v && clearTimeout(v);
                    T = l;
                    r = p || "";
                    z.readyState =
                        0 < a ? 4 : 0;
                    var q, w, G;
                    p = c;
                    if (g) {
                        var u = f,
                            A = z,
                            F = u.contents,
                            V = u.dataTypes,
                            ca = u.responseFields,
                            y, L, E, H;
                        for (L in ca) L in g && (A[ca[L]] = g[L]);
                        for (;
                            "*" === V[0];) V.shift(), y === l && (y = u.mimeType || A.getResponseHeader("content-type"));
                        if (y)
                            for (L in F)
                                if (F[L] && F[L].test(y)) {
                                    V.unshift(L);
                                    break
                                }
                        if (V[0] in g) E = V[0];
                        else {
                            for (L in g) {
                                if (!V[0] || u.converters[L + " " + V[0]]) {
                                    E = L;
                                    break
                                }
                                H || (H = L)
                            }
                            E = E || H
                        }
                        E ? (E !== V[0] && V.unshift(E), g = g[E]) : g = void 0
                    } else g = l;
                    if (200 <= a && 300 > a || 304 === a) {
                        if (f.ifModified) {
                            if (y = z.getResponseHeader("Last-Modified")) b.lastModified[n] =
                                y;
                            if (y = z.getResponseHeader("Etag")) b.etag[n] = y
                        }
                        if (304 === a) p = "notmodified", q = !0;
                        else try {
                            y = f;
                            y.dataFilter && (g = y.dataFilter(g, y.dataType));
                            var M = y.dataTypes;
                            L = {};
                            var I, K, W = M.length,
                                Q, J = M[0],
                                O, S, N, P, R;
                            for (I = 1; I < W; I++) {
                                if (1 === I)
                                    for (K in y.converters) "string" === typeof K && (L[K.toLowerCase()] = y.converters[K]);
                                O = J;
                                J = M[I];
                                if ("*" === J) J = O;
                                else if ("*" !== O && O !== J) {
                                    S = O + " " + J;
                                    N = L[S] || L["* " + J];
                                    if (!N)
                                        for (P in R = l, L)
                                            if (Q = P.split(" "), Q[0] === O || "*" === Q[0])
                                                if (R = L[Q[1] + " " + J]) {
                                                    P = L[P];
                                                    !0 === P ? N = R : !0 === R && (N = P);
                                                    break
                                                }
                                    N ||
                                        R || b.error("No conversion from " + S.replace(" ", " to "));
                                    !0 !== N && (g = N ? N(g) : R(P(g)))
                                }
                            }
                            w = g;
                            p = "success";
                            q = !0
                        } catch (U) {
                            p = "parsererror", G = U
                        }
                    } else if (G = p, !p || a) p = "error", 0 > a && (a = 0);
                    z.status = a;
                    z.statusText = "" + (c || p);
                    q ? h.resolveWith(d, [w, p, z]) : h.rejectWith(d, [z, p, G]);
                    z.statusCode(t);
                    t = l;
                    D && k.trigger("ajax" + (q ? "Success" : "Error"), [z, f, q ? w : G]);
                    m.fireWith(d, [z, p]);
                    D && (k.trigger("ajaxComplete", [z, f]), --b.active || b.event.trigger("ajaxStop"))
                }
            }
            "object" === typeof a && (c = a, a = l);
            c = c || {};
            var f = b.ajaxSetup({}, c),
                d = f.context ||
                f,
                k = d !== f && (d.nodeType || d instanceof b) ? b(d) : b.event,
                h = b.Deferred(),
                m = b.Callbacks("once memory"),
                t = f.statusCode || {},
                n, p = {},
                q = {},
                r, G, T, v, u, B = 0,
                D, A, z = {
                    readyState: 0,
                    setRequestHeader: function(a, c) {
                        if (!B) {
                            var b = a.toLowerCase();
                            a = q[b] = q[b] || a;
                            p[a] = c
                        }
                        return this
                    },
                    getAllResponseHeaders: function() {
                        return 2 === B ? r : null
                    },
                    getResponseHeader: function(a) {
                        var c;
                        if (2 === B) {
                            if (!G)
                                for (G = {}; c = Hb.exec(r);) G[c[1].toLowerCase()] = c[2];
                            c = G[a.toLowerCase()]
                        }
                        return c === l ? null : c
                    },
                    overrideMimeType: function(a) {
                        B || (f.mimeType = a);
                        return this
                    },
                    abort: function(a) {
                        a = a || "abort";
                        T && T.abort(a);
                        e(0, a);
                        return this
                    }
                };
            h.promise(z);
            z.success = z.done;
            z.error = z.fail;
            z.complete = m.add;
            z.statusCode = function(a) {
                if (a) {
                    var c;
                    if (2 > B)
                        for (c in a) t[c] = [t[c], a[c]];
                    else c = a[z.status], z.then(c, c)
                }
                return this
            };
            f.url = ((a || f.url) + "").replace(Gb, "").replace(Kb, ha[1] + "//");
            f.dataTypes = b.trim(f.dataType || "*").toLowerCase().split(Ia);
            null == f.crossDomain && (u = ab.exec(f.url.toLowerCase()), f.crossDomain = !(!u || u[1] == ha[1] && u[2] == ha[2] && (u[3] || ("http:" === u[1] ? 80 :
                443)) == (ha[3] || ("http:" === ha[1] ? 80 : 443))));
            f.data && f.processData && "string" !== typeof f.data && (f.data = b.param(f.data, f.traditional));
            P(ya, f, c, z);
            if (2 === B) return !1;
            D = f.global;
            f.type = f.type.toUpperCase();
            f.hasContent = !Jb.test(f.type);
            D && 0 === b.active++ && b.event.trigger("ajaxStart");
            if (!f.hasContent && (f.data && (f.url += ($a.test(f.url) ? "\x26" : "?") + f.data, delete f.data), n = f.url, !1 === f.cache)) {
                u = b.now();
                var ca = f.url.replace(Nb, "$1_\x3d" + u);
                f.url = ca + (ca === f.url ? ($a.test(f.url) ? "\x26" : "?") + "_\x3d" + u : "")
            }(f.data &&
                f.hasContent && !1 !== f.contentType || c.contentType) && z.setRequestHeader("Content-Type", f.contentType);
            f.ifModified && (n = n || f.url, b.lastModified[n] && z.setRequestHeader("If-Modified-Since", b.lastModified[n]), b.etag[n] && z.setRequestHeader("If-None-Match", b.etag[n]));
            z.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + db + "; q\x3d0.01" : "") : f.accepts["*"]);
            for (A in f.headers) z.setRequestHeader(A, f.headers[A]);
            if (f.beforeSend && (!1 === f.beforeSend.call(d,
                    z, f) || 2 === B)) return z.abort(), !1;
            for (A in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) z[A](f[A]);
            if (T = P(cb, f, c, z)) {
                z.readyState = 1;
                D && k.trigger("ajaxSend", [z, f]);
                f.async && 0 < f.timeout && (v = setTimeout(function() {
                    z.abort("timeout")
                }, f.timeout));
                try {
                    B = 1, T.send(p, e)
                } catch (y) {
                    if (2 > B) e(-1, y);
                    else throw y;
                }
            } else e(-1, "No Transport");
            return z
        },
        param: function(a, c) {
            var e = [],
                f = function(a, c) {
                    c = b.isFunction(c) ? c() : c;
                    e[e.length] = encodeURIComponent(a) + "\x3d" + encodeURIComponent(c)
                };
            c === l && (c = b.ajaxSettings.traditional);
            if (b.isArray(a) ||
                a.jquery && !b.isPlainObject(a)) b.each(a, function() {
                f(this.name, this.value)
            });
            else
                for (var k in a) d(k, a[k], c, f);
            return e.join("\x26").replace(Fb, "+")
        }
    });
    b.extend({
        active: 0,
        lastModified: {},
        etag: {}
    });
    var Ob = b.now(),
        ua = /(\=)\?(&|$)|\?\?/i;
    b.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            return b.expando + "_" + Ob++
        }
    });
    b.ajaxPrefilter("json jsonp", function(a, c, e) {
        c = "string" === typeof a.data && /^application\/x\-www\-form\-urlencoded/.test(a.contentType);
        if ("jsonp" === a.dataTypes[0] || !1 !== a.jsonp && (ua.test(a.url) ||
                c && ua.test(a.data))) {
            var f, d = a.jsonpCallback = b.isFunction(a.jsonpCallback) ? a.jsonpCallback() : a.jsonpCallback,
                k = n[d],
                h = a.url,
                m = a.data,
                l = "$1" + d + "$2";
            !1 !== a.jsonp && (h = h.replace(ua, l), a.url === h && (c && (m = m.replace(ua, l)), a.data === m && (h += (/\?/.test(h) ? "\x26" : "?") + a.jsonp + "\x3d" + d)));
            a.url = h;
            a.data = m;
            n[d] = function(a) {
                f = [a]
            };
            e.always(function() {
                n[d] = k;
                if (f && b.isFunction(k)) n[d](f[0])
            });
            a.converters["script json"] = function() {
                f || b.error(d + " was not called");
                return f[0]
            };
            a.dataTypes[0] = "json";
            return "script"
        }
    });
    b.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /javascript|ecmascript/
        },
        converters: {
            "text script": function(a) {
                b.globalEval(a);
                return a
            }
        }
    });
    b.ajaxPrefilter("script", function(a) {
        a.cache === l && (a.cache = !1);
        a.crossDomain && (a.type = "GET", a.global = !1)
    });
    b.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var c, b = q.head || q.getElementsByTagName("head")[0] || q.documentElement;
            return {
                send: function(e, d) {
                    c = q.createElement("script");
                    c.async = "async";
                    a.scriptCharset && (c.charset = a.scriptCharset);
                    c.src = a.url;
                    c.onload = c.onreadystatechange = function(a, e) {
                        if (e || !c.readyState || /loaded|complete/.test(c.readyState)) c.onload = c.onreadystatechange = null, b && c.parentNode && b.removeChild(c), c = l, e || d(200, "success")
                    };
                    b.insertBefore(c, b.firstChild)
                },
                abort: function() {
                    if (c) c.onload(0, 1)
                }
            }
        }
    });
    var Ga = n.ActiveXObject ? function() {
            for (var a in la) la[a](0, 1)
        } : !1,
        Pb = 0,
        la;
    b.ajaxSettings.xhr = n.ActiveXObject ? function() {
        var a;
        if (!(a = !this.isLocal && y())) a: {
            try {
                a =
                    new n.ActiveXObject("Microsoft.XMLHTTP");
                break a
            } catch (c) {}
            a = void 0
        }
        return a
    } : y;
    (function(a) {
        b.extend(b.support, {
            ajax: !!a,
            cors: !!a && "withCredentials" in a
        })
    })(b.ajaxSettings.xhr());
    b.support.ajax && b.ajaxTransport(function(a) {
        if (!a.crossDomain || b.support.cors) {
            var c;
            return {
                send: function(e, f) {
                    var d = a.xhr(),
                        k, h;
                    a.username ? d.open(a.type, a.url, a.async, a.username, a.password) : d.open(a.type, a.url, a.async);
                    if (a.xhrFields)
                        for (h in a.xhrFields) d[h] = a.xhrFields[h];
                    a.mimeType && d.overrideMimeType && d.overrideMimeType(a.mimeType);
                    a.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (h in e) d.setRequestHeader(h, e[h])
                    } catch (m) {}
                    d.send(a.hasContent && a.data || null);
                    c = function(e, g) {
                        var h, m, t, n, p;
                        try {
                            if (c && (g || 4 === d.readyState))
                                if (c = l, k && (d.onreadystatechange = b.noop, Ga && delete la[k]), g) 4 !== d.readyState && d.abort();
                                else {
                                    h = d.status;
                                    t = d.getAllResponseHeaders();
                                    n = {};
                                    (p = d.responseXML) && p.documentElement && (n.xml = p);
                                    try {
                                        n.text = d.responseText
                                    } catch (q) {}
                                    try {
                                        m = d.statusText
                                    } catch (r) {
                                        m = ""
                                    }
                                    h || !a.isLocal || a.crossDomain ?
                                        1223 === h && (h = 204) : h = n.text ? 200 : 404
                                }
                        } catch (C) {
                            g || f(-1, C)
                        }
                        n && f(h, m, n, t)
                    };
                    a.async && 4 !== d.readyState ? (k = ++Pb, Ga && (la || (la = {}, b(n).unload(Ga)), la[k] = c), d.onreadystatechange = c) : c()
                },
                abort: function() {
                    c && c(0, 1)
                }
            }
        }
    });
    var za = {},
        U, ja, Qb = /^(?:toggle|show|hide)$/,
        Rb = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,
        va, ta = [
            ["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"],
            ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"],
            ["opacity"]
        ],
        sa;
    b.fn.extend({
        show: function(a, c, e) {
            if (a || 0 === a) return this.animate(I("show",
                3), a, c, e);
            e = 0;
            for (var f = this.length; e < f; e++) a = this[e], a.style && (c = a.style.display, b._data(a, "olddisplay") || "none" !== c || (c = a.style.display = ""), ("" === c && "none" === b.css(a, "display") || !b.contains(a.ownerDocument.documentElement, a)) && b._data(a, "olddisplay", na(a.nodeName)));
            for (e = 0; e < f; e++)
                if (a = this[e], a.style && (c = a.style.display, "" === c || "none" === c)) a.style.display = b._data(a, "olddisplay") || "";
            return this
        },
        hide: function(a, c, e) {
            if (a || 0 === a) return this.animate(I("hide", 3), a, c, e);
            e = 0;
            for (var f = this.length; e <
                f; e++) a = this[e], a.style && (c = b.css(a, "display"), "none" === c || b._data(a, "olddisplay") || b._data(a, "olddisplay", c));
            for (e = 0; e < f; e++) this[e].style && (this[e].style.display = "none");
            return this
        },
        _toggle: b.fn.toggle,
        toggle: function(a, c, e) {
            var f = "boolean" === typeof a;
            b.isFunction(a) && b.isFunction(c) ? this._toggle.apply(this, arguments) : null == a || f ? this.each(function() {
                var c = f ? a : b(this).is(":hidden");
                b(this)[c ? "show" : "hide"]()
            }) : this.animate(I("toggle", 3), a, c, e);
            return this
        },
        fadeTo: function(a, c, b, e) {
            return this.filter(":hidden").css("opacity",
                0).show().end().animate({
                opacity: c
            }, a, b, e)
        },
        animate: function(a, c, e, f) {
            function d() {
                !1 === k.queue && b._mark(this);
                var c = b.extend({}, k),
                    e = 1 === this.nodeType,
                    f = e && b(this).is(":hidden"),
                    g, h, m, l, n;
                c.animatedProperties = {};
                for (m in a)
                    if (g = b.camelCase(m), m !== g && (a[g] = a[m], delete a[m]), (h = b.cssHooks[g]) && "expand" in h)
                        for (m in l = h.expand(a[g]), delete a[g], l) m in a || (a[m] = l[m]);
                for (g in a) {
                    h = a[g];
                    b.isArray(h) ? (c.animatedProperties[g] = h[1], h = a[g] = h[0]) : c.animatedProperties[g] = c.specialEasing && c.specialEasing[g] ||
                        c.easing || "swing";
                    if ("hide" === h && f || "show" === h && !f) return c.complete.call(this);
                    !e || "height" !== g && "width" !== g || (c.overflow = [this.style.overflow, this.style.overflowX, this.style.overflowY], "inline" === b.css(this, "display") && "none" === b.css(this, "float") && (b.support.inlineBlockNeedsLayout && "inline" !== na(this.nodeName) ? this.style.zoom = 1 : this.style.display = "inline-block"))
                }
                null != c.overflow && (this.style.overflow = "hidden");
                for (m in a)
                    if (e = new b.fx(this, c, m), h = a[m], Qb.test(h))
                        if (g = b._data(this, "toggle" + m) ||
                            ("toggle" === h ? f ? "show" : "hide" : 0)) b._data(this, "toggle" + m, "show" === g ? "hide" : "show"), e[g]();
                        else e[h]();
                else g = Rb.exec(h), l = e.cur(), g ? (h = parseFloat(g[2]), n = g[3] || (b.cssNumber[m] ? "" : "px"), "px" !== n && (b.style(this, m, (h || 1) + n), l *= (h || 1) / e.cur(), b.style(this, m, l + n)), g[1] && (h = ("-\x3d" === g[1] ? -1 : 1) * h + l), e.custom(l, h, n)) : e.custom(l, h, "");
                return !0
            }
            var k = b.speed(c, e, f);
            if (b.isEmptyObject(a)) return this.each(k.complete, [!1]);
            a = b.extend({}, a);
            return !1 === k.queue ? this.each(d) : this.queue(k.queue, d)
        },
        stop: function(a,
            c, e) {
            "string" !== typeof a && (e = c, c = a, a = l);
            c && !1 !== a && this.queue(a || "fx", []);
            return this.each(function() {
                var c, d = !1,
                    k = b.timers,
                    h = b._data(this);
                e || b._unmark(!0, this);
                if (null == a)
                    for (c in h) {
                        if (h[c] && h[c].stop && c.indexOf(".run") === c.length - 4) {
                            var m = h[c];
                            b.removeData(this, c, !0);
                            m.stop(e)
                        }
                    } else h[c = a + ".run"] && h[c].stop && (h = h[c], b.removeData(this, c, !0), h.stop(e));
                for (c = k.length; c--;)
                    if (k[c].elem === this && (null == a || k[c].queue === a)) {
                        if (e) k[c](!0);
                        else k[c].saveState();
                        d = !0;
                        k.splice(c, 1)
                    }
                e && d || b.dequeue(this,
                    a)
            })
        }
    });
    b.each({
        slideDown: I("show", 1),
        slideUp: I("hide", 1),
        slideToggle: I("toggle", 1),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(a, c) {
        b.fn[a] = function(a, b, e) {
            return this.animate(c, a, b, e)
        }
    });
    b.extend({
        speed: function(a, c, e) {
            var f = a && "object" === typeof a ? b.extend({}, a) : {
                complete: e || !e && c || b.isFunction(a) && a,
                duration: a,
                easing: e && c || c && !b.isFunction(c) && c
            };
            f.duration = b.fx.off ? 0 : "number" === typeof f.duration ? f.duration : f.duration in b.fx.speeds ? b.fx.speeds[f.duration] :
                b.fx.speeds._default;
            if (null == f.queue || !0 === f.queue) f.queue = "fx";
            f.old = f.complete;
            f.complete = function(a) {
                b.isFunction(f.old) && f.old.call(this);
                f.queue ? b.dequeue(this, f.queue) : !1 !== a && b._unmark(this)
            };
            return f
        },
        easing: {
            linear: function(a) {
                return a
            },
            swing: function(a) {
                return -Math.cos(a * Math.PI) / 2 + 0.5
            }
        },
        timers: [],
        fx: function(a, c, b) {
            this.options = c;
            this.elem = a;
            this.prop = b;
            c.orig = c.orig || {}
        }
    });
    b.fx.prototype = {
        update: function() {
            this.options.step && this.options.step.call(this.elem, this.now, this);
            (b.fx.step[this.prop] ||
                b.fx.step._default)(this)
        },
        cur: function() {
            if (null != this.elem[this.prop] && (!this.elem.style || null == this.elem.style[this.prop])) return this.elem[this.prop];
            var a, c = b.css(this.elem, this.prop);
            return isNaN(a = parseFloat(c)) ? c && "auto" !== c ? c : 0 : a
        },
        custom: function(a, c, e) {
            function f(a) {
                return d.step(a)
            }
            var d = this,
                k = b.fx;
            this.startTime = sa || ma();
            this.end = c;
            this.now = this.start = a;
            this.pos = this.state = 0;
            this.unit = e || this.unit || (b.cssNumber[this.prop] ? "" : "px");
            f.queue = this.options.queue;
            f.elem = this.elem;
            f.saveState =
                function() {
                    b._data(d.elem, "fxshow" + d.prop) === l && (d.options.hide ? b._data(d.elem, "fxshow" + d.prop, d.start) : d.options.show && b._data(d.elem, "fxshow" + d.prop, d.end))
                };
            f() && b.timers.push(f) && !va && (va = setInterval(k.tick, k.interval))
        },
        show: function() {
            var a = b._data(this.elem, "fxshow" + this.prop);
            this.options.orig[this.prop] = a || b.style(this.elem, this.prop);
            this.options.show = !0;
            a !== l ? this.custom(this.cur(), a) : this.custom("width" === this.prop || "height" === this.prop ? 1 : 0, this.cur());
            b(this.elem).show()
        },
        hide: function() {
            this.options.orig[this.prop] =
                b._data(this.elem, "fxshow" + this.prop) || b.style(this.elem, this.prop);
            this.options.hide = !0;
            this.custom(this.cur(), 0)
        },
        step: function(a) {
            var c, e = sa || ma(),
                f = !0,
                d = this.elem,
                k = this.options;
            if (a || e >= k.duration + this.startTime) {
                this.now = this.end;
                this.pos = this.state = 1;
                this.update();
                k.animatedProperties[this.prop] = !0;
                for (c in k.animatedProperties) !0 !== k.animatedProperties[c] && (f = !1);
                if (f) {
                    null == k.overflow || b.support.shrinkWrapBlocks || b.each(["", "X", "Y"], function(a, c) {
                        d.style["overflow" + c] = k.overflow[a]
                    });
                    k.hide &&
                        b(d).hide();
                    if (k.hide || k.show)
                        for (c in k.animatedProperties) b.style(d, c, k.orig[c]), b.removeData(d, "fxshow" + c, !0), b.removeData(d, "toggle" + c, !0);
                    if (a = k.complete) k.complete = !1, a.call(d)
                }
                return !1
            }
            Infinity == k.duration ? this.now = e : (a = e - this.startTime, this.state = a / k.duration, this.pos = b.easing[k.animatedProperties[this.prop]](this.state, a, 0, 1, k.duration), this.now = this.start + (this.end - this.start) * this.pos);
            this.update();
            return !0
        }
    };
    b.extend(b.fx, {
        tick: function() {
            for (var a, c = b.timers, e = 0; e < c.length; e++) a = c[e],
                a() || c[e] !== a || c.splice(e--, 1);
            c.length || b.fx.stop()
        },
        interval: 13,
        stop: function() {
            clearInterval(va);
            va = null
        },
        speeds: {
            slow: 600,
            fast: 200,
            _default: 400
        },
        step: {
            opacity: function(a) {
                b.style(a.elem, "opacity", a.now)
            },
            _default: function(a) {
                a.elem.style && null != a.elem.style[a.prop] ? a.elem.style[a.prop] = a.now + a.unit : a.elem[a.prop] = a.now
            }
        }
    });
    b.each(ta.concat.apply([], ta), function(a, c) {
        c.indexOf("margin") && (b.fx.step[c] = function(a) {
            b.style(a.elem, c, Math.max(0, a.now) + a.unit)
        })
    });
    b.expr && b.expr.filters && (b.expr.filters.animated =
        function(a) {
            return b.grep(b.timers, function(c) {
                return a === c.elem
            }).length
        });
    var eb, Sb = /^t(?:able|d|h)$/i,
        fb = /^(?:body|html)$/i;
    eb = "getBoundingClientRect" in q.documentElement ? function(a, c, e, d) {
        try {
            d = a.getBoundingClientRect()
        } catch (k) {}
        if (!d || !b.contains(e, a)) return d ? {
            top: d.top,
            left: d.left
        } : {
            top: 0,
            left: 0
        };
        a = c.body;
        c = J(c);
        return {
            top: d.top + (c.pageYOffset || b.support.boxModel && e.scrollTop || a.scrollTop) - (e.clientTop || a.clientTop || 0),
            left: d.left + (c.pageXOffset || b.support.boxModel && e.scrollLeft || a.scrollLeft) -
                (e.clientLeft || a.clientLeft || 0)
        }
    } : function(a, c, e) {
        var d, k = a.offsetParent,
            h = c.body;
        d = (c = c.defaultView) ? c.getComputedStyle(a, null) : a.currentStyle;
        for (var m = a.offsetTop, l = a.offsetLeft;
            (a = a.parentNode) && a !== h && a !== e && (!b.support.fixedPosition || "fixed" !== d.position);) d = c ? c.getComputedStyle(a, null) : a.currentStyle, m -= a.scrollTop, l -= a.scrollLeft, a === k && (m += a.offsetTop, l += a.offsetLeft, !b.support.doesNotAddBorder || b.support.doesAddBorderForTableAndCells && Sb.test(a.nodeName) || (m += parseFloat(d.borderTopWidth) ||
            0, l += parseFloat(d.borderLeftWidth) || 0), k = a.offsetParent), b.support.subtractsBorderForOverflowNotVisible && "visible" !== d.overflow && (m += parseFloat(d.borderTopWidth) || 0, l += parseFloat(d.borderLeftWidth) || 0);
        if ("relative" === d.position || "static" === d.position) m += h.offsetTop, l += h.offsetLeft;
        b.support.fixedPosition && "fixed" === d.position && (m += Math.max(e.scrollTop, h.scrollTop), l += Math.max(e.scrollLeft, h.scrollLeft));
        return {
            top: m,
            left: l
        }
    };
    b.fn.offset = function(a) {
        if (arguments.length) return a === l ? this : this.each(function(c) {
            b.offset.setOffset(this,
                a, c)
        });
        var c = this[0],
            e = c && c.ownerDocument;
        return e ? c === e.body ? b.offset.bodyOffset(c) : eb(c, e, e.documentElement) : null
    };
    b.offset = {
        bodyOffset: function(a) {
            var c = a.offsetTop,
                e = a.offsetLeft;
            b.support.doesNotIncludeMarginInBodyOffset && (c += parseFloat(b.css(a, "marginTop")) || 0, e += parseFloat(b.css(a, "marginLeft")) || 0);
            return {
                top: c,
                left: e
            }
        },
        setOffset: function(a, c, e) {
            var d = b.css(a, "position");
            "static" === d && (a.style.position = "relative");
            var k = b(a),
                h = k.offset(),
                m = b.css(a, "top"),
                l = b.css(a, "left"),
                n = {},
                t = {};
            ("absolute" ===
                d || "fixed" === d) && -1 < b.inArray("auto", [m, l]) ? (t = k.position(), d = t.top, l = t.left) : (d = parseFloat(m) || 0, l = parseFloat(l) || 0);
            b.isFunction(c) && (c = c.call(a, e, h));
            null != c.top && (n.top = c.top - h.top + d);
            null != c.left && (n.left = c.left - h.left + l);
            "using" in c ? c.using.call(a, n) : k.css(n)
        }
    };
    b.fn.extend({
        position: function() {
            if (!this[0]) return null;
            var a = this[0],
                c = this.offsetParent(),
                e = this.offset(),
                d = fb.test(c[0].nodeName) ? {
                    top: 0,
                    left: 0
                } : c.offset();
            e.top -= parseFloat(b.css(a, "marginTop")) || 0;
            e.left -= parseFloat(b.css(a, "marginLeft")) ||
                0;
            d.top += parseFloat(b.css(c[0], "borderTopWidth")) || 0;
            d.left += parseFloat(b.css(c[0], "borderLeftWidth")) || 0;
            return {
                top: e.top - d.top,
                left: e.left - d.left
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var a = this.offsetParent || q.body; a && !fb.test(a.nodeName) && "static" === b.css(a, "position");) a = a.offsetParent;
                return a
            })
        }
    });
    b.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(a, c) {
        var e = /Y/.test(c);
        b.fn[a] = function(d) {
            return b.access(this, function(a, d, f) {
                var k = J(a);
                if (f === l) return k ?
                    c in k ? k[c] : b.support.boxModel && k.document.documentElement[d] || k.document.body[d] : a[d];
                k ? k.scrollTo(e ? b(k).scrollLeft() : f, e ? f : b(k).scrollTop()) : a[d] = f
            }, a, d, arguments.length, null)
        }
    });
    b.each({
        Height: "height",
        Width: "width"
    }, function(a, c) {
        var e = "client" + a,
            d = "scroll" + a,
            k = "offset" + a;
        b.fn["inner" + a] = function() {
            var a = this[0];
            return a ? a.style ? parseFloat(b.css(a, c, "padding")) : this[c]() : null
        };
        b.fn["outer" + a] = function(a) {
            var e = this[0];
            return e ? e.style ? parseFloat(b.css(e, c, a ? "margin" : "border")) : this[c]() : null
        };
        b.fn[c] = function(a) {
            return b.access(this, function(a, c, h) {
                if (b.isWindow(a)) return c = a.document, a = c.documentElement[e], b.support.boxModel && a || c.body && c.body[e] || a;
                if (9 === a.nodeType) return c = a.documentElement, c[e] >= c[d] ? c[e] : Math.max(a.body[d], c[d], a.body[k], c[k]);
                if (h === l) return a = b.css(a, c), c = parseFloat(a), b.isNumeric(c) ? c : a;
                b(a).css(c, h)
            }, c, a, arguments.length, null)
        }
    });
    n.jQuery = n.$ = b;
    "function" === typeof define && define.amd && define.amd.jQuery && define("jquery", [], function() {
        return b
    })
})(window);
jQuery.holdReady(!0);
TNZ = window.TNZ || {};
Date.now = Date.now || function() {
    return +new Date
};
TNZ.util = {};
TNZ.util.deviceMode = function(n) {
    if ("undefined" != typeof n && n || !TNZ.util.hasOwnProperty("deviceModeValue")) TNZ.util.deviceModeValue = TNZ.util._getDeviceMode();
    return TNZ.util.deviceModeValue
};
TNZ.util._getDeviceMode = function() {
    var n = "desktop",
        l = $("#IDdeviceModeDetection").find("div").filter(":visible");
    if (0 === l.length) return TNZ.util._getDeviceModeFallback();
    l = l.data();
    l.hasOwnProperty("m") && (n = l.m);
    return n
};
TNZ.util.getDeviceOrientation = function() {
    var n = "portrait",
        l = $(window);
    l.height() < l.width() && (n = "landscape");
    return n
};
TNZ.util._getDeviceModeFallback = function() {
    var n = $(window).width();
    return 940 <= n ? "desktop" : 720 <= n ? "tablet" : 480 <= n ? "landscape" : "mobile"
};
TNZ.util.viewportWidth = function() {
    return $(window).width()
};
TNZ.util.log = function() {
    ("d" === TNZ.initialRequestConfig.environmentType || "u" === TNZ.initialRequestConfig.environmentType) && window.console && console.log(arguments)
};
TNZ = window.TNZ || {};
TNZ.Static = {};
TNZ.Static.Fonts = {};

(function() {
    var n = this,
        l = n._,
        D = {},
        p = Array.prototype,
        u = Object.prototype,
        v = p.push,
        r = p.slice,
        B = p.concat,
        E = u.toString,
        M = u.hasOwnProperty,
        A = p.forEach,
        N = p.map,
        ba = p.reduce,
        Z = p.reduceRight,
        S = p.filter,
        K = p.every,
        da = p.some,
        Q = p.indexOf,
        aa = p.lastIndexOf,
        u = Array.isArray,
        P = Object.keys,
        Y = Function.prototype.bind,
        d = function(b) {
            return b instanceof d ? b : this instanceof d ? (this._wrapped = b, void 0) : new d(b)
        };
    "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = d), exports._ = d) :
        n._ = d;
    d.VERSION = "1.4.4";
    var y = d.each = d.forEach = function(b, k, h) {
        if (null != b)
            if (A && b.forEach === A) b.forEach(k, h);
            else if (b.length === +b.length)
            for (var m = 0, l = b.length; l > m && k.call(h, b[m], m, b) !== D; m++);
        else
            for (m in b)
                if (d.has(b, m) && k.call(h, b[m], m, b) === D) break
    };
    d.map = d.collect = function(b, d, h) {
        var m = [];
        return null == b ? m : N && b.map === N ? b.map(d, h) : (y(b, function(b, e, l) {
            m[m.length] = d.call(h, b, e, l)
        }), m)
    };
    d.reduce = d.foldl = d.inject = function(b, k, h, m) {
        var l = 2 < arguments.length;
        if (null == b && (b = []), ba && b.reduce === ba) return m &&
            (k = d.bind(k, m)), l ? b.reduce(k, h) : b.reduce(k);
        if (y(b, function(b, e, d) {
                l ? h = k.call(m, h, b, e, d) : (h = b, l = !0)
            }), !l) throw new TypeError("Reduce of empty array with no initial value");
        return h
    };
    d.reduceRight = d.foldr = function(b, k, h, m) {
        var l = 2 < arguments.length;
        if (null == b && (b = []), Z && b.reduceRight === Z) return m && (k = d.bind(k, m)), l ? b.reduceRight(k, h) : b.reduceRight(k);
        var n = b.length;
        if (n !== +n) var p = d.keys(b),
            n = p.length;
        if (y(b, function(d, q, r) {
                q = p ? p[--n] : --n;
                l ? h = k.call(m, h, b[q], q, r) : (h = b[q], l = !0)
            }), !l) throw new TypeError("Reduce of empty array with no initial value");
        return h
    };
    d.find = d.detect = function(b, d, h) {
        var m;
        return ma(b, function(b, e, l) {
            return d.call(h, b, e, l) ? (m = b, !0) : void 0
        }), m
    };
    d.filter = d.select = function(b, d, h) {
        var m = [];
        return null == b ? m : S && b.filter === S ? b.filter(d, h) : (y(b, function(b, e, l) {
            d.call(h, b, e, l) && (m[m.length] = b)
        }), m)
    };
    d.reject = function(b, k, h) {
        return d.filter(b, function(b, e, d) {
            return !k.call(h, b, e, d)
        }, h)
    };
    d.every = d.all = function(b, k, h) {
        k || (k = d.identity);
        var m = !0;
        return null == b ? m : K && b.every === K ? b.every(k, h) : (y(b, function(b, e, d) {
            return (m = m && k.call(h,
                b, e, d)) ? void 0 : D
        }), !!m)
    };
    var ma = d.some = d.any = function(b, k, h) {
        k || (k = d.identity);
        var m = !1;
        return null == b ? m : da && b.some === da ? b.some(k, h) : (y(b, function(b, e, d) {
            return m || (m = k.call(h, b, e, d)) ? D : void 0
        }), !!m)
    };
    d.contains = d.include = function(b, d) {
        return null == b ? !1 : Q && b.indexOf === Q ? -1 != b.indexOf(d) : ma(b, function(b) {
            return b === d
        })
    };
    d.invoke = function(b, k) {
        var h = r.call(arguments, 2),
            m = d.isFunction(k);
        return d.map(b, function(b) {
            return (m ? k : b[k]).apply(b, h)
        })
    };
    d.pluck = function(b, k) {
        return d.map(b, function(b) {
            return b[k]
        })
    };
    d.where = function(b, k, h) {
        return d.isEmpty(k) ? h ? null : [] : d[h ? "find" : "filter"](b, function(b) {
            for (var e in k)
                if (k[e] !== b[e]) return !1;
            return !0
        })
    };
    d.findWhere = function(b, k) {
        return d.where(b, k, !0)
    };
    d.max = function(b, k, h) {
        if (!k && d.isArray(b) && b[0] === +b[0] && 65535 > b.length) return Math.max.apply(Math, b);
        if (!k && d.isEmpty(b)) return -1 / 0;
        var m = {
            computed: -1 / 0,
            value: -1 / 0
        };
        return y(b, function(b, e, d) {
            e = k ? k.call(h, b, e, d) : b;
            e >= m.computed && (m = {
                value: b,
                computed: e
            })
        }), m.value
    };
    d.min = function(b, k, h) {
        if (!k && d.isArray(b) && b[0] ===
            +b[0] && 65535 > b.length) return Math.min.apply(Math, b);
        if (!k && d.isEmpty(b)) return 1 / 0;
        var m = {
            computed: 1 / 0,
            value: 1 / 0
        };
        return y(b, function(b, e, d) {
            e = k ? k.call(h, b, e, d) : b;
            m.computed > e && (m = {
                value: b,
                computed: e
            })
        }), m.value
    };
    d.shuffle = function(b) {
        var k, h = 0,
            m = [];
        return y(b, function(b) {
            k = d.random(h++);
            m[h - 1] = m[k];
            m[k] = b
        }), m
    };
    var X = function(b) {
        return d.isFunction(b) ? b : function(d) {
            return d[b]
        }
    };
    d.sortBy = function(b, k, h) {
        var m = X(k);
        return d.pluck(d.map(b, function(b, e, d) {
            return {
                value: b,
                index: e,
                criteria: m.call(h, b, e,
                    d)
            }
        }).sort(function(b, e) {
            var d = b.criteria,
                k = e.criteria;
            if (d !== k) {
                if (d > k || void 0 === d) return 1;
                if (k > d || void 0 === k) return -1
            }
            return b.index < e.index ? -1 : 1
        }), "value")
    };
    var I = function(b, k, h, m) {
        var l = {},
            n = X(k || d.identity);
        return y(b, function(d, k) {
            var p = n.call(h, d, k, b);
            m(l, p, d)
        }), l
    };
    d.groupBy = function(b, k, h) {
        return I(b, k, h, function(b, e, k) {
            (d.has(b, e) ? b[e] : b[e] = []).push(k)
        })
    };
    d.countBy = function(b, k, h) {
        return I(b, k, h, function(b, e) {
            d.has(b, e) || (b[e] = 0);
            b[e]++
        })
    };
    d.sortedIndex = function(b, k, h, m) {
        h = null == h ? d.identity :
            X(h);
        k = h.call(m, k);
        for (var l = 0, n = b.length; n > l;) {
            var p = l + n >>> 1;
            k > h.call(m, b[p]) ? l = p + 1 : n = p
        }
        return l
    };
    d.toArray = function(b) {
        return b ? d.isArray(b) ? r.call(b) : b.length === +b.length ? d.map(b, d.identity) : d.values(b) : []
    };
    d.size = function(b) {
        return null == b ? 0 : b.length === +b.length ? b.length : d.keys(b).length
    };
    d.first = d.head = d.take = function(b, d, h) {
        return null == b ? void 0 : null == d || h ? b[0] : r.call(b, 0, d)
    };
    d.initial = function(b, d, h) {
        return r.call(b, 0, b.length - (null == d || h ? 1 : d))
    };
    d.last = function(b, d, h) {
        return null == b ? void 0 :
            null == d || h ? b[b.length - 1] : r.call(b, Math.max(b.length - d, 0))
    };
    d.rest = d.tail = d.drop = function(b, d, h) {
        return r.call(b, null == d || h ? 1 : d)
    };
    d.compact = function(b) {
        return d.filter(b, d.identity)
    };
    var na = function(b, k, h) {
        return y(b, function(b) {
            d.isArray(b) ? k ? v.apply(h, b) : na(b, k, h) : h.push(b)
        }), h
    };
    d.flatten = function(b, d) {
        return na(b, d, [])
    };
    d.without = function(b) {
        return d.difference(b, r.call(arguments, 1))
    };
    d.uniq = d.unique = function(b, k, h, m) {
        d.isFunction(k) && (m = h, h = k, k = !1);
        h = h ? d.map(b, h, m) : b;
        var l = [],
            n = [];
        return y(h, function(h,
            m) {
            (k ? m && n[n.length - 1] === h : d.contains(n, h)) || (n.push(h), l.push(b[m]))
        }), l
    };
    d.union = function() {
        return d.uniq(B.apply(p, arguments))
    };
    d.intersection = function(b) {
        var k = r.call(arguments, 1);
        return d.filter(d.uniq(b), function(b) {
            return d.every(k, function(e) {
                return 0 <= d.indexOf(e, b)
            })
        })
    };
    d.difference = function(b) {
        var k = B.apply(p, r.call(arguments, 1));
        return d.filter(b, function(b) {
            return !d.contains(k, b)
        })
    };
    d.zip = function() {
        for (var b = r.call(arguments), k = d.max(d.pluck(b, "length")), h = Array(k), m = 0; k > m; m++) h[m] =
            d.pluck(b, "" + m);
        return h
    };
    d.object = function(b, d) {
        if (null == b) return {};
        for (var h = {}, m = 0, l = b.length; l > m; m++) d ? h[b[m]] = d[m] : h[b[m][0]] = b[m][1];
        return h
    };
    d.indexOf = function(b, k, h) {
        if (null == b) return -1;
        var m = 0,
            l = b.length;
        if (h) {
            if ("number" != typeof h) return m = d.sortedIndex(b, k), b[m] === k ? m : -1;
            m = 0 > h ? Math.max(0, l + h) : h
        }
        if (Q && b.indexOf === Q) return b.indexOf(k, h);
        for (; l > m; m++)
            if (b[m] === k) return m;
        return -1
    };
    d.lastIndexOf = function(b, d, h) {
        if (null == b) return -1;
        var m = null != h;
        if (aa && b.lastIndexOf === aa) return m ? b.lastIndexOf(d,
            h) : b.lastIndexOf(d);
        for (h = m ? h : b.length; h--;)
            if (b[h] === d) return h;
        return -1
    };
    d.range = function(b, d, h) {
        1 >= arguments.length && (d = b || 0, b = 0);
        h = arguments[2] || 1;
        for (var m = Math.max(Math.ceil((d - b) / h), 0), l = 0, n = Array(m); m > l;) n[l++] = b, b += h;
        return n
    };
    d.bind = function(b, d) {
        if (b.bind === Y && Y) return Y.apply(b, r.call(arguments, 1));
        var h = r.call(arguments, 2);
        return function() {
            return b.apply(d, h.concat(r.call(arguments)))
        }
    };
    d.partial = function(b) {
        var d = r.call(arguments, 1);
        return function() {
            return b.apply(this, d.concat(r.call(arguments)))
        }
    };
    d.bindAll = function(b) {
        var k = r.call(arguments, 1);
        return 0 === k.length && (k = d.functions(b)), y(k, function(k) {
            b[k] = d.bind(b[k], b)
        }), b
    };
    d.memoize = function(b, k) {
        var h = {};
        return k || (k = d.identity),
            function() {
                var m = k.apply(this, arguments);
                return d.has(h, m) ? h[m] : h[m] = b.apply(this, arguments)
            }
    };
    d.delay = function(b, d) {
        var h = r.call(arguments, 2);
        return setTimeout(function() {
            return b.apply(null, h)
        }, d)
    };
    d.defer = function(b) {
        return d.delay.apply(d, [b, 1].concat(r.call(arguments, 1)))
    };
    d.throttle = function(b, d) {
        var h, m, l,
            n, p = 0,
            q = function() {
                p = new Date;
                l = null;
                n = b.apply(h, m)
            };
        return function() {
            var r = new Date,
                v = d - (r - p);
            return h = this, m = arguments, 0 >= v ? (clearTimeout(l), l = null, p = r, n = b.apply(h, m)) : l || (l = setTimeout(q, v)), n
        }
    };
    d.debounce = function(b, d, h) {
        var m, l;
        return function() {
            var n = this,
                p = arguments,
                q = h && !m;
            return clearTimeout(m), m = setTimeout(function() {
                m = null;
                h || (l = b.apply(n, p))
            }, d), q && (l = b.apply(n, p)), l
        }
    };
    d.once = function(b) {
        var d, h = !1;
        return function() {
            return h ? d : (h = !0, d = b.apply(this, arguments), b = null, d)
        }
    };
    d.wrap = function(b,
        d) {
        return function() {
            var h = [b];
            return v.apply(h, arguments), d.apply(this, h)
        }
    };
    d.compose = function() {
        var b = arguments;
        return function() {
            for (var d = arguments, h = b.length - 1; 0 <= h; h--) d = [b[h].apply(this, d)];
            return d[0]
        }
    };
    d.after = function(b, d) {
        return 0 >= b ? d() : function() {
            return 1 > --b ? d.apply(this, arguments) : void 0
        }
    };
    d.keys = P || function(b) {
        if (b !== Object(b)) throw new TypeError("Invalid object");
        var k = [],
            h;
        for (h in b) d.has(b, h) && (k[k.length] = h);
        return k
    };
    d.values = function(b) {
        var k = [],
            h;
        for (h in b) d.has(b, h) && k.push(b[h]);
        return k
    };
    d.pairs = function(b) {
        var k = [],
            h;
        for (h in b) d.has(b, h) && k.push([h, b[h]]);
        return k
    };
    d.invert = function(b) {
        var k = {},
            h;
        for (h in b) d.has(b, h) && (k[b[h]] = h);
        return k
    };
    d.functions = d.methods = function(b) {
        var k = [],
            h;
        for (h in b) d.isFunction(b[h]) && k.push(h);
        return k.sort()
    };
    d.extend = function(b) {
        return y(r.call(arguments, 1), function(d) {
            if (d)
                for (var h in d) b[h] = d[h]
        }), b
    };
    d.pick = function(b) {
        var d = {},
            h = B.apply(p, r.call(arguments, 1));
        return y(h, function(h) {
            h in b && (d[h] = b[h])
        }), d
    };
    d.omit = function(b) {
        var k = {},
            h = B.apply(p, r.call(arguments, 1)),
            l;
        for (l in b) d.contains(h, l) || (k[l] = b[l]);
        return k
    };
    d.defaults = function(b) {
        return y(r.call(arguments, 1), function(d) {
            if (d)
                for (var h in d) null == b[h] && (b[h] = d[h])
        }), b
    };
    d.clone = function(b) {
        return d.isObject(b) ? d.isArray(b) ? b.slice() : d.extend({}, b) : b
    };
    d.tap = function(b, d) {
        return d(b), b
    };
    var J = function(b, k, h, l) {
        if (b === k) return 0 !== b || 1 / b == 1 / k;
        if (null == b || null == k) return b === k;
        b instanceof d && (b = b._wrapped);
        k instanceof d && (k = k._wrapped);
        var n = E.call(b);
        if (n != E.call(k)) return !1;
        switch (n) {
            case "[object String]":
                return b == k + "";
            case "[object Number]":
                return b != +b ? k != +k : 0 == b ? 1 / b == 1 / k : b == +k;
            case "[object Date]":
            case "[object Boolean]":
                return +b == +k;
            case "[object RegExp]":
                return b.source == k.source && b.global == k.global && b.multiline == k.multiline && b.ignoreCase == k.ignoreCase
        }
        if ("object" != typeof b || "object" != typeof k) return !1;
        for (var p = h.length; p--;)
            if (h[p] == b) return l[p] == k;
        h.push(b);
        l.push(k);
        var p = 0,
            q = !0;
        if ("[object Array]" == n) {
            if (p = b.length, q = p == k.length)
                for (; p-- && (q = J(b[p], k[p],
                        h, l)););
        } else {
            var n = b.constructor,
                r = k.constructor;
            if (n !== r && !(d.isFunction(n) && n instanceof n && d.isFunction(r) && r instanceof r)) return !1;
            for (var v in b)
                if (d.has(b, v) && (p++, !(q = d.has(k, v) && J(b[v], k[v], h, l)))) break;
            if (q) {
                for (v in k)
                    if (d.has(k, v) && !p--) break;
                q = !p
            }
        }
        return h.pop(), l.pop(), q
    };
    d.isEqual = function(b, d) {
        return J(b, d, [], [])
    };
    d.isEmpty = function(b) {
        if (null == b) return !0;
        if (d.isArray(b) || d.isString(b)) return 0 === b.length;
        for (var k in b)
            if (d.has(b, k)) return !1;
        return !0
    };
    d.isElement = function(b) {
        return !(!b ||
            1 !== b.nodeType)
    };
    d.isArray = u || function(b) {
        return "[object Array]" == E.call(b)
    };
    d.isObject = function(b) {
        return b === Object(b)
    };
    y("Arguments Function String Number Date RegExp".split(" "), function(b) {
        d["is" + b] = function(d) {
            return E.call(d) == "[object " + b + "]"
        }
    });
    d.isArguments(arguments) || (d.isArguments = function(b) {
        return !(!b || !d.has(b, "callee"))
    });
    "function" != typeof /./ && (d.isFunction = function(b) {
        return "function" == typeof b
    });
    d.isFinite = function(b) {
        return isFinite(b) && !isNaN(parseFloat(b))
    };
    d.isNaN = function(b) {
        return d.isNumber(b) &&
            b != +b
    };
    d.isBoolean = function(b) {
        return !0 === b || !1 === b || "[object Boolean]" == E.call(b)
    };
    d.isNull = function(b) {
        return null === b
    };
    d.isUndefined = function(b) {
        return void 0 === b
    };
    d.has = function(b, d) {
        return M.call(b, d)
    };
    d.noConflict = function() {
        return n._ = l, this
    };
    d.identity = function(b) {
        return b
    };
    d.times = function(b, d, h) {
        for (var l = Array(b), n = 0; b > n; n++) l[n] = d.call(h, n);
        return l
    };
    d.random = function(b, d) {
        return null == d && (d = b, b = 0), b + Math.floor(Math.random() * (d - b + 1))
    };
    var q = {
        escape: {
            "\x26": "\x26amp;",
            "\x3c": "\x26lt;",
            "\x3e": "\x26gt;",
            '"': "\x26quot;",
            "'": "\x26#x27;",
            "/": "\x26#x2F;"
        }
    };
    q.unescape = d.invert(q.escape);
    var R = {
        escape: RegExp("[" + d.keys(q.escape).join("") + "]", "g"),
        unescape: RegExp("(" + d.keys(q.unescape).join("|") + ")", "g")
    };
    d.each(["escape", "unescape"], function(b) {
        d[b] = function(d) {
            return null == d ? "" : ("" + d).replace(R[b], function(d) {
                return q[b][d]
            })
        }
    });
    d.result = function(b, k) {
        if (null == b) return null;
        var h = b[k];
        return d.isFunction(h) ? h.call(b) : h
    };
    d.mixin = function(b) {
        y(d.functions(b), function(k) {
            var h = d[k] = b[k];
            d.prototype[k] = function() {
                var b = [this._wrapped];
                return v.apply(b, arguments), pa.call(this, h.apply(d, b))
            }
        })
    };
    var wa = 0;
    d.uniqueId = function(b) {
        var d = ++wa + "";
        return b ? b + d : d
    };
    d.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };
    var b = /(.)^/,
        ra = {
            "'": "'",
            "\\": "\\",
            "\r": "r",
            "\n": "n",
            "\t": "t",
            "\u2028": "u2028",
            "\u2029": "u2029"
        },
        oa = /\\|'|\r|\n|\t|\u2028|\u2029/g;
    d.template = function(e, k, h) {
        var l;
        h = d.defaults({}, h, d.templateSettings);
        var n = RegExp([(h.escape ||
                b).source, (h.interpolate || b).source, (h.evaluate || b).source].join("|") + "|$", "g"),
            p = 0,
            q = "__p+\x3d'";
        e.replace(n, function(b, d, h, k, l) {
            return q += e.slice(p, l).replace(oa, function(b) {
                return "\\" + ra[b]
            }), d && (q += "'+\n((__t\x3d(" + d + "))\x3d\x3dnull?'':_.escape(__t))+\n'"), h && (q += "'+\n((__t\x3d(" + h + "))\x3d\x3dnull?'':__t)+\n'"), k && (q += "';\n" + k + "\n__p+\x3d'"), p = l + b.length, b
        });
        q += "';\n";
        h.variable || (q = "with(obj||{}){\n" + q + "}\n");
        q = "var __t,__p\x3d'',__j\x3dArray.prototype.join,print\x3dfunction(){__p+\x3d__j.call(arguments,'');};\n" +
            q + "return __p;\n";
        try {
            l = Function(h.variable || "obj", "_", q)
        } catch (r) {
            throw r.source = q, r;
        }
        if (k) return l(k, d);
        k = function(b) {
            return l.call(this, b, d)
        };
        return k.source = "function(" + (h.variable || "obj") + "){\n" + q + "}", k
    };
    d.chain = function(b) {
        return d(b).chain()
    };
    var pa = function(b) {
        return this._chain ? d(b).chain() : b
    };
    d.mixin(d);
    y("pop push reverse shift sort splice unshift".split(" "), function(b) {
        var k = p[b];
        d.prototype[b] = function() {
            var d = this._wrapped;
            return k.apply(d, arguments), "shift" != b && "splice" != b || 0 !== d.length ||
                delete d[0], pa.call(this, d)
        }
    });
    y(["concat", "join", "slice"], function(b) {
        var k = p[b];
        d.prototype[b] = function() {
            return pa.call(this, k.apply(this._wrapped, arguments))
        }
    });
    d.extend(d.prototype, {
        chain: function() {
            return this._chain = !0, this
        },
        value: function() {
            return this._wrapped
        }
    })
}).call(this);
(function(n, l) {
    function D(l) {
        return l
    }

    function p(l) {
        return decodeURIComponent(l.replace(u, " "))
    }
    var u = /\+/g;
    n.cookie = function(v, r, u) {
        if (1 < arguments.length && (!/Object/.test(Object.prototype.toString.call(r)) || null == r)) {
            u = n.extend({}, n.cookie.defaults, u);
            null == r && (u.expires = -1);
            if ("number" === typeof u.expires) {
                var E = u.expires,
                    M = u.expires = new Date;
                M.setDate(M.getDate() + E)
            }
            r = String(r);
            return l.cookie = [encodeURIComponent(v), "\x3d", u.raw ? r : encodeURIComponent(r), u.expires ? "; expires\x3d" + u.expires.toUTCString() :
                "", u.path ? "; path\x3d" + u.path : "", u.domain ? "; domain\x3d" + u.domain : "", u.secure ? "; secure" : ""
            ].join("")
        }
        u = r || n.cookie.defaults || {};
        for (var E = u.raw ? D : p, M = l.cookie.split("; "), A = 0, N; N = M[A] && M[A].split("\x3d"); A++)
            if (E(N.shift()) === v) return E(N.join("\x3d"));
        return null
    };
    n.cookie.defaults = {}
})(jQuery, document);
TNZ = window.TNZ || {};
TNZ.ResponsiveImage = function() {
    var n = {
        types: {},
        placeholders: {},
        removePlaceholder: function(l) {
            try {
                var n = l.parentNode.parentNode.parentNode;
                if ("undefined" != typeof n && ("FIGURE" == n.tagName || "DIV" == n.tagName && -1 != n.className.toLowerCase().indexOf("videoplayer"))) {
                    var p = n.firstChild;
                    "IMG" == p.tagName && n.removeChild(p)
                }
            } catch (u) {}
        },
        addPlaceholder: function(l, D, p, u, v) {
            u = u || {};
            v = v || {};
            void 0 === n.placeholders[l] && (n.placeholders[l] = {});
            void 0 === n.placeholders[l][D] && (n.placeholders[l][D] = {
                src: p,
                inheritAtts: u,
                atts: v
            })
        },
        detectPlaceholder: function(l, D) {
            var p = document.createElement("div");
            p.innerHTML = "\x3csvg/\x3e";
            "http://www.w3.org/2000/svg" == (p.firstChild && p.firstChild.namespaceURI) && (n.types["image/svg+xml"] = !0);
            var u = new Image;
            u.onload = function() {
                1 == u.width && (n.types["image/webp"] = !0)
            };
            u.src = "data:image/webp;base64,UklGRiwAAABXRUJQVlA4ICAAAAAUAgCdASoBAAEAL/3+/3+CAB/AAAFzrNsAAP5QAAAAAA\x3d\x3d";
            setTimeout(function() {
                n.setPlaceholder(l, D)
            }, 100)
        },
        setPlaceholder: function(l, D) {
            if (null !== l.getAttribute("data-picture") &&
                (null === l.getAttribute("data-postpone") || n.imgVisible(l))) {
                for (var p = l.getElementsByTagName("span"), u = [], v, r = 0, B = p.length; r < B; r++) {
                    var E = p[r].getAttribute("data-media"),
                        M = p[r].getAttribute("data-type");
                    if (u.length && M != v) break;
                    M && !0 !== n.types[M] || (!E || n.matchMedia && n.matchMedia(E).matches) && u.push(p[r]);
                    v = M
                }
                p = l.parentNode.getElementsByTagName("img")[0];
                if (u.length) {
                    if (u = u.pop(), !p || "NOSCRIPT" === p.parentNode.nodeName)
                        if (v = u.getAttribute("data-placeholderid"), null !== v && "0" != v) {
                            p = window.document.createElement("img");
                            p.setAttribute("data-placeholderid", v);
                            p.src = n.placeholders[D][v].src;
                            p.alt = l.getAttribute("data-alt");
                            p.className = "placeholder";
                            for (var A in n.placeholders[D][v].inheritAtts) r = n.placeholders[D][v].inheritAtts[A], null === p.getAttribute(A) && null !== u.getAttribute(r) && p.setAttribute(A, u.getAttribute(r));
                            for (A in n.placeholders[D][v].atts) p.setAttribute(A, n.placeholders[D][v].atts[A]);
                            A = l.parentNode;
                            v = !1;
                            for (r = {}; null != A;) {
                                if ("carousel" == A.id || "gallery" == A.id || "must-read" == A.id || "videoheader" == A.id) {
                                    v = !0;
                                    r = A.getBoundingClientRect();
                                    break
                                }
                                A = A.parentNode
                            }
                            v && "undefined" != typeof r.width && (p.style.width = r.width + "px", 0 < $(".carousel .slides li:first-child div.carousel-overlay-wrap").length && $(".carousel ul.slides \x3e li:first-child").css("width", r.width + "px"));
                            try {
                                l.parentNode.insertBefore(p, u.parentNode.parentNode.firstChild)
                            } catch (N) {}
                        }
                } else p && p.parentNode.removeChild(p)
            }
        },
        imgVisible: function(l) {
            l = l.getBoundingClientRect();
            return (0 <= l.top || 0 <= l.bottom) && (0 <= l.left || 0 <= l.right) && (l.top <= (window.innerHeight ||
                document.documentElement.clientHeight) || l.bottom <= (window.innerHeight || document.documentElement.clientHeight))
        }
    };
    n.matchMedia = n.matchMedia || function(l, n) {
        var p, u = l.documentElement,
            v = u.firstElementChild || u.firstChild,
            r = l.createElement("body"),
            B = l.createElement("div");
        B.id = "mq-test-1";
        B.style.cssText = "position:absolute;top:-100em";
        r.appendChild(B);
        return function(l) {
            B.innerHTML = '\x26shy;\x3cstyle media\x3d"' + l + '"\x3e #mq-test-1 { width: 42px; }\x3c/style\x3e';
            u.insertBefore(r, v);
            p = 42 == B.offsetWidth;
            u.removeChild(r);
            return {
                matches: p,
                media: l
            }
        }
    }(document);
    return n
}();
/*46552 g*/