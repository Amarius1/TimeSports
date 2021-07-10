function getprod(data) {
    var items = [];
    $.each(data.products, function(key, val) {
      items.push("<a class='btn' href='"+val.link+"'>" + val.link + "</a>");
    });
    var tb = items.join("");
    console.log(tb);
    $("#ButtonList").append(tb);
  }

  $.getJSON('products.json',getprod);
  getprod(data);// remove for real call