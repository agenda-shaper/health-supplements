(window.webpackJsonp = window.webpackJsonp || []).push([
    [58], {
        535: function(e, t, n) {
            var content = n(751);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [e.i, content, ""]
            ]), content.locals && (e.exports = content.locals);
            (0, n(30).default)("d0311598", content, !0, {
                sourceMap: !1
            })
        },
        750: function(e, t, n) {
            "use strict";
            var r = n(535),
                l = n.n(r);
            n.d(t, "default", (function() {
                return l.a
            }))
        },
        751: function(e, t, n) {
            var r = n(29)(!1);
            r.push([e.i, ".container_hO-RG{display:flex;flex-direction:column;background-color:#f9f9f9}@media(min-width:64em){.container_hO-RG{flex-direction:row}}.image_f8Fi8{position:relative;width:100%}@media(min-width:64em){.image_f8Fi8.__mobile_TRslz{display:none}}.image_f8Fi8.__desktop_SeFP4{flex-shrink:0;width:50%}@media(max-width:63.99em){.image_f8Fi8.__desktop_SeFP4{display:none}}.contentContainer_L8k4R{width:100%;padding:4.5rem 3rem}@media(min-width:75em){.contentContainer_L8k4R{max-width:72rem;padding-right:6.5rem;padding-bottom:5.4rem;padding-left:6.5rem}}.preheader_RgByv{font-family:Lausanne,Arial,sans-serif;font-size:1.4rem;font-weight:600;line-height:2.5rem;letter-spacing:.1rem}@media(min-width:48em){.preheader_RgByv{font-family:Lausanne,Arial,sans-serif;font-size:1.8rem;font-weight:600;line-height:2.5rem;letter-spacing:.1rem}}@media(min-width:75em){.preheader_RgByv{margin-top:5.5rem}}@media(min-width:75em){.header_fBy1n{margin-top:.4rem}}.headerText_QBftE{white-space:pre-line}.headerInlineImageWrapper_\\+ntgl{display:inline-block;width:calc(1.2em*var(--image-ratio));height:1.2em;margin:0 .2em;vertical-align:sub}.content_UxVyv{margin-top:5.7rem;border-top:.1rem solid}@media(min-width:75em){.content_UxVyv{margin-top:12rem}}.content_UxVyv h3{font-family:Lausanne,Arial,sans-serif;font-size:1.7rem;font-weight:300;line-height:2.5rem;letter-spacing:-.01rem;margin-top:1.5rem}@media(min-width:48em){.content_UxVyv h3{margin-top:2.5rem}}.content_UxVyv :first-child{margin-top:1.2rem}", ""]), r.locals = {
                container: "container_hO-RG",
                image: "image_f8Fi8",
                __mobile: "__mobile_TRslz",
                __desktop: "__desktop_SeFP4",
                contentContainer: "contentContainer_L8k4R",
                preheader: "preheader_RgByv",
                header: "header_fBy1n",
                headerText: "headerText_QBftE",
                headerInlineImageWrapper: "headerInlineImageWrapper_+ntgl",
                content: "content_UxVyv"
            }, e.exports = r
        },
        883: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = {
                    inheritAttrs: !1,
                    props: {
                        n: {
                            type: Number,
                            required: !0
                        },
                        image: {
                            type: Object,
                            default: () => ({})
                        },
                        preheader: {
                            type: String,
                            default: ""
                        },
                        content: {
                            type: [String, Array],
                            default: ""
                        },
                        items: {
                            type: Array,
                            default: () => []
                        },
                        anchoringId: {
                            type: String,
                            default: () => ""
                        }
                    },
                    computed: {
                        itemsNormalized() {
                            return this.items.map((e => {
                                var t;
                                if (null !== (t = e.headerInlineImage) && void 0 !== t && t.height) {
                                    const {
                                        width: t,
                                        height: n
                                    } = e.headerInlineImage;
                                    return { ...e,
                                        imageRatio: t / n
                                    }
                                }
                                return e
                            }))
                        }
                    }
                },
                l = n(750),
                m = n(5);
            var component = Object(m.a)(r, (function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("BaseSpacing", {
                    attrs: {
                        "inner-space": "",
                        "no-padding": ""
                    }
                }, [n("div", {
                    class: e.$style.container,
                    attrs: {
                        id: e.anchoringId
                    }
                }, [n("div", {
                    class: [e.$style.image, e.$style.__mobile]
                }, [n("BaseImage", {
                    attrs: {
                        critical: e.n < 2,
                        images: {
                            all: e.image,
                            large: null
                        },
                        sizes: "100vw"
                    }
                })], 1), n("div", {
                    class: [e.$style.image, e.$style.__desktop]
                }, [n("BaseImage", {
                    attrs: {
                        critical: e.n < 2,
                        images: {
                            all: null,
                            large: e.image
                        },
                        sizes: "50vw",
                        fit: ""
                    }
                })], 1), n("div", {
                    class: e.$style.contentContainer
                }, [e.preheader ? n("div", {
                    class: e.$style.preheader,
                    domProps: {
                        textContent: e._s(e.preheader)
                    }
                }) : e._e(), n("h2", {
                    class: e.$style.header
                }, [e._l(e.itemsNormalized, (function(t, r) {
                    return [t.headerTextChunk ? n("span", {
                        key: r,
                        class: e.$style.headerText
                    }, [e._v(e._s(t.headerTextChunk))]) : e.$prismic.hasUrl(t.headerInlineImage) ? n("span", {
                        key: r,
                        class: e.$style.headerInlineImageWrapper,
                        style: {
                            "--image-ratio": String(t.imageRatio)
                        }
                    }, [n("BaseImage", {
                        attrs: {
                            image: t.headerInlineImage,
                            critical: e.n < 2,
                            sizes: {
                                all: "calc(1.2em * var(--image-ratio))"
                            }
                        }
                    })], 1) : e._e()]
                }))], 2), e.$prismic.hasRichText(e.content) ? n("div", {
                    directives: [{
                        name: "rich-text",
                        rawName: "v-rich-text"
                    }],
                    class: e.$style.content,
                    domProps: {
                        innerHTML: e._s(e.content)
                    }
                }) : e._e()])])])
            }), [], !1, (function(e) {
                this.$style = l.default.locals || l.default
            }), null, null);
            t.default = component.exports
        }
    }
]);