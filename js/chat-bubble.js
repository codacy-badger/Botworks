/*******
Original project by Adrian Zumbrunnen used as a basis for this chat bot.
**/

"use strict";

function _inherits(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
}

var _createClass = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
        }
    }(),
    Bubble = function() {
        function e(t) {
            return this.config = Object.assign({}, {
                response: !1
            }, t), this
        }
        return _createClass(e, [{
            key: "bindEvents",
            value: function() {}
        }, {
            key: "parseTemplate",
            value: function(e) {
                return "<span>" + e.text + "</span>"
            }
        }, {
            key: "render",
            value: function() {
                var e = document.createElement("div");
                return e.classList.add("cui__bubble"), e.classList.toggle("cui__bubble--response", this.config.response), e.innerHTML = this.parseTemplate(this.config), this.bindEvents(e), e
            }
        }]), e
    }(),
    LinkBubble = function(e) {
        function t() {
            Object.getPrototypeOf(t).apply(this, arguments)
        }
        return _inherits(t, e), _createClass(t, [{
            key: "parseTemplate",
            value: function(e) {
                return '<a class="cui__card" target="_blank" href="' + e.href + '"><img src="' + e.src + '">' + e.title + "</a>"
            }
        }]), t
    }(Bubble),
    EmbedBubble = function(e) {
        function t() {
            return Object.getPrototypeOf(t).apply(this, arguments)
        }
        return _inherits(t, e), _createClass(t, [{
            key: "parseTemplate",
            value: function(e) {
                return '<div class="cui__embed">' + e.code + "</div>"
            }
        }]), t
    }(Bubble);
