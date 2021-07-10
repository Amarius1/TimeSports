function getprod(data) {
    
    $.each(data.buttons, function(key, val) {
      var items = [];
      items.push("<a btn href='"+val.link+"'>" + val.title + "</a>");
      var tb = items.join("");
      $(".ButtonList").append(items.join(""));
    });

    $.each(data.buttons2, function(key, val) {
        var items = [];
        items.push("<a btn href='"+val.link+"'>" + val.title + "</a>");
        var tb = items.join("");
        $(".ButtonList").append(items.join(""));
      });
   

    


    
    
  }

  $.getJSON('products.json',  getprod(data));
