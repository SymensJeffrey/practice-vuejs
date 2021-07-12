/* global Vue */
var app = new Vue({
  el: "#app",
  data: function () {
    return {
      message: "Hello from JavaScript!",
      animals: "animals"
    };
  },
});

var app2 = new Vue({
  el: '#app-2',
  data: {
    todos: [
      { text: 'dog' },
      { text: 'cat' },
      { text: 'fish' }
    ]
  }
});

var app5 = new Vue({
  el: '#app-5',
  data: {
    message: 'hello world'
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('');
    }
  }
});

var app6 = new Vue({
  el: '#app-6',
  data: {
    message: 'Hello Vue!'
  }
});