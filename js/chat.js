/*******
Original project by Adrian Zumbrunnen used as a basis for this chat bot.
**/

var _createClass = function() { //bulk create classes/functions
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }
        return function(t, n, i) {
            return n && e(t.prototype, n), i && e(t, i), t
        }
    }(),
    Uxchat = function() {
        function e() {
            this.chat = new Chat(c, {
                targetNode: ".talk", //html target to write to document
                authors: a  //array of available authors

            }), this.listEl = document.querySelector(".cui__list"),
                    this.effectsEl = document.querySelector(".effects"),
                    this.chat.registerBubbleType("link", LinkBubble),
                    this.chat.on("respond", this.handleResponse.bind(this)),
                    this.chat.say(c[0]);
                }
        return _createClass(e, [
            {
            key: "createNotification",
            /*
            * =====Create Notification=====
            *
            * This function spawns a bubble that animates into the middle of the chat for extra information.
            * Right now this is used for when users ask a question of the interface and information
            * is provided not part of the script currently being explored.
            */

            value: function(content) {
                n = document.createElement("li");
                n.className = "test"; //add a class to the element TODO: remove test class names
                var i = document.createElement("div");
                i.className = "test__bubble", i.innerHTML = content, //add a class to the div, as well as the content passed to this function TODO: remove test class name
                        n.appendChild(i), this.listEl.appendChild(n),
                        window.getComputedStyle(i).opacity, i.classList.add("test__bubble--animate"); //animate the bubble. TODO: remove test class names
                this.chat.scrollIntoView(); //scroll the page down to accommodate the new bubble.
            }
        }, {
        key: "createCard",
        /*
        *
        * =====Create Stage Directions=====
        *
        * Functionally identical to creating a notification, but this is differentiated by the use and styling.
        * This creates a notification as above, but for stage directions in the play. For example, the first line in Macbeth is setting the scene of the witches and
        * says "A desert place. Thunder and lightning rumble. Enter three witches". These pieces of text are not suited for the notifications, as I wish to keep
        * what is extra information, and what is part of the story separate.
        *
        */
        value: function(content) {
            n = document.createElement("li");
            n.className = "stage";
            var i = document.createElement("div");
            console.log(content);

            i.className = "stage__bubble", i.innerHTML = content,
                    n.appendChild(i), this.listEl.appendChild(n),
                    window.getComputedStyle(i).opacity, i.classList.add("stage__bubble--animate");
            this.chat.scrollIntoView();
        }
    },{
            key: "handleResponse",
            /*
            *
            * =====Handle Response=====
            *
            * This is called when any response is entered into the program.
            * This tracks what path a user is on, and therefore any conditional logic takes place in this method (see the below createNotification's depending on
            * what path a user is on).
            *
            * At the end of this method is a (currently) empty method for handling text entry using a text bubbleType. At present, this is not used, but getting
            * the text entry and working with it is extremely easy. An old version of this code has some early functions for saving the text entry into cache and
            * using it later.
            */
            value: function(e) {




              console.log("Current Path: " + e.currentPath);
              console.log("Path: " + e.path);

                var t = this,
                    n = e.path.match(/^[0-9]*/);

                    if (e.path == "maleDev"){

                      this.chat.addMessageSet({
                        path: "male",
                        messages: [{
                            author: "bot",
                            type: "text",
                            text: "So you want me to be a male. Great!"
                        }, {
                            author: "empty",
                            type: "text",
                            text: "A male embryo has one <strong>X</strong> chromosome and one <strong>Y</strong> chromosome."
                        },{
                            author: "empty",
                            type: "text",
                            text: "The Y chromosome has a gene called <strong>SRY</strong> or Sex-determining Region of the Y  Chromosome."
                        },{
                            author: "empty",
                            type: "text",
                            text: "Click or tap my SRY gene to activate it:"
                        }],
                          "choices":[
                            {"path":"afterClick","text":"<img src=\"http://via.placeholder.com/350x350\">","write":false},
                          ]
                    });
                    this.chat.say("male");



                    }


                    if (e.path == "femaleDev"){

                      this.chat.addMessageSet({
                        path: "female",
                        messages: [{
                            author: "bot",
                            type: "text",
                            text: "So you want me to be a female. Great!"
                        }, {
                            author: "empty",
                            type: "text",
                            text: "A female embryo has two X chromosomes, and no Y chromosome."
                        },{
                            author: "empty",
                            type: "text",
                            text: "No Y chromosome means that I don't have an SRY gene."
                        },{
                            author: "empty",
                            type: "text",
                            text: "In absence of SRY, each of my reproductive structures change."
                        },{
                            author: "empty",
                            type: "text",
                            text: "Click or tap on each structure to see how they change:"
                        },{
                            author: "empty",
                            type: "text",
                            text: "<img src=\"http://via.placeholder.com/350x350\">"
                        }],
                          "choices":[
                            {"path":"femaleDone","text":"I'm done, what's next?","write":false},
                          ]
                    });
                    this.chat.say("female");

                    }



                  if (e.path == "start") {
                    //enter special notifications, stage directions, or other extra brnaching conditions based on current path


                  if (e.value) { //if the response is from a text entry
                    if(!n.length) return; //if nothing entered, return

                    //handle text entry here if needed
                    console.log(e.value);

                    var name = e.value.charAt(0).toUpperCase() + e.value.slice(1)

                    this.chat.addMessageSet({
                      path: "meeting",
                      messages: [{
                          author: "bot",
                          type: "text",
                          text: "Hi " + name + ", nice to meet you!"
                      }, {
                          author: "empty",
                          type: "text",
                          text: "I'd love to tell you my name, but I don't have one yet \u{1F614}"
                      }, {
                          author: "empty",
                          type: "text",
                          text: "How old are you, " + name + "?"
                      }],
                        "choices":[
                          {"path":"2","text":"How old are you?","write":true},
                        ]
                  });
                  this.chat.say("meeting");

                    }
                  } if (e.path == "meeting") {
                    //enter special notifications, stage directions, or other extra brnaching conditions based on current path
                  if (e.value) { //if the response is from a text entry
                    if(!n.length) return; //if nothing entered, return

                    //handle text entry here if needed
                    console.log(e.value);
                    var age = e.value;
                    this.chat.addMessageSet({
                      path: "age",
                      messages: [{
                          author: "bot",
                          type: "text",
                          text: age + "? Wow. That's much older than me. I'm only 6 weeks old."
                      }, {
                          author: "empty",
                          type: "text",
                          text: "Are you a boy or a girl?"
                      }],
                        "choices":[
                          {"path":"boy","text":"Boy","write":false},
                          {"path":"girl","text":"Girl","write":false}
                        ]
                  });
                  this.chat.say("age");

                    }

                  }
                }
            },
                      ]), e
    }();


new Uxchat;
