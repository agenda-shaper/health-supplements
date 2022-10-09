(window.webpackJsonp = window.webpackJsonp || []).push([
    [67], {
        564: function(e, t, n) {
            var content = n(809);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [e.i, content, ""]
            ]), content.locals && (e.exports = content.locals);
            (0, n(30).default)("36ab8974", content, !0, {
                sourceMap: !1
            })
        },
        808: function(e, t, n) {
            "use strict";
            var o = n(564),
                r = n.n(o);
            n.d(t, "default", (function() {
                return r.a
            }))
        },
        809: function(e, t, n) {
            var o = n(29)(!1);
            o.push([e.i, ".preHeader_KppLd{text-align:center;font-family:Lausanne,Arial,sans-serif;font-size:1.4rem;font-weight:600;line-height:2.5rem;letter-spacing:.1rem}@media(min-width:48em){.preHeader_KppLd{font-family:Lausanne,Arial,sans-serif;font-size:1.8rem;font-weight:600;line-height:2.5rem;letter-spacing:.1rem}}.header_E6b1w{text-align:center;overflow-wrap:break-word}@media(min-width:48em){.header_E6b1w{margin-top:.3rem}}.contentContainer_BzpAt{margin-top:3rem}@media(min-width:48em){.contentContainer_BzpAt{display:flex;flex-direction:row;justify-content:space-between;margin-top:4rem}}.contentSubContainer_t5DXg{flex:0 0 auto;width:100%}@media(min-width:48em){.contentSubContainer_t5DXg{width:calc(50% - .5px)}}.contentSubContainer_t5DXg:nth-child(2){margin-top:6rem}@media(min-width:48em){.contentSubContainer_t5DXg:nth-child(2){margin-top:0}}.content_H9aqj{padding-top:2rem}@media(min-width:48em){.content_H9aqj{padding-right:3rem}}@media(min-width:64em){.content_H9aqj{padding-top:2.5rem;padding-right:4rem}}@media(min-width:75em){.content_H9aqj{padding-right:5.5rem}}.content_H9aqj p:nth-child(2){margin-top:.2em}", ""]), o.locals = {
                preHeader: "preHeader_KppLd",
                header: "header_E6b1w",
                contentContainer: "contentContainer_BzpAt",
                contentSubContainer: "contentSubContainer_t5DXg",
                content: "content_H9aqj"
            }, e.exports = o
        },
        904: function(e, t, n) {
            "use strict";
            n.r(t);
            var o = {
                    props: {
                        n: {
                            type: Number,
                            required: !0
                        },
                        preHeader: {
                            type: String,
                            default: ""
                        },
                        header: {
                            type: String,
                            default: ""
                        },
                        section1Content: {
                            type: [String, Array],
                            default: ""
                        },
                        section2Content: {
                            type: [String, Array],
                            default: ""
                        },
                        section1ImageDesktopFocalPoint: {
                            type: String,
                            default: "Center"
                        },
                        section2ImageDesktopFocalPoint: {
                            type: String,
                            default: "Center"
                        },
                        section1ImageDesktop: {
                            type: Object,
                            default: () => ({})
                        },
                        section1ImageMobile: {
                            type: Object,
                            default: () => ({})
                        },
                        section2ImageMobile: {
                            type: Object,
                            default: () => ({})
                        },
                        section2ImageDesktop: {
                            type: Object,
                            default: () => ({})
                        },
                        anchoringId: {
                            type: String,
                            default: () => ""
                        }
                    },
                    computed: {
                        section1ImageDesktopPosition() {
                            return `${(this.section1ImageDesktopFocalPoint||"center").toLowerCase()} center`
                        },
                        section2ImageDesktopPosition() {
                            return `${(this.section2ImageDesktopFocalPoint||"center").toLowerCase()} center`
                        }
                    }
                },
                r = n(808),
                c = n(5);
            var component = Object(c.a)(o, (function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("BaseSpacing", [n("BaseContainer", [n("div", {
                    attrs: {
                        id: e.anchoringId
                    }
                }, [e.preHeader ? n("p", {
                    class: e.$style.preHeader,
                    domProps: {
                        textContent: e._s(e.preHeader)
                    }
                }) : e._e(), e.header ? n("h2", {
                    class: e.$style.header,
                    domProps: {
                        textContent: e._s(e.header)
                    }
                }) : e._e(), n("div", {
                    class: e.$style.contentContainer
                }, [n("div", {
                    class: e.$style.contentSubContainer
                }, [n("BaseImage", {
                    attrs: {
                        critical: e.n < 2,
                        images: {
                            all: e.section1ImageMobile,
                            medium: null
                        },
                        sizes: {
                            all: "calc(100vw - 4rem)"
                        }
                    }
                }), n("BaseImage", {
                    attrs: {
                        critical: e.n < 2,
                        aspect: 1.5,
                        images: {
                            all: null,
                            medium: e.section1ImageDesktop
                        },
                        sizes: {
                            all: "calc(100vw - 6rem)",
                            medium: "calc(50vw - 6.5rem)",
                            xlarge: "65.5rem"
                        },
                        "image-position": e.section1ImageDesktopPosition
                    }
                }), e.$prismic.hasRichText(e.section1Content) ? n("div", {
                    directives: [{
                        name: "rich-text",
                        rawName: "v-rich-text"
                    }],
                    class: e.$style.content,
                    domProps: {
                        innerHTML: e._s(e.section1Content)
                    }
                }) : e._e()], 1), n("div", {
                    class: e.$style.contentSubContainer
                }, [n("BaseImage", {
                    attrs: {
                        critical: e.n < 2,
                        images: {
                            all: e.section2ImageMobile,
                            medium: null
                        },
                        sizes: {
                            all: "calc(100vw - 4rem)"
                        }
                    }
                }), n("BaseImage", {
                    attrs: {
                        aspect: 1.5,
                        critical: e.n < 2,
                        images: {
                            all: null,
                            medium: e.section2ImageDesktop
                        },
                        sizes: {
                            all: "calc(100vw - 6rem)",
                            medium: "calc(50vw - 6.5rem)",
                            xlarge: "65.5rem"
                        },
                        "image-position": e.section2ImageDesktopPosition
                    }
                }), e.$prismic.hasRichText(e.section2Content) ? n("div", {
                    directives: [{
                        name: "rich-text",
                        rawName: "v-rich-text"
                    }],
                    class: e.$style.content,
                    domProps: {
                        innerHTML: e._s(e.section2Content)
                    }
                }) : e._e()], 1)])])])], 1)
            }), [], !1, (function(e) {
                this.$style = r.default.locals || r.default
            }), null, null);
            t.default = component.exports
        }
    }
]);