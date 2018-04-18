
var c = {
  "paths": {
    "default": {
      "messages": [{
          "text": "Hello World",
          "authorImg": true,
          "bot": true
        },
        {
          "text": "Another string",
          "authorImg": false,
          "bot": true
        },
        {
          "text": "And one last one",
          "authorImg": false,
          "bot": true
        },
        {
          "choices": [{
              "text": 'Tell me more',
              "value": 'more'
            },
            {
              "text": 'Leave me alone!',
              "value": 'exit'
            }
          ],
          "bot": false
        },
        {
          "text": "This message shouldn't be seen",
          "authorImg": true,
          "bot": true
        }
      ]
    },
    "more": {
      "messages": [{
          "text": "You pressed more!",
          "authorImg": true,
          "bot": true
        },
        {
          "text": "This should continue on based on this path",
          "authorImg": false,
          "bot": true
        }
      ]
    },
    "exit": {
      "messages": [{
          "text": "You pressed exit",
          "authorImg": true,
          "bot": true
        },
        {
          "text": "Rude",
          "authorImg": false,
          "bot": true
        }
      ]
    }
  }
}
