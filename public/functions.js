

function add_to_cart(id)
{
  var key = "";
  if (id == 1) {
    key = "Hawaiian";
  } if (id == 2) {
    key = "Margarita";
  } if (id == 3) {
    key = "Pepperoni";
  }
  var x = window.localStorage.getItem(key);
  x = x * 1 + 1;
  window.localStorage.setItem(key, x);
  alert("Thank you!");
  show_cart();
  
}

function show_cart()
  { var str = "";
    var str2 = "";
    var totalprice = 0;
    for (var i = 0; i < localStorage.length; i++)
    {
        if (localStorage.key(i) == "Hawaiian") {
        var firstprice = localStorage.getItem(localStorage.key(i)) * 400;
        totalprice += firstprice;
      } if (localStorage.key(i) == "Margarita") {
        var secondprice = localStorage.getItem(localStorage.key(i)) * 350;
        totalprice += secondprice;
      } if (localStorage.key(i) == "Pepperoni") {
        var thirdprice = localStorage.getItem(localStorage.key(i)) * 350;
        totalprice += thirdprice;
      }
      window.localStorage.setItem("Price", totalprice);
      if (localStorage.key(i) != "Price") {
      str += "<tr><td>" + localStorage.key(i) + "</td><td>" + localStorage.getItem(localStorage.key(i)) + "<td></tr><br>";
      str2 += localStorage.key(i) + ": " + localStorage.getItem(localStorage.key(i)) + "; ";
    }
  }
  document.getElementById("demo").innerHTML = str;
  document.getElementById("price").innerHTML = totalprice + " ₽";
  $('#ordersprice').val(totalprice + " ₽");
  $('#ordersorder').val(str2);
  
  }

  function clearBasket() {
    window.localStorage.clear();
    alert("Your cart is empty");
    window.location.reload();
    return false;
  }
  function clearBasket2() {
    window.localStorage.clear();
  }