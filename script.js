document.addEventListener("DOMContentLoaded", function () {
  setInterval(function(){

    var html = document.querySelector('html');
    var walker = document.createTreeWalker(html, NodeFilter.SHOW_TEXT);
    var node;
    while (node = walker.nextNode()) {
      node.nodeValue = node.nodeValue.replace('Pokes', 'Simps');
      node.nodeValue = node.nodeValue.replace('poked', 'simped for');
      node.nodeValue = node.nodeValue.replace('Poke', 'Simp');
    }

    let searchBars = document.getElementsByClassName('rv4hoivh');
    for (var i = 0; i < searchBars.length; i++) {
      if (searchBars[i].placeholder == 'Search for friends to poke') {
        searchBars[i].placeholder = 'Search for friends to simp';
      }
    }
  }, 1000);
});
