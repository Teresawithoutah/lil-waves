// import choo
var choo = require('choo')


// import choo's template helper
var html = require('choo/html')

// import temp
var main = require('./templates/main.js')

// initialize choo
var app = choo()

app.use(function (state, emitter) {
  // initialize state
  state.animals = [
    {type: 'iso', x: 100, y: 50}
  ]

// add animal
emitter.on('addAnimal', function (data) {
  var animals = ['iso', 'dumbo', 'lilhippo','squid','puffy']

  var type = Math.floor(Math.random() * 5)
  var x = data.x
  var y = data.y

  var obj = {type: animals[type], x: x, y: y}
  state.animals.push(obj)

  emitter.emit('render')
})

// remove animal
  emitter.on('removeAnimal', function (i) {
    state.animals.splice(i, 1)
    emitter.emit('render')
  })
})

//route
app.route('/', main)

// start app
app.mount('div')
