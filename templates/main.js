/// import choo's template helper
var html = require('choo/html')

// import template
var animal = require('./animal.js')

// export module
module.exports = function (state,emit) {
  // create html template
  return html`
    <div class="container">
      <div class="grass">
          <div class="box">
<div class="tabber">
    <img src="assets/h.png" width="611px;" />
</dv>
        <img src="/assets/wave.gif" onclick=${add}/>
        ${state.animals.map(animalMap)}
      </div>
    </div>
    <div class="controls">
      <ul class="filters">
      <li> <a href="https://www.instagram.com/katiejets/">made for my love - katie 🎉</a></li>
    </ul>
</div>

    </div>
  ` 
  // map function
  function animalMap (obj, i) {
    return animal(remove, obj, i)
  }
  
 function add (e) {
  var x = e.offsetX - 20
  var y = e.offsetY - 10

   emit('addAnimal', {x: x, y: y})
  }

  // remove animal from state
  function remove (e) {
    var index = e.target.id
    emit('removeAnimal', index)
  }
  
}

