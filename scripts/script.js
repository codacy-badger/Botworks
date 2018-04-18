var c = {
  "paths": {
    "default": {
      "messages": [{
          "text": "Hi there! I'm <strong>Astronomy.bot</strong>. To demonstrate how decision trees work, we're going to play a game. Pick a planet from our solar system, and I'll try to guess which one it is!",
          "authorImg": true,
          "bot": true
        },
        {
          "choices": [{
              "text": 'I\'ve picked my planet',
              "value": 'play'
            },
            {
              "text": 'What\'s this about?',
              "value": 'about'
            }
          ],
          "bot": false
        },
      ]
    },
    "about": {
      "messages": [{
          "text": "Decision trees! Y'see, I'm a pretty basic bot, but I respond to your answers to my questions.",
          "authorImg": true,
          "bot": true
        },
        {
          "text": "Based on your answers, I make decisions to eliminate what planets in our solar system you <em>couldn\'t possibly</em> be thinking of.",
          "authorImg": false,
          "bot": true
        },
        {
          "text": "This binary choice leads me down a different path on the decision tree, where I ask another question which leads me down another path where I ask -- Uh, you get the idea. Making these decisions based on your answers lead me to deducing the planet you've chosen. Got it?",
          "authorImg": false,
          "bot": true
        },
        {
          "choices": [{
              "text": 'Got it, let\'s go!',
              "value": 'play'
            },
            {
              "text": 'No, can you explain more?',
              "value": 'about_more'
            }
          ],
          "bot": false
        },
      ]
    },
    "about_more": {
      "messages": [{
          "text": "There isn't much more I can explain without us going through the game, but each question you answer eliminates half of my options for your chosen planet.",
          "authorImg": true,
          "bot": true
        },
        {
          "text": "As each question halves the number of possibilies, I very quickly come down to only two remaining options, then I ask one final question to determine your planet.",
          "authorImg": false,
          "bot": true
        },
        {
          "text": "The best way to see how this works is to play.",
          "authorImg": false,
          "bot": true
        },
        {
          "choices": [{
            "text": 'Got it, let\'s go!',
            "value": 'play'
          }],
          "bot": false
        },
      ]
    },
    "play": {
      "messages": [{
          "text": "Awesome! Now, remember your planet and its attributes.",
          "authorImg": true,
          "bot": true
        },
        {
          "text": "I\'ll be asking questions about it to figure out which you chose.",
          "authorImg": false,
          "bot": true
        },
        {
          "text": "Let's kick things off with this: Is your planet rocky or gaseous?",
          "authorImg": false,
          "bot": true
        },
        {
          "choices": [{
              "text": 'My planet is rocky',
              "value": 'rocky'
            },
            {
              "text": 'It\'s gaseous',
              "value": 'gas'
            }
          ],
          "bot": false
        },
      ]
    },
    "play-again": {
      "messages": [{
          "text": "Again? I'm so excited! Pick another planet and we'll go.",
          "authorImg": true,
          "bot": true
        },
        {
          "text": "As usual, I'll be asking questions about it to figure out which you chose.",
          "authorImg": false,
          "bot": true
        },
        {
          "text": "You know the drill: Is your planet rocky or gaseous?",
          "authorImg": false,
          "bot": true
        },
        {
          "choices": [{
              "text": 'My planet is rocky',
              "value": 'rocky'
            },
            {
              "text": 'It\'s gaseous',
              "value": 'gas'
            }
          ],
          "bot": false
        },
      ]
    },
    "rocky": {
      "messages": [{
          "text": "Is your planet very, very hot?",
          "authorImg": true,
          "bot": true
        },
        {
          "choices": [{
              "text": 'Yes',
              "value": 'hot'
            },
            {
              "text": 'No',
              "value": 'cold'
            }
          ],
          "bot": false
        },
      ]
    },
    "hot": {
      "messages": [{
          "text": "Does your planet have a thick atmosphere?",
          "authorImg": true,
          "bot": true
        },
        {
          "choices": [{
              "text": 'Very thick',
              "value": 'hot-thick-atmos'
            },
            {
              "text": 'No',
              "value": 'hot-no-atmos'
            }
          ],
          "bot": false
        },
      ]
    },
    "hot-thick-atmos": {
      "messages": [{
          "text": "Your planet was Venus!",
          "authorImg": true,
          "bot": true
        },
        {
          "choices": [{
              "text": 'Let\'s do this again!',
              "value": 'play-again'
            },
            {
              "text": 'Thanks, I\'m done for now',
              "value": 'exit'
            }
          ],
          "bot": false
        },
      ]
    },
    "hot-no-atmos": {
      "messages": [{
          "text": "Your planet was Mercury!",
          "authorImg": true,
          "bot": true
        },
        {
          "choices": [{
              "text": 'Let\'s do this again!',
              "value": 'play-again'
            },
            {
              "text": 'Thanks, I\'m done for now',
              "value": 'exit'
            }
          ],
          "bot": false
        },
      ]
    },
    "cold": {
      "messages": [{
          "text": "Is your planet red?",
          "authorImg": true,
          "bot": true
        },
        {
          "choices": [{
              "text": 'My planet is red',
              "value": 'mars'
            },
            {
              "text": 'Nope',
              "value": 'cold-notMars'
            }
          ],
          "bot": false
        },
      ]
    },
    "mars": {
      "messages": [{
          "text": "Your planet was Mars!",
          "authorImg": true,
          "bot": true
        },
        {
          "choices": [{
              "text": 'Let\'s do this again!',
              "value": 'play-again'
            },
            {
              "text": 'Thanks, I\'m done for now',
              "value": 'exit'
            }
          ],
          "bot": false
        },
      ]
    },
    "cold-notMars": {
      "messages": [{
          "text": "Have humans ever visited or been on your planet?",
          "authorImg": true,
          "bot": true
        },
        {
          "choices": [{
              "text": 'Yes',
              "value": 'humans'
            },
            {
              "text": 'No',
              "value": 'no-humans'
            }
          ],
          "bot": false
        },
      ]
    },
    "humans": {
      "messages": [{
          "text": "Your planet was Earth. Hey, I know that place! That's us!",
          "authorImg": true,
          "bot": true
        },
        {
          "choices": [{
              "text": 'Let\'s do this again!',
              "value": 'play-again'
            },
            {
              "text": 'Thanks, I\'m done for now',
              "value": 'exit'
            }
          ],
          "bot": false
        },
      ]
    },
    "no-humans": {
      "messages": [{
          "text": "<pre>ERR8011::Planet Not Found</pre>",
          "authorImg": true,
          "bot": true
        },
        {
          "text": "Oh. I see what you're doing.",
          "authorImg": false,
          "bot": true
        },
        {
          "text": "In 2006, Pluto was reclassified to a 'dwarf planet', making it not a 'real' planet..",
          "authorImg": false,
          "bot": true
        },

        {
          "choices": [{
              "text": 'Sorry, let\'s try again',
              "value": 'play-again'
            },
            {
              "text": 'Hah! I\'m done for now',
              "value": 'exit'
            }
          ],
          "bot": false
        },
      ]
    },

    "gas": {
      "messages": [{
          "text": "Gaseous? That helps narrow it down. Does your gassy planet have a big red spot?",
          "authorImg": true,
          "bot": true
        },
        {
          "choices": [{
              "text": 'Yep',
              "value": 'jupiter'
            },
            {
              "text": 'No',
              "value": 'no-spot'
            }
          ],
          "bot": false
        },
      ]
    },
    "jupiter": {
      "messages": [{
          "text": "Your planet is Jupiter!",
          "authorImg": true,
          "bot": true
        },
        {
          "choices": [{
              "text": 'Let\'s do this again!',
              "value": 'play-again'
            },
            {
              "text": 'Thanks, I\'m done for now',
              "value": 'exit'
            }
          ],
          "bot": false
        },
      ]
    },
    "no-spot": {
      "messages": [{
          "text": "Is your planet famous for its many beautiful rings?",
          "authorImg": true,
          "bot": true
        },
        {
          "choices": [{
              "text": 'Yes',
              "value": 'saturn'
            },
            {
              "text": 'No',
              "value": 'no-rings'
            }
          ],
          "bot": false
        },
      ]
    },
    "saturn": {
      "messages": [{
          "text": "Your planet is Saturn!",
          "authorImg": true,
          "bot": true
        },
        {
          "choices": [{
              "text": 'Let\'s do this again!',
              "value": 'play-again'
            },
            {
              "text": 'Thanks, I\'m done for now',
              "value": 'exit'
            }
          ],
          "bot": false
        },
      ]
    },
    "no-rings": {
      "messages": [{
          "text": "Is your planet blue-ish?",
          "authorImg": true,
          "bot": true
        },
        {
          "choices": [{
              "text": 'Yes',
              "value": 'blue'
            },
            {
              "text": 'No',
              "value": 'not-blue'
            }
          ],
          "bot": false
        },
      ]
    },
    "not-blue": {
      "messages": [{
          "text": "<pre>ERR::TRICK</pre> No?! That doesn't sound right. Are you trying to mess with me? The decisions I've made so far lead me to think you've picked either Neptune or Uranus, both of which are blue.",
          "authorImg": true,
          "bot": true
        },
        {
          "choices": [{
              "text": 'Sorry, my planet *is* actually blue',
              "value": 'blue'
            },
            {
              "text": 'Whoops, let\'s start over',
              "value": 'play-again'
            }
          ],
          "bot": false
        },
      ]
    },
    "blue": {
      "messages": [{
          "text": "Does your blue gas giant have a ring?",
          "authorImg": true,
          "bot": true
        },
        {
          "choices": [{
              "text": 'Yes',
              "value": 'uranus'
            },
            {
              "text": 'No',
              "value": 'neptune'
            }
          ],
          "bot": false
        },
      ]
    },
    "uranus": {
      "messages": [{
          "text": "Your planet was Uranus!",
          "authorImg": true,
          "bot": true
        },
        {
          "choices": [{
              "text": 'Let\'s play again!',
              "value": 'play-again'
            },
            {
              "text": 'Thanks, I\'m done for now',
              "value": 'exit'
            }
          ],
          "bot": false
        },
      ]
    },
    "neptune": {
      "messages": [{
          "text": "Your planet was Neptune!",
          "authorImg": true,
          "bot": true
        },
        {
          "choices": [{
              "text": 'Let\'s play again!',
              "value": 'play-again'
            },
            {
              "text": 'Thanks, I\'m done for now',
              "value": 'exit'
            }
          ],
          "bot": false
        },
      ]
    },
    "exit": {
      "messages": [{
        "text": "That was fun! I can't wait to play again!",
        "authorImg": true,
        "bot": true
      }, ]
    },
  }
}
