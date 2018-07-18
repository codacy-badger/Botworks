var currentPath = "default";
var botui = new BotUI('bot');
var prevAuthor, currentAuthor;
var defaultImage = "./img/testAv.jpg"; //default author image, can override in Say();
var defaultAuthor = "bot.works";

//construction of say() method
function say(x, index) {
  if (x.paths[currentPath] != undefined) { //if the chosen path exists, do this... see:[0]
    if (index <= x.paths[currentPath].messages.length - 1) {
      var message = x.paths[currentPath].messages[index];
      if (message.bot == true) {
        currentAuthor = "bot";
        console.log("previousAuthor: " + prevAuthor + ", current: " + currentAuthor);
        var typingTime = message.text.length * 15;
        typingTime *= Math.random() * 1.5 + 0.5; //is this the best way?
        botui.message.add({
          delay: typingTime,
          authorImg: prevAuthor != currentAuthor, //if author is same as previous, false
          author: defaultAuthor,
          imgSrc: defaultImage,
          loading: true,
          content: message.text //text from the JSON
        })
        setTimeout(function() {
          index++;
          prevAuthor = currentAuthor;
          say(x, index);
        }, typingTime);
      } else { //TODO: add handlers for text entry as well as buttons
        currentAuthor = "human"
        botui.action.button({
          action: message.choices
        }).then(function(res) { // will be called when a button is clicked.
          botui.action.hide();
          console.log(res.value)
          index = 0;
          currentPath = res.value;
          prevAuthor = currentAuthor;
          say(x, index);
        })
      }
    }
  } else { //[0] ...else if the path doesn't exist, display an error
    console.error("The chosen path has not been defined in script.js - check your JSON structure")
    botui.message.add({
      delay: 3000,
      authorImg: true,
      imgSrc: "./img/testAv.jpg",
      loading: true,
      content: "There's been a problem - you shouldn't be seeing this message. Let us know if you're seeing this, it may mean the path you have defined for this action doesn't exist."
    })
  }
}
//END say()

say(c, 0); //say() method, calling stored JSON var
