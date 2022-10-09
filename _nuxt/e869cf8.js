/*! For license information please see LICENSES */
(window.webpackJsonp = window.webpackJsonp || []).push([
    [19], {
        441: function(e, t, n) {
            var content = n(459);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [e.i, content, ""]
            ]), content.locals && (e.exports = content.locals);
            (0, n(30).default)("823af1a4", content, !0, {
                sourceMap: !1
            })
        },
        451: function(e, t, n) {
            var content = n(580);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [e.i, content, ""]
            ]), content.locals && (e.exports = content.locals);
            (0, n(30).default)("2fb0e8ae", content, !0, {
                sourceMap: !1
            })
        },
        455: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n(33),
                o = {
                    computed: { ...Object(r.c)({
                            other: e => e.globalData.other
                        }),
                        show() {
                            return this.$prismic.hasUrl(this.other.accessibilityStatementLink) && Boolean(this.other.accessibilityStatementLinkLabel)
                        }
                    }
                },
                l = n(458),
                c = n(5);
            var component = Object(c.a)(o, (function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return e.show ? n("div", [n("div", {
                    class: e.$style.accessibilityStatementLink
                }, [n("div", {
                    class: e.$style.accessibilityStatementLinkInner
                }, [n("BaseButton", {
                    attrs: {
                        smart: e.other.accessibilityStatementLink.url,
                        target: e.other.accessibilityStatementLink.target
                    }
                }, [e._v(" " + e._s(e.other.accessibilityStatementLinkLabel) + " ")])], 1)])]) : e._e()
            }), [], !1, (function(e) {
                this.$style = l.default.locals || l.default
            }), null, null);
            t.default = component.exports
        },
        457: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return I
            }));
            var r, o = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])', "details>summary:first-of-type", "details"],
                l = o.join(","),
                c = "undefined" == typeof Element ? function() {} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector,
                d = function(e) {
                    var t = parseInt(e.getAttribute("tabindex"), 10);
                    return isNaN(t) ? function(e) {
                        return "true" === e.contentEditable
                    }(e) ? 0 : "AUDIO" !== e.nodeName && "VIDEO" !== e.nodeName && "DETAILS" !== e.nodeName || null !== e.getAttribute("tabindex") ? e.tabIndex : 0 : t
                },
                m = function(a, b) {
                    return a.tabIndex === b.tabIndex ? a.documentOrder - b.documentOrder : a.tabIndex - b.tabIndex
                },
                h = function(e) {
                    return "INPUT" === e.tagName
                },
                f = function(e) {
                    return function(e) {
                        return h(e) && "radio" === e.type
                    }(e) && ! function(e) {
                        if (!e.name) return !0;
                        var t = function(e, form) {
                            for (var i = 0; i < e.length; i++)
                                if (e[i].checked && e[i].form === form) return e[i]
                        }((e.form || e.ownerDocument).querySelectorAll('input[type="radio"][name="' + e.name + '"]'), e.form);
                        return !t || t === e
                    }(e)
                },
                y = function(e) {
                    return !(e.disabled || function(e) {
                        return h(e) && "hidden" === e.type
                    }(e) || function(e) {
                        if ("hidden" === getComputedStyle(e).visibility) return !0;
                        var t = c.call(e, "details>summary:first-of-type") ? e.parentElement : e;
                        if (c.call(t, "details:not([open]) *")) return !0;
                        for (; e;) {
                            if ("none" === getComputedStyle(e).display) return !0;
                            e = e.parentElement
                        }
                        return !1
                    }(e) || function(e) {
                        return "DETAILS" === e.tagName && Array.prototype.slice.apply(e.children).some((function(e) {
                            return "SUMMARY" === e.tagName
                        }))
                    }(e))
                },
                _ = function(e) {
                    return !(!y(e) || f(e) || d(e) < 0)
                },
                v = function(e, t) {
                    var n = [],
                        r = [],
                        o = function(e, t, filter) {
                            var n = Array.prototype.slice.apply(e.querySelectorAll(l));
                            return t && c.call(e, l) && n.unshift(e), n.filter(filter)
                        }(e, (t = t || {}).includeContainer, _);
                    return o.forEach((function(e, i) {
                        var t = d(e);
                        0 === t ? n.push(e) : r.push({
                            documentOrder: i,
                            tabIndex: t,
                            node: e
                        })
                    })), r.sort(m).map((function(a) {
                        return a.node
                    })).concat(n)
                },
                k = o.concat("iframe").join(","),
                w = function(e) {
                    if (!e) throw new Error("No node provided");
                    return !1 !== c.call(e, k) && y(e)
                };

            function L(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function x(object, e) {
                var t = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(object);
                    e && (n = n.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(object, e).enumerable
                    }))), t.push.apply(t, n)
                }
                return t
            }
            var O, $ = (O = [], {
                    activateTrap: function(e) {
                        if (O.length > 0) {
                            var t = O[O.length - 1];
                            t !== e && t.pause()
                        }
                        var n = O.indexOf(e); - 1 === n || O.splice(n, 1), O.push(e)
                    },
                    deactivateTrap: function(e) {
                        var t = O.indexOf(e); - 1 !== t && O.splice(t, 1), O.length > 0 && O[O.length - 1].unpause()
                    }
                }),
                S = function(e) {
                    return setTimeout(e, 0)
                },
                B = function(e, t) {
                    var n = -1;
                    return e.every((function(e, i) {
                        return !t(e) || (n = i, !1)
                    })), n
                },
                E = function(e, t) {
                    var n, o = document,
                        l = function(e) {
                            for (var i = 1; i < arguments.length; i++) {
                                var source = null != arguments[i] ? arguments[i] : {};
                                i % 2 ? x(Object(source), !0).forEach((function(t) {
                                    L(e, t, source[t])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : x(Object(source)).forEach((function(t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
                                }))
                            }
                            return e
                        }({
                            returnFocusOnDeactivate: !0,
                            escapeDeactivates: !0,
                            delayInitialFocus: !0
                        }, t),
                        c = {
                            containers: [],
                            tabbableGroups: [],
                            nodeFocusedBeforeActivation: null,
                            mostRecentlyFocusedNode: null,
                            active: !1,
                            paused: !1
                        },
                        d = function(element) {
                            return c.containers.some((function(e) {
                                return e.contains(element)
                            }))
                        },
                        m = function(e) {
                            var t = l[e];
                            if (!t) return null;
                            var n = t;
                            if ("string" == typeof t && !(n = o.querySelector(t))) throw new Error("`".concat(e, "` refers to no known node"));
                            if ("function" == typeof t && !(n = t())) throw new Error("`".concat(e, "` did not return a node"));
                            return n
                        },
                        h = function() {
                            var e;
                            if (null !== m("initialFocus")) e = m("initialFocus");
                            else if (d(o.activeElement)) e = o.activeElement;
                            else {
                                var t = c.tabbableGroups[0];
                                e = t && t.firstTabbableNode || m("fallbackFocus")
                            }
                            if (!e) throw new Error("Your focus-trap needs to have at least one focusable element");
                            return e
                        },
                        f = function() {
                            if (c.tabbableGroups = c.containers.map((function(e) {
                                    var t = v(e);
                                    if (t.length > 0) return {
                                        firstTabbableNode: t[0],
                                        lastTabbableNode: t[t.length - 1]
                                    }
                                })).filter((function(e) {
                                    return !!e
                                })), c.tabbableGroups.length <= 0 && !m("fallbackFocus")) throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times")
                        },
                        y = function e(t) {
                            t !== o.activeElement && (t && t.focus ? (t.focus({
                                preventScroll: !!l.preventScroll
                            }), c.mostRecentlyFocusedNode = t, function(e) {
                                return e.tagName && "input" === e.tagName.toLowerCase() && "function" == typeof e.select
                            }(t) && t.select()) : e(h()))
                        },
                        _ = function(e) {
                            d(e.target) || (l.clickOutsideDeactivates ? n.deactivate({
                                returnFocus: l.returnFocusOnDeactivate && !w(e.target)
                            }) : l.allowOutsideClick && ("boolean" == typeof l.allowOutsideClick ? l.allowOutsideClick : l.allowOutsideClick(e)) || e.preventDefault())
                        },
                        k = function(e) {
                            var t = d(e.target);
                            t || e.target instanceof Document ? t && (c.mostRecentlyFocusedNode = e.target) : (e.stopImmediatePropagation(), y(c.mostRecentlyFocusedNode || h()))
                        },
                        O = function(e) {
                            if (!1 !== l.escapeDeactivates && function(e) {
                                    return "Escape" === e.key || "Esc" === e.key || 27 === e.keyCode
                                }(e)) return e.preventDefault(), void n.deactivate();
                            (function(e) {
                                return "Tab" === e.key || 9 === e.keyCode
                            })(e) && function(e) {
                                f();
                                var t = null;
                                if (c.tabbableGroups.length > 0)
                                    if (e.shiftKey) {
                                        var n = B(c.tabbableGroups, (function(t) {
                                            var n = t.firstTabbableNode;
                                            return e.target === n
                                        }));
                                        if (n >= 0) {
                                            var r = 0 === n ? c.tabbableGroups.length - 1 : n - 1;
                                            t = c.tabbableGroups[r].lastTabbableNode
                                        }
                                    } else {
                                        var o = B(c.tabbableGroups, (function(t) {
                                            var n = t.lastTabbableNode;
                                            return e.target === n
                                        }));
                                        if (o >= 0) {
                                            var l = o === c.tabbableGroups.length - 1 ? 0 : o + 1;
                                            t = c.tabbableGroups[l].firstTabbableNode
                                        }
                                    }
                                else t = m("fallbackFocus");
                                t && (e.preventDefault(), y(t))
                            }(e)
                        },
                        E = function(e) {
                            l.clickOutsideDeactivates || d(e.target) || l.allowOutsideClick && ("boolean" == typeof l.allowOutsideClick ? l.allowOutsideClick : l.allowOutsideClick(e)) || (e.preventDefault(), e.stopImmediatePropagation())
                        },
                        I = function() {
                            if (c.active) return $.activateTrap(n), r = l.delayInitialFocus ? S((function() {
                                y(h())
                            })) : y(h()), o.addEventListener("focusin", k, !0), o.addEventListener("mousedown", _, {
                                capture: !0,
                                passive: !1
                            }), o.addEventListener("touchstart", _, {
                                capture: !0,
                                passive: !1
                            }), o.addEventListener("click", E, {
                                capture: !0,
                                passive: !1
                            }), o.addEventListener("keydown", O, {
                                capture: !0,
                                passive: !1
                            }), n
                        },
                        D = function() {
                            if (c.active) return o.removeEventListener("focusin", k, !0), o.removeEventListener("mousedown", _, !0), o.removeEventListener("touchstart", _, !0), o.removeEventListener("click", E, !0), o.removeEventListener("keydown", O, !0), n
                        };
                    return (n = {
                        activate: function(e) {
                            if (c.active) return this;
                            f(), c.active = !0, c.paused = !1, c.nodeFocusedBeforeActivation = o.activeElement;
                            var t = e && e.onActivate ? e.onActivate : l.onActivate;
                            return t && t(), I(), this
                        },
                        deactivate: function(e) {
                            if (!c.active) return this;
                            clearTimeout(r), D(), c.active = !1, c.paused = !1, $.deactivateTrap(n);
                            var t = e && void 0 !== e.onDeactivate ? e.onDeactivate : l.onDeactivate;
                            return t && t(), (e && void 0 !== e.returnFocus ? e.returnFocus : l.returnFocusOnDeactivate) && S((function() {
                                var e;
                                y((e = c.nodeFocusedBeforeActivation, m("setReturnFocus") || e))
                            })), this
                        },
                        pause: function() {
                            return c.paused || !c.active || (c.paused = !0, D()), this
                        },
                        unpause: function() {
                            return c.paused && c.active ? (c.paused = !1, f(), I(), this) : this
                        },
                        updateContainerElements: function(e) {
                            var t = [].concat(e).filter(Boolean);
                            return c.containers = t.map((function(element) {
                                return "string" == typeof element ? o.querySelector(element) : element
                            })), c.active && f(), this
                        }
                    }).updateContainerElements(e), n
                },
                I = {
                    props: {
                        active: {
                            type: Boolean,
                            default: !0
                        },
                        escapeDeactivates: {
                            type: Boolean,
                            default: !0
                        },
                        returnFocusOnDeactivate: {
                            type: Boolean,
                            default: !0
                        },
                        allowOutsideClick: {
                            type: [Boolean, Function],
                            default: !0
                        },
                        clickOutsideDeactivates: {
                            type: Boolean,
                            default: !1
                        },
                        initialFocus: [String, Function],
                        fallbackFocus: [String, Function]
                    },
                    model: {
                        event: "update:active",
                        prop: "active"
                    },
                    mounted: function() {
                        var e = this;
                        this.$watch("active", (function(t) {
                            t ? (e.trap = E(e.$el, {
                                escapeDeactivates: e.escapeDeactivates,
                                allowOutsideClick: function(t) {
                                    return "function" == typeof e.allowOutsideClick ? e.allowOutsideClick(t) : e.allowOutsideClick
                                },
                                clickOutsideDeactivates: e.clickOutsideDeactivates,
                                returnFocusOnDeactivate: e.returnFocusOnDeactivate,
                                onActivate: function() {
                                    e.$emit("update:active", !0), e.$emit("activate")
                                },
                                onDeactivate: function() {
                                    e.$emit("update:active", !1), e.$emit("deactivate")
                                },
                                initialFocus: e.initialFocus || function() {
                                    return e.$el
                                },
                                fallbackFocus: e.fallbackFocus
                            }), e.trap.activate()) : e.trap && e.trap.deactivate()
                        }), {
                            immediate: !0
                        })
                    },
                    beforeDestroy: function() {
                        this.trap && this.trap.deactivate(), this.trap = null
                    },
                    methods: {
                        activate: function() {
                            this.trap.activate()
                        },
                        deactivate: function() {
                            this.trap.deactivate()
                        }
                    },
                    render: function() {
                        var content = this.$slots.default;
                        if (!content || !content.length || content.length > 1) throw new Error("FocusTrap requires exactly one child");
                        return content[0]
                    }
                }
        },
        458: function(e, t, n) {
            "use strict";
            var r = n(441),
                o = n.n(r);
            n.d(t, "default", (function() {
                return o.a
            }))
        },
        459: function(e, t, n) {
            var r = n(29)(!1);
            r.push([e.i, ".accessibilityStatementLink_\\+6URc{position:relative;flex:0 0 0;width:0}.accessibilityStatementLinkInner_7PbI6{position:absolute;top:4rem;left:2rem;z-index:1;display:flex;width:auto;min-width:20rem}.accessibilityStatementLinkInner_7PbI6:not(:focus-within){clip:rect(1px,1px,1px,1px);-webkit-clip-path:inset(1px 1px 1px 1px);clip-path:inset(1px 1px 1px 1px);height:1px;overflow:hidden;pointer-events:none;position:absolute;width:1px}", ""]), r.locals = {
                accessibilityStatementLink: "accessibilityStatementLink_+6URc",
                accessibilityStatementLinkInner: "accessibilityStatementLinkInner_7PbI6"
            }, e.exports = r
        },
        502: function(e, t, n) {
            var content = n(679);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [e.i, content, ""]
            ]), content.locals && (e.exports = content.locals);
            (0, n(30).default)("307d4e58", content, !0, {
                sourceMap: !1
            })
        },
        503: function(e, t, n) {
            var content = n(681);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [e.i, content, ""]
            ]), content.locals && (e.exports = content.locals);
            (0, n(30).default)("9b335ad8", content, !0, {
                sourceMap: !1
            })
        },
        504: function(e, t, n) {
            var content = n(683);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [e.i, content, ""]
            ]), content.locals && (e.exports = content.locals);
            (0, n(30).default)("64a4d958", content, !0, {
                sourceMap: !1
            })
        },
        573: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = {
                    props: {
                        white: {
                            type: Boolean,
                            default: !1
                        },
                        primary: {
                            type: Boolean,
                            default: !1
                        }
                    },
                    computed: {
                        color() {
                            const {
                                $colors: e
                            } = this;
                            return this.white ? e.white : this.primary ? e.primary : e.primaryDark
                        }
                    }
                },
                o = n(579),
                l = n(5);
            var component = Object(l.a)(r, (function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("svg", {
                    class: e.$style.logo,
                    attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 432 38"
                    }
                }, [n("path", {
                    attrs: {
                        d: "M142,6.23V.46H120.74V37.54H142v-5.7H126.6v-10H142v-5.7H126.6V6.23Zm29.36,31.31h5.93V.46h-5.93ZM99.9,31.84V.46H94V31.69a5.86,5.86,0,0,0,5.86,5.85h16.73v-5.7ZM33.44.46V6.08h9.19V37.54h5.93V6.08h7.61V.46Zm49.05,0V16H66.21V.46H60.28V37.54h5.93V21.74H82.49v15.8h5.92V.46Zm63.35,0V6.08h7.67V37.54h5.93V6.08h7.61V.46Zm250,0V26.69L377,1.82A3.33,3.33,0,0,0,374.36.46h-.08a3.36,3.36,0,0,0-3.34,3.26V37.54h5.93V11.23l18.94,25a3.21,3.21,0,0,0,2.66,1.29,3.29,3.29,0,0,0,3.26-3.26V.46ZM365.46,6.23V.46H342V37.54h23.42v-5.7H348v-10h17.49v-5.7H348V6.23Zm55.37,9.5h-.09c-4.71-1.52-7.6-2.66-7.6-5.62,0-2.74,2.51-4.71,5.86-4.71,2.81,0,6.16.91,6.61,5.24l.08.76h6l-.15-.91C430.41,3.72,426.15,0,419.07,0c-6.84,0-11.93,4.33-11.93,10.11,0,7.07,6.39,9.35,10.56,10.71l.24.08c4.71,1.6,7.6,2.66,7.6,5.93s-2.58,5.55-6.32,5.55c-3.34,0-7-1.52-7.52-6l-.08-.68h-5.93l.08.83c.61,7,5.63,11.48,13.45,11.48,7.61,0,12.33-5.78,12.33-11.17,0-7.15-6.24-9.43-10.72-11.1Zm-84.19-9.5V.46H313.21V37.54h23.43v-5.7h-17.5v-10h17.5v-5.7h-17.5V6.23ZM276,16.72h-18.1v5.7h14c-1.33,6.74-6.73,10-12.32,10-6.69,0-13.53-4.64-13.53-13.38s6.69-13.38,13.38-13.38a13,13,0,0,1,11.87,7.45h6.15A18.9,18.9,0,0,0,259.52,0c-10.95,0-19.47,8.36-19.47,19A19.12,19.12,0,0,0,259.3,38c11.1,0,18.78-8.13,18.78-19.15A2.11,2.11,0,0,0,276,16.72Zm19.24,2.66h-6.62V6.08h5.78c4.87,0,7.38,3.34,7.38,6.61s-2.13,6.23-6.54,6.69ZM299.78,24a11.51,11.51,0,0,0,8-11c0-6.16-4.71-12.46-13-12.46H282.79V37.54h5.86V25.08h5L302,37.54H309Zm-85.2-1.08-.15.45A12.78,12.78,0,0,1,202,32.38c-6.69,0-13.38-4.79-13.38-13.38a13.16,13.16,0,0,1,25.48-4.86l.15.53h6.08l-.3-1A18.48,18.48,0,0,0,202,0c-9.66,0-19.32,6.84-19.32,19s9.58,19,19.24,19c7.75,0,15.59-4.41,18.55-14.14l.31-1ZM12.15,24.55l7.18-16.4,7.21,16.4ZM23.48,3.12A4.57,4.57,0,0,0,19.33.46a4.47,4.47,0,0,0-4.09,2.66L0,37.54H6.47l3.19-7.29H29.05l3.21,7.29h6.46Z",
                        fill: e.color
                    }
                })])
            }), [], !1, (function(e) {
                this.$style = o.default.locals || o.default
            }), null, null);
            t.default = component.exports
        },
        578: function(e, t, n) {
            "use strict";
            var r = n(13);
            const o = parseFloat(getComputedStyle(document.documentElement).fontSize);
            t.a = {
                props: {
                    promoBarHeight: {
                        type: Number,
                        default: 0
                    }
                },
                watch: {
                    watchToRecalculateHeaderHeight() {
                        this.setHeaderHeight(!0), this.setHeaderHeight()
                    }
                },
                computed: {
                    watchToRecalculateHeaderHeight() {
                        return [this.$route.path, this.$store.state.screen.medium, this.$store.state.screen.large, this.secondaryEl, this.transparent, this.showMobile, this.isNearTopMobile, this.isSticked, this.promoBarHeight]
                    }
                },
                mounted() {
                    this.setHeaderHeight(!0)
                },
                methods: {
                    async setHeaderHeight() {
                        var e;
                        arguments.length > 0 && void 0 !== arguments[0] && arguments[0] || (await Object(r.n)(), await Object(r.n)());
                        const {
                            promoBarHeight: t
                        } = this, {
                            main: main
                        } = this.$refs;
                        let n = 0,
                            l = 1,
                            c = "";
                        const d = this.$el && window.getComputedStyle(this.$el);
                        d && (n = (parseFloat(d.getPropertyValue("--header-height-adjustment")) || 0) * o, l = this.isSticked && d.getPropertyValue("--header-top").includes("calc(") ? 0 : 1, c = d.getPropertyValue("--header-sticky-trigger-position").includes("height-based"));
                        const m = ((null == main ? void 0 : main.offsetHeight) || 0) + -1 * n,
                            h = m * l,
                            f = (null === (e = this.$refs.secondary) || void 0 === e ? void 0 : e.$el.offsetHeight) || 0,
                            y = h;
                        document.body.style.setProperty("--header-sticky-trigger-position", `${(c?m:0)+10}px`), document.body.style.setProperty("--header-height-unadjusted", `${m}px`), document.body.style.setProperty("--header-height", `${y}px`), document.body.style.setProperty("--header-height-with-secondary", `${y+f}px`), document.body.style.setProperty("--header-height-with-promobar", `${y+t}px`), document.body.style.setProperty("--header-height-with-secondary-and-promobar", `${y+f+t}px`)
                    }
                }
            }
        },
        579: function(e, t, n) {
            "use strict";
            var r = n(451),
                o = n.n(r);
            n.d(t, "default", (function() {
                return o.a
            }))
        },
        580: function(e, t, n) {
            var r = n(29)(!1);
            r.push([e.i, ".logo_g5xvS path{transition:fill .3s}", ""]), r.locals = {
                logo: "logo_g5xvS"
            }, e.exports = r
        },
        678: function(e, t, n) {
            "use strict";
            var r = n(502),
                o = n.n(r);
            n.d(t, "default", (function() {
                return o.a
            }))
        },
        679: function(e, t, n) {
            var r = n(29)(!1);
            r.push([e.i, '.header_XxXls{--header-sticky-trigger-position:"default";--header-top:calc(var(--header-height-unadjusted, 7rem)*-1);--header-height-adjustment:0%;position:sticky;top:var(--header-top);z-index:3;transition:top .3s}@media(min-width:64em){.header_XxXls{--header-top:0}}@media(max-width:63.99em){.header_XxXls.__showMobile_9ITUk{--header-top:0}}@media(max-width:63.99em){.header_XxXls.__isNearTopMobile_L6zOk{--header-sticky-trigger-position:"height-based";--header-top:calc(var(--header-height-unadjusted, 7rem)*-1)}}.header_XxXls.__transparent_CE9ID{margin-bottom:-7rem}@media(min-width:64em){.header_XxXls.__transparent_CE9ID{margin-bottom:-9rem}}@media(min-width:64em){.header_XxXls.__sticked_WRpSQ{--header-height-adjustment:1rem}}@media(min-width:64em){.header_XxXls:not(.__transparent_CE9ID).__sticked_WRpSQ{--header-height-adjustment:2rem}}.main_ccnaK{position:relative;z-index:1}.main_ccnaK:before{position:absolute;top:0;left:0;z-index:-1;width:100%;height:calc(100% - var(--header-height-adjustment));content:"";transition:background-color .3s}@media(min-width:64em){.main_ccnaK:before{transition:background-color .3s,height .3s}}@media(min-width:64em){.header_XxXls:not(.__transparent_CE9ID) .main_ccnaK:before{background-color:#fff}}.header_XxXls.__sticked_WRpSQ .main_ccnaK:before{background-color:#f9f9f9}@media(min-width:64em){.mainSpacer_QGNhK{transition:height .3s}}@media(min-width:64em){.mainSpacer_QGNhK.__before_Ma2hG{height:1rem}}@media(min-width:64em){.header_XxXls.__sticked_WRpSQ .mainSpacer_QGNhK.__before_Ma2hG{height:0}}@media(min-width:64em){.mainSpacer_QGNhK.__after_Ygvni{height:.01rem}}@media(min-width:64em){.header_XxXls.__sticked_WRpSQ .mainSpacer_QGNhK.__after_Ygvni{height:1rem}}.mainInner_HW8m4{display:flex;align-items:center;height:7rem;padding:0 3rem;border-top:.1rem solid transparent;border-bottom:.1rem solid transparent;transition:border-bottom-color .3s}@media(min-width:48em){.mainInner_HW8m4{padding:0 6.5rem}}@media(min-width:64em){.mainInner_HW8m4{height:8rem}}.header_XxXls.__sticked_WRpSQ .mainInner_HW8m4{border-bottom-color:rgba(0,0,0,.15)}@media(min-width:64em){.header_XxXls:not(.__transparent_CE9ID) .mainInner_HW8m4{margin-bottom:1rem}}.mainLeft_J8-KK,.mainRight_SEWW7{display:flex;flex:1 1 0;align-items:center;width:0}@media(min-width:64em){.mainLeft_J8-KK{flex:0 0 auto;width:auto;padding-right:4rem}}.mainLogo_4qdT5{display:flex;align-items:center}@media(max-width:63.99em){.mainLogo_4qdT5{justify-content:center}}.mainRight_SEWW7{justify-content:flex-end}@media(min-width:48em){html[data-customer=exists] .mainRight_SEWW7.__isLoggedInLoading_suL6c,html[data-customer=loading] .mainRight_SEWW7.__isLoggedInLoading_suL6c{opacity:0}}.menuButtonWrapper_DUMny{margin-left:-1rem}.menuButton_j8q6N{box-sizing:initial;display:flex;flex-direction:column;justify-content:space-between;width:2.3rem;height:1.9rem;padding:1rem}@media(min-width:64em){.menuButton_j8q6N{width:2.7rem;height:2.3rem}}.menuButtonLine_oUjpO{border-bottom:.1rem solid var(--header-main-menu-button-color);transition:border-bottom-color .3s}.logoLink_5CdBj{position:relative;box-sizing:initial;display:flex;width:21.6rem;padding:1rem}@media(min-width:64em){.logoLink_5CdBj{margin-right:-23.6rem;transition:visibility .3s,opacity .3s}}@media(min-width:64em){.header_XxXls.__sticked_WRpSQ .logoLink_5CdBj{visibility:hidden;opacity:0}}.logoIcon_X5rfk{width:100%;height:100%}.logoLinkAg_4j-vM{padding:1rem;font-size:4.5rem;visibility:hidden;opacity:0;transition:visibility .3s,opacity .3s}@media(max-width:63.99em){.logoLinkAg_4j-vM{display:none}}@media(min-width:64em){.header_XxXls.__sticked_WRpSQ .logoLinkAg_4j-vM{visibility:inherit;opacity:1}}.mainRightGroup_WGJDw{transition:opacity .3s,visibility .3s}.mainRightGroup_WGJDw:not(:last-child){display:flex;justify-content:flex-end;width:0}@media(min-width:64em){.mainRightGroup_WGJDw:last-child{margin-left:3.2rem}}@media(min-width:64em){.header_XxXls.__sticked_WRpSQ .mainRightGroup_WGJDw:first-child,.header_XxXls:not(.__sticked_WRpSQ) .mainRightGroup_WGJDw:nth-child(2){visibility:hidden;opacity:0}}.mainRightGroupInner_Ar45K{display:flex;flex:0 0 auto;align-items:center;margin:0 -.8rem}.linksElement_4ACK6{flex:0 0 auto;padding:0 .8rem;color:var(--header-main-right-icon-color);transition:color .3s}@media(max-width:63.99em){.linksElement_4ACK6.__desktopOnly_Omsr4{display:none}}.linksLink_kuiap{font-family:Lausanne,Arial,sans-serif;font-size:1.4rem;font-weight:600;line-height:2.5rem;letter-spacing:.1rem;color:var(--header-main-right-link-color);text-decoration:none;transition:color .3s}.iconLinkWrapper_rhpQh{flex:0 0 auto;margin:-.8rem}.iconLink_Ytmb\\+{display:block;padding:.8rem;font-size:2.5rem}@media(min-width:64em){.iconLink_Ytmb\\+{font-size:4rem}}', ""]), r.locals = {
                header: "header_XxXls",
                __showMobile: "__showMobile_9ITUk",
                __isNearTopMobile: "__isNearTopMobile_L6zOk",
                __transparent: "__transparent_CE9ID",
                __sticked: "__sticked_WRpSQ",
                main: "main_ccnaK",
                mainSpacer: "mainSpacer_QGNhK",
                __before: "__before_Ma2hG",
                __after: "__after_Ygvni",
                mainInner: "mainInner_HW8m4",
                mainLeft: "mainLeft_J8-KK",
                mainRight: "mainRight_SEWW7",
                mainLogo: "mainLogo_4qdT5",
                __isLoggedInLoading: "__isLoggedInLoading_suL6c",
                menuButtonWrapper: "menuButtonWrapper_DUMny",
                menuButton: "menuButton_j8q6N",
                menuButtonLine: "menuButtonLine_oUjpO",
                logoLink: "logoLink_5CdBj",
                logoIcon: "logoIcon_X5rfk",
                logoLinkAg: "logoLinkAg_4j-vM",
                mainRightGroup: "mainRightGroup_WGJDw",
                mainRightGroupInner: "mainRightGroupInner_Ar45K",
                linksElement: "linksElement_4ACK6",
                __desktopOnly: "__desktopOnly_Omsr4",
                linksLink: "linksLink_kuiap",
                iconLinkWrapper: "iconLinkWrapper_rhpQh",
                iconLink: "iconLink_Ytmb+"
            }, e.exports = r
        },
        680: function(e, t, n) {
            "use strict";
            var r = n(503),
                o = n.n(r);
            n.d(t, "default", (function() {
                return o.a
            }))
        },
        681: function(e, t, n) {
            var r = n(29)(!1);
            r.push([e.i, '.menu_x2hHv{position:fixed;top:0;left:0;z-index:1;display:flex;flex-direction:column;width:100%;height:100%;color:#fff;background-color:#002f30}@media(min-width:48em){.menu_x2hHv{width:50vw;max-width:72rem}}.top_lVGap{display:flex;flex:0 0 auto;align-items:center;height:9rem;padding:0 3rem;margin-bottom:1rem}@media(min-width:64em){.top_lVGap{height:12rem;padding:0 6.5rem;margin-bottom:2rem}}.topLeft_Aqw\\+i,.topRight_o0Z8H{flex:0 0 auto;width:3rem}.topLeft_Aqw\\+i{font-size:1.5rem}@media(min-width:64em){.topLeft_Aqw\\+i{width:5.7rem;margin-left:-1.2rem;font-size:3.8rem}}.topCenter_CD3qx{flex:1 1 0;width:0}@media(max-width:47.99em){.topCenter_CD3qx{display:flex;justify-content:center}}.topRight_o0Z8H{--header-cart-button-background-color:#fff;display:flex;justify-content:flex-end;font-size:2.6rem;color:#fff}@media(min-width:48em){.topRight_o0Z8H{display:none}}.iconWrapper_OsSmU{margin:-.8rem}.close_uNbLa{box-sizing:initial;display:block;width:1em;padding:.8rem}.logoLink_TEvz6{display:flex;font-size:4.5rem}.logoIcon_GtDKK{width:21.6rem;height:100%}.cartLink_BNjtu{padding:.8rem}.main_ZjBaF{display:flex;flex:1 1 auto;flex-direction:column;justify-content:space-between;padding:0 3rem;overflow:auto}@media(min-width:64em){.main_ZjBaF{padding:0 6.5rem}}.linksBigEl_pTVEL{border-bottom:.1rem solid}@media(max-width:47.99em){.linksBigEl_pTVEL:first-child{border-top:.1rem solid}}.linksBigLink_Z5rGR{font-family:TimesNow,"Times New Roman",serif;font-size:3.2rem;font-weight:400;line-height:3.4rem;letter-spacing:-.018rem;display:block;padding:1.5rem 0;text-decoration:none;transition:color .3s}@media(min-width:48em){.linksBigLink_Z5rGR{font-family:TimesNow,"Times New Roman",serif;font-size:5.4rem;font-weight:400;line-height:5.5rem;letter-spacing:-.1rem}}@media(min-width:64em){.linksBigLink_Z5rGR{padding:2rem 0 2rem 4.5rem}}.linksBigLink_Z5rGR:hover{color:#2f7d39}.linksBottom_0GB8X{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;padding-top:2rem;padding-bottom:6rem;margin:2rem -1rem 0;--button-pill-hover-color:#2f7d39;--button-link-simple-hover-color:#2f7d39}@media(min-width:64em){.linksBottom_0GB8X{padding-top:7rem;padding-bottom:4.5rem}}.linksBottomEl_T3GLq{flex:0 0 auto;padding:1rem}', ""]), r.locals = {
                menu: "menu_x2hHv",
                top: "top_lVGap",
                topLeft: "topLeft_Aqw+i",
                topRight: "topRight_o0Z8H",
                topCenter: "topCenter_CD3qx",
                iconWrapper: "iconWrapper_OsSmU",
                close: "close_uNbLa",
                logoLink: "logoLink_TEvz6",
                logoIcon: "logoIcon_GtDKK",
                cartLink: "cartLink_BNjtu",
                main: "main_ZjBaF",
                linksBigEl: "linksBigEl_pTVEL",
                linksBigLink: "linksBigLink_Z5rGR",
                linksBottom: "linksBottom_0GB8X",
                linksBottomEl: "linksBottomEl_T3GLq"
            }, e.exports = r
        },
        682: function(e, t, n) {
            "use strict";
            var r = n(504),
                o = n.n(r);
            n.d(t, "default", (function() {
                return o.a
            }))
        },
        683: function(e, t, n) {
            var r = n(29)(!1);
            r.push([e.i, ".secondary_UJmX5{position:absolute;top:calc(100% - var(--header-height-adjustment));left:0;width:100%}.secondary_UJmX5:not(.__visible_k4Muk){pointer-events:none;visibility:hidden}", ""]), r.locals = {
                secondary: "secondary_UJmX5",
                __visible: "__visible_k4Muk"
            }, e.exports = r
        },
        843: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = {
                    components: {
                        FocusTrap: n(457).a
                    },
                    props: {
                        homeLink: {
                            type: String,
                            default: ""
                        },
                        headerData: {
                            type: Object,
                            required: !0
                        },
                        otherData: {
                            type: Object,
                            required: !0
                        },
                        menu: {
                            type: Array,
                            required: !0
                        },
                        menuBottom: {
                            type: Array,
                            required: !0
                        },
                        loggedInName: {
                            type: String,
                            default: ""
                        },
                        isSticked: {
                            type: Boolean,
                            required: !0
                        }
                    },
                    computed: {
                        label() {
                            return this.headerData.mobileMenuAccessibilityLabel
                        },
                        large() {
                            return this.$store.state.screen.large
                        },
                        menuBottomNormalized() {
                            const {
                                $prismic: e,
                                large: t
                            } = this;
                            return this.menuBottom.filter((link => {
                                const n = link.desktopOnly || link.desktop_only;
                                return e.hasUrl(link.link) && (!n || n && t)
                            }))
                        }
                    }
                },
                o = n(680),
                l = n(5);
            var component = Object(l.a)(r, (function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("FocusTrap", {
                    attrs: {
                        active: "",
                        "click-outside-deactivates": ""
                    },
                    on: {
                        deactivate: function(t) {
                            return e.$emit("close")
                        }
                    }
                }, [n("div", {
                    class: e.$style.menu,
                    attrs: {
                        role: "dialog",
                        "aria-modal": "true",
                        tabindex: "-1",
                        "aria-label": e.label
                    }
                }, [n("div", {
                    class: e.$style.top
                }, [n("div", {
                    class: e.$style.topLeft
                }, [n("div", {
                    class: e.$style.iconWrapper
                }, [n("BaseLink", {
                    class: e.$style.close,
                    attrs: {
                        "arial-label": e.otherData.modalCloseAccessibilityLabel,
                        "data-tracking-id": "header-menu-close"
                    },
                    on: {
                        click: function(t) {
                            return e.$emit("close")
                        }
                    }
                }, [n("BaseIcon", {
                    attrs: {
                        name: e.large ? "menu-close" : "mobile-menu-close-squeezed"
                    }
                })], 1)], 1)]), n("div", {
                    class: e.$style.topCenter
                }, [n("BaseLink", {
                    class: e.$style.logoLink,
                    attrs: {
                        smart: e.homeLink,
                        "aria-label": e.otherData.logoLinkAccessibilityLabel,
                        "data-tracking-id": "header-menu-logo"
                    },
                    nativeOn: {
                        click: function(t) {
                            return e.$emit("close")
                        }
                    }
                }, [e.large && e.isSticked ? n("BaseIcon", {
                    attrs: {
                        name: "logo-ag",
                        rectangle: !1
                    }
                }) : n("GlobalLogo", {
                    class: e.$style.logoIcon,
                    attrs: {
                        white: ""
                    }
                })], 1)], 1), n("div", {
                    class: e.$style.topRight
                })]), n("nav", {
                    class: e.$style.main
                }, [e.menu.length > 0 ? n("ul", {
                    class: e.$style.linksBig
                }, [e._l(e.menu, (function(link, t) {
                    return [e.$prismic.hasUrl(link.link) ? n("li", {
                        key: t,
                        class: e.$style.linksBigEl
                    }, [n("BaseLink", {
                        class: e.$style.linksBigLink,
                        attrs: {
                            smart: link.link.url,
                            target: link.link.target,
                            "data-tracking-id": "header-menu-link-" + t
                        },
                        nativeOn: {
                            click: function(t) {
                                return e.$emit("close")
                            }
                        }
                    }, [e._v(" " + e._s(link.label || link.link.url) + " ")])], 1) : e._e()]
                }))], 2) : e._e(), e.menuBottomNormalized.length > 0 ? n("ul", {
                    class: e.$style.linksBottom
                }, [e._l(e.menuBottomNormalized, (function(link, t) {
                    return [n("li", {
                        key: t,
                        class: e.$style.linksBottomEl
                    }, [n("BaseButtonAuto", {
                        attrs: {
                            appearance: "outline",
                            type: link.type,
                            smart: link.link.url,
                            target: link.link.target,
                            "full-width": !e.large,
                            "data-tracking-id": "header-menu-link-bottom-" + t
                        },
                        nativeOn: {
                            click: function(t) {
                                return e.$emit("close")
                            }
                        }
                    }, [link.replaceLabelWithLoggedInName || link.replace_label_with_logged_in_name ? [e._v(" " + e._s(e.loggedInName || link.label || link.link.url) + " ")] : [e._v(" " + e._s(link.label || link.link.url) + " ")]], 2)], 1)]
                }))], 2) : e._e()])])])
            }), [], !1, (function(e) {
                this.$style = o.default.locals || o.default
            }), null, null);
            t.default = component.exports;
            installComponents(component, {
                GlobalLogo: n(573).default
            })
        },
        844: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n(36),
                o = {
                    inheritAttrs: !1,
                    data: () => ({
                        hasSecondary: !1,
                        secondaryEl: null,
                        isSecondaryVisible: !1,
                        isSecondaryAnimated: !1
                    }),
                    watch: {
                        secondaryEl(e) {
                            if (this.observer.disconnect(), this.isSecondaryVisible = !1, e) {
                                this.isSecondaryAnimated = Boolean(e.dataset.animate);
                                const t = document.getElementById(e.dataset.triggerId);
                                this.observer.observe(t)
                            }
                            this.$emit("update:secondaryEl", e)
                        },
                        isSecondaryVisible(e) {
                            this.$emit("update:isSecondaryVisible", e)
                        },
                        hasSecondary(e) {
                            e && r.e.$emit("has-secondary-header")
                        }
                    },
                    mounted() {
                        this.observer = new IntersectionObserver(this.observerCallback, {}), this.$nextTick((() => {
                            this.$nextTick((() => {
                                this.$refs.portalTarget.children().length > 0 && this.secondaryChange(!0)
                            }))
                        }))
                    },
                    beforeDestroy() {
                        this.observer.disconnect()
                    },
                    methods: {
                        secondaryChange(e) {
                            this.hasSecondary = e, e ? this.$nextTick().then((() => {
                                this.secondaryEl = this.$refs.portalTarget.$el
                            })) : this.secondaryEl = null
                        },
                        observerCallback(e) {
                            e.forEach((e => {
                                e.isIntersecting ? this.isSecondaryVisible = !1 : e.boundingClientRect.top <= 0 && (this.isSecondaryVisible = !0)
                            }))
                        }
                    }
                },
                l = n(682),
                c = n(5);
            var component = Object(c.a)(o, (function() {
                var e, t = this,
                    n = t.$createElement,
                    r = t._self._c || n;
                return r("aside", {
                    ref: "secondary",
                    class: [t.$style.secondary, (e = {}, e[t.$style.__visible] = t.isSecondaryVisible, e)]
                }, [r("client-only", [r("portal-target", {
                    ref: "portalTarget",
                    attrs: {
                        name: "header-secondary",
                        slim: ""
                    },
                    on: {
                        change: t.secondaryChange
                    }
                })], 1)], 1)
            }), [], !1, (function(e) {
                this.$style = l.default.locals || l.default
            }), null, null);
            t.default = component.exports
        },
        857: function(e, t, n) {
            "use strict";
            n.r(t);
            n(14);
            var r = n(33),
                o = n(578),
                l = n(13),
                c = n(7),
                d = n(36),
                m = n(46);
            var h = {
                    mixins: [o.a],
                    inheritAttrs: !1,
                    props: {
                        transparent: {
                            type: Boolean,
                            default: !1
                        },
                        transparentColors: {
                            type: String,
                            default: null
                        },
                        isSticked: {
                            type: Boolean,
                            required: !0
                        },
                        items: {
                            type: Array,
                            default: null
                        }
                    },
                    data: () => ({
                        menuOpen: !1,
                        cartOpen: !1,
                        secondaryEl: !1,
                        isLoggedInLoading: !0,
                        isLoggedIn: !1,
                        loggedInName: "",
                        showMobile: !0,
                        isNearTopMobile: !0
                    }),
                    computed: { ...Object(r.c)({
                            otherData: e => e.globalData.other
                        }),
                        ...Object(r.c)(["language", "screen"]),
                        ...Object(l.m)((e => e.header), ["menu", "menuBottom", "desktopRight"]),
                        header() {
                            return this.$store.getters.globalData.header
                        },
                        homeLink() {
                            return `/${c.b[this.language]}`
                        },
                        classes() {
                            const {
                                $style: e
                            } = this;
                            return [e.header, {
                                [e.__transparent]: this.transparent,
                                [e.__sticked]: this.isSticked,
                                [e.__showMobile]: this.showMobile,
                                [e.__isNearTopMobile]: this.isNearTopMobile
                            }]
                        },
                        styling() {
                            const {
                                isSticked: e,
                                transparent: t,
                                transparentColors: n,
                                $colors: r,
                                isMobile: o
                            } = this;
                            let l = r.primaryDark,
                                c = o ? {} : {
                                    white: t
                                },
                                d = r.primary,
                                m = r.primaryDark,
                                h = r.white;
                            return t && ("White" === n ? (d = r.white, e || (l = m = r.white, c = {
                                white: !0
                            }, h = r.primaryDark)) : "Primary Dark, White Logo" === n || "Primary Dark" === n ? (d = r.primary, e || (l = m = r.primaryDark, c = {
                                white: "Primary Dark" !== n
                            }, h = r.white)) : "Primary" === n && (d = r.primary, e || (l = m = r.primary, c = {
                                primary: !0
                            }, h = r.white))), {
                                logoProps: c,
                                headerStyle: {
                                    "--header-main-menu-button-color": l,
                                    "--header-main-right-icon-color": m,
                                    "--header-cart-button-background-color": m,
                                    "--header-cart-button-text-color": h
                                },
                                mainRightGroupStyles: [{
                                    "--header-main-right-link-color": d
                                }, {
                                    "--header-main-right-link-color": r.primary
                                }]
                            }
                        },
                        rightForPage() {
                            const {
                                items: e
                            } = this;
                            if (!e || 0 === e.length) return null;
                            const {
                                evalExpressionWithData: t
                            } = this.$store.getters;
                            return e.filter((e => !e.condition || t(e.condition)))
                        },
                        rightNormalized() {
                            const {
                                isLoggedIn: e
                            } = this, t = (this.rightForPage || this.desktopRight).filter((link => this.$prismic.hasUrl(link.link) && (!link.hideWhenLoggedIn || !e))).map((link => ({
                                kind: "LINK",
                                desktopOnly: !0,
                                ...link
                            })));
                            return [{
                                items: t.filter((link => !link.onSticky))
                            }, {
                                items: t.filter((link => link.onSticky))
                            }, {
                                items: [{
                                    kind: "ACCOUNT",
                                    desktopOnly: !0
                                }]
                            }]
                        },
                        menuBottomNormalized() {
                            return this.isLoggedIn ? [...this.menuBottom.filter((link => !(link.hideWhenLoggedIn || link.hide_when_logged_in))), {
                                link: {
                                    url: "https://members-logout"
                                },
                                label: this.header.shopifyLogoutLabel,
                                type: "LinkSimpleLarge",
                                desktopOnly: !1,
                                replaceLabelWithLoggedInName: !1
                            }] : this.menuBottom
                        },
                        isMobile() {
                            return !this.screen.large
                        },
                        type() {
                            return "main-" + (this.isMobile ? "mobile" : "desktop")
                        }
                    },
                    watch: {
                        type: {
                            handler(e) {
                                document.body.style.setProperty("--header-type", e)
                            },
                            immediate: !0
                        }
                    },
                    beforeMount() {
                        this.lastScrollPosition = 0
                    },
                    mounted() {
                        d.a.$on("open", this.cartSetOpen), d.b.$on("hideOnMobile", this.hideHeaderOnMobile);
                        const e = e => {
                            var t;
                            return (null === (t = e.firstName) || void 0 === t ? void 0 : t.length) > 18 ? `${e.firstName.substr(0,17)}…` : e.firstName
                        };
                        window.customerPromise.then((data => {
                            data && (this.isLoggedIn = !0, this.loggedInName = e(data))
                        })).finally((() => {
                            this.isLoggedInLoading = !1
                        }))
                    },
                    beforeDestroy() {
                        d.a.$off("open", this.cartSetOpen), d.b.$off("hideOnMobile", this.hideHeaderOnMobile), document.body.style.removeProperty("--header-type")
                    },
                    methods: {
                        setJustClosed(e) {
                            this.justClosed = e, setTimeout((() => {
                                this.justClosed = null
                            }), 200)
                        },
                        openMenu() {
                            this.menuOpen = !0
                        },
                        closeMenu() {
                            "menu" !== this.justClosed && (this.menuOpen = !1, this.setJustClosed("menu"))
                        },
                        cartToggle() {
                            "cart" !== this.justClosed && (this.cartOpen = !this.cartOpen, this.cartOpen || this.setJustClosed("cart"))
                        },
                        cartSetOpen() {
                            this.cartOpen = !0
                        },
                        hideHeaderOnMobile() {
                            this.isMobile && (this.showMobile = !1)
                        },
                        scroll() {
                            const e = window.pageYOffset;
                            if (Object(m.c)()) return void(this.lastScrollPosition = e);
                            const {
                                lastScrollPosition: t,
                                showMobile: n
                            } = this;
                            if (e < 0 && n) return;
                            const r = e - t < 0 ? "UP" : "DOWN",
                                o = e < 200;
                            o === this.isNearTopMobile || "DOWN" !== r && ("UP" !== r || n && this.isSticked) || (this.isNearTopMobile = o), Math.abs(e - t) < 100 || (this.showMobile = e < t, this.lastScrollPosition = e)
                        }
                    }
                },
                f = n(678),
                y = n(5);
            var component = Object(y.a)(h, (function() {
                var e, t = this,
                    n = t.$createElement,
                    r = t._self._c || n;
                return r("header", {
                    class: t.classes,
                    style: t.styling.headerStyle
                }, [t.menuOpen || t.cartOpen ? r("BaseScrollLock") : t._e(), t.isMobile ? r("GlobalEvents", {
                    on: {
                        scroll: t.scroll
                    }
                }) : t._e(), r("div", {
                    ref: "main",
                    class: t.$style.main
                }, [r("GlobalHeaderPromobar"), r("div", {
                    class: [t.$style.mainSpacer, t.$style.__before]
                }), r("div", {
                    class: t.$style.mainInner
                }, [r("div", {
                    class: t.$style.mainLeft
                }, [r("GlobalAccessibilityStatementLink"), r("div", {
                    class: t.$style.menuButtonWrapper
                }, [r("BaseLink", {
                    class: t.$style.menuButton,
                    attrs: {
                        title: t.header.mobileMenuAccessibilityLabel,
                        "data-tracking-id": "header-main-open-menu"
                    },
                    on: {
                        click: t.openMenu
                    }
                }, [r("div", {
                    class: t.$style.menuButtonLine
                }), r("div", {
                    class: t.$style.menuButtonLine
                }), r("div", {
                    class: t.$style.menuButtonLine
                })])], 1), r("transition", {
                    attrs: {
                        name: "slide-from-left"
                    }
                }, [t.menuOpen ? r("GlobalHeaderMenu", {
                    attrs: {
                        menu: t.menu,
                        "menu-bottom": t.menuBottomNormalized,
                        "header-data": t.header,
                        "other-data": t.otherData,
                        "home-link": t.homeLink,
                        "logged-in-name": t.loggedInName,
                        "is-sticked": t.isSticked
                    },
                    on: {
                        close: t.closeMenu
                    }
                }) : t._e()], 1)], 1), r("div", {
                    class: t.$style.mainLogo
                }, [r("BaseLink", {
                    class: t.$style.logoLink,
                    attrs: {
                        smart: t.homeLink,
                        "aria-label": t.otherData.logoLinkAccessibilityLabel,
                        "data-tracking-id": "header-main-logo"
                    }
                }, [r("GlobalLogo", t._b({
                    class: t.$style.logoIcon
                }, "GlobalLogo", t.styling.logoProps, !1))], 1), r("BaseLink", {
                    class: t.$style.logoLinkAg,
                    attrs: {
                        smart: t.homeLink,
                        "aria-label": t.otherData.logoLinkAccessibilityLabel,
                        "data-tracking-id": "header-main-logo"
                    }
                }, [r("BaseIcon", {
                    attrs: {
                        name: "logo-ag",
                        rectangle: !1
                    }
                })], 1)], 1), r("div", {
                    class: [t.$style.mainRight, (e = {}, e[t.$style.__isLoggedInLoading] = t.isLoggedInLoading, e)]
                }, [t._l(t.rightNormalized, (function(e, n) {
                    return [r("div", {
                        key: n,
                        class: t.$style.mainRightGroup,
                        style: t.styling.mainRightGroupStyles[n]
                    }, [r("div", {
                        class: t.$style.mainRightGroupInner
                    }, [t._l(e.items, (function(e, o) {
                        var l;
                        return [r("div", {
                            key: o,
                            class: [t.$style.linksElement, (l = {}, l[t.$style.__desktopOnly] = e.desktopOnly, l[t.$style.__mobileOnly] = e.mobileOnly, l)]
                        }, ["LINK" === e.kind ? ["Link" === e.renderType ? r("BaseLink", {
                            class: t.$style.linksLink,
                            attrs: {
                                "data-tracking-id": "header-main-right-" + n + "-" + o,
                                smart: e.link.url,
                                target: e.link.target
                            }
                        }, [t._v(" " + t._s(e.label || e.link.url) + " ")]) : "Pill" === e.renderType ? r("BaseButtonPill", {
                            attrs: {
                                "data-tracking-id": "header-main-right-" + n + "-" + o,
                                smart: e.link.url,
                                target: e.link.target,
                                arrow: ""
                            }
                        }, [t._v(" " + t._s(e.label || e.link.url) + " ")]) : t._e()] : "ACCOUNT" === e.kind ? [t.isLoggedIn && t.loggedInName ? r("BaseButtonPill", {
                            attrs: {
                                appearance: "outline",
                                "data-tracking-id": "header-main-right-account",
                                href: "/members/"
                            }
                        }, [t._v(" " + t._s(t.loggedInName) + " ")]) : r("div", {
                            class: t.$style.iconLinkWrapper
                        }, [r("BaseLink", {
                            class: t.$style.iconLink,
                            attrs: {
                                "data-tracking-id": "header-main-right-account",
                                href: "/members/",
                                title: t.header.accountButtonTitle
                            }
                        }, [r("BaseIcon", {
                            attrs: {
                                name: "profile-with-circle",
                                "aria-hidden": "true"
                            }
                        })], 1)], 1)] : t._e()], 2)]
                    }))], 2)])]
                }))], 2)]), r("div", {
                    class: [t.$style.mainSpacer, t.$style.__after]
                })], 1), r("GlobalHeaderRenderSecondary", {
                    ref: "secondary",
                    attrs: {
                        "secondary-el": t.secondaryEl
                    },
                    on: {
                        "update:secondaryEl": function(e) {
                            t.secondaryEl = e
                        },
                        "update:secondary-el": function(e) {
                            t.secondaryEl = e
                        }
                    }
                })], 1)
            }), [], !1, (function(e) {
                this.$style = f.default.locals || f.default
            }), null, null);
            t.default = component.exports;
            installComponents(component, {
                GlobalHeaderPromobar: n(292).default,
                GlobalAccessibilityStatementLink: n(455).default,
                GlobalHeaderMenu: n(843).default,
                GlobalLogo: n(573).default,
                GlobalHeaderRenderSecondary: n(844).default
            })
        }
    }
]);