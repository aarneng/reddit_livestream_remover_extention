(function main() {
  function nth_parent(el, n) {
    for (let i = 0; i < n; i++) el = el.parentElement
    return el
  }
  function listen_to_body_change_and_remove_livestreams() {
    var target = document.body
  
    var observer = new MutationObserver(function(mutations) {
      let els = document.getElementsByTagName('a')
      for (el of els) {
        if (el.href.includes("rpan") && el.className === "") {
          let p = nth_parent(el, 6)
          p.remove()
          console.log("successfully removed livestream!: ", p);
        }
      }
    });
  
    var config = { attributes: true, childList: true, characterData: true }
  
    observer.observe(target, config);
  }

  listen_to_body_change_and_remove_livestreams()
})()