function getprod(data) {
    var items = [];
    $.each(data.buttons, function(key, val) {
      items.push("<a btn href='"+val.link+"'>" + val.title + "</a>");
    });
    var tb = items.join("");
    $("#ButtonList").append(items.join(""));

    

    var items2 = [];
    $.each(data.buttons2, function(key, val) {
      items2.push("<a btn href='"+val.link+"'>" + val.title + "</a>");
    });
    var tb2 = items2.join("");
    $("#ButtonList2").append(items2.join(""));


    
  }

  $.getJSON('products.json',  getprod(data));
