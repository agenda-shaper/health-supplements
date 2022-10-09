(window.webpackJsonp = window.webpackJsonp || []).push([
    [36], {
        439: function(e, t, r) {
            var content = r(443);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [e.i, content, ""]
            ]), content.locals && (e.exports = content.locals);
            (0, r(30).default)("77d7d70c", content, !0, {
                sourceMap: !1
            })
        },
        442: function(e, t, r) {
            "use strict";
            var n = r(439),
                l = r.n(n);
            r.d(t, "default", (function() {
                return l.a
            }))
        },
        443: function(e, t, r) {
            var n = r(29)(!1);
            n.push([e.i, ".starsWrapper_3EuxU{position:relative;width:6.3333333333em;height:1em}.starsWrapper_3EuxU svg{display:block;width:6.3333333333em;max-width:none;height:1em;fill:var(--review-stars-color,#d96535)}.starsEmpty_FucxG svg{fill:var(--review-stars-color-empty,#dae7d4)}.starsFilled_VxPJf{position:absolute;top:0;left:0;overflow:hidden}", ""]), n.locals = {
                starsWrapper: "starsWrapper_3EuxU",
                starsEmpty: "starsEmpty_FucxG",
                starsFilled: "starsFilled_VxPJf"
            }, e.exports = n
        },
        444: function(e, t, r) {
            "use strict";
            r.r(t);
            var n = r(98),
                l = r.n(n),
                o = {
                    props: {
                        starHeight: {
                            type: Number,
                            default: 12
                        },
                        rating: {
                            type: Number,
                            required: !0
                        }
                    },
                    computed: {
                        iconHref: () => `${l.a}#icon-star`,
                        iconEmptyHref: () => `${l.a}#icon-star`,
                        starHeightRem() {
                            return parseFloat(this.starHeight) ? this.starHeight / 10 + "rem" : null
                        },
                        label() {
                            const {
                                rating: e
                            } = this;
                            return this.$interpolateN(this.$store.state.globalData.other.starsAccessibilityLabel, e)
                        },
                        starsWidth() {
                            const {
                                rating: e
                            } = this;
                            return 100 * (e * (12 / 76) + 4 / 76 * Math.floor(e)) + "%"
                        }
                    }
                },
                d = r(442),
                m = r(5);
            var component = Object(m.a)(o, (function() {
                var e = this,
                    t = e.$createElement,
                    r = e._self._c || t;
                return r("div", [r("div", {
                    class: e.$style.starsWrapper,
                    style: {
                        fontSize: e.starHeightRem
                    },
                    attrs: {
                        "aria-label": e.label
                    }
                }, [r("div", {
                    class: e.$style.starsEmpty
                }, [r("svg", {
                    attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 76 12",
                        preserveAspectRatio: "xMinYMin meet"
                    }
                }, e._l(5, (function(i) {
                    return r("use", {
                        key: i,
                        attrs: {
                            href: e.iconEmptyHref,
                            x: 16 * (i - 1),
                            width: "12"
                        }
                    })
                })), 0)]), r("div", {
                    class: e.$style.starsFilled,
                    style: {
                        width: e.starsWidth
                    }
                }, [r("svg", {
                    attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 76 12",
                        preserveAspectRatio: "xMinYMin meet"
                    }
                }, e._l(5, (function(i) {
                    return r("use", {
                        key: i,
                        attrs: {
                            href: e.iconHref,
                            x: 16 * (i - 1),
                            width: "12"
                        }
                    })
                })), 0)])])])
            }), [], !1, (function(e) {
                this.$style = d.default.locals || d.default
            }), null, null);
            t.default = component.exports
        },
        561: function(e, t, r) {
            var content = r(803);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [e.i, content, ""]
            ]), content.locals && (e.exports = content.locals);
            (0, r(30).default)("13bd5cd4", content, !0, {
                sourceMap: !1
            })
        },
        802: function(e, t, r) {
            "use strict";
            var n = r(561),
                l = r.n(n);
            r.d(t, "default", (function() {
                return l.a
            }))
        },
        803: function(e, t, r) {
            var n = r(29)(!1);
            n.push([e.i, ".reviewsFullWidth_TJvHh{padding:3.5rem 0;background-color:#f9f9f9}@media(min-width:48em){.reviewsFullWidth_TJvHh{padding:6.5rem 0}}.preheader_TBcG\\+{font-family:Lausanne,Arial,sans-serif;font-size:1.4rem;font-weight:600;line-height:2.5rem;letter-spacing:.1rem;white-space:pre-line}@media(min-width:64em){.preheader_TBcG\\+{font-family:Lausanne,Arial,sans-serif;font-size:1.8rem;font-weight:600;line-height:2.5rem;letter-spacing:.1rem;margin-bottom:.5rem;text-align:center}}.headerLine_H-aHN{position:relative;margin-bottom:3rem}@media(min-width:48em){.headerLine_H-aHN{min-height:5.5rem}}@media(min-width:64em){.headerLine_H-aHN{margin-bottom:5.5rem;text-align:center}}.header_oR5YY{white-space:pre-line}@media(min-width:64em){.header_oR5YY.__mobile_cGjEM{display:none}}@media(max-width:63.99em){.header_oR5YY.__desktop_IHjEm{display:none}}.carouselAndArrowWrapper_TYO0F{position:relative}.buttonWrapper_-cWi3{position:absolute;display:none}@media(min-width:48em){.buttonWrapper_-cWi3{top:10.4rem;right:-4rem}}@media(min-width:48em)and (max-width:63.99em){.buttonWrapper_-cWi3{display:block}}@media(min-width:75em){.buttonWrapper_-cWi3{top:12.2rem;right:clamp(-4rem,50vw - 70rem,1rem)}}@media(min-width:64em){.buttonWrapper_-cWi3.__showLarge_gQTkr{display:block}}.button_M0Odg{display:flex;align-items:center;justify-content:center;width:3.1rem;height:3.1rem;font-size:3.1rem}.sliderContainer_1UhGN{max-width:117rem;margin:0 auto;overflow:hidden}.sliderContainer_1UhGN .shared-carousel-pagination-wrapper{height:5rem;padding:1.5rem 0;background-color:#f9f9f9}@media(min-width:48em){.sliderContainer_1UhGN .shared-carousel-pagination-wrapper{display:none}}.sliderWrapper_t6rKc{margin:0 -1rem}@media(min-width:64em){.sliderWrapper_t6rKc{margin:0 -2.5rem}}.slide_K5Pvj{flex:0 0 auto;width:100%;padding:0 1rem}@media(min-width:64em){.slide_K5Pvj{padding:0 2.5rem}}.reviewContent_DnrTY{margin-top:2rem}.reviewContent_DnrTY p:not(:last-child){margin-bottom:1em}.ratingWrapper_I3OyZ:not(:last-child){margin-bottom:1.4rem}.reviewerName_XRznh{font-family:Lausanne,Arial,sans-serif;font-size:1.4rem;font-weight:300;line-height:1.9rem;letter-spacing:-.008rem;margin-top:1.5rem;white-space:pre-line}", ""]), n.locals = {
                reviewsFullWidth: "reviewsFullWidth_TJvHh",
                preheader: "preheader_TBcG+",
                headerLine: "headerLine_H-aHN",
                header: "header_oR5YY",
                __mobile: "__mobile_cGjEM",
                __desktop: "__desktop_IHjEm",
                carouselAndArrowWrapper: "carouselAndArrowWrapper_TYO0F",
                buttonWrapper: "buttonWrapper_-cWi3",
                __showLarge: "__showLarge_gQTkr",
                button: "button_M0Odg",
                sliderContainer: "sliderContainer_1UhGN",
                sliderWrapper: "sliderWrapper_t6rKc",
                slide: "slide_K5Pvj",
                reviewContent: "reviewContent_DnrTY",
                ratingWrapper: "ratingWrapper_I3OyZ",
                reviewerName: "reviewerName_XRznh"
            }, e.exports = n
        },
        901: function(e, t, r) {
            "use strict";
            r.r(t);
            var n = r(33),
                l = {
                    props: {
                        n: {
                            type: Number,
                            required: !0
                        },
                        items: {
                            type: Array,
                            default: () => []
                        },
                        preheader: {
                            type: String,
                            default: ""
                        },
                        headerMobile: {
                            type: String,
                            default: ""
                        },
                        headerDesktop: {
                            type: String,
                            default: ""
                        },
                        sectionId: {
                            type: String,
                            default: ""
                        }
                    },
                    computed: { ...Object(n.c)({
                            carousels: e => e.globalData.carousels
                        })
                    },
                    methods: {
                        nextSlide() {
                            this.$refs.slider.next()
                        }
                    }
                },
                o = r(802),
                d = r(5);
            var component = Object(d.a)(l, (function() {
                var e, t = this,
                    r = t.$createElement,
                    n = t._self._c || r;
                return n("BaseSpacing", {
                    attrs: {
                        "inner-space": "",
                        "no-padding": ""
                    }
                }, [n("div", {
                    class: t.$style.reviewsFullWidth
                }, [n("BaseContainer", {
                    attrs: {
                        id: t.sectionId
                    }
                }, [t.preheader ? n("p", {
                    class: t.$style.preheader
                }, [t._v(t._s(t.preheader))]) : t._e(), t.headerMobile || t.headerDesktop ? n("div", {
                    class: t.$style.headerLine
                }, [t.headerMobile ? n("h2", {
                    class: [t.$style.header, t.$style.__mobile]
                }, [t._v(t._s(t.headerMobile || t.headerDesktop))]) : t._e(), t.headerDesktop ? n("h2", {
                    class: [t.$style.header, t.$style.__desktop]
                }, [t._v(t._s(t.headerDesktop || t.headerMobile))]) : t._e()]) : t._e(), t.items.length > 0 ? n("div", {
                    class: t.$style.carouselAndArrowWrapper
                }, [t.items.length > 2 ? n("div", {
                    class: [t.$style.buttonWrapper, (e = {}, e[t.$style.__showLarge] = t.items.length > 3, e)]
                }, [n("BaseLink", {
                    class: t.$style.button,
                    attrs: {
                        "aria-label": t.carousels.accessibilityLabelNavigationItemNext,
                        "data-shared-carousel-focus": "true"
                    },
                    on: {
                        click: t.nextSlide
                    }
                }, [n("BaseIcon", {
                    attrs: {
                        name: "arrow-slim-right"
                    }
                })], 1)], 1) : t._e(), n("div", {
                    class: t.$style.sliderContainer
                }, [n("div", {
                    class: t.$style.sliderWrapper
                }, [n("SharedCarousel", {
                    ref: "slider",
                    attrs: {
                        slides: t.items,
                        "per-page": {
                            all: 1,
                            medium: 2,
                            large: 3
                        },
                        "visible-pagination": "",
                        loop: ""
                    },
                    scopedSlots: t._u([{
                        key: "slide",
                        fn: function(e) {
                            var r = e.slide;
                            return [n("div", {
                                class: t.$style.slide
                            }, [n("BaseImage", {
                                attrs: {
                                    image: r.image,
                                    sizes: {
                                        all: "calc(100vw - 6rem)",
                                        medium: "calc(50vw - 7.5rem)",
                                        large: "calc((100vw - 23rem) / 3)",
                                        xlarge: "35.7rem"
                                    },
                                    critical: t.n < 2,
                                    aspect: 1.3
                                }
                            }), n("div", {
                                class: t.$style.reviewContent
                            }, [r.starRatings ? n("div", {
                                class: t.$style.ratingWrapper
                            }, [n("SharedReviewStars", {
                                attrs: {
                                    "star-height": 13,
                                    rating: Number(r.starRatings)
                                }
                            })], 1) : t._e(), n("blockquote", {
                                class: t.$style.quote
                            }, [t.$prismic.hasRichText(r.review) ? n("div", {
                                directives: [{
                                    name: "rich-text",
                                    rawName: "v-rich-text"
                                }],
                                class: t.$style.quote,
                                domProps: {
                                    innerHTML: t._s(r.review)
                                }
                            }) : t._e(), n("footer", {
                                class: t.$style.quoteFooter
                            }, [r.name ? n("p", {
                                class: t.$style.reviewerName
                            }, [t._v(" " + t._s(r.name) + " ")]) : t._e()])])])], 1)]
                        }
                    }], null, !1, 1090152828)
                })], 1)])]) : t._e()])], 1)])
            }), [], !1, (function(e) {
                this.$style = o.default.locals || o.default
            }), null, null);
            t.default = component.exports;
            installComponents(component, {
                SharedReviewStars: r(444).default,
                SharedCarousel: r(448).default
            })
        }
    }
]);