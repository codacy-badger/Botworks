/*******
Original project by Adrian Zumbrunnen used as a basis for this chat bot.
**/

var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
    },
    _createClass = function() { //class creator
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var s = t[n];
                s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
            }
        }
        return function(t, n, s) {
            return n && e(t.prototype, n), s && e(t, s), t
        }
    }(),
    Chat = function() {
        function e(t) {
            var n = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
            return this.config = Object.assign({},
            e.defaultConfig, n),
                    this.threads = t || [],
                    this.callbacks = {},
                    this.bubbleTypes = {},
                    this.conversation = document.createElement("ol"),
                    this.conversation.className = "cui__list",
                    this.responses = document.createElement("div"),
                    this.responses.className = "cui__responses",
                    this.hostElement = document.querySelector(this.config.targetNode),
                    this.registerBubbleType("text", Bubble),
                    this.hostElement ? (this.hostElement.classList.add("cui", this.config.avatar ? "cui--avatarEnabled" : ""),
                    this.hostElement.appendChild(this.conversation),
                    this.hostElement.appendChild(this.responses), this) : console.warn("Host element not found.")

        }
        return _createClass(e, [{
            key: "addMessageSet",
            value: function(e) {
                this.threads.push(e)
            }
        },{
            key: "scrollIntoView",
            value: function(e) {
                var t = this.hostElement.getBoundingClientRect(),
                    n = t.bottom - window.innerHeight + 600,
                    s = document.querySelector(this.config.scrollNode),
                    a = function i() {
                        n > 0 && (s.scrollTop = s.scrollTop + 8, n -= 8, window.requestAnimationFrame(i))
                    };
                a()
            }
        }, {
            key: "getAbsoluteRect",
            value: function(e) {
                var t = e.getBoundingClientRect(),
                    n = t.top + window.pageYOffset,
                    s = t.left + window.pageXOffset;
                return {
                    x: s,
                    y: n
                }
            }
        }, {
            key: "getRectDelta",
            value: function(e, t) {
                return {
                    x: e.x - t.x,
                    y: e.y - t.y
                }
            }
        }, {
            key: "emit",
            value: function(e, t) {
                var n = this,
                    s = this.callbacks[e];
                s && s.forEach(function(e) {
                    return e.call(n, t)
                })

            }
        }, {
            key: "on",
            value: function(e, t) {
                this.callbacks[e] = this.callbacks[e] || [], this.callbacks[e].push(t)
            }
        }, {
            key: "wipeResponses",
            value: function(e) {
                [].slice.call(this.responses.children).forEach(function(t) {
                    return t !== e ? t.style.transform = "translate3d(0, 100px, 0)" : void 0
                })
            }
          }, {
            key: "animateResponse",
            value: function(e, t, n) {

                var s = this;

                this.appendSpeechBubble(t, !0);
                var a = t.parentNode,
                    i = this.getAbsoluteRect(t);
                a.setAttribute("style", "height: 0");
                var o = this.getAbsoluteRect(e),
                    r = this.getRectDelta(i, o);
                e.style.transform = "translate3d(" + r.x + "px, " + r.y + "px, 0)", e.addEventListener("transitionend", function() {
                    n.call(s, e),
                    e.parentNode.removeChild(e), s.responses.innerHTML = "",
                    a.removeAttribute("style")
                }, !1), this.wipeResponses(e)
            }
        }, {
            key: "createResponseBubble",
            value: function(e) {
                var t = this.createBubble({
                    text: e || "",
                    response: !0
                });
                return t.style.transform = "translate3d(0, 90px, 0)", this.responses.appendChild(t), setTimeout(function() {
                    t.style.transform = "translate3d(0, 0, 0)"
                }, 450), t.addEventListener("transitionend", function() {
                    t.focus()
                }), t
            }
        }, {
            key: "loadResponses",
            value: function() {
                var e = this,
                    t = arguments.length <= 0 || void 0 === arguments[0] ? [] : arguments[0],
                    n = arguments[1];
                t.forEach(function(t, s) {
                    return t.write ? e.writeResponse(n, t.path) : void setTimeout(function() {
                        var s = e.createResponseBubble(t.text);
                        if(t.text == 'Debug:End') {
                            s.style.display = "none";
                        }

                        s.addEventListener("click", function(a) {
                            e.animateResponse(s, s.cloneNode(!0), function() {
                                t.currentPath = n, e.emit("respond", t), e.say(e.getThreadByPath(t.path))
                            })
                        })
                    }, 65 * s)
                })
            }
        }, {
            key: "writeResponse",
            value: function(e, t) {
                var n = this,
                    s = !1,
                    a = this.createResponseBubble();
                a.classList.add("cui__answers__placeholder"), a.setAttribute("contentEditable", !0), a.addEventListener("paste", function(e) {
                    return !1
                }), a.addEventListener("keyup", function(e) {
                    return a.innerText.length ? void a.classList.remove("cui__answers__placeholder") : (a.classList.add("cui__answers__placeholder"), a.focus())
                });
                var i = !1,
                    o = function(s) {
                        a.innerText.length && !i && (i = !0, a.removeAttribute("contentEditable"), n.animateResponse(a, a.cloneNode(!0), function(s) {
                            n.emit("respond", {
                                path: e,
                                value: s.textContent
                            }), n.say(n.getThreadByPath(t))
                        }))
                    };
                a.addEventListener("blur", o.bind(this)), a.addEventListener("keydown", function(e) {
                    13 === e.keyCode && (e.preventDefault(), o())
                }), a.addEventListener("keypress", function(e) {
                    a.innerText.length > n.config.maxCharsResponse && (s || (s = !0, n.say({
                        messages: [{
                            text: n.config.maxCharsResponseReached
                        }]
                    })), e.preventDefault())
                })
            }
        }, {
            key: "animateEntry",
            value: function(e, t) {
                var n = this,
                    s = e.getBoundingClientRect();
                window.getComputedStyle(e).opacity, e.classList.add("cui__bubble--slideIn", "cui__bubble--typing"), setTimeout(function() {
                    e.style.minHeight = s.height + "px", e.style.minWidth = s.width + "px", e.classList.add("cui__bubble--fade"), setTimeout(function(t) {
                        e.classList.remove("cui__bubble--typing"), e.removeAttribute("style"), n.scrollIntoView()
                    }, 350)
                }, t)
            }
        }, {
            key: "appendSpeechBubble",
            value: function(e) {
                var t = document.createElement("li");

                return t.classList.add("cui__list__item"), t.appendChild(e), this.conversation.appendChild(t), e
            }
        }, {
            key: "getWritingTime",
            value: function(e) {
                return Math.max(e.length / this.config.average_cpm * 47.5 * 100, 1250)
            }
        }, {
            key: "getAuthorById",
            value: function(e) {
                return this.config.authors.filter(function(t) {
                    return t.id === e
                })[0] || !1
            }
        }, {
            key: "getThreadByPath",
            value: function(e) {
                return this.threads.filter(function(t) {
                    return t.path === e
                })[0] || !1
            }
        }, {
            key: "registerBubbleType",
            value: function(e, t) {
                this.bubbleTypes[e] = t
            }
        }, {
            key: "createBubble",
            value: function(e) {
                var t = this.bubbleTypes[e.type || "text"];
                if (t) {
                  var x = document.createElement("li");
                  x.classList.add("cui__list__item");
                  var y = new t(e).render();

                      if(y.innerHTML.includes("<img")) {
                        y.classList.add("image_bubble");
                      }

                  if(typeof e.author !== "undefined"){

                        var n = this.getAuthorById(e.author || "default");
                        if(e.author == "empty") {
                          s = '<div class="cui__list__item__author author--left">' + n.name + "</div>";
                          y.insertAdjacentHTML("afterbegin", s), window.getComputedStyle(y).opacity, x.classList.add("cui__list__item--new");
                        } else {
                          s = '<img class="cui__avatar avatar--left" src="' + n.src + '"> <div class="cui__list__item__author author--left">' + n.name + "</div>";
                          y.insertAdjacentHTML("afterbegin", s), window.getComputedStyle(y).opacity, x.classList.add("cui__list__item--new");
                        }
                    }
                  }
                    return y;

                console.log("Bubble type not registered"); //if the bubble stored in 't' is not a valid type somehow.
            }
        }, {
            key: "say",
            value: function(e) {

                var t = this,
                    n = "object" === ("undefined" == typeof e ? "undefined" : _typeof(e)) ? e : this.getThreadByPath(e),
                    s = (n.groupThread ? n.groupThread[0].messages : n.messages, !1);
                    t.scrollIntoView();
                n.messages.reduce(function(e, a, i) {
                    var o = t.createBubble(a),
                        r = t.getWritingTime(o.textContent),
                        u = 0 === i ? 0 : e,
                        l = s !== a.author;

                    s = a.author, l && i > 0 && (u += t.config.delay_between_authors * (1 + Math.random()));
                    var c = setTimeout(function() {
                        t.appendSpeechBubble(o), t.animateEntry(o, r), i === n.messages.length - 1 && setTimeout(function() {
                            t.loadResponses(n.choices, n.path), t.emit("finish", n.path)
                        }, t.config.delay_between_messages + r)
                    }, u);
                    return t.on("respond", function() {
                        return window.clearTimeout(c)
                    }), u + 1.4 * r
                }, 0)

            }
        }]), e
    }();
Chat.defaultConfig = {
    botName: "default",
    authors: [{
        id: "default",
        name: "Default Bot",
        src: "",
    }],
    avatar: !0,
    targetNode: "body",
    scrollNode: "body",
    average_cpm: 300, //change this value to adjust 'writing' time
    delay_between_authors: 300,
    delay_between_messages: 400
}, Chat.info = {
    name: "Conversational UI Test",
    description: "Test"
};
