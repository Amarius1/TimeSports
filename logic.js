function getprod(data) {
    var items = [];
    $.each(data.buttons, function(key, val) { 
      items.push("<a btn href='"+val.link+"'>" + val.title + "</a>");
    });
    $("#ButtonList_24/7").append(items.join(""));

   
  }

  $.getJSON('products.json',  getprod(data));
