var userName, userAge;
var botui = new BotUI('embryo');

botui.message.add({
  delay: 3000,
  authorImg: true,
  imgSrc: "./img/testAv.jpg",
  loading: true,
  content: "Hi, I'm Mario bot. A virtual version of the real Mario you've seen in course videos. 😀"
}).then(function() {
  botui.message.add({
    delay: 3000,
    loading: true,
    content: "With chatbot Mario, you get all the charm and wit of the video one, but none of the distracting hand movements. 🙌"
  }).then(function() {
    botui.action.button({
      autoHide: false,
      action: [{ // show only one button
          text: 'Tell me more',
          value: 'more'
        },
        { // show only one button
          text: 'Leave me alone!',
          value: 'exit'
        }
      ]
    }).then(function(res) { // will be called when a button is clicked.
      botui.action.hide();
      console.log(res.value);
      if (res.value == 'exit') {
        botui.message.add({
          delay: 3000,
          authorImg: true,
          imgSrc: "./img/testAv.jpg",
          loading: true,
          content: "Okay, we'll chat some other time. Ciao!"
        })
      } else {
        botui.message.add({
          delay: 3000,
          loading: true,
          authorImg: true,
          imgSrc: "./img/testAv.jpg",
          content: "My job is to test your understanding of course content and clarify any concepts that you might be struggling with. In this discussion, I want to find out how much you know about the male reproductive system. Are you ready to get started?"
        }).then(function() {
          botui.action.button({
            action: [{ // show only one button
                text: 'Let\'s go!',
                value: 'start'
              },
              { // show only one button
                text: 'I\'m not ready',
                value: 'exit'
              }
            ]
          }).then(function(res) { // will be called when a button is clicked.
            if (res.value == 'exit') {
              botui.message.add({
                delay: 3000,
                authorImg: true,
                imgSrc: "./img/testAv.jpg",
                loading: true,
                content: "Okay, we'll chat some other time. Ciao!"
              })
            } else {

              botui.message.add({
                delay: 3000,
                loading: true,
                authorImg: true,
                imgSrc: "./img/testAv.jpg",
                content: "Okay, let's start simple. Where precisely are sperm made?"
              }).then(function() {
                botui.action.button({
                  action: [{ // show only one button
                      text: 'The testes. Or testicles - wait, are they the same thing?',
                      value: 'testes'
                    },
                    { // show only one button
                      text: 'The seminiferous tubles, inside the testes',
                      value: 'seminiferious'
                    },
                    {
                      text: 'The epididymis, located in the scrotum',
                      value: 'epididymis'
                    }
                  ]
                }).then(function(res) { // will be called when a button is clicked.

                })

              })
            }
          })
        })

      }
    })
  })
})
