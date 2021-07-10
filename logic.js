function getprod(data) {
    
    $.each(data.buttons1, function(key, val) {
      var items = [];
      items.push("<a btn href='"+val.link+"'>" + val.title + "</a>");
      var tb = items.join("");
      $(".ButtonList1").append(items.join(""));
    });

    $.each(data.buttons2, function(key, val) {
        var items = [];
        items.push("<a btn href='"+val.link+"'>" + val.title + "</a>");
        var tb = items.join("");
        $(".ButtonList2").append(items.join(""));
      });
   

    


    
    
  }

  $.getJSON('products.json',  getprod(data));
