(window.webpackJsonp = window.webpackJsonp || []).push([
    [20], {
        440: function(e, t, n) {
            var content = n(450);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [e.i, content, ""]
            ]), content.locals && (e.exports = content.locals);
            (0, n(30).default)("ff348268", content, !0, {
                sourceMap: !1
            })
        },
        447: function(e, t, n) {
            "use strict";
            n.r(t);
            const r = e => window.getComputedStyle(e).transform;
            var o = {
                    props: {
                        time: {
                            type: [String, Number],
                            default: "0.3"
                        }
                    },
                    methods: {
                        transitionEnd() {
                            this.doneCallback && (this.doneCallback(), this.doneCallback = null);
                            const {
                                content: content
                            } = this.$refs;
                            content && (content.style.height = "", content.style.overflow = "")
                        },
                        enter(e, t) {
                            const {
                                content: content
                            } = this.$refs;
                            this.direction = "OPEN", content.style.height = "0", content.style.overflow = "hidden", r(content), this.doneCallback = t, content.scrollHeight > 0 ? content.style.height = `${content.scrollHeight}px` : this.transitionEnd()
                        },
                        leave(e, t) {
                            const {
                                content: content
                            } = this.$refs;
                            this.direction = "CLOSE", content.style.height = `${content.scrollHeight}px`, r(content), content.style.height = "0", content.style.overflow = "hidden", this.doneCallback = t
                        }
                    }
                },
                l = n(449),
                d = n(5);
            var component = Object(d.a)(o, (function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", {
                    ref: "content",
                    class: e.$style.content,
                    style: {
                        transitionDuration: e.time + "s"
                    },
                    on: {
                        transitionend: e.transitionEnd
                    }
                }, [n("transition", {
                    attrs: {
                        css: !1
                    },
                    on: {
                        enter: e.enter,
                        leave: e.leave
                    }
                }, [e._t("default")], 2)], 1)
            }), [], !1, (function(e) {
                this.$style = l.default.locals || l.default
            }), null, null);
            t.default = component.exports
        },
        449: function(e, t, n) {
            "use strict";
            var r = n(440),
                o = n.n(r);
            n.d(t, "default", (function() {
                return o.a
            }))
        },
        450: function(e, t, n) {
            var r = n(29)(!1);
            r.push([e.i, ".content_oEy4a{height:auto;transition:height 1s}", ""]), r.locals = {
                content: "content_oEy4a"
            }, e.exports = r
        },
        539: function(e, t, n) {
            var content = n(759);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [e.i, content, ""]
            ]), content.locals && (e.exports = content.locals);
            (0, n(30).default)("e38d43e4", content, !0, {
                sourceMap: !1
            })
        },
        540: function(e, t, n) {
            var content = n(761);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [e.i, content, ""]
            ]), content.locals && (e.exports = content.locals);
            (0, n(30).default)("7c64cdbc", content, !0, {
                sourceMap: !1
            })
        },
        541: function(e, t, n) {
            var content = n(763);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [e.i, content, ""]
            ]), content.locals && (e.exports = content.locals);
            (0, n(30).default)("50f5a458", content, !0, {
                sourceMap: !1
            })
        },
        542: function(e, t, n) {
            var content = n(765);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [e.i, content, ""]
            ]), content.locals && (e.exports = content.locals);
            (0, n(30).default)("29eb53f6", content, !0, {
                sourceMap: !1
            })
        },
        758: function(e, t, n) {
            "use strict";
            var r = n(539),
                o = n.n(r);
            n.d(t, "default", (function() {
                return o.a
            }))
        },
        759: function(e, t, n) {
            var r = n(29)(!1);
            r.push([e.i, ".benefits_jeCVv{position:relative;display:flex;margin:1.4rem 0 2.9rem;list-style:none}@media(min-width:64em){.benefits_jeCVv{margin:2rem 0 0}}.benefit_T6coH{display:block;width:3.6rem;height:3.6rem;margin-left:.9rem;background-color:#fff;border:1px solid #002f30;border-radius:50%}@media(min-width:64em){.benefit_T6coH{width:5rem;height:5rem;margin-left:1.2rem}}.benefit_T6coH:first-child{margin-left:0}.benefit_T6coH.__isApplicable_NyToe{background-color:#dae7d4}.benefitLink_OuoUX{position:relative;display:flex;align-items:center;justify-content:center;width:100%;height:100%;cursor:pointer}.benefitImageWrapper_23D4Y{position:relative;width:2rem;height:2rem}@media(min-width:64em){.benefitImageWrapper_23D4Y{width:3rem;height:3rem}}.closingX_ej2Ub{position:absolute;top:2rem;right:2rem;font-size:1.2rem;color:#2f7d39}.benefitPreview_Gg4u4{position:absolute;bottom:5.5rem;left:0;max-width:33.5rem;padding:4rem 5rem 3.3rem;color:#fff;text-align:center;background-color:#002f30;border:.2rem solid #002f30}@media(min-width:64em){.benefitPreview_Gg4u4{bottom:6.7rem;padding:3.3rem 5rem}}.benefitPreview_Gg4u4.__notApplicable_TDMw0{color:#002f30;background-color:#fff;border-color:#002f30}.benefitPreview_Gg4u4.__notApplicable_TDMw0 .closingX_ej2Ub{color:#002f30}.benefitName_FHtaI{font-weight:600;line-height:2.5rem;letter-spacing:.1rem}.benefitDescription_Ppyqh,.benefitName_FHtaI{font-family:Lausanne,Arial,sans-serif;font-size:1.4rem}.benefitDescription_Ppyqh{font-weight:300;line-height:1.9rem;letter-spacing:-.008rem;margin-top:.6rem}", ""]), r.locals = {
                benefits: "benefits_jeCVv",
                benefit: "benefit_T6coH",
                __isApplicable: "__isApplicable_NyToe",
                benefitLink: "benefitLink_OuoUX",
                benefitImageWrapper: "benefitImageWrapper_23D4Y",
                closingX: "closingX_ej2Ub",
                benefitPreview: "benefitPreview_Gg4u4",
                __notApplicable: "__notApplicable_TDMw0",
                benefitName: "benefitName_FHtaI",
                benefitDescription: "benefitDescription_Ppyqh"
            }, e.exports = r
        },
        760: function(e, t, n) {
            "use strict";
            var r = n(540),
                o = n.n(r);
            n.d(t, "default", (function() {
                return o.a
            }))
        },
        761: function(e, t, n) {
            var r = n(29)(!1);
            r.push([e.i, '.description_O7em8{font-family:TimesNow,"Times New Roman",serif;font-size:3.2rem;font-weight:400;line-height:3.4rem;letter-spacing:-.018rem}@media(min-width:48em){.description_O7em8{font-family:TimesNow,"Times New Roman",serif;font-size:5.4rem;font-weight:400;line-height:5.5rem;letter-spacing:-.1rem}}@media(max-width:63.99em){.description_O7em8{margin-top:.5rem}}', ""]), r.locals = {
                description: "description_O7em8"
            }, e.exports = r
        },
        762: function(e, t, n) {
            "use strict";
            var r = n(541),
                o = n.n(r);
            n.d(t, "default", (function() {
                return o.a
            }))
        },
        763: function(e, t, n) {
            var r = n(29)(!1);
            r.push([e.i, '@media(min-width:64em){.mobileOnly_7rGRQ{display:none}}.innerContainer_zzllV{max-width:120rem;margin-right:auto;margin-left:auto}@media(min-width:64em){.categorySelect_SQWwq{display:none}}.categoryList_pm45b{display:none}@media(min-width:64em){.categoryList_pm45b{position:relative;top:-1.5rem;display:flex;flex-wrap:wrap;justify-content:space-between;list-style:none}}.categoryItem_sFcXL{font-family:Lausanne,Arial,sans-serif;font-size:2.5rem;font-weight:600;line-height:2.5rem;letter-spacing:-.01rem;display:block;padding:1.1rem 2.5rem 1.3rem;margin-top:1.5rem;text-decoration:none;border:.1rem solid #002f30;border-radius:4rem}.categoryItem_sFcXL.__active_aDA\\+G{background-color:#dae7d4}.ingredientsAndInfo_XwP1-{position:relative;display:block}@media(min-width:64em){.ingredientsAndInfo_XwP1-{display:flex;margin-top:6rem}}.ingredients_jhK5x{margin-top:3rem}@media(min-width:64em){.ingredients_jhK5x{position:absolute;top:0;bottom:0;display:flex;flex-direction:column;align-items:flex-end;width:18.5rem;padding-top:.2rem;padding-right:2rem;padding-left:.2rem;margin-top:.3rem;overflow-y:auto;scrollbar-width:thin;scrollbar-color:#002f30 #dae7d4}.ingredients_jhK5x::-webkit-scrollbar{width:.3rem}.ingredients_jhK5x::-webkit-scrollbar-track{background-image:url("data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAABCAIAAACZnPOkAAAAEElEQVR4AWP4Dwb106dDGABtAA2ikIQAEwAAAABJRU5ErkJggg==");background-repeat:repeat-y;background-position:50%;background-size:.5rem .1rem}.ingredients_jhK5x::-webkit-scrollbar-thumb{background-color:#002f30;border-radius:.15rem}}.ingredient_KRjxT{position:relative;display:block;padding:0;border-top:.1rem solid #002f30}@media(min-width:64em){.ingredient_KRjxT{max-width:100%;padding:.05rem 0 0;text-align:right;border:0}}.ingredient_KRjxT:last-child{border-bottom:.1rem solid #002f30}@media(min-width:64em){.ingredient_KRjxT:last-child{border-bottom:0}}@media(min-width:64em){.ingredient_KRjxT.__active_aDA\\+G{font-weight:700;color:#2f7d39;text-decoration:underline}}.ingredientNameContainer_T89NG{display:flex;align-items:center;justify-content:space-between;width:100%;padding:1.4rem 0 1.1rem;text-decoration:none}@media(min-width:64em){.ingredientNameContainer_T89NG{font-family:Lausanne,Arial,sans-serif;font-size:1.4rem;font-weight:300;line-height:1.9rem;letter-spacing:-.008rem;display:block;padding:0;font-weight:inherit}}.ingredientName_jTLJE{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.accordionIndicator_EJXqO{margin-right:.3rem;font-size:.9rem;font-weight:400}@media(min-width:64em){.accordionIndicator_EJXqO{display:none}}.descriptionsOuter_f-uLB{display:none}@media(min-width:64em){.descriptionsOuter_f-uLB{position:relative;display:block;width:calc(100% - 23rem);min-height:35.5rem;margin-left:23rem}}.descriptionsInner_HdCgG{display:flex;transition:height .3s}.description_pEjxe{flex:0 0 auto;width:100%;margin-right:-100%}.descriptionInner_IAUvb{padding-bottom:1rem}', ""]), r.locals = {
                mobileOnly: "mobileOnly_7rGRQ",
                innerContainer: "innerContainer_zzllV",
                categorySelect: "categorySelect_SQWwq",
                categoryList: "categoryList_pm45b",
                categoryItem: "categoryItem_sFcXL",
                __active: "__active_aDA+G",
                ingredientsAndInfo: "ingredientsAndInfo_XwP1-",
                ingredients: "ingredients_jhK5x",
                ingredient: "ingredient_KRjxT",
                ingredientNameContainer: "ingredientNameContainer_T89NG",
                ingredientName: "ingredientName_jTLJE",
                accordionIndicator: "accordionIndicator_EJXqO",
                descriptionsOuter: "descriptionsOuter_f-uLB",
                descriptionsInner: "descriptionsInner_HdCgG",
                description: "description_pEjxe",
                descriptionInner: "descriptionInner_IAUvb"
            }, e.exports = r
        },
        764: function(e, t, n) {
            "use strict";
            var r = n(542),
                o = n.n(r);
            n.d(t, "default", (function() {
                return o.a
            }))
        },
        765: function(e, t, n) {
            var r = n(29)(!1);
            r.push([e.i, ".container_pDfpT{position:relative;z-index:1}.currentLabel_8khHo{display:flex;justify-content:space-between;width:100%;overflow:hidden;text-decoration:none;background-color:#dae7d4;border:.1rem solid #002f30;border-radius:2rem}.currentLabel_8khHo.__isOpen_KIr4Q{background-color:#fff;border-bottom-right-radius:0;border-bottom-left-radius:0}.downIcon_XPJcz{align-self:center;margin-left:.5rem;font-size:.6em;color:inherit}.dropdown_296Hx{position:absolute;top:100%;right:0;left:0;overflow:hidden;color:#002f30;list-style:none;background-color:#fff}.option_FKdGS{position:relative;display:block;overflow:hidden;cursor:pointer;-webkit-user-select:none;user-select:none;border:.1rem solid #002f30;border-top:none}.option_FKdGS:last-child{border-bottom-right-radius:2rem;border-bottom-left-radius:2rem}.value_69ubH{font-family:Lausanne,Arial,sans-serif;font-size:1.7rem;font-weight:600;line-height:2.5rem;letter-spacing:-.01rem;position:relative;display:flex;justify-content:space-between;width:100%;padding:.7rem 2.5rem;background:#fff;border-radius:inherit}.option_FKdGS.__active_fNqfG .value_69ubH,:hover>.value_69ubH{background-color:rgba(218,231,212,.5)}.option_FKdGS.__checked_anXcV .value_69ubH,.value_69ubH.__checked_anXcV{background-color:#dae7d4}.currentLabel_8khHo.__isOpen_KIr4Q .value_69ubH{background-color:#fff}.valueInner_HJJFL{flex:0 1 auto;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.indicator_t49en{position:relative;top:.1rem;align-self:center;padding-left:1rem;font-size:1rem}", ""]), r.locals = {
                container: "container_pDfpT",
                currentLabel: "currentLabel_8khHo",
                __isOpen: "__isOpen_KIr4Q",
                downIcon: "downIcon_XPJcz",
                dropdown: "dropdown_296Hx",
                option: "option_FKdGS",
                value: "value_69ubH",
                __active: "__active_fNqfG",
                __checked: "__checked_anXcV",
                valueInner: "valueInner_HJJFL",
                indicator: "indicator_t49en"
            }, e.exports = r
        },
        846: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = {
                    props: {
                        id: {
                            type: String,
                            required: !0
                        },
                        value: {
                            type: String,
                            default: ""
                        },
                        list: {
                            type: Array,
                            required: !0
                        },
                        labelKey: {
                            type: String,
                            default: "title"
                        },
                        valueKey: {
                            type: String,
                            default: "value"
                        }
                    },
                    data: () => ({
                        isOpen: !1,
                        blurAllowed: !0,
                        activeElementIndex: -1
                    }),
                    computed: {
                        optionsNormalized() {
                            const {
                                labelKey: e,
                                valueKey: t
                            } = this;
                            return this.list.map((option => "object" == typeof option ? {
                                label: option[e],
                                value: option[t]
                            } : {
                                label: option,
                                value: option
                            }))
                        },
                        selectedOption() {
                            const {
                                value: e
                            } = this;
                            return this.optionsNormalized.find((option => option.value === e))
                        },
                        selectedLabel() {
                            return this.selectedOption.label
                        },
                        selectedValue() {
                            return this.selectedOption.value
                        }
                    },
                    watch: {
                        isOpen(e) {
                            if (e) {
                                const {
                                    value: e
                                } = this, t = this.optionsNormalized.findIndex((t => t.value === e));
                                this.activeElementIndex = -1 !== t ? t : 0
                            }
                        }
                    },
                    methods: {
                        select(e) {
                            this.$emit("input", e)
                        },
                        selectAndClose(e) {
                            this.select(e), this.closeDropdown()
                        },
                        openDropdown() {
                            this.isOpen = !0, this.$nextTick((() => {
                                this.$refs.options.focus()
                            }))
                        },
                        closeDropdown() {
                            this.isOpen = !1, this.$nextTick((() => {
                                this.$refs.button.focus()
                            }))
                        },
                        toggleDropdown() {
                            this.isOpen ? this.closeDropdown() : this.openDropdown()
                        },
                        activeElementIndexChange(e) {
                            const t = this.activeElementIndex + e;
                            this.activeElementIndex = e > 0 ? t % this.optionsNormalized.length : t < 0 ? this.optionsNormalized.length - 1 : t
                        },
                        focusOut() {
                            requestAnimationFrame((() => {
                                var e;
                                !this.isOpen || null !== (e = this.$el) && void 0 !== e && e.contains(document.activeElement) || (this.isOpen = !1)
                            }))
                        }
                    }
                },
                o = n(764),
                l = n(5);
            var component = Object(l.a)(r, (function() {
                var e, t = this,
                    n = t.$createElement,
                    r = t._self._c || n;
                return t.list && t.list.length ? r("div", {
                    class: t.$style.container,
                    on: {
                        focusout: t.focusOut
                    }
                }, [r("button", {
                    ref: "button",
                    class: [t.$style.currentLabel, (e = {}, e[t.$style.__isOpen] = t.isOpen, e)],
                    attrs: {
                        "aria-haspopup": "listbox",
                        "aria-expanded": String(t.isOpen)
                    },
                    on: {
                        click: t.toggleDropdown
                    }
                }, [r("div", {
                    class: [t.$style.value, t.$style.__checked]
                }, [r("div", {
                    class: t.$style.valueInner
                }, [t._v(t._s(t.selectedLabel))]), r("div", {
                    class: t.$style.indicator
                }, [r("BaseIcon", {
                    attrs: {
                        name: "dropdown"
                    }
                })], 1)])]), t.isOpen ? [r("GlobalEvents", {
                    on: {
                        keydown: [function(e) {
                            return !e.type.indexOf("key") && t._k(e.keyCode, "up", 38, e.key, ["Up", "ArrowUp"]) ? null : (e.preventDefault(), t.activeElementIndexChange(-1))
                        }, function(e) {
                            return !e.type.indexOf("key") && t._k(e.keyCode, "down", 40, e.key, ["Down", "ArrowDown"]) ? null : (e.preventDefault(), t.activeElementIndexChange(1))
                        }, function(e) {
                            return !e.type.indexOf("key") && t._k(e.keyCode, "esc", 27, e.key, ["Esc", "Escape"]) ? null : (e.preventDefault(), t.closeDropdown.apply(null, arguments))
                        }]
                    }
                }), r("ul", {
                    ref: "options",
                    class: t.$style.dropdown,
                    attrs: {
                        tabindex: "-1",
                        role: "listbox",
                        "aria-activedescendant": t.id + "-option-" + t.activeElementIndex
                    },
                    on: {
                        keydown: [function(e) {
                            return !e.type.indexOf("key") && t._k(e.keyCode, "space", 32, e.key, [" ", "Spacebar"]) ? null : (e.preventDefault(), t.selectAndClose(t.optionsNormalized[t.activeElementIndex].value))
                        }, function(e) {
                            return !e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter") ? null : (e.preventDefault(), t.selectAndClose(t.optionsNormalized[t.activeElementIndex].value))
                        }]
                    }
                }, t._l(t.optionsNormalized, (function(option, e) {
                    var n;
                    return r("li", {
                        key: e,
                        class: [t.$style.option, (n = {}, n[t.$style.__active] = t.activeElementIndex === e, n[t.$style.__checked] = option.value === t.value, n)],
                        attrs: {
                            id: t.id + "-option-" + e,
                            role: "option",
                            "aria-selected": String(option.value === t.value)
                        },
                        on: {
                            click: function(e) {
                                return t.selectAndClose(option.value)
                            }
                        }
                    }, [r("div", {
                        class: t.$style.value
                    }, [r("div", {
                        class: t.$style.valueInner
                    }, [t._v(t._s(option.label))])])])
                })), 0)] : t._e()], 2) : t._e()
            }), [], !1, (function(e) {
                this.$style = o.default.locals || o.default
            }), null, null);
            t.default = component.exports
        },
        853: function(e, t, n) {
            "use strict";
            n.r(t);
            n(14);
            var r = n(33),
                o = {
                    props: {
                        n: {
                            type: Number,
                            required: !0
                        },
                        nType: {
                            type: Number,
                            required: !0
                        },
                        benefitItems: {
                            type: Array,
                            default: () => []
                        },
                        ingredient: {
                            type: Object,
                            default: () => {}
                        }
                    },
                    data: () => ({
                        activeBenefitIndex: -1,
                        pinned: !1,
                        blurAllowed: !0
                    }),
                    computed: {
                        ingredientName() {
                            var e;
                            return null === (e = this.ingredient) || void 0 === e ? void 0 : e.name
                        },
                        benefitItemsNormalized() {
                            var e;
                            const t = String(null === (e = this.ingredient) || void 0 === e ? void 0 : e.benefitId).split(",").map((s => s.trim()));
                            return this.benefitItems.map((e => {
                                const n = t.includes(e.id);
                                return { ...e,
                                    isApplicable: n
                                }
                            }))
                        },
                        activeBenefit() {
                            return -1 !== this.activeBenefitIndex ? this.benefitItemsNormalized.find(((e, t) => this.activeBenefitIndex === t)) : null
                        }
                    },
                    methods: {
                        showBenefit(i) {
                            this.activeBenefitIndex = i
                        },
                        hideBenefit() {
                            var e, t, n, r;
                            null === (e = this.$refs[null === (r = this.activeBenefit) || void 0 === r ? void 0 : r.name]) || void 0 === e || null === (t = e[0]) || void 0 === t || null === (n = t.focus) || void 0 === n || n.call(t), this.activeBenefitIndex = -1, this.pinned = !1
                        },
                        mouseEnter(i) {
                            this.pinned || this.showBenefit(i)
                        },
                        mouseLeave() {
                            this.pinned || this.hideBenefit()
                        },
                        toggleBenefit(i) {
                            this.activeBenefitIndex === i ? this.pinned ? (this.activeBenefitIndex = -1, this.pinned = !1) : this.pinned = !0 : (this.activeBenefitIndex = i, this.pinned = !0, this.$nextTick((() => {
                                var e, t, n;
                                null === (e = this.$refs.benefitPreview) || void 0 === e || null === (t = e[0]) || void 0 === t || null === (n = t.focus) || void 0 === n || n.call(t)
                            })))
                        },
                        outsideClick() {
                            -1 !== this.activeBenefitIndex && (this.activeBenefitIndex = -1, this.pinned = !1)
                        },
                        focusOut(e) {
                            requestAnimationFrame((() => {
                                var t, n; - 1 === this.activeBenefitIndex || null !== (t = this.$refs.benefitPreview) && void 0 !== t && null !== (n = t[0]) && void 0 !== n && n.contains(e.relatedTarget) || (this.activeBenefitIndex = -1, this.pinned = !1)
                            }))
                        }
                    }
                },
                l = n(758),
                d = n(5);
            var component = Object(d.a)(o, (function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return e.benefitItemsNormalized.length ? n("div", {
                        ref: "benefits",
                        on: {
                            click: function(e) {
                                e.stopPropagation()
                            }
                        }
                    }, [n("ul", {
                        class: e.$style.benefits
                    }, e._l(e.benefitItemsNormalized, (function(t, r) {
                        var o, l;
                        return n("li", {
                            key: t.id,
                            class: [e.$style.benefit, (o = {}, o[e.$style.__isApplicable] = t.isApplicable, o)]
                        }, [n("button", {
                            ref: t.name,
                            refInFor: !0,
                            class: e.$style.benefitLink,
                            attrs: {
                                "data-tracking-id": "ingredients-v2-" + e.nType + "-ingredient-" + e.ingredientName + "-benefit-" + t.id,
                                "aria-haspopup": "dialog",
                                "aria-disabled": String(!t.isApplicable),
                                "aria-label": t.name.toLowerCase()
                            },
                            on: {
                                click: function(t) {
                                    return e.toggleBenefit(r)
                                },
                                mouseenter: function(t) {
                                    return t.preventDefault(), e.mouseEnter(r)
                                },
                                mouseleave: function(t) {
                                    return t.preventDefault(), e.mouseLeave.apply(null, arguments)
                                }
                            }
                        }, [n("div", {
                            class: e.$style.benefitImageWrapper
                        }, [n("BaseImage", {
                            attrs: {
                                image: t.benefitImage,
                                sizes: {
                                    all: "2rem",
                                    large: "3rem"
                                },
                                critical: e.n < 2,
                                fit: "",
                                contain: ""
                            }
                        })], 1)]), e.activeBenefitIndex === r ? n("div", {
                            ref: "benefitPreview",
                            refInFor: !0,
                            class: [e.$style.benefitPreview, (l = {}, l[e.$style.__notApplicable] = !e.activeBenefit.isApplicable, l)],
                            attrs: {
                                role: "dialog",
                                "aria-modal": "false",
                                tabindex: "0"
                            },
                            on: {
                                focusout: e.focusOut
                            }
                        }, [e.pinned ? n("button", {
                            class: e.$style.closingX,
                            attrs: {
                                "aria-label": e.$store.state.globalData.other.modalCloseAccessibilityLabel,
                                "data-tracking-id": "ingredients-v2-" + e.nType + "-benefit-close"
                            },
                            on: {
                                click: e.hideBenefit
                            }
                        }, [n("BaseIcon", {
                            attrs: {
                                name: "x"
                            }
                        })], 1) : e._e(), n("h4", {
                            class: e.$style.benefitName
                        }, [e._v(e._s(e.activeBenefit.name))]), n("div", {
                            class: e.$style.benefitDescription,
                            domProps: {
                                textContent: e._s(e.activeBenefit.description)
                            }
                        })]) : e._e()])
                    })), 0), e.activeBenefit ? n("GlobalEvents", {
                        attrs: {
                            target: "window"
                        },
                        on: {
                            keydown: function(t) {
                                return !t.type.indexOf("key") && e._k(t.keyCode, "esc", 27, t.key, ["Esc", "Escape"]) ? null : (t.preventDefault(), e.hideBenefit.apply(null, arguments))
                            },
                            click: e.outsideClick
                        }
                    }) : e._e()], 1) : e._e()
                }), [], !1, (function(e) {
                    this.$style = l.default.locals || l.default
                }), null, null),
                c = component.exports,
                f = {
                    components: {
                        IngredientsV2Benefits: c
                    },
                    props: {
                        n: {
                            type: Number,
                            required: !0
                        },
                        nType: {
                            type: Number,
                            required: !0
                        },
                        visible: {
                            type: Boolean,
                            default: !1
                        },
                        ingredient: {
                            type: Object,
                            default: null
                        },
                        benefitItems: {
                            type: Array,
                            default: () => []
                        }
                    }
                },
                m = n(760);
            var h = Object(d.a)(f, (function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("SharedAnimateAppearance", [e.visible ? n("div", {
                        attrs: {
                            "data-ingredient": e.ingredient.name
                        }
                    }, [e.$prismic.hasRichText(e.ingredient.description) ? n("div", {
                        directives: [{
                            name: "rich-text",
                            rawName: "v-rich-text"
                        }],
                        class: e.$style.description,
                        domProps: {
                            innerHTML: e._s(e.ingredient.description)
                        }
                    }) : e._e(), e.benefitItems ? n("IngredientsV2Benefits", {
                        attrs: {
                            n: e.n,
                            "n-type": e.nType,
                            "benefit-items": e.benefitItems,
                            ingredient: e.ingredient
                        }
                    }) : e._e()], 1) : e._e()])
                }), [], !1, (function(e) {
                    this.$style = m.default.locals || m.default
                }), null, null),
                y = h.exports;
            installComponents(h, {
                SharedAnimateAppearance: n(447).default
            });
            const v = Object.freeze({
                INGREDIENT: "ingredient",
                CATEGORY: "category",
                BENEFIT: "benefit"
            });
            var _ = {
                    components: {
                        IngredientsV2Item: y,
                        IngredientsV2Benefits: c
                    },
                    inheritAttrs: !1,
                    props: {
                        n: {
                            type: Number,
                            required: !0
                        },
                        nType: {
                            type: Number,
                            required: !0
                        },
                        items: {
                            type: Array,
                            default: () => []
                        }
                    },
                    data() {
                        return {
                            accordionState: { ...Object.fromEntries(this.getCategoryItems().map((e => [e.id, 0])))
                            },
                            chosenCategoryId: "",
                            isMounted: !1
                        }
                    },
                    computed: { ...Object(r.c)(["screen"]),
                        itemsNormalized() {
                            return this.items.map(((e, t) => ({ ...e,
                                index: t
                            })))
                        },
                        categoryItems() {
                            return this.getCategoryItems()
                        },
                        activeCategoryId() {
                            return this.chosenCategoryId || this.categoryItems[0].id
                        },
                        allIngredients() {
                            return this.itemsNormalized.filter((e => e.type.toLowerCase() === v.INGREDIENT))
                        },
                        activeCategoryIngredients() {
                            return this.allIngredients.filter((e => e.categoryId === this.activeCategoryId))
                        },
                        activeIngredient() {
                            const e = this.accordionState[this.activeCategoryId];
                            return e > -1 ? this.activeCategoryIngredients[e] : null
                        },
                        activeIngredientName() {
                            var e;
                            return null === (e = this.activeIngredient) || void 0 === e ? void 0 : e.name
                        },
                        benefitItems() {
                            return this.items.filter((e => e.type.toLowerCase() === v.BENEFIT))
                        },
                        isMobile() {
                            return !this.screen.large
                        },
                        isMobileDelayed() {
                            return !!this.isMounted && !this.screen.large
                        }
                    },
                    watch: {
                        isMobile(e) {
                            e || (this.accordionState = Object.fromEntries(Object.entries(this.accordionState).map((e => {
                                let [t, n] = e;
                                return [t, -1 === n ? 0 : n]
                            }))))
                        }
                    },
                    mounted() {
                        this.isMounted = !0
                    },
                    methods: {
                        getCategoryItems() {
                            return this.items.filter((e => e.type.toLowerCase() === v.CATEGORY))
                        },
                        getActiveCategoryIngredients() {
                            const e = this.getActiveCategoryId();
                            return this.allIngredients.filter((t => {
                                let {
                                    categoryId: n
                                } = t;
                                return n === e
                            }))
                        },
                        getActiveCategoryId() {
                            return this.chosenCategoryId || this.getCategoryItems()[0].id
                        },
                        selectCategory(e) {
                            this.chosenCategoryId = e, this.$refs[e][0].focus()
                        },
                        prevCategory(e) {
                            const t = (e || this.categoryItems.length) - 1;
                            this.selectCategory(this.categoryItems[t].id)
                        },
                        nextCategory(e) {
                            const t = (e + 1) % this.categoryItems.length;
                            this.selectCategory(this.categoryItems[t].id)
                        },
                        selectIngredient(e, t) {
                            if (this.accordionState[e] === t && this.isMobile) this.accordionState[e] = -1;
                            else {
                                this.accordionState[e] = t;
                                const n = `ingredient-name-${this.getActiveCategoryIngredients()[t].name}`;
                                this.$refs[n][0].focus()
                            }
                        },
                        prevIngredient(e, t) {
                            const n = (t || this.activeCategoryIngredients.length) - 1;
                            this.selectIngredient(e, n)
                        },
                        nextIngredient(e, t) {
                            const n = (t + 1) % this.activeCategoryIngredients.length;
                            this.selectIngredient(e, n)
                        },
                        beforeDescriptionLeave(e) {
                            const {
                                descriptionsInner: t
                            } = this.$refs;
                            t.style.height = `${e.firstElementChild.offsetHeight}px`, t.style.overflow = "hidden"
                        },
                        descriptionEnter(e) {
                            const {
                                descriptionsInner: t
                            } = this.$refs;
                            t.style.height = `${e.firstElementChild.offsetHeight}px`
                        },
                        descriptionAfterEnter() {
                            const {
                                descriptionsInner: e
                            } = this.$refs;
                            e.style.height = "", e.style.overflow = ""
                        }
                    }
                },
                I = n(762);
            var w = Object(d.a)(_, (function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("BaseSpacing", [n("BaseContainer", [n("div", {
                    class: e.$style.innerContainer
                }, [n("div", {
                    class: e.$style.categorySelect
                }, [n("SharedCustomSelect", {
                    attrs: {
                        id: "ingredients-v2-" + e.nType + "-select",
                        list: e.categoryItems,
                        value: e.activeCategoryId,
                        "label-key": "name",
                        "value-key": "id"
                    },
                    on: {
                        input: e.selectCategory
                    }
                })], 1), n("ul", {
                    class: e.$style.categoryList,
                    attrs: {
                        role: "tablist"
                    }
                }, e._l(e.categoryItems, (function(t, r) {
                    var o;
                    return n("li", {
                        key: t.id,
                        ref: t.id,
                        refInFor: !0,
                        class: [e.$style.categoryItem, (o = {}, o[e.$style.__active] = t.id === e.activeCategoryId, o)],
                        attrs: {
                            id: "ingredients-v2-" + e.nType + "-label-for-category-" + t.id,
                            tabindex: t.id === e.activeCategoryId ? 0 : -1,
                            "data-tracking-id": "ingredients-v2-" + e.nType + "-category-" + r + "-" + t.id,
                            role: "tab",
                            "aria-selected": String(t.id === e.activeCategoryId),
                            "aria-controls": "ingredients-v2-" + e.nType + "-category-" + t.id
                        },
                        on: {
                            keydown: [function(t) {
                                return !t.type.indexOf("key") && e._k(t.keyCode, "left", 37, t.key, ["Left", "ArrowLeft"]) && e._k(t.keyCode, "up", 38, t.key, ["Up", "ArrowUp"]) || "button" in t && 0 !== t.button ? null : (t.preventDefault(), e.prevCategory(r))
                            }, function(t) {
                                return !t.type.indexOf("key") && e._k(t.keyCode, "right", 39, t.key, ["Right", "ArrowRight"]) && e._k(t.keyCode, "down", 40, t.key, ["Down", "ArrowDown"]) || "button" in t && 2 !== t.button ? null : (t.preventDefault(), e.nextCategory(r))
                            }],
                            click: function(n) {
                                return n.preventDefault(), e.selectCategory(t.id)
                            }
                        }
                    }, [e._v(" " + e._s(t.name) + " ")])
                })), 0), n("div", {
                    class: e.$style.ingredientsAndInfo,
                    attrs: {
                        id: "ingredients-v2-" + e.nType + "-category-" + e.activeCategoryId,
                        role: e.isMobileDelayed ? null : "tabpanel",
                        "aria-labelledby": "ingredients-v2-" + e.nType + "-label-for-category-" + e.activeCategoryId,
                        tabindex: e.isMobileDelayed ? null : 0
                    }
                }, [n("ul", {
                    class: e.$style.ingredients,
                    attrs: {
                        role: e.isMobileDelayed ? null : "tablist"
                    }
                }, e._l(e.activeCategoryIngredients, (function(t, r) {
                    var o;
                    return n("li", {
                        key: r,
                        ref: "ingredient-name-" + t.name,
                        refInFor: !0,
                        class: [e.$style.ingredient, (o = {}, o[e.$style.__active] = e.accordionState[e.activeCategoryId] === r, o)],
                        attrs: {
                            id: "ingredients-v2-" + e.nType + "-label-for-ingredient-" + t.name,
                            "data-tracking-id": "ingredients-v2-" + e.nType + "-ingredient-" + t.name,
                            tabindex: e.isMobileDelayed ? null : e.accordionState[e.activeCategoryId] === r ? 0 : -1,
                            role: e.isMobileDelayed ? null : "tab",
                            "aria-selected": e.isMobileDelayed ? null : String(e.accordionState[e.activeCategoryId] === r),
                            "aria-expanded": e.isMobileDelayed ? String(e.accordionState[e.activeCategoryId] === r) : null,
                            "aria-controls": "ingredients-v2-" + e.nType + "-ingredient" + (e.isMobileDelayed ? "-mobile" : "") + "-" + t.index
                        },
                        on: {
                            click: function(n) {
                                return e.selectIngredient(t.categoryId, r)
                            },
                            keydown: [function(n) {
                                return !n.type.indexOf("key") && e._k(n.keyCode, "left", 37, n.key, ["Left", "ArrowLeft"]) && e._k(n.keyCode, "up", 38, n.key, ["Up", "ArrowUp"]) || "button" in n && 0 !== n.button ? null : (n.preventDefault(), e.prevIngredient(t.categoryId, r))
                            }, function(n) {
                                return !n.type.indexOf("key") && e._k(n.keyCode, "right", 39, n.key, ["Right", "ArrowRight"]) && e._k(n.keyCode, "down", 40, n.key, ["Down", "ArrowDown"]) || "button" in n && 2 !== n.button ? null : (n.preventDefault(), e.nextIngredient(t.categoryId, r))
                            }]
                        }
                    }, [n("div", {
                        class: e.$style.ingredientNameContainer
                    }, [n("span", {
                        class: e.$style.ingredientName,
                        attrs: {
                            title: t.name
                        }
                    }, [e._v(e._s(t.name))]), n("span", {
                        class: e.$style.accordionIndicator,
                        attrs: {
                            "aria-hidden": "true"
                        }
                    }, [e.accordionState[e.activeCategoryId] === r ? n("BaseIcon", {
                        attrs: {
                            name: "minus-mini-slim"
                        }
                    }) : e._e(), e.accordionState[e.activeCategoryId] !== r ? n("BaseIcon", {
                        attrs: {
                            name: "plus-mini-slim"
                        }
                    }) : e._e()], 1)]), n("div", {
                        class: e.$style.mobileOnly,
                        attrs: {
                            id: "ingredients-v2-" + e.nType + "-ingredient-mobile-" + t.index
                        }
                    }, [n("IngredientsV2Item", {
                        attrs: {
                            n: e.n,
                            "n-type": e.nType,
                            visible: e.accordionState[e.activeCategoryId] === r,
                            ingredient: t,
                            "benefit-items": e.benefitItems
                        }
                    })], 1)])
                })), 0), e.activeIngredient ? n("div", {
                    class: e.$style.descriptionsOuter,
                    attrs: {
                        id: "ingredients-v2-" + e.nType + "-ingredient-" + e.activeIngredient.index,
                        "aria-labelledby": "ingredients-v2-" + e.nType + "-label-for-ingredient-" + e.activeIngredient.name,
                        role: e.isMobileDelayed ? null : "tabpanel",
                        tabindex: e.isMobileDelayed ? null : 0
                    }
                }, [n("div", {
                    ref: "descriptionsInner",
                    class: e.$style.descriptionsInner
                }, [n("transition", {
                    attrs: {
                        name: "fade"
                    },
                    on: {
                        beforeLeave: e.beforeDescriptionLeave,
                        enter: e.descriptionEnter,
                        afterEnter: e.descriptionAfterEnter
                    }
                }, [n("div", {
                    key: e.activeIngredient.name,
                    class: e.$style.description
                }, [n("div", {
                    class: e.$style.descriptionInner
                }, [n("IngredientsV2Item", {
                    attrs: {
                        n: e.n,
                        "n-type": e.nType,
                        visible: !0,
                        ingredient: e.activeIngredient
                    }
                })], 1)])])], 1), n("IngredientsV2Benefits", {
                    attrs: {
                        n: e.n,
                        "n-type": e.nType,
                        "benefit-items": e.benefitItems,
                        ingredient: e.activeIngredient
                    }
                })], 1) : e._e()])])])], 1)
            }), [], !1, (function(e) {
                this.$style = I.default.locals || I.default
            }), null, null);
            t.default = w.exports;
            installComponents(w, {
                SharedCustomSelect: n(846).default
            })
        }
    }
]);