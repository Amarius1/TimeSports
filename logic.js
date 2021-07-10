function getprod(data) {
    var items = [];
    data.products.buttons.forEach(function(key, val) {
      items.push("<a class='btn' href='"+val.link+"'>" + val.title + "</a>");
    });
    var tb = items.join("");
    console.log(tb);
    document.getElementById("ButtonList").appendChild(tb)


    
  }


  fetch('products.json').then(response => response.json()).then(data => getprod(data))