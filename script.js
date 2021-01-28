document.addEventListener("DOMContentLoaded", function () {
  setInterval(function(){
    let headers = document.getElementsByClassName('o3w64lxj');
    for (var i = 0; i < headers.length; i++) {
      headers[i].innerHTML = headers[i].innerHTML.replace('Pokes', 'Simps');
    }

    let bodies = document.getElementsByClassName('ni8dbmo4');
    for (var i = 0; i < bodies.length; i++) {
      bodies[i].innerHTML = bodies[i].innerHTML.replace('poked', 'simped for');
      bodies[i].innerHTML = bodies[i].innerHTML.replace('Poke', 'Simp');
    }

    let searchBars = document.getElementsByClassName('rv4hoivh');
    for (var i = 0; i < searchBars.length; i++) {
      if (searchBars[i].placeholder == 'Search for friends to poke') {
        searchBars[i].placeholder = 'Search for friends to simp';
      }
    }
  }, 1000);
});
