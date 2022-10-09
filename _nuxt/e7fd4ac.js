(window.webpackJsonp = window.webpackJsonp || []).push([
    [55], {
        528: function(e, t, n) {
            var content = n(737);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [e.i, content, ""]
            ]), content.locals && (e.exports = content.locals);
            (0, n(30).default)("0c34ec94", content, !0, {
                sourceMap: !1
            })
        },
        736: function(e, t, n) {
            "use strict";
            var r = n(528),
                l = n.n(r);
            n.d(t, "default", (function() {
                return l.a
            }))
        },
        737: function(e, t, n) {
            var r = n(29)(!1);
            r.push([e.i, '@media(min-width:64em){.mainContainer_um3w4.__mobile_oqDpe{display:none}}@media(max-width:63.99em){.mainContainer_um3w4.__desktop_TXCs3{display:none}}.layers_kMxEg{display:flex}.layer_D4VVw{position:relative;flex:0 0 auto;width:100%;margin-right:-100%}.layer_D4VVw.__background_kGi3J{overflow:hidden}.layer_D4VVw.__content_cqAsb{position:relative;z-index:1;display:flex;width:100%;padding:2rem 0;text-align:center}.imageSpacer_0JpiV.__typeBased_q4EvR{--gyg-spacer-normalized-initial:0%;--gyg-spacer-normalized-all:var(--gyg-spacer-all,var(--gyg-spacer-normalized-initial));--gyg-spacer-normalized-medium:var(--gyg-spacer-medium,var(--gyg-spacer-normalized-all));--gyg-spacer-normalized-large:var(--gyg-spacer-large,var(--gyg-spacer-normalized-medium));padding-bottom:var(--gyg-spacer-normalized-all)}@media(min-width:48em){.imageSpacer_0JpiV.__typeBased_q4EvR{padding-bottom:var(--gyg-spacer-normalized-medium)}}@media(min-width:64em){.imageSpacer_0JpiV.__typeBased_q4EvR{padding-bottom:var(--gyg-spacer-normalized-large)}}.imageSpacer_0JpiV.__typeFixed_Z6u2F{height:var(--gyg-height-all)}@media(min-width:48em){.imageSpacer_0JpiV.__typeFixed_Z6u2F{height:var(--gyg-height-medium)}}@media(min-width:64em){.imageSpacer_0JpiV.__typeFixed_Z6u2F{height:var(--gyg-height-large)}}.contentWrapper_\\+HUtG{display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%}.heading_R0kSd{font-family:TimesNow,"Times New Roman",serif;font-size:4rem;font-weight:400;line-height:4rem;letter-spacing:-.023rem;text-align:center}.heading_R0kSd:not(:last-child){margin-bottom:1.2rem}@media(min-width:48em){.heading_R0kSd:not(:last-child){margin-bottom:2rem}}.contentInner_E5t6s{font-family:Lausanne,Arial,sans-serif;font-size:1.9rem;font-weight:300;line-height:2.5rem;letter-spacing:-.01rem}.contentInner_E5t6s:not(:last-child){margin-bottom:2.5rem}@media(min-width:48em){.contentInner_E5t6s:not(:last-child){margin-bottom:2.5rem}}', ""]), r.locals = {
                mainContainer: "mainContainer_um3w4",
                __mobile: "__mobile_oqDpe",
                __desktop: "__desktop_TXCs3",
                layers: "layers_kMxEg",
                layer: "layer_D4VVw",
                __background: "__background_kGi3J",
                __content: "__content_cqAsb",
                imageSpacer: "imageSpacer_0JpiV",
                __typeBased: "__typeBased_q4EvR",
                __typeFixed: "__typeFixed_Z6u2F",
                contentWrapper: "contentWrapper_+HUtG",
                heading: "heading_R0kSd",
                contentInner: "contentInner_E5t6s"
            }, e.exports = r
        },
        876: function(e, t, n) {
            "use strict";
            n.r(t);
            n(14);
            const r = e => e / 10 + "rem",
                l = (e, t) => {
                    const [, n, l, o] = /\((\d+)\/(\d+)\/(\d+)\)/.exec(t);
                    return {
                        [`--gyg-${e}-all`]: r(n),
                        [`--gyg-${e}-medium`]: r(l),
                        [`--gyg-${e}-large`]: r(o)
                    }
                };
            var o = {
                    inheritAttrs: !1,
                    props: {
                        heading: {
                            type: String,
                            default: ""
                        },
                        subText: {
                            type: String,
                            default: ""
                        },
                        buttonText: {
                            type: String,
                            default: ""
                        },
                        desktopBackgroundImage: {
                            type: Object,
                            default: () => ({})
                        },
                        mobileBackgroundImage: {
                            type: Object,
                            default: () => ({})
                        },
                        buttonLink: {
                            type: Object,
                            default: () => ({})
                        },
                        n: {
                            type: Number,
                            default: 0
                        },
                        nType: {
                            type: Number,
                            default: 0
                        },
                        height: {
                            type: String,
                            required: !0
                        },
                        view: {
                            type: String,
                            required: !0
                        }
                    },
                    computed: {
                        displayCondition() {
                            const {
                                view: view
                            } = this;
                            return "Hide on Desktop, Show on Mobile" === view ? this.$style.__mobile : "Show on Desktop, Hide on Mobile" === view ? this.$style.__desktop : ""
                        },
                        baseImages() {
                            return Object.fromEntries([
                                ["all", this.mobileBackgroundImage],
                                ["large", this.desktopBackgroundImage]
                            ].filter((e => {
                                let [, image] = e;
                                return null == image ? void 0 : image.url
                            })).map((e => {
                                let [t, image] = e;
                                return [t, {
                                    image: image,
                                    aspectRatio: image.width / image.height
                                }]
                            })))
                        },
                        images() {
                            const {
                                baseImages: e
                            } = this;
                            return ["all", "large"].map((t => [t, e[t]])).filter((e => {
                                let [, t] = e;
                                return t
                            })).map(((e, t) => {
                                let [n, r] = e;
                                return [0 === t ? "all" : n, r]
                            }))
                        },
                        spacers() {
                            return Object.fromEntries(this.images.map((e => {
                                let [t, n] = e;
                                return [`--gyg-spacer-${t}`, 1 / n.aspectRatio * 100 + "%"]
                            })))
                        },
                        heightNormalized() {
                            const {
                                height: e
                            } = this;
                            return "Based on Images & Content" === e ? {
                                class: this.$style.__typeBased,
                                style: this.spacers
                            } : e.startsWith("Fixed ") ? {
                                class: this.$style.__typeFixed,
                                style: l("height", e)
                            } : null
                        }
                    }
                },
                d = n(736),
                m = n(5);
            var component = Object(m.a)(o, (function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("BaseSpacing", {
                    attrs: {
                        "inner-space": "",
                        "no-padding": ""
                    }
                }, [n("div", {
                    class: [e.$style.mainContainer, e.displayCondition]
                }, [n("div", {
                    class: e.$style.layers
                }, [n("div", {
                    class: [e.$style.layer, e.$style.__background]
                }, [n("div", {
                    class: [e.$style.imageSpacer, e.heightNormalized.class],
                    style: e.heightNormalized.style
                }), n("BaseImage", {
                    attrs: {
                        image: e.mobileBackgroundImage,
                        sizes: "100vw",
                        images: {
                            large: e.desktopBackgroundImage
                        },
                        critical: e.n < 2,
                        fit: ""
                    }
                })], 1), n("div", {
                    class: [e.$style.layer, e.$style.__content]
                }, [n("BaseContainer", [n("div", {
                    class: e.$style.contentWrapper
                }, [e.heading ? n("div", {
                    class: e.$style.heading,
                    domProps: {
                        textContent: e._s(e.heading)
                    }
                }) : e._e(), e.subText ? n("p", {
                    class: e.$style.contentInner
                }, [e._v(" " + e._s(e.subText) + " ")]) : e._e(), e.buttonLink && e.buttonLink.url ? n("BaseButtonPill", {
                    attrs: {
                        "data-tracking-id": "get-your-greens-" + e.nType + "-cta",
                        target: e.buttonLink.target,
                        smart: e.buttonLink.url
                    }
                }, [e._v(" " + e._s(e.buttonText) + " ")]) : e._e()], 1)])], 1)])])])
            }), [], !1, (function(e) {
                this.$style = d.default.locals || d.default
            }), null, null);
            t.default = component.exports
        }
    }
]);