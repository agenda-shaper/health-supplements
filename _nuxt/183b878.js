(window.webpackJsonp = window.webpackJsonp || []).push([
    [50], {
        520: function(e, t, r) {
            var content = r(715);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [e.i, content, ""]
            ]), content.locals && (e.exports = content.locals);
            (0, r(30).default)("54c35a12", content, !0, {
                sourceMap: !1
            })
        },
        714: function(e, t, r) {
            "use strict";
            var n = r(520),
                o = r.n(n);
            r.d(t, "default", (function() {
                return o.a
            }))
        },
        715: function(e, t, r) {
            var n = r(29)(!1);
            n.push([e.i, ".showDesktop_aTyd\\+{margin-bottom:-10rem}@media(max-width:47.99em){.showDesktop_aTyd\\+{display:none}}@media(min-width:48em){.showMobile_WHjWw{display:none}}.heading_35w7u{display:block;margin-top:6rem;margin-bottom:4rem;text-align:center}@media(min-width:48em){.heading_35w7u{width:100%;margin-top:10rem;margin-bottom:6rem}}.center_6yPLT{margin-bottom:10rem;text-align:center}.iconWrapper_xVm3R.__mobile_sGEUl{width:7.2rem}.iconWrapper_xVm3R.__desktop_-TtRV{width:6rem;padding-bottom:2.5rem;margin:0 auto}.subText_M1f43{font-family:Lausanne,Arial,sans-serif;font-size:1.9rem;font-weight:600;line-height:2.5rem;letter-spacing:-.01rem}.subText_M1f43:not(:last-child){margin-bottom:.8rem}.descriptionMobile_7gBf9{line-height:2.4rem}.carouselWrapper_SfBDz{padding-right:10rem;margin:0 -3rem;overflow:hidden}.card_NGVga{padding-left:5rem;margin-bottom:4rem}.circle_m-DVB{display:flex;align-items:center;justify-content:center;width:16rem;height:16rem;margin-bottom:3rem;background:rgba(47,125,57,.1);border-radius:50%}", ""]), n.locals = {
                showDesktop: "showDesktop_aTyd+",
                showMobile: "showMobile_WHjWw",
                heading: "heading_35w7u",
                center: "center_6yPLT",
                iconWrapper: "iconWrapper_xVm3R",
                __mobile: "__mobile_sGEUl",
                __desktop: "__desktop_-TtRV",
                subText: "subText_M1f43",
                descriptionMobile: "descriptionMobile_7gBf9",
                carouselWrapper: "carouselWrapper_SfBDz",
                card: "card_NGVga",
                circle: "circle_m-DVB"
            }, e.exports = n
        },
        867: function(e, t, r) {
            "use strict";
            r.r(t);
            var n = {
                    inheritAttrs: !1,
                    props: {
                        heading: {
                            type: [String, Array],
                            default: ""
                        },
                        items: {
                            type: Array,
                            default: () => []
                        },
                        n: {
                            type: Number,
                            required: !0
                        }
                    }
                },
                o = r(714),
                l = r(5);
            var component = Object(l.a)(n, (function() {
                var e = this,
                    t = e.$createElement,
                    r = e._self._c || t;
                return r("BaseSpacing", [r("BaseContainer", [e.$prismic.hasTitle(e.heading) ? r("div", {
                    class: e.$style.heading,
                    domProps: {
                        innerHTML: e._s(e.heading)
                    }
                }) : e._e(), r("div", {
                    class: e.$style.showDesktop
                }, [r("BaseGridRow", e._l(e.items, (function(t, n) {
                    return r("BaseGridCol", {
                        key: n,
                        class: e.$style.center,
                        attrs: {
                            medium: 4,
                            xlarge: {
                                span: 4,
                                padding: "half"
                            }
                        }
                    }, [r("div", [r("div", {
                        class: [e.$style.iconWrapper, e.$style.__desktop]
                    }, [r("BaseImage", {
                        attrs: {
                            images: {
                                all: null,
                                medium: t.icon
                            },
                            aspect: 1.2,
                            sizes: "6rem",
                            contain: "",
                            critical: e.n < 2
                        }
                    })], 1), r("p", {
                        class: e.$style.subText
                    }, [e._v(e._s(t.subText))]), r("p", [e._v(e._s(t.description))])])])
                })), 1)], 1), r("div", {
                    class: e.$style.showMobile
                }, [r("div", {
                    class: e.$style.carouselWrapper
                }, [r("SharedCarousel", {
                    attrs: {
                        slides: e.items
                    },
                    scopedSlots: e._u([{
                        key: "slide",
                        fn: function(t) {
                            var n = t.slide;
                            return [r("div", {
                                class: e.$style.card
                            }, [r("div", {
                                class: e.$style.circle
                            }, [r("div", {
                                class: [e.$style.iconWrapper, e.$style.__mobile]
                            }, [r("BaseImage", {
                                attrs: {
                                    images: {
                                        all: n.icon,
                                        medium: null
                                    },
                                    aspect: 1.2,
                                    sizes: "7.2rem",
                                    contain: "",
                                    critical: e.n < 2
                                }
                            })], 1)]), n.subText ? r("p", {
                                class: e.$style.subText
                            }, [e._v(e._s(n.subText))]) : e._e(), n.description ? r("p", {
                                class: e.$style.descriptionMobile
                            }, [e._v(e._s(n.description))]) : e._e()])]
                        }
                    }])
                })], 1)])])], 1)
            }), [], !1, (function(e) {
                this.$style = o.default.locals || o.default
            }), null, null);
            t.default = component.exports;
            installComponents(component, {
                SharedCarousel: r(448).default
            })
        }
    }
]);