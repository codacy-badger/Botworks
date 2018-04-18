var currentPath = "default";
var botui = new BotUI('bot');

function say(x, index) {
  if (x.paths[currentPath] != undefined) {
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
      } else {
        botui.action.button({
          autoHide: false,
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
  } else {
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
