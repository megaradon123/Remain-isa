function znReady(fn) {
    if (document.readyState != 'loading') {
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}
window.znStorage = {
    _storage: new WeakMap,
    put: function(e, t, n) {
        this._storage.has(e) || this._storage.set(e, new Map), this._storage.get(e).set(t, n)
    },
    get: function(e, t) {
        return this._storage.get(e).get(t)
    },
    has: function(e, t) {
        return this._storage.has(e) && this._storage.get(e).has(t)
    },
    remove: function(e, t) {
        var n = this._storage.get(e).delete(t);
        return 0 === !this._storage.get(e).size && this._storage.delete(e), n
    }
};
Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector), Element.prototype.closest || (Element.prototype.closest = function(e) {
    var t = this;
    do {
        if (Element.prototype.matches.call(t, e)) return t;
        t = t.parentElement || t.parentNode
    } while (null !== t && 1 === t.nodeType);
    return null
});
window.znRespondToVisibility = function(e, t) {
    var n = {
            root: null,
            threshold: .01
        },
        i = new IntersectionObserver((function(e, n) {
            var i = e.map((function(e) {
                    return e.isIntersecting
                })),
                a = i.includes(!0);
            t(a)
        }), n);
    i.observe(e)
};
znReady(function() {
    (function() {
        (function() {
            var e, t = "znid-858351951826",
                n = document.getElementById(t),
                i = n.querySelector(".zn-countdown > .zn-countdown-wrapper"),
                a = i.querySelector(".zn-day-number"),
                o = i.querySelector(".zn-hour-number"),
                r = i.querySelector(".zn-minute-number"),
                s = i.querySelector(".zn-second-number"),
                l = null != document.querySelector(".zn-container.editing"),
                c = "true",
                p = "false",
                d = "false",
                u = "datetime",
                g = "",
                m = "3",
                h = "0",
                b = "0",
                x = "2022-04-16 12:00 AM +07:00",
                f = "datetime",
                v = "03:00 PM",
                y = "true" == c,
                z = "true" == p,
                w = "true" == d,
                _ = 86400,
                k = 3600,
                E = 60;
            function C() {
                try {
                    var t = parseInt(m) * _ + parseInt(h) * k + parseInt(b) * E;
                    e = Date.now() + 1e3 * t
                } catch (n) {}
            }
            function S(e) {
                function t(e, t) {
                    var n = e.split(":");
                    return 2 == n.length && n.push("00"), "PM" == t && (n[0] = (+n[0] + 12).toString()), n.join(":")
                }
                var n = e.split(" "),
                    i = t(n[1], n[2]);
                return "".concat(n[0], "T").concat(i).concat(n[3])
            }
            function R() {
                var t = 0,
                    n = 0,
                    c = 0,
                    p = 0;
                switch (u) {
                    case "datetime":
                    case "fixed":
                        var d = Date.parse(S(x)),
                            m = "fixed" == f;
                        if (m && (d = e), !d) break;
                        var h = Date.now(),
                            b = parseInt((d - h) / 1e3);
                        if (b <= 0) break;
                        t = parseInt(b / _), n = parseInt(b % _ / k), c = parseInt(b % k / E), p = b % E;
                        break;
                    case "daily":
                        try {
                            h = new Date;
                            var R = h.getHours() * k + h.getMinutes() * E + h.getSeconds(),
                                L = v.split(" ")[0],
                                O = v.toUpperCase().indexOf("PM") > -1,
                                I = parseInt(L.split(":")[0]);
                            O || 12 != I ? O && 12 != I && (I += 12) : I = 24;
                            var F = parseInt(L.split(":")[1]),
                                j = I * k + F * E;
                            b = j - R;
                            if (b <= 0) break;
                            n = parseInt(b / k), c = parseInt(b % k / E), p = b % E
                        } catch (A) {}
                        break
                }
                0 == t && 0 == n && 0 == c && 0 == p && ("fixed" == u && z ? C() : !l && y && i.classList.add("hide"), !l && w && (window.location.href = g)), a.innerHTML = t, o.innerHTML = n, r.innerHTML = c, s.innerHTML = p
            }
            C(), R();
            var L = "znCountDown-" + t;
            window[L] && clearInterval(window[L]), window[L] = setInterval(R, 1e3)
        })();
    })();
    (function() {
        (function() {
            var e = document.getElementById("znid-091760313342"),
                t = e.querySelector(".zn-popup"),
                n = t.querySelector(":scope > button"),
                i = t.querySelector(":scope > .zn-popup-overlay"),
                a = i.querySelector(":scope > .zn-popup-mask"),
                o = "false",
                r = 1e3 * parseFloat("3s"),
                s = null != document.querySelector(".zn-container.editing");
            function l() {
                i.classList.add("active")
            }
            function c() {
                i.classList.remove("active")
            }
            n.addEventListener("click", l), a.addEventListener("click", c), "true" != o || s || setTimeout(l, r)
        })();
        (function() {
            (function() {
                var e = "normal",
                    t = "true",
                    n = "true",
                    i = "1",
                    a = "1",
                    o = "500",
                    r = "false",
                    s = "3000",
                    l = document.getElementById("znid-199082652636"),
                    c = !1;
                function p() {
                    new Splide("#znid-199082652636 > .zn-element > .zn-slider > .splide", {
                        type: "loop" == e ? "loop" : "slide",
                        rewind: "rewind" == e,
                        perPage: +i,
                        perMove: +a,
                        speed: +o,
                        height: "auto",
                        gap: "10px",
                        arrows: "true" == t,
                        pagination: "true" == n,
                        autoplay: "true" == r,
                        interval: +s,
                        arrowPath: "M 30.375 18.714844 L 12.195312 0.53125 C 11.484375 -0.175781 10.332031 -0.175781 9.625 0.53125 C 8.914062 1.242188 8.914062 2.394531 9.625 3.105469 L 26.519531 20 L 9.625 36.894531 C 8.914062 37.605469 8.914062 38.757812 9.625 39.46875 C 9.976562 39.824219 10.445312 40 10.910156 40 C 11.375 40 11.839844 39.824219 12.195312 39.46875 L 30.375 21.285156 C 30.71875 20.945312 30.910156 20.480469 30.910156 20 C 30.910156 19.515625 30.71875 19.054688 30.375 18.714844 Z M 30.375 18.714844"
                    }).mount()
                }
                window.znRespondToVisibility(l, (function(e) {
                    e && !c && (p(), c = !0)
                }))
            })();
        })();
    })();
    (function() {
        var e = document.getElementById("znid-574935253294"),
            t = e.querySelector(":scope > .zn-element > .zn-banner"),
            n = "",
            i = null != document.querySelector(".zn-container.editing");
        !i && n && (t.style.cursor = "pointer", t.addEventListener("click", (function() {
            window.location.href = n
        })))
    })();
    (function() {
        (function() {
            document.getElementById("znid-044516431264")
        })();
        (function() {
            (function() {
                var e = document.getElementById("znid-992733838445"),
                    t = e.querySelector(".zn-popup"),
                    n = t.querySelector(":scope > button"),
                    i = t.querySelector(":scope > .zn-popup-overlay"),
                    a = i.querySelector(":scope > .zn-popup-mask"),
                    o = "false",
                    r = 1e3 * parseFloat("5s"),
                    s = null != document.querySelector(".zn-container.editing");
                function l() {
                    i.classList.add("active")
                }
                function c() {
                    i.classList.remove("active")
                }
                n.addEventListener("click", l), a.addEventListener("click", c), "true" != o || s || setTimeout(l, r)
            })();
        })();
    })();
    (function() {
        (function() {
            (function() {
                var e = "znid-454734067354",
                    t = "3s",
                    n = "50000",
                    i = +n,
                    a = "comma",
                    o = "on-load",
                    r = !1,
                    s = document.getElementById(e),
                    l = s.querySelector(":scope .zn-count-up-content"),
                    c = 1e3 * +t.replace(/s/gi, ""),
                    p = !1,
                    d = "on-load" == o,
                    u = 50;
                function g() {
                    var t = i * u / c,
                        n = 0,
                        o = "znUpdateCounter-" + e;
                    window[o] && clearInterval(window[o]), window[o] = setInterval((function() {
                        if (n >= i) clearInterval(window[o]);
                        else {
                            var e = Math.max(parseInt(t * (.8 + .4 * Math.random())), 1);
                            n = Math.min(n + e, i), l.innerHTML = m(n, a)
                        }
                    }), u)
                }
                function m(e, t) {
                    var n = {
                        none: "",
                        comma: ",",
                        point: "."
                    };
                    return e.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1" + n[t])
                }
                function h() {
                    function e() {
                        var t = s.getBoundingClientRect().y >= 0 && s.getBoundingClientRect().y <= document.body.clientHeight,
                            n = s.closest(".zn-popup-content");
                        p || !t && !n || (p = !0, g(), document.removeEventListener("scroll", e))
                    }
                    r = !0, e(), document.addEventListener("scroll", e)
                }
                d ? g() : window.znRespondToVisibility(s, (function(t) {
                    r || (t ? window["znDelayUpdateCounter-" + e] = setTimeout(h, 100) : clearTimeout(window["znDelayUpdateCounter-" + e]))
                }))
            })();
        })();
    })();
    (function() {
        (function() {
            var e = document.getElementById("znid-594374892651"),
                t = null != document.querySelector(".zn-container.editing");
            function n(e, t, n) {
                this.addEventListener("click", (function() {
                    i(e + encodeURIComponent(t), n)
                }))
            }
            function i(e, t) {
                var n = (screen.width - 640) / 2,
                    i = (screen.height - 640) / 2,
                    a = "menubar=no,toolbar=no,status=no,width=640,height=640,top=" + i + ",left=" + n;
                "_blank" == t ? window.open(e) : "_self" == t ? window.location = e : window.open(e, t, a)
            }
            t || e.querySelectorAll(".zn-social-share-item").forEach((function(e) {
                var t, i = "Share",
                    a = "current",
                    o = "custom" == a,
                    r = "",
                    s = "Lại đây nào mn",
                    l = o && r ? r : document.URL,
                    c = !0,
                    p = e.getAttribute("ref-name");
                switch (p) {
                    case "facebook":
                        t = "https://www.facebook.com/sharer.php?quote=" + s + "&u=";
                        break;
                    case "twitter":
                        t = "https://twitter.com/intent/tweet?text=" + s + "&url=";
                        break;
                    case "pinterest":
                        t = "http://pinterest.com/pin/create/button/?description=" + s + "&url=";
                        break;
                    case "linkedin":
                        t = "https://www.linkedin.com/shareArticle?mini=true&url=";
                        break;
                    case "email":
                        var d = "mailto:?body=" + s + " " + l;
                        e.setAttribute("href", d), c = !1;
                        break
                }
                c && e && n.call(e, t, l, i)
            }))
        })();
    })();
    (function() {
        var e = "",
            t = null != document.querySelector(".zn-container.editing");
        e && !t && (window.fbAsyncInit = function() {
            FB.init({
                appId: "912333495590130",
                autoLogAppEvents: !0,
                xfbml: !0,
                version: "v2.11"
            })
        }, function(e, t, n) {
            var i, a = e.getElementsByTagName(t)[0];
            e.getElementById(n) || (i = e.createElement(t), i.id = n, i.src = "https://connect.facebook.net/en_US/sdk.js", a.parentNode.insertBefore(i, a))
        }(document, "script", "facebook-jssdk"))
    })();
    (function() {
        var e = null != document.querySelector(".zn-container.editing"),
            t = document.body;
        p();
        var n = "false",
            i = "true",
            a = "false",
            o = "true",
            r = "false",
            s = "true" == n && (e || "true" != r || !localStorage.znHideAnnouncementBar);
        if (s) {
            var l = document.createElement("div");
            if (l.classList.add("zn-announcement-bar"), "true" == o && l.classList.add("pad-right"), l.innerHTML = '\n        <div class="zn-announcement-message">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>\n        '.concat("true" == i ? '\n          <a class="zn-announcement-button" href="" target="'.concat("true" == a ? "_blank" : "", '">\n            <button>Click me</button>\n          </a>\n        ') : "", "\n        ").concat("true" == o ? '<i class="material-icons-outlined zn-annoucement-close">close</i>' : "", "\n      "), t.prepend(l), !e && "true" == o) {
                var c = l.querySelector(".zn-annoucement-close");
                c.addEventListener("click", (function() {
                    p(), "true" == r && (localStorage.znHideAnnouncementBar = !0)
                }))
            }
        }
        function p() {
            var e = t.querySelector(".zn-announcement-bar");
            e && e.parentNode.removeChild(e)
        }
    })();
});