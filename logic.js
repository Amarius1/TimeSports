function getprod(data) {
    var items = [];
    $.each(data.products, function(key, val) {
      items.push("<a class='btn' href='"+val.link+"'>" + val.link + "</a>");
    });
    var tb = items.join("");
    console.log(tb);
    $("#ButtonList").append(tb);
  }

  $.getJSON('https://github.com/Amarius1/TimeSports/blob/main/data.json',  getprod(data));
