var currentPath = "default";
var botui = new BotUI('bot');

function say(x, index) {
  if (x.paths[currentPath] != undefined) { //if the chosen path exists, do this...
    if (index <= x.paths[currentPath].messages.length - 1) {
      var message = x.paths[currentPath].messages[index];
      if (message.bot == true) {
        botui.message.add({
          delay: 3000,
          authorImg: message.authorImg,
          imgSrc: "./img/testAv.jpg",
          loading: true,
          content: message.text
        })
        setTimeout(function() {
          index++;
          say(x, index);
        }, 3000);
      } else { //TODO: add handlers for text entry as well as buttons
        botui.action.button({
          
          action: message.choices
        }).then(function(res) { // will be called when a button is clicked.
          botui.action.hide();
          console.log(res.value)
          index = 0;
          currentPath = res.value;
          say(x, index);
        })
      }
    }
  } else { //...else if the path doesn't exist, display an error
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

say(c, 0);
