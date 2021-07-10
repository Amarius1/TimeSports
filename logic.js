function getprod(data) {
    var items = [];
    $.each(data.buttons, function(key, val) {
      items.push("<a class='btn' href='"+val.link+"'>" + val.title + "</a>");
    });
    var tb = items.join("");
    console.log(tb);
    $("#ButtonList").append(tb);


    
  }

  $.getJSON('products.json',  getprod(data));
