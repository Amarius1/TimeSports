function getprod(data) {
    var items = [];
    $.each(data.buttons, function(key, val) {
      items.push("<p>" + val.description + "</p>");  
      items.push("<a btn href='"+val.link+"'>" + val.title + "</a>");
    });
    $("#ButtonList_24/7").append(items.join(""));

    var items2 = [];
    $.each(data.buttons2, function(key, val) {
      items2.push("<p>" + val.description + "</p>");  
      items2.push("<a btn href='"+val.link+"'>" + val.title + "</a>");
    });
    $("#ButtonList_LiveEvents").append(items.join(""));
    
  }

  $.getJSON('products.json',  getprod(data));
