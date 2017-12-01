;(function() {
  var reg = function(name, fn) {
    if (window[name]) return
    window[name] = fn
  }

  reg('$', function(selector, container) {
    if (!container) container = document
    return container.querySelector(selector)
  })
  reg('$all', function(selector, container) {
    if (!container) container = document
    return container.querySelectorAll(selector)
  })

  reg('bind', function(el, eventName, fn) {
    el.addEventListener(eventName, fn, false)
  })

})()
