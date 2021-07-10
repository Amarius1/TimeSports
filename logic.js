function getprod(data) {
    var items = [];
    $.each(data.buttons, function(key, val) {
      items.push("<a btn href='"+val.link+"'>" + val.title + "</a>");
    });
    var tb = items.join("");
    $("#ButtonList").append(tb);
    
  }

  $.getJSON('products.json',  getprod(data));
