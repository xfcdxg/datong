;(function() {
  var reg = function(name, fn) {
    if (window[name]) return
    window[name] = fn
  }

  reg('el', function(selector, container) {
    if (!container) container = document
    return container.querySelector(selector)
  })
  reg('els', function(selector, container) {
    if (!container) container = document
    return container.querySelectorAll(selector)
  })

  reg('bind', function(el, eventName, fn) {
    el.addEventListener(eventName, fn, false)
  })

})()
